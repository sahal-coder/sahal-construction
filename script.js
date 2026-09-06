const menuBtn = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const formMessage = document.querySelector('.form-message');


menuBtn.addEventListener('click', function() {
  navigation.classList.toggle('active')
})

const navigationLinks = document.querySelectorAll('.navigation a');

navigationLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    navigation.classList.remove('active');
  });
});

const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  formMessage.classList.remove('error', 'success');
  

  if (nameValue === '' || emailValue === '' || messageValue === '') {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.classList.add('error');
    return;
  }

  if (!emailValue.includes('@')) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.classList.add('error');
    return;
  }

  formMessage.textContent = 'Thank you! Your message has been received.';
  formMessage.classList.add('success');


  contactForm.reset();
});

