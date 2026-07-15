const API_KEY = "ctz_live_9EWXK3NrVK0bU1LNgid8OWNdgIOp4OCESjKrbu";

async function actualizar() {

    try {

        const respuesta = await fetch(
            "https://api.cotizave.com/v1/fx/rates/reference",
            {
                headers:{
                    "X-API-Key":API_KEY,
                    "Accept":"application/json"
                }
            }
        );

        const data = await respuesta.json();

        const bcv = Number(data.mid);
        const usdt = Number(data.usdt);

        document.getElementById("bcv").innerText = bcv.toFixed(2)+" Bs";
        document.getElementById("usdt").innerText = usdt.toFixed(2)+" Bs";

        const costo = bcv * 1.005 * 1.043 * 1.015;

        document.getElementById("costo").innerText =
            costo.toFixed(2)+" Bs";

        const rentabilidad =
            ((usdt-costo)/costo)*100;

        document.getElementById("ganancia").innerText =
            rentabilidad.toFixed(2)+" %";

    } catch(e){

        console.log(e);

        document.getElementById("bcv").innerText="Error";

    }

}

actualizar();
