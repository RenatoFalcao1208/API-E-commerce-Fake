//Conectar com a API utilizando o FETCH

/*fetch('dados.json').then(resposta => resposta.json()).then(corpo => {

    console.log(corpo)
    //FRONT-END
    document.getElementById('nome').innerHTML = corpo.nome
    document.getElementById('disco').innerHTML = corpo.album
    document.getElementById('estilo').innerHTML = corpo.style
    document.getElementById('imagem').innerHTML = corpo.image
    document.getElementById('preco').innerHTML = corpo.price
}) */
function escolhido(){
let albumescolhido = document.getElementById("album");

  albumescolhido.addEventListener("change", function () {
    const escolhafinal = albumescolhido.value;
    console.log("Você escolheu:", escolhafinal);
  });
  if (albumescolhido.value === "fallBack"){

    fetch('dados.json').then(resposta => resposta.json()).then(corpo => {

        console.log(corpo)
        //FRONT-END
        document.getElementById('nome').innerHTML = corpo.nome
        document.getElementById('disco').innerHTML = corpo.album
        document.getElementById('estilo').innerHTML = corpo.style
        document.getElementById('imagem').innerHTML = corpo.image
        document.getElementById('preco').innerHTML = corpo.price
    })
  }else if(albumescolhido.value === "nevermind"){
    fetch('dados.json').then(resposta => resposta.json()).then(corpo => {

        console.log(corpo)

    document.getElementById('nome').innerHTML = corpo.nome2;
    document.getElementById('disco').innerHTML = corpo.album2;
    document.getElementById('estilo').innerHTML = corpo.style2;
    document.getElementById('imagem').innerHTML = corpo.image2;
    document.getElementById('preco').innerHTML = corpo.price2;
    })
  }else if(albumescolhido.value === "toxicity"){
    fetch('dados.json').then(resposta => resposta.json()).then(corpo => {

        console.log(corpo)

    document.getElementById('nome').innerHTML = corpo.nome3;
    document.getElementById('disco').innerHTML = corpo.album3;
    document.getElementById('estilo').innerHTML = corpo.style3;
    document.getElementById('imagem').innerHTML = corpo.image3;
    document.getElementById('preco').innerHTML = corpo.price3;
    })
  
  }else if(albumescolhido.value === "meteora"){
    fetch('dados.json').then(resposta => resposta.json()).then(corpo => {

        console.log(corpo)

    document.getElementById('nome').innerHTML = corpo.nome4;
    document.getElementById('disco').innerHTML = corpo.album4;
    document.getElementById('estilo').innerHTML = corpo.style4;
    document.getElementById('imagem').innerHTML = corpo.image4;
    document.getElementById('preco').innerHTML = corpo.price4;
    })
  
  }else{

    document.getElementById('nome').innerText = "";
    document.getElementById('disco').innerText = "";
    document.getElementById('estilo').innerText = "";
    document.getElementById('imagem').innerText = "";
    document.getElementById('preco').innerText = "";
    document.getElementById('previa').innerText= "";

  }
}
function comprar(){
    let albumescolhido = document.getElementById("album");
    alert(`Você comprou ${albumescolhido.value}`);
}
function tocarSom(){
  let albumescolhido = document.getElementById("album");
  if (albumescolhido.value === "fallBack"){

    fetch('dados.json').then(resposta => resposta.json()).then(corpo => {

        console.log(corpo)
    document.getElementById('previa').innerHTML = corpo.preview;
     })

  }else if (albumescolhido.value === "nevermind"){
    fetch('dados.json').then(resposta => resposta.json()).then(corpo => {

        console.log(corpo)
    document.getElementById('previa').innerHTML = corpo.preview2;
     })
  }else if (albumescolhido.value === "toxicity"){
    fetch('dados.json').then(resposta => resposta.json()).then(corpo => {

        console.log(corpo)
    document.getElementById('previa').innerHTML = corpo.preview3;
     })
  }else if (albumescolhido.value === "meteora"){
    fetch('dados.json').then(resposta => resposta.json()).then(corpo => {

        console.log(corpo)
    document.getElementById('previa').innerHTML = corpo.preview4;
     })
  }else if (albumescolhido.value === "toxicity"){
    document.getElementById('previa').innerText= "";
  }
}

