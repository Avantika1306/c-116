noseX=0;
noseY=0;
leftSX=0;
rightSX=0;
leftSY=0;
rightSY=0;


function preload(){
    clownNose=loadImage("https://i.postimg.cc/XqV85hSR/image-removebg-preview-20.png");
lefts=loadImage("https://i.postimg.cc/bvpKyqmP/image-removebg-preview-22.png");
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(300 , 300);
posenet=ml5.poseNet(video , modelLoaded);
posenet.on('pose',gotResults);
}

function gotResults(results){
    console.log(results);
    console.log("nose x = " + results[0].pose.leftShoulder.x );
    console.log("nose y = " + results[0].pose.leftShoulder.y );
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;


    leftSX=results[0].pose.leftShoulder.x;
    leftSY=results[0].pose.leftShoulder.y;
    rightSX=results[0].pose.rightShoulder.x;
    rightSY=results[0].pose.rightShoulder.y;
}


function modelLoaded(){
    console.log("pose net is initialized");
}

function draw(){
image(video,0 , 0 ,300,300);
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX,noseY,20);
image(clownNose,noseX-50 ,noseY-165,100,100);
image(lefts,leftSX-300 ,leftSY-50,150,150);
}
function takeSnapshot(){
    save("myselfie.png");
}