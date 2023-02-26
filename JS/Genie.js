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


function printSortedNumbers(){
    let numbers = prompt("Please give me the 5 numbers separated by space");
    let numbers_string_array = numbers.split(" ");
    console.log(numbers_string_array);
    let numbers_array = makeArrayNumbers(numbers_string_array);
    let sorted_array =  mergeSortArray(numbers_array);
    const sorted_numbers_text = document.getElementById("Sorted_numbers");
    for( let i=0; i < sorted_array.length; i++){
        sorted_numbers_text.textContent +=  sorted_array[i] + " ";
    }
}

function mergeArray(left, right){
    temp_array = [];
    while (left.length && right.length){
        if(left[0] < right[0]){
            temp_array.push(left.shift());
        }else{
            temp_array.push(right.shift());
        }
    }
    return [...temp_array, ...left, ...right];
}

function mergeSortArray(temp_array){
    if (temp_array.length <= 1){
        return temp_array;
    }

    let mid = Math.floor(temp_array.length/2);

    let left = mergeSortArray(temp_array.slice(0,mid));
    let right = mergeSortArray(temp_array.slice(mid));

    return mergeArray(left,right);
}

function makeArrayNumbers(string_array){
    let numbers_array = []; 
    for (let i=0; i < string_array.length; i++){
        numbers_array.push(Number(string_array[i]));
    }
    console.log(numbers_array);
    return numbers_array;
}