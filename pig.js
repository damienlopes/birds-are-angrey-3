class Piggy {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    var pig_features = { isStatic: false, restitution: 1, friction: 2 };
    this.pig = Bodies.rectangle(x, y, w, h, pig_features);
    World.add(world, this.pig);
    this.pigimg = loadImage("assets/enemy.png");
    this.visable = 255
  }

  display() {
    if (this.pig.speed > 3) {
      World.remove(world, this.pig)
      push()
      tint (255, this.visable)
      image(this.pigimg, this.pig.position.x, this.pig.position.y, this.w, this.h)

      this.visable -=2 
      pop()
    } else {
      var pos = this.pig.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.pig.angle);
      imageMode(CENTER);
      image(this.pigimg, 0, 0, this.w, this.h);
      pop();
    }
  }
}
