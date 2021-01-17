var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var x = cvs.width;
var y = cvs.height;
/*canvas bg
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cvs.width, cvs.height);*/
//images
var m = new Image();
//bgs.id = "bgt";
m.src = "images/bgt.png";
var sScreen = new Image();
sScreen.src = "images/CRIMEBG.png";
bgImageStart();

	//rect
	ctx.beginPath();
	ctx.lineWidth = "2";
	ctx.strokeStyle = "yellow";
	ctx.rect(270,70,500,100);
	ctx.stroke();
	
function startScreen(){

	
	//text
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText("Mystery", 200,100);

	
	//input
    var na = document.createElement("input");
    na.setAttribute("id", "name");
    na.setAttribute("type", "text");
    na.setAttribute("placeholder", "Name");
    var submit = document.createElement("button");
    submit.innerHTML = "submit";
    submit.id = "submit";
    document.getElementById("random").appendChild(na);
    document.getElementById("random").appendChild(submit);
    document.getElementById("submit").onclick = function() {
        var name = document.getElementById("name").value;
        console.log(name);
     };
    //document.getElementById("name").style.
	
}


function bgImageStart(){
	//ctx.drawImage(sScreen,0,0,x,y);
	ctx.drawImage(sScreen,0,0,x,y);
	ctx.drawImage(m,650,250,200,300);	
	requestAnimationFrame(bgImageStart);
	

}

function start(){
  	ctx.clearRect(0,0,800,800);
    		requestAnimationFrame(start);
}
function remove() {
    var elem = document.getElementById('container');	 
    elem.parentNode.removeChild(elem);
	start();
    return false;
}
function pageInit() {
    // Hook up the "remove dummy" button
    var btn = document.getElementById('startBtn');
	
    if (btn.addEventListener){
        // DOM2 standard
        btn.addEventListener('click', remove, false);
	
    }
    else if (btn.attachEvent) {
        // IE (IE9 finally supports the above, though)
        btn.attachEvent('onclick', remove);
    }
    else {
        // Really old or non-standard browser, try DOM0
        btn.onclick = remove;
    }
}
pageInit();
