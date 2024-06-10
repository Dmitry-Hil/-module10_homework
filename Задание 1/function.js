function changeImage() {
  const iconImage = document.getElementById('iconImage');

  if (iconImage.getAttribute('src') === 'icon-01.svg') {
    iconImage.setAttribute('src', 'icon-02.svg');
  } else {
    iconImage.setAttribute('src', 'icon-01.svg');
  }
}
 
