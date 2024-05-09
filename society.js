// Handle form submission for adding a society
document.getElementById('addSocietyForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    const response = await fetch('/api/society', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObj)
    });

    if (response.ok) {
        alert('Society added successfully');
    } else {
        alert('Failed to add society');
    }
});

// Handle form submission for deleting a society
document.getElementById('deleteSocietyForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    const response = await fetch('/api/society', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObj)
    });

    if (response.ok) {
        alert('Society deleted successfully');
    } else {
        alert('Failed to delete society');
    }
});

// Handle form submission for updating a society
document.getElementById('updateSocietyForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    const response = await fetch('/api/society', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObj)
    });

    if (response.ok) {
        alert('Society updated successfully');
    } else {
        alert('Failed to update society');
    }
});

// Handle button click for viewing all societies
document.getElementById('viewAllSocietiesBtn').addEventListener('click', async () => {
    const response = await fetch('/api/society');
    const data = await response.json();

    // Display the data on the webpage (you can customize this according to your UI)
    const societyResult = document.getElementById('societyResult');
    societyResult.innerHTML = JSON.stringify(data);
});
