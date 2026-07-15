async function cargarBCV() {
    try {
        const res = await fetch("https://api.cotizave.com/v1/fx/rates/reference", {
            headers: {
                "X-API-Key":"ctz_live_9gzyzsQFICzYyCY56FV2pvO9Gl8v7EOTYyExcB",
                "Accept": "application/json"
            }
        });

        const data = await res.json();

        const bcv = data.mid;

        document.getElementById("bcv").innerHTML = bcv.toFixed(2) + " Bs";

    } catch (e) {
        document.getElementById("bcv").innerHTML = "Error";
        console.log(e);
    }
}

cargarBCV();
