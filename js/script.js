// GENERARE BIGLIETTO TRENO

// DATI NECCESSARI
// Prezzo biglietto 0.21 * km 
// Sconto del 20% ai <18
// Sconto del 40% ai >65

// SELEZIONE ELEMENTI 

const nameSurname = document.getElementById("user-name");
const km = document.getElementById("km");
const userAge = document.getElementById("user-age");
const form = document.querySelector('form');
const btnCancel = document.getElementById("btn-cancel");
const oName = document.getElementById("name-o");
const oOffer = document.getElementById("offer-o");
const oPrice = document.getElementById("price-o");

//TABELLA DISPLAY

const viewTicket = document.getElementById("user-ticket");
viewTicket.classList.add("d-none");

//INDICAZIONI FORM

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameSurname.value.trim();
    const age = userAge.value;
    let price = parseFloat(km.value) * 0.21;
    let rate = "tariffa standard";

    // CHECK DI KM
    if (isNaN(km) || km <= 0){
        
    }

    viewTicket.classList.remove("d-none");
})

// SVUOTO IL FORM E IL TICKET 
btnCancel.addEventListener("click", () => {
    form.reset();
    viewTicket.classList.add("d-none")
})