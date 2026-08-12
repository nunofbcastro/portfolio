import { GA_ID } from "../data/config";

/**
 * Session Path Tracking
 * Tracks the sequence of pages visited within a GA4 session.
 * 
 * Improvements:
 * - ES6+ syntax for better readability and performance.
 * - Robust cookie parsing for GA4 session IDs (GS1 and GS2 formats).
 * - Automatic tracking of SPA navigations via popstate and history overrides.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    google_tag_data?: {
      consent?: {
        analytics_storage?: "granted" | "denied";
      };
      ics?: {
        entries?: {
          analytics_storage?: {
            update?: boolean;
          };
        };
        usedUpdate?: boolean;
      };
    };
  }
}

const STORAGE_KEYS = {
  LAST_SESSION_ID: "flow_last_ga_session_id",
  POSITION: "flow_position",
  LAST_SENT_KEY: "flow_last_sent_key",
} as const;

/**
 * Safely retrieves a cookie value by name.
 */
const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
};

/**
 * Extracts session ID and number from GA4 measurement cookies.
 * Handles both GS1 (standard) and GS2 (legacy/alternative) formats.
 */
const getGASessionInfo = () => {
  const measurementId = GA_ID.replace("G-", "");
  const cookieName = `_ga_${measurementId}`;
  const cookieValue = getCookie(cookieName);

  if (!cookieValue) return null;

  // Format: GS1.1.<sessionId>.<sessionNumber>...
  if (cookieValue.startsWith("GS1")) {
    const parts = cookieValue.split(".");
    const sessionId = parts[2];
    const sessionNumber = parts[3];
    return sessionId ? { sessionId, sessionNumber } : null;
  }

  // Format: GS2.s<sessionId>.o<sessionNumber>
  if (cookieValue.startsWith("GS2")) {
    const sMatch = cookieValue.match(/s(\d+)/);
    const oMatch = cookieValue.match(/o(\d+)/);
    const sessionId = sMatch ? sMatch[1] : null;
    const sessionNumber = oMatch ? oMatch[1] : null;
    return sessionId ? { sessionId, sessionNumber } : null;
  }

  return null;
};

/**
 * Checks if tracking is allowed based on consent data.
 * Tries to read from GTM's google_tag_data if available.
 */
const isTrackingAllowed = (): boolean => {
  if (typeof window === "undefined") return false;
  
  // Check if Google Analytics is explicitly disabled (e.g. user opted out)
  if ((window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] === true) return false;

  // If google_tag_data is available (from GTM/Gtag), respect the consent settings
  if (window.google_tag_data) {
    const gtd = window.google_tag_data;
    if (gtd.consent?.analytics_storage === "denied") return false;
    
    if (gtd.ics?.entries?.analytics_storage) {
      const entry = gtd.ics.entries.analytics_storage;
      const usedUpdate = !!gtd.ics.usedUpdate;
      return usedUpdate ? entry.update === true : false;
    }
  }

  return true;
};

/**
 * Core tracking logic: identifies position in session and sends gtag event.
 */
const trackSessionPath = (): boolean => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return false;
  if (!isTrackingAllowed()) return false;

  const sessionInfo = getGASessionInfo();
  if (!sessionInfo?.sessionId) return false;

  const currentPath = window.location.pathname + window.location.search;
  const sessionKey = `${sessionInfo.sessionId}|${currentPath}`;

  // Avoid duplicate hits for the same path in the same session (e.g., hash changes if not ignored)
  if (sessionStorage.getItem(STORAGE_KEYS.LAST_SENT_KEY) === sessionKey) {
    return true;
  }

  const lastSessionId = sessionStorage.getItem(STORAGE_KEYS.LAST_SESSION_ID);
  let position = 0;

  if (lastSessionId === sessionInfo.sessionId) {
    position = Number(sessionStorage.getItem(STORAGE_KEYS.POSITION) || "0") + 1;
  }

  sessionStorage.setItem(STORAGE_KEYS.LAST_SESSION_ID, sessionInfo.sessionId);
  sessionStorage.setItem(STORAGE_KEYS.POSITION, String(position));
  sessionStorage.setItem(STORAGE_KEYS.LAST_SENT_KEY, sessionKey);

  window.gtag("event", "session_path", {
    position: position,
    page_path: currentPath,
    gasession: sessionInfo.sessionId,
  });

  return true;
};

/**
 * Initializes the session tracking with retry logic for initial load.
 * Also hooks into history methods for SPA navigation tracking.
 */
export const initSessionTracking = (maxRetries = 8, retryInterval = 250) => {
  if (typeof window === "undefined") return;

  const attemptTrack = (count = 0) => {
    const success = trackSessionPath();
    if (!success && count < maxRetries) {
      setTimeout(() => attemptTrack(count + 1), retryInterval);
    }
  };

  // Run on load, pageshow, and custom event when consent is accepted
  window.addEventListener("load", () => attemptTrack(0));
  window.addEventListener("pageshow", () => attemptTrack(0));
  window.addEventListener("popstate", () => attemptTrack(0));
  document.addEventListener("analytics-loaded", () => attemptTrack(0));

  // Intercept history changes for SPA routing
  const wrap = (fnName: "pushState" | "replaceState") => {
    const original = history[fnName];
    history[fnName] = function (...args) {
      original.apply(this, args);
      attemptTrack(0);
    };
  };

  wrap("pushState");
  wrap("replaceState");
  
  // Immediate attempt if load already happened
  if (document.readyState === "complete") {
    attemptTrack(0);
  }
};
