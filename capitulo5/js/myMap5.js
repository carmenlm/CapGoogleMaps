/**
 * Created by carmen on 26/04/16.
 */

(function () {
    window.onload = function () {

        //debug
        console.log('arranco');

        //crea un objeto literal que contiene las propiedades
        var options = {
            zoom: 12,
            center: new google.maps.LatLng(40.7257, -74.0047),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        // creamos el mapa
        var map = new google.maps.Map(document.getElementById('map'), options);

        // añado un marcador al mapa
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.7257, -74.0047),
            map: map,
            title: 'Click me',
            icon: 'http://gmaps-samples.googlecode.com/svn/trunk/markers/green/marker1.png'
        });
    };
})();