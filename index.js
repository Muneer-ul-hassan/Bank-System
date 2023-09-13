// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", () => {
    // Get references to various elements in the HTML document
    const depositForm = document.getElementById("depositForm");
    const withdrawForm = document.getElementById("withdrawForm");
    const balanceSection = document.getElementById("balance");
    const accountHolderName = document.getElementById("accountHolderName");
    const accountType = document.getElementById("accountType");
    const balanceAmount = document.getElementById("balanceAmount");

    // Add an event listener for the deposit form submission
    depositForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // Get the deposit amount from the form input
        const depositAmount = parseFloat(document.getElementById("depositAmount").value);
        if (!isNaN(depositAmount) && depositAmount > 0) {
            // Deposit logic should be implemented here
            // Update the balanceAmount element accordingly
        } else {
            alert("Please enter a valid deposit amount.");
        }
    });

    // Add an event listener for the withdraw form submission
    withdrawForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // Get the withdrawal amount from the form input
        const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
        if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
            // Withdrawal logic should be implemented here
            // Update the balanceAmount element accordingly
        } else {
            alert("Please enter a valid withdrawal amount.");
        }
    });

    // Function to show the balance section
    const showBalanceSection = () => {
        balanceSection.style.display = "block";
        // Update account holder name and type (replace with actual data)
        accountHolderName.textContent = "Muneer hassan";
        accountType.textContent = "Savings";
        // Update balanceAmount accordingly (you need to implement this)
    };

    // Add event listeners for navigation links
    const navLinks = document.querySelectorAll(".nav-links li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            // Get the section ID from the link's href attribute
            const sectionId = link.getAttribute("href").substring(1);
            const sections = document.querySelectorAll("section");
            // Hide all sections
            sections.forEach((section) => {
                section.style.display = "none";
            });
            if (sectionId === "balance") {
                // If the link is for the balance section, call the showBalanceSection function
                showBalanceSection();
            } else {
                // Otherwise, display the corresponding section
                document.getElementById(sectionId).style.display = "block";
            }
        });
    });
});
