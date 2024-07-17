import {getCoreRowModel} from '@tanstack/react-table';
import {CONFIG_MOBILE} from '../constants/index.js';

export const getTableOptions = (config, columns, data) => ({
  ...config,
  enableRowSelection: true,
  columns: columns,
  data: data?.rows ?? [],
  rowCount: data?.totalRows,
  manualPagination: true,
  manualSorting: true,
  sortDescFirst: false,
  getCoreRowModel: getCoreRowModel(),
  state: {
    ...(config.state ?? {}),
  },
  meta: {
    ...(config.meta ?? {})
  },
  debugTable: true,
});

export const getColumns = (pagination, columns) => columns?.map((x) => {
  const column = {...x, size: x.size ?? 'auto'};
  if (0 >= pagination.totalRows) {
    return column;
  }

  if ('NO.' === (column.header ?? '').toLocaleUpperCase()) {
    // eslint-disable-next-line no-unused-vars
    column.cell = ({_, row}) => {
      return pagination.totalRows - (pagination.pageIndex * pagination.pageSize) - row.index;
    };
    column.size = CONFIG_MOBILE.GRID.COLUMNS.NO.SIZE;
  }

  return column;
});
