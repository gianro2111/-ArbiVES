async function cargarBCV() {
  try {
    const respuesta = await fetch("https://pydolarve.org/api/v2/dollar?page=bcv");
    const datos = await respuesta.json();

    const tasaBCV = parseFloat(datos.monitors.usd.price);

    document.getElementById("bcv").innerText = tasaBCV.toFixed(2) + " Bs";

    calcular(tasaBCV, 860.00);

  } catch (error) {
    document.getElementById("bcv").innerText = "Error";
  }
}
