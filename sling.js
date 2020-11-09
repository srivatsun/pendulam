class Sling {
    constructor(body1,point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            length: 200,
            stiffness:0
     }
    this.point2 = point2
    this.band = Constraint.create(options)
    World.add(world, this.band)
    
    
    
    
    }
    
    display(){
       var point1 = this.band.bodyA.position
       var point2 = this.point2
    push();
       
      stroke("white") 
    strokeWeight(5)
    
        line(point1.x,point1.y-35,point2.x,point2.y)
       
    pop();
    }
    
    
    
    
    }