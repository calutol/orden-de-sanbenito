function incrementar() {
    const input = document.getElementById('numeroModal');
    input.stepUp();
  }

  function decrementar() {
    const input = document.getElementById('numeroModal');
    input.stepDown();
  }
// Prueba
$(document).ready(function() {
    $('#inlineCheckbox1').change(function() {
        $('#inputOculto').toggle(); // Alternar la visibilidad del div
    });
});