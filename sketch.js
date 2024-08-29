let sun = 320
let furby

function preload(){
furby = loadImage('furby.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
}

function draw() {

  background(158, 223, 255);

  image(furby, windowWidth/2, windowHeight/2)
  
  fill(255, 198, 117);
  noStroke();
  ellipse(sun, 50, 250);
  fill(246, 252, 126);
  ellipse(sun, 50, 225);
  
  fill(54, 10, 16);
  rect(0, 300, 100, 400);
  rect(550, 300, 100, 400);
  
  stroke(1);
  strokeWeight(2);
  line(100, 400, 550, 400);
  
  line(100, 350, 550, 350);
  rect(92,350,10,50);
  rect(120,350,10,50);
  rect(150,350,10,50);
  rect(180,350,10,50);
  rect(210,350,10,50);
  rect(240,350,10,50);
  rect(270,350,10,50);
  rect(300,350,10,50);
  rect(330,350,10,50);
  rect(360,350,10,50);
  rect(390,350,10,50);
  rect(420,350,10,50);
  rect(450,350,10,50);
  rect(480,350,10,50);
  rect(510,350,10,50);
  rect(540,350,10,50);
  
  fill(43, 147, 255);
  ellipse(mouseX, mouseY, 20, 20);
  

  //print(mouseY)
  
  if(mouseY > 500){
    fill(15, 51, 255);
    rect(100,500, 450, 150)
    noStroke();
  }

  //if(keyIsPressed == true){
  //  x = 100
  //    background(197,60,207)
  //} else {
  //    background(53, 180, 100)
  //    x = 600
  //}



  

}
