function zeroFill(n) {
    return n < 9 ? `0${n}` : `${n}`;// se (n) for menor que 9 recebe zero na frente
  }                                  // se for maior só recebe (n)
  
  function formatDate(date) {             
    const day = zeroFill(date.getDate());
    const month = zeroFill(date.getMonth() + 1);
    const year = zeroFill(date.getFullYear());  /* função para formatar data*/
    const hour = zeroFill(date.getHours());
    const mi = zeroFill(date.getMinutes());
    const sec = zeroFill(date.getSeconds());
  
    return `${day}/${month}/${year} ${hour}:${mi}:${sec}`;
  }
  

  function render(data) {
    const date = document.querySelector('.date'); // função para renderizar  na tela
    date.innerHTML = data;
  }
  
  // ISO 8601
  // 20/04/2019 10:00:00
  const stringDate = '2021-12-28T10:00:00-03:00';
  
  // const dataAtual = new Date(stringDate);
  // const dataFinal = new Date('2021-12-29T10:00:00-03:00');
  // const result = dataFinal - dataAtual;
  // //             ms       s     m   h    d
  // const time = result / 1000 / 60 / 60 / 24;

  let segundos = 0
  let minutos = 0
  let horas = 0
  let mes = 0
  let ano = 0
  let dia = 0
  
  const data = new Date(stringDate);
  data.setSeconds(data.getSeconds() + segundos);
  data.setMinutes(data.getMinutes() + minutos);
  data.setHours(data.getHours() + horas);
  data.setDate(data.getDate() + dia);
  data.setMonth(data.getMonth() + mes);
  data.setFullYear(data.getFullYear() + ano);
  
  render(formatDate(data));