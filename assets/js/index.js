const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
$(document).ready(function () {
  $("#enviar").click(function () {
    alert("El mensaje fue enviado correctamente...");
  });
});

$(".card-body").on("click", function () {
    $(".card-text").toggle("slow");
        });