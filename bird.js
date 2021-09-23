class Birb {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    var bird_features = { isStatic: false, restitution: 1, friction: 2 };
    this.bird = Bodies.rectangle(x, y, w, h, bird_features);
    World.add(world, this.bird);
    this.birdimg = loadImage("assets/bird.png");
  }

  display() {
    var pos = this.bird.position;
    // this.bird.position.x = mouseX
    //this.bird.position.y = mouseY
    push();
    translate(pos.x, pos.y);
    rotate(this.bird.angle);
    imageMode(CENTER);
    image(this.birdimg, 0, 0, this.w, this.h);
    pop();
  }
}
