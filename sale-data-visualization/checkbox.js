let productCheckbox = {
    prefix: "product",
    label: ['全选', '手机', '笔记本', '智能音箱']
};

let regionCheckbox = {
    prefix: "region",
    label: ['全选', '华东', '华南', '华北']
};

let initCheckbox = function(data, element) {
    let prefix = data['prefix'];
    for (let i = 0; i < data['label'].length; i++) {
        let input = document.createElement("input");
        let label = document.createElement('label');

        input.type = "checkbox";
        input.checked = true;
        label.innerText = data['label'][i];


        if (data['label'][i] == '全选') {
            input.className = "select-all";
            input.id = prefix + "-select";
        }
        else {
            input.className = prefix + "-select";
        }
        element.appendChild(input);
        element.appendChild(label);

    }
};

let selectAll = function(e) {
    let className = e.target.id;
    if (e.target.checked) {
        let chbx = document.querySelectorAll('.' + className);
        for (let i = 0; i < chbx.length; i++) {
            chbx[i].checked = true;
        }
    } else {
        if (getSelected(className).num == 3){
            e.target.checked = true;
        }
    }
};

let getSelected = function(className) {
    let num = 0;
    let chosen = [];
    let chbx = document.querySelectorAll('.' + className);
    for (let i = 0; i < chbx.length; i++) {
        if (chbx[i].checked) {
            num++;
            chosen.push(chbx[i].nextSibling.innerText)
        }
    }
    return { num: num, chosen: chosen };
}

let select = function(e, className, elementAll) {
    if (e.target && e.target.className == className) {
        let selected = getSelected(className).num;
        if (selected < 3) {
            elementAll.checked = false;
        } 
        else if (selected == 3) {
            elementAll.checked = true;
        }

        if (selected == 0) {
            e.target.checked = true;
        }

        renderTable(e);
    }
};







