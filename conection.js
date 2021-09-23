class Conecter {
  constructor(p, b) {
    var conp = {
      pointA: p,
      bodyB: b,
      stiffness: 0.04,
      length: 10,
    };
    this.sling1 = loadImage("assets/sling1.png");
    this.sling2 = loadImage("assets/sling2.png");
    this.sling3 = loadImage("assets/sling3.png");
    this.line = Constraint.create(conp);
    World.add(world, this.line);
  }
  display() {
    image(this.sling1, 200, 175, 70, 150);
    image(this.sling2, 150, 170, 70, 100);
    if (this.line.bodyB != null) {
      var a = this.line.pointA;
      var b = this.line.bodyB.position;
      push();
      strokeWeight(5);
      stroke(48, 22, 8);
      line(b.x + 40, b.y, a.x + 40, a.y);
      line(b.x - 40, b.y, a.x - 40, a.y);
      pop();
    }
  }
  birdbreaker() {
    this.line.bodyB = null;
  }
}
