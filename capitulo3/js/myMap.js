/**
 * Created by carmen on 26/04/16.
 */


(function () {

    window.onload = function () {
        var mapDiv = document.getElementById('map');


        var options = {

            zoom: 3,
            center: new google.maps.LatLng(37.09, -95.71),
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                position: google.maps.ControlPosition.BOTTOM,
                mapTypeIds: [
                    google.maps.MapTypeId.ROADMAP,
                    google.maps.MapTypeId.SATELLITE
                ]
            }

        };

        var map = new google.maps.Map(mapDiv, options);
    };

})();