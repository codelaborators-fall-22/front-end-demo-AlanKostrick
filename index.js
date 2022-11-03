
const modal = document.getElementById('bookNowModal');
const bookNowBtn = document.getElementById('bookNow');
const closeBtn = document.querySelector('.close');
const nameInput = document.querySelector('#nameInput');
const submitBtn = document.querySelector('.submitBtn');

renderPage();

function renderPage() {
  openModal();
  closeModal();
  outsideClick();
  getFormData();
}

function openModal() {
  bookNowBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
}

function closeModal() {
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

function outsideClick() {
  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
}

function getFormData() {
  submitBtn.addEventListener('click', () => {
    const name = nameInput.value;
    console.log(name);
  });
}
