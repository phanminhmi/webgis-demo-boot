$(document).ready(function () {
    var latlon = new google.maps.LatLng($("#lat").val(), $("#lng").val());
    console.log('latlon', latlon);
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: latlon,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var marker = new google.maps.Marker({
        position: latlon,
        map: map,
        draggable: true
    });
    google.maps.event.addListener(marker, 'dragend', function (pos) {
        $("#lat").val(pos.latLng.lat().toFixed(6));
        $("#lng").val(pos.latLng.lng().toFixed(6));
    });
});