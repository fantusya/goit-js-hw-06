const registerForm = document.querySelector('.login-form');
const submitButton = document.querySelector('form > button');

registerForm.addEventListener('submit', onregisterFormInput);

function onregisterFormInput(event) {
    event.preventDefault();

    const {
    elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    } else {
        const infoObj = {
            email: email.value,
            password: password.value
        }
        console.log(infoObj);
    }

    event.currentTarget.reset();
}