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
	var tank = document.createElement("div");
	tank.id = "tank1";
	tank.className = "tank";
	tank.curRotation = 0;
	tank.style.top = 0;
	tank.style.left = 0;
	tank.x = 0;
	tank.y = 0;
	tank.rotation = "rotate(0deg)"
	tank.transform = "translate3d(0,0,0)"
	document.getElementById("board").appendChild(tank);	

}

function rotateRight(tank)
{
	var t = document.getElementById(tank);
	var rotate = t.curRotation + 90;
	t.curRotation = rotate;
	t.rotation  = 'rotate('+ rotate.toString() +'deg)';	
	applyTransform(tank)
}

function applyTransform(tank)
{
	var t = document.getElementById(tank);
	t.style.webkitTransform = t.rotation + " " + t.transform;
}

function rotateLeft(tank)
{
	var t = document.getElementById(tank);
	var rotate = t.curRotation - 90;
	t.curRotation = rotate;
	t.rotation = 'rotate('+ rotate.toString() +'deg)';	
	applyTransform(tank)
}

function moveForward(tank)
{
	var t = document.getElementById(tank);
	direction = t.curRotation % 360;
	direction = direction / 90;
	
	if (direction < 0){
		direction = direction *-1;}
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
	
	console.log(x.toString() + y.toString())
	
	var finalx = t.x + x;
	var finaly = t.y + y;
	if (finalx < 0 || finalx > 700)
		return;
	if (finaly < 0 || finaly > 700)
		return;
	t.x = finalx;
	t.y = finaly;
	t.transform = "translate(" + finalx + "px, " + finaly + "px)";
	applyTransform(tank);
}

function moveBack(tank)
{
	
}