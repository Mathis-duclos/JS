let formulaire = document.querySelector('form');
let usernameInput = document.querySelector('#username');
let passwordInput = document.querySelector('#password');
let passwordConfirmInput = document.querySelector('#password2');

formulaire.addEventListener('submit', function (event) {
    let isValid = true;
    let messages = [];
    
    // Vérifie si le champ "Nom d'utilisateur" est vide
    if (usernameInput.value.trim() == '') {
        alert("ET ton nom ?");
        isValid = false;
    }
    
    // Vérifie si le champ "Mot de passe" est vide
    if (passwordInput.value.trim() == '') {
        alert("Écris un mot de passe.");
        isValid = false;
    }
    
    // Vérifie si les mots de passe correspondent
    if (passwordInput.value.trim() !== passwordConfirmInput.value.trim()) {
        alert("Les deux mots de passe ne sont pas.");
        isValid = false;
    }

    // Affiche les messages d'erreur si nécessaire
    if (!isValid) {
        event.preventDefault();
    }
});
