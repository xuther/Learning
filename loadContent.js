function loadTables(){
	getData(populateTable);
}

function getData(callback)
{
	//----------------------------------------------
	//We would make ajax calls here to get the Data
	var data = 
	[
		{
			date: "1/11/1111",
			name: "Test1",	
			tank: "Test1",
			outcome: "Victory"
		},
		{
			date: "22/22/2222",
			name: "Test2",
			tank: "Test2",
			outcome: "2nd"
		},
		{
			date: "3/33/3333",
			name: "test3",
			tank: "test3",
			outcome: "3rd"	
		},
		{
			date: "4.44.4444",
			name: "test4",
			tank: "test4",
			outcome: "4th"
		}
	]
	//----------------------------------------------
	
	callback(data)
}

function populateTable(data)
{
	var table = document.getElementById("gameList");
	
	for (line in data)
	{
		console.log("processing Line");
		console.log(line);
		//Edit the button to do what we want it to do. 
		var button = document.createElement("button");
		button.className = "btn btn-info viewButtons";
		button.innerHTML = "View"
		
		var row = table.insertRow();
		
		var dateCell = row.insertCell(0);
		var nameCell = row.insertCell(1);
		var tankCell = row.insertCell(2);
		var outcomeCell = row.insertCell(3);
		var buttonCell = row.insertCell(4);
		
		dateCell.innerHTML = data[line].date;
		nameCell.innerHTML = data[line].name;
		tankCell.innerHTML = data[line].tank;
		outcomeCell.innerHTML = data[line].outcome;
		buttonCell.appendChild(button);
	}	
}