const accordions = document.getElementsByClassName("Accordion");

for(let i=0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function(){
        console.log("HELLO")
        accordions[i].classList.toggle("Active");

        const accordion_text = accordions[i].nextElementSibling;

        if (accordion_text.style.display == "none"){
            accordion_text.style.display = "block";
        }else{
            accordion_text.style.display = "none";
        }
    });
}

