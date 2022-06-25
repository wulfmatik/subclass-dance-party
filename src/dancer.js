// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(this.top, this.left);

};

MakeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


MakeDancer.prototype.setPosition = function(top, left) {

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.lineUp = function(top, index) {

  var styleSettings = {
    top: 0,
    left: index,
    padding: 50
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.findPair = function(ogDancer) {
  // store object pair
  window.partner = {};
  // console.log(ogDancer);
  // distance variable
  var distance = undefined;
  // iterate over dancers array
  for (var i = 0; i < window.dancers.length; i++) {
    // calculate distance between OG dancer and current dancer
    var currDancer = window.dancers[i];
    var topDiff = currDancer.top - ogDancer.top;
    var leftDiff = currDancer.left - ogDancer.left;
    var distanceCheck = Math.sqrt((topDiff * topDiff) + (leftDiff * leftDiff));
    // if that value is less than distance variable, udpate distance variable
    if (Math.floor(currDancer.top) !== Math.floor(ogDancer.top) && Math.floor(currDancer.left) !== Math.floor(ogDancer.left)) {
      if (distance === undefined) {
        distance = distanceCheck;
        window.partner = window.dancers[i];
      } else if (distanceCheck < distance) {
        distance = distanceCheck;
        window.partner = window.dancers[i];
      }
    }
  }
  window.partner.setPosition(ogDancer.top, ogDancer.left);
};