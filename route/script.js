var map = L.map('map').setView([17.928900, 83.424561], 13);
		mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);

		var taxiIcon = L.icon({
			iconUrl: 'https://res.cloudinary.com/dbtkas8kr/image/upload/v1692512445/488x242_fy6azj.png',
			iconSize: [48, 25]
		})
        
        var accIcon = L.icon({
            iconUrl: 'https://res.cloudinary.com/dbtkas8kr/image/upload/v1692553024/Warning-icon.-The-attention-icon_koqmoe.png',
            iconSize: [50,50]
        })
        

        var marker = L.marker([17.686815,83.218483],{
			draggable: true,
			title:"Im Marker",
			icon: taxiIcon,
		}).addTo(map);


		map.on('click', function (e) {
			console.log(e);
			console.log([e.latlng.lat, e.latlng.lng]);
			var newMarker = L.marker([e.latlng.lat, e.latlng.lng],{ draggable: false, title: "Destination"}).addTo(map);
			L.Routing.control({
				waypoints: [
					L.latLng(17.928900, 83.424561),
					L.latLng(e.latlng.lat, e.latlng.lng)
				]
			}).addTo(map);
		});
		L.Routing.control({
			waypoints: [
				L.latLng(17.928900, 83.424561),
				L.latLng(18.296974, 83.896782)
			]
		}).on('routesfound', function (e) {
			var routes = e.routes;
			console.log(routes);

		}).addTo(map);

		var popup = L.popup()
		.setLatLng([17.928900, 83.424561])
		.setContent("<b>Vehicle Recommended on this Route<b><br><button class='btn btn-primary'><a href='file:///C:/Users/PRASAD/Desktop/hackathopia/test/price%20comparision/index.html' style='color: #ffffff;'>View</a></button>")
		.openOn(map);