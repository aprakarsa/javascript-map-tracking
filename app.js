// Import from mapbox.
import "https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js";

// Array coordinates
const coordinates = [
    [
        115.2239547,
        -8.6889406
    ],
    [
        115.2231463,
        -8.6892229
    ],
    [
        115.2231444,
        -8.6892257
    ],
    [
        115.2230809,
        -8.6893133
    ],
    [
        115.2230715,
        -8.6893134
    ],
    [
        115.2230656,
        -8.6893133
    ],
    [
        115.2230805,
        -8.6892883
    ],
    [
        115.2230922,
        -8.6892547
    ],
    [
        115.2230599,
        -8.6892442
    ],
    [
        115.223038,
        -8.6892454
    ],
    [
        115.2230177,
        -8.689221
    ],
    [
        115.223014,
        -8.6892133
    ],
    [
        115.2230187,
        -8.6892036
    ],
    [
        115.2230279,
        -8.6891907
    ],
    [
        115.2230504,
        -8.689186
    ],
    [
        115.2230232,
        -8.6891751
    ],
    [
        115.2230016,
        -8.6891667
    ],
    [
        115.2229694,
        -8.6891557
    ],
    [
        115.222953,
        -8.6891485
    ],
    [
        115.2229382,
        -8.6891423
    ],
    [
        115.2229255,
        -8.6891349
    ],
    [
        115.2229106,
        -8.6891247
    ],
    [
        115.2228845,
        -8.6891111
    ],
    [
        115.222866,
        -8.6890993
    ],
    [
        115.2228507,
        -8.6890868
    ],
    [
        115.2228377,
        -8.6890736
    ],
    [
        115.2227857,
        -8.6890047
    ],
    [
        115.2227518,
        -8.6889479
    ],
    [
        115.222717,
        -8.6888921
    ],
    [
        115.2226875,
        -8.6888368
    ],
    [
        115.2226481,
        -8.6887844
    ],
    [
        115.2226069,
        -8.6887438
    ],
    [
        115.2225733,
        -8.6887029
    ],
    [
        115.2225422,
        -8.6886612
    ],
    [
        115.2225154,
        -8.6886234
    ],
    [
        115.2225,
        -8.6885913
    ],
    [
        115.2224794,
        -8.6885457
    ],
    [
        115.2224476,
        -8.6885026
    ],
    [
        115.2224115,
        -8.6884634
    ],
    [
        115.2223852,
        -8.688421
    ],
    [
        115.2223467,
        -8.6883808
    ],
    [
        115.222308,
        -8.6883368
    ],
    [
        115.2222695,
        -8.6882889
    ],
    [
        115.2222277,
        -8.6882439
    ],
    [
        115.2221864,
        -8.688199
    ],
    [
        115.2221395,
        -8.6881343
    ],
    [
        115.2221118,
        -8.6880989
    ],
    [
        115.2220785,
        -8.6880515
    ],
    [
        115.2220383,
        -8.6879999
    ],
    [
        115.2219967,
        -8.6879454
    ],
    [
        115.221956,
        -8.6878887
    ],
    [
        115.221922,
        -8.6878264
    ],
    [
        115.2218878,
        -8.6877675
    ],
    [
        115.2218536,
        -8.6877094
    ],
    [
        115.221822,
        -8.6876535
    ],
    [
        115.2217904,
        -8.6875964
    ],
    [
        115.2217592,
        -8.6875353
    ],
    [
        115.2217293,
        -8.6874797
    ],
    [
        115.2216969,
        -8.6874259
    ],
    [
        115.2216623,
        -8.6873752
    ],
    [
        115.2216285,
        -8.6873151
    ],
    [
        115.2215911,
        -8.6872644
    ],
    [
        115.2215648,
        -8.6872082
    ],
    [
        115.2215392,
        -8.6871479
    ],
    [
        115.2215032,
        -8.6870992
    ],
    [
        115.2214608,
        -8.6870596
    ],
    [
        115.2214172,
        -8.6870253
    ],
    [
        115.2213735,
        -8.6869901
    ],
    [
        115.2213332,
        -8.6869558
    ],
    [
        115.2213014,
        -8.6869065
    ],
    [
        115.2212702,
        -8.686845
    ],
    [
        115.2212372,
        -8.6867834
    ],
    [
        115.2212053,
        -8.6867168
    ],
    [
        115.2211712,
        -8.6866481
    ],
    [
        115.2211516,
        -8.6865799
    ]
];

// Get length of array.
const coordsLength = coordinates.length;

// Get starting point and reverse to [lat, lng] format, because mapbox was opposite.
const startingPoint = coordinates[0];
const startCoords = String(startingPoint).split(',');
const newStartingPoint = startCoords[1] + ',' + startCoords[0]

// Get end point and reverse to [lat, lng] format, because mapbox was opposite.
const endPoint = coordinates[coordsLength - 1];
const endCoords = String(endPoint).split(',');
// const newEndPoint = endCoords[1] + ',' + endCoords[0]

// Get distance in meters and rounded up to 2 decimals.
const totalDistance = ((distance(startCoords[1], startCoords[0], endCoords[1], endCoords[0], "K")) * 1000).toFixed(2);

// alert( "Total distance: " + totalDistance + " meters" )

// if trip is already 100 meter, then change status to on progress.
if (totalDistance >= 100) {
    alert( "Set status to on progress... Have reach 100 meters.")
}

// Function to calculate distance in Haversine formula.
function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}

mapboxgl.accessToken = 'pk.eyJ1IjoiYXByYWthcnNhIiwiYSI6ImNrbm85NGZ0bTE1Y3Iydm4xbHpvampkN2QifQ.5hYgW_2uzKLOvSalMPLtlw';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [ startCoords[0], startCoords[1] ],
zoom: 15
});

map.on('load', function () {
    map.addSource('route', {
    'type': 'geojson',
    'data': {
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'LineString',
    'coordinates': coordinates
    }
    }
    });
    map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'route',
    'layout': {
    'line-join': 'round',
    'line-cap': 'round'
    },
    'paint': {
    'line-color': '#4169e1',
    'line-width': 8
    }
    });
    });
