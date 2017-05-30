mapboxgl.accessToken = 'pk.eyJ1IjoibWFkZWxlaW5lam9oYW5zb24iLCJhIjoiY2lzczduYzJ4MDZrODJucGh0Mm1xbmVxNCJ9.i7q4iT8FFgh_y5v4we5UhQ';
var map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v9',
    center: [151.2056, -33.8572],

    // homebush [151.08223, -33.8680],
    // sydney pier [151.2056, -33.8572],
   zoom: 12,
    pitch: 15,
    bearing: 0,
    container: 'map'
});

map.addControl(new mapboxgl.ScaleControl({
    maxWidth: 200,
    unit: 'metric'
}));

map.addControl(new mapboxgl.NavigationControl(), ['top-right']);