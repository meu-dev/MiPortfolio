let map
// he inicializado mapa e intentado colocar un marker de la situación de donde estaría el estudio de diseño mediante las coordenadas
async function iniciarMap(){
    const coord = {lat:42.21329891210182 ,lng: -8.736639773243764};
    const map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}




// he intentado realizar la colocación de marker una vez conseguido la ubicación actual, pero algo esta fallando recibo un error en consola acerca de AdvancedMarkerElement...

function obtenerUbicacion() {
    navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        document.getElementById("ubicacion").textContent = `Latitud:${lat} - Longitud:${lng}`;

        map.setCenter({ lat, lng });
        map.setZoom(15);

        new google.maps.marker.advancedMarkerElement({
            map: map,
            position: { lat, lng },
            title: "punto de ubicación"
        })

    }, function (error) {
        console.log(`Error:${error}`)
    });
}

document.getElementById("btn").addEventListener("click", obtenerUbicacion);