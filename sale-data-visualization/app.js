initData();
let productFilter = document.querySelector("#product-filter");
initCheckbox(productCheckbox, productFilter);
let regionFilter = document.querySelector("#region-filter");
initCheckbox(regionCheckbox, regionFilter);
let regionAll = document.querySelector("#region-select")
let productAll = document.querySelector("#product-select");

productFilter.addEventListener('click', e => select(e, "product-select", productAll));
productFilter.addEventListener('click', drawMulLineChart);
regionFilter.addEventListener('click', e => select(e, "region-select", regionAll));
regionFilter.addEventListener('click', drawMulLineChart);

productAll.addEventListener('click', selectAll);
productAll.addEventListener('click', renderTable);
productAll.addEventListener('click', drawMulLineChart);
regionAll.addEventListener('click', selectAll);
regionAll.addEventListener('click', renderTable);
regionAll.addEventListener('click', drawMulLineChart);

let singleLineChart = document.getElementById("linechart-hover");
let mulLineChart = document.getElementById("linechart-select");
drawAxis(singleLineChart);
drawMulLineChart();