function navigateTo(page) {
    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", () => {

    const themeBtn = document.getElementById("theme-toggle");
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeBtn.textContent = document.body.classList.contains("dark-mode")
            ? "Light Mode ☀️"
            : "Dark Mode 🌙";
    });

    const editJobBtn = document.getElementById("edit-job-btn");
    const jobTitle = document.getElementById("job-title");
    editJobBtn.addEventListener("click", () => {
        const newTitle = prompt("Enter your new job title:");
        if (newTitle && newTitle.trim() !== "") {
            jobTitle.innerHTML = `<strong>${newTitle}</strong>`;
        }
    });

    const toggleSkillsBtn = document.getElementById("toggle-skills-btn");
    const skillsSection = document.getElementById("skills-section");
    toggleSkillsBtn.addEventListener("click", () => {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
            toggleSkillsBtn.textContent = "Hide";
        } else {
            skillsSection.style.display = "none";
            toggleSkillsBtn.textContent = "Show";
        }
    });

    const toggleEduBtn = document.getElementById("toggle-edu-btn");
    const eduSection = document.getElementById("edu-section");
    toggleEduBtn.addEventListener("click", () => {
        if (eduSection.style.display === "none") {
            eduSection.style.display = "block";
            toggleEduBtn.textContent = "Hide";
        } else {
            eduSection.style.display = "none";
            toggleEduBtn.textContent = "Show";
        }
    });

    const toggleExpBtn = document.getElementById("toggle-exp-btn");
    const expSection = document.getElementById("exp-section");
    toggleExpBtn.addEventListener("click", () => {
        if (expSection.style.display === "none") {
            expSection.style.display = "block";
            toggleExpBtn.textContent = "Hide";
        } else {
            expSection.style.display = "none";
            toggleExpBtn.textContent = "Show";
        }
    });

    const message = document.getElementById("message");
    const counter = document.getElementById("char-counter");
    const maxLength = 200;
    message.addEventListener("input", () => {
        const remaining = maxLength - message.value.length;
        counter.textContent = `${remaining} characters remaining`;
    });

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        if (name === "" || email === "") {
            e.preventDefault();
            alert("Please fill out both Name and Email before sending.");
        }
    });

    const dateElement = document.getElementById("today-date");
    if (dateElement) {
        const today = new Date();
        const options = { year: "numeric", month: "long", day: "numeric" };
        dateElement.textContent = `Today’s Date: ${today.toLocaleDateString(undefined, options)}`;
    }

    const quotes = [
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Dream big and dare to fail. – Norman Vaughan",
        "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill"
    ];
    const quoteBtn = document.getElementById("quote-btn");
    const quoteDisplay = document.getElementById("quote-display");
    quoteBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
    });

    const greetingEl = document.getElementById("time-greeting");
    if (greetingEl) {
        const now = new Date();
        const hour = now.getHours();
        let greeting = "Hello!";
        if (hour >= 5 && hour < 12) greeting = "Good morning!";
        else if (hour >= 12 && hour < 18) greeting = "Good afternoon!";
        else greeting = "Good evening!";
        greetingEl.textContent = greeting;
    }

});
