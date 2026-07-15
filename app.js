async function cargarBCV() {
  try {
    // Temporal mientras conectamos la API definitiva
    const tasaBCV = 724.00;

    document.getElementById("bcv").innerText = tasaBCV.toFixed(2) + " Bs";

    calcular(tasaBCV, 860.00);

  } catch (e) {
    document.getElementById("bcv").innerText = "Error";
  }
}

function calcular(bcv, usdt){

    const comBanco=0.005;
    const comBinance=0.043;
    const comInternacional=0.015;

    const costo=bcv*(1+comBanco)*(1+comBinance)*(1+comInternacional);

    document.getElementById("usdt").innerText=usdt.toFixed(2)+" Bs";
    document.getElementById("costo").innerText=costo.toFixed(2)+" Bs";

    const rentabilidad=((usdt-costo)/costo)*100;

    document.getElementById("ganancia").innerText=rentabilidad.toFixed(2)+" %";
}

cargarBCV();
