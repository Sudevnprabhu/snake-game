var canvas;
var snake;
var inc = 20;
var food;
var bg;
var speed=[10,20,30,40,50,60,70,80,90,100];
var hit;
var lost;
var dull;
var done;
//var box1,box2,box3,box4,


function preload(){
    bg=loadImage("back.jpg");
    hit=loadSound("hit.mp3");
    lost=loadSound("lose.mp3");
    done=loadSound("win.mp3");
}


function setup(){
    canvas= createCanvas(500,500);
    frameRate(5);
    spawnFood();

    snake=new Snake();
     
}

function draw(){
    background("purple");

    snake.gameover();
    snake.update();
    snake.display();
   
    fill("red");
    rect(food.x,food.y,20,20);

    textSize(20);
    text("score:"+snake.total,400,50);

    if(snake.total === speed){
        frameRate()+10;
    }

    if(snake.total === 50){
        done.play();
        background(bg);
        textSize(30);
        fill("yellow");
        stroke("blue");
        text("You Won",50,130);
        text("your score:"+snake.total,50,160);
    }

    if(snake.eat(food)){
        hit.play();
        spawnFood();
    }

    if(snake.total === dull){
        background("green");
        textSize(30);
        fill("yellow");
        stroke("blue");
        text("You Lost",50,130);
        lost.play();
    }
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        snake.mov(0,-1);
    } else  if(keyCode === DOWN_ARROW){
        snake.mov(0,1);
    }else  if(keyCode === RIGHT_ARROW){
        snake.mov(1,0);
    }else  if(keyCode === LEFT_ARROW){
        snake.mov(-1,0);
    }
}

function spawnFood(){
    var cols=floor(width/inc);
    var rows=floor(height/inc);
    food= createVector(floor(random(cols)), floor(random(rows)));
    food.mult(inc);
}























