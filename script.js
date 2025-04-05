document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            sections.forEach(section => {
                section.style.display = (section.id === targetId) ? "block" : "none";
            });

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });
});
