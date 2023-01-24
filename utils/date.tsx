import {format} from 'date-fns';
import {formatInTimeZone} from 'date-fns-tz';

const MISSING_TIMEZONE = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?$/;

// Some avalanche.org endpoints return dates without timezone information! This method is used to detect and fix them, by assuming they're UTC.
export const fixMalformedISO8601DateString = (date: string) => (MISSING_TIMEZONE.test(date) ? `${date}Z` : date);

// The National Avalanche Center API expects 'YYYY-MM-DD' date-strings in query parameters, and it operates in UTC.
export const apiDateString = (date: Date) => formatInTimeZone(date, 'UTC', 'yyyy-MM-dd');

export const utcDateToLocalTimeString = (date: Date | string | undefined): string => {
  if (date == null) {
    return 'Unknown';
  }
  const d = typeof date === 'string' ? new Date(date) : date;
  return format(d, `EEE, MMM d, yyyy h:mm a`);
};

export const utcDateToLocalDateString = (date: Date | string | undefined): string => {
  if (date == null) {
    return 'Unknown';
  }
  const d = typeof date === 'string' ? new Date(date) : date;
  return format(d, `EEEE, MMMM d, yyyy`);
};
