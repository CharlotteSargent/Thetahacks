var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


function startScreen(){
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText("Mystery", 200,100);
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



function start(){

    	
}
function remove() {
    var elem = document.getElementById('startBtn');
    elem.parentNode.removeChild(elem);
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
