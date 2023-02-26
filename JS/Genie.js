const accordions = document.getElementsByClassName("Accordion");
const sorted_numbers_text = document.getElementById("Sorted_numbers");
const prime_answer = document.getElementById("Prime_answer");
const ip_address_text = document.getElementById("Ip_address");
const even_ip = document.getElementById("Even_ip");
let ip_addr;

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
    let numbers = prompt("Please give me the 10 numbers separated by space");
    let numbers_string_array = numbers.split(" ");
    let numbers_array = makeArrayNumbers(numbers_string_array);
    let sorted_array =  mergeSortArray(numbers_array);
    printArrayInParagraph(sorted_numbers_text, sorted_array);
}

function printArrayInParagraph(temp_paragraph, temp_array){
    for( let i=0; i < temp_array.length; i++){
        temp_paragraph.textContent +=  temp_array[i] + " ";
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
    return numbers_array;
}

function isAgePrime(){
    const year_of_birth = document.getElementById("Year_of_birth").value;
    let Age = 2023 - year_of_birth;
    let is_prime = true;
    if (Age == 1){
        prime_answer.textContent = Age + " is not a prime number";
    }
    if (Age > 1){
        for(let i=2; i < Age; i++){
            if(Age % i == 0){
                is_prime = false;
                break;
            }
        }

        if(is_prime){
            prime_answer.textContent = Age + " is a prime number";
        }else{
            prime_answer.textContent = Age + " is not a prime number";
        }
    }
}

function gettingIP(){
    fetch("https://api.ipify.org").then(r => r.text()).then(ip => ip_addr = ip);
}
gettingIP();

function printIP(){
    ip_address_text.textContent += ip_addr;
    addEvenIpNumbers();
}

function addEvenIpNumbers(){
    let ip_addr_str = ip_addr.split(".");
    let ip_addr_numbers = makeArrayNumbers(ip_addr_str);
    let ip_addr_even_numbers = getEvenNumbers(ip_addr_numbers);
    let total_even = addNumbers(ip_addr_even_numbers);
    even_ip.textContent += total_even;
}

function getEvenNumbers(numbers_list){
    let even_numbers = [];
    for (let i=0; i<numbers_list.length; i++){
        if(numbers_list[i] % 2 == 0){
            even_numbers.push(numbers_list[i]);
        }
    }
    return even_numbers;
}

function addNumbers(numbers_list){
    let total = 0;
    for (let i=0; i<numbers_list.length; i++){
        total += numbers_list[i];
    }
    return total;
}
