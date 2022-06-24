var MakeAndyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="andyDancer" src="img/andydancing.gif">');
  this.currentAngle = 0;
  this.setPosition(this.top, this.left);
};

MakeAndyDancer.prototype = Object.create(MakeDancer.prototype);
MakeAndyDancer.prototype.constructor = MakeAndyDancer;

MakeAndyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // rotate 15 Degrees every call
  this.currentAngle += 15;

  this.$node.css({transform: 'rotate(' + this.currentAngle + 'deg)'});
};
