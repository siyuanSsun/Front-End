initData();
let productFilter = document.querySelector("#product-filter");
initCheckbox(productCheckbox, productFilter);
let regionFilter = document.querySelector("#region-filter");
initCheckbox(regionCheckbox, regionFilter);
let regionAll = document.querySelector("#region-select")
let productAll = document.querySelector("#product-select");

productFilter.addEventListener('click', e => select(e, "product-select", productAll));
regionFilter.addEventListener('click', e => select(e, "region-select", regionAll));

productAll.addEventListener('click', selectAll);
productAll.addEventListener('click', renderTable);
regionAll.addEventListener('click', selectAll);
regionAll.addEventListener('click', renderTable);