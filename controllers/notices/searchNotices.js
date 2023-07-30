const Notice = require("../../models/notices/notices");

const searchNotices = async (req, res) => {
  const { name, category } = req.query;
  console.log(name, category);
  try {
    const { page = 1, limit = 4 } = req.query;
    const skip = (page - 1) * limit;
    let paginationString = { category };
    // category
    //   ? (paginationString = { category, name })
    //   : (paginationString = { name });


    // if (category) paginationString = {category}
    // const noticesList = await Notice.find(paginationString, "-createdAT -updatedAT", {
    //     skip,
    //     limit,
    //   });


    const noticesList = await Notice.find({}, "-createdAT -updatedAT", {
        skip,
        limit,
      });
    // console.log("noticesList :>> ", noticesList);

    console.log('name join :>> ', name.split(' '));
      const filteredItems = noticesList.filter((notice) =>
        notice.name.split(' ').includes(name)
      );
    console.log(filteredItems);


    // function checkStringInArrayOfObjects(arr, searchString, property) {
    //     return arr.some(obj => obj[property].split(' ').join('_') && obj[property].split(' ').join('_').includes(searchString));
    //   }
    //   const searchString = name.split(' ').join('_');
    //   const propertyToCheck = "name";
    //   console.log(checkStringInArrayOfObjects(noticesList, searchString, propertyToCheck));



    // console.log('noticesList[11].name :>> ', noticesList[11].name);
    // console.log('name :>> ', name.split(' ').join('_'));

    return res.status(200).json(noticesList);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Ooops... ListContacts" });
  }
};

module.exports = {
  searchNotices,
};
