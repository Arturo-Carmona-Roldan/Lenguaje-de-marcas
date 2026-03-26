const datos_excursion = document.querySelector("#datos");

const excursiones = document.querySelector("#excursiones");

async function CargarJSON() {
  try {
    const response = await fetch("../JSON/CarmonaRoldan_ofertas.json");
    const agencia = await response.json();

    datos(agencia);
  } catch (error) {
    console.error("Error al cargar el JSON");
  }
}

CargarJSON();
function datos(datos_agencia) {
  const nombre_agencia = document.createElement("h1");
  nombre_agencia.textContent = datos_agencia.nombre_agencia;
  datos_excursion.append(nombre_agencia);

  const div_info = document.createElement("div");

  const titulo = document.createElement("h2");
  const telefono = document.createElement("p");
  const mail = document.createElement("p");

  titulo.textContent = "Información de contacto";
  telefono.textContent = datos_agencia.informacion_contacto.telefono;
  mail.textContent = datos_agencia.informacion_contacto.mail;

  div_info.append(titulo, telefono, mail);
  datos_excursion.append(div_info);

  for (const excursion of datos_agencia.excursiones) {
    const card_excursiones = document.createElement("card");

    const ciudad = document.createElement("h3");
    const pais = document.createElement("h3");
    const precio = document.createElement("h3");

    ciudad.textContent = excursion.destino;
    pais.textContent = excursion.pais;
    precio.textContent = excursion.precio;

    card_excursiones.append(ciudad, pais, precio);

    const div_actividades = document.createElement("div");

    for (const actividad of excursion.actividades) {
      const span = document.createElement("span");
      span.textContent = actividad;

      div_actividades.append(span);
      card_excursiones.append(div_actividades);
    }

    excursiones.append(card_excursiones);
  }
}
