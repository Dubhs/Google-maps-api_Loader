import GMap from "./load_map.js"
import loadClasses from "./classes.js";


async function initMap() {
    await GMap;
    let extendedMap = await loadClasses;

    let map = new extendedMap(document.getElementById("map"), {
        zoom: 8,
        center: { lat: -34.397, lng: 150.644 },
        mapTypeId: "terrain",
    })
    console.log(map)
}

(async () => {
    initMap()
})()