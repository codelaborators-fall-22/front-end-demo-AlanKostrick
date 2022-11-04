const bookNowModal = document.querySelector('#bookNowModal');
const closeModalBtn = document.querySelector('.close');
const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const submitBtn = document.querySelector('.submitBtn');
const bookNowBtn = document.querySelector('#bookNowBtn');


openModal();
closeModal();
submitFormData();

function openModal() {
    bookNowBtn.addEventListener('click', () => {
        bookNowModal.style.display = 'block';
    });
}

function closeModal() {
    closeModalBtn.addEventListener('click', () => {
        bookNowModal.style.display = 'none';
    });
}

function submitFormData() {
    submitBtn.addEventListener('click', () => {
        const nameInfo = nameInput.value;
        const emailInfo = emailInput.value;
        console.log('Sending...', nameInfo, emailInfo);
    });
}