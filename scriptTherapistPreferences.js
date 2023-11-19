
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
    
