export const getPagination = ({
  // @formatter:off
  totalRows = 0,
  itemsPerPage = 0,
  pageSize = 0,
  pageIndex = 0
  // @formatter:on
}) => {
  const firstPage = 1;
  const lastPage = getLastPage(totalRows, itemsPerPage);
  const pageStart = 0 >= pageSize ? 0 : (pageIndex - (pageIndex % pageSize)) + 1;
  const pageEnd = 0 >= pageStart ? 0 : Math.min(pageStart + pageSize - 1, lastPage);
  return {firstPage, lastPage, pageStart, pageEnd};
};

export const getLastPage = (totalRows, itemsPerPage) => {
  if (0 === itemsPerPage) return itemsPerPage;
  return Math.trunc(totalRows / itemsPerPage) + (totalRows % itemsPerPage > 0 ? 1 : 0);
}
