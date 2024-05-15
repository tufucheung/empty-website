const text = document.getElementById('text');
let isShowing = false;
let timeout;

function showText() {
  let i = 0;
  isShowing = true;
  text.style.opacity = 1;
  const interval = setInterval(() => {
    text.textContent = "It's Empty.".slice(0, i);
    i++;
    if (i > "It's Empty.".length) {
      clearInterval(interval);
      // isShowing = true;
      timeout = setTimeout(hideText, 3000);
    }
  }, 200);
}

function hideText() {
  let i = "It's Empty.".length;
  const interval = setInterval(() => {
    text.textContent = "It's Empty.".slice(0, i);
    i--;
    if (i < 0) {
      clearInterval(interval);
      text.style.opacity = 0;
      isShowing = false;
    }
  }, 200);
}

document.addEventListener('click', () => {
  if (!isShowing) {
    showText();
    clearTimeout(timeout);
  }
  
});
window.onload = function () {
  if (!isShowing) {
    showText();
    clearTimeout(timeout);
  }
};

// document.addEventListener('mouseup', () => {
//   if (isShowing) {
//     hideText();
//     clearTimeout(timeout);
//     // timeout = setTimeout(hideText, 3000);
//   }
  
// });