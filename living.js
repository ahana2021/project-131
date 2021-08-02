function setup(){
    canvas=createCanvas(800,500);
    canvas.center();
}
img1=""
function preload(){
    img1= loadImage("living room.jpg");
}
function draw(){
    image(img1,0,0,800,500);
     fill("red");
     textSize(25)
     text("Candles",550,150,40,30)
     noFill();
     stroke("red");
     strokeWeight(2);
     rect(550,80,150,100);
     text("Sofa",200,350,10,54);
     noFill();
     stroke("red");
     rect(200,350,400,100);
     text("Pictures",100,100,20,50);
     rect(20,40,150,100);
}
