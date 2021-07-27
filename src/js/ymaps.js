ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("YMapsID", {
    center: [56.75, 37.16],
    zoom: 7,
  }),
  myGeoObject = new ymaps.GeoObject({
    geometry: {
        type: "Point",
        coordinates: [56.753450272088116,37.16410160155168]
    },
    properties: {
        iconContent: 'Temple of Web Development',
        hintContent: 'ABOBA WEBDEV'
    }
}, {

    preset: 'islands#blackStretchyIcon',
    draggable: false
})

myMap.geoObjects.add(myGeoObject)

};