// Countdown
function updateCountdown() {
    let eventDate = new Date("April 12, 2025 10:00:00").getTime();
    let now = new Date().getTime();
    let timeLeft = eventDate - now;
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    if (timeLeft < 0) {
        clearInterval(interval);
        document.querySelector(".container").innerHTML = "<h5>Eventi ka filluar!</h5>";
    }
}
let interval = setInterval(updateCountdown, 1000);
// Form Validation and Submission
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();  

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        if (name === "" || email === "") {
            alert("All fields are required!");
            return;  
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email!");
            return; 
        }

        alert('Thank you for registering! We will contact you soon.');

        this.reset();
    });
});
