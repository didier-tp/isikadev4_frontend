

var x,y; //last (x,y) relative to canvas
var xC,yC; //new (x,y) relative to canvas

function compute_xC_yC_relativeTocanvas(e,canvasElement){
		xC = e.pageX - canvasElement.offsetLeft;
		yC = e.pageY - canvasElement.offsetTop;
	}
	
function clear_canvas(){
		var canvasElement = document.getElementById("myCanvas");
		//***********A FAIRE EN TP **********************
		//effacer le contenu du canvas , en
		//- récupérant un accès au context "2d" (variable locale "ctx")
        //- appelant la méthode ctx.clearRect (x1,y1,x2,y2 )
		//sachant qu'il existe canvasElement.width et canvasElement.height 
		//************************************************
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
		//***********A FAIRE EN TP **********************
		//dessiner une line du point (x,y) vers le point (xC,yC)
		//************************************************
		
		x=xC; y=yC;//store last coord for next line
	}
	
function startDessin(){ 

	var myCanvas = document.getElementById("myCanvas");

	myCanvas.addEventListener("click" , log_coords_and_drawLine);

}