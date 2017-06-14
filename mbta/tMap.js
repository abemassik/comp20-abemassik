// Map initialization JavaScript

var southStation = new google.maps.LatLng(42.352271, -71.05524200000001);
var options = {
        center: southStation,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
}

function createMap() {
        var map = new google.maps.Map(document.getElementById('map'), options);

        var marker = new google.maps.Marker({
                position:southStation,
                title: "test"
        });
        marker.setMap(map);
}

