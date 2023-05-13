
document.addEventListener('DOMContentLoaded', function() {

    const ocultarBtn = document.getElementById('ocultarBtn');
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');

    function ocultarDiv() {
        container1.style.display = 'none';
        container2.style.display = 'none';
        ocultarBtn.style.display = 'none';
    }

    ocultarBtn.addEventListener('click', ocultarDiv);

});


document.addEventListener('DOMContentLoaded', function() {

    document.addEventListener('keydown', function(event) {

      if (event.keyCode === 32) {
        const ocultarBtn = document.getElementById('ocultarBtn');
        const container1 = document.getElementById('container1');
        const container2 = document.getElementById('container2');
        
        if(container1.style.display == "none"){
        container1.style.display = "block"
        ocultarBtn.style.display = "block"
        container2.style.display = "block"
        }
        else{
          container1.style.display = "none"
          ocultarBtn.style.display = "none"
          container2.style.display = "none"
        }
      }

    });
});
  