 window.addEventListener("load", () => {
        const formContainer = document.getElementById("formContainer");
        formContainer.classList.add("show")
    })

    const nameInput = document.getElementById("nameInput");
    
    nameInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter"){
            startMensajeria();
        }
    })

    const phoneInput = document.getElementById("phoneContainer");

    phoneInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter"){
            submitPhone();
        }
    })

    function nextScreen(screenId) {
        // Oculta todas las pantallas
        const screens = document.querySelectorAll('[id^="screen"]');
        screens.forEach(screen => screen.style.display = 'none');

        // Muestra la pantalla seleccionada
        document.getElementById(screenId).style.display = 'block';
    }
    

    function startMensajeria() {
        document.getElementById('resultContainer').style.display = 'none';
        document.getElementById('formContainer').style.display = 'block'; 
        const name = document.getElementById("nameInput").value;
        const nameErrorMessage = document.getElementById("nameErrorMessage");
        
        // Verifica si el nombre tiene menos de 3 caracteres
        if (name.length < 3) {
            nameErrorMessage.classList.add("show"); // Mostrar mensaje de error
            return; // Detener la función
        } else {
            nameErrorMessage.classList.remove("show"); // Ocultar mensaje de error
        }

        document.getElementById("formContainer").classList.remove("show"); // Ocultar pantalla 1
        setTimeout(() => {
            document.getElementById("formContainer").style.display = "none"; // Ocultar después de la animación
            document.getElementById("phoneContainer").style.display = "flex"; // Mostrar pantalla 2
            document.getElementById("phoneContainer").classList.add("show"); // Añadir clase para la animación
        }, 500); // Esperar 500ms para que la animación de ocultar se complete
    }
 // Función para validar el número de teléfono (solo números)
function validatePhone() {
    const phoneInput = document.getElementById("phoneInput");
    const phone = phoneInput.value;
    // Elimina cualquier caracter no numérico
    phoneInput.value = phone.replace(/\D/g, '');
}
    function submitPhone() {
        const countryCode = document.getElementById("countryCode").value;
        const phone = document.getElementById("phoneInput").value;
        const errorMessage = document.getElementById("errorMessage");

        // Verifica si el indicativo está vacío
        if (!countryCode) {
            errorMessage.classList.add("show"); // Mostrar mensaje de error
            return; // Detener la función
        } else {
            errorMessage.classList.remove("show"); // Ocultar mensaje de error
        }

        if (phone) {
            document.getElementById("phoneContainer").classList.remove("show"); // Ocultar pantalla 2
            setTimeout(() => {
                document.getElementById("phoneContainer").style.display = "none"; // Ocultar después de la animación
                document.getElementById("thankYouMessage").style.display = "block"; // Mostrar mensaje de agradecimiento
                document.getElementById("thankYouMessage").classList.add("show"); // Añadir clase para la animación
            }, 500); // Esperar 500ms para que la animación de ocultar se complete
        } else {
            alert("Por favor, ingresa tu número de teléfono.");
        }
    }
