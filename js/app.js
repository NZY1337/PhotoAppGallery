

const registerForm = document.querySelector('#signUpForm')
const loginForm = document.querySelector('#registerForm');



// animation for navBar
function animationToggleButton() {
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

}

animationToggleButton();


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
    const signUpName = document.querySelector('#signUpName');
    const signUpEmail = document.querySelector('#signUpEmail');
    const signUpPass = document.querySelector('#signUpPassword');
    const signUpPassRepeat = document.querySelector('#signUpPasswordRepeat'); 
    const smallSignUpPassRepeat = document.querySelector('#smallSignUpPassRepeat');
    const checkbox = document.querySelector('signUpCheck');
    
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
    
    if (signUpPassRepeat.value !== signUpPass.value) {
        smallSignUpPassRepeat.innerHTML = 'password did not matched';
       
        signUpPassRepeat.classList.add('border');

        if (signUpPassRepeat.value == '') {
            smallSignUpPassRepeat.innerHTML = 'password null' 
        }
        return false;
    }
    
    return true;
   
}
























































