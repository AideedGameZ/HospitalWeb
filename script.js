function openLoginModal(){
	let modal = document.getElementById('login_modal');
	modal.style.display = 'flex';
}

function closeLoginModal(){
	let modal = document.getElementById('login_modal');
	modal.style.display = 'none';
}

//Doctor Page____________________________________________________________
let patient_num = 0;

function addPatientforDoctor(fullname){
	let content = document.getElementById('patient_list');
	patient_num++;

	content.innerHTML += 
	`
				<tr id='pat${patient_num}'>
					<td style='width:60%;'>${fullname}</td>
					<td>
						<button type='button' onclick="openLogPatient('${fullname}')">Log</button>
						<button type='button' onclick="solvePatient('pat${patient_num}')">Done</button>
					</td>
				</tr>
	`;
}

function openLogPatient(fullname){
	let logcard = document.getElementById('patientLog');
	let patName = document.getElementById('patName');

	closeManageDischarge();

	logcard.style.display = 'block';
	patName.textContent = `Patient Info - ${fullname}`;
}

function solvePatient(patid){
	let pat = document.getElementById(patid);
	let logcard = document.getElementById('patientLog');

	logcard.setAttribute('style','display:none');
	pat.setAttribute('style','display:none');
}

//Staff Page____________________________________________________________
function addPatient(fullname, status){
	let content = document.getElementById('patient_list');
	patient_num++;

	content.innerHTML += 
	`
				<tr id='pat${patient_num}'>
					<td style='width:60%;'>${fullname}</td>
					<td>${status}</td>
					<td>
						<button type='button' onclick="openManageDischarge('${fullname}')"><b>?</b></button>
					</td>
				</tr>
	`;
}

function addPatientReq(fullname){
	let content = document.getElementById('patientreq_list');
	patient_num++;

	content.innerHTML += 
	`
				<tr id='pat${patient_num}'>
					<td style='width:60%;'>${fullname}</td>
					<td>
						<button type='button'>Accept</button>
						<button type='button' onclick="openLogPatient('${fullname}')"><b>?</b></button>
					</td>
				</tr>
	`;
}

function closeManageDischarge(){
	let logcard = document.getElementById('discharge_container');
	if(logcard){
		logcard.style.display = 'none';
	}
}

function openManageDischarge(fullname){
	let logcard = document.getElementById('discharge_container');
	let dischargeName = document.getElementById('dischargeName');

	openLogPatient(fullname);

	dischargeName.value = fullname;

	logcard.style.display = 'block';
}

function suggestMedicine(){
	let medtxt = document.getElementById('medtxt');
	let totalpricetxt = document.getElementById('totalpricetxt');


	addMedicine(medtxt.value);
	let medprice = medtxt.value.split('(')[1].replace(')','').replace('RM','');
	let totalprice = totalpricetxt.textContent.replace('Total Price : RM','');
	
	totalpricetxt.textContent = 'Total Price : RM' + (parseInt(totalprice) + parseInt(medprice));

	medtxt.value = '';
}

function addMedicine(medname){
	let content = document.getElementById('medicine_list');

	content.innerHTML +=
	`
		<tr>
			<td>${medname}</td>
		</tr>
	`;
}

//OVERALL
function loadPage(page){
	if(page === 'staff'){
		addPatient('Fakrul Bin Senin','Diagnose');
		addPatient('Ahmad Haikal Bin Samad','Diagnose');
		addPatient('Ahmad Faiz Bin Razlan','Unregistered');
		addPatient('Syafiq Bin Raiz','Unregistered');
		addPatient('Shamsul Bin Syazwan','Discharged');

		addPatientReq('Aiman Bin Syazwan');
		addPatientReq('Khairul Bin Raiz');

	}
	else if(page === 'doctor'){

		addPatientforDoctor('Fakrul Bin Senin');
		addPatientforDoctor('Ahmad Haikal Bin Samad');
	}
}