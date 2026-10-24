import { useRef, useState } from "react";
import { FileText, LoaderCircle } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { uiText, type Language } from "@/data/i18n";

interface CVDownloadButtonProps extends Pick<ButtonProps, "className" | "variant" | "size" | "id"> {
  language: Language;
}

export function CVDownloadButton({ language, ...props }: CVDownloadButtonProps) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const pending = useRef(false);
  const text = uiText[language];
  const generating = language === "pt" ? "A gerar PDF…" : "Generating PDF…";
  const failed = language === "pt"
    ? "Não foi possível gerar o CV. Recarrega a página e tenta novamente."
    : "Could not generate the CV. Reload the page and try again.";

  async function handleDownload() {
    if (pending.current) return;
    pending.current = true;
    setBusy(true);
    setError(false);
    try {
      // Load the PDF library only when the user requests a download.
      const { downloadCV } = await import("@/lib/generate-cv");
      downloadCV(language);
    } catch {
      setError(true);
    } finally {
      pending.current = false;
      setBusy(false);
    }
  }

  return (
    <>
      <Button {...props} type="button" disabled={busy} aria-busy={busy} onClick={handleDownload} data-cursor={text.hero.downloadCV}>
        {busy ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> : <FileText className="h-4 w-4" aria-hidden="true" />}
        <span aria-live="polite">{busy ? generating : text.hero.downloadCV}</span>
      </Button>
      {error && <p role="alert" className="max-w-xs text-sm text-red-600 dark:text-red-400">{failed}</p>}
    </>
  );
}
