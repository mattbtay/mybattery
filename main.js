batStatus();

function batStatus(){
	navigator.getBattery().then(function(battery){
		
		var status = document.getElementById("status");



		status.innerHTML = `
						<p>${battery.level * 100}%</p>
						<p>${battery.charging}</p>
						<p>${battery.chargingTime}</p>
						<p>${(battery.dischargingTime / 60) / 60} hours</p>
						`;

	});
}