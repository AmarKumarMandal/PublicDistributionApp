document.getElementById("trackButton").addEventListener("click", function() {
    const rationNumber = document.getElementById("trackRation").value;
    const registeredData = JSON.parse(localStorage.getItem("registeredRationData")) || [];
    const trackResultDiv = document.getElementById("trackResult");
    const deleteButton = document.getElementById("deleteButton");

    // Check if the entered ration number exists in the registered data
    const rationData = registeredData.find(data => data.rationNumber === rationNumber);

    if (rationData) {
        trackResultDiv.innerHTML = `
            <h3>Ration Number Found:</h3>
            <p><strong>Ration Number:</strong> ${rationData.rationNumber}</p>
            <p><strong>Holder Name:</strong> ${rationData.holderName}</p>
        `;
        deleteButton.style.display = "inline-block";  // Show the delete button
    } else {
        trackResultDiv.innerHTML = `<p>No record found for the entered ration number.</p>`;
        deleteButton.style.display = "none"; // Hide the delete button if no record found
    }

    deleteButton.addEventListener("click", function() {
        // Filter out the deleted ration number
        const updatedData = registeredData.filter(data => data.rationNumber !== rationNumber);

        // Save the updated data back to localStorage
        localStorage.setItem("registeredRationData", JSON.stringify(updatedData));

        // Update the UI to show the record has been deleted
        trackResultDiv.innerHTML = `<p>Ration Number ${rationNumber} has been deleted.</p>`;
        deleteButton.style.display = "none"; // Hide delete button after deletion
    });
});
