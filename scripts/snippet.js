import * as monaco from 'monaco-editor/esm/vs/editor/editor.main';

monaco.editor.create(document.getElementById('container'), {
  value: `function x() {\n\tconsole.log("Hello world!");\n}`,
  language: 'javascript',
});
