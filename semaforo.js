const verde1 = document.getElemntoById('verde1')
const amarelo1 = document.getElemntoById('amarelo1')
const vermelho1 = document.getElemntoById('verde1')
const verde2 = document.getElemntoById('verde2')
const amarelo2 = document.getElemntoById('amarelo2')
const vermelho2 = document.getElemntoById('vermelho2')

function AlternarSemaforo(verde1_apaga, amarelo1_acende,amarelo1_apaga, vermelho1_acende, vermelho2_apaga,verde2_acende) {
verde1_apaga.style.backgroundColor = rgba(37, 87, 37, 1);
amarelo1_acende.style.backgroundColor = rgb(255, 255, 0);
setTimeout(() => {
amarelo1_apaga.style.backgroundColor =  rgb(100, 100, 0);
vermelho1_acende.style.backgroundColor =rgba(156, 57, 57, 1);
vermelho2_apaga.backgroundColor =  rgb(100, 37, 37);
verde2_acende.style.backgroundColor =  rgb(32, 233, 32);
},2000) 

}

// ligando o semáforo
verde1.style.backgroundColor =  rgb(32, 233, 32);
vermelho2.style.backgroundColor = rgb(224, 17, 17);

// Trocando o sentido 
seTimeout (() => {
    AlternarSemaforo(verde1,amarelo1,amarelo1,vermelho1,vermelho2,verde2)
}, 5000)