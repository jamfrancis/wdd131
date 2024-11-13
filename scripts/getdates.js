const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const footerYear = document.getElementById("currentyear");
    if (footerYear) footerYear.textContent = `© ${currentYear}`;

    const lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) lastModifiedParagraph.textContent = `Last modified: ${lastModified}`;
});