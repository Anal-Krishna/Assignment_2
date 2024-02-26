document.addEventListener('DOMContentLoaded', function() {
    const studentId = '200552815';

    // Function to change the background color based on the user input or random number
    const setBackgroundColor = (value) => {
        let color = 'red'; // Default color
        if (value >= 0 && value <= 20) color = 'green';
        else if (value > 20 && value <= 40) color = 'blue';
        else if (value > 40 && value <= 60) color = 'orange';
        else if (value > 60 && value <= 80) color = 'purple';
        else if (value > 80 && value <= 100) color = 'yellow';
        document.body.style.backgroundColor = color;
    };

    // Function to change bg color from user input and add student id
    const changeCustomColor = () => {
        const numberInput = document.getElementById('customNumber').value;
        setBackgroundColor(numberInput);
        document.getElementById('myStudentId').textContent = studentId;
    };

    // Function to change bg color from random no.
    const changeRandomColor = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        setBackgroundColor(randomNumber);
    };

    // Function to generate options for select list
    const addList = () => {
        const imageSelect = document.getElementById('imageSelect');
        if (imageSelect.length > 1) return; // Prevent adding duplicates
        const images = ['img1.jpg', 'img2.jpg', 'img3.jpg']; // Replace with your actual images
        images.forEach((image) => {
            const option = document.createElement('option');
            option.value = image;
            option.textContent = image;
            imageSelect.appendChild(option);
        });
    };

    // Function to change image
    const changeImage = () => {
        const selectedImage = document.getElementById('imageSelect').value;
        document.getElementById('imageDisplay').src = 'img/' + selectedImage;
    };

    // Event listeners
    document.getElementById('custColorBtn').addEventListener('click', changeCustomColor);
    document.getElementById('randColorBtn').addEventListener('click', changeRandomColor);
    document.getElementById('imageSelect').addEventListener('change', changeImage);

    // Initialize the select list on load
    addList();
});