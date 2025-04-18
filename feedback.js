function submitFeedback() {
  const textarea = event.target.previousElementSibling;
  const feedback = textarea.value.trim();
  if (feedback.length > 0) {
    alert("Thanks for your feedback!\n\n" + feedback);
    textarea.value = "";
  } else {
    alert("Please enter feedback before submitting.");
  }
}
