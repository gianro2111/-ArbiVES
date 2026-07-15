document.getElementById("bcv").innerText = "724.00 Bs";
document.getElementById("usdt").innerText = "860.00 Bs";

const bcv = 724.00;
const comBanco = 0.005;
const comBinance = 0.043;
const comInternacional = 0.015;
const usdt = 860.00;

const costo = bcv * (1 + comBanco) * (1 + comBinance) * (1 + comInternacional);

document.getElementById("costo").innerText = costo.toFixed(2) + " Bs";

const rentabilidad = ((usdt - costo) / costo) * 100;

document.getElementById("ganancia").innerText = rentabilidad.toFixed(2) + "%";
