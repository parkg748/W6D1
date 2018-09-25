Function.prototype.inherits = function(classObject) {
  function Surrogate() {}
  Surrogate.prototype = classObject.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits = function(classObject) {
  this.prototype = Object.create(classObject.prototype);
  this.prototype.constructor = this;
};

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);
