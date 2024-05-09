// Handle form submission for adding a student
document.getElementById('addStudentForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObj)
    });

    if (response.ok) {
        alert('Student added successfully');
    } else {
        alert('Failed to add student');
    }
});

// Handle form submission for deleting a student
document.getElementById('deleteStudentForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    const response = await fetch('/api/students', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObj)
    });

    if (response.ok) {
        alert('Student deleted successfully');
    } else {
        alert('Failed to delete student');
    }
});

// Handle form submission for updating a student
document.getElementById('updateStudentForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    const response = await fetch('/api/students', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObj)
    });

    if (response.ok) {
        alert('Student updated successfully');
    } else {
        alert('Failed to update student');
    }
});

// Handle button click for viewing all students
document.getElementById('viewAllStudentsBtn').addEventListener('click', async () => {
    const response = await fetch('/api/students');
    const data = await response.json();

    // Display the data on the webpage (you can customize this according to your UI)
    const studentsResult = document.getElementById('studentsResult');
    studentsResult.innerHTML = JSON.stringify(data);
});
