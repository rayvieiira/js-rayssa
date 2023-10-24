function setup() {
    createCanvas(600, 600)
    background("pink");
  }
  
  function draw() {
  
  stroke("rgb(0,0,0)"); 
    fill("#9C27B0");
      
  // console.log(mouseIsPressed);
    
    if (mouseIsPressed){
      rect(mouseX,mouseY,20,35);
    }
    