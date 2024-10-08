document.getElementById('browseFiles').addEventListener('click', () => {
  document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    uploadImage(files[0]);
  }
});

document.getElementById('dropzone').addEventListener('drop', (event) => {
  event.preventDefault();
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    uploadImage(files[0]);
  }
});

document.getElementById('dropzone').addEventListener('dragover', (event) => {
  event.preventDefault();
});

function getCSRFToken() {
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  return csrftoken;
}

function uploadImage(file) {
  const formData = new FormData();
  formData.append('image', file);

  fetch('/upload/', {
    method: 'POST',
    headers: {
      'X-CSRFToken': getCSRFToken()
    },
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Redirect to the result page with the image ID
        window.location.href = `/result/${data.slug}/`;
      } else {
        console.error('Error uploading image');
      }
    })
    .catch(error => console.error('Error:', error));
}
