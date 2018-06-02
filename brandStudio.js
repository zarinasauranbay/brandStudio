$(document).ready(function(){
    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [43.236213, 76.952315],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'BRANDSTUDIO',
        }, {
            iconImageSize: [20, 23],
        });


    myMap.geoObjects.add(myPlacemark)

});
    AOS.init()

})



