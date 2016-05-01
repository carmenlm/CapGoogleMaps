/**
 * Created by carmen on 26/04/16.
 */

(function () {
    window.onload = function () {

        //debug
        console.log('arranco');

        //crea un objeto literal que contiene las propiedades
        var options = {
            zoom: 3,
            center: new google.maps.LatLng(37.09, -95.71),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        // creamos el mapa
        var map = new google.maps.Map(document.getElementById('map'), options);


        //creo un array de lugarres que contienen las coordenadas de
        //nueva york, seatle y san francisco y rio de janeiro
        var places = [];

        //añado la longitud y latitud de esos lugares
        places.push(new google.maps.LatLng(40.756, -73.986));
        places.push(new google.maps.LatLng(37.775, -122.419));
        places.push(new google.maps.LatLng(47.620, -122.347));
        places.push(new google.maps.LatLng(-22.933, -43.184));

        //declaro la variable infowindow
        var infowindow;

        // creo un objeto latlngbound
        //para establecer limites en el mapa
        var bounds = new google.maps.LatLngBounds();

        //itero por cada pos del array de lugares
        for (var i = 0; i < places.length; i++) {

            //creo un marcador para cada lugar
            var marker = new google.maps.Marker({
                position: places[i],
                map: map,
                title: 'Place number ' + i
            });


            //incorporamos el listener dentro una funcion anonima
            //llama y pasa la variable i al marcador
            (function (i, marker) {

                //creando el listener , se accede a los valores de i y marker durante su creacion
                google.maps.event.addListener(marker, 'click', function () {

                    //compruebo si el infowindow ya existe y no es nulo
                    if (!infowindow) {

                        //si no existe se crea uno vacio
                        infowindow = new google.maps.InfoWindow();

                    }

                    //creo un infowindow
                    infowindow.setContent('Place number ' + i);

                    //lo abro el info en el marcador
                    infowindow.open(map, marker);

                });

            })(i, marker);

            //extiendo los limites con cada latlng
            bounds.extend(places[i]);

        }

        //ajusto el mapa a los limites de lat y lng
        map.fitBounds(bounds)

    };
})();