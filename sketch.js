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
  //background(220);
  //sqr(greg,random(width),random(height), random(20,width-10));
  //tree(greg,100, random(20,75))
  //greg.right(random(360))
  cauliflower(greg,15,300);
  greg.clr = color(255,200,0);
  greg.x =0;
  greg.y =height/3;
  koch(greg,5,600)
  noLoop();
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


function sqr(obj, x,y, ln){
  obj.x = x;
  obj.y =y;
  for (let i=0; i<4;i++){
    obj.forward(ln)
    obj.right(90)
  }
}


function tree(t, size, angle){
  //background(255);
  // set the tree at the bottom


  if (size < 2){
     return;
  }else{
    // draw tree
    t.forward(size);
    t.right(angle);
    tree(t,size-15,angle);
    t.left(angle*2);
    tree(t,size-15,angle);
    t.right(angle);
    t.backward(size);
    
  }
   
}
