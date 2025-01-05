// @ts-ignore
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
// @ts-ignore
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
// @ts-ignore
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
// @ts-ignore
import jsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
// @ts-ignore
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';

const initWorkers = () => {
  self.MonacoEnvironment = {
    getWorker: function (workerId, label) {
      switch (label) {
        case 'json':
          return jsonWorker();
        case 'css':
        case 'scss':
        case 'less':
          return cssWorker();
        case 'html':
        case 'handlebars':
        case 'razor':
          return htmlWorker();
        case 'typescript':
        case 'javascript':
          return jsWorker();
        default:
          return editorWorker();
      }
    },
  };
};

export default initWorkers;
