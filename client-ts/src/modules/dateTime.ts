const months: { [index: number]: string } = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec"
};
const daysOfWeek: { [index: number]: string } = {
  1: "Sun",
  2: "Mon",
  3: "Tue",
  4: "Wed",
  5: "Thu",
  6: "Fri",
  7: "Sat"
};

const dateTime = (props: Date) => {
  let dateFromDb = new Date();
  if (!Object.keys(props).length) {
    dateFromDb = new Date(props);
  }
  let timeToDisplay = `${dateFromDb.getHours()}:${dateFromDb.getMinutes()} am`;
  if (dateFromDb.getHours() > 12) {
    timeToDisplay = `${dateFromDb.getHours() -
      12}:${dateFromDb.getMinutes()} pm`;
  }
  return `${daysOfWeek[dateFromDb.getDay() + 1]} ${dateFromDb.getDate()} ${
    months[dateFromDb.getMonth() + 1]
  } at ${timeToDisplay}`;
};

export default dateTime;
