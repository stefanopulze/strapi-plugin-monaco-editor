export default {
  base: [
    {
      intlLabel: {
        id: 'monaco.field.language',
        defaultMessage: 'Language',
      },
      name: 'options.language',
      type: 'select',
      value: 'html',
      options: [
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
    },
  ],
  advanced: [],
};
