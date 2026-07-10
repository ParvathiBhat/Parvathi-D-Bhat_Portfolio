const timelineItems = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {

    timelineItems.forEach(item => {

        if(item.getBoundingClientRect().top < window.innerHeight - 100){

            item.classList.add("show");

        }

    });

});