import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
import fieldOptions from './components/fieldOptions';

const name = 'monaco-editor'; // pluginPkg.strapi.name;

//https://docs.strapi.io/dev-docs/custom-fields
export default {
  register(app: any) {
    app.customFields.register({
      name: 'monaco-editor-text',
      pluginId: PLUGIN_ID,
      type: 'text',
      // icon: Code,
      intlLabel: {
        id: 'monaco.field.label',
        defaultMessage: 'Monaco Editor',
      },
      intlDescription: {
        id: 'monaco.field.description',
        defaultMessage: 'code with style',
      },
      components: {
        Input: async () => await import('./components/MonacoField'),
      },
      options: fieldOptions,
    });

    app.registerPlugin({
      id: PLUGIN_ID,
      pluginId: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });
  },

  async registerTrads({ locales }: { locales: string[] }) {
    return Promise.all(
      locales.map(async (locale) => {
        try {
          const { default: data } = await import(`./translations/${locale}.json`);
          return { data, locale };
        } catch {
          return { data: {}, locale };
        }
      })
    );
  },
};
