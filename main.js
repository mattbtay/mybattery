if (Modernizr.batteryapi) {
 batStatus();
} else {
	document.write('sadface :(');
}


const cs = document.getElementById("charge-status");

function batStatus(){

	navigator.getBattery().then(function(battery){
		
		const status = document.getElementById("status-info");
		let batLevel = battery.level * 100,
			batPercent = battery.level * 281;


		/*status.innerHTML = `
			${ batLevel }%
			${ battery.charging }
			${ battery.chargingTime }
			${ ( battery.dischargingTime / 60 ) / 60 } hours
			`;*/

		

		// full charge width = 281
		cs.setAttribute('data-full', batPercent );
		console.log( `${ batPercent } / ${ batLevel }` );
		
		setTimeout(function(){
			cs.setAttribute('width', batPercent);
		}, 1000);

		if (battery.charging === true) {
			document.getElementById('charge-path').classList.remove('hidden');
		}


	});
}

