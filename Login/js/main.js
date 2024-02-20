let user = [];
user = JSON.parse(localStorage.getItem('user'));

const singInEmail = document.getElementById('signEmail');
const signInPassword = document.getElementById('signPassword');

document.getElementById('login').addEventListener('click', () => {
    if (singInEmail.value.trim() === '' || signInPassword.value.trim() === '') {
        document.getElementById('message').innerHTML = `<p class='text-center'>All inputs are required</p>`;
    } else {
        checkUser();
    }
});

const checkUser = () => {
    const foundUser = user.find((userData) => userData.email === singInEmail.value && userData.password === signInPassword.value);

    if (foundUser) {
        localStorage.setItem('userName', foundUser.name);
        location.href = '../../home/index.html';
    } else {
        document.getElementById('message').innerHTML = `<p class='text-center'>Invalid email or password</p>`;
    }
};