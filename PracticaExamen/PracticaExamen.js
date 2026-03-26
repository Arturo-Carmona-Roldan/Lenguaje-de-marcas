const principal = document.querySelector("#principal");
// para elegir por clase en vez de por id se usa .clase por ejemplo .principal

//ruta del archivo
const URL = "PracticaExamen.json";

//cargar el json
async function CargarJSON() {
  try {
    const response = await fetch(URL);
    const juegos = await response.json();

    datos(juegos);
  } catch (error) {
    console.error("Error al cargar el JSON");
  }
}

CargarJSON();

function datos(juegos2) {

  juegos2.forEach((juego) => {
    //datos principales
    const section = document.createElement("section");

    const h3_1 = document.createElement("h3");
    const h3_2 = document.createElement("h3");
    const h3_3 = document.createElement("h3");

    const textoh3_1 = document.createTextNode(juego.titulo);
    const textoh3_2 = document.createTextNode(juego.estudio);
    const textoh3_3 = document.createTextNode(juego.anio);

    h3_1.append(textoh3_1);
    h3_2.append(textoh3_2);
    h3_3.append(textoh3_3);

    section.append(h3_1, h3_2, h3_3);

    //plataformas
    const div_plataformas = document.createElement("div");
    div_plataformas.setAttribute("id", "plataformas");

    for (const plataforma of juego.plataforma) {
      const span_plataforma = document.createElement("span");
      const texto_span = document.createTextNode(plataforma);
      span_plataforma.append(texto_span);

      div_plataformas.append(span_plataforma);
    }

    section.append(div_plataformas);

    //valoraciones
    const article_valoraciones = document.createElement("article");

    for(const valoracion of juego.valoraciones){

      const div_valoraciones = document.createElement("div");

      const div_nombre = document.createElement("div");
      const div_jugabilidad = document.createElement("div");
      const div_disenio = document.createElement("div");
      const div_historia = document.createElement("div");

      console.log(valoracion);

      const nombre = document.createTextNode("Nombre: " + valoracion.nombre);
      const jugabilidad = document.createTextNode("Jugabilidad: " + valoracion.jugabilidad);
      const disenio = document.createTextNode("Diseño: " + valoracion.disenio);
      const historia = document.createTextNode("Historia: " + valoracion.historia);

      div_nombre.append(nombre);
      div_jugabilidad.append(jugabilidad);
      div_disenio.append(disenio);
      div_historia.append(historia);

      div_valoraciones.append(div_nombre);
      div_valoraciones.append(div_jugabilidad);
      div_valoraciones.append(div_disenio);
      div_valoraciones.append(div_historia);

      article_valoraciones.append(div_valoraciones);
    }

    section.append(article_valoraciones);
    principal.append(section);
  });
}

/*
section{
  h3{nombre}
  h3{estudio}
  h3{año}
  div #platform{
    span{plataforma}
    span{plataforma}
    span{plataforma}
    }
  article{
    div{
        div{valoracion}
        div{jugab}
        div{diseño}
        div{historia}
    }
    div{
        div{valoracion}
        div{jugab}
        div{diseño}
        div{historia}
    }
  }
}
*/
