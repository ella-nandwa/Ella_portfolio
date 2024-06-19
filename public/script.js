document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://formspree.io/f/yourFormID'); // Replace with your Formspree form ID
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            alert('Form submitted successfully!');
            event.target.reset();
        } else {
            alert('An error occurred. Please try again.');
        }
    };
    xhr.send(formData);
});
