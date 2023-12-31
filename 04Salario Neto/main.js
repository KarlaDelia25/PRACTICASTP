function calcularSalarioNeto(){
  let puesto=parseInt(document.getElementById('puesto').value);
  let horas=parseInt(document.getElementById('horas').value);
  let anios=parseInt(document.getElementById('anios').value);
  let sueldoHora=0;
  switch(puesto){
      case 1:sueldoHora=200;break;
      case 2:sueldoHora=150;break;
      case 3:sueldoHora=100;break;
  }
  let sueldoBase=sueldoHora*horas;
  let canastaBasica=parseFloat(sueldoBase*0.045);
  let apoyo=parseFloat(sueldoBase*0.05);
  let antiguedad=parseFloat(anios*200);
  let estimulo=parseFloat(sueldoBase*0.02);
  let hextras=horas;
  if (hextras>40){
    hextras=(horas-40)*3*sueldoHora;
  }
  let totalPercepciones=parseFloat(sueldoBase+canastaBasica+apoyo+antiguedad+estimulo+hextras);
  let ISR=parseFloat(sueldoBase*0.16);
  let servicioSalud=parseFloat(sueldoBase*0.0465);
  let AFORE=parseFloat(sueldoBase*0.061);
  let sindicato=parseFloat(sueldoBase*0.01);
  let capI=parseFloat(sueldoBase*0.014);
  let totalDeducciones=parseFloat(ISR+servicioSalud+AFORE+sindicato+capI);
  let salarioNeto=parseFloat(totalPercepciones-totalDeducciones);
  
  document.getElementById("sueldoBase").innerHTML="<h3>$"+sueldoBase.toFixed(2)+"</h3>";
  document.getElementById("apoyo").innerHTML="<h3>$"+apoyo.toFixed(2)+"</h3>";
  document.getElementById("canastaBasica").innerHTML="<h3>$"+canastaBasica.toFixed(2)+"</h3>";
  document.getElementById("antiguedad").innerHTML="<h3>$"+antiguedad.toFixed(2)+"</h3>";
  document.getElementById("estimulo").innerHTML="<h3>$"+estimulo.toFixed(2)+"</h3>";
  document.getElementById("extra").innerHTML="<h3>$"+hextras.toFixed(2)+"</h3>";
  document.getElementById("totalPercepciones").innerHTML="<h3>$"+totalPercepciones.toFixed(2)+"</h3>";
  document.getElementById("ISR").innerHTML="<h3>$"+ISR.toFixed(2)+"</h3>";
  document.getElementById("servicioSalud").innerHTML="<h3>$"+servicioSalud.toFixed(2)+"</h3>";
  document.getElementById("AFORE").innerHTML="<h3>$"+AFORE.toFixed(2)+"</h3>";
  document.getElementById("sindicato").innerHTML="<h3>$"+sindicato.toFixed(2)+"</h3>";
document.getElementById("capI").innerHTML="<h3>$"+capI.toFixed(2)+"</h3>";
  document.getElementById("totalDeducciones").innerHTML="<h3>$"+totalDeducciones.toFixed(2)+"</h3>";
  document.getElementById("salarioNeto").innerHTML="<h3>$"+salarioNeto.toFixed(2)+"</h3>";

}
let btnBorrar=document.querySelector("#borrar");
btnBorrar.onclick=()=>{
  setTimeout(()=>{
      Swal.fire({
          title: '¿Está seguro?',
          text: "¡No podrás revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '¡Sí, bórralo!'
        }).then((result) => {
          document.getElementById("puesto").value=0;
          document.getElementById("horas").value=0 ;
          document.getElementById("anios").value=0;
          document.getElementById("sueldoBase").innerHTML="<h3>$0.00</h3>";
  document.getElementById("apoyo").innerHTML="<h3>$0.00</h3>";
  document.getElementById("canastaBasica").innerHTML="<h3>$0.00</h3>";
  document.getElementById("antiguedad").innerHTML="<h3>$0.00</h3>";
  document.getElementById("estimulo").innerHTML="<h3>$0.00</h3>";
  document.getElementById("totalPercepciones").innerHTML="<h3>$0.00</h3>";
  document.getElementById("ISR").innerHTML="<h3>$0.00</h3>";
  document.getElementById("servicioSalud").innerHTML="<h3>$0.00</h3>";
  document.getElementById("AFORE").innerHTML="<h3>$0.00</h3>";
  document.getElementById("sindicato").innerHTML="<h3>$0.00</h3>";
  document.getElementById("totalDeducciones").innerHTML="<h3>$0.00</h3>";
  document.getElementById("salarioNeto").innerHTML="<h3>$0.00</h3>";
  document.getElementById("extra").innerHTML="<h3>$0.00</h3>";
  document.getElementById("capI").innerHTML="<h3>$0.00</h3>";
          if (result.isConfirmed) {
            Swal.fire(
              '¡Eliminado!',
              'Se elimino correctamente el formulario',
              'success'
            )
          }
        })
          
  
  
},1000);
}