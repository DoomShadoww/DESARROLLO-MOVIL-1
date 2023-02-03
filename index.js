

let nombre = prompt("Dame tu nombre:");
let dinero = prompt("Cuanto dinero tienes?:");
dinero = parseInt(dinero);

let nombre1 = prompt("Dame tu nombre:");
let dinero1 = prompt("Cuanto dinero tienes?:");
dinero1 = parseInt(dinero1);

let nombre2 = prompt("Dame tu nombre:");
let dinero2 = prompt("Cuanto dinero tienes?:");
dinero2 = parseInt(dinero2);

let total = dinero + dinero1 + dinero2;


document.write(`<h1 class="text-light"> PROYECTO DESARROLLO MOVIL MULTIPLATAFORMA :)</h1> `)
document.write(`<br>`)






document.write(`<div id="cardNom" class="card text-bg-primary"> <h5>Hola ${nombre} ,bienvenido!</h5> </div>`);
document.write(`<div id="carDinero" class="card text-bg-success"><h5>Tu saldo es de:  $${dinero}</h5></div>`);
document.write(`<div id="cardNom" class="card text-bg-primary"><h5>Hola ${nombre1} ,bienvenido!</h5></div>`);
document.write(`<div id="carDinero" class="card text-bg-success"><h5>Tu saldo es de: $${dinero1}</h5></div>`);
document.write(`<div id="cardNom" class="card text-bg-primary"><h5>Hola ${nombre2} ,bienvenido</h5></div>`);
document.write(`<div id="carDinero" class="card text-bg-success"><h5>Tu saldo es de: $${dinero2}</h5></div>`);

document.write(`<hr>`)
document.write(`<h2 class="text-light"> Su total combinado es de: $${total}`)

document.write(`<h1 class="text-light">La LapTop tiene un costo de $5.000</h1>`);

if ((dinero >= 5000) && (dinero1 >= 5000) && (dinero2 >= 5000)){
    document.write(`<h2 class="text-light">Todos pueden adquirirla :).</h2>`)
}
else if ((dinero < 5000) && (dinero1 >= 5000) && (dinero2 >= 5000)){
    document.write(`<h2 class="text-light"> Solo la pueden comprar ${nombre1} y ${nombre2}.</h2>`);
    document.write(`<br>`);
}
else if ((dinero >= 5000) && (dinero1 < 5000) && (dinero2 >= 5000)){
    document.write(`<h2 class="text-light"> Solo la pueden comprar ${nombre} y ${nombre2}.</h2>`);
    document.write(`<br>`);
}
else if ((dinero >= 5000) && (dinero1 >= 5000) && (dinero2 < 5000)){
    document.write(`<h2> Solo la pueden comprar ${nombre} y ${nombre1}.</h2>`);
    document.write(`<br>`);
}
else if ((dinero < 5000) && (dinero1 < 5000) && (dinero2 >= 5000)){
    document.write(`<h2 class="text-light"> Solo la puede comprar ${nombre2}.</h2> `);
    document.write(`<br>`);
}
else if ((dinero >= 5000) && (dinero1 < 5000) && (dinero2 < 5000)){
    document.write(`<h2 class="text-light"> Solo la puede comprar ${nombre}.</h2> `);
    document.write(`<br>`);
}
else if ((dinero < 5000) && (dinero1 >= 5000) && (dinero2 < 5000)){
    document.write(`<h2 class="text-light"> Solo la puede comprar ${nombre1}.</h2>  <br>`);
    document.write(`<br>`);
}
else{
    document.write(`<h1 class="text-light">Lo sentimos...</h1> <br>`)
}
if((dinero < 5000)){
    document.write(`<h5 class="alerta"><alert class="alert alert-danger">${nombre} NO tiene los fondos suficientes.  :(</alert></h5>`)

}

document.write(`<br>`)

if((dinero1 < 5000)){
    document.write(`<h5 class="alerta"><alert class="alert alert-danger">${nombre1} NO tiene los fondos suficientes.  :(</alert></h5>`)

}

document.write(`<br>`)

if((dinero2 < 5000)){
    document.write(`<h5 class="alerta"><alert class="alert alert-danger">${nombre2} NO tiene los fondos suficientes.  :(</alert></h5>`)
    document.write(`<br>`)
}




document.write(`<hr>`)
document.write(`<h4 class="col-md-12 text-light">Elaborado por: Rafael Bernal Gallegos,Uziel Gaytan Alonso, Diego Emmanuel Rodriguez, Bryan Pineda Figueroa y Caleb Estrada.</h4>`)

















