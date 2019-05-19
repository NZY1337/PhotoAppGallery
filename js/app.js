
const loginForm = document.querySelector('#signUpBtnForm');


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

// login function
loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();
});

