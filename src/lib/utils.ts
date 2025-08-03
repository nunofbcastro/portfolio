import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to parse date strings, handling 'Atual' (Present)
function parseDate(dateString: string): Date {
  if (dateString.toLowerCase() === 'atual' || dateString.toLowerCase() === 'present') {
    return new Date(2100, 0, 1); // A far future date for 'Atual' or 'Present'
  }

  const [monthStr, yearStr] = dateString.split(' ');
  const monthMap: { [key: string]: number } = {
    'jan': 0, 'fev': 1, 'mar': 2, 'abr': 3, 'mai': 4, 'jun': 5,
    'jul': 6, 'ago': 7, 'set': 8, 'out': 9, 'nov': 10, 'dez': 11,
    'feb': 1, 'apr': 3, 'may': 4, 'aug': 7, 'sep': 8, 'oct': 9, 'dec': 11,
  };

  const month = monthMap[monthStr.toLowerCase()];
  const year = parseInt(yearStr);

  return new Date(year, month, 1);
}

// Function to sort timeline items by period (most recent first)
export function sortTimelineItems(a: any, b: any) {
  const periodA = a.period.split(' – ')[1] || a.period.split(' – ')[0];
  const periodB = b.period.split(' – ')[1] || b.period.split(' – ')[0];

  const dateA = parseDate(periodA);
  const dateB = parseDate(periodB);

  return dateB.getTime() - dateA.getTime();
}