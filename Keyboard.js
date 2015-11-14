document.addEventListener('keyup', function(event){
	var keys = [87,65,83,68];
	var keyBinds = ['w','a','s','d'];
	var i;
	if ((i = keys.indexOf(event.keyCode)) >-1)
		{
			console.log("Key pressed" + keyBinds[i])
			executeMove(keyBinds[i]);
		}
});