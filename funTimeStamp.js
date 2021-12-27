
// //Através da contagem de millissegundos é possivél determinar dia,hora,minutos, segundos e millissegundos de 
// //uma determinada data, o marco zero inicia dia 1 de janeiro de 1970 às 00:00:00 e se extende até agora.



// const data = new Date();//pega  a data e hora atual
// const novaData = new Date();//pega  a data e hora atual
// novaData.setTime(data.getTime())//novaData recebe o data formatada para millissegundos


// console.log(novaData)
// console.log(data.getTime())
// console.log(data)
// const agora = new Date()



// // const dia = 24 * 60 * 60  * 1000 // 5184000000
// // const hora = 60 * 60  * 1000 // 3600000
// // const minuto = 60 * 1000 // 60000

// // converte os dias,horas,minutos em millisssegundos
function timeStampCont (dia, hora, minuto) {
    let Dia = dia
    let Hora = hora
    let Minuto = minuto

    let mDia = Dia * 5184000000
    let mHora = Hora * 3600000
    let mMinu = Minuto * 60000

    console.log(Dia,'dia(s), equivale a',mDia,'Milissegundos')
    console.log(Hora,'hora(s), equivale a',mHora,'Milissegundos')
    console.log(Minuto,'minuto(s), equivale a',mMinu,'Milissegundos')
    
}
timeStampCont(5,1,90)



let dataCompleta = new Date(1986, 2, 26, 12, 30);
let teste = Date.now()//retorna data atual em formato de millissegundos
let teste2 = new Date()// retorna data atual em formato de data
let teste3 = dataCompleta.getTime()// pegando o timestamp do dataCompleta
let teste3Formater = new Date(512235000000)// formatando para string para confirmar se veio certo a data.


console.log(dataCompleta)

console.log('esse1',teste)
console.log('esse2',teste2)
console.log('esse3',teste3)
console.log(teste3Formater)