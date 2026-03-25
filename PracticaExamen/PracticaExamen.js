const principal = document.querySelector("#principal");

const URL = "PracticaExamen.json";

async function CargarJSON() {
  try {
    const response = await fetch(URL);
    const juegos = await response.json();

    datos(juegos);
   
  } catch (error){
console.error("Error al cargar el JSON")
  }
  CargarJSON();
}

function datos(jsonObj){
  
 juegos.array.forEach((juego) => {

        const section = document.createElement("section");

        const h3_1 = document.createElement("h3");
        const h3_2 = document.createElement("h3");
        const h3_3 = document.createElement("h3");

        const textoh3_1 = document.createTextNode(juego.Titulo);
        const textoh3_2 = document.createTextNode(juego.Estudio);
        const textoh3_3 = document.createTextNode(juego.Año);

        h3_1.append(textoh3_1);
        h3_2.append(textoh3_2);
        h3_3.append(textoh3_3);

        const div1 = document.createElement("div");
        div1.setAttribute("id", "plataforma")

        for (const plataforma of juego.plataforma){
           const span = document.createElement("span");
            const textospan = document.createTextNode(juego.plataforma);
            span.append(textospan);

            div1.append(span);
        }

        section.append(div1);

        

        const article = document.createElement("article");



        const div2_1 = document.createElement("div");
        const div2_2 = document.createElement("div");

        const div3_1 = document.createElement("div");
        const div3_2 = document.createElement("div");
        const div3_3 = document.createElement("div");
        const div3_4 = document.createElement("div");

        div2_1.append();

        article.append(div2_1,div2_2);

        section.append(h3_1, h3_2, h3_3,div1,article);
        
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