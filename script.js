document.addEventListener("DOMContentLoaded", function () {
  const continueBtn = document.querySelector('.continue-btn');
  
  continueBtn.addEventListener('click', function () {
    window.location.href = 'selection.html'; // Redirect to the selection page
  });
});
