	
 batStatus();



const cs = document.getElementById("charge-status");
const csa = document.getElementById("charge-status-ani");
const cp = document.getElementById('charge-path');

function batStatus(){

	navigator.getBattery().then(function(battery){
		
		const status = document.getElementById("status-info");
		let batLevel = battery.level * 100,
			batPercent = battery.level * 281;

		//let batPercent = battery.level = 125;

		//set battery status color
		batColors();

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

			

			if (battery.charging === true ) {
				cp.classList.remove('hidden');
			} else {
				cp.classList.add('hidden');
			}
		}

		function levelChange(){

			cs.setAttribute('width', batPercent);
			cs.classList.add('bat-change');
			setTimeout(function(){
				cs.classList.remove('bat-change');
			},300);

		}

		function batColors() {
			switch( true ) {
				case (batPercent <= 56):
					cs.setAttribute('fill', '#c0392b');
					break;

				case (batPercent  >= 56 && batPercent <= 125):
					cs.setAttribute('fill', '#f39c12');
					break;

				case (batPercent > 125):
					cs.setAttribute('fill', '#2ecc71');
			}
		}

		battery.addEventListener('chargingchange', updateCharge);
		//battery.addEventListener('levelchange', levelChange);


	});
}

