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

// MakeDancer.prototype.move = function(top, left) {
//   $(this).stop().animate({
//     'top': top,
//     'left': left
//   }, 1000);
// };

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
    left: index
  };

  this.$node.css(styleSettings);
};