const hero = document.querySelector('.hero');
const container = document.querySelector('.container');
const text = hero.querySelector('h1');
const walk = 100; // 500px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;

}
function noShadow(){
    text.style.textShadow = `   
  `;
}

hero.addEventListener('mousemove', shadow);

container.addEventListener('mousehover', noshadow);