document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("survey-form");
    const submitButton = document.getElementById("submit-button");
    const resetButton = document.getElementById("reset-button");
    const popup = document.getElementById("popup");

    submitButton.addEventListener("click", function() {
        if (form.checkValidity()) {
            displayPopup();
        } else {
            alert("Please fill out all required fields.");
        }
    });

    resetButton.addEventListener("click", function() {
        form.reset();
    });

    function displayPopup() {
        const popupContent = document.getElementById("popup-content");

        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const dateOfBirth = document.getElementById("date-of-birth").value;
        const country = document.getElementById("country").value;
        const genderInputs = document.querySelectorAll('input[name="gender"]:checked');
        const gender = Array.from(genderInputs).map(input => {
        const label = document.querySelector(`label[for="${input.id}"]`);
        return label.textContent;
    }).join(", ");
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobileNumber = document.getElementById("mobile-number").value;

        document.getElementById("popup-first-name").textContent = firstName;
        document.getElementById("popup-last-name").textContent = lastName;
        document.getElementById("popup-date-of-birth").textContent = dateOfBirth;
        document.getElementById("popup-country").textContent = country;
        document.getElementById("popup-gender").textContent = gender;
        document.getElementById("popup-profession").textContent = profession;
        document.getElementById("popup-email").textContent = email;
        document.getElementById("popup-mobile-number").textContent = mobileNumber;

        popup.style.visibility = "visible";
        popup.style.opacity = 1;

        popup.addEventListener("click", function(event) {
            if (event.target === popup) {
                hidePopup();
            }
        });
    }

    function hidePopup() {
        popup.style.visibility = "hidden";
        popup.style.opacity = 0;
    }
});