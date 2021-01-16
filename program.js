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
