export const StepsProps = [
  'https://ant.design/components/steps/#Steps',
  {
    className: {
      type: 'string',
      description: 'additional class to Steps',
    },

    current: {
      type: 'number',
      description:
        'to set the current step, counting from 0. You can overwrite this state by using status of Step',
      defaultValue: '0',
    },

    direction: {
      type: 'string',
      description: 'to specify the direction of the step bar, horizontal or vertical',
      defaultValue: 'horizontal',
    },

    labelPlacement: {
      type: 'string',
      description: 'place title and description with horizontal or vertical direction',
      defaultValue: 'horizontal',
    },

    progressDot: {
      type: 'Boolean or (iconDot, {index, status, title, description}) => ReactNode',
      description:
        'Steps with progress dot style, customize the progress dot by setting it to a function. labelPlacement will be vertical',
      defaultValue: 'false',
    },

    size: {
      type: 'string',
      description: 'to specify the size of the step bar, default and small are currently supported',
      defaultValue: 'default',
    },

    status: {
      type: 'string',
      description:
        'to specify the status of current step, can be set to one of the following values: wait process finish error',
      defaultValue: 'process',
    },

    initial: {
      type: 'number',
      description: 'set the initial step, counting from 0',
      defaultValue: '0',
    },
  },
];

export const StepsStepProps = [
  'https://ant.design/components/steps/#Steps.Step',
  {
    description: {
      type: 'string|ReactNode',
      description: 'description of the step, optional property',
      defaultValue: '',
    },

    icon: {
      type: 'string|ReactNode',
      description: 'icon of the step, optional property',
      defaultValue: '',
    },

    status: {
      type: 'string',
      description:
        'to specify the status. It will be automatically set by current of Steps if not configured. Optional values are: wait process finish error',
      defaultValue: 'wait',
    },

    title: {
      type: 'string|ReactNode',
      description: 'title of the step',
    },
  },
];
