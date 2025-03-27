window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')){
        form.reset()
    }
}

// section
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((link) => {
                        link.classList.remove("active");
                        if (link.getAttribute("href").substring(1) === entry.target.id) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        },
        { threshold: 0.5 } 
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});

// sapaan

document.addEventListener("DOMContentLoaded", function () {
    const sapaButton = document.getElementById("sapaAku");
    const sapaText = document.querySelector(".sapaan");

    sapaButton.addEventListener("click", function (event) {
        event.preventDefault(); 

        const now = new Date();
        const hours = now.getHours();
        let sapaan = "";

        if (hours >= 6 && hours < 12) {
            sapaan = "Selamat Pagi! 🌞 Semangat menjalani hari!";
        } else if (hours >= 12 && hours < 18) {
            sapaan = "Selamat Siang! ☀️ Jangan lupa istirahat!";
        } else {
            sapaan = "Selamat Malam! 🌙 Istirahat yang cukup!";
        }

        sapaText.textContent = sapaan; 
        sapaText.classList.remove("show"); 
        void sapaText.offsetWidth; 
        sapaText.classList.add("show"); 

        setTimeout(() => {
            sapaText.classList.remove("show");
        }, 3000);
    });
});


// switch logo
document.addEventListener("DOMContentLoaded", function () {
    const logoPerjalanan = document.getElementById("logoPerjalanan");

    const logos = [
        "images/Logo Baku UNEJ 2020 Super High Res.png",
        "images/Logo BG Cerah.png",
        "images/LOGO MACO.png"
    ];

    let index = 0;

    setInterval(() => {
        logoPerjalanan.style.opacity = "0"; 
        setTimeout(() => {
            index = (index + 1) % logos.length; 
            logoPerjalanan.src = logos[index];
            logoPerjalanan.style.opacity = "1"; 
        }, 500);
    }, 3000);
});



