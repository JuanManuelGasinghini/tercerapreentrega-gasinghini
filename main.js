document.addEventListener("DOMContentLoaded", function() {
    const signUp = document.getElementById("signUp");
    const signIn = document.getElementById("signIn");
    const nameInput = document.getElementById("nameInput");
    const title = document.getElementById("title");

    signIn.addEventListener("click", function() {
        nameInput.style.maxHeight = "0";
        title.innerHTML = "Login";
        signUp.classList.add("disable");
        signIn.classList.remove("disable");
    });

    signUp.addEventListener("click", function() {
        nameInput.style.maxHeight = "60px";
        title.innerHTML = "Registro";
        signUp.classList.remove("disable");
        signIn.classList.add("disable");

        const name = nameInput.value.trim(); 
        if (name !== "") {
            localStorage.setItem("user_name", name);
        }
    });

    const storedName = localStorage.getItem("user_name");
    if (storedName) {
        nameInput.value = storedName;
    }
});

