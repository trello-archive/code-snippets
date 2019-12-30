import * as monaco from 'monaco-editor/esm/vs/editor/editor.main';

self.MonacoEnvironment = {
  getWorkerUrl(moduleId, label) {
    if (label === 'json') {
      return './json.worker.js';
    }
    if (label === 'css') {
      return './css.worker.js';
    }
    if (label === 'html') {
      return './html.worker.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return './ts.worker.js';
    }
    return './editor.worker.js';
  },
};

monaco.editor.create(document.getElementById('container'), {
  value: `function x() {\n\tconsole.log("Hello world!");\n}`,
  language: 'javascript',
});
