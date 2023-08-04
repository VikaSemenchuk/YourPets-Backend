const pagination = (notices, skip, limit) => {

  const total = notices.length;
  const endIndex = skip + limit;
  const noticesSlice = notices.slice(skip, endIndex);

  return result = {
    total,
    noticesSlice,
  };
}

module.exports = pagination
