const scrollIntoSection = function (sectionName) {
  document.getElementById(sectionName).scrollIntoView(true);
};

const getElementHeight = function (el) {
  var elementHeight;
  if (el.offsetHeight) {
    elementHeight = el.offsetHeight;
  } else {
    elementHeight = el.style.pixelHeight;
  }
  return elementHeight;
};

window.onload = function () {
  const $navBar = document.getElementById("nav-bar");
  const $bigBall = document.getElementById("cursor-ball-big");
  const $smallBall = document.getElementById("cursor-ball-small");

  setTimeout(function () {
    var bodyElement = document.querySelector("body");
    bodyElement.style.overflowY = "scroll";
  }, 3800);

  const onMouseMove = function (e) {
    TweenMax.to($bigBall, 0.3, {
      x: e.clientX + 35,
      y: e.clientY + 35,
    });
    TweenMax.to($smallBall, 0.1, {
      x: e.clientX + 45,
      y: e.clientY + 45,
    });
  };

  window.addEventListener("mousemove", onMouseMove);
  setTimeout(function () {
    scrollIntoSection("body");
  }, 100);
};
