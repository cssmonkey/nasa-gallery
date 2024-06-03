import { parseDate, today, getLocalTimeZone } from '@internationalized/date'


export const getDate = (date?: string) => {
  return date ? parseDate(date) : today(getLocalTimeZone());
}