//your JS code here. If required.
const timerHTML = document.getElementById("timer");
setInterval(()=>{
	let currTime = new Date();
	timerHTML.innerHTML = currTime.toLocaleString();
},1000);