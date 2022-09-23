
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn =  document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

//Escuchador de eventos es addEventLsitener es un metodo
//nombre del evento es el rimero paramatero
//el segundo parametro es una funcion

//btn.addEventListener('click', btnOnClick )

form.addEventListener('submit', sumarValues);

function sumarValues(event) {
    console.log('Escuchando el evento del click');
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado= " + sumaInputs;
}
