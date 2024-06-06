let isImage1 = true;

function changeImage() {
  const image = document.getElementById('buttonImage');

  if (isImage1) {
    image.src = 'icon-02.svg';
  } else {
    image.src = 'icon-01.svg';
  }

  isImage1 = !isImage1;
}
 
