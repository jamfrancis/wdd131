document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the current review count from localStorage, or initialize it to 0
    const reviewCountKey = "reviewCount";
    let reviewCount = parseInt(localStorage.getItem(reviewCountKey)) || 0;

    // Increment the review count
    reviewCount++;
    localStorage.setItem(reviewCountKey, reviewCount);

    // Update the count display
    document.getElementById("review-count").textContent = reviewCount;

    // Add functionality to the "Go Back to Form" button
    const backHomeButton = document.getElementById("back-home");
    backHomeButton.addEventListener("click", () => {
        window.location.href = "form.html"; // Redirect back to the form
    });
});