document.getElementById("rationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Get form values
    const rationNumber = document.getElementById("rationNumber").value;
    const holderName = document.getElementById("holderName").value;
    
    // Store in localStorage or a list
    let registeredData = JSON.parse(localStorage.getItem("registeredData")) || [];
    
    // Add new entry to list
    registeredData.push({ rationNumber, holderName });
    localStorage.setItem("registeredData", JSON.stringify(registeredData));

    // Show the registered data instantly
    displayRegisteredData();
    
    // Clear the form inputs
    document.getElementById("rationForm").reset();
});

function displayRegisteredData() {
    const registeredData = JSON.parse(localStorage.getItem("registeredData")) || [];
    const registeredDataDiv = document.getElementById("registeredData");
    registeredDataDiv.innerHTML = "<h3>Registered Ration Numbers:</h3>";

    registeredData.forEach(data => {
        registeredDataDiv.innerHTML += `
            <p>Ration Number: ${data.rationNumber}, Holder Name: ${data.holderName}</p>
        `;
    });
}

// Track ration number status
document.getElementById("trackButton").addEventListener("click", function () {
    const rationNumber = document.getElementById("trackRation").value;
    const registeredData = JSON.parse(localStorage.getItem("registeredData")) || [];
    const trackResultDiv = document.getElementById("trackResult");
    
    const found = registeredData.find(data => data.rationNumber === rationNumber);
    
    if (found) {
        trackResultDiv.innerHTML = `Ration Number ${found.rationNumber} belongs to ${found.holderName}.`;
    } else {
        trackResultDiv.innerHTML = "Ration Number not found.";
    }
});


// Handle the contact form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const contactName = document.getElementById("contactName").value;
    const contactEmail = document.getElementById("contactEmail").value;
    const contactIssue = document.getElementById("contactIssue").value;

    // Store the message in local storage or log it to console for demo purposes
    const contactData = {
        name: contactName,
        email: contactEmail,
        issue: contactIssue
    };

    console.log("Contact Form Submitted:", contactData);

    // Display a confirmation message
    const contactMessageDiv = document.getElementById("contactMessage");
    contactMessageDiv.innerHTML = "<p>Thank you for contacting us, we will get back to you shortly.</p>";

    // Optionally clear the form inputs
    document.getElementById("contactForm").reset();
});

// Call the displayRegisteredData function to load initial data
displayRegisteredData();
