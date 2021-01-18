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

var stb = new Image();
stb.src = "images/stb.png";


var stbb = new Image();
stbb.src = "images/stbb.png";

var sb= new Image();
sb.src = "images/sb.jpg";

var stb1 = new Image();
stb1.src = "images/stb1.png";

var sbb1 = new Image();
sbb1.src = "images/sbb1.png";

//Scene 2
var DH = new Image();
DH.src = "images/DH.png";

var f = new Image();
f.src = "images/file.png";

var od2 = new Image();
od2.src = "images/od2.png";

var dt = new Image();
dt.src = "images/dt.png";

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
		SOI();
		NB1();

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
		requestAnimationFrame(SOI);

	}


	function NB1(){
		var button = document.createElement("button");
	// 1. Create the button
		button.innerHTML = "NEXT";
		button.id ='btn';
	// 2. Append somewhere
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(button);
	// 3. Add event handler
		button.addEventListener ("click", function() {
		remove();
	SOI1();

	NB2();	
	//pageInit();
});
	function remove(){

// Removes an element from the document.
button = document.getElementById('btn');
 button.parentNode.removeChild(button);
 
	}
	}
	function NB2(){
		var button = document.createElement("button");
	// 1. Create the button
		button.innerHTML = "NEXT";
		button.id ='btn';
	// 2. Append somewhere
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(button);
	// 3. Add event handler
	button.addEventListener ("click", function() {
	SOI2();
	remove();
	NB3();
});
function remove(){

// Removes an element from the document.
button = document.getElementById('btn');
 button.parentNode.removeChild(button);
 
	}
	}
	function NB3(){
		var button = document.createElement("button");
	// 1. Create the button
		button.innerHTML = "NEXT";
		button.id ='btn';
	// 2. Append somewhere
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(button);
	// 3. Add event handler
	button.addEventListener ("click", function() {
	ST1();
	NB33();
	remove();

});
function remove(){

// Removes an element from the document.
button = document.getElementById('btn');
 button.parentNode.removeChild(button);
 
	}
	}
	function NB33(){
		var button = document.createElement("button");
	// 1. Create the button
		button.innerHTML = "NEXT";
		button.id ='btn';
	// 2. Append somewhere
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(button);
	// 3. Add event handler
		button.addEventListener ("click", function() {
	ST1();
	remove();
		SOIP();
			NB4();
	
		
	//pageInit();
});
	function remove(){

// Removes an element from the document.
button = document.getElementById('btn');
 button.parentNode.removeChild(button);
 	
	}
	
	}
	function NB4(){
		var button = document.createElement("button");
	// 1. Create the button
		button.innerHTML = "NEXT";
		button.id ='btn';
	// 2. Append somewhere
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(button);
	// 3. Add event handler
	button.addEventListener ("click", function() {
	
	remove();
	ST2();
   NB5();
});
function remove(){

// Removes an element from the document.
button = document.getElementById('btn');
 button.parentNode.removeChild(button);
 
	}
	
	}
	
	function NB5(){
		var button = document.createElement("button");
	// 1. Create the button
		button.innerHTML = "NEXT";
		button.id ='btn';
	// 2. Append somewhere
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(button);
	// 3. Add event handler
		button.addEventListener ("click", function() {
	ST3();
	remove();
	NB6();
		//SOIP();
		
	
		
	//pageInit();
});
	function remove(){

// Removes an element from the document.
button = document.getElementById('btn');
 button.parentNode.removeChild(button);
 	
	}
	
	}
	function NB6(){
		var button = document.createElement("button");
	// 1. Create the button
		button.innerHTML = "NEXT";
		button.id ='btn';
	// 2. Append somewhere
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(button);
	// 3. Add event handler
		button.addEventListener ("click", function() {
	tbc();
	remove();
});
	function remove(){

// Removes an element from the document.
button = document.getElementById('btn');
 button.parentNode.removeChild(button);
 	
	}
	
	}
	
	function SOI1(){
		  ctx.clearRect(0,0,x,y);
		ctx.drawImage(oneBg,0,0,x,y);
		ctx.drawImage(t,2,200,300,300);
		ctx.drawImage(stb,0,0,800,200);
		ctx.drawImage(stbb,180,144,300,190);
		requestAnimationFrame(SOI1);
		
		
	}
	function SOI2(){
		ctx.drawImage(sb,0,0,x,y);
		ctx.drawImage(od,390,200,300,300);
		ctx.drawImage(stb1,0,0,800,200);
		ctx.drawImage(sbb1,600,200,150,150);
		
		requestAnimationFrame(SOI2);	
	}
		function ST1(){
		ctx.drawImage(sb,0,0,x,y);
		ctx.drawImage(DH,2,200,300,300);
		//ctx.drawImage(stb1,0,0,800,200);
		//ctx.drawImage(sbb1,600,200,150,150);
	
		requestAnimationFrame(ST1);	
	}

	function ST2(){
		ctx.drawImage(oneBg,0,0,x,y);
		ctx.drawImage(od2,390,200,300,300);
		ctx.drawImage(dt,2,200,300,300);
		//ctx.drawImage(f,0,0,x,y);
		//ctx.drawImage(DH,2,200,300,300);
		//ctx.drawImage(stb1,0,0,800,200);
		//ctx.drawImage(sbb1,600,200,150,150);
	
		requestAnimationFrame(ST2);	
	}
	function ST3(){
		 ctx.clearRect(0,0,x,y);
		ctx.drawImage(oneBg,0,0,x,y);
		ctx.drawImage(f,200,0,600,600);
		//ctx.drawImage(oneBg,0,0,x,y);
	//	ctx.drawImage(od2,390,200,300,300);
		ctx.drawImage(DH,2,200,300,300);
		
		//ctx.drawImage(f,0,0,x,y);
		//ctx.drawImage(DH,2,200,300,300);
		//ctx.drawImage(stb1,0,0,800,200);
		//ctx.drawImage(sbb1,600,200,150,150);
	
		requestAnimationFrame(ST3);	
	}
	function SOIT(){
		ctx.drawImage(oneBg,0,0,x,y);
		ctx.drawImage(t,2,200,300,300);
		requestAnimationFrame(SOIT);
	}
	function tbc(){
			ctx.clearRect(0,0,x,y);
			ctx.fillRect(0,0,x,y);
			ctx.fillStyle="red";
		ctx.font = "50px Verdana";
		ctx.fillText("TO BE CONTINUED", 100,100);
		ctx.fillStyle = "black";
		requestAnimationFrame(tbc);	
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
		ctx.fillText("Hello "+name+" I am detective Hollins, I see you are here", 100,100);
		ctx.fillText("to help me crack this case. Follow along.",100,130);
		  requestAnimationFrame(act);
	}
	}
	
	
	
	
	