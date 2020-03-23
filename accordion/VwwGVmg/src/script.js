const titleE = document.querySelectorAll('.accordion-title');
const panelE = document.querySelectorAll('.accordion-panel');
let currentOpen = -1;
for(let i = 0; i < titleE.length; i++) {
  titleE[i].addEventListener('click', () => {accordionStateChange(i);});
  titleE[i].addEventListener('keydown', (e) => {
    if(e.target.keyCode === 13 || e.target.keyCode === 32) {accordionStateChange(i);}
  });
}

function accordionOpen(num) {
  panelE[num].hidden = false;
  titleE[num].setAttribute('aria-expanded', 'true');
  window.setTimeout(() => {
    panelE[num].classList.add('accordion-open');
  }, 10);
}
function accordionClose(num) {
  titleE[num].setAttribute('aria-expanded', 'false');
  panelE[num].classList.remove('accordion-open');
  window.setTimeout(() => {panelE[num].hidden = true;}, 200);
}
function accordionStateChange(target) {
  if(target == currentOpen) {
    if(titleE[target].getAttribute('aria-expanded') === "true") {accordionClose(target);}
    else {accordionOpen(target);}
  } else {
    accordionOpen(target);
    if(currentOpen !== -1) {accordionClose(currentOpen);}
  }
  currentOpen = target;
}
