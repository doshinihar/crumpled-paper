class Paper {
    constructor(x, y) {
      var options = {
         isStatic:false,
        'restitution':0.3,
        'friction': 0,
        'density':1.2
      }
      this.body = Bodies.circle(x,y,50,options);
      this.image = loadImage("paper.png");
      this.radius = 100;
      World.add(world,this.body);

  }
  display(){
      push();
      translate(this.body.position.x,this.body.position.y);
      //angleMode(RADIANS);
      //rotate(this.body.angle);
      imageMode(CENTER);
     // ellipseMode(RADIUS);
      image(this.image, 0,0,this.radius,this.radius);
      pop();
    };
  };
  