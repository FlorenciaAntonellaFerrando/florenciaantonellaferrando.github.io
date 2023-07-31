window.onload = function() {

    //creo el json con las noticias
    const noticias = [
        {titulo : "Un juegazo para aprender css",
        cuerpo : "Css Sushi es un juego para aprender de forma divertida Flexbox de Css.<br>Pueden acceder al mismo",
        link : "https://flukeout.github.io/",
        txtLink : "Aqui",
        txtimagen : "imagen de juego css",
        imagen : "./img/cssSushi.png"},
        
        {titulo : "Digitalers es la mejor propuesta de capacitación",
        cuerpo : "Queres ser un jedi del frontend?<br> ¿Qué estás esperando? <br>El programa digitalers es tu oportunidad.",
        link : false,
        txtLink : "Aqui",
        txtimagen : "",
        imagen : "./img/digitalers.jpg"},
        
        {titulo : "Una IA crea los simpsons en la vida real",
        cuerpo : "Se le pidió a una IA que retrate a los simpsons en la vida real y esto es lo que salió.Puedes verlos en el siguiente link",
        link : "https://elcomercio.pe/tecnologia/inteligencia-artificial/asi-se-verian-los-personajes-de-los-simpsons-en-la-vida-real-segun-una-ia-fotos-inteligencia-artificial-midjourney-noticia/?ref=ecr",
        txtLink : "Aqui",
        txtimagen : "",
        imagen : false}
    ];

    //recorro el json noticias y lo incorporo al HTML

    for (let noticia of noticias){
        //creacion de estructura
        const articulo = document.createElement("article");
        const divContenedor = document.createElement("div");
        const titulo = document.createElement("div");
        const parrafo = document.createElement("div");
        const link = document.createElement("a");
        const imagen = document.createElement("img");
        
        //este lo tomo porque ya existe en el html
        const seccion = document.getElementById("noticias");
        
        //escribo el json
        if(noticia.link){
            titulo.innerHTML = `<h3>${noticia.titulo}</h3>`;
            parrafo.innerHTML = `<p>${noticia.cuerpo} <a href =${noticia.link} target="_blank" >${noticia.txtLink}</a></p>`
        }
        else{
            titulo.innerHTML = `<h3>${noticia.titulo}</h3>`;
            parrafo.innerHTML = `<p>${noticia.cuerpo}</p>`
        }
        
        //incorporacion al HTML
        seccion.appendChild(articulo);
        articulo.appendChild(divContenedor);
        divContenedor.appendChild(titulo);
        divContenedor.appendChild(parrafo);
        
        if(noticia.imagen){
            imagen.setAttribute("src", noticia.imagen);
            imagen.setAttribute("alt", noticia.txtimagen);
            articulo.appendChild(imagen);
        }
        //aplico estilos
        articulo.className = "noticia";
        divContenedor.className = "cabecera";
    }

    //seccion de comentarios

    let btnComentario = document.getElementById("dejarComentarios");

    //asocio evento a boton

    btnComentario.addEventListener("click", () =>{

        const seccionComentario = document.getElementById("comentarios");
        const articulo = document.createElement("article");
        const divUser = document.createElement("div");
        const divComment = document.createElement("div");

        let usuario = document.getElementById("nombre");
        let comentario = document.getElementById("comentario");
        let email = document.getElementById("email");

        divUser.innerHTML = `<img src="./img/usuario.png"><p>${usuario.value}:</p>`;
        divComment.innerHTML = `<p>${comentario.value}</p>`;
        
        divUser.className = "usuario";
        divComment.className = "comentario";
        articulo.className = "comentario_1";
        //articulo.setAttribute("id","comentario_1");

        seccionComentario.appendChild(articulo);
        articulo.appendChild(divUser);
        articulo.appendChild(divComment);

        console.log("llego");

        usuario.value = "";
        comentario.value = "";
        email.value ="";

        console.log("llego");

        console.log(comentario);

    });

};



