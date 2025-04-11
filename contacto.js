
const form = document.getElementById('formcontact');
const responseParagraph = document.getElementById('responformu');

responseParagraph.style.display = 'none';

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name.length <3){
        alert("El nombre es demasiado corto")
        return;
    }

    if(phone.length < 11){
        alert("El número es demasiado corto")
        return;
    }

    if (!name || !email || !phone || !message) {
        alert('Por favor, complete todos los campos antes de enviar el formulario.');
        return;
    }
    responseParagraph.style.display = 'block';
    form.reset();
});
