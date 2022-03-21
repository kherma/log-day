export const convertDateToTime = (date: Date) => {
  const current = new Date().getTime() - date.getTime();
  const started = new Date(current).toISOString().slice(11, 19);
  return started;
};
