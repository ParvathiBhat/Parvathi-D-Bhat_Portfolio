document.addEventListener("DOMContentLoaded", () => {

    const graphics = document.querySelector(".hero-graphics");

    if (!graphics) {
        console.log("hero-graphics not found");
        return;
    }

    document.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - 0.5) * 8;
        const y = (e.clientY / window.innerHeight - 0.5) * 8;

        graphics.style.transform =
            `rotateY(${x}deg) rotateX(${-y}deg)`;

    });

});