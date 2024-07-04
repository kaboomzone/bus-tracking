var map = L.map('map').setView([17.928900, 83.424561], 13);
		mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);

        var marker = L.marker([17.928900, 83.424561],{
			draggable: true,
			title:"Im Marker"
		}).addTo(map);

        L.circle([17.928900, 83.424561], {radius: 300}).addTo(map);