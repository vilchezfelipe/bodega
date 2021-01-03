let btn_2019 = document.getElementById("btn_ventas2019");
let btn_2020 = document.getElementById("btn_ventas2020");

let contenedorGeneral = document.querySelector(".contenedorGeneral");

//let contenedor2 = document.querySelector(".contenedor2").classList.add("activo");

btn_2020.addEventListener("click", ()=>{
    let container2019 = document.querySelector(".container_2019").classList.add("activo");
    let container2020 = document.querySelector(".container_2020").classList.add("activo");
})
btn_2019.addEventListener("click", ()=>{
    let container2019 = document.querySelector(".container_2019").classList.remove("activo");
    let container2020 = document.querySelector(".container_2020").classList.remove("activo");
})