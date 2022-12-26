// Descobrir idade

function calcularIdade() {

    var anoNasc = document.getElementById('iano-nasc').value;
    var sexo = document.getElementsByName('op-sexo');
    
    var nome = document.getElementById('inome').value

    // logica calculo de idade

    var ano = new Date();

    var anoAtual = ano.getFullYear();
    var idade = (anoAtual-anoNasc);

    var genero = ''

    

   
    // Condicional if 

    if(sexo[0]){
        genero = 'masculino'
    } if (idade >=0 && idade <= 3) {

        // bebê
        msg.innerHTML = (`Analise concluida !! <br> 'Pessoa do genero ${genero} com idade de ${idade} de anos`);
        imagem.src = '../img/bebe.png'

    } else if ( idade > 4 && idade <= 11){
        // criança
        msg.innerHTML = (`Analise concluida !! <br> 'Pessoa do genero ${genero} com idade de ${idade} de anos`);
        imagem.src = '../img/menino-5anos.png'

       
    } else if ( idade > 10 && idade <= 17){
        // criança
        msg.innerHTML = (`Analise concluida !! <br> 'Pessoa do genero ${genero} com idade de ${idade} de anos`);
        imagem.src = '../img/adolescente-homem.png'

    } else if ( idade > 18 && idade <= 29){
        // criança
        msg.innerHTML = (`Analise concluida !! <br> 'Pessoa do genero ${genero} com idade de ${idade} de anos`);
        imagem.src = '../img/homem-jovem.png'

    } else if ( idade > 30 && idade <= 59){
        // criança
        msg.innerHTML = (`Analise concluida !! <br> 'Pessoa do genero ${genero} com idade de ${idade} de anos`);
        imagem.src = '../img/homem-adulto.png'

    } else {
        // criança
        msg.innerHTML = (`Analise concluida !! <br> 'Pessoa do genero ${genero} com idade de ${idade} de anos`);
        imagem.src = '../img/homem-idoso.png'

    }
    

        // Feminino ----

        if(sexo[1]){
            genero = 'feminino'
        } if (idade >=0 && idade <= 3) {
    
            // bebê
            msg.innerHTML = (`Analise concluida !! <br> 'Pessoa do genero ${genero} com idade de ${idade} de anos`);
            imagem.src = '../img/bebe.png'
    
        } else if ( idade > 4 && idade <= 11){
            // criança
            msg.innerHTML = (`Analise concluida !! <br> 'Pessoa do genero ${genero} com idade de ${idade} de anos`);
            imagem.src = '../img/menina-5anos.png'
    
           
        } else if ( idade > 10 && idade <= 17){
            // criança
            msg.innerHTML = (`Analise concluida !! <br> 'Pessoa do genero ${genero} com idade de ${idade} de anos`);
            imagem.src = '../img/adolescente-mulher.png'
    
        } else if ( idade > 18 && idade <= 29){
            // criança
            msg.innerHTML = (`Analise concluida !! <br> 'Pessoa do genero ${genero} com idade de ${idade} de anos`);
            imagem.src = '../img/mulher-jovem.png'
    
        } else if ( idade > 30 && idade <= 59){
            // criança
            msg.innerHTML = (`Analise concluida !! <br> 'Pessoa do genero ${genero} com idade de ${idade} de anos`);
            imagem.src = '../img/mulher-adulta.png'
    
        } else {
            // criança
            msg.innerHTML = (`Analise concluida !! <br> 'Pessoa do genero ${genero} com idade de ${idade} de anos`);
            imagem.src = '../img/mulher-idosa.png'
            
        }
        

}