const Formulario = document.querySelector('.Formulario');
const resultados = document.querySelector('.resultados');
Formulario.addEventListener('submit', function recebeEventoForm(e) {
    e.preventDefault();
    const Titulo = Formulario.querySelector('.Titulo');
    const Descricao = Formulario.querySelector('.Descricao');
    const Quartos = Formulario.querySelector('.Quartos');
    const VagasDeGaragem = Formulario.querySelector('.VagasDeGaragem');
    const AreaDoTerreno = Formulario.querySelector('.AreaDoTerreno');
    const AreaConstruida = Formulario.querySelector('.AreaConstruida');
    const Localidade = Formulario.querySelector('.Localidade');
    const Preco = Formulario.querySelector('.Preco');
    const Imagem = Formulario.querySelector('.Imagem');
    alert("Dados inseridos, role a página para ver o anúncio");
    resultados.innerHTML +=
        "<section class=\"text-center\">\n" +
        "<h1 class=\"anuncio\">Anúncio</h1>\n" +
        "<hr />\n" +
        "<span>Título: " + Titulo.value + "</span><br>" +
        "<span>Descricao: " + Descricao.value + "</span><br>" +
        "<span>Quartos: " + Quartos.value + "</span><br>" +
        "<span>Vagas de Garagem: " + VagasDeGaragem.value + "</span><br>" +
        "<span>Área do Terreno: " + AreaDoTerreno.value + "</span><br>" +
        "<span>Área Construída: " + AreaConstruida.value + "</span><br>" +
        "<span>Localidade: " + Localidade.value + "</span><br>" +
        "<span>Preço: " + Preco.value + "</span><br>" +
        "<img src=\"" + Imagem.value + "\" alt=\"Imagem\" class=\"imagem\"width =\" 350\"/>" +
        "</section>"
});