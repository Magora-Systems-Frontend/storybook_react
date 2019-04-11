export const DividerProps = [
  'https://ant.design/components/divider/#Divider',
  {
    className: {
      type: 'string',
      description: 'className of container',
      defaultValue: '',
    },

    dashed: {
      type: 'boolean',
      description: 'whether line is dashed',
      defaultValue: 'false',
    },

    orientation: {
      type: 'enum: left right center',
      description: 'position of title inside divider',
      defaultValue: 'center',
    },

    style: {
      type: 'object',
      description: 'style object of container',
      defaultValue: '',
    },

    type: {
      type: 'enum: horizontal vertical',
      description: 'direction type of divider	',
      defaultValue: 'horizontal',
    },
  },
];
