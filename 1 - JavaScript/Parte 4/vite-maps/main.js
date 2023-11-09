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
const API_KEY =
  "An8JNymYeoGzMUqXfVJlMm_9CLeMcpx_5NB0N1G9cUEUxIadv7XX5zVc008au1N1";

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

function createMarker(map, { latitude, longitude }, title, color = "blue") {
  const pin = new Microsoft.Maps.Pushpin(
    new Microsoft.Maps.Location(latitude, longitude),
    { title, color }
  );
  map.entities.push(pin);
  return pin;
}

async function showMap() {
  const coords = await getLocation();
  const center = new Microsoft.Maps.Location(coords.latitude, coords.longitude);

  showStaticMap(coords);

  const map = new window.Microsoft.Maps.Map(document.getElementById("map"), {
    credentials: API_KEY,
    center: center,
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    zoom: 17,
  });

  const pin = createMarker(map, center, "", "red");

  Microsoft.Maps.Events.addHandler(map, "click", (e) => {
    createMarker(map, e.location, "", "green");
    // pin.setLocation(e.location); // Mueve el marcador a ese punto
    // map.setView({center: e.location}); // Centra el mapa en el punto
  });

  Microsoft.Maps.loadModule("Microsoft.Maps.AutoSuggest", () => {
    const manager = new Microsoft.Maps.AutosuggestManager({ map, businessSuggestions: true });
    manager.attachAutosuggest("#searchBox", "#searchBoxContainer", (result) => {
      console.log(result);
      createMarker(map, result.location, "", "red");
      map.setView({ center: result.location });
      // Las coordenadas están en result.location.latitude y result.location.longitude
    });
  });
}

window.showMap = showMap;
loadBingAPI();
