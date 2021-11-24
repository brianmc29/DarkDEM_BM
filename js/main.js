//function to start the Leaflet map
function createMap() {

    //Varibles needed for running the funcation
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a>| '+'<a href="http://mapbox.com">Mapbox</a>';
    var apitoken = 'pk.eyJ1IjoiYnJpYW5tYzI5IiwiYSI6ImNrdm5vYWxwbmUwZTAycG1hM251dDZ1N3gifQ.yxAx6olipNKQCFJ_1hj0eA' //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */
    
      
    //URL used for Custom MapBox Style
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}';
    
    
    //For Custome basemaps - Replace your username and StyleID
    var DarkDEM = L.tileLayer(mbStyleUrl, {id: 'brianmc29/ckvnoe41y7ebt15pelxmc2lko', token: apitoken,  attribution: mbAttr});    
    
    var darkTerrain = L.tileLayer(mbStyleUrl, {id: 'sounny/cjy6np5ld1sjg1cme97n3yosk', token: apitoken,  attribution: mbAttr});
    
    var grayscale = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    var dark = L.tileLayer(mbUrl, {id: 'mapbox.dark', token: apitoken,  attribution: mbAttr});
    
    var outdoors = L.tileLayer(mbUrl, {id: 'mapbox.outdoors', token: apitoken,  attribution: mbAttr});
    
          
    //create the map*/
    var map = L.map('map', {
        center: [31.00, -5],//Coordinated to center the map
        zoom: 6, //zoom level
        layers: DarkDEM
    });
    
     //create the basemap control layer*/
    var baseLayers = {
		"Outdoors": outdoors,
                

    }
    
//calling the funcation
$(document).ready(createMap);