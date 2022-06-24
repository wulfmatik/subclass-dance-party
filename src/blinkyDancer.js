var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

var oldStep = MakeDancer.prototype.step;

MakeBlinkyDancer.prototype.step = function() {
  oldStep.call(this);
  this.$node.toggle();
};