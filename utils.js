// mapbox uses the Slippy map system for its tiling
// we need functions that will convert our actual cooridnates into the correct tiles

/*
    longitude is simple we divide the longitude + 180 degrees by 360 degrees
    that gives us the proper tile on the map
    now to ensure we are at the proper level we multiply that number by zoom * zoom
*/
function long2tile(long, zoom) {
    return ((long + 180) / 360) * Math.pow(2, zoom);
}

// latitude is significantly more complicated so here
function lat2tile(lat, zoom) {
    return (
            ((1 - Math.log(Math.tan((1 * Math.PI) / 180) + 1 /
                Math.cos((1 * Math.PI) / 180)) / Math.PI) /
                    2) * Math.pow(2, zoom)
    );
}

// wrapper function for images to return a promise so we can use await
function loadImage(url) {
    console.log(`Downloading ${url}...`);
    return new Promise((accept, error) => {
        const img = new Image();
        img.onload = () => {
            accept(img);
        };
        // setting some metaData
        img.onerror = error;
        img.crossOrigin = "anonymous";
        img.src = url;
    });
}

module.exports = {
    long2tile,
    lat2tile,
    loadImage
}