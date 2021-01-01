const mercury = document.querySelector(".mercury");
const body = document.querySelector("body");

document.querySelector("#button").addEventListener("click", function(e)
{
    e.preventDefault;
    mercury.classList.remove("active");
    void mercury.offsetWidth;
    mercury.style.animationPlayState = "running";
    convert();
}, false);


function convert() {
    const f = document.querySelector("#fahrenheit").value;
    const c = (f - 32) * (5/9);
    document.querySelector("#results").innerHTML = c.toFixed(2);
    updateThermo(c)
}


// 5395 is the time needed to fill to 100%;
function updateThermo(temp) {
    mercury.classList.add("active");
    if(temp >= 50) {
        // Dark red
        body.style.background = "-moz-linear-gradient(194deg, rgba(94,0,1,1) 0%, rgba(168,0,1,1) 35%, rgba(171,19,20,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(94,0,1,1) 0%, rgba(168,0,1,1) 35%, rgba(171,19,20,1) 100%)";
        setTimeout(() => pauseThermo(), 5395);
    } else if(temp >= 47) {
        // Dark red
        body.style.background = "-moz-linear-gradient(194deg, rgba(94,0,1,1) 0%, rgba(168,0,1,1) 35%, rgba(171,19,20,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(94,0,1,1) 0%, rgba(168,0,1,1) 35%, rgba(171,19,20,1) 100%)";
        setTimeout(() => pauseThermo(), 4700);
    } else if(temp >= 44) {
        // Red
        body.style.background = "-moz-linear-gradient(194deg, rgba(128,4,4,1) 0%, rgba(204,0,1,1) 35%, rgba(217,35,35,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(128,4,4,1) 0%, rgba(204,0,1,1) 35%, rgba(217,35,35,1) 100%)";
        setTimeout(() => pauseThermo(), 4200);
    } else if(temp >= 38) {
        // Red
        body.style.background = "-moz-linear-gradient(194deg, rgba(128,4,4,1) 0%, rgba(204,0,1,1) 35%, rgba(217,35,35,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(128,4,4,1) 0%, rgba(204,0,1,1) 35%, rgba(217,35,35,1) 100%)";
        setTimeout(() => pauseThermo(), 3800);
    } else if(temp >= 34) {
        // Scarlet
        body.style.background = "-moz-linear-gradient(194deg, rgba(168,5,5,1) 0%, rgba(217,17,17,1) 35%, rgba(255,33,33,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(168,5,5,1) 0%, rgba(217,17,17,1) 35%, rgba(255,33,33,1) 100%)";
        setTimeout(() => pauseThermo(), 3538);
    } else if(temp >= 31) {
        // Scarlet
        body.style.background = "-moz-linear-gradient(194deg, rgba(168,5,5,1) 0%, rgba(217,17,17,1) 35%, rgba(255,33,33,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(168,5,5,1) 0%, rgba(217,17,17,1) 35%, rgba(255,33,33,1) 100%)";
        setTimeout(() => pauseThermo(), 3350);
    } else if(temp >= 27) {
        // Orange
        body.style.background = "-moz-linear-gradient(194deg, rgba(176,98,37,1) 0%, rgba(247,150,73,1) 35%, rgba(204,115,45,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(176,98,37,1) 0%, rgba(247,150,73,1) 35%, rgba(204,115,45,1) 100%)";
        setTimeout(() => pauseThermo(), 2990);
    } else if(temp >= 25) {
        // Orange
        body.style.background = "-moz-linear-gradient(194deg, rgba(176,98,37,1) 0%, rgba(247,150,73,1) 35%, rgba(204,115,45,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(176,98,37,1) 0%, rgba(247,150,73,1) 35%, rgba(204,115,45,1) 100%)";
        setTimeout(() => pauseThermo(), 2875);
		 } else if(temp >= 22) {
        // Orange
        body.style.background = "-moz-linear-gradient(194deg, rgba(176,98,37,1) 0%, rgba(247,150,73,1) 35%, rgba(204,115,45,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(176,98,37,1) 0%, rgba(247,150,73,1) 35%, rgba(204,115,45,1) 100%)";
        setTimeout(() => pauseThermo(), 2725);
			} else if(temp >= 21) {
        // Orange
        body.style.background = "-moz-linear-gradient(194deg, rgba(176,98,37,1) 0%, rgba(247,150,73,1) 35%, rgba(204,115,45,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(176,98,37,1) 0%, rgba(247,150,73,1) 35%, rgba(204,115,45,1) 100%)";
        setTimeout(() => pauseThermo(), 2650);
    } else if(temp >= 20) {
        // Orange
        body.style.background = "-moz-linear-gradient(194deg, rgba(176,98,37,1) 0%, rgba(247,150,73,1) 35%, rgba(204,115,45,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(176,98,37,1) 0%, rgba(247,150,73,1) 35%, rgba(204,115,45,1) 100%)";
        setTimeout(() => pauseThermo(), 2600);
    } else if(temp >= 19) {
        // Yellow
        body.style.background = "-moz-linear-gradient(194deg, rgba(191,146,4,1) 0%, rgba(247,190,12,1) 35%, rgba(230,181,30,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(191,146,4,1) 0%, rgba(247,190,12,1) 35%, rgba(230,181,30,1) 100%)";
        setTimeout(() => pauseThermo(), 2550);
		} else if(temp >= 18) {
        // Yellow
        body.style.background = "-moz-linear-gradient(194deg, rgba(191,146,4,1) 0%, rgba(247,190,12,1) 35%, rgba(230,181,30,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(191,146,4,1) 0%, rgba(247,190,12,1) 35%, rgba(230,181,30,1) 100%)";
        setTimeout(() => pauseThermo(), 2500);
		} else if(temp >= 17) {
        // Yellow
        body.style.background = "-moz-linear-gradient(194deg, rgba(191,146,4,1) 0%, rgba(247,190,12,1) 35%, rgba(230,181,30,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(191,146,4,1) 0%, rgba(247,190,12,1) 35%, rgba(230,181,30,1) 100%)";
        setTimeout(() => pauseThermo(), 2425);
		} else if(temp >= 16) {
        // Yellow
        body.style.background = "-moz-linear-gradient(194deg, rgba(191,146,4,1) 0%, rgba(247,190,12,1) 35%, rgba(230,181,30,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(191,146,4,1) 0%, rgba(247,190,12,1) 35%, rgba(230,181,30,1) 100%)";
        setTimeout(() => pauseThermo(), 2375);
	  } else if(temp >= 15) {
        // Green
        body.style.background = "-moz-linear-gradient(194deg, rgba(88,130,43,1) 0%, rgba(146,209,79,1) 35%, rgba(122,179,62,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(88,130,43,1) 0%, rgba(146,209,79,1) 35%, rgba(122,179,62,1) 100%)";
        setTimeout(() => pauseThermo(), 2300);
		} else if(temp >= 14) {
        // Green
        body.style.background = "-moz-linear-gradient(194deg, rgba(88,130,43,1) 0%, rgba(146,209,79,1) 35%, rgba(122,179,62,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(88,130,43,1) 0%, rgba(146,209,79,1) 35%, rgba(122,179,62,1) 100%)";
        setTimeout(() => pauseThermo(), 2250);
   	} else if(temp >= 13) {
        // Green
        body.style.background = "-moz-linear-gradient(194deg, rgba(88,130,43,1) 0%, rgba(146,209,79,1) 35%, rgba(122,179,62,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(88,130,43,1) 0%, rgba(146,209,79,1) 35%, rgba(122,179,62,1) 100%)";
        setTimeout(() => pauseThermo(), 2200);
		} else if(temp >= 12) {
        // Green
        body.style.background = "-moz-linear-gradient(194deg, rgba(88,130,43,1) 0%, rgba(146,209,79,1) 35%, rgba(122,179,62,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(88,130,43,1) 0%, rgba(146,209,79,1) 35%, rgba(122,179,62,1) 100%)";
        setTimeout(() => pauseThermo(), 2100);
		} else if(temp >= 11) {
        // Green
        body.style.background = "-moz-linear-gradient(194deg, rgba(88,130,43,1) 0%, rgba(146,209,79,1) 35%, rgba(122,179,62,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(88,130,43,1) 0%, rgba(146,209,79,1) 35%, rgba(122,179,62,1) 100%)";
        setTimeout(() => pauseThermo(), 2025);
		} else if(temp >= 10) {
        // Green
        body.style.background = "-moz-linear-gradient(194deg, rgba(88,130,43,1) 0%, rgba(146,209,79,1) 35%, rgba(122,179,62,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(88,130,43,1) 0%, rgba(146,209,79,1) 35%, rgba(122,179,62,1) 100%)";
        setTimeout(() => pauseThermo(), 1927);
    } else if(temp >= 9) {
        // Green
        body.style.background = "-moz-linear-gradient(194deg, rgba(88,130,43,1) 0%, rgba(146,209,79,1) 35%, rgba(122,179,62,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(88,130,43,1) 0%, rgba(146,209,79,1) 35%, rgba(122,179,62,1) 100%)";
        setTimeout(() => pauseThermo(), 1870);
		} else if(temp >= 8) {
        // Green
        body.style.background = "-moz-linear-gradient(194deg, rgba(88,130,43,1) 0%, rgba(146,209,79,1) 35%, rgba(122,179,62,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(88,130,43,1) 0%, rgba(146,209,79,1) 35%, rgba(122,179,62,1) 100%)";
        setTimeout(() => pauseThermo(), 1830);
    } else if(temp >= 7) {
        // Lighter green
        body.style.background = "-moz-linear-gradient(194deg, #008a3f 0%, #04db67 35%, #0e6134 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, #008a3f 0%, #04db67 35%, #0e6134 100%)";
        setTimeout(() => pauseThermo(), 1750);
		} else if(temp >= 6) {
        // Lighter green
        body.style.background = "-moz-linear-gradient(194deg, #008a3f 0%, #04db67 35%, #0e6134 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, #008a3f 0%, #04db67 35%, #0e6134 100%)";
        setTimeout(() => pauseThermo(), 1650);
		} else if(temp >= 5) {
        // Lighter green
        body.style.background = "-moz-linear-gradient(194deg, #008a3f 0%, #04db67 35%, #0e6134 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, #008a3f 0%, #04db67 35%, #0e6134 100%)";
        setTimeout(() => pauseThermo(), 1550);
		} else if(temp >= 4) {
        // Lighter green
        body.style.background = "-moz-linear-gradient(194deg, #008a3f 0%, #04db67 35%, #0e6134 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, #008a3f 0%, #04db67 35%, #0e6134 100%)";
        setTimeout(() => pauseThermo(), 1450);
    } else if(temp >= 3) {
        // Lighter green
        body.style.background = "-moz-linear-gradient(194deg, #008a3f 0%, #04db67 35%, #0e6134 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, #008a3f 0%, #04db67 35%, #0e6134 100%)";
        setTimeout(() => pauseThermo(), 1350);
		} else if(temp >= 2) {
        // Lighter green
        body.style.background = "-moz-linear-gradient(194deg, #008a3f 0%, #04db67 35%, #0e6134 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, #008a3f 0%, #04db67 35%, #0e6134 100%)";
        setTimeout(() => pauseThermo(), 1100);
		} else if(temp >= 1) {
        // Lighter green
        body.style.background = "-moz-linear-gradient(194deg, #008a3f 0%, #04db67 35%, #0e6134 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, #008a3f 0%, #04db67 35%, #0e6134 100%)";
        setTimeout(() => pauseThermo(), 925);
    } else if (temp <= 0) {
        // Sky blue
        body.style.background = "-moz-linear-gradient(194deg, rgba(33, 33, 191, 1) 0%, rgba(68, 68, 242, 1) 35%, rgba(0,212,255,1) 100%)";
        body.style.background = "-webkit-linear-gradient(194deg, rgba(33, 33, 191, 1) 0%, rgba(68, 68, 242, 1) 35%, rgba(0,212,255,1) 100%)";
        setTimeout(() => pauseThermo(), 0);
    } else {
        setTimeout(() => pauseThermo(), 800);
    }
}

function pauseThermo() {
    mercury.style.animationPlayState = "paused"
}
