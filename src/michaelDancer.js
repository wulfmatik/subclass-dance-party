var MakeMichaelDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="michaelDancer" src="img/michaelDancing-unscreen.gif">');
  this.setPosition(this.top, this.left);
  this.big = false;
  this.stopMoving = false;
};

MakeMichaelDancer.prototype = Object.create(MakeDancer.prototype);
MakeMichaelDancer.prototype.constructor = MakeMichaelDancer;

var oldStep = MakeDancer.prototype.step;

MakeMichaelDancer.prototype.step = function() {
  oldStep.call(this);
  if (!this.stopMoving) {
    if (this.big) {
      this.big = false;
      this.$node.stop().animate({width: '130px' }, 500);
    } else {
      this.big = true;
      this.$node.stop().animate({width: '100px' }, 500);
    }
  }

};
