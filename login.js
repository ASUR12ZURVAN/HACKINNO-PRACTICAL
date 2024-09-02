console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
    let parent = e.target.parentNode.parentNode;

    // Capture input values
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    // Print input values to console
    console.log("Login Email:", email);
    console.log("Login Password:", password);

    Array.from(parent.classList).find((element) => {
        if(element !== "slide-up") {
            parent.classList.add('slide-up')
        } else {
            signupBtn.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
        }
    });
});

signupBtn.addEventListener('click', (e) => {
    let parent = e.target.parentNode;

    // Capture input values
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    // Print input values to console
    console.log("Signup Email:", email);
    console.log("Signup Password:", password);

    Array.from(parent.classList).find((element) => {
        if(element !== "slide-up") {
            parent.classList.add('slide-up')
        } else {
            loginBtn.parentNode.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
        }
    });
});
