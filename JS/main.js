function cambiarMensaje() {
      document.getElementById("mensaje").textContent = "¡El mensaje ha cambiado con JavaScript!(Usando código externo)";
    }

const iframe = document.getElementById("miIframe");
const doc = iframe.contentDocument || iframe.contentWindow.document;

// Ejemplo: cambiar el texto de un párrafo dentro del iframe
doc.querySelector("p").textContent = "Texto modificado desde el padre";