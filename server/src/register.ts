import type { Core } from '@strapi/strapi';
import { PLUGIN_ID } from '../../admin/src/pluginId';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  strapi.customFields.register({
    name: 'monaco-editor-text',
    plugin: PLUGIN_ID,
    type: 'text',
    inputSize: {
      default: 12,
      isResizable: false,
    },
  });
};

export default register;
