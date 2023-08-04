const pagination = (notices, skip, limit) => {

  const total = notices.length;
  const endIndex = skip + limit;
  const noticesSlice = notices.slice(skip, endIndex);

  const result = {
    total,
    noticesSlice,
  };

  return result;

}

module.exports = pagination
