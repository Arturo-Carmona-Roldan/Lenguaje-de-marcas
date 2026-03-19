const principal = document.querySelector("#principal");
const requestURL = "../Ejercicio2/Ejercicio2.json";

async function cargarJSON() {
  try {
    const response = await fetch(requestURL);
    const mensajes = await response.json();

    mensajes.forEach((mensaje) => {
      const tarjeta = document.createElement("div");

      const cabecera = document.createElement("div");

      const h4_para = document.createElement("h4");
      const texto_para = document.createTextNode("para: " + mensaje.para);

      const h4_de = document.createElement("h4");
      const texto_de = document.createTextNode("De: " + mensaje.de);

      h4_para.append(texto_para);
      h4_de.append(texto_de);

      cabecera.append(h4_para, h4_de);

      const cuerpo = document.createElement("div");

      const h4_titulo = document.createElement("h4");
      const texto_titulo = document.createTextNode(mensaje.titulo);

      const h4_contenido = document.createElement("h4");
      const texto_contenido = document.createTextNode(mensaje.contenido);

      h4_titulo.append(texto_titulo);
      h4_contenido.append(texto_contenido);

      cuerpo.append(h4_titulo, h4_contenido);

      tarjeta.append(cabecera, cuerpo);

      principal.append(tarjeta);
    });
  } catch (error) {
    console.log("Error al cargar el JSON", error);
  }
}

cargarJSON();