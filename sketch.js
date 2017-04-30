var mic;
function setup(){

createCanvas(windowWidth,windowHeight)
    
mic = new p5.AudioIn()
mic.start();
    



}

function draw(){
    
  background(255);
    
  micLevel = mic.getLevel();
  print(micLevel);
    
  ellipse(width/2,height/2,micLevel*10000,micLevel*10000);
  
}