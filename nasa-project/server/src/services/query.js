// allows any endpoint to make use of pagination
const DEFAULT_PAGE_LIMIT = 0;
const DEFAULT_PAGE_NUMBER = 1;
// function that calculates the skip and limit values
function getPagination(query) {
  const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER;
  const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT; // in case it is string or negative
  const skip = limit * (page - 1);

  return {
    skip,
    limit,
  };
}

module.exports = { getPagination };
