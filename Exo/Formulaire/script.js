//document.addEventListener('DOMContentLoaded', function () {
    let formulaire = document.querySelector('form');
    let usernameInput = document.querySelector('#username');
    let passwordInput = document.querySelector('#password');
    
    formulaire.addEventListener('submit', function (event) {
        let isValid = true;
        
        // Vérifie si le champ "Nom d'utilisateur" est vide
        if (usernameInput.value.trim() == '') {
            alert("Tu t'appeles comment ? Donne ton Nom d'utilisateur, non mais oh !.");
            isValid = false;
        }
        
        // Vérifie si le champ "Mot de passe" est vide
        if (passwordInput.value.trim() =='') {
            alert("T'as pas mis le  Mot de passe gros nul.");
            isValid = false;
        }

        // si un champ est vide on ne peut pas appuyer
        if (!isValid) {
            event.preventDefault();
        }
    });