// Import from mapbox.
import "https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js";

// Array coordinates
const coordinates = [
    [
        115.2239512,
        -8.6889347
    ],
    [
        115.2239658,
        -8.6889426
    ],
    [
        115.2240294,
        -8.6889667
    ],
    [
        115.2240318,
        -8.6889733
    ],
    [
        115.2240249,
        -8.6890047
    ],
    [
        115.2240007,
        -8.6890389
    ],
    [
        115.2239378,
        -8.6890585
    ],
    [
        115.2239124,
        -8.6890659
    ],
    [
        115.2238813,
        -8.6890723
    ],
    [
        115.2238623,
        -8.6890712
    ],
    [
        115.2238345,
        -8.6890696
    ],
    [
        115.2237966,
        -8.6890704
    ],
    [
        115.2237465,
        -8.689078
    ],
    [
        115.2237039,
        -8.6890945
    ],
    [
        115.223689,
        -8.689097
    ],
    [
        115.2236784,
        -8.6890994
    ],
    [
        115.2236693,
        -8.6891012
    ],
    [
        115.2236655,
        -8.689101
    ],
    [
        115.2236595,
        -8.6891009
    ],
    [
        115.2236527,
        -8.6891022
    ],
    [
        115.2236398,
        -8.6891099
    ],
    [
        115.2236216,
        -8.6891125
    ],
    [
        115.2235808,
        -8.6891217
    ],
    [
        115.2235229,
        -8.6891409
    ],
    [
        115.2234645,
        -8.689161
    ],
    [
        115.2234079,
        -8.689179
    ],
    [
        115.2233527,
        -8.6891916
    ],
    [
        115.2233009,
        -8.6892048
    ],
    [
        115.2232557,
        -8.6892172
    ],
    [
        115.2232271,
        -8.6892264
    ],
    [
        115.2231878,
        -8.6892383
    ],
    [
        115.2231693,
        -8.689245
    ],
    [
        115.2231515,
        -8.6892519
    ],
    [
        115.2231299,
        -8.6892598
    ],
    [
        115.2231195,
        -8.6892618
    ],
    [
        115.2231039,
        -8.6892627
    ],
    [
        115.223088,
        -8.6892617
    ],
    [
        115.2230865,
        -8.6892649
    ],
    [
        115.2230891,
        -8.6892759
    ],
    [
        115.2231026,
        -8.6892906
    ],
    [
        115.223113,
        -8.6892945
    ],
    [
        115.2231351,
        -8.6893021
    ],
    [
        115.2231513,
        -8.6893136
    ],
    [
        115.2231659,
        -8.6893258
    ],
    [
        115.223188,
        -8.6893499
    ],
    [
        115.2232009,
        -8.6893632
    ],
    [
        115.2232345,
        -8.6893969
    ],
    [
        115.2232516,
        -8.6894203
    ],
    [
        115.2232692,
        -8.6894422
    ],
    [
        115.2232972,
        -8.6894781
    ],
    [
        115.2233224,
        -8.6895076
    ],
    [
        115.2233385,
        -8.6895302
    ],
    [
        115.2233662,
        -8.6895652
    ],
    [
        115.2233692,
        -8.6895736
    ],
    [
        115.2233799,
        -8.6895945
    ],
    [
        115.2233922,
        -8.6896158
    ],
    [
        115.2234066,
        -8.6896565
    ],
    [
        115.2234305,
        -8.6897064
    ],
    [
        115.2234525,
        -8.6897491
    ],
    [
        115.2234623,
        -8.6897659
    ],
    [
        115.2234753,
        -8.6897878
    ],
    [
        115.2234874,
        -8.6898028
    ],
    [
        115.2234972,
        -8.6898249
    ],
    [
        115.2235061,
        -8.6898449
    ],
    [
        115.2235142,
        -8.6898555
    ],
    [
        115.2235209,
        -8.6898599
    ],
    [
        115.223526,
        -8.6898609
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

alert( "Total distance: " + totalDistance + " meters" )

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
center: [ 115.2239512, -8.6889347],
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