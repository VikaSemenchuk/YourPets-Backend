const getFullYears = (date) => {
    const rightDate = date.toString().split("-").reverse().join("-");
    const targetDate = new Date(rightDate);
    const currentDate = new Date();
    const dif = currentDate - targetDate;
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

    return Math.floor(dif / millisecondsInYear);
  };
  
  module.exports = getFullYears
  
  
  