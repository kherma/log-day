export const getDayData = (currentDate: Date) => {
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  return {
    day: day < 10 ? "0" + day : day,
    month: month < 10 ? "0" + month : month,
  };
};
