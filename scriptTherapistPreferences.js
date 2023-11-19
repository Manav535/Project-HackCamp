
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
    distanceValue.innerHTML = distanceRange.value + " km";
    hourlyFeeValue.innerHTML = hourlyFeeRange.value + " $/hr";
})
