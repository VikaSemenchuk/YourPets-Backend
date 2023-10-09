const getFullYears = require("./getFullYears");

const filterNoticesByAge = (noticesList, date) => {
  let newList;

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
