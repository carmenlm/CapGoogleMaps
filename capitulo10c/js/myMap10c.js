/**
 * Created by carmen on 26/04/16.
 */

///////////////
//NO FUNCIONA//
///////////////
(function () {

    window.onload = function () {

        //capturo la posicion del cliente
        if (google.loader.ClientLocation.latitude && google.loader.ClientLocation.longitude) {

            //declaro la posicion
            var latLng = new google.maps.LatLng(google.loader.ClientLocation.latitude,
                google.loader.ClientLocation.longitude);


            //creo el contenido para el info
            var location = 'You are located in '
            location += google.loader.ClientLocation.address.city + ', ';
            location += google.loader.ClientLocation.address.country;
        }
        else {
            //si no consigo la posicion del cliente
            //parametros por defecto
            var latLng = new google.maps.LatLng(0, 0);
            var location = 'Your location is unknown';
        }

        // creo el mapa
        var options = {
            zoom: 2,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map'), options);
        //añado el marcador
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
        //creo el infowindow
        var infoWindow = new google.maps.InfoWindow({
            content: location
        });
        //añado el info al mapa
        infoWindow.open(map, marker);
    }
})();