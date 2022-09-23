// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let outputEl = document.getElementById('output');

// Go Btn - Menu Listener
goBtnEl.addEventListener('click', goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'display-all') {
    displayContacts();
  } else if (selection === 'add') {
    addContact();
  } else if (selection === 'remove') {
    removeContact();
  } else if (selection === 'display-name') {
    displayByName();
  } else if (selection === 'display-country') {
    displayByCountry();
  }
}

let Contact = loadContact();

// MENU FUNCTIONS
function displayContacts() {
  console.log('Display Contacts');
  displayall()
}

function addContact() {
  console.log('Add Contact');

  let newName = (prompt("Name"));
  let newEmail = (prompt("Email"));
  let newNumber = (prompt("Phone"));
  let newCountry = (prompt("Country"));

  Contact.push(newContack(newName, newEmail, newNumber, newCountry))
  console.log(Contact);
  saveContact()
}

function removeContact() {
  console.log('Remove Contact');
}

function displayByName() {
  console.log('Display by Name');
}

function displayByCountry() {
  console.log('Display by Country');
}

function newContack(contactName, contactEmail, contactNumber, contactCountry) {
  return {
    name: contactName,
    email: contactEmail,
    number: contactNumber,
    country: contactCountry,
    delete: false
  };
}

function displayall() {
  let contactinfo = "";
  for (let i = 0; i < Contact.length; i++) {
    contactinfo += getinfo(Contact[i], i)
  }
  outputEl.innerHTML = contactinfo;
}

function getinfo(contact, i) {
  console.log(Contact[i])
  console.log(contact.name, i)
  return `
    <div class="contact">
    <b>${i}: ${contact.name}</b>
    <br>
    ${contact.email} 
    <br>
    ${contact.number}(${contact.country})
    </div>`
}

function saveContact() {
  localStorage.setItem("contact", JSON.stringify(Contact));
}

function loadContact() {
  let Contactinfo = localStorage.getItem("contact")
  return JSON.parse(Contactinfo);
}