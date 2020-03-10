function switchCheck(elem) {
  if(elem.getAttribute('aria-checked') === "true") {elem.setAttribute('aria-checked', false);}
  else {elem.setAttribute('aria-checked', true);}
}

function checkWithEnter(elem) {
  if(event.keyCode === 32) {
    switchCheck(elem);
    event.preventDefault();
  }
}
