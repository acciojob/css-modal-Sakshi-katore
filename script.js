//your JS code here. If required.
function openModal() {
  document.querySelector('.modal').style.display = 'block';
}

document.querySelector('.close-modal').addEventListener('click', function () {
  document.querySelector('.modal').style.display = 'none';
});