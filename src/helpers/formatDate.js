import moment from 'moment';

export const formatDate = (
  date,
  options = {
    take: 'all',
  },
) => {
  var now = moment(new Date()); //todays date
  var end = moment(date); // another date
  var duration = moment.duration(now.diff(end));
  var days = duration.asDays();
  let day = moment(date).format('DD/MM/YYYY');
  let hour = moment(date).format('HH:mm');
  if (days > 1) {
    return `${day}, ${hour}`;
  } else {
    return moment(date).fromNow();
  }
};
