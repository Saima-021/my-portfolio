// show current year
document.getElementById('year').textContent = new Date().getFullYear();

// simple contact form handler (no real email — for demo only)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(!name || !email || !message){
    status.textContent = 'Please fill all fields.';
    status.style.color = 'crimson';
    return;
  }

  // demo success message
  status.textContent = 'Thanks — message received (demo).';
  status.style.color = 'green';
  form.reset();
});
