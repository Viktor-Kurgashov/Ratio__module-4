// возвращает дату формата 'December 2, 2019'

const months = [
  'January', 'February', 'March',
  'April', 'May', 'Juny',
  'July', 'August', 'September',
  'October', 'November', 'December'
];

const getDateString = (timestamp) => {
  const d = new Date(timestamp);

  return months[d.getMonth()] + ' ' +
    d.getDate() + ', ' +
    d.getFullYear();
};

export default getDateString;