export const IconProps = [
  'https://ant.design/components/icon/#API',
  {
    type: {
      type: 'string',
      description: 'Type of the ant design icon',
    },

    style: {
      type: 'CSSProperties',
      description: 'Style properties of icon, like fontSize and color',
    },

    theme: {
      type: "'filled' | 'outlined' | 'twoTone'",
      description: 'Theme of the ant design icon',
      defaultValue: "'outlined'",
    },

    spin: {
      type: 'boolean',
      description: 'Rotate icon with animation',
      defaultValue: 'false',
    },

    rotate: {
      type: 'number',
      description: 'Rotate degrees (not working in IE9)',
    },

    component: {
      type: 'ComponentType<CustomIconComponentProps>',
      description: 'The component used for the root node. This will override the type property.',
    },

    twoToneColor: {
      type: 'string (hex color)',
      description: 'Only support the two-tone icon. Specific the primary color.',
    },
  },
];

export const SVGIconProps = [
  'https://ant.design/components/icon/#Custom-SVG-Icon',
  {
    width: {
      type: 'string | number',
      description: 'The width of the svg element',
      defaultValue: "'1em'",
    },

    height: {
      type: 'string | number',
      description: 'The height of the svg element',
      defaultValue: "'1em'",
    },

    fill: {
      type: 'string',
      description: 'Define the color used to paint the svg element',
      defaultValue: 'currentColor',
    },

    className: {
      type: 'string',
      description: 'The computed class name of the svg element',
    },

    style: {
      type: 'CSSProperties',
      description: 'The computed style of the svg element',
    },
  },
];
