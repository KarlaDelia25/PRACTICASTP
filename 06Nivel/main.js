
let cal = document.querySelector("#cal")
let nivel = document.querySelector("#nivel")


cal.oninput = () => { calcular() }

const calcular = () => {
  let vcal = parseInt(cal.value)
  
  document.querySelector("#vcal").innerHTML = vcal
  


    if (vcal >= 9) {
      nivel.innerHTML = "Excelente"
    }
    else if (vcal == 8){
      nivel.innerHTML = "Bueno"
    }
    else if (vcal == 7){
      nivel.innerHTML = "Bueno"
    }
    else if (vcal == 6)  {
      nivel.innerHTML = "Regular"
    }
    else if (vcal == 5 )  {
      nivel.innerHTML = "No satisfactorio"
    }else{
    nivel.innerHTML = "<div>"
    }
}
    
    
