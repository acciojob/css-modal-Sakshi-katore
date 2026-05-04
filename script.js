//your JS code here. If required.
function openModal() {
  document.querySelector('.modal').style.display = 'block';
}
document.querySelector('.modal').addEventListener('click', function (e) {
  if (e.target.classList.contains('modal')) {
    this.style.display = 'none';
  }
});
