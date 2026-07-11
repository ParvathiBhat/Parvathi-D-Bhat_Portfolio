const skillCards = document.querySelectorAll(".skill-card");

window.addEventListener("scroll",()=>{

    skillCards.forEach(card=>{

        if(card.getBoundingClientRect().top < window.innerHeight-100){

            card.classList.add("show");

        }

    });

});