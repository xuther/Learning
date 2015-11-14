function buildBoard() {
	var width = 20;
	var height = 20;
	
	var size = width*height;
	
	for(var i = 0; i < height; i++)
	{
		var row = document.createElement("div");
		row.className = "row";
		for(var j = 0; j < width; j++)
		{
			var cell = document.createElement("div");
			cell.className = "cell";
			row.appendChild(cell);
		}
		document.getElementById("board").appendChild(row);
	}
	
	makeTank();
}

function makeTank(){
	var tankPar = document.createElement("div");
	var tankChild = document.createElement("div");
	
	
	tankChild.className = "tank tankChild"
	tankChild.id = "tank1Child";
	

	tankPar.className = "tank"
	tankPar.id = "tank1";
	tankPar.style.top = "0";
	tankPar.style.left = "0";
	
	tankPar.x = 0;
	tankPar.y = 0;
	tankPar.transform = "translate3d(0,0,0)";
	tankPar.curRotation = 0;
	tankPar.rotation = "rotate(0deg)";
	
	tankPar.appendChild(tankChild);
	
	document.getElementById("board").appendChild(tankPar);	
}

function rotateRight(tank)
{
	var t = document.getElementById(tank);
	var rotate = t.curRotation + 90;
	t.curRotation = rotate;
	t.rotation  = 'rotate('+ rotate.toString() +'deg)';	
	applyTransform(tank);
}

function applyTransform(tank)
{
	var t = document.getElementById(tank);
	t.style.webkitTransform = t.transform;
	t.firstChild.style.webkitTransform = t.rotation
}

function rotateLeft(tank)
{
	var t = document.getElementById(tank);
	var rotate = t.curRotation - 90;
	t.curRotation = rotate;
	t.rotation = 'rotate('+ rotate.toString() +'deg)';	
	applyTransform(tank);
}

function moveForward(tank)
{
	var t = document.getElementById(tank);
	direction = t.curRotation % 360;
	direction = direction / 90;
	
	if (direction < 0){
		direction = 4 + direction;}
		
	var x = 0;
	var y = 0;
	
	switch(direction){
		case (0):
			y = -35;
			break;
		case (1):
			x = 35;
			break;
		case(2):
			y = 35;
			break;
		case (3):
			x = -35;
			break;
	}
	
	console.log(x.toString() + y.toString());
	console.log("Direction" + direction.toString());
	
	var finalx = t.x + x;
	var finaly = t.y + y;
	if (finalx < 0 || finalx > 700-35)
		return;
	if (finaly < 0 || finaly > 700-35)
		return;
	t.x = finalx;
	t.y = finaly;
	t.transform = "translate(" + finalx + "px, " + finaly + "px)";
	applyTransform(tank);
}

function moveBack(tank)
{
		var t = document.getElementById(tank);
	direction = t.curRotation % 360;
	direction = direction / 90;
	
	if (direction < 0){
		direction = 4 + direction;}
		
	var x = 0;
	var y = 0;
	
	switch(direction){
		case (0):
			y = 35;
			break;
		case (1):
			x = -35;
			break;
		case(2):
			y = -35;
			break;
		case (3):
			x = 35;
			break;
	}
	
	console.log(x.toString() + y.toString());
	console.log("Direction" + direction.toString());
	
	var finalx = t.x + x;
	var finaly = t.y + y;
	if (finalx < 0 || finalx > 700-35)
		return;
	if (finaly < 0 || finaly > 700-35)
		return;
	t.x = finalx;
	t.y = finaly;
	t.transform = "translate(" + finalx + "px, " + finaly + "px)";
	applyTransform(tank);
}

function executeMove(key){
	
	switch(key){
		case("w"):
			moveForward("tank1");
			break;
		case("s"):
			moveBack("tank1");
			break;
		case("a"):
			rotateLeft("tank1");
			break;
		case("d"):
			rotateRight("tank1");
			break;
	}
}