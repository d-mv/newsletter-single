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
    let dateFromDb = new Date();
    if (this.props.timestamp) {
      dateFromDb = new Date(this.props.timestamp);
    }
    let timeToDisplay = `${dateFromDb.getHours()}:${dateFromDb.getMinutes()} am`;
    if (dateFromDb.getHours() > 12) {
      timeToDisplay = `${dateFromDb.getHours() -
        12}:${dateFromDb.getMinutes()} pm`;
    }
    let dateTimeString = `${
      daysOfWeek[dateFromDb.getDay() + 1]
    } ${dateFromDb.getDate()} ${
      months[dateFromDb.getMonth() + 1]
    } at ${timeToDisplay}`;
    if (this.props.pre) {
      dateTimeString = `${this.props.pre} ${dateTimeString}`;
    }
    return <div>{dateTimeString}</div>;
  }
}

export default DateTime;
