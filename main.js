	
 batStatus();



const cs = document.getElementById("charge-status");
const csa = document.getElementById("charge-status-ani");
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
		cs.setAttribute('width', batPercent);
		csa.setAttribute('to', batPercent);
		//console.log( `${ batPercent } / ${ batLevel }` );
		
		
		if (battery.charging === true ) {
			document.getElementById('charge-path').classList.toggle('hidden');
		}

		// show hide the charging indicator	
		updateCharge();

			function updateCharge(){

				const cp = document.getElementById('charge-path');

				if (battery.charging === true ) {
					cp.classList.remove('hidden');
				} else {
					cp.classList.add('hidden');
				}
		}

		battery.addEventListener('chargingchange', updateCharge);


	});
}

