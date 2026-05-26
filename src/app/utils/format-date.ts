/**
 * Formats a JavaScript Date object into a clean 'MMM DD, YYYY' string (e.g., 'Apr 28, 2026')
 * using a single global formatter instance to optimize performance.
 */
const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
});

export const formatDate = (dateString: string): string =>
  formatter.format(new Date(dateString));
