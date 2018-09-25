const MovingObject = require("./moving_object.js");

const DEFAULT = {
  COLOR: "#505050",
  RADIUS: 25,
  SPEED: 4
};

class Asteroid extends MovingObject {
  constructor(options) {
    option.color = DEFAULT.COLOR;
    option.radius = DEFAULT.RADIUS;
    super(options);
  }
}

module.exports = Asteroid;
