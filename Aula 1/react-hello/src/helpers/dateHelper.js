export function getAgeFrom(date) {
  if (!date) {
    return "?";
  }
  const [year, month, day] = date.split("-");
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  let birthday = todayYear - parseInt(year, 10);

  if (parseInt(month, 10) > todayMonth) {
    return birthday - 1;
  }
  if (parseInt(month, 10) === todayMonth && parseInt(day, 10) > todayDay) {
    return birthday - 1;
  }
  return birthday;
}
