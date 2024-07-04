var map = L.map('map').setView([17.928900, 83.424561], 13);
		mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);

        var accIcon = L.icon({
            iconUrl: 'https://res.cloudinary.com/dbtkas8kr/image/upload/v1692961154/93-932278_london-bus-icon-bus_ujirnm-removebg-preview_bhdgsv.png',
            iconSize: [50,50]
        })

        var marker = L.marker([17.928900, 83.424561],{
			draggable: true,
            icon: accIcon,
			title:"Im Marker"
		}).addTo(map);

var buslocations=[
    [17.936911556237874, 83.42642239235845],
    [17.951158079023795, 83.43500162356466],
    [17.94332326094492, 83.38881514025188],
    [17.961277538664913, 83.39413774613551]

];
for (let i of buslocations){
    var marker = L.marker([i[0],i[1]],{
        draggable: true,
        icon: accIcon,
        title:"Bus"
    }).addTo(map);
}