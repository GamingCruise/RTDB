var ball;
var database,Position,ballPosition;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ballPosition=database.ref('ball/position')
ballPosition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(Position!==undefined){
        if(keyDown(LEFT_ARROW)){
            writePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+1);
        }
    }
   
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        "x":Position.x+x,
        "y":Position.y+y

    })
    
}
function readPosition(data){
Position=data.val();
ball.x=Position.x;
ball.y=Position.y;
}

function showError(){
    console.log("something")
}
















