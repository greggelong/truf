let greg; // name of the gurtle

function setup() {
  
  createCanvas(600, 600);
  background(32)
  angleMode(DEGREES);// need angle mode set to degrees
 // create a red gurtle named greg in the center of the canvas
  greg = new Gurtle(width/4,height/2,color(0,255,0));
  frameRate(1);
  print(greg.clr)
}

function draw() {
  background(32)
  // get the order number from mouseX cauliflower max 15, koch max 6
  let cOrder = floor(map(mouseX,0,width,0,15,true));
  let kOrder = floor(map(mouseX,0,width,0,6,true));
  // reset the color and position of the gurtle for cauliflower
  greg.clr = color(0,255,0)
  greg.x = width/4;
  greg.y = height/2;
  greg.angle =0;
  cauliflower(greg,cOrder,300);
  
  // reset the color and position of the gurtle for koch
  greg.clr = color(255,200,0);
  greg.angle =0
  greg.x =0;
  greg.y =height/3;
  koch(greg,kOrder,600)
  
}

function koch(t, order, size){
  if (order == 0){
    t.forward(size);

  }else{
    koch(t, order-1, size/3)   // Go 1/3 of the way
    t.left(60)
    koch(t, order-1, size/3)
    t.right(120)
    koch(t, order-1, size/3)
    t.left(60)
    koch(t, order-1, size/3)
  }

}




function cauliflower(t, order,size){
  
  if (order == 0){
    t.forward(size);
    
  } else{
    let newSize = size/1.414;
    let newOrder = order -1;
    t.right(45);
    cauliflower(t,newOrder,newSize);
    t.left(90);
    cauliflower(t,newOrder,newSize);
    t.right(45);
  }
  
  
  
  
}
