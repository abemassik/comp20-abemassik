// Map initialization JavaScript

var southStation = new google.maps.LatLng(42.352271, -71.05524200000001);
var andrew = new google.maps.LatLng(42.330154, -71.057655);
var porter = new google.maps.LatLng(42.3884, -71.11914899999999);
var harvard = new google.maps.LatLng(42.373362, -71.118956);

var options = {
        center: andrew,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
}

function createMap() {         
        var map = new google.maps.Map(document.getElementById('map'), options);

        var southStationM = new google.maps.Marker({
                position:southStation,
                title: "South Station"
        });
        southStationM.setMap(map);
        
        // google.maps.event.addListener(southStationM, 'click', function {
        //         infowindow.setContent('South Station');
        //         infowindow.open(map, southStationM);
        // });


        map.setZoom(12);
}

