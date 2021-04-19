# Map Tracking

## Install

it has to host within SSL (https://) will not work on no SSL (http://).
Open the site on mobile with GPS and allow location.

Demo:
https://baliprojects.com/pwa/map-tracking/tracking.html

Click start to get starting point, and then commute. to stop tracking click stop button or refresh the page.

To retrieve the data connect android phone into computers (allow usb debugging and grant access the connected computer in android phone).

Go to chrome, chrome://inspect, click devices, choose your androis phone and then inspect.

type and enter:

```
copy(JSON.parse(localStorage.coordinates))
```

paste it on array coordinates (line 5) on app.js file. And the open index.html.

Demo:
https://baliprojects.com/pwa/map-tracking/index.html
