function cambiarTexto() {
    const loginBtn = document.getElementById("loginBtn");
    if (loginBtn.innerText === "Login") {
        loginBtn.innerText = "Logout";
    } else {
        loginBtn.innerText = "Login";
    }
}

function removeAddDefinition() {
    const addDefinitionBtn = document.getElementById("addDefinitionBtn");
    addDefinitionBtn.style.display = "none";
}

function showLikedMessage() {
    alert("Ninja was liked");
}
