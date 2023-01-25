let swLocation = "sw.js";

//En el primer if se identifica si el navegador trabaja con el servi worker
if(navigator.serviceWorker){
    //En este se identifica en que servidor se corre la página
    if(navigator.serviceWorker)
    {
        if(window.location.href.includes("localhost"))
        swLocation = "/sw.js";
        //Registra la ubicación
        navigator.serviceWorker.register(swLocation);
    }
}