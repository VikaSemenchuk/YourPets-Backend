const { getNotices } = require("./getNotices");
const { addNotice } = require("./addNotice");
const { getNoticeById } = require("./getNoticeById");
const { searchNotices } = require("./searchNotices");
const { filterNotices } = require("./filterNotices");
const { noticesAddedByUser } = require("./noticesAddedByUser");
const { removeNotice } = require("./removeNotice");
const { getFavorites } = require("./getFavorites");
const { addFavorites } = require("./addFavorites");
const { removeFavorites } = require("./removeFavorites");

module.exports = {
  getNotices,
  addNotice,
  getNoticeById,
  searchNotices,
  filterNotices,
  noticesAddedByUser,
  removeNotice,
  getFavorites,
  addFavorites,
  removeFavorites
};
