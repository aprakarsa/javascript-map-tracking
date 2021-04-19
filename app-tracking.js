const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const coordinates = [];
var watchID;

start.addEventListener("click", () => {
    document.getElementById("status").innerHTML = "Start...";
    watchID = navigator.geolocation.watchPosition(
        data => {
            console.log(data);
            // coordinates.push([data.coords.latitude, data.coords.longitude]);
            coordinates.push([data.coords.longitude, data.coords.latitude]);
            window.localStorage.setItem("coordinates", JSON.stringify(coordinates));

            document.getElementById("results").innerHTML = localStorage.getItem("coordinates");
        },
        (error) => console.log(Error),
        {
            enableHighAccuracy: true
        }
    );
});

stop.addEventListener("click", () => {
    document.getElementById("status").innerHTML = "Stop!";
    navigator.geolocation.clearWatch(watchID);
})

/////////////

// Get length of array.
const coordinatesArr = JSON.parse(localStorage.getItem("coordinates"));
const coordsLength = coordinatesArr.length;

// Get starting point and reverse to [lat, lng] format, because mapbox was opposite.
const startingPoint = coordinatesArr[0];
const startCoords = String(startingPoint).split(',');
const newStartingPoint = startCoords[1] + ',' + startCoords[0]

// Get end point and reverse to [lat, lng] format, because mapbox was opposite.
const endPoint = coordinatesArr[coordsLength - 1];
const endCoords = String(endPoint).split(',');
// const newEndPoint = endCoords[1] + ',' + endCoords[0]

// Get distance in meters and rounded up to 2 decimals.
const totalDistance = ((distance(startCoords[1], startCoords[0], endCoords[1], endCoords[0], "K")) * 1000).toFixed(2);

// console.log( "Total distance: " + totalDistance + " meters" )

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
