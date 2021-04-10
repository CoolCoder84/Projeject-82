var mouseEvent="empty";
var lastX,lastY;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="#00e5ff";
wIdth=5;
canvas.addEventListener("mousedown",my_mouseDown);
function my_mouseDown(e){
color=document.getElementById("color").value;
wIdth=document.getElementById("wIdth").value;
mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseUP);
function my_mouseUP(e){
    mouseEvent="mouseUP";
}

canvas,addEventListener("mouseleave",my_mouseLeave);
function my_mouseLeave(e){
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",my_mouseMove)
function my_mouseMove(e){
    current_X=e.clientX-canvas.offsetLeft;
    current_Y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=wIdth;

        console.log("Last position of X & Y cordinates");
        console.log("X= "+lastX+"   Y= "+lastY);
        ctx.moveTo(lastX,lastY);

        console.log("Curent position of X & Y cordinates");
        console.log("X= "+current_X+"   Y= "+current_Y);
        ctx.lineTo(current_X,current_Y);
        ctx.stroke();
    }
    lastX=current_X;
    lastY=current_Y;
}

function clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}