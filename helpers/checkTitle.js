const checkTitle = (list, title, skip, limit) => {
  let notices = list.filter((item) =>
    item.title.toLowerCase().trim().includes(title.toLowerCase().trim())
  );


  const total = notices.length;
  const endIndex = skip + limit;
  const noticesSlice = notices.slice(skip, endIndex);

  const result = {
    total,
    noticesSlice,
  };

  return result;
};

module.exports = checkTitle



