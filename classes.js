import GMap from "./load_map.js"

async function loadClasses() {
    await GMap;
    return class extendedMap extends google.maps.Map {
        constructor(element, options) {
            super(element, options);
        }
    }
}


export default loadClasses()
