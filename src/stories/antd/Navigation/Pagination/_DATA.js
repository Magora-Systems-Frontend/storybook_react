export const PaginationProps = [
  'https://ant.design/components/pagination/#API',
  {
    current: {
      type: 'number',
      description: 'current page number',
    },

    defaultCurrent: {
      type: 'number',
      description: 'default initial page number',
      defaultValue: '1',
    },

    defaultPageSize: {
      type: 'number',
      description: 'default number of data items per page',
      defaultValue: '10',
    },

    hideOnSinglePage: {
      type: 'boolean',
      description: 'Whether to hide pager on single page',
      defaultValue: 'false',
    },

    itemRender: {
      type: "(page, type: 'page' | 'prev' | 'next', originalElement) => React.ReactNode",
      description: 'to customize item innerHTML',
    },

    pageSize: {
      type: 'number',
      description: 'number of data items per page',
    },

    pageSizeOptions: {
      type: 'string[]',
      description: 'specify the sizeChanger options',
      defaultValue: "['10', '20', '30', '40']",
    },

    showQuickJumper: {
      type: 'boolean | { goButton: ReactNode }',
      description: 'determine whether you can jump to pages directly',
      defaultValue: 'false',
    },

    showSizeChanger: {
      type: 'boolean',
      description: 'determine whether pageSize can be changed',
      defaultValue: 'false',
    },

    showTotal: {
      type: 'Function(total, range)',
      description: 'to display the total number and range',
    },

    simple: {
      type: 'boolean',
      description: 'whether to use simple mode',
    },

    size: {
      type: 'string',
      description: 'specify the size of Pagination, can be set to small',
      defaultValue: "''",
    },

    total: {
      type: 'number',
      description: 'total number of data items',
      defaultValue: '0',
    },

    onChange: {
      type: 'Function(page, pageSize)',
      description:
        'a callback function, executed when the page number is changed, and it takes the resulting page number and pageSize as its arguments',
      defaultValue: 'noop',
    },

    onShowSizeChange: {
      type: 'Function(current, size)',
      description: 'a callback function, executed when pageSize is changed',
      defaultValue: 'noop',
    },
  },
];
