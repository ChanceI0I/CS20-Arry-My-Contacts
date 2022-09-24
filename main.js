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
  } else if (selection === 'remove-by-email') {
    removeByEmail();
  } else if (selection === 'remove-by-index') {
    removeByIndex();
  } else if (selection === 'display-name') {
    displayByName();
  } else if (selection === 'display-country') {
    displayByCountry();
  } else if (selection === 'Search-by-email') {
    displyEmail();
  }
}

//  GLOBAL VARIABLE
let Contact = loadContact();

// MENU FUNCTIONS
function displayContacts() {
  displayall();
}

function addContact() {
  console.log('Add Contact');

  let newName = (prompt("Name"));
  let newEmail = (prompt("Email"));

  if (findByEmail(newEmail) != -1) {
    newEmail = (prompt("Please enter a new Email"));
  }
    
  let newNumber = (prompt("Phone"));
  let newCountry = (prompt("Country"));

  Contact.push(newContack(newName, newEmail, newNumber, newCountry));
  saveContact();
  displayall()
}

function displayByName() {
  let requireName = prompt("Please enter the name");
  let display = "";
  for (let i = 0; i < Contact.length; i ++) {
    if (Contact[i].name.toLowerCase().includes(requireName.toLowerCase())) {
      display += getinfo(Contact[i], i);
    }
  }
  outputEl.innerHTML = display;
}

function displayByCountry() {
  let requireCpuntry = prompt("Please enter the country");
  let display = "";

  for (let i = 0; i < Contact.length; i ++) {
    if (Contact[i].country.toLowerCase() == requireCpuntry.toLowerCase()) {
      display += getinfo(Contact[i], i);
    }
  }

  outputEl.innerHTML = display;
}

function displayall() {
  let contactinfo = "";
  for (let i = 0; i < Contact.length; i++) {
    contactinfo += getinfo(Contact[i], i);

  }
  outputEl.innerHTML = contactinfo;
}

function removeByIndex() {
  let index = Number(prompt("Enter the index to delet"));
  Contact = Contact.slice(0, index).concat(Contact.slice(index+1, Contact.length));
  saveContact();
  displayall();
}

function removeByEmail() {
  let index = findByEmail(prompt("Enter the Email to delet"));
  if (index != -1) {
    Contact = Contact.slice(0, index).concat(Contact.slice(index+1, Contact.length));
  } else {
    alert("Email doesn't exist")
  }
  
  saveContact();
  displayall();
}


// HELPER FUNCTION

function newContack(contactName, contactEmail, contactNumber, contactCountry) {
  return {
    name: contactName,
    email: contactEmail,
    number: contactNumber,
    country: contactCountry,
  };
}

function getinfo(contact, i) {
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
  let Contactinfo = localStorage.getItem("contact");
  return JSON.parse(Contactinfo) ?? [];
}

function findByEmail(email){
  if (typeof(email) != "string"){email = "Invaild Input"} // Prevent "null" value
  let find = false;
  for (let i = 0; i < Contact.length; i ++) {
    if (Contact[i].email.toLowerCase()== email.toLowerCase()){
      find = true;
      return i;
    }
  }
  if (find == false) {
    return -1;
  }
}

function displyEmail() {
  let email = prompt("Please enter Email");
  let index = findByEmail(email);
  if (index != -1) {
    outputEl.innerHTML = getinfo(Contact[index], index);
  } else {
    alert("Email doesn't exist")
  }
  
}