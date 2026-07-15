function calcular() {

    const bcv = parseFloat(document.getElementById("bcv").value);
    const usdt = parseFloat(document.getElementById("usdt").value);

    const comBanco = 0.5 / 100;
    const comBinance = 4.3 / 100;
    const comMaster = 1.5 / 100;

    if (isNaN(bcv) || isNaN(usdt)) {
        alert("Ingrese BCV y USDT");
        return;
    }

    const costo =
        bcv *
        (1 + comBanco) *
        (1 + comBinance) *
        (1 + comMaster);

    document.getElementById("costo").innerHTML =
        costo.toFixed(2) + " Bs";

    const rentabilidad =
        ((usdt - costo) / costo) * 100;

    document.getElementById("ganancia").innerHTML =
        rentabilidad.toFixed(2) + " %";
}
