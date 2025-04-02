document.addEventListener('DOMContentLoaded', function(){
    let tamanhoAtuaFonte= 1;
    const aumentaFonteBotao= document.getElementById('aumnetar-fonte');

    aumentarFonteBotao.addEventListener('click', function(){
        tamanhoAtuaFonte += 0.1;
        document.body.style.fontSiz=`${tamanhoAtuaFonte}rem`;
    })
    const diminuirFonteBotao= document.getElementById('diminuir-fonte');
    diminuirFonteBotao.addEventListener('click', function(){
        tamanhoAtuaFonte -= 0.1;
        document.body.style,fontSize= '${tamanhoAtualFonte}rem';
    })
})