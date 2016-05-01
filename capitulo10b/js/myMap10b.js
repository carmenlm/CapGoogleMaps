/**
 * Created by carmen on 26/04/16.
 */

(function () {

    //defino las variables
    var map, geocoder, infoWindow;
    window.onload = function () {

        //creo el mapa
        var options = {
            zoom: 3,
            center: new google.maps.LatLng(37.09, -95.71),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map'), options);

        //añado un listener al evento click
        google.maps.event.addListener(map, 'click', function (e) {

            //capturo la direccion de la posicion donde se hace click
            getAddress(e.latLng);
        });
    }
})();