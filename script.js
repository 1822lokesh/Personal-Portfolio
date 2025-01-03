// JavaScript for dynamic skill management

// Function to add a new skill
document.addEventListener("DOMContentLoaded", () => {
    const skillsList = document.getElementById("skills-list");
    const skillInput = document.getElementById("skill-input");

    window.addSkill = function () {
        const skill = skillInput.value.trim();
        if (skill) {
            const listItem = document.createElement("li");
            listItem.textContent = skill;

            // Add delete button to the skill
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-btn");
            deleteButton.onclick = () => listItem.remove();

            listItem.appendChild(deleteButton);
            skillsList.appendChild(listItem);

            // Clear input field
            skillInput.value = "";
        } else {
            alert("Please enter a skill.");
        }
    };
});
