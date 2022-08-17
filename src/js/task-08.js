const registerForm = document.querySelector('.login-form');
const submitButton = document.querySelector('form > button');

registerForm.addEventListener('submit', onregisterFormInput);

function onregisterFormInput(event) {
    event.preventDefault();

    const {
    elements: { email, password }
    } = event.currentTarget;

    const formdata = new FormData(event.currentTarget);
    
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    } else {
        formdata.forEach((value, name) => {
        console.log(`${name} of the field: ${value}`);
    })}

    event.currentTarget.reset();
}