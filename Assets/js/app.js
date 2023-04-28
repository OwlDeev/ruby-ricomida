const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$(document).ready(function () {
  $("#enviarCorreo").click(function () {
    alert("Se acaba de enviar al correo");
  });
});

$(document).ready(function () {
  $("#añadirFavorito").click(function () {
    alert("Se ha agregado a favoritos");
  });
});

// Detecta el doble clic en los títulos "INGREDIENTES" y "PREPARACIÓN"
$("h3").on("dblclick", function () {
  // Verifica si el título es "INGREDIENTES" o "PREPARACIÓN"
  if ($(this).text() === "INGREDIENTES" || $(this).text() === "PREPARACIÓN") {
    // Modifica el color del texto del título a rojo
    $(this).addClass("rojo");
  }
});

$(document).ready(function() {
  $('h5').click(function() {
    $('.card-text').toggle();
  });
});