// button click event
var btn = document.querySelector("#submit-btn");
var text = document.querySelector("#name");

var logText = function(e) {
    console.log(text.value);
};

var keyText = function(e) {
    if (e.keyCode === 13) {
        console.log(e.target.value);
    }

    if (e.keyCode === 27) {
        e.target.value = "";
    }
};

btn.addEventListener('click', logText);
text.addEventListener('keydown', keyText);


// element hidden event

var schoolBtn = document.querySelector("#school");
var companyBtn = document.querySelector("#company");
var schoolSelect = document.querySelector("#school-select");
var companySelect = document.querySelector("#company-select");

var hideSchool = function(e) {
    schoolSelect.style.cssText = "display: none;";
    companySelect.style.cssText = "display: inline";
};

var hideCompany = function(e) {
    companySelect.style.cssText = "display: none";
    schoolSelect.style.cssText = "display: inline";
};

schoolBtn.addEventListener('click', hideCompany);
companyBtn.addEventListener('click', hideSchool);


// color picker
var colorList = document.querySelectorAll("li");
var colorPicker = document.querySelector(".color-picker");
var color = document.querySelector(".palette");

color.addEventListener('click', e => {
    // console.log(e.target.nodeName);
    if ( e.target && e.target.nodeName.toLowerCase() === "li") {
        colorPicker.innerHTML = e.target.style.backgroundColor;
        colorPicker.style.color = e.target.style.backgroundColor;
    }
});


// set time event 
var fadeBtn = document.querySelector("#fade-btn");
var fadeObj = document.querySelector("#fade-obj");
var opacity = 100;
var int;

function fade() {
    fadeObj.style.backgroundColor = `rgba(0, 0, 0, ${opacity/100})`;
    if (fadeBtn.innerHTML == "淡出") {
        if (opacity <= 0) {
            fadeBtn.innerHTML = "淡入";
            fadeBtn.disabled = false;
            window.clearInterval(int);
        }
        else {
            opacity--;
            fadeBtn.disabled = "disabled";
        }
    }

    else if (fadeBtn.innerHTML == "淡入") {
        if (opacity >= 100) {
            fadeBtn.innerHTML = "淡出";
            fadeBtn.disabled = false;
            window.clearInterval(int);
        }
        else {
            opacity++;
            fadeBtn.disabled = "disabled";
        }
    }

    else {
        console.log("Error occured.");
    }

}

fadeBtn.onclick = () => { int = setInterval(`fade()`, 25); };

// use css sprite to generate frame gif
// frame picture size: 480*8160, each frame size 480*480, i.e. 17 frames in all
var gifBox = document.querySelector("#gif-box");
var yPos = 0;
var yStep = 480;
var reversePlay = false;
function genGif() {
    gifBox.style.backgroundPosition = `0px ${yPos}px`;
    if (!reversePlay) {
        yPos += yStep;
        if (yPos == 8160) {
            reversePlay = true;
        }
    } else {
        yPos -= yStep;
        if (yPos == 480) {
            reversePlay = false;
        }
    }    
}

var gifInt = setInterval("genGif()", 75);




