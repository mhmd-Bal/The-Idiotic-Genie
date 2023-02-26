const accordions = document.getElementsByClassName("Accordion");

for(let i=0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function(){
        
        accordions[i].classList.toggle("Active");

        const accordion_text = accordions[i].nextElementSibling;

        if (accordion_text.style.maxHeight){
            accordion_text.style.maxHeight = null;
        }else{
            accordion_text.style.maxHeight = accordion_text.scrollHeight + "px";
        }
    });
}

