document.addEventListener("DOMContentLoaded", function () {
    const accordionBtns = document.querySelectorAll(".accordion-btn");

    accordionBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const content = this.nextElementSibling;
            if (
                content.style.display === "block" ||
                content.style.display === ""
            ) {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
