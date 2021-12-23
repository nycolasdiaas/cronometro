"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; // Quantos milésimos valem 1s?
var cron;

//Iniciar o temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}


//Para o temporizador, mas não limpa as variáveis
function pause(){
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop(){
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    
    document.getElementById('counter').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer(){ 
    ss++; //Incrementa +1 na var ss

    if(ss == 59){//Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Incrementa +1 na var mm
    
        if(mm == 59){
            mm = 0;
            hh++;
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
        var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ?  '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    //INsere o valor tratato no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratato
    return format;
}
