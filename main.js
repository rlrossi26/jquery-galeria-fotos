$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const linkNovaImagem = $('#link-nova-imagem').val();
        const novoItem = $('<li style="display: none"></li>');

        $(`<img src="${linkNovaImagem}" title="Ver imagem em tamanho real">`).appendTo(novoItem);
        $(`<div class="link-imagem"><a href="${linkNovaImagem}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a></div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul')
        $('#link-nova-imagem').val('')
        $(novoItem).fadeIn(1000);
    })
    
});