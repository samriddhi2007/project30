/*class Box  {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
    }
  
  };
 */

  class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
     
      if(this.body.speed<3){
        super.display();
      }
        else{
        World.remove(world,this.body)
        
      
      push();
      this.visiblity = this.visiblity-5
      tint(255,this.visiblity)
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      translate(this.body.position.x, this.body.position.y);
      var angle = this.body.angle;
      rotate(angle);
      rect(0, 0, this.width, this.height);
      pop();
        }
    }
}


