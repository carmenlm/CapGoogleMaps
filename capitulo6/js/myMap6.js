/**
 * Created by carmen on 26/04/16.
 */

(function () {
    window.onload = function () {

        //debug
        console.log('arranco');

        //creo el mapa
        var options = {
            zoom: 3,
            center: new google.maps.LatLng(37.09, -95.71),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById('map'), options);


        //////////////////////////////////////
        //SHADOW NO DISPONIBLE EN LA VERSION//
        //////////////////////////////////////

        //icono del restaurante
        var iconRest = new google.maps.MarkerImage('http://maps.google.com/mapfiles/kml/pal2/icon32.png');

        /*
         //sombra del icono
         var shadowIcon = new google.maps.MarkerImage(
         'http://maps.google.com/mapfiles/kml/pal2/icon32s.png',
         null,
         null,
         new google.maps.Point(16, 35)
         );*/

        /*
         // creo la forma
         var shape = {
         type: 'poly',
         coord: [4, 4, 29, 4, 29, 29, 22, 29, 17, 35, 16, 35, 10, 29, 4, 29, 4, 4]
         };*/

        // Creating the marker
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.756054, -73.986951),
            map: map,
            icon: iconRest
            // shadow: shadowIcon,
            // shape: shape
        });

    };
})();