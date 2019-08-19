var emailList = ['163.com', 'gmail.com', 'qq.com', 'yahoo.com', 'hotmail.com', '126.com', '263.net'].sort()
var email_list = document.querySelector("ul");
var inputBox = document.querySelector("input");
var valEmailNum = 0;
var selected = 0;

(() => {
    for (var i = 0; i < emailList.length; i++) {
        var email =  document.createElement("li");
        email.innerHTML = `@${emailList[i]}`;
        email_list.appendChild(email);
    }
})();

var spareEmail = document.querySelectorAll("li");

// reg match email postfix, if no match, show all
const emailReg = /(\w*)@([\w/.]*)/;
function matchEmail(e) {
    email_list.style.display = "block";

    if (e.target.value) {

        // match email prefix
        var pmatch = e.target.value.toString().match(emailReg);
        var preResult = pmatch ? pmatch[1] : e.target.value;

        var domMatch = pmatch ? pmatch[2] : "";


        var counter = 0;
        for (let i = 0; i < spareEmail.length; i++) {
            var domReg = new RegExp("^" + domMatch);
            if (domReg.test(emailList[i])) {
                spareEmail[i].innerHTML = preResult + "@" + emailList[i];
                spareEmail[i].style.display = "block";
            } else {
                spareEmail[i].style.display = "none";
                counter++;
            }
        }

        if (counter == spareEmail.length) {
            for (let i = 0; i < spareEmail.length; i++) {
                spareEmail[i].innerHTML = preResult + "@" + emailList[i];
                spareEmail[i].style.display = "block";
            }
        }
    } else {
        email_list.style.display = "none";
    }

    clearBg();
    selected = 0;
    valEmailNum = Select(selected);


}

function Select(num, enter=false) {
    var count = 0;
    for (let i = 0; i < spareEmail.length; i++) {
        if (spareEmail[i].style.display == "block") {
            if (count == num) {
                spareEmail[i].style.backgroundColor = "rgb(250, 219, 217)";
                if (enter && email_list.style.display == "block") {
                    inputBox.value = spareEmail[i].innerHTML;
                }
            }

            count++;
        }
    }
    return count;
}

function clearBg() {
    for (let i = 0; i < spareEmail.length; i++) {
        spareEmail[i].style.backgroundColor = null;
    }
}

function keyEvent(e) {
    if (e.keyCode == 38) {
        e.preventDefault();
        clearBg();
        if (--selected < 0) {
            selected += valEmailNum;
        }
        Select(selected % valEmailNum);
    }

    if (e.keyCode == 40) {
        e.preventDefault();
        clearBg();
        Select(++selected % valEmailNum);
    }

    if (e.keyCode == 13) {
        Select(selected % valEmailNum, true);
        email_list.style.display = "none";
    }

    if (e.keyCode == 27) {
        e.target.select();
    }

}



email_list.addEventListener('click', e => {
    if (e.target && e.target.nodeName.toUpperCase() == "LI") {
        inputBox.value = e.target.innerHTML;
        email_list.style.display = "none";
    }
});
inputBox.addEventListener('input', matchEmail);
inputBox.addEventListener('keydown', keyEvent);



