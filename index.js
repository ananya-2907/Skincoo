const form = document.querySelector('form');
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".card-2");
form.addEventListener('submit',(e) => {
e.preventDefault();
card_1.classList.add("hide");
card_2.classList.remove("hide");
});   

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });