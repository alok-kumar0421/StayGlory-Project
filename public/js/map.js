mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: listing.geometry.coordinates,
  zoom: 6
});

// create pin element
const el = document.createElement('div');
el.className = 'pin';

// pulse ring
const pulse = document.createElement('div');
pulse.className = 'pulse';
el.appendChild(pulse);

// add marker
new mapboxgl.Marker(el)
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 })
      .setHTML(`<h4>${listing.location}</h4><p>exact location will be provide</p>`)
  )
  .addTo(map);
