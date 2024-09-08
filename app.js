// Get form elements
var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
var outputName = document.getElementById('outputName');
var outputEmail = document.getElementById('outputEmail');
var outputPhone = document.getElementById('outputPhone');
var outputEducation = document.getElementById('outputEducation');
var outputExperience = document.getElementById('outputExperience');
var outputSkills = document.getElementById('outputSkills');
var editButton = document.getElementById('editButton');
var isEditable = false; // To track whether editing is enabled
// Event listener for form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Fetch form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Display resume with form values
    outputName.textContent = name;
    outputEmail.textContent = email;
    outputPhone.textContent = phone;
    outputEducation.textContent = education;
    outputExperience.textContent = experience;
    outputSkills.textContent = skills;
    // Show resume section
    resumeOutput.style.display = 'block';
});
// Event listener for the "Edit" button
editButton.addEventListener('click', function () {
    isEditable = !isEditable; // Toggle the editable state
    // Set contentEditable based on the current state
    outputName.contentEditable = isEditable.toString();
    outputEmail.contentEditable = isEditable.toString();
    outputPhone.contentEditable = isEditable.toString();
    outputEducation.contentEditable = isEditable.toString();
    outputExperience.contentEditable = isEditable.toString();
    outputSkills.contentEditable = isEditable.toString();
    // Change button text based on the state
    editButton.textContent = isEditable ? 'Save' : 'Edit';
});
