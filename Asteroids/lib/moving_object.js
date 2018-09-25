class MovingObject {
  constructor(pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  }

  move() {
    this.pos[0] = this.pos[0] + this.vel[0];
    this.pos[1] = this.pos[1] + this.vel[1];
  }

  draw(ctx) {
    document.addEventListener('DOMContentLoaded', function() {
      const canvasEl = document.getElementById("game-canvas");
      canvasEl.width = 500;
      canvasEl.height = 500;
      const ctx = canvasEl.getContext("2d");
      ctx.beginPath();
      ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 5;
      ctx.stroke();
      
    });
  }

  isCollidedWith(otherMovingObject) {

  }
}

module.exports = MovingObject;
