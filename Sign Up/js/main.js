const signUpName = document.getElementById('signName');
const signUpEmail = document.getElementById('signEmail');
const signUpPassword = document.getElementById('signPassword');
let user = [];

if (localStorage.getItem('user') != null) {
    user = JSON.parse(localStorage.getItem('user'));
} else {
    user = [];
}

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const add = () => {
    let errorMessage = '';

    if (signUpName.value.trim() === '') {
        errorMessage += "Name is required. ";
    }

    if (signUpEmail.value.trim() === '') {
        errorMessage += "Email is required. ";
    } else if (!validateEmail(signUpEmail.value)) {
        errorMessage += "Invalid email address. ";
    }

    if (signUpPassword.value.trim() === '') {
        errorMessage += "Password is required. ";
    }

    if (errorMessage !== '') {
        document.getElementById('message').innerHTML = `<p class='text-center'>${errorMessage}</p>`;
    } else {
        const obj = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value
        };
        user.push(obj);
        location.href = '../../Login/index.html';
        localStorage.setItem('user', JSON.stringify(user));
    }
};
