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
formEl.addEventListener("submit", handleSubmit);

const date = new Date();

let day = date.getDate()
let month = date.getMonth()+1
year = date.getFullYear
           

const months = [31,28,31,30,31,30,31,31,30,31,30,31];
function validation(){
    const inputs = document.querySelectorAll('input');
    let validator = true;
    inputs.forEach((i)=>{
        const parent = i.parentElement;
        if(!i.value){
            i.style.borderColor = "red";
            parent.querySelector("small").innerText = "this field is required"
            validator = false
        } else if (monthInp.value > 12 || monthInp.value < 1  ){
            monthInp.style.borderColor = "red";
            monthInp.parentElement.querySelector("small").innerText = "must be a valid month."
            validator = false
        }else if (dayInp.value > 31 || dayInp.value < 1  ){
            dayInp.style.borderColor = "red";
            dayInp.parentElement.querySelector("small").innerText = "must be a valid day."
            validator = false
        } else {
            i.style.borderColor = "black";
            parent.querySelector("small").innerText = "";
            validator = true
        } 
    })
    return validator

}
function handleSubmit(){
   //e.preventDefault();
    if (validation()){
        if (dayInp.value > day){
            day = day + months[month-1];
            month = month - 1;
        }
        if (monthInp.value > month){
            month = month + 12;
           
        }

        const d = day - dayInp.value
        const m = month - monthInp.value
        const y = year - yearInp.value
        console.log(year)
        console.log(y)

        dayOup.innerHTML = d
        monthOup.innerHTML = m
        yearOup.innerHTML = y
    }
}


















