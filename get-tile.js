// require helper functions
const utils = require("./utils");
// load mapbox key
const fs = require("fs");
const MAPBOX_KEY = fs.readFileSync("map.key").toString();

function get_tile() {
    // define zoom and position of map tile
    const zoom = 10;
    // somewhere in the grand canyon
    const [lat, long] = [36.133487, -112.239884];

    // convert to coordinates readable by mapbox
    const tLat = Math.floor(utils.lat2tile(lat, zoom));
    const tLong = Math.floor(utils.long2tile(long, zoom));

    // load image from mapbox
    const image = await utils.loadImage(
            `https://api.mapbox.com/v4/mapbox.satellite/${zoom}/${tLong}/${tLat}@2x.pngraw?access_token=${MAPBOX_KEY}`
    );

    return image;
//    // add our tile to the page
//    document.body.appendChild(image);
}

//get_tile();

module.exports = {test: "Hello?", get_tile};
