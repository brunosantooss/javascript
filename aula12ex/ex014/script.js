function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#96CCD9'
        res.innerHTML ='BOM DIA!'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#F2D9BB'
        res.innerHTML = 'BOA TARDE!'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#354F4C'
        res.innerHTML = 'BOA NOITE!'
    }
}

