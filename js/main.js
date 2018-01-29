
const smallImgs = document.querySelectorAll(".smallImg");
const modalContainer = document.querySelector(".modalContainer");
const modalImg = document.querySelector(".modalImg");
const closeSymbol = document.querySelector(".closeSymbol");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
let modalText = document.querySelector(".modalText");

function showModal(e) {
	for(let i = 0; i < smallImgs.length; i++) {
		if (e.target === smallImgs[i]) {
			modalImg.src = e.target.src;
			modalText.innerText = e.target.alt;
			modalContainer.style.display = "block";
		}
	}
}

function closeModal() {
	modalContainer.style.display = "none";
}

function changeImg(num) {
	//figuring out what index we're currently at
	let index;
	for(let i = 0; i < smallImgs.length; i ++) {
		if (modalImg.src === smallImgs[i].src) {
			index = i;
			console.log("INDEX",index);
		}
	}
	//making the img next/prev "wrap" around
	let sum = index + num;
	if (sum >= smallImgs.length) {
		sum = 0;
	} else if (sum < 0) {
		sum = smallImgs.length - 1;
	}
	//show the correct src in the modalImg
	modalImg.src = smallImgs[sum].src;
}

function nextImg() {
	changeImg(1);
}

function prevImg() {
	changeImg(-1);
}

function showTarget(e) {
	console.log(e.target);
}

document.addEventListener("click",showTarget);
document.addEventListener("click",showModal);
closeSymbol.addEventListener("click",closeModal);
next.addEventListener("click",nextImg);
prev.addEventListener("click",prevImg);
