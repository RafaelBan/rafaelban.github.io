const setArrowHeight = function () {
  var childLabels = document
    .getElementById("skills")
    .getElementsByTagName("label");

  for (i = 0; i < childLabels.length; i++) {
    var labelHeight = getElementHeight(childLabels[i]);
    var skillSectionArrow = childLabels[i].querySelector(
      ".skill-section-arrow"
    );
    if (skillSectionArrow) {
      skillSectionArrow.style.height = labelHeight;
      setArrowDesignMargin(skillSectionArrow, labelHeight / 2.2);
    }
  }
};

const setArrowDesignMargin = function (parent, height) {
  var skillArrowDesign = parent.querySelector(".skill-arrow-design");
  if (skillArrowDesign) {
    skillArrowDesign.style.marginTop = height;
  }
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

window.addEventListener("resize", setArrowHeight);
window.addEventListener("load", setArrowHeight);

const scrollIntoSection = function (sectionName) {
  document.getElementById(sectionName).scrollIntoView();
};

window.onload = function () {
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
};
