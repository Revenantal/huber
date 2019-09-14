var map;
var clientLatLang = {lat: 45.416214, lng: -75.6967377};
var nearestHuberLatLang = randomShiftLocation(clientLatLang, -0.1,0.1);
var directionsRenderer;
var markers = [];
var $alert = $("#alert");
var $alertText = $alert.find('#alert-text');

function initMap() {
    var icons = {
        horse: new google.maps.MarkerImage(
            '/img/horse-marker.png',
            new google.maps.Size(50, 36),
            new google.maps.Point(0, 0),
            new google.maps.Point(25, 18)),
        cross: new google.maps.MarkerImage(
            '/img/marker.png',
            new google.maps.Size(50, 50),
            new google.maps.Point(0, 0),
            new google.maps.Point(25, 25))
    };
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();

    map = new google.maps.Map(document.getElementById('map'), {
        center: clientLatLang,
        zoom: 15,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#181818"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1b1b1b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8a8a8a"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#373737"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3c3c3c"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4e4e4e"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3d3d3d"
                    }
                ]
            }
        ]
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            clientLatLang = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(clientLatLang);


            fn60sec();
            setInterval(fn60sec,15*1000);

        }, function() {
            fn60sec();
            setInterval(fn60sec,15*1000);
        });
    } else {
        fn60sec();
        setInterval(fn60sec,15*1000);
    }




    var step = 0;
    function fn60sec() {
        if (step==0) {
            // First Render
            newHuberDriver();
            nearestHuberLatLang = randomShiftLocation(clientLatLang, -0.1,0.1);
            calcRoute();
            $alertText.html("Hi, I'm your new Huber Driver!");
        }
        if (step==1){
            // Generate a new location
            $alertText.html("Hey, it looks like you moved positions... Please stay where you are!");
            clientLatLang =  randomShiftLocation(clientLatLang, -0.01, 0.01);
            calcRoute();
        }
        if (step==2){
            $alertText.html("You moved again. Someone else can pick you up.");
            // Generate a new location
            clientLatLang =  randomShiftLocation(clientLatLang, -0.01, 0.01);
            calcRoute();
        }
        if (step==3){
            $alertText.html("Hi! I'm new to Huber! I'll be there soon!");
            // Generate new Rider
            clientLatLang =  randomShiftLocation(clientLatLang, -0.01, 0.01);
            nearestHuberLatLang = randomShiftLocation(clientLatLang, -0.1,0.1);
            newHuberDriver();
            calcRoute();
        }
        if (step==4){
            $alertText.html("So I got a little lost... give me a bit longer.");
            // Generate a lost rider
            clientLatLang =  randomShiftLocation(clientLatLang, -0.01, 0.01);
            nearestHuberLatLang = randomShiftLocation(nearestHuberLatLang, -0.01,-0.01);
            calcRoute();
        }
        if (step==5) {
            $alertText.html("Alright well, <a href='https://www.youtube.com/channel/UCROochQfs2p5KKH-WrFSd5w' target='_blank'>Hummys VR Comedy</a> released a new video and I don't know how to turn this thing off, so good luck!");
            //Yea i give up, and I can't turn this off... soooo
        }


        step++;


    }



    // Calc the travel time from start to dest.
    function calcRoute() {

        var request = {
            origin: nearestHuberLatLang,
            destination: clientLatLang,
            travelMode: 'DRIVING'
        };
        directionsService.route(request, function(response, status) {
            if (status == 'OK') {
                if (directionsRenderer) {
                    directionsRenderer.setMap(null);
                }

                if (markers) {
                    for (var i = 0; i < markers.length; i++) {
                        markers[i].setMap(null);
                    }
                }

                directionsRenderer = new google.maps.DirectionsRenderer({
                    map: map,
                    directions: response,
                    suppressMarkers: true
                });

                var route = response.routes[0];
                var leg = route.legs[0];

                // Place horse pin
                markers.push(new google.maps.Marker({
                    position: leg.start_location,
                    map: map,
                    icon: icons.horse
                }));

                // Place client pin
                markers.push(new google.maps.Marker({
                    position: leg.end_location,
                    map: map,
                    icon: icons.cross
                }));

                var arrivalMinutes = Math.floor(leg.duration.value / 60);
                $(".arrival-time").html(arrivalMinutes + " Minutes");
            } else {
                //Error
                console.log("Ya.. nope.")
            }
        });
    }

}





var horseNames = ["Tomahawk", "Nine Lives", "Bonbon", "Concorde", "Sprout", "Greenspeak", "Amistad", "Majesty", "Foley", "Time Lord", "Sky Walker", "Flicker Wind", "Endless", "Cuber", "Shaitan", "Ganna", "Gamma", "Hostess", "Miss Velvet", "Skull", "Lazylegs", "Lone Star", "Briton", "Eurus", "Miss Velvet", "Natura", "Primula", "Alaska", "Stampede", "Jewel", "Clover", "Verity", "Folken", "Cadence", "Dowager", "Flack", "Relic", "Autumn Gem", "Signal", "Doctor", "Dark Strike", "Poker", "Starbright", "Saffron", "Odyssey", "Nephew", "Baroness", "Fatso", "Stubborn", "Mariposa", "Laconia", "Generosity", "Senator", "Caramel", "Trance", "Jelly", "Silver", "Bumper", "Pancake", "Hurricane", "Star Wind", "Pilgrim", "Moose", "Boulder", "Delight", "Minos", "Steel Heart", "Eagle", "Strong", "Narcissus", "Night Hawk", "Derpy", "Falchion", "Camino", "Alara", "Golden Star", "Grenade", "Poetry", "Leaena", "Snow Wolf", "Barbarossa", "Camanche", "Biscuit", "Torpedo", "Javelin", "Comet Tail", "Paladin", "Yasha", "Faust", "Paprika", "Silver Bells", "Bronte", "Black Watch", "Priss", "Dessa", "Asterix"]

var riderNames = ["Muriel", "Dorothea", "Cynthia", "Julie", "Lucrecia", "Trena", "Roma", "Catherina", "Christen", "Nita", "Olimpia", "Lilia", "Minda", "Torri", "Tisha", "Bryan", "Berneice", "Danita", "Florencio", "Alphonso", "Marion", "Marcus", "Carlton", "Leontine", "Blondell", "Clark", "Cathy", "Jackie", "Maxwell", "Nancey", "Louie", "Sarai", "Vernita", "Nichol", "Loreen", "Consuela", "Lashunda", "Pura", "Francisca", "Monet", "Loyd", "Yang", "Violeta", "Holley", "Pauline", "Nenita", "Malorie", "Darlena", "Ming", "Jarvis","Fluffypuppy32's Son"];


function newHuberDriver() {
    $(".horse-name").html(horseNames[Math.floor(Math.random() * horseNames.length)]);
    $(".rider-name").html(riderNames[Math.floor(Math.random() * riderNames.length)]);

}





// Randomly shuffle users location to simulate shifting location.
function randomShiftLocation(curLatLang, minShift, maxShift) {
    var newLat = (Math.random() * (maxShift * 2)) + minShift;
    var newLng = (Math.random() *(maxShift * 2)) + minShift;

    var shiftedLatLang = {
        lat: curLatLang.lat + newLat,
        lng: curLatLang.lng + newLng,
    };

    return shiftedLatLang;
}
