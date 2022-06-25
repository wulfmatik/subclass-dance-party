describe('andyDancer', function() {

  var andyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    andyDancer = new MakeAndyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(andyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node rotate', function() {
    sinon.spy(andyDancer.$node, 'css');
    andyDancer.step();
    expect(andyDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(andyDancer, 'step');
      expect(andyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(andyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(andyDancer.step.callCount).to.be.equal(2);
    });
  });

  it ('should have a set position method', function() {
    expect(!!andyDancer.setPosition).to.be.equal(true);
  });
});