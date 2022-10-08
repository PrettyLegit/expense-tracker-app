export function getFormattedDate(date) {
  // days of the month are indexed starting at 0.
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
