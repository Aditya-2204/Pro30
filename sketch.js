
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var ball,Base;
function preload(){
    polygon_img=loadImage("polygon.png");
}

function setup(){
   canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    stand1 = new Stand(390,300,250,10);
    box1 = new Box(300, 275, 30, 20);
    box2 = new Box(330, 275, 30, 20);
    box3 = new Box(360, 275, 30, 20);
    box4 = new Box(390, 275, 30, 20);
    box5 = new Box(420, 275, 30, 20);
    box6 = new Box(450, 275, 30, 20);
    box7 = new Box(480, 275, 30, 20);
    box8 = new Box(330, 235, 30, 20);
    box9 = new Box(360, 235, 30, 20);
    box10 = new Box(390, 235, 30, 30);
    box11 = new Box(420, 235, 30, 20);
    box12 = new Box(450, 235, 30, 20);
    box13 = new Box(360, 195, 30, 20);
    box14 = new Box(390, 195, 30, 20);
    box15 = new Box(420, 195, 30, 20);
    box16 = new Box(390, 155, 30, 20);
    //Base = new Ground()
    ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  slingShot = new SlingShot(this.ball,{x:100,y:200});
}

function draw(){
    background(56,44,44);
    drawSprites();
    Engine.update(engine);
    fill("skyblue")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("pink")
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill ("turquoise")
    box13.display();
    box14.display();
    box15.display();
    fill("grey")
    box16.display();
   // ground.display();
  // Base.display();
  stand1.display();
//ball.display();
slingShot.display();
imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
}

function mouseDragged(){
  Matter.Body.setPosition(slingShot.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  SlingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.polygon)
  }
}