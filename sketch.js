var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(500,500); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    textSize(25);
    noStroke();
    fill(0,255,0);
    text("GREEN stands for MINUTES HAND", 600,330);

    textSize(18);
    noStroke();
    fill("white");
    text("12", 240,145);

    noStroke();
    fill("white");
    text("3", 360,255);

    noStroke();
    fill("white");
    text("9", 130,255);

    noStroke();
    fill("white");
    text("6", 245,370);

    //Translation and rotation
    translate(250,250);
    rotate(-90);

    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();

    //To create ab iterative rotation
    strokeWeight(8);
    stroke(255, 150, 235);
    noFill();
    scAngle = map(sc, 0, 60, 0, 360);
    strokeWeight(8);
    stroke(154, 234, 101);
    mnAngle = map(mn,0,60,0,360);
    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr % 12,0,12,0,360);

    //drawing seconds hand
    push();
    rotate(scAngle); //rotate the hand based on angle calculated
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,90,0);
    pop()

    //drawing minutes hand
    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,80,0);
    pop()

    //drawing hour hand
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,70,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(7);
    noFill();
    //Seconds
    stroke(255,0,0);
    arc(0,0,310,310,0,scAngle);
    //Minutes
    strokeWeight(7);
    stroke(0,255,0);
    arc(0,0,285,285,0,mnAngle);
    //Hour
    strokeWeight(7);
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);

    drawSprites();
  // strokeWeight(5);
   //stroke(0,255,0);
  
}