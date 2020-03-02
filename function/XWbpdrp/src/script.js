function textCopy(id) {
  const range = document.createRange();
  range.selectNode(document.querySelector(id));
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  document.execCommand('copy');

  selection.removeAllRanges();
}