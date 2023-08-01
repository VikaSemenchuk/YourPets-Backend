const checkTitle2 = (list, title, skip, limit) => {
  let notices = list.filter((item) => item.title.includes(title));
  const total = notices.length;
  const endIndex = skip + limit;
  const noticesSlice = notices.slice(skip, endIndex);


  const result = {
    total,
    noticesSlice,
  };

  return result;
};

const checkTitle = (list, title) => {
  return list.filter((item) => item.title.includes(title));
};

module.exports = {
  checkTitle,
  checkTitle2,
};
