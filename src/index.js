import { bromance } from './bro';
import uniqid from 'uniqid';
import Worker from './my.worker.js';
import { sign } from 'crypto';
import { PI, asd } from './indexDB';
const jwt  = require('jsonwebtoken');

const bro = bromance('love');

'use strict';

// tokenul trebuie sa se desfasoare in webWorker - toata logica

let savePass, 
encodedPassword;


const worker = new Worker();
let usersHolder = [];

// login form
const registerForm = document.querySelector('#signUpForm')
const loginForm = document.querySelector('#registerForm');
const btnLog = document.querySelector('#signUpBtn');
const signUpEmail = document.forms["signUpForm"]["signUpEmail"]; 
const signUpName = document.forms["signUpForm"]["signUpName"]; 
const CryptoJS = require("crypto-js");
let lol = true;


// require cryptoJs


// animation for navBar
(function (){
    const parentDivBubbles = document.querySelector('.navBar__open-buton');
    const firstSpan = parentDivBubbles.querySelector('span:first-child');
    const secondSpan = parentDivBubbles.querySelector('span:nth-child(2)');
    const thirdSpan = parentDivBubbles.querySelector('span:nth-child(3)');
    const fourthSpan = parentDivBubbles.querySelector('span:last-child');
    
    const childNodes = parentDivBubbles.childNodes;

    // take the reset values from the initial CSS statement;
    const rotateValues = {
        transition : 'all .5s',

        firstSpan : {
            top:0,
            right:'5px',
            transition: 'all 1s'
        },
  
        secondSpan : {
            top:0,
            right:'20px'
        },

        thirdSpan : {
            top: '15px',
            right: '5px'
        },

        fourthSpan : {
            top: '15px',
            right: '20px'
        }
    }
    
    // on mouse enter
    parentDivBubbles.addEventListener('mouseenter', (e) =>{
        const deg1 =  '0px';
        
        firstSpan.style.top = deg1;
        firstSpan.style.transition = rotateValues.transition;
        firstSpan.style.right = deg1; 

        secondSpan.style.top = deg1;
        secondSpan.style.right = deg1; 
        secondSpan.style.transition = rotateValues.transition;

        thirdSpan.style.top = deg1;
        thirdSpan.style.right = deg1; 
        thirdSpan.style.transition = rotateValues.transition;

        fourthSpan.style.top = deg1;
        fourthSpan.style.right = deg1; 
        fourthSpan.style.transition = rotateValues.transition;
    });
    
    // on mouse leave
    parentDivBubbles.addEventListener('mouseleave', () =>{
        firstSpan.style.top = rotateValues.firstSpan.top;
        firstSpan.style.right = rotateValues.firstSpan.right; 

        secondSpan.style.top = rotateValues.secondSpan.top;
        secondSpan.style.right = rotateValues.secondSpan.right; 

        thirdSpan.style.top = rotateValues.thirdSpan.top;
        thirdSpan.style.right = rotateValues.thirdSpan.right; 

        fourthSpan.style.top = rotateValues.fourthSpan.top;
        fourthSpan.style.right = rotateValues.fourthSpan.right; 
    });
}());


// function for changing forms
(function () {
    // form names
    const loginNameForm = document.querySelector('#login-title'); 
    const registerNameForm = document.querySelector('#signup-title');

    registerForm.style.animation = 'delayOpac1 1s linear forwards';
    loginForm.style.animation = 'delayOpac1 1s linear forwards';

    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    
    loginNameForm.addEventListener('click', () =>{
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    registerNameForm.addEventListener('click', () =>{
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';

        document.styleSheets[0].insertRule(`
           h2 {
               color:red;
           }
        `, 0);

    });
}());


// login function
function validateForm() {
    
    const signUpPass = document.forms["signUpForm"]["signUpPassword"]; 
    const signUpPassRepeat = document.forms["signUpForm"]["signUpPasswordRepeat"];  
    const smallSignUpPassRepeat = document.querySelector('#smallSignUpPassRepeat');
    
    if (signUpName.value == '') {
        signUpName.classList.add('border');
        return false;
    } else {
        signUpName.classList.remove('border');
    }
    
    if (signUpEmail.value == '') {
        signUpEmail.classList.add('border');
        return false;
    } else {
        signUpEmail.classList.remove('border');
    }

    if (signUpPass.value == '') {
        signUpPass.classList.add('border');
        return false;
    } else {
        signUpPass.classList.remove('border');
    }
    
    if (signUpPassRepeat.value !== signUpPass.value && lol) {
        smallSignUpPassRepeat.innerHTML = 'password did not matched';
        signUpPassRepeat.classList.add('border');
        if (signUpPassRepeat.value == '') {
            smallSignUpPassRepeat.innerHTML = 'password null' 
        }
        return false;
    }
    
 
    lol = false;

    // when submit call this function to store the user's datas
    saveUersData(signUpPassword);
    btnLog.removeAttribute('disabled');

    savePass = signUpPass.value;
    return true;
}
worker.postMessage(savePass);

// activate the form
btnLog.addEventListener('click', function(e){ 
    
    e.preventDefault();
   
   if(validateForm()){
    //    registerForm.submit();
   };
});
 

// save user's Data in the 'user' variable
const saveUersData = (password) => {
    const users = {
        userPass : password.value,
    }
    
    usersHolder.push(users);
    console.log(usersHolder);
    
    // call the payloaders function for the user's data, afer the inputs' fields have values
    encodedPassword = encodedBase64Data(users.userPass);
    console.log(encodedPassword);
}


// FUNCTION encode in base 64 
const encodedBase64Data = (data) => {
    let encodedData = Buffer.from(JSON.stringify(data)).toString('base64');
    encodedData = encodedData.replace(/=+$/, '');
    encodedData = encodedData.replace(/\+/g, '-');
    encodedData = encodedData.replace(/\//g, '_');
    
    return encodedData;
}

// display the worker's message that had been sent from the worker on UX 
worker.onmessage = e => {
    const h1 = document.querySelector('h1');
    h1.innerHTML = e.data[1]
}

const encode = (password) => {
    var encrypted = CryptoJS.AES.encrypt(password);
    console.log(encrypted);
}

// ///////////////////

