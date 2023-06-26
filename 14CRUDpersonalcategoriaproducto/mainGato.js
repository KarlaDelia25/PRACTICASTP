let gatos=JSON.parse(localStorage.getItem("gatos"));
if(!gatos){  localStorage.setItem("gatos",JSON.stringify([]));}
var add=document.querySelector("#agregar")
add.onclick=()=>{
    //RECOPILA DATOS
    let nombre=document.querySelector("#nombre").value;
    let color=document.querySelector("#color").value;
    let edad=document.querySelector("#edad").value;
    let raza=document.querySelector("#raza").value;
    //VALIDAR DATOS
    if(nombre.trim()===''||color.trim()===''||edad.trim()===''||raza.trim()===''){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'CAMPOS VACIOS',
            footer: ' CECYTO'
        })
        return;
    }
    let gato={nombre,color,edad, raza}
    gatos.push(gato);
    localStorage.setItem("gatos",JSON.stringify(gatos))
    document.querySelector("#formAdd").reset();
    document.querySelector("#addModalGatos").click()
    mostrarGatos();
}

const mostrarGatos=()=>{
    var gatosHTML="";
    gatos=JSON.parse(localStorage.getItem("gatos"))
    let i=1;
    gatos.map(gato=>{
        gatosHTML+=`<div class="card bg-white text-dark w-25 m-auto mb-2 p-4">
        <p><b>Nombre: </b>${gato.nombre}</p>
        <p><b>Color: </b>${gato.color}</p>
        <p><b>Edad: </b>$${gato.edad}</p>
        <p><b>Raza: </b>${gato.raza}</p>
        <button class="btn btn-danger" onclick="eliminarGato(${i})">Eliminar</button>
        </div>`
        
    })
    document.querySelector("#listGatos").innerHTML=gatosHTML;
    mostrarRazas();
}

const eliminarGato=(id)=>{
    Swal.fire({
        title: 'Estas seguro de eliminar gato?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: 'NO',
    }).then((result) => {
        if (result.isConfirmed) {
            gatos=JSON.parse(localStorage.getItem("gatos"))
            let gatos2=new Array();
            let i=1
            gatos.map(gato=>{
                if(i!=id){
                    gatos2.push(gato)
                }
                i++;
            })
            localStorage.setItem("gatos",JSON.stringify(gatos2))
            mostrarGatos();         
        } else if (result.isDenied) {
            return;
        }
    })
}

const mostrarRazas=()=>{
    var razasHTML="";
    razas=JSON.parse(localStorage.getItem("razas"))
    razas.map(raza=>{
        razasHTML+=`<option value="${raza.nombre}">${raza.nombre}</option>`;        
    })
    document.querySelector("#raza").innerHTML=razasHTML;
}
