export function getFormattedDate(date) {
  // days of the month are indexed starting at 0.
  return date.toISOString().slice(0,10);
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
