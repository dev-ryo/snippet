const bodyE = document.body;
const searchBoxBeforeE = document.querySelector('#searchBox-beforeE');
const searchBoxAfterE = document.querySelector('#searchBox-afterE');
const searchBoxCE = document.querySelector('.searchBox_c');
const searchCharaInputE = document.querySelector('.searchCharaInput');
const searchBoxCloseBtnE = document.querySelector('.searchBox-closeBtn');
const eExcludingHeader = document.querySelectorAll('body > *:not(header)');

function searchBoxAppear() {
  let currentFocusE = "inputE";
  
  bodyE.style.overflow = "hidden";
  for(let i = 0; i < eExcludingHeader.length; i++) {
    eExcludingHeader[i].setAttribute("aria-hidden", "true");
  }
  searchBoxBeforeE.setAttribute("tabindex", "0");
  searchBoxAfterE.setAttribute("tabindex", "0");
  searchBoxCE.classList.add('searchBox-appear');
  searchCharaInputE.focus();
  
  searchBoxBeforeE.addEventListener('focus', () => {
    searchBoxCloseBtnE.focus();
  });
  searchBoxAfterE.addEventListener('focus', () => {
    searchCharaInputE.focus();
  });
  
  window.addEventListener('keydown', (e) => {
    if(e.keyCode === 27) {searchBoxHidden();}
  });
}

function searchBoxHidden() {
  bodyE.removeAttribute('style');
  for(let i = 0; i < eExcludingHeader.length; i++) {
    eExcludingHeader[i].setAttribute("aria-hidden", "false");
  }
  searchBoxBeforeE.setAttribute("tabindex", "-1");
  searchBoxAfterE.setAttribute("tabindex", "-1");
  searchBoxCE.classList.remove('searchBox-appear');
  document.querySelector('.searchBox-openBtn').focus();
}