<script>
// Menu Toggle
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('show');
});
// Load Events
fetch('events.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('events-container');
    data.forEach(event => {
      const el = document.createElement('div');
      el.classList.add('event-item');
      el.innerHTML = `<h3>${event.title}</h3>
                      <small>${event.date}</small>
                      <p>${event.description}</p>
                      <a href="${event.link}" target="_blank">Learn More</a>`;
      container.appendChild(el);
    });
  });
// Form Demo
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent! (Demo only)');
});
</script>

