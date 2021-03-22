function setWeather() {
    let select = document.querySelector('select')
    let para = document.querySelector('p')
    let choice = select.value

  if (choice === 'sunny') {
    para.textContent = 'Hoje está bom e ensolarado lá fora. Use shorts! Vá à praia ou ao parque e tome um sorvete. '
  } else if (choice === 'rainy') {
    para.textContent = 'A chuva está caindo lá fora; leve uma capa de chuva e um guarda-chuva, e não fique fora por muito tempo. '
  } else if (choice === 'snowing') {
    para.textContent = 'A neve está caindo - está congelando! Melhor ficar em casa com uma xícara de chocolate quente ou construir um boneco de neve. '
  } else if (choice === 'overcast') {
    para.textContent = 'Não está chovendo, mas o céu está cinza e sombrio; pode chover a qualquer minuto, então leve uma capa de chuva para o caso. '
  } else {
    para.textContent = ''
  }
}