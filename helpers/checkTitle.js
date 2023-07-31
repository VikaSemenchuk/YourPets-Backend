const checkTitle = (list, title) => {
  const newList = [];

  list.map((item) => {
    const listTitle = item.title.split(" ");

    for (const word of title.split(" ")) {
      if (listTitle.includes(word)) newList.push(item);
    }
  });

  return newList;
}

module.exports = checkTitle;
