let drawSingleLineChart = function(e) {
    var data = [];
    var yMax = 0;
    for (let i = 0; i < this.children.length; i++) {
        if (i < 2) {
            continue;
        }
        else {
            let value = Number(this.children[i].innerText);
            yMax = value >= yMax ? value : yMax;
            data.push({ x: i-1, y: value });
        }
    }

    clearLineChart(singleLineChart);
    draw(singleLineChart, data, 13, yMax+20, 360, 180);
    
};

let draw = function(canvas, data, xMax, yMax, width, height) {
    var line = new lineChart(canvas, width, height);
    line.setAxis(xMax, yMax);
    line.loadData(data, 3, 0, 0, 'green');
}


let drawAxis = function(canvas) {
    clearLineChart(canvas);
    var line = new lineChart(canvas, 360, 180);
    line.setAxis();
};

let clearLineChart = function(canvas) {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

let colorList = ['black', 'blue', 'green', 'yellow', 'red', 'grey', 'brown', 'purple', 'orange'];

let drawMulLineChart = function(e) {
    let productChosen = getSelected("product-select");
    let regionChosen = getSelected("region-select");
    let yMax = 0;
    let dataArr = []
    for (sale of sourceData) {
        if (productChosen.chosen.includes(sale.product) && regionChosen.chosen.includes(sale.region)) {
            let data = [];
            let saleMax = Math.max(...sale.sale);
            yMax = yMax >= saleMax ? yMax : saleMax;
            for (let i = 0; i < sale.sale.length; i++) {
                data.push({ x: i+1, y: sale.sale[i] });
            }
            dataArr.push(data);
            
        }
    }

    clearLineChart(mulLineChart);

    var cindex = 0;
    var line = new lineChart(mulLineChart, 360, 180);
    line.setAxis(13, yMax+20);
    for (data of dataArr) {
        line.loadData(data, 3, 0, 0, colorList[cindex++]);
    };
}