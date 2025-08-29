
function setBodyPad(){
  const nav = document.querySelector('nav');
  if(!nav) return;
  document.body.style.paddingTop = nav.offsetHeight + 'px';
}

document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(btn && links){
    btn.addEventListener('click', ()=> {
      links.classList.toggle('open');
      // After the menu height changes, update padding
      requestAnimationFrame(setBodyPad);
      setTimeout(setBodyPad, 150); // in case of CSS transitions
    });
  }
  setBodyPad();
  window.addEventListener('resize', setBodyPad);
});
