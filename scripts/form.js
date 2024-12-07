// Product array
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate the select element
function populateProductOptions() {
    const productSelect = document.getElementById("product-select");

    // Loop through the array and create options
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Set the value as the product ID
        option.textContent = `${product.name} (Rating: ${product.averagerating})`; // Display name and rating
        productSelect.appendChild(option);
    });
}

// Run the function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", populateProductOptions);