function initMap() {
  // Coordonnées géographiques de ton adresse : 8 Rue Michel Montaigne, 56000 Vannes
  var latitude = 47.6639;
  var longitude = -2.7481;

  // 1. Initialise la carte dans la div avec l'ID 'google-maps'
  var map = L.map('google-maps').setView([latitude, longitude], 15);

  // 2. Charge les visuels (tuiles) de la carte OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // 3. Ajoute le repère rouge (Marker) sur ton adresse exacte
  L.marker([latitude, longitude]).addTo(map)
    .bindPopup('<b>Rocher Goueth Manianga</b><br>8 Rue Michel Montaigne, Vannes.')
    .openPopup();
}

// Déclenche l'affichage dès que la page HTML est prête
document.addEventListener("DOMContentLoaded", initMap);