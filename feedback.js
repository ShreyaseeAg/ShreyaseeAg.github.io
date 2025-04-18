function submitFeedback() {
  const textarea = event.target.previousElementSibling;
  const feedback = textarea.value.trim();
  if (feedback) {
    alert("Thanks for your feedback:\n\n" + feedback);
    textarea.value = "";
  } else {
    alert("Please write some feedback before submitting.");
  }
}

// Load header and footer
window.addEventListener('DOMContentLoaded', () => {
  fetch('header.html').then(res => res.text()).then(data => {
    document.getElementById('header-container').innerHTML = data;
  });
  fetch('footer.html').then(res => res.text()).then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });
});
