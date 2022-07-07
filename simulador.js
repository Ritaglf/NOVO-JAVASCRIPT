const comCarencia = document.querySelector('#comCarencia');
const listasuspensa = document.querySelector('#listasuspensa');

comCarencia.addEventListener('change',function() {
    if (this.checked) {
        listasuspensa.removeAttribute('hidden');
        else {
            listasuspensa.setAttribute('hidden');
        }
    }
});
