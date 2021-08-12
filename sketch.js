const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var stones=[]


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground =new Base(width/2,height-10,width,50)
  wallL = new Base(100,height/2+250,100,400)
  wallR =new Base(width-100,height/2+250,100,400)
  jointPoint = new Base(100,height/2+70,20,20)
  bridge = new Bridge(30,{x:width,y:height/2+70})
  Matter.Composite.add(bridge.body,jointPoint)
  
   jointLink = new Links(bridge,jointPoint)

   for(var i = 0;i<8;i++){

    var x = random(width/2-200,width/2+300)
    var y= random(10,100)
    var z= new Stone(x,y,50)
    stones.push(z)
    
   }

   

}

function draw() {
  background("black");
  Engine.update(engine);

  ground.Display()
  wallL.Display()
  wallR.Display()
  jointPoint.Display()
  bridge.show()

  for(var i = 0;i<8;i++){

   stones[i].show()

  }

}
