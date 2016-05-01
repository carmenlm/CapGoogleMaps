/**
 * Created by carmen on 26/04/16.
 */

(function () {
    window.onload = function () {

        console.log('arranco');

        // Declaro las opciones requeridas del objeto mapOptions
        var options = {
            zoom: 3,
            center: new google.maps.LatLng(37.09, -95.71),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };


        // Creo el mapa
        var map = new google.maps.Map(document.getElementById('map'), options);

        //añado los manejadores de evento de los botones
        //capturo los valores
        document.getElementById('getValues').onclick = function () {
            alert('Current Zoom level is ' + map.getZoom());
            alert('Current center is ' + map.getCenter());
            alert('The current mapType is ' + map.getMapTypeId());
        }
        // Cambio los valores
        document.getElementById('changeValues').onclick = function () {
            map.setOptions({
                center: new google.maps.LatLng(40.6891, -74.0445),
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.SATELLITE
            });
        }
    };
})();