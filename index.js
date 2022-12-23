
$(window).scroll(function() {
    $('.nav-bar-element').css("background-color", "#d8dbe0");
    $('.nav-bar-element').css("color", "#151515");
    var navBarHeight = getElementHeight(document.getElementById("nav-bar"));
    if (isInViewport(document.getElementById("about-me"), navBarHeight)) {
        document.getElementById("about-me-href").style.backgroundColor = '#151515';
        document.getElementById("about-me-href").style.color = '#d8dbe0';
        document.getElementById("nav-bar").style.bottom = "none";
        document.getElementById("nav-bar").style.top = "0";
    }

    if (isInViewport(document.getElementById("skills"), navBarHeight)) {
        document.getElementById("skills-href").style.backgroundColor = '#151515';
        document.getElementById("skills-href").style.color = '#d8dbe0';
    }
  });

function setArrowHeight () {
    var childLabels = document.getElementById("skills").getElementsByTagName("label");
    
    for (i=0; i< childLabels.length; i++) {
        var labelHeight = getElementHeight(childLabels[i]);
        var skillSectionArrow = childLabels[i].querySelector("#skill-section-arrow");
        if(skillSectionArrow) {
            skillSectionArrow.style.height = labelHeight;
            setArrowDesignMargin(skillSectionArrow, labelHeight/2.2);
        }
    }
}

const setArrowDesignMargin = function(parent, height) {
    var skillArrowDesign = parent.querySelector(".skill-arrow-design");
    if(skillArrowDesign) {
        skillArrowDesign.style.marginTop = height
    }
}

const getElementHeight = function(el) {
    var elementHeight;
    if(el.offsetHeight) {
        elementHeight = el.offsetHeight;
    } else {
        elementHeight = el.style.pixelHeight;
    }
    return elementHeight
}

window.addEventListener('resize', setArrowHeight);
window.addEventListener('load', setArrowHeight);

const isInViewport = function(el, navBarHeight) {
    var elementTop = el.offsetTop - navBarHeight;
    var elementBottom = elementTop + el.offsetHeight;

    var viewportTop = $(window).scrollTop();
    return elementBottom > viewportTop && elementTop < viewportTop;
};

function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)