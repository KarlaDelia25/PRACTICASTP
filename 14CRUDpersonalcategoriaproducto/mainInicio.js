let gatos=JSON.parse(localStorage.getItem("gatos"));
if(!gatos){  localStorage.setItem("gatos",JSON.stringify([]));}

const mostrarGatos=(raza)=>{
    var GatosHTML="";
    gatos=JSON.parse(localStorage.getItem("gatos"))
    let i=1;
    if(raza=="0"){
        gatos.map(gato=>{       
            if(i%2==1){GatosHTML+=`<div class="row W-50">`}
            gatosHTML+=`<div class="col">
                            <div class="card bg-white text-dark w-100 m-auto mb-2 p-4">
                                <img src="gato.jpg" width="100%">
                                <p><b>${gato.nombre.toUpperCase()}</b></p>
                                <p><b>$${gato.color}</b></p>
                                <button class="btn btn-primary" onclick="comprarGato(${i})">Adoptar</button>
                            </div>
                            </div>`
            if(i%2==0){gatosHTML+=`</div>`}
            i++;
        })
        }else{
            gatos.map(gato=>{                
                if(raza==gato.raza){
                    if(i%2==1){gatosHTML+=`<div class="row W-50">`}
                gatosHTML+=`<div class="col">
                                <div class="card bg-white text-dark w-100 m-auto mb-2 p-4">
                                    <img src="gato.jpg" width="100%">
                                    <p><b>${gato.nombre.toUpperCase()}</b></p>
                                    <p><b>$${gato.color}</b></p>
                                    <button class="btn btn-primary" onclick="AdoptarGato(${i})">Comprar</button>
                                </div>
                                </div>`                          
                    if(i%2==0){gatosHTML+=`</div>`}
                    i++;
                }                
            })
        }
    document.querySelector("#listGatos").innerHTML=gatosHTML;
}
const mostrarRazas=()=>{
    var razasHTML="";
    razas=JSON.parse(localStorage.getItem("razas"))
    razasHTML+=`<option value="0">TODAS</option>`; 
    raza.map(raza=>{
        razasHTML+=`<option value="${raza.nombre}">${raza.nombre}</option>`;        
    })
    document.querySelector("#raza").innerHTML=razasHTML;
}
