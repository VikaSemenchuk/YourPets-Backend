const filterOnDate = (date, $match) => {
  let startDate;
  let endDate;
  let endDate2;

  const currentDate = new Date();

  if (date === "1") {
    endDate = new Date();
    endDate.setDate(currentDate.getDate() - 365 / 4);
    startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - 365);

    $match["date"] = {
      $gte: startDate,
      $lt: endDate,
    };

  } else if (date === "2") {
    endDate = new Date();
    endDate.setDate(currentDate.getDate() - 365);

    $match["date"] = {
      $lte: endDate,
    };

  } else if (date === "3") {
    endDate = new Date();
    endDate.setDate(currentDate.getDate() - 365 * 2);

    $match["date"] = {
      $lte: endDate,
    };
    
  } else if (date === "4") {
    endDate2 = new Date();
    endDate2.setDate(currentDate.getDate() - 365 * 2);
    endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() - 365 / 4);
    startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - 365);

    $match["$or"] = [
      { date: { $gte: startDate, $lte: endDate } },
      { date: { $lte: endDate2 } },
    ];
  }
};

module.exports = filterOnDate;
