export const CommonProps = [
  'https://ant.design/components/button/#API',
  {
    disabled: {
      type: 'boolean',
      description: 'disabled state of button',
      defaultValue: 'false',
    },

    ghost: {
      type: 'boolean',
      description: 'make background transparent and invert text and border colors',
      defaultValue: 'false',
    },

    href: {
      type: 'string',
      description: 'redirect url of link button',
    },

    htmlType: {
      type: 'string',
      description: 'set the original html type of button',
      defaultValue: 'button',
    },

    icon: {
      type: 'string',
      description: 'set the icon of button, see: Icon component',
    },

    loading: {
      type: 'boolean | { delay: number }',
      description: 'set the loading status of button',
      defaultValue: 'false',
    },

    shape: {
      type: 'string',
      description: 'can be set to circle, round or omitted',
    },

    size: {
      type: 'string',
      description: 'can be set to small large or omitted',
      defaultValue: 'default',
    },

    target: {
      type: 'string',
      description: 'same as target attribute of a, works when href is specified',
    },
    type: {
      type: 'string',
      description: 'can be set to primary ghost dashed danger or omitted (meaning default)',
      defaultValue: 'default',
    },

    onClick: {
      type: '(event) => void',
      description: 'set the handler to handle click event',
    },

    block: {
      type: 'boolean',
      description: 'option to fit button width to its parent width',
      defaultValue: 'false',
    },
  },
];
