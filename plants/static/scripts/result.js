document.addEventListener('DOMContentLoaded', () => {
  const plantImage = document.getElementById('plantImage');

  if (plantImage) {
    const imageUrl = plantImage.getAttribute('src');
    if (imageUrl) {
      plantImage.src = imageUrl;
    }
  }

  const plantId = window.location.pathname.split('/').slice(-2, -1)[0];
  const scientificNameElement = document.getElementById('scientificName');
  const localNameHeadingElement = document.getElementById('localNameHeading');
  const localNameTextElement = document.getElementById('localNameText');
  const medicinalBenefitsElement = document.getElementById('medicinalBenefits');

  fetch('/static/plants_data.json')
    .then(response => response.json())
    .then(data => {
      const plant = data.plants.find(p => p.id == plantId);

      if (plant) {
        if (plantImage) {
          plantImage.src = plant.imageUrl;
        }
        scientificNameElement.textContent = plant.scientificName;
        localNameHeadingElement.textContent = plant.localName;
        localNameTextElement.textContent = plant.localName;

        medicinalBenefitsElement.innerHTML = '';
        plant.medicinalBenefits.forEach(benefit => {
          const li = document.createElement('li');
          li.textContent = benefit;
          medicinalBenefitsElement.appendChild(li);
        });
      }
    })
    .catch(error => console.error('Error fetching plant data:', error));
});

function handleHomeClick() {
  window.location.href = '/';
}

function handleUploadClick() {
  window.location.href = '/upload'; // Adjust the URL to where your upload page is located
}
