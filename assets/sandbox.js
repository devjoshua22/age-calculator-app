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