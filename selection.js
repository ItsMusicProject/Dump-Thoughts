// Select gender boxes and button
const maleBox = document.getElementById("male");
const femaleBox = document.getElementById("female");
const continueBtn = document.getElementById("continueBtn");

// Add event listeners for gender selection
maleBox.addEventListener("click", function() {
  localStorage.setItem("selectedGender", "male");
  maleBox.classList.add("selected");
  femaleBox.classList.remove("selected");
  continueBtn.disabled = false;
});

femaleBox.addEventListener("click", function() {
  localStorage.setItem("selectedGender", "female");
  femaleBox.classList.add("selected");
  maleBox.classList.remove("selected");
  continueBtn.disabled = false;
});

// Continue button functionality
continueBtn.addEventListener("click", function() {
  const gender = localStorage.getItem("selectedGender");
  if (gender) {
    window.location.href = "main-page.html";  // Redirect to the main note page
  }
});
