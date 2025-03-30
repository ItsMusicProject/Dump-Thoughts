document.getElementById("male").addEventListener("click", function() {
  localStorage.setItem("selectedGender", "male");
  document.getElementById("continueBtn").disabled = false;
});

document.getElementById("female").addEventListener("click", function() {
  localStorage.setItem("selectedGender", "female");
  document.getElementById("continueBtn").disabled = false;
});

document.getElementById("continueBtn").addEventListener("click", function() {
  const gender = localStorage.getItem("selectedGender");
  if (gender) {
    window.location.href = "main-page.html";  // Redirect to the main note page
  }
});
