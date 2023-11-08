function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve(pos.coords);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED: // User didn't allow the web page to retrieve location
            reject("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE: // Couldn't get the location
            reject("Location information is unavailable.");
            break;
          case error.TIMEOUT: // The maximum amount of time to get location information has passed
            reject("The request to get user location timed out.");
            break;
          default:
            reject("An unknown error occurred.");
            break;
        }
      }
    );
  });
}

const imgMap = document.getElementById("imgMap");
const API_KEY = "An8JNymYeoGzMUqXfVJlMm_9CLeMcpx_5NB0N1G9cUEUxIadv7XX5zVc008au1N1";

function showStaticMap(coords) {
  const latlon = coords.latitude + "," + coords.longitude;
  
  const imgUrl = `https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/${latlon}/15?mapSize=600,300&pp=${latlon};66&mapLayer=Basemap,Buildings&key=${API_KEY}`;
  imgMap.src = imgUrl;
}

function loadBingAPI() {
  const script = document.createElement("script");
  script.src = `https://www.bing.com/api/maps/mapcontrol?callback=showMap`;
  script.defer = true;
  document.body.append(script);
}

async function showMap() {
  let coords = await getLocation();
  showStaticMap(coords);

  new window.Microsoft.Maps.Map(document.getElementById('map'), {
    credentials: API_KEY,
      center: new Microsoft.Maps.Location(coords.latitude, coords.longitude),
      mapTypeId: Microsoft.Maps.MapTypeId.road,
      zoom: 17
  });
}

window.showMap = showMap;
loadBingAPI();