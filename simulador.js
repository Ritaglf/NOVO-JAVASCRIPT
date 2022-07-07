const comCarencia = document.querySelector('comCarencia');
const listaSuspensa = document.querySelector('listaSyspensa');

comCarencia.addEventListener('change', function() {
    if (this.cheked) {
        listaSuspensa.removeAttribute('hidden');
    } else {
        listaSuspensa.setAttribute('hidden', 'hidden');
    }
});

