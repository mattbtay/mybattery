//batStatus();

function batStatus(){

	navigator.getBattery().then(function(battery){
		
		var status = document.getElementById("status-info");

		status.innerHTML = `
			${ battery.level * 100 }%
			${ battery.charging }
			${ battery.chargingTime }
			${ ( battery.dischargingTime / 60 ) / 60 } hours
			`;

	});
}