const days = document.querySelectorAll(".day");
const monDays = document.querySelectorAll(".mon");
const tuesDays = document.querySelectorAll(".tues");
const wedDays = document.querySelectorAll(".wed");
const thurDays = document.querySelectorAll(".thur");
const friDays = document.querySelectorAll(".fri");
const satDays = document.querySelectorAll(".sat");
const sunDays = document.querySelectorAll(".sun");

const w1 = document.querySelectorAll(".w1");
const w2 = document.querySelectorAll(".w2");
const w3 = document.querySelectorAll(".w3");
const w4 = document.querySelectorAll(".w4");



function setDayWidth(e) {

	for (let i = 0; i < days.length; i++){
		if(days[i].classList.contains("widen")) {
			days[i].classList.remove("widen");
		}
	}

	if (e.target.classList.contains("mon")) {
		for (let j = 0; j < monDays.length; j++) {
			monDays[j].classList.add("widen");
		}
	} 
	else if (e.target.classList.contains("tues")) {
		for (let j = 0; j < tuesDays.length; j++) {
			tuesDays[j].classList.add("widen");
		}
	}
	else if (e.target.classList.contains("wed")) {
		for (let j = 0; j < wedDays.length; j++) {
			wedDays[j].classList.add("widen");
		}
	}
	else if (e.target.classList.contains("thur")) {
		for (let j = 0; j < thurDays.length; j++) {
			thurDays[j].classList.add("widen");
		}
	}
	else if (e.target.classList.contains("fri")) {
		for (let j = 0; j < friDays.length; j++) {
			friDays[j].classList.add("widen");
		}
	}
	else if (e.target.classList.contains("sat")) {
		for (let j = 0; j < satDays.length; j++) {
			satDays[j].classList.add("widen");
		}
	}
	else if (e.target.classList.contains("sun")) {
		for (let j = 0; j < sunDays.length; j++) {
			sunDays[j].classList.add("widen");
		}
	}
}





function setDayHeight(e) {
	for (let i = 0; i < days.length; i++){
		if(days[i].classList.contains("heighten")) {
			days[i].classList.remove("heighten");
		}
	}

	if (e.target.classList.contains("w1")) {
		for (let j = 0; j < w1.length; j++) {
			w1[j].classList.add("heighten");
		}
	} 
	else if (e.target.classList.contains("w2")) {
		for (let j = 0; j < w2.length; j++) {
			w2[j].classList.add("heighten");
		}
	}
	else if (e.target.classList.contains("w3")) {
		for (let j = 0; j < w3.length; j++) {
			w3[j].classList.add("heighten");
		}
	}
	else if (e.target.classList.contains("w4")) {
		for (let j = 0; j < w4.length; j++) {
			w4[j].classList.add("heighten");
		}
	}
}




function select(e) {
	for (let i = 0; i < days.length; i++) {
		days[i].id = "";
		if (e.target === days[i]) {
			e.target.id = "selectedDay";
		}
	}
}




document.addEventListener("click",select);
document.addEventListener("click",setDayWidth);
document.addEventListener("click",setDayHeight);

