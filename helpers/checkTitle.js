const checkTitle = (list, title) => {
  return notices = list.filter((item) =>
    item.title.toLowerCase().trim().includes(title.toLowerCase().trim())
  );
};

module.exports = checkTitle



