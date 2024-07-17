import {useQuery} from '@tanstack/react-query';

/**
 * api dependency
 * @param params 검색 value
 * @returns {{pageCon: *, pageNum: *}}
 */
const toQueryPagination = (params = {}) => ({
  ...params, pageCon: params.itemsPerPage, pageNum: params.pageIndex + 1
});

export const responseToPagination = (responseData = {}) => {
  if (!responseData || !responseData.data) return {};
  const data = responseData.data;
  const page = data?.page ?? 1;
  const pageIndex = page - 1, totalRows = data?.total ?? 0;
  const rows = data?.rows ?? [];

  return {pageIndex, totalRows, rows};
};

export const searchParamsToObject = (searchParams = {}) => {
  const params = {};
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  return params;
};

export const getUseQueryOptions = ({
  // @formatter:off
  queryKey = ['_DEF_USE_QUERY_KEY'],
  queryFn = async () => undefined,
  queryParams = [],
  isActive = undefined,
  queryEtcOptions = {}
  // @formatter:on
}) => {
  return {
    // @formatter:off
    queryKey: [...queryKey, ...queryParams],
    queryFn: () => queryFn ({
      ...toQueryPagination(queryParams)
    }),
    enabled: isActive,
    staleTime: 1500,
    ...queryEtcOptions
    // @formatter:on
  };
};

export const executeUseQuery = (queryOption) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {data: responseData, isLoading, isSuccess} = useQuery(queryOption);
  return {responseData, isLoading, isSuccess};
};
