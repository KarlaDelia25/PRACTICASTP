let razas=JSON.parse(localStorage.getItem("razas"));
if(!razas){  localStorage.setItem("razas",JSON.stringify([]));}
var add=document.querySelector("#agregar")
add.onclick=()=>{
    //RECOPILA DATOS
    let nombre=document.querySelector("#nombre").value;
    //VALIDAR DATOS
    if(nombre.trim()===''){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'CAMPO VACIO',
            footer: ' CECYTO 2023'
        })
        return;
    }
    let raza={nombre}
    razas.push(raza);
    localStorage.setItem("razas",JSON.stringify(razas))
    document.querySelector("#formAdd").reset();
    document.querySelector("#addModalRaza").click()
    mostrarRazas();
}

const mostrarRazas=()=>{
    var razasHTML="";
    razas=JSON.parse(localStorage.getItem("razas"))
    let i=1;
    razas.map(raza=>{
        razasHTML+=`<div class="card bg-white text-dark w-25 m-auto mb-2 p-4">
        <p><b>RAZA <br></b>${raza.nombre}</p>
        <button class="btn btn-danger" onclick="eliminarRaza(${i})">Eliminar</button>
        </div>`
        
    })
    document.querySelector("#listRazas").innerHTML=razasHTML;
}

const eliminarRaza=(id)=>{
    Swal.fire({
        title: 'Estas seguro de eliminar raza?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: 'NO',
    }).then((result) => {
        if (result.isConfirmed) {
            razas=JSON.parse(localStorage.getItem("raza"))
            let razas2=new Array();
            let i=1
            razas.map(raza=>{
                if(i!=id){
                    razas2.push(raza)
                }
                i++;
            })
            localStorage.setItem("razas",JSON.stringify(razas2))
            mostrarRazas();         
        } else if (result.isDenied) {
            return;
        }
    })
}
