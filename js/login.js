
//This is login field
document.getElementById('login-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passField = document.getElementById('user-password');
    const userPass = passField.value;
    console.log(userEmail, userPass);
    if (userEmail == 'farman.arefin@gmail.com' && userPass == 'itsSADMAN#@%603169') {
        window.location.href = 'banking-page.html'
    }
})
