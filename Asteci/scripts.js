const input = document.querySelector("");


function datos(){
    fetch('https://api.datos.gob.mx/v1/condiciones-atmosfericas')
    .then((res)=>res.json())
    .then((data))=>{id(data)}
}