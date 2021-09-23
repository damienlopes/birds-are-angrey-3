class Box {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    var box_features = { isStatic: false, restitution: 1, friction: 2 };
    this.box = Bodies.rectangle(x, y, w, h, box_features);
    World.add(world, this.box);
    this.boximg = loadImage("assets/wood1.png");
  }

  display() {
    var pos = this.box.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.box.angle);
    imageMode(CENTER);
    image(this.boximg, 0, 0, this.w, this.h);
    pop();
  }
}
