

var x,y; //last (x,y) relative to canvas
var xC,yC; //new (x,y) relative to canvas

function compute_xC_yC_relativeTocanvas(e,canvasElement){
		xC = e.pageX - canvasElement.offsetLeft;
		yC = e.pageY - canvasElement.offsetTop;
	}
	
function clear_canvas(){
		var canvasElement = document.getElementById("myCanvas");
		var ctx = canvasElement.getContext("2d");
        ctx.clearRect ( 0 , 0 , canvasElement.width, canvasElement.height );
		x=null; y=null;//reset last coord for next line
	}
	
function log_coords_and_drawLine(event){
		var canvasElement = document.getElementById("myCanvas");
		compute_xC_yC_relativeTocanvas(event,canvasElement);
		var msg="click at x=" + xC + " y=" + yC;
		console.log(msg);
		document.getElementById("my_status_msg").innerHTML=msg;
	    
		var ctx = canvasElement.getContext("2d");
		if(x == null &&  y == null){
			x=xC; y=yC;
		}
		ctx.beginPath();
		ctx.moveTo(x,y);//from last x,y
		ctx.lineTo(xC,yC);//to new xC,yC
		ctx.closePath();
		
		x=xC; y=yC;//store last coord for next line
		ctx.stroke();
	}
	
function startDessin(){ 

	var myCanvas = document.getElementById("myCanvas");

	myCanvas.addEventListener("click" , log_coords_and_drawLine);

}