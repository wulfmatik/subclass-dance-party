// var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   MakeDancer.call(this, top, left, timeBetweenSteps);

// };

// MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
// MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

// var oldStep = MakeDancer.prototype.step;

// MakeBlinkyDancer.prototype.step = function() {
//   oldStep.call(this);
//   this.$node.toggle();
// };

var MakeTobyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="tobyDancer" src="img/tobydancing.gif">');
  this.$node.addClass('gifDancer');
  this.setPosition(this.top, this.left);
};

MakeTobyDancer.prototype = Object.create(MakeDancer.prototype);
MakeTobyDancer.prototype.constructor = MakeTobyDancer;

var oldStep = MakeDancer.prototype.step;

MakeTobyDancer.prototype.step = function() {
  oldStep.call(this);
  //this.$node.toggle();
};