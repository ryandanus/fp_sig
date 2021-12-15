
    // if (!('remove' in Element.prototype)) {
    //     Element.prototype.remove = function() {
    //         if (this.parentNode) {
    //             this.parentNode.removeChild(this);
    //         }
    //     };
    // }
    mapboxgl.accessToken = 'pk.eyJ1Ijoibml6YXl1bGlhIiwiYSI6ImNrajJ6czQwdjA4Z3Yyc2xsamMwZThncnAifQ.AbatdQTi9Lrc2AP3sPS4Vg';

    var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    // style: 'mapbox://styles/mapbox/dark-v10',
    center: [112.73770,-7.24656],  
    zoom: 11,
    scrollZoom: true
    });

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),'top-right'
    );

    var perpustakaan = {
        "type": "FeatureCollection",
        "features": [
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.7454288297396, -7.263658851342474 
            ]
            },
            "properties": {
            "phone": "+62315349844",
            "nama": "Perpustakaan Umum Kota Surabaya",
            "alamat": "Jl. Gubernur Suryo No.15, Embong Kaliasin, Kec. Genteng, Kota SBY, Jawa Timur 60271"
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.7390458541574, -7.263994489945732 
            ]
            },
            "properties": {
            "phone": "-",
            "nama": "Taman Baca Umum Teras Warna",
            "alamat":"Jl. Kaliasin II No.34, Kedungdoro, Kec. Tegalsari, Kota SBY, Jawa Timur 60261"
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.76176868146973,-7.296211564671107            ]
            },
            "properties": {
            "phone": "+62315921733",
            "nama": "Perpustakaan Institut Teknologi Sepuluh Nopember (ITS)",
            "alamat": "Kampus ITS, JL ITS Raya, Sukolilo, 60111, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111",
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.75744575198236,-7.305750617255442
            ]
            },
            "properties": {
            "phone": "(031)5678703",
            "nama": "Dinas Perpustakaan Dan Kearsipan Kota Surabaya",
            "city": "Wonokromo",
            "alamat":"Jl. Setail No.1, Darmo, Kec. Wonokromo, Kota SBY, Jawa Timur 60241"
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.76798941306117, -7.2886061322093365,            ]
            },
            "properties": {
            "phone": "+62315947830",
            "nama": "DISPERPUSIP JATIM",
            "alamat": "Jl. Menur Pumpungan No.32, Menur Pumpungan, Kec. Sukolilo, Kota SBY, Jawa Timur 60118"
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
            112.74865582202119, -7.258097630542689
            ]
            },
            "properties": {
            "phone": "(031)5490410",
            "nama": "Perpustakaan UBAYA",
            "alamat": "Jl. Raya Tenggilis Mejoyo No.72, Kali Rungkut, Kec. Rungkut, Kota SBY, Jawa Timur 60293",
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                154.51171875,68.8159271333607
            ]
            },
            "properties": {
            "phone": "+62317675808",
            "nama": "Taman Bacaan Rw X Kelurahan Kertajaya",
            "alamat": "Jl. Manyar Adi I, Kertajaya, Kec. Gubeng, Kota SBY, Jawa Timur 60282"
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.74228957361306,-7.259131470538874
            ]
            },
            "properties": {
            "phone": "+62315041386",
            "nama": "Perpustakaan Kelurahan Ngagel Rejo",
            "alamat" : "PQ3P+F37, Semolowaru, Kec. Sukolilo, Kota SBY, Jawa Timur 60119"
            
            }
        },
        
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.73614839390758, -7.238611263568138
            ]
            },
            "properties": {
            "phone": "+62315677037",
            "nama": "Perpustakaan Bank Indonesia",
            "alamat":"Jl. Taman Mayangkara No.6, Darmo, Kec. Wonokromo, Kota SBY, Jawa Timur 60241"
            }
        },
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.75759366101565,-7.304278457996387
            ]
            },
            "properties": {
            "phone": "-",
            "nama": "Perpustakaan Daerah Jawa Timur",
            "alamat": "Unnamed Road, Sidosermo, Kec. Wonocolo, Kota SBY, Jawa Timur 60239",
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.75501874053712,-7.294743329681113
            ]
            },
            "properties": {
            "phone": "-",
            "nama": "Taman Bacaan Bratang",
            "alamat": "Jl. Bratang Wetan III No.28, Ngagelrejo, Kec. Wonokromo, Kota SBY, Jawa Timur 60245",
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.75278714278909,-7.291678423855804
            ]
            },
            "properties": {
            "phone": "http://surabaya.go.id/",
            "nama": "Taman Bacaan Krukah",
            "alamat": "Jl. Krukah Selatan, Ngagelrejo, Kec. Wonokromo, Kota SBY, Jawa Timur 60245",
            }
        }]
        }

    perpustakaan.features.forEach(function(place, i){
        place.properties.id = i;
    });

    map.on('load', function (e) {
        map.addSource("places", {
            "type": "geojson",
            "data": perpustakaan
        });
        // map.addSource('trees', {
        //     type: 'geojson',
        //     data: '/test.geojson'
        // });

        // var geocoder = new MapboxGeocoder({
        //     accessToken: mapboxgl.accessToken,
        //     mapboxgl: mapboxgl,
        //     marker: true,
        //     bbox: [-77.210763, 38.803367, -76.853675, 39.052643]
        // });

        buildLocationList(perpustakaan);
        addMarkers();
        map.addControl(new mapboxgl.NavigationControl(), 'top-right');
        }
    );

    /**
     * Menambahkan marker pada setiap daftar perpustakaan
    **/
    function addMarkers() {
    perpustakaan.features.forEach(function(marker) {
        var el = document.createElement('div');
        el.id = "marker-" + marker.properties.id;
        el.className = 'marker';
        new mapboxgl.Marker(el, {offset: [0, -23]})
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
        el.addEventListener('click', function(e){
        flyToPlace(marker);
        createPopUp(marker);
        var activeItem = document.getElementsByClassName('active');
        e.stopPropagation();
        if (activeItem[0]) {
            activeItem[0].classList.remove('active');
        }
        var listing = document.getElementById('listing-' + marker.properties.id);
        listing.classList.add('active');
        });
    });
    }

    /**
     * Menambahkan daftar objek wisata pada sidebar
    **/
    function buildLocationList(data) {
    data.features.forEach(function(place, i){
        var prop = place.properties;
        var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('div'));
        listing.id = "listing-" + prop.id;
        listing.className = 'item';
        var link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.id = "link-" + prop.id;
        link.innerHTML = prop.nama;

        /* Menambahkan detail pada tiap data listing. */
        var details = listing.appendChild(document.createElement('div'));
        // details.innerHTML = prop.city;
        // details.innerHTML += ' · ' + prop.phone;
        details.innerHTML = prop.phone;

        link.addEventListener('click', function(e){
        for (var i=0; i < data.features.length; i++) {
            if (this.id === "link-" + data.features[i].properties.id) {
            var clickedListing = data.features[i];
            flyToPlace(clickedListing);
            createPopUp(clickedListing);
            }
        }
        var activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
            activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');
        });
    });
    }

    function flyToPlace(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
        });
    }

    /**
     * Membuat pop-Up
    **/
    function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();

    var popup = new mapboxgl.Popup({closeOnClick: false})
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('<h3>' + currentFeature.properties.nama + '</h3>' + '<h4>' + currentFeature.properties.alamat + '</h4>')
        .addTo(map);
    }
