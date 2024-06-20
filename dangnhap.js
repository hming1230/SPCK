import { auth } from "./config.js";
import {  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"; 



const emailinput = document.querySelector('#name')
const passwordinput = document.querySelector('#password')
const btn = document.querySelector('.book-btn')
const dangkybtn = document.querySelector(".dangky")
/// chuyen doi Jason sang obj
// Import necessary functions from "./config"

const xulydangnhap = () => {
    const emailvalue = emailinput.value;
    const passwordvalue = passwordinput.value;

    signInWithEmailAndPassword(auth, emailvalue, passwordvalue)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...

        alert("Signed in successfully!")
        /// 
        widow.location.href = "./index.html"
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });


};

btn.addEventListener('click', xulydangnhap)


const back = (x) => {
  x.preventDefault(); // Prevent default action
  window.location.href = './dangky.html';
};

dangkybtn.addEventListener('click',
  back
)
