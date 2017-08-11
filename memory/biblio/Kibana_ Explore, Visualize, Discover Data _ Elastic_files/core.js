(function() {
  var setTransformOrigin = function(el) {
    var BBox = el.getBBox();

    el.style.transformOrigin = (BBox.x + BBox.height / 2) + 'px ' + (BBox.y + BBox.width / 2) + 'px';
  };

  var targets = '#kibana-svg-animate circle',
      duration = 2000,
      delay = 2000,
      easing = 'easeOutExpo';

  var kfAnimate = document.getElementById('kibana-svg-animate');

  var kfPieNodes = document.querySelectorAll('#kibana-svg-pie circle');

  var kfMapNodes = document.querySelectorAll('#kibana-svg-map circle');

  var kfBarNodes = document.querySelectorAll('#kibana-svg-bar circle');

  var kfAreaNodes = document.querySelectorAll('#kibana-svg-area circle');

  var maxNodeLength = Math.max(kfPieNodes.length, kfMapNodes.length, kfBarNodes.length, kfAreaNodes.length);

  for (var i = 0; i < maxNodeLength; i++) {
    var circle = document.createElementNS('http://www.w3.org/2000/svg', "circle");

    if (kfPieNodes[i] == null) {
      var randomNode = anime.random(0, kfPieNodes.length - 1);

      circle.setAttribute('cx', kfPieNodes[randomNode].cx.baseVal.value);
      circle.setAttribute('cy', kfPieNodes[randomNode].cy.baseVal.value);
      circle.setAttribute('r', kfPieNodes[randomNode].r.baseVal.value);
      circle.setAttribute('fill', getComputedStyle(kfPieNodes[randomNode]).fill);
    }
    else {
      circle.setAttribute('cx', kfPieNodes[i].cx.baseVal.value);
      circle.setAttribute('cy', kfPieNodes[i].cy.baseVal.value);
      circle.setAttribute('r', kfPieNodes[i].r.baseVal.value);
      circle.setAttribute('fill', getComputedStyle(kfPieNodes[i]).fill);
    }

    kfAnimate.appendChild(circle);

    setTransformOrigin(circle);
  }

  var animateToPie = function() {

    anime({
      targets: targets,
      delay: delay,
      cx: function(el, index) {
        if (kfPieNodes[index] == null) {
          return kfPieNodes[maxNodeLength - index].cx.baseVal.value;
        }
        else {
          return kfPieNodes[index].cx.baseVal.value;
        }
      },
      cy: function(el, index) {
        if (kfPieNodes[index] == null) {
          return kfPieNodes[maxNodeLength - index].cy.baseVal.value;
        }
        else {
          return kfPieNodes[index].cy.baseVal.value;
        }
      },
      r: function(el, index) {
        if (kfPieNodes[index] == null) {
          return kfPieNodes[maxNodeLength - index].r.baseVal.value;
        }
        else {
          return kfPieNodes[index].r.baseVal.value;
        }
      },
      fill: function(el, index) {
        if (kfPieNodes[index] == null) {
          return getComputedStyle(kfPieNodes[maxNodeLength - index]).fill;
        }
        else {
          return getComputedStyle(kfPieNodes[index]).fill;
        }
      },
      duration: duration,
      easing: easing,
      complete: animateToMap
    });
  };

  var animateToMap = function() {
    anime({
      targets: targets,
      delay: delay,
      cx: function(el, index) {
        if (kfMapNodes[index] == null) {
          return kfMapNodes[maxNodeLength - index].cx.baseVal.value;
        }
        else {
          return kfMapNodes[index].cx.baseVal.value;
        }
      },
      cy: function(el, index) {
        if (kfMapNodes[index] == null) {
          return kfMapNodes[maxNodeLength - index].cy.baseVal.value;
        }
        else {
          return kfMapNodes[index].cy.baseVal.value;
        }

      },
      r: function(el, index) {
        if (kfMapNodes[index] == null) {
          return kfMapNodes[maxNodeLength - index].r.baseVal.value;
        }
        else {
          return kfMapNodes[index].r.baseVal.value;
        }
      },
      fill: function(el, index) {
        if (kfMapNodes[index] == null) {
          return getComputedStyle(kfMapNodes[maxNodeLength - index]).fill;
        }
        else {
          return getComputedStyle(kfMapNodes[index]).fill;
        }
      },
      duration: duration,
      easing: easing,
      complete: animateToBar
    });
  };

  var animateToBar = function() {
    anime({
      targets: targets,
      delay: delay,
      cx: function(el, index) {
        if (kfBarNodes[index] == null) {
          return kfBarNodes[maxNodeLength - index].cx.baseVal.value;
        }
        else {
          return kfBarNodes[index].cx.baseVal.value;
        }
      },
      cy: function(el, index) {
        if (kfBarNodes[index] == null) {
          return kfBarNodes[maxNodeLength - index].cy.baseVal.value;
        }
        else {
          return kfBarNodes[index].cy.baseVal.value;
        }
      },
      r: function(el, index) {
        if (kfBarNodes[index] == null) {
          return kfBarNodes[maxNodeLength - index].r.baseVal.value;
        }
        else {
          return kfBarNodes[index].r.baseVal.value;
        }
      },
      fill: function(el, index) {
        if (kfBarNodes[index] == null) {
          return getComputedStyle(kfBarNodes[maxNodeLength - index]).fill;
        }
        else {
          return getComputedStyle(kfBarNodes[index]).fill;
        }
      },
      duration: duration,
      easing: easing,
      complete: animateToArea
    });
  };

  var animateToArea = function() {
    anime({
      targets: targets,
      delay: delay,
      cx: function(el, index) {
        if (kfAreaNodes[index] == null) {
          return kfAreaNodes[maxNodeLength - index].cx.baseVal.value;
        }
        else {
          return kfAreaNodes[index].cx.baseVal.value;
        }
      },
      cy: function(el, index) {
        if (kfAreaNodes[index] == null) {
          return kfAreaNodes[maxNodeLength - index].cy.baseVal.value;
        }
        else {
          return kfAreaNodes[index].cy.baseVal.value;
        }
      },
      r: function(el, index) {
        if (kfAreaNodes[index] == null) {
          return kfAreaNodes[maxNodeLength - index].r.baseVal.value;
        }
        else {
          return kfAreaNodes[index].r.baseVal.value;
        }
      },
      fill: function(el, index) {
        if (kfAreaNodes[index] == null) {
          return getComputedStyle(kfAreaNodes[maxNodeLength - index]).fill;
        }
        else {
          return getComputedStyle(kfAreaNodes[index]).fill;
        }
      },
      duration: duration,
      easing: easing,
      complete: animateToPie
    });
  };

  animateToMap();
})();
