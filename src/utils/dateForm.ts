export const dateFormat = (date: Date | undefined) => {
  if (!date) return '';

  let dateToString =
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1 < 9
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) +
    '-' +
    (date.getDate() < 9 ? '0' + date.getDate() : date.getDate());

  return dateToString;
};
