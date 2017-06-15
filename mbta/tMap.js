// Map initialization JavaScript

var southStation = new google.maps.LatLng(42.352271, -71.05524200000001);
var andrew = new google.maps.LatLng(42.330154, -71.057655);
var porter = new google.maps.LatLng(42.3884, -71.11914899999999);
var harvard = new google.maps.LatLng(42.373362, -71.118956);
var umass = new google.maps.LatLng(42.320685, -71.052391);
var savin = new google.maps.LatLng(42.31129, -71.053331);
var parkSt = new google.maps.LatLng(42.35639457, -71.0624242);
var broadway = new google.maps.LatLng(42.342622, -71.056967);
var northQuincy = new google.maps.LatLng(42.275275, -71.029583);
var shawmut = new google.maps.LatLng(42.29312583, -71.06573796000001);
var davis = new google.maps.LatLng(42.39674, -71.121815);
var alewife = new google.maps.LatLng(42.395428, -71.142483);
var kendall = new google.maps.LatLng(42.36249079, -71.08617653);
var charlesMGH = new google.maps.LatLng(42.361166, -71.070628);
var dtnCrs = new google.maps.LatLng(42.355518, -71.060225);
var quincyCtr = new google.maps.LatLng(42.251809, -71.005409);
var quincyAdams = new google.maps.LatLng(42.233391, -71.007153);
var ashmont = new google.maps.LatLng(42.284652, -71.06448899999999);
var wollaston = new google.maps.LatLng(42.2665139, -71.0203369);
var fields = new google.maps.LatLng(42.300093, -71.061667);
var central = new google.maps.LatLng(42.365486, -71.103802);
var braintree = new google.maps.LatLng(42.2078543, -71.0011385);

var route = [alewife, davis, porter, harvard, central, kendall, charlesMGH,
             parkSt, dtnCrs, southStation, broadway, andrew, umass,
             northQuincy, wollaston, quincyCtr, quincyAdams, braintree];

var branch = [umass, savin, fields, shawmut, ashmont];



var options = {
        center: southStation,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
}


function createMap() {         
        var map = new google.maps.Map(document.getElementById('map'), options);

        


        addStop (southStation, "South Station");
        addStop (andrew, "Andrew");
        addStop (porter, "Porter Square");
        addStop (harvard, "Harvard Square");
        addStop (umass, "JFK/UMass");
        addStop (savin, "Savin Hill");
        addStop (parkSt, "Park Street");
        addStop (broadway, "Broadway");
        addStop (northQuincy, "North Quincy");
        addStop (shawmut, "Shawmut");
        addStop (davis, "Davis Square");
        addStop (alewife, "Alewife");
        addStop (kendall, "Kendall Square/MIT");
        addStop (charlesMGH, "Charles/MGH");
        addStop (dtnCrs, "Downtown Crossing");
        addStop (quincyCtr, "Quincy Center");
        addStop (quincyAdams, "Quincy Adams");
        addStop (ashmont, "Ashmont");
        addStop (wollaston, "Wollaston");
        addStop (fields, "Fields Corner");
        addStop (central, "Central Square");
        addStop (braintree, "Braintree");

        var redLine = new google.maps.Polyline ({
                path: route,
                strokeColor: "#ef1a2c",
                strokeWeight: 2,
                map: map
        });

        var redLineBranch = new google.maps.Polyline ({
                path: branch,
                strokeColor: "#ef1a2c",
                strokeWeight: 2,
                map: map
        });


        
        

        function addStop (coord, name) {
                var marker = new google.maps.Marker({
                        position:coord,
                        title: name,
                        map: map,
                        icon: 'favicon.ico'
                });
                var info = new google.maps.InfoWindow({
                        content: name
                });
                marker.addListener('click', function() {
                        info.open(map,marker);
                })
        }
}

