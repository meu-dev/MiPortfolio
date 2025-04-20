let map;
let currentLocationMarker = null;

async function iniciarMap() {
  const coord = { lat: 42.21329891210182, lng: -8.736639773243764 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: coord,
  });

  // Marker de la localización del estudio de diseño gráfico estudio de diseño Gráfico
  new google.maps.Marker({
    position: coord,
    map: map,
    title: "Estudio de diseño",
  });
}

function obtenerUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        document.getElementById(
          "ubicacion"
        ).textContent = `Latitud: ${lat.toFixed(4)} - Longitud: ${lng.toFixed(
          4
        )}`;

        const currentLocation = { lat, lng };

        // Centrar mapa en la ubicacion actual
        map.setCenter(currentLocation);
        map.setZoom(15);

        // Eliminar marker previos si existen
        if (currentLocationMarker) {
          currentLocationMarker.setMap(null);
        }

        // Crear marker de la ubicación actual

        currentLocationMarker = new google.maps.Marker({
          position: currentLocation,
          map: map,
          title: "Tu ubicación actual",
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          },
          animation: google.maps.Animation.DROP,
        });
      },
      function (error) {
        let errorMessage;
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Usuario denegó la petición de geolocalización.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Ubicación no disponible.";
            break;
          case error.TIMEOUT:
            errorMessage = "Se agotó el tiempo de espera.";
            break;
          default:
            errorMessage = "Error desconocido.";
        }
        alert(errorMessage);
      }
    );
  } else {
    alert("Tu navegador no soporta geolocalización");
  }
}

document.getElementById("btn").addEventListener("click", obtenerUbicacion);
