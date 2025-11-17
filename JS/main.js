function cambiarMensaje() {
  const el = document.getElementById("mensaje-texto");
  if (!el) return;
  
  // Alterna entre dos mensajes
  if (el.classList.contains('recuadro')) {
    el.textContent = "Este es el mensaje original.";
    el.classList.remove('recuadro');
  } else {
    el.textContent = "¡El mensaje ha cambiado con JavaScript!(Usando código externo)";
    el.classList.add('recuadro');
  }
}
