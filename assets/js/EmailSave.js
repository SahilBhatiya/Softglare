const EmailControl = document.getElementById("Email");

const scriptURL = 'https://script.google.com/macros/s/AKfycbxjn-FPSg6sOkeAeJmoTnmQVfSSUMZleX9qXA0BdNSLWjeCBMhL/exec'

const form = document.getElementById('contact');
const btnForm = document.getElementById('submit-btn');
let MsgNumber = 0;

btnForm.addEventListener('click', e => {
    e.preventDefault()
    btnForm.value = "Please Wait";
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form),
        })
        .then(response => {
            btnForm.value = "Submit";
            EmailControl.value = "";
        })
        .catch(error => btnForm.value = "Error")
})