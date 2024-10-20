class Projectile {
  constructor(position, speed) {
    this.position = position;
    this.width = 2;
    this.height = 20;
    this.speed = speed;
  }

  draw(ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.position.y += this.speed;
  }
}

export default Projectile;
