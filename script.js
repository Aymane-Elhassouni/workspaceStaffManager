let zoneTargeted = "";
let zones = document.querySelectorAll(".zones");

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
  if (inputNom.value == "") {
    inputNomError.innerHTML = "input is empty";
    inputNomError.style.color = "red";
  } else if (/[a-zA-Z]/.test(inputNom.value) == true) {
    inputNomError.innerHTML = "input is valide";
    inputNomError.style.color = "green";
  } else if (/[a-zA-Z]/.test(inputNom.value) == false) {
    inputNomError.innerHTML = "input is not valide";
    inputNomError.style.color = "red";
  }
});

inputRole.addEventListener("blur", (event) => {
  if (inputRole.value == "") {
    inputRoleError.innerHTML = "input is empty";
    inputRoleError.style.color = "red";
  } else if (/[a-zA-Z]/.test(inputRole.value) == true) {
    inputRoleError.innerHTML = "input is valide";
    inputRoleError.style.color = "green";
  } else if (/[a-zA-Z]/.test(inputRole.value) == false) {
    inputRoleError.innerHTML = "input is not valide";
    inputRoleError.style.color = "red";
  }
});

inputEmail.addEventListener("blur", (event) => {
  const email = event.target.value.toLowerCase();
  if (inputEmail.value == "") {
    inputEmailError.innerHTML = "input is empty";
    inputEmailError.style.color = "red";
  } else if (
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputEmail.value) ==
    true
  ) {
    inputEmailError.innerHTML = "input is valide";
    inputEmailError.style.color = "green";
  } else if (
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputEmail.value) ==
    false
  ) {
    inputEmailError.innerHTML = "input is not valide";
    inputEmailError.style.color = "red";
  }
});

inputTel.addEventListener("blur", (event) => {
  if (inputTel.value == "") {
    inputTelError.innerHTML = "input is empty";
    inputTelError.style.color = "red";
  } else if (/^\+?[\d\s\-()]{6,20}$/.test(inputTel.value) == true) {
    inputTelError.innerHTML = "input is valide";
    inputTelError.style.color = "green";
  } else if (/^\+?[\d\s\-()]{6,20}$/.test(inputTel.value) == false) {
    inputTelError.innerHTML = "input is not valide";
    inputTelError.style.color = "red";
  }
});

inputExper.addEventListener("blur", (event) => {
  if (inputExper.value == "") {
    inputExperError.innerHTML = "input is empty";
    inputExperError.style.color = "red";
  } else if (/[a-zA-Z]/.test(inputExper.value) == true) {
    inputExperError.innerHTML = "input is valide";
    inputExperError.style.color = "green";
  } else if (/[a-zA-Z]/.test(inputExper.value) == false) {
    inputExperError.innerHTML = "input is not valide";
    inputExperError.style.color = "red";
  }
});

let employe = [];

/* form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche la soumission par défaut du formulaire

  // Créez un objet avec les valeurs des champs du formulaire
  

  employe.push(newObject);

  console.log(employe);
}); */

function ajouterEmploye() {
  const newEmploye = {
    nom: inputNom.value,
    role: inputRole.value,
    email: inputEmail.value,
    telephone: inputTel.value,
    experience: inputExper.value,
  };
  if (
    inputNomError.innerText == "input is valide" &&
    inputRoleError.innerText == "input is valide" &&
    inputEmailError.innerText == "input is valide" &&
    inputTelError.innerText == "input is valide" &&
    inputExperError.innerText == "input is valide"
  ) {
    employe.push(newEmploye);
  }
  document.querySelectorAll('input[data-unique="true"]').forEach((input) => {
    input.addEventListener("blur", (event) => {
      const email = event.target.value.toLowerCase();
      if (!newEmploye.email.includes(email)) {
      } else {
        inputEmailError.innerHTML = "This email address is already in use.";
        inputEmailError.style.color = "red";
        event.target.value = "";
      }
    });
  });
  /* document.getElementById("card").innerHTML += `
        <div
          class="bg-white p-5 shadow-lg inset-shadow-sm hover:shadow-xl hover:inset-shadow-5xs mt-5 rounded-lg"
        >
          <img
            class="place-self-center border rounded-lg"
            src="https://intranet.youcode.ma/storage/users/profile/thumbnail/1536-1760996213.png"
            alt="https://intranet.youcode.ma/storage/users/profile/thumbnail/1536-1760996213.png"
          />
          <div class="mt-3">${inputNom.value}</div>
          <div class="mt-3">${inputRole.value}</div>
          <button
            type="button"
            class="text-white text-sm bg-blue-400 rounded-lg p-2 w-30 mt-3 place-self-center"
          >
            Edit
          </button>
        </div>` */
}
const experiences = `<label for="" class="mt-2">Expériences professionnelles</label>
                <input
                  id="inputExperD"
                  type="text"
                  class="border p-1 rounded-lg"
                  placeholder="Entrez les Expériences"
                />
                <span id="inputExperDError" class="text-red-500"></span>`;

