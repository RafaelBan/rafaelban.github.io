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

const setBackgroundColors = function (
  html,
  secondaryBackground,
  secondaryColor,
  thirdColor,
  fourthColor
) {
  html.style.setProperty("--secondary-background", secondaryBackground);
  html.style.setProperty("--secondary-color", secondaryColor);
  html.style.setProperty("--third-color", thirdColor);
  html.style.setProperty("--fourth-color", fourthColor);
};

const setNavBarElementsOnHover = function (el) {
  $(el).siblings(".nav-bar-element").css("opacity", "0.5");
};

const setNavBarElementsOnOut = function (el) {
  $(el).siblings(".nav-bar-element").css("opacity", "1");
};

window.onload = function () {
  const $bigBall = document.getElementById("cursor-ball-big");
  const $smallBall = document.getElementById("cursor-ball-small");
  const $navBarTopHamburger = document.getElementById("nav-bar-top-hamburger");
  const $navBar = document.getElementById("nav-bar");
  const $html = document.documentElement;
  const $firstImage = document.getElementById("first-image");
  const $secondImage = document.getElementById("second-image");
  const $thirdImage = document.getElementById("third-image");

  setTimeout(function () {
    var bodyElement = document.querySelector("body");
    bodyElement.style.overflowY = "scroll";
  }, 3800);

  const onMouseMove = function (e) {
    TweenMax.to($bigBall, 0.3, {
      x: e.clientX - 15,
      y: e.clientY - 16,
    });
    TweenMax.to($smallBall, 0.1, {
      x: e.clientX - 5,
      y: e.clientY - 10,
    });
  };

  window.addEventListener("mousemove", onMouseMove);
  setTimeout(function () {
    scrollIntoSection("body");
  }, 100);

  $navBarTopHamburger.addEventListener("click", () => {
    if (!$navBarTopHamburger.classList.contains("nav-open-hamburger")) {
      $navBarTopHamburger.classList.add("nav-open-hamburger");
      $navBar.style.transition = "height 0.3s";
      $navBar.classList.add("nav-open");
      setTimeout(function () {
        $navBar.style.transition = "none";
      }, 300);
    } else {
      $navBarTopHamburger.classList.remove("nav-open-hamburger");
      $navBar.style.transition = "height 0.3s";
      $navBar.classList.remove("nav-open");
      setTimeout(function () {
        $navBar.style.transition = "none";
      }, 300);
    }
  });

  $firstImage.addEventListener("change", function () {
    if ($firstImage.checked) {
      setBackgroundColors(
        $html,
        "rgb(20, 32, 43)",
        "rgb(49, 80, 109)",
        "rgb(100, 85, 65)",
        "rgb(105, 105, 105)"
      );
    }
  });
  $secondImage.addEventListener("change", function () {
    if ($secondImage.checked) {
      setBackgroundColors(
        $html,
        "rgb(48, 41, 31)",
        "rgb(100, 85, 65)",
        "rgb(105, 105, 105)",
        "rgb(49, 80, 109)"
      );
    }
  });
  $thirdImage.addEventListener("change", function () {
    if ($thirdImage.checked) {
      setBackgroundColors(
        $html,
        "rgb(45, 45, 45)",
        "rgb(105, 105, 105)",
        "rgb(49, 80, 109)",
        "rgb(100, 85, 65)"
      );
    }
  });
};
