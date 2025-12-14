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

    // APPLICO GLI SCONTI
    if (age === "underage"){
        price = price - (price * 20) / 100;
        rate = "Minor discount";
    } else if (age === "senior"){
        price = price - (price * 40) / 100;;
        rate = "Senior discount";
    }
    //RENDO VISIBILE IL BIGLIETTO
    viewTicket.classList.remove("d-none");

    //TABELLA OUTPUT
    oName.innerText = name;
    oOffer.innerText = rate;
    oPrice.innerText = `${price.toFixed(2)} €`;
})

// SVUOTO IL FORM E IL TICKET 
btnCancel.addEventListener("click", () => {
    form.reset();
    viewTicket.classList.add("d-none");
})