document.getElementById("epxer").addEventListener("click", (event) => {
  document.getElementById("dimanique").innerHTML += experiences;
});

document.getElementById("btn").addEventListener("click", (event) => {
  /* event.preventDefault() */
  if (
    inputNomError.innerText == "input is empty" ||
    inputNomError.innerText == "input is not valide" ||
    inputNom.value == "" ||
    inputRoleError.innerText == "input is empty" ||
    inputRoleError.innerText == "input is not valide" ||
    inputRole.value == "" ||
    inputEmailError.innerText == "input is empty" ||
    inputEmailError.innerText == "input is not valide" ||
    inputEmail.value == "" ||
    inputTelError.innerText == "input is empty" ||
    inputTelError.innerText == "input is not valide" ||
    inputTel.value == "" ||
    inputExperError.innerText == "input is empty" ||
    inputExperError.innerText == "input is not valide" ||
    inputExper.value == ""
  ) {
    alert("Name must be filled out");
    event.preventDefault();
  } else if (
  /* if(inputRoleError.innerText == "input is empty" ||inputRoleError.innerText == "input is not valide"){
        alert("Name must be filled out");
        event.preventDefault();
        console.log(false);
    } */
    inputNomError.innerText == "input is valide" &&
    inputRoleError.innerText == "input is valide" &&
    inputEmailError.innerText == "input is valide" &&
    inputTelError.innerText == "input is valide" &&
    inputExperError.innerText == "input is valide"
  ) {
    event.preventDefault();
    ajouterEmploye();
    afficherEmpoile();
    clearValue();
  }
});

function clearValue() {
  inputNom.value = "";
  inputRole.value = "";
  inputEmail.value = "";
  inputTel.value = "";
  inputExper.value = "";
}
function afficherEmpoile() {
  employe.forEach((Employe) => {
    cradPerson = `
        <div data-unique="${Employe.email}"
          class="bg-white p-5 shadow-lg inset-shadow-sm hover:shadow-xl hover:inset-shadow-5xs mt-5 rounded-lg" >
          <img
            class="place-self-center border rounded-lg"
            src="https://intranet.youcode.ma/storage/users/profile/thumbnail/1536-1760996213.png"
            alt="https://intranet.youcode.ma/storage/users/profile/thumbnail/1536-1760996213.png"/>
          <div class="mt-3">${Employe.nom}</div>
          <div class="mt-3">${Employe.role}</div>
          <button
            type="button"
            class="text-white text-sm bg-blue-400 rounded-lg p-2 w-30 mt-3 place-self-center">
            Edit
          </button>
        </div>`;
  });

  document.getElementById("card").insertAdjacentHTML("beforeend", cradPerson);
}

zones.forEach((zone) => {
  zone.addEventListener("click", (event) => {
    zoneTargeted = event.target.getAttribute("id");
    
    employe.forEach((Employe) => {
    cradZone = `
        <div data-unique="${Employe.email}"
          class="bg-white p-5 shadow-lg inset-shadow-sm hover:shadow-xl hover:inset-shadow-5xs mt-5 rounded-lg" >
          <img
            class="place-self-center border rounded-lg"
            src="https://intranet.youcode.ma/storage/users/profile/thumbnail/1536-1760996213.png"
            alt="https://intranet.youcode.ma/storage/users/profile/thumbnail/1536-1760996213.png"/>
          <div class="mt-3">${Employe.nom}</div>
          <div class="mt-3">${Employe.role}</div>
          <button
            type="button"
            class="text-white text-sm bg-blue-400 rounded-lg p-2 w-30 mt-3 place-self-center">
            Edit
          </button>
        </div>`;
  });

  document.getElementById("zoneCard").insertAdjacentHTML("beforeend", cradZone);
        console.log(employe);
        
  });
});


