let greg; // name of the gurtle
let cbox;
let kbox;
let pbox;
let bbox;
let sbox;

function setup() {
  
  createCanvas(600, 600);
  background(32)
  kbox = createCheckbox('Koch curve',true);
  cbox = createCheckbox('cauliflower',true);
  pbox = createCheckbox('Escher penguin (only box checked)',false);
  bbox = createCheckbox('cauli-bug (only box checked)',false);
  sbox = createCheckbox('Koch snowflake (only box checked)', false);
  angleMode(DEGREES);// need angle mode set to degrees
 // create a red gurtle named greg in the center of the canvas
  greg = new Gurtle(width/4,height/2,color(0,255,0));
  frameRate(1);

}

function draw() {
  background(32)
  // get the level number from mouseX cauliflower max 15, koch max 6
  let clevel = floor(map(mouseX,0,width,0,15,true));
  let klevel = floor(map(mouseX,0,width,0,6,true));
  let plevel = floor(map(mouseX,0,width,0,9,true));
  

  if (cbox.checked()){
  // reset the color and position of the gurtle for cauliflower
    greg.clr = color(0,255,0)
    greg.x = width/4;
    greg.y = height/2;
    greg.angle =0;
    cauliflower(greg,clevel,300);
  }

  if (kbox.checked()){
  // reset the color and position of the gurtle for koch
    greg.clr = color(255,200,0);
    greg.angle =0
    greg.x =0;
    greg.y =height/3;
    koch(greg,klevel,600)
  }

  if (pbox.checked() && !kbox.checked() && !cbox.checked() && !bbox.checked() && !sbox.checked()){
    // position and color of penguin
    greg.clr = color('yellow');
    greg.angle =0
    greg.x = width/2;
    greg.y =height/2;
    penguin(greg,plevel,100);

  }

  if (bbox.checked() && !kbox.checked() && !cbox.checked() && !pbox.checked() && !sbox.checked()){
    // position and color of caulibug
    greg.clr = color('orange');
    greg.angle =0
    greg.x = width/4;
    greg.y =height/4;
    caulibug(greg,clevel,200);
  }


  if (sbox.checked() && !kbox.checked() && !cbox.checked() && !pbox.checked() && !pbox.checked()){
    // position and color of snowflake
    greg.clr = color('orange');
    greg.angle =0
    greg.x = width/5;
    greg.y =height/3;
    snowflake(greg,klevel,400);
  }
}

// koch curve

function koch(t, level, size){
  if (level == 0){
    t.forward(size);

  }else{
    koch(t, level-1, size/3)   // Go 1/3 of the way
    t.left(60)
    koch(t, level-1, size/3)
    t.right(120)
    koch(t, level-1, size/3)
    t.left(60)
    koch(t, level-1, size/3)
  }

}


// cauliflower

function cauliflower(t, level,size){
  
  if (level == 0){
    t.forward(size);
    
  } else{
    let newSize = size/1.414;
    let newlevel = level -1;
    t.right(45);
    cauliflower(t,newlevel,newSize);
    t.left(90);
    cauliflower(t,newlevel,newSize);
    t.right(45);
  }
  
}

// escher penguins is just a modification of cauliflower

function penguin(t, level,size){
  
  if (level == 0){
    t.forward(size);
    
  } else{
    let newSize = size/1.414;
    let newlevel = level -1;
    t.right(60);
    penguin(t,newlevel,newSize);
    t.left(60);
    penguin(t,newlevel,newSize);
    t.right(60);
    penguin(t,newlevel,newSize);
  
  }
  
}

// caulibug calls cauliflower 4 times

function caulibug(t,level,size){
  cauliflower(t,level,size);
  t.right(60);
  cauliflower(t,level,size);
  t.right(60);
  cauliflower(t,level,size);
  t.right(60);
  cauliflower(t,level,size);

}



// snowflake is three calls to koch
// my left and right for koch are reversed to
// the books, but makes a point about directions

function snowflake(t, level,size){
  koch(t,level,size);
  t.right(120);
  koch(t,level,size);
  t.right(120);
  koch(t,level,size);

}