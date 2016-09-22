function get(url, callback, failCallback) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200)
                callback(xmlhttp.responseText, url);
            else
                failCallback(url);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function initMap() {
    var map = new L.Map('map').setView(new L.LatLng(51.3, 0.7), 8);
    var osm = new L.TileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 8,
        maxZoom: 12,
        attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });
    map.addLayer(osm);
}

get('https://unpkg.com/leaflet-bootstrap-zoom@1.0.2/README.md', function (text) {
    document.getElementById("readme").innerHTML = new showdown.Converter().makeHtml(text);
    initMap();
});

