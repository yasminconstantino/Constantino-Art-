import {
    addInBag,
    initializeBag,
    addEventClick,
    SwalAlert,
  } from './menuCar.js';
  import { getAddress } from './APiCep.js';
  
  function getInfoProduct() {
    const imagMain = document.getElementById('imgMain');
    const description = document.getElementById('description');
    const imagPq1 = document.getElementById('imgPq1');
    const imagPq2 = document.getElementById('imgPq2');
    const imagPq3 = document.getElementById('imgPq3');
    const imagPq4 = document.getElementById('imgPq4');
    const nameDatails = document.getElementById('nameDatails');
    const priceDetails = document.getElementById('priceDetails');
    const payment = document.getElementById('payment');
    const addBag = document.getElementById('addBag');
    const product = JSON.parse(localStorage.getItem('infoProduct'));
  
    imagMain.src = `assets/img/${product.nameFileImg1}`;
    imagPq1.src = `assets/img/${product.nameFileImg2}`;
    imagPq2.src = `assets/img/${product.nameFileImg3}`;
    imagPq3.src = `assets/img/${product.nameFileImg4}`;
    imagPq4.src = `assets/img/${product.nameFileImg1}`;
  
    description.innerText = product.description;
    nameDatails.innerText = product.name;
  
    let priceReal = product.price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    priceDetails.innerText = priceReal;
    payment.innerText = `Em 10x de ${(product.price / 10).toLocaleString(
      'pt-BR',
      {
        style: 'currency',
        currency: 'BRL',
      }
    )} sem juros`;
    addBag.addEventListener('click', () => addInBag(product.id));
  }
  
  const imgMain = document.getElementById('imgMain');
  const imgHover = document.getElementsByClassName('imgPq');
  
  for (let img of imgHover) {
    const imgHoverBt = img;
    imgHoverBt.addEventListener('mouseleave', (event) => mouseMove(event));
  }
  export function infoProduct(id) {
    const idItem = id;
    const product = datasheet.find((p) => p.id == idItem);
    localStorage.setItem('infoProduct', JSON.stringify(product));
    window.location.href = 'detailsProduct.html';
  }
  function mouseMove(event) {
    const srcImg = event.target.src;
    imgMain.src = srcImg;
  }
  initializeBag();
  getInfoProduct();
  addEventClick();
  
  let btnSearch = document.getElementById('searchCep');
  btnSearch.addEventListener('click', getCep);
  
  function getCep() {
    var cep = document.getElementById('getCep').value;
    getAddress(cep);
  }
  let btnBuy = document.getElementById('buy');
  var cep = document.getElementById('getCep');
  btnBuy.addEventListener('click', () => {
    if (cep.value != '') {
      getAddress(cep.value)
      SwalAlert(
        'success',
        'Compra finalizada! :)',
        'Sua compra foi efetuada com sucesso! :D',
        2000,
        true,
        false,
        false
      );
    } else {
      SwalAlert(
        'error',
        'Campo não preenchido! :(',
        'Informe o Cep!',
        2000,
        true,
        false,
        false
      );
    }
  });
  