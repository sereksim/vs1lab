// File origin: VS1LAB A2

/* eslint-disable no-unused-vars */

// This script is executed when the browser loads index.html.

// "console.log" writes to the browser's console. 
// The console window must be opened explicitly in the browser.
// Try to find this output in the browser...
console.log("The geoTagging script is going to start...");


const GeoTagStore = require('../../models/geotag-store');

/**
 * A function to retrieve the current location and update the page.
 * It is called once the page has been fully loaded.
 */
function updateLocation() {

    /**
     * @param helper {LocationHelper}
     */
    function callback(helper) {
        var longD = document.getElementById("hidden_longitude_id");
        var latD = document.getElementById("hidden_latitude_id");
        latD.setAttribute("value", helper.latitude);
        longD.setAttribute("value", helper.longitude);
        var longT = document.getElementById("longitude_id");
        var latT = document.getElementById("latitude_id");
        latT.setAttribute("value", helper.latitude);
        longT.setAttribute("value", helper.longitude);
        var manager = new MapManager("1fuMAYDadogIhChVgO3HQp5oc01EVfDb");
        var map = document.getElementById("mapView");
        let taglist_json = mapElem.getAttribute("data-tags");
        let taglist_obj = JSON.parse(taglist_json);
        map.setAttribute("src", manager.getMapUrl(helper.latitude, helper.longitude, taglist_obj));
    }
    var long = document.getElementById("longitude_id");
    var lat = document.getElementById("latitude_id");
    const latV = lat.getAttribute("value");
    const longV = long.getAttribute("value");
    if ((longV === "") && (latV === "")) {
        LocationHelper.findLocation(callback);    
    }
    LocationHelper.findLocation(callback); 
}

//UpdateLocation eingefügt, damit es nach jedem Laden der Seite aufgerufen wird
// Wait for the page to fully load its DOM content, then call updateLocation
document.addEventListener("DOMContentLoaded", () => {
    //alert("Please change the script 'geotagging.js'");
    updateLocation();
});