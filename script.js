const displayImage = document.getElementById('display-image');
const inputSelfie = document.getElementById('selfie');

inputSelfie.addEventListener('change', () => {
  if (inputSelfie.files.length > 0) {
    const url = URL.createObjectURL(inputSelfie.files[0]);
    displayImage.src = url;
    displayImage.onload = () => {
      URL.revokeObjectURL(url);
      displayImage.onload = null;
    };
    displayImage.style.display = 'block';
  }
});
