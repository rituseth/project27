class Roof{
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 10;
      this.height = 300;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
   
      fill ("brown");
      rect(pos.x, pos.y,300,10);
    }
  };