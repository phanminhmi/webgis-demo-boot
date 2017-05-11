$(document).ready(function initMap() {
        var uluru = {lat: parseFloat($("#lat").val()), lng: parseFloat($("#lon").val())};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
);

$(document).ready(


function eqfeed_callback(results) {
    var heatmapData = [];
    for (var i = 0; i < results.features.length; i++) {
        var coords = results.features[i].geometry.coordinates;
        var latLng = new google.maps.LatLng(coords[1], coords[0]);
        heatmapData.push(latLng);
    }
    var heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        dissipating: false,
        map: map
    });
}
);


