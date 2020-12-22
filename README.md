# Leaflet Homework - Visualizing Data with Leaflet

## Javascript, HTML, CSS

### Challenge: The United States Geological Survey (USGS) is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.  Visualize earthquake data using the USGS datasets

* Get the data
```
// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  function styleInfo(feature) {
    return {
      fillOpacity: 3,
      fillColor: getColor(feature.properties.mag),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 1
    };
  }
```

* Import & Visualize the Data
```
    // GeoJSON layer
    L.geoJson(data, {
      // Maken cricles
      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng);
      },
      // cirecle style
      style: styleInfo,
      // popup for each marker
      onEachFeature: function(feature, layer) {
        layer.bindPopup("Magnitude: " + feature.properties.mag + "<br><br>Location: " + feature.properties.place);
      }
    }).addTo(myMap);
  
```


   * Data markers should reflect the magnitude of the earthquake by their size and and depth of the earth quake by color. 
```
  // set different color from magnitude
    function getColor(magnitude) {
    switch (true) {
    case magnitude > 5:
      return "red";
    case magnitude > 4:
      return "orangered";
    case magnitude > 3:
      return "darkorange";
    case magnitude > 2:
      return "orange";
    case magnitude > 1:
      return "gold";
    default:
      return "yellow";
    }
  }
  // set radiuss from magnitude
    function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }

    return magnitude * 5;
  }
    // GeoJSON layer
    L.geoJson(data, {
      // Maken cricles
      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng);
      },
```
   * Include popups that provide additional information about the earthquake when a marker is clicked.
```
      // circle style
      style: styleInfo,
      // popup for each marker
      onEachFeature: function(feature, layer) {
        layer.bindPopup("Magnitude: " + feature.properties.mag + "<br><br>Location: " + feature.properties.place);
      }
```
   * Create a legend that will provide context for your map data.
```
// legend
    legend.onAdd = function() {
      var div = L.DomUtil.create("div", "info legend");
  
      var grades = [0, 1, 2, 3, 4, 5];
      var colors = [
        "yellow",
        "gold",
        "orange",
        "darkorange",
        "orangered",
        "red"
      ];
      
      // Looping through
      for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
          "<i style='background: " + colors[i] + "'></i> " +
          grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
      }
      return div;
    };
```

