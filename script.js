

// function formValidation(){

// }

let inputNom = document.getElementById("inputNom");
let inputNomError = document.getElementById("inputNomError");
let inputRole = document.getElementById("inputRole");
let inputRoleError = document.getElementById("inputRoleError");
let inputEmail = document.getElementById("inputEmail");
let inputEmailError = document.getElementById("inputEmailError");
let inputTel = document.getElementById("inputTel");
let inputTelError = document.getElementById("inputTelError");
let inputExper = document.getElementById("inputExper");
let inputExperError = document.getElementById("inputExperError");

inputNom.addEventListener("blur", (event) => {
    if(inputNom.value == ""){
        inputNomError.innerHTML = "input is empty";
        inputNomError.style.color = "red";
    }
    else if((/[a-zA-Z]/).test(inputNom.value) == true){
        inputNomError.innerHTML = "input is valide";
        inputNomError.style.color = "green";
    }
    else if((/[a-zA-Z]/).test(inputNom.value) == false){
        inputNomError.innerHTML = "input is not valide";
        inputNomError.style.color = "red";
    }
    
})

inputRole.addEventListener("blur",(event) =>{
    if(inputRole.value == ""){
        inputRoleError.innerHTML = "input is empty";
        inputRoleError.style.color = "red";
    }
    else if((/[a-zA-Z]/).test(inputRole.value) == true){
        inputRoleError.innerHTML = "input is valide";
        inputRoleError.style.color = "green";
    }
    else if((/[a-zA-Z]/).test(inputRole.value) == false){
        inputRoleError.innerHTML = "input is not valide";
        inputRoleError.style.color = "red";
    }
})

inputEmail.addEventListener("blur",(event) =>{
    if(inputEmail.value == ""){
        inputEmailError.innerHTML = "input is empty";
        inputEmailError.style.color = "red";
    }
    else if((/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(inputEmail.value) == true){
        inputEmailError.innerHTML = "input is valide";
        inputEmailError.style.color = "green";
    }
    else if((/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(inputEmail.value) == false){
        inputEmailError.innerHTML = "input is not valide";
        inputEmailError.style.color = "red";
    }
})

inputTel.addEventListener("blur",(event) =>{
    if(inputTel.value == ""){
        inputTelError.innerHTML = "input is empty";
        inputTelError.style.color = "red";
    }
    else if((/^\+?[\d\s\-()]{6,20}$/).test(inputTel.value) == true){
        inputTelError.innerHTML = "input is valide";
        inputTelError.style.color = "green";
    }
    else if((/^\+?[\d\s\-()]{6,20}$/).test(inputTel.value) == false){
        inputTelError.innerHTML = "input is not valide";
        inputTelError.style.color = "red";
    }
})

inputExper.addEventListener("blur", (event) => {
    if(inputExper.value == ""){
        inputExperError.innerHTML = "input is empty";
        inputExperError.style.color = "red";
    }
    else if((/[a-zA-Z]/).test(inputExper.value) == true){
        inputExperError.innerHTML = "input is valide";
        inputExperError.style.color = "green";
    }
    else if((/[a-zA-Z]/).test(inputExper.value) == false){
        inputExperError.innerHTML = "input is not valide";
        inputExperError.style.color = "red";
    }
    
})

function submitForm(event){

}
const experiences = `<label for="" class="mt-2">Expériences professionnelles</label>
                <input
                  type="text"
                  class="border p-1 rounded-lg"
                  placeholder="Entrez les Expériences"
                />`

                
document.getElementById("btn").addEventListener("click",(event) => {
    /* event.preventDefault() */
    console.log(inputNom.value);
    if((inputNomError.innerText == "input is empty" ||inputNomError.innerText == "input is not valide" ||inputNom.value == "") ||
     (inputRoleError.innerText == "input is empty" ||inputRoleError.innerText == "input is not valide" ||inputRole.value == "") ||
    (inputEmailError.innerText == "input is empty" ||inputEmailError.innerText == "input is not valide" ||inputEmail.value == "") ||
    (inputTelError.innerText == "input is empty" ||inputTelError.innerText == "input is not valide" ||inputTel.value == "") ||
    (inputExperError.innerText == "input is empty" ||inputExperError.innerText == "input is not valide" ||inputExper.value == "")){
        alert("Name must be filled out");
        event.preventDefault();
        console.log(false);
    }
    if(inputRoleError.innerText == "input is empty" ||inputRoleError.innerText == "input is not valide"){
        alert("Name must be filled out");
        event.preventDefault();
        console.log(false);
    }
    else if(inputNomError.innerText == "input is valide"){
        console.log(true);
        
    }
    
    
})