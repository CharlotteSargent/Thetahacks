var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var x = cvs.width;
var y = cvs.height;

var printName = document.createElement("p");
var printText = document.createTextNode("Welcome / start murder etc -- u can change hte text here", name );

/*canvas bg
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cvs.width, cvs.height);*/
//images
var m = new Image();
m.src = "images/bgt.png";


var sScreen = new Image();
sScreen.src = "images/CRIMEBG.png";
bgImageStart();

//Scene1
var oneBg = new Image();
oneBg.src = "images/base.png";

var t = new Image();
t.src = "images/tp2.png";

var od = new Image();
od.src = "images/op1.png";

/*var sot = new Image();
sot.src = "images/text1.png";
*/
function startScreen(){ 


	
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
		printName.appendChild(printText);
		document.getElementById("random").appendChild(printName);
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
  	ctx.clearRect(0,0,x,y);
	SOI();
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

	
	function SOI(){
		ctx.drawImage(oneBg,0,0,x,y);
		ctx.drawImage(t,2,200,300,300);
		ctx.drawImage(od,390,200,300,300);
		requestAnimationFrame(SOI);
	}
	
	
	function SOIT(){
				ctx.drawImage(oneBg,0,0,x,y);
		ctx.drawImage(t,2,200,300,300);
		requestAnimationFrame(SOIT);
	}
	
	
	
	
	
	
	
	