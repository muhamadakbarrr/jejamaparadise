document.addEventListener('DOMContentLoaded', function() {
    fetch('public/data/DATA.json')
      .then(response => response.json())
      .then(data => {
        const placesList = document.getElementById('places-list');
        data.forEach(place => {
          const placeItem = document.createElement('div');
          placeItem.classList.add('place');
          placeItem.innerHTML = `
            <img src="public/images/wisata/${place.image}" alt="${place.nama}">
            <h3>${place.nama}</h3>
            <p>${place.deskripsi}</p>
            <a href="${place.link_gmaps}" target="_blank">Lihat Lokasi</a>
          `;
          placesList.appendChild(placeItem);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  