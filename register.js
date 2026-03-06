// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Function to update and display registered data
    function updateRegisteredData() {
        const registeredDataDiv = document.getElementById("registeredData");
        const storedData = JSON.parse(localStorage.getItem("registeredRationData")) || [];

        // Check if there are any registered data
        if (storedData.length === 0) {
            registeredDataDiv.innerHTML = "<p>No registered ration numbers found.</p>";
        } else {
            registeredDataDiv.innerHTML = "<h3>Registered Ration Numbers:</h3>";
            // Loop through stored data and display each entry without extra spaces
            storedData.forEach(function(item) {
                registeredDataDiv.innerHTML += `
                    <p><strong>Ration Number:</strong> ${item.rationNumber}</p>
                    <p><strong>Holder Name:</strong> ${item.holderName}</p>
                    <p><strong>Contact Number:</strong> ${item.contact}</p>
                    <p><strong>Address:</strong> ${item.address}</p>
                    <p><strong>Pincode:</strong> ${item.pincode}</p>
                    <hr style="margin: 5px 0;">
                `;
            });
        }
    }

    // Update registered data when the page loads
    updateRegisteredData();

    // Handle Ration Number Registration
    document.getElementById("rationForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Get Ration Number, Holder Name, Contact, Address, and Pincode values
        const rationNumber = document.getElementById("rationNumber").value;
        const holderName = document.getElementById("holderName").value;
        const contact = document.getElementById("contact").value;
        const address = document.getElementById("address").value;
        const pincode = document.getElementById("pincode").value;

        // Create a new data object
        const newRationData = {
            rationNumber: rationNumber,
            holderName: holderName,
            contact: contact,
            address: address,
            pincode: pincode
        };

        // Retrieve existing data from localStorage, or use an empty array if none exists
        const storedData = JSON.parse(localStorage.getItem("registeredRationData")) || [];

        // Add the new data to the array
        storedData.push(newRationData);

        // Save the updated array to localStorage
        localStorage.setItem("registeredRationData", JSON.stringify(storedData));

        // Clear the form fields
        document.getElementById("rationNumber").value = '';
        document.getElementById("holderName").value = '';
        document.getElementById("contact").value = '';
        document.getElementById("address").value = '';
        document.getElementById("pincode").value = '';

        // Optionally, display a message to the user
        alert("Ration Number Registered Successfully!");

        // Update the displayed data
        updateRegisteredData();
    });

    // Handle Delete All Registered Data
    document.getElementById("deleteAllButton").addEventListener("click", function() {
        // Clear all registered data from localStorage
        localStorage.removeItem("registeredRationData");

        // Optionally, alert the user
        alert("All registered data has been deleted.");

        // Update the displayed data
        updateRegisteredData();
    });
});
