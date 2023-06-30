const firebaseConfig = {
  //   copy your firebase config informations
    apiKey: "AIzaSyA96bGpXPxqIz5ovumpQmZzSDG3cuXB7Fg",
    authDomain: "contactform-3330b.firebaseapp.com",
    databaseURL: "https://contactform-3330b-default-rtdb.firebaseio.com",
    projectId: "contactform-3330b",
    storageBucket: "contactform-3330b.appspot.com",
    messagingSenderId: "840408007379",
    appId: "1:840408007379:web:01a5b87c50808db3c4ca26"
  
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
