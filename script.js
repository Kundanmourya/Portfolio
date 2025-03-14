document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect
    const words = [
        "Data Scientist",
        "Machine Learning Engineer",
        "Web Developer",
        "AI Enthusiast"
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 1000;

    function typeEffect() {
        const typingText = document.getElementById("typing-text");

        if (!isDeleting && charIndex <= words[wordIndex].length) {
            typingText.innerHTML = words[wordIndex].substring(0, charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else if (isDeleting && charIndex >= 0) {
            typingText.innerHTML = words[wordIndex].substring(0, charIndex);
            charIndex--;
            setTimeout(typeEffect, deleteSpeed);
        } else {
            isDeleting = !isDeleting;

            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }

            setTimeout(typeEffect, pauseTime);
        }
    }
    typeEffect();

    // Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Theme Toggle
    const themeBtn = document.createElement("button");
    themeBtn.textContent = "🌙 Dark Mode";
    themeBtn.style.cssText = "position: fixed; top: 10px; right: 10px; padding: 5px 15px; cursor: pointer; border: none; background: #fff; color: #000; border-radius: 5px;";
    document.body.appendChild(themeBtn);

    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            document.body.style.background = "#212529";
            document.body.style.color = "#ffffff";
            themeBtn.textContent = "☀️ Light Mode";
        } else {
            document.body.style.background = "#f8f9fa";
            document.body.style.color = "#212529";
            themeBtn.textContent = "🌙 Dark Mode";
        }
    });
});
