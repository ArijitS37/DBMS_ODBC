// Handle form submission for adding an enrollment
document.getElementById('addEnrollmentForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    const response = await fetch('/api/enrollment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObj)
    });

    if (response.ok) {
        alert('Enrollment added successfully');
    } else {
        alert('Failed to add enrollment');
    }
});

// Handle form submission for deleting an enrollment
document.getElementById('deleteEnrollmentForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    const response = await fetch('/api/enrollment', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObj)
    });

    if (response.ok) {
        alert('Enrollment deleted successfully');
    } else {
        alert('Failed to delete enrollment');
    }
});

// Handle form submission for updating an enrollment
document.getElementById('updateEnrollmentForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    const response = await fetch('/api/enrollment', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObj)
    });

    if (response.ok) {
        alert('Enrollment updated successfully');
    } else {
        alert('Failed to update enrollment');
    }
});

// Handle button click for viewing all enrollments
document.getElementById('viewAllEnrollmentsBtn').addEventListener('click', async () => {
    const response = await fetch('/api/enrollment');
    const data = await response.json();

    // Display the data on the webpage (you can customize this according to your UI)
    const enrollmentResult = document.getElementById('enrollmentResult');
    enrollmentResult.innerHTML = JSON.stringify(data);
});
