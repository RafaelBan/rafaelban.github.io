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
  document
    .querySelector("#portofolio-switch")
    .addEventListener("change", function () {
      var bodyElement = document.querySelector("body");
      if (this.checked) {
        document.querySelector(".big-hello-world span").textContent =
          "hello world";
        setTimeout(function () {
          bodyElement.style.overflowY = "scroll";
        }, 3200);
      } else {
        bodyElement.style.overflowY = "hidden";
        scrollIntoSection("header-container");
        document.querySelector(".big-hello-world span").textContent = "bye.";
      }
    });

  const $navBar = document.getElementById("nav-bar");
  const $bigBall = document.getElementById("cursor-ball-big");
  const $smallBall = document.getElementById("cursor-ball-small");

  $(window).scroll(function () {
    var navBarHeight = getElementHeight($navBar);
    if (isInViewport(document.getElementById("main-content"), navBarHeight)) {
      $navBar.style.bottom = "none";
      $navBar.style.top = "0";
    }
  });

  const isInViewport = function (el, navBarHeight) {
    var elementTop = el.offsetTop - navBarHeight;
    var elementBottom = elementTop + el.offsetHeight;

    var viewportTop = $(window).scrollTop();
    return elementBottom > viewportTop && elementTop < viewportTop;
  };

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
    scrollIntoSection("header-container");
  }, 100);
};
