// cartas array, coloquei os objetos direto dentro do array.
// const cartasArray = [
//   {nome: "Pikachu", atributos: {ataque: 5, defesa: 7, magia: 2}},
//   {nome: "Darth Vader", atributos: {ataque: 9, defesa: 8, magia: 3}},
//   {nome: "Shiryu de dragao", atributos: {ataque: 9, defesa: 8, magia: 3}}
// ]

// aqui criamos um objeto separadamente e depois colocamos ele dentro do array.
var carta1 = {
    nome: "Snoopy",
    imagem: "https://i.pinimg.com/564x/50/e4/e0/50e4e005b24ecea08cad1b648554e781.jpg",
    atributos: {ataque: 10, defesa: 5, inteligência: 8}
  };
  var carta2 = {
    nome: "charlie brown",
    imagem: "https://i.pinimg.com/564x/76/0d/e3/760de3eaea299ce44162d9090cb1be28.jpg",
    atributos: {ataque: 3, defesa: 4, inteligência: 9}
  };
  var carta3 = {
    nome: "lucy",
    imagem: "https://i.pinimg.com/236x/9c/0e/ba/9c0ebad9e9a85673b1a34b517667bab3.jpg",
    atributos: {ataque: 10, defesa: 7, inteligência: 5}
  };
  var carta4 = {
    nome: "linus",
    imagem: "https://i.pinimg.com/564x/09/f7/c9/09f7c9ab41eca59d64a9ea21bb49f995.jpg",
    atributos: {ataque: 5, defesa: 4, inteligência: 9}
  };
  var carta5 = {
    nome: "paty pimetinha",
    imagem: "https://i.pinimg.com/236x/5d/8c/89/5d8c893e76599cd8c860e524f0883568.jpg",
    atributos: {ataque: 9, defesa: 6, inteligência: 3}
  };
  var carta6 = {
    nome: "marcie",
    imagem: "http://hqmemoria.com/wp-content/uploads/2016/09/MARCIE.jpg",
    atributos: {ataque: 3, defesa: 5, inteligência: 8}
  };
  var carta7 = {
    nome: "woodstock",
    imagem: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-snoopy-woodstock-peter-b-lutes.jpg",
    atributos: {ataque: 8, defesa: 2, inteligência: 10}
  };
  var carta8 = {
    nome: "schroeder",
    imagem: "https://www.peanuts.com/sites/default/files/sc-color_1.jpg",
    atributos: {ataque: 2, defesa: 8, inteligência: 7}
  };
  
  // criando uma lista com as cartas
  var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
  var cartaMaquina;
  var cartaJogador;
  
  // criando a função de sortear uma carta
  function sortearCarta() {
    var numeroSorteadoMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroSorteadoMaquina];
    console.log(cartaMaquina);
  
    var numeroSorteadoJogador = parseInt(Math.random() * cartas.length)
    // enquanto a carta do jogador for igual a da maquina,
    // fica rodando o código ate achar um numero diferente
    while (numeroSorteadoMaquina === numeroSorteadoJogador) {
      numeroSorteadoJogador = parseInt(Math.random() * cartas.length)
    }
    cartaJogador = cartas[numeroSorteadoJogador];
  
    // desabilitando o botao sortear apos ele ser pressionado
    document.getElementById('btnSortear').disabled = true;
    // habilitando o botao jogar
    document.getElementById('btnJogar').disabled = false;
    // chamando a função depois que tudo for sorteado
    exibirCartaJogador();
  }
  
  // função para obter o atributo selecionado
  function pegaAtributoSelecionado() {
    // manter o atributo selecionado
    var radioAtributos = document.getElementsByName('atributo');
  
    for (let i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  // função para jogar
  function jogar() {
  
    var atributoSelecionado = pegaAtributoSelecionado();
  
    var elementoResultado = document.getElementById('resultado');
  
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = `<p class="resultado-final">Venceu!</p>`
    } else if (valorCartaMaquina > valorCartaJogador) {
      elementoResultado.innerHTML = `<p class="resultado-final">Perdeu!</p>`
    } else {
      elementoResultado.innerHTML = `<p class="resultado-final">Empatou!</p>`
    }
    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina();
  }
  
  // função para exibir a carta do jogador na moldura
  function exibirCartaJogador() {
    // espacinho para colocar a imagem dentro da moldura
    var divCartaJogador = document.querySelector('#carta-jogador');
  
    // alterando o bg img e passando a imagem do obj
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  
  
    var moldura = '<img src="https://i.ibb.co/hH1XCBx/moldura-azul.png"\n' +  'style=" width: inherit; height: inherit; position: absolute;">'
  
    // ===== exibindo as opcoes embaixo da carta
    // criando a tag para criar as opcoes
    var tagHTML = `<div id="opcoes" class="carta-status">`
  
    // percorrendo os atributos e mostrando eles na tela
    var opcoesTexto = "";
    for (let atributo in cartaJogador.atributos) {
      opcoesTexto += `<input type="radio" name="atributo" value="${atributo}">${atributo} ${cartaJogador.atributos[atributo]}<br>`
    }
  
    //  adicionando o nome do personagem no topo da carta
    var nomePersonagem = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  
    //  Escrevendo as informações na tela.
    divCartaJogador.innerHTML = moldura + nomePersonagem + tagHTML + opcoesTexto + `</div>`;
  }
  
  function exibirCartaMaquina() {
    // espacinho para colocar a imagem dentro da moldura
    var divCartaMaquina = document.querySelector('#carta-maquina');
  
    // alterando o bg img e passando a imagem do obj
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  
    var moldura = '<img src="https://i.ibb.co/hH1XCBx/moldura-azul.png"\n' + 'style=" width: inherit; height: inherit; position: absolute;">'
  
    // ===== exibindo as opcoes embaixo da carta
    // criando a tag para criar as opcoes
    var tagHTML = `<div id="opcoes" class="carta-status">`
  
    // percorrendo os atributos e mostrando eles na tela
    var opcoesTexto = "";
    for (let atributo in cartaMaquina.atributos) {
      opcoesTexto += `<p>${atributo} ${cartaMaquina.atributos[atributo]}</p>`
    }
  
    //  adicionando o nome do personagem no topo da carta
    var nomePersonagem = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  
    //  Escrevendo as informações na tela.
    divCartaMaquina.innerHTML = moldura + nomePersonagem + tagHTML + opcoesTexto + `</div>`;
  }