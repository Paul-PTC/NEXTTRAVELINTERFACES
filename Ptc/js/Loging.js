function Loguear(e) {
    e.preventDefault(); 

    let user = document.getElementById("Usuario").value;
    let pass = document.getElementById("Contraseña").value;

    if (user === "" || pass === "") {
        alert("Por favor, complete todos los campos"); // Mensaje si los campos están vacíos
    } else if (user === "Moises" && pass === "1234") {
        document.getElementById("body").classList.add("fade-out"); // Redirige si las credenciales son correctas
        setTimeout(() => {
                    window.location.href = "inicio.html";
                }, 500);
    } else {
        alert("Sus datos son incorrectos"); // Mensaje si las credenciales no coinciden
    }
}


