function setup(){
    canvas=createCanvas(800,500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
img=""
function preload(){
    img= loadImage('balcony.jpg');
}
 status="";
 objects=[];
 function preload(){
     img= loadImage("balcony.jpg");
 }
 
 function modelLoaded(){
     console.log("ModelLoaded!!!");
     status = true;
 }
 function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }

  function draw() {
    image(img, 0, 0, 380, 380);
        if(status != "")
        {     
          objectDetector.detect(img, gotResult);
          for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;
   
            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
          }
        }
  }
