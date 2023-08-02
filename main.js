document.addEventListener("DOMContentLoaded", function() {
    let signUp = document.getElementById("signUp");
    let signIn = document.getElementById("signIn");
    let nameInput = document.getElementById("nameInput");
    let title = document.getElementById("title");
    
    signIn.onclick = function() {
        nameInput.style.maxHeight = "0";
        title.innerHTML = "Login";
        signUp.classList.add("disable");
        signIn.classList.remove("disable");
    }
    
    signUp.onclick = function() {
        nameInput.style.maxHeight = "60px";
        title.innerHTML = "Registro";
        signUp.classList.remove("disable");
        signIn.classList.add("disable");

        let name = nameInput.value.trim(); // Mover esta línea aquí
        if (name !== "") {
            localStorage.setItem("user_name", name);
        }
    }
    
    let storedName = localStorage.getItem("user_name");
    if (storedName) {
        nameInput.value = storedName;
    }
});

