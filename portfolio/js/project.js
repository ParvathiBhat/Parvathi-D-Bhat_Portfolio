const projects=document.querySelectorAll(".project");

window.addEventListener("scroll",()=>{

projects.forEach(project=>{

const top=project.getBoundingClientRect().top;

if(top<window.innerHeight-120){

project.classList.add("show");

}

});

});