const hambuger = document.querySelector(".hambuger");
const menu = document.querySelector(".navlinks");
 const links = document.querySelectorAll(".navlinks a");

hambuger.addEventListener("click", function(){
    if(menu.style.display === "flex"){
        menu.style.display = "none";
    }else{
        menu.style.display = "flex";
    }
    hambuger.classList.toggle("active");
});

links.forEach(link => {

    link.addEventListener("click", function(){

        if(window.innerWidth <= 834){

            menu.style.display = "none";
            hambuger.classList.remove("active");

        }

    });

});


// FORM ACTIVATION

const div = document.querySelector(".form")

const button = document.querySelector("#button");

button.addEventListener("click", function(e){
    e.preventDefault();

    const name =document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const project = document.querySelector("#project").value;
    const number = document.querySelector("#number").value;
    const message = document.querySelector("#message").value;
    const call = document.querySelector("#call").value;
    const location = document.querySelector("#location").value;
     if(name.trim() === "" || project.trim() === "" || number.trim()=== ""
    || message.trim()=== ""|| call.trim()=== "" || location.trim()===""){
        alert("Booking section is empty")
     }else{
        alert("sent successfully")
     }if(!email.trim().includes("@") || email.trim() === ""){
        alert("put a valid email")
     }
    

})

//scroll elements

const hideElement = document.querySelectorAll(".hidden");

window.addEventListener("scroll", function(){
    hideElement.forEach(function(el){
        
        const position = el.getBoundingClientRect().top;

        const screenPosition = window.innerHeight / 1.3;

        if(position < screenPosition){
            el.classList.add("show");
        }
    })
})





