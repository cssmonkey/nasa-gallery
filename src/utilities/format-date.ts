
export type DateFormat = `${string}-${string}-${string}`;

export const getFormattedDate = (date: Date): DateFormat => {
  let day = `${(date.getDate())}`.padStart(2, '0');
  let month = `${(date.getMonth() + 1)}`.padStart(2, '0');
  let year = date.getFullYear() as unknown as string;

  return `${day}-${month}-${year}`
}

export const getTodaysDate = (): DateFormat => {
  const today = new Date();
  return getFormattedDate(today);
}

