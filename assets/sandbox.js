//inputs
const dayInp = document.getElementById("day");
const monthInp = document.getElementById("months");
const yearInp = document.getElementById("year");
console.log(dayInp,monthInp,yearInp);

//outputs
const dayOup = document.getElementById("DD");
const monthOup = document.getElementById("MM");
const yearOup = document.getElementById("YYYY");
console.log(dayOup,monthOup,yearOup);

//form element
const formEl = document.querySelector("form");
console.log(formEl);
//handling event
//formEl.addEventListener("submit", handleSubmit);

const date = new Date();

let day = date.getDate()
let month = date.getMonth()+1

const months = [31,28,31,30,31,30,31,31,30,31,30,31];
function validation(){
    const inputs = document.querySelectorAll('input');
    let validator = true;
    inputs.forEach((i)=>{
        const parent = i.parentElement;
        if(!i.value){
            i.style.borderColor = "red";
            parent.querySelector("small").innerText
        }
    })
}