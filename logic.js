// Store our API endpoint as queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  console.log(data);
  console.log("test");

  createFeatures(data.features);
  // Using the features array sent back in the API data, create a GeoJSON layer and add it to the map

  });

