
/* =========================
   PALWORLD BREEDING CALCULATOR
   JavaScript
========================= */

// Sample Pal names
const pals = [
    "Anubis",
    "Chillet",
    "Foxparks",
    "Lamball",
    "Penking",
    "Pengullet",
    "Relaxaurus",
    "Tombat"
];

// HTML elements
const parent1 = document.getElementById("parent1");
const parent2 = document.getElementById("parent2");
const calculateButton = document.getElementById("calculate");
const result = document.getElementById("result");

// Add Pal names to dropdowns
function populateDropdown(selectElement) {

    pals.forEach(function (pal) {

        const option = document.createElement("option");

        option.value = pal;
        option.textContent = pal;

        selectElement.appendChild(option);

    });

}

// Fill both dropdowns
populateDropdown(parent1);
populateDropdown(parent2);

// Calculator button
calculateButton.addEventListener("click", function () {

    const pal1 = parent1.value;
    const pal2 = parent2.value;

    // Check if both Pals are selected
    if (pal1 === "" || pal2 === "") {

        result.textContent =
            "Please select both parent Pals first.";

        return;
    }

    // Check if same Pal is selected
    if (pal1 === pal2) {

        result.textContent =
            "Please select two different parent Pals.";

        return;
    }

    // Display selected parents
    result.textContent =
        "Parents selected: " + pal1 + " + " + pal2 +
        ". Verified offspring data is not connected yet.";

});
