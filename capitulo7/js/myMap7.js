/**
 * Created by carmen on 26/04/16.
 */
////////////////
//CON IMAGENES//
////////////////

/*
 (function () {


 //defino las variable
 var map, infoWindow;

 window.onload = function () {

 //creo un mapa
 var options = {
 zoom: 3,
 center: new google.maps.LatLng(37.09, -95.71),
 mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 map = new google.maps.Map(document.getElementById('map'), options);


 //añado el marcador
 var marker = new google.maps.Marker({
 position: new google.maps.LatLng(40.756054, -73.986951),
 map: map,
 title: 'Click me'
 });
 google.maps.event.addListener(marker, 'click', function () {

 //compruebo si el info existe
 if (!infoWindow) {
 infoWindow = new google.maps.InfoWindow();
 }

 //creo el contenido del info
 var content = '<div id="info">' +
 '<img class="img-rounded" width="100px" height="100px" src="http://www.estudiantes.info/ciencias_naturales/images/ardilla-marron.png" alt="" />' +
 '<h2>Maps are awesome</h2>' +
 '<p>Some sample text</p>' +
 '<p><a href="http://www.svennerberg.com">A sample link</a></p>' +
 '</div>';

 //asigno el contenido al info
 infoWindow.setContent(content);

 //abro el infowindow
 infoWindow.open(map, marker);

 });

 // arranca el evento click del marcador
 google.maps.event.trigger(marker, 'click');
 };
 })();*/

///////////////
//PARTE VIDEO//
///////////////
(function () {

    //defino las variables
    var map, infoWindow;
    window.onload = function () {

        //creo el mapa
        var options = {
            zoom: 3,
            center: new google.maps.LatLng(37.09, -95.71),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map'), options);

        //añado el marcador
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.756054, -73.986951),
            map: map,
            title: 'Click me'
        });

        //añado el listener al marcador
        google.maps.event.addListener(marker, 'click', function () {

            //compruebo si el info existe
            if (!infoWindow) {
                infoWindow = new google.maps.InfoWindow();
            }

            //creo un elemento html video
            var video = document.createElement('video');
            video.setAttribute('src',
                'http://upload.wikimedia.org/wikipedia/commons/3/3f/ACA_Allertor_125_video.ogv');
            video.setAttribute('width', '300');
            video.setAttribute('height', '200');
            video.setAttribute('controls', 'controls');
            video.setAttribute('autoplay', 'autoplay');

            //le paso el video como contenido al infowindow
            infoWindow.setContent(video);

            //abro el info
            infoWindow.open(map, marker);
        });

        //abro el info cuando carge el marcador
        google.maps.event.trigger(marker, 'click');
    };
})();