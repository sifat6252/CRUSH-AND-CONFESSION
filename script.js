// JavaScript to handle the confession submission and display

document.getElementById('confessionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const confessionText = document.getElementById('confessionText').value;
    
    if (confessionText.trim() === "") {
        alert("Please enter a confession!");
        return;
    }

    const confessionList = document.getElementById('confessions');
    
    const newConfession = document.createElement('li');
    newConfession.textContent = confessionText;
    
    confessionList.appendChild(newConfession);

    // Clear the text area after submission
    document.getElementById('confessionText').value = '';
});
