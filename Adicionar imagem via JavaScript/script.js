function adicionarImagem() {
    let result = window.document.querySelector('div#resultado');

    

    var img = window.document.createElement('img');
    var img2 = window.document.createElement('img');
    img.setAttribute('src', '../img/ponte.png');
    img2.setAttribute('src', '../img/entardecer.jpeg')
    result.appendChild(img);
    result.appendChild(img2);
}