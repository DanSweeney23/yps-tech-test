export function formatDate(dateStr: string) {
  const date = new Date(dateStr);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  let suffix;
  if (day === 1 || day === 21 || day === 31) suffix = "st";
  else if (day === 2 || day === 22) suffix = "nd";
  else if (day === 3 || day === 23) suffix = "rd";
  else suffix = "th";

  return `${day}${suffix} ${month} ${year}`;
}