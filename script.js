function mandarmsg(){
    var screen = document.getElementById('screen-msg')
    if (document.getElementById('campo').value != ''){
        screen.appendChild(criarMsg())
        screen.scrollTop = screen.scrollHeight;
    }
   
}
function criarMsg(){
    //criar a div e inserir o texto
    var balao = document.createElement('div')
   balao.classList.add('balao')
    //criar o texto que foi escrito
    var msg =  document.createElement('p')
    
    msg.textContent = document.getElementById('campo').value
    balao.appendChild(msg)
    document.getElementById('campo').value = ''
   return balao
}