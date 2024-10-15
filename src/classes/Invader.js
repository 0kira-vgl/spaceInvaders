import { PATH_INVADER_IMAGE } from "../utils/constants.js";
import Projectile from "./Projectile.js";

class Invader {
  constructor(position, speed) {
    this.width = 50 * 0.8;
    this.height = 37 * 0.8;
    this.speed = speed;

    this.position = position;

    this.image = this.getImage(PATH_INVADER_IMAGE);
  }

  getImage(path) {
    const image = new Image();
    image.src = path;
    return image;
  }

  moveLeft() {
    this.position.x -= this.speed;
  }

  moveRight() {
    this.position.x += this.speed;
  }

  moveDown() {
    this.position.y += this.height;
  }

  incrementeSpeed(boost) {
    this.speed += boost;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  shoot(Projectiles) {
    const p = new Projectile(
      {
        x: this.position.x + this.width / 2 - 1,
        y: this.position.y + this.height,
      },
      10
    );

    Projectiles.push(p);
  }

  hit(projectile) {
    return (
      projectile.position.x >= this.position.x &&
      projectile.position.x <= this.position.x + this.width &&
      projectile.position.y >= this.position.y &&
      projectile.position.y <= this.position.y + this.height
    );
  }
}

export default Invader;
