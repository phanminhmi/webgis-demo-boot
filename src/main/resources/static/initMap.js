$(document).ready(
    function initMap() {
        var axondanang = {lat: parseFloat($("#lat").val()), lng: parseFloat($("#lon").val())};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: axondanang
        });
        infoWindow = new google.maps.InfoWindow;

        var marker = new google.maps.Marker({
            position: axondanang,
            map: map
        });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                infoWindow.open(map);
                map.setCenter(pos);
            }, function () {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    },
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }
);
