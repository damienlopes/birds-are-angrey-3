class Planknot {
  constructor(x, y, w, h, a) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    var plank_features = { isStatic: false, restitution: 1, friction: 2 };
    this.plank = Bodies.rectangle(x, y, w, h, plank_features);
    Matter.Body.setAngle(this.plank, a);
    World.add(world, this.plank);
    this.plankimg = loadImage("assets/wood2.png");
  }

  display() {
    var pos = this.plank.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.plank.angle);
    imageMode(CENTER);
    image(this.plankimg, 0, 0, this.w, this.h);
    pop();
  }
}
