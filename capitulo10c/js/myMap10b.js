/**
 * Created by carmen on 26/04/16.
 */

(function () {

    //defino las variables
    var map, geocoder, infoWindow;
    window.onload = function () {

        //creo el mapa
        var options = {
            zoom: 5,
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

    function getAddress(latLng) {

        //compruebo si el geocoder existe
        if (!geocoder) {
            geocoder = new google.maps.Geocoder();
        }

        // creo el objeto geocoderrequest
        var geocoderRequest = {
            latLng: latLng
        }


        geocoder.geocode(geocoderRequest, function (results, status) {

            //si el info no se ha creado
            if (!infoWindow) {
                infoWindow = new google.maps.InfoWindow();
            }

            //inicio la posicion del info
            infoWindow.setPosition(latLng);

            //creo el contenido del info
            var content = '<h3>Position: ' + latLng.toUrlValue() + '</h3>';

            //compruebo si el status es ok
            if (status == google.maps.GeocoderStatus.OK) {

                //itero por el resultado
                for (var i = 0; i < results.length; i++) {
                    if (results[0].formatted_address) {
                        content += i + '. ' + results[i].formatted_address + '<br />';
                    }
                }
            } else {
                content += '<p>No address could be found. Status = ' + status + '</p>';
            }

            //añado el contenido al infowindow
            infoWindow.setContent(content);
            //abro el info
            infoWindow.open(map);
        });
    }
})();