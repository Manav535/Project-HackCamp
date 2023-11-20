
var distanceRange = document.getElementById("distanceRange");
var distanceValue = document.getElementById("distanceValue");

  // Display the initial value of the slider
distanceValue.innerHTML = distanceRange.value + " km";

  // Update the current value of the slider as it's moved
distanceRange.oninput = function() {
  distanceValue.innerHTML = this.value + " km";
};

var hourlyFeeRange = document.getElementById("hourlyFeeRange");
var hourlyFeeValue = document.getElementById("hourlyFeeValue");

  // Display the initial value of the slider
hourlyFeeValue.innerHTML = hourlyFeeRange.value + " $/hr";

  // Update the current value of the slider as it's moved
hourlyFeeRange.oninput = function() {
  hourlyFeeValue.innerHTML = this.value + " $/hr";
};

document.getElementById("reset").addEventListener("click", () => {
    distanceValue.innerHTML = "50 km";
    hourlyFeeValue.innerHTML = "50 $/hr";
})

function toggleSpecify() {
    var dropdown = document.getElementById("visible-diversity");
    var specifyDiv = document.getElementById("diversity-specify");

    if (dropdown.value === "none" || dropdown.value === "other") {
      specifyDiv.style.display = "none";
      document.getElementById("diversity-specify").value = ""; // Clear input value if hidden
    } else {
      specifyDiv.style.display = "block";
    }
}

    
document.getElementById("reset").addEventListener("click", () => {
    var specifyDiv = document.getElementById("diversity-specify");
    specifyDiv.style.display = "none";
    document.getElementById("diversity-specify").value = ""; // Clear input value if hidden
})
    

// Sample therapist data (Replace this with your therapist data)
const therapists = [
    { "name": "Jane Doe", "age": 38, "gender": "Female" },
    { "name": "John Doe", "age": 45, "gender": "Male" },
    // Add more therapists as needed
];

document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Fetch the entered minimum age from the form
    var givenAge = document.getElementById("age").value.trim(); // Get age input

    // Fetch the selected gender from the form
    var selectedGender = document.getElementById("gender").value.trim().toLowerCase(); // Get gender input

    // Filter therapists based on the entered age and selected gender
    var filteredTherapists = filterTherapistsByAgeAndGender(therapists, givenAge, selectedGender);



    // Store filtered therapists in sessionStorage to access them on the next page
    sessionStorage.setItem('filteredTherapists', JSON.stringify(filteredTherapists));

    // Redirect to a new page to display the filtered therapists
    window.location.href = 'filteredTherapists.html';
});

// Function to filter therapists by age and gender
function filterTherapistsByAgeAndGender(therapists, givenAge, selectedGender) {
    return therapists.filter(therapist => {
        console.log(givenAge === '', selectedGender === '')
        const ageMatch = givenAge === '' || (therapist.age >= parseInt(givenAge) - 5 && therapist.age <= parseInt(givenAge) + 5);
        const genderMatch = selectedGender === "none" || therapist.gender.toLowerCase() === selectedGender;
        console.log(ageMatch, genderMatch)
        return ageMatch && genderMatch;
    });
}






