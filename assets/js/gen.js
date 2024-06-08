
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

//Ancla
function irArriba(pxPantalla){
  window.addEventListener('scroll', () => {
    var scroll = document.documentElement.scrollTop;
    var buttonUp = document.getElementById('buttonUp');
    if(scroll > pxPantalla){
      buttonUp.style.right = 20 + "px";
    } else{
      buttonUp.style.right = -100 + "%";
    }
  })
}
irArriba(2300); 