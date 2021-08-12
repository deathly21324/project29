class Stone{

constructor(x,y,r){

var options = {

restitution:0.1

}

this.body=Bodies.circle(x,y,r,options)
this.r=r

World.add(world,this.body)

}

show(){


push()

fill("yellow")
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
ellipseMode(RADIUS)
ellipse(0,0,this.r,this.r)

pop()


}

}