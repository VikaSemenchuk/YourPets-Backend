// const getFullYears = require("./getFullYears");
// const { getFullYears } = require("../helpers");

const getFullYears = require("./getFullYears");


const filterNoticesByAge = (noticesList, date) => {
  let newList;
  
  // const getFullYears = (date) => {
  //   const rightDate = date.split("-").reverse().join("-");
  //   const targetDate = new Date(rightDate);
  //   const currentDate = new Date();
  //   const dif = currentDate - targetDate;
  //   const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

  //   return Math.floor(dif / millisecondsInYear);
  // };

  switch (date) {
    case "1":
        newList = noticesList.filter((item) => {
            const result = getFullYears(item.date);
    
            if (result < 1) {
              return item;
            }
          });
      break;
    case "2":
      newList = noticesList.filter((item) => {
        const result = getFullYears(item.date);

        if (result >= 1) {
          return item;
        }
      });
      break;
    case "3":
        newList = noticesList.filter((item) => {
            const result = getFullYears(item.date);
    
            if (result >= 2) {
              return item;
            }
          });
      break;
    case "4":
        newList = noticesList.filter((item) => {
            const result = getFullYears(item.date);
    
            if (result < 1 || result >= 2) {
              return item;
            }
          });
      break;
    default:
      newList = noticesList;
  }
  let total = newList.length
  return {newList, total};
};
module.exports = filterNoticesByAge;
