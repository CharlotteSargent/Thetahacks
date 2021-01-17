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

var bub = new Image();
bub.src = "images/bubble.png";

var rec = new Image();
rec.src = "images/rec.png";

/*var sot = new Image();
sot.src = "images/text1.png";
*/
function startScreen(){ 


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
		ctx.drawImage(bub,180,204,150,150);
		ctx.drawImage(rec,0,0,800,200);
		NB1();
	}
	function NB1(){
	var next = document.createElement("button");
    next.innerHTML = "NEXT";
    next.id = "nx";
    document.getElementById("nbt").appendChild(next);
    document.getElementById("nx").onclick = function(){
		SOI1();
	};
	}
	function SOI1(){
		  ctx.clearRect(0,0,x,y);
		ctx.drawImage(oneBg,0,0,x,y);
		ctx.drawImage(t,2,200,300,300);
		requestAnimationFrame(SOI1);	
	}
	function SOI2(){
		ctx.drawImage(oneBg,0,0,x,y);
		ctx.drawImage(t,2,200,300,300);
		ctx.drawImage(od,390,200,300,300);
		requestAnimationFrame(SOI2);	
	}
	
	function SOIT(){
				ctx.drawImage(oneBg,0,0,x,y);
		ctx.drawImage(t,2,200,300,300);
		requestAnimationFrame(SOIT);
	}
	
	
	function SOIP(){
		
	
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
       act();
     };
    //document.getElementById("name").style.
	function act(){
		 var name = document.getElementById("name").value;
        console.log(name);
		printName.appendChild(printText);
		//alert("Hello "+nt);
		document.getElementById("random").appendChild(printName);
		ctx.fillStyle = "white";
		ctx.font = "20px Verdana";
		ctx.fillText("Hello "+name+" I am detective Hollins, I see you are here to learn.",50,200);
		  requestAnimationFrame(act);
	}
	}
	
	
	
	
	
