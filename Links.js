class Links{

    constructor(BodyA,BodyB){
    var lastLink=BodyA.body.bodies.length-2
    this.link=Constraint.create({

 bodyA:BodyA.body.bodies[lastLink],
 pointA:{x:0,y:0},
 bodyB:BodyB.body,
 pointB:{x:0,y:0},
 length:10,
 stiffness:0.8

    })

    World.add(world,this.link)
        
    }
    
     }