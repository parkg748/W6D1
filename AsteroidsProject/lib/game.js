const DIM_X = 1000;
const DIM_Y = 600;
const NUM_ASTEROIDS = 10;
const BG_COLOR = "white";

class Game {
  constructor() {
    this.asteroids = [];
    this.bullets = [];
    this.ships = [];
    this.addAsteroids();
  }

  addAsteroids() {
    for (let i = 0; i < NUM_ASTEROIDS.length; i++) {
      this.add(new Asteroid({ game: this }));
    }
  }

  add(object) {
    if (object instanceof Asteroid) {
      this.asteroids.push(object);
    } else if (object instanceof Bullet) {
      this.bullets.push(object);
    } else if (object instanceof Ship) {
      this.ships.push(object);
    } else {
      throw new Error("unknown type of object");
    }
  }

  randomPosition() {
    return [DIM_X * Math.random(), DIM_Y * Math.random()];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }


}

module.exports = Game;
