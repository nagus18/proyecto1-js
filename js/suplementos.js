const suplementos = [
  {
    id: 1,
    nombre: "Proteína",
    precio: 40000,
    descripcion: "Es una sustancia que sirve para que crezca el músculo",
  },
  {
    id: 2,
    nombre: "Creatina",
    precio: 30000,
    descripcion:
      "Es una sustancia que ayuda a que el cuerpo se recupere más rápido después de entrenar",
  },
  {
    id: 3,
    nombre: "Barrita proteica",
    precio: 3000,
    descripcion:
      "Las barritas proteicas son snacks saludables ideales para cuando querés comer algo dulce y que sea proteico",
  },
  {
    id: 4,
    nombre: "Batido proteico",
    precio: 5000,
    descripcion:
      "El batido proteico es una bebida hecha principalmente con proteína y leche. Se puede tomar en cualquier momento del día",
  },
];

const section = document.querySelector("#index main section");
const arraysuplementos = suplementos.map(
  (
    suplemento
  ) => `  <img src="./img/${suplementos.id}.jpeg" alt="suplementos deportivos" />`
<h5>${suplementos.nombre} - ${suplementos.precio}</h5>
)