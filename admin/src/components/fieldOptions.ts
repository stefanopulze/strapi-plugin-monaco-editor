// import { number } from 'yup';

export default {
  base: [
    {
      intlLabel: {
        id: 'monaco.field.language',
        defaultMessage: 'Language',
      },
      name: 'options.language',
      type: 'select',
      defaultValue: 'plainText',
      options: [
        {
          key: 'plainText',
          value: 'plainText',
          metadatas: {
            intlLabel: {
              id: 'monaco.field.languages.plainText',
              defaultMessage: 'Plain Text',
            },
          },
        },
        {
          key: 'html',
          value: 'html',
          metadatas: {
            intlLabel: {
              id: 'monaco.field.languages.html',
              defaultMessage: 'html',
            },
          },
        },
        {
          key: 'css',
          value: 'css',
          metadatas: {
            intlLabel: {
              id: 'monaco.field.languages.css',
              defaultMessage: 'css',
            },
          },
        },
      ],
    },
    {
      name: 'options.required',
      type: 'checkbox',
      intlLabel: {
        id: 'monaco.field.minimap.required.label',
        defaultMessage: 'Required field',
      },
      description: {
        id: 'monaco.field.minimap.required.description',
        defaultMessage: "You won't be able to create an entry if this field is empty",
      },
    },
    {
      intlLabel: {
        id: 'monaco.field.minimap.label',
        defaultMessage: 'Minimap',
      },
      name: 'options.minimap',
      description: {
        id: 'monaco.field.minimap.description',
        defaultMessage: 'Show minimap when edit',
      },
      type: 'checkbox',
      defaultValue: false,
    },
    {
      intlLabel: {
        id: 'monaco.field.lineNumbers.label',
        defaultMessage: 'Line numbers',
      },
      description: {
        id: 'monaco.field.lineNumbers.description',
        defaultMessage: 'Show line numbers',
      },
      name: 'options.lineNumbers',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      intlLabel: {
        id: 'monaco.field.folding.label',
        defaultMessage: 'Folding',
      },
      name: 'options.folding',
      description: {
        id: 'monaco.field.folding.description',
        defaultMessage: 'Enable code folding',
      },
      type: 'checkbox',
      defaultValue: true,
    },
  ],
  advanced: [
    {
      intlLabel: {
        id: 'monaco.field.height.label',
        defaultMessage: 'Height',
      },
      name: 'options.height',
      description: {
        id: 'monaco.field.height.description',
        defaultMessage: 'Height of the editor in pixels',
      },
      type: 'number',
      defaultValue: 300,
    },
  ],
  // validator: () => ({
  //   height: number()
  //     .required()
  //     .min(200, {
  //       id: 'monaco.field.height.minValidation',
  //       defaultMessage: 'Height is too short! Minimum is 200',
  //     })
  //     .max(500, {
  //       id: 'monaco.field.height.maxValidation',
  //       defaultMessage: 'Height is too large! Maximum is 500',
  //     }),
  // }),
};
