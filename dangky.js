import { auth } from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"; // Corrected import

const emailInput = document.querySelector('#name');
const passwordInput = document.querySelector('#password');
const submit = document.querySelector('.submit'); // Corrected typo
const login = document.querySelector('.book-btn');





const xulydangky = (e) => {
    e.preventDefault();
    
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    console.log(emailValue, passwordValue)

    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
          
            alert("Signed up successfully!");
            // Redirect to another page after successful sign-in
            window.location.href = './dangnhap2.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error signing in:", errorCode, errorMessage);
            alert("Error signing in: " + errorMessage);
        });
};

submit.addEventListener('click',xulydangky)

 const back = (x) => {
    x.preventDefault(); // Prevent default action
    window.location.href = './dangnhap2.html';
};
 
login.addEventListener('click',
    back
)