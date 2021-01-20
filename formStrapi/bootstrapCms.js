const Viewer = require('../node_modules/@toast-ui/dist/toastui-editor-viewer');
const Editor = require('../node_modules/@toast-ui/dist/toastui-editor.js');
const editor = new Editor({
  el: document.querySelector('#editor'),
  height: '500px',
  initialEditType: 'markdown',
  previewStyle: 'vertical',
});

editor.getHtml();
