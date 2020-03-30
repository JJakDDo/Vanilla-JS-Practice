const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(function(pos){
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        const coordsObj = {
            latitude : latitude,
            longitude : longitude
        };
        
        saveCoords(coordsObj);
    }, function(){
        console.log("Cant access geo location");
    });
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else{
        
    }
}

function init(){
    loadCoords();
}

init();