import React from 'react';

const months = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec'
};
const daysOfWeek = {
  1: 'Sun',
  2: 'Mon',
  3: 'Tue',
  4: 'Wed',
  5: 'Thu',
  6: 'Fri',
  7: 'Sat'
};

class DateTime extends React.Component {
  render() {
    let dateToChange = new Date();
    if (this.props.timestamp) {
      dateToChange = new Date(this.props.timestamp);
    }

    const minutes =
      dateToChange.getMinutes() < 10
        ? `0${dateToChange.getMinutes()}`
        : dateToChange.getMinutes();

    const hours =
      dateToChange.getHours() > 12
        ? dateToChange.getHours() - 12
        : dateToChange.getHours();

    let timeToDisplay = `${hours}:${minutes}`;

    if (dateToChange.getHours() > 11) {
      timeToDisplay = `${timeToDisplay} pm`;
    } else {
      timeToDisplay = `${timeToDisplay} am`;
    }

    let dateTimeString = `${
      daysOfWeek[dateToChange.getDay() + 1]
    } ${dateToChange.getDate()} ${
      months[dateToChange.getMonth() + 1]
    } at ${timeToDisplay}`;
    if (this.props.pre) {
      dateTimeString = `${this.props.pre} ${dateTimeString}`;
    }
    return <div>{dateTimeString}</div>;
  }
}

export default DateTime;
