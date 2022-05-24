const Options = {
  center: [41.4583, 12.7059],
	zoom: 5,
  mapTypeId: 'topo',
  mapTypes: {
    streets: {
      name: 'Streets',
      url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      options: {
        // maxZoom: 24,
        // maxNativeZoom: 19,
        attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      },
    },
    terrain: {
      name: 'Terrain',
      url: 'https://{a-c}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
      options: {
        // maxZoom: 24,
        // maxNativeZoom: 22,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | Map style: &copy; <a href="http://www.thunderforest.com/">Thunderforest</a>',
        // apikey: '<your apikey>',
      },
    },
    satellite: {
      name: 'Satellite',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      options: {
        // maxZoom: 24,
        // maxNativeZoom: 18,
        attribution: 'Map data: &copy; <a href="http://www.esri.com/">Esri</a> &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      },
    },
    topo: {
      name: 'Topo',
      url: 'https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png',
      options: {
        // maxZoom: 24,
        // maxNativeZoom: 17,
        attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
      },
    },
  },
  drawingFeatures: [ 'Point', 'LineString', 'Polygon', 'Circle' ],
  fullscreenElement: 'main'
};

export default Options;