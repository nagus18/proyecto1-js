const Proteina_precio = 40000;
const Creatina_precio = 30000;
const BarritaProteica_precio = 3000;
const BatidoDeProteina_precio = 5000;

function calcular(que, cuanto) {
  switch (que) {
    case "1":
      alert(
        `Las ${Number(cuanto)} proteínas saldrían: $${
          Proteina_precio * Number(cuanto)
        }`
      );
      break;
    case "2":
      alert(
        `Las ${Number(cuanto)} creatinas saldrían: $${
          Creatina_precio * Number(cuanto)
        }`
      );
      break;
    case "3":
      alert(
        `Las ${Number(cuanto)} barritas saldrían: $${
          BarritaProteica_precio * Number(cuanto)
        }`
      );
      break;
    case "4":
      alert(
        `Los ${Number(cuanto)} batidos saldrían: $${
          BatidoDeProteina_precio * Number(cuanto)
        }`
      );
      break;
    case "5":
      inicio();
      break;
    default:
      alert("Por favor elija una de las opciones");
  }
}

function info(opcion_info) {
  switch (opcion_info) {
    case "1":
      alert("Es una sustancia que sirve para que crezca el musculo");
      break;
    case "2":
      alert(
        "Es una sustancia que ayuda a que el cuerpo se recupere mas rapido despues de entrenar"
      );
      break;
    case "3":
      alert(
        "Las barritas proteicas son snacks saludables ideales para cuando queres comer algo dulce y que sea proteico"
      );
      break;
    case "4":
      alert(
        "El batido proteico es una bebida hecha principalmente con proteina y leche,esta se puede tomar en cualquier momento del dia"
      );
      break;
    case "5":
      inicio();
      break;
    default:
      alert("Por favor elija una de las opciones");
  }
}
function inicio() {
  let seccion1 =
    prompt(`Hola,vendemos suplementos de la mas alta calidad y con los mejores precios,algunos de estos son proteinas,creatinas,batidos de proteina,barritas proteicas entre otros

    1 - Mas info sobre productos    
    2 - Comprar`);

  if (seccion1 === "2") {
    let que = prompt(`Que producto desea comprar?
                
                1: Proteina
                2: Creatina
                3: Barrita proteica
                4: Batido proteico
                5: Volver atras`);
    if (que === "5") {
      inicio();
      return;
    }

    if (que === "1" || que === "2" || que === "3" || que === "4") {
      let cuanto = prompt("¿Cuántas unidades?");
      calcular(que, cuanto);
    } else {
      alert("Por favor elija una de las opciones");
    }
  } else if (seccion1 === "1") {
    let opcion_info = prompt(`Sobre que producto desea mas informacion?

                1: Proteina
                2: Creatina
                3: Barrita proteica
                4: Batido proteico
                5: Volver atras`);
    info(opcion_info);
  } else {
    inicio();
  }
}

function comienzo() {
  inicio();
}

comienzo();
