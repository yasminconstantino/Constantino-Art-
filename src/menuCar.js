import { datasheet, infoProduct } from './datasheet.js';

var bag = JSON.parse(localStorage.getItem('bag')) ?? [];

function openBagProduct() {
  document.getElementById('bag').classList.remove('closeBag');
  document.getElementById('bag').classList.add('openBag');
  document.getElementById('listOptions').classList.add('none');
}

function closeBagProduct() {
  document.getElementById('bag').classList.remove('openBag');
  document.getElementById('bag').classList.add('closeBag');
  document.getElementById('listOptions').classList.remove('none');
}

export function initializeBag() {
  const bagClose = document.getElementById('close-bag');
  const bagOpen = document.getElementById('open-bag');

  bagClose.addEventListener('click', closeBagProduct);
  bagOpen.addEventListener('click', openBagProduct);

  getProductInBag();
  updateBag();
}

function getProductInBag() {
  // const productBag = JSON.parse(localStorage.getItem(`bag`));
  var productBag = bag;
  const containerBag = document.getElementById('container-products-bag');
  containerBag.innerHTML = '';

  for (var item of productBag) {
    const cardProductBag = `<div id="item-${item.id}" class="product-bag">
    <img id=${item.id} class="img-car" alt="" src="assets/img/${item.nameFileImg1}">
    <div class="description-bag">
    <div id="name-${item.id}">${item.name} - ${item.brand}</div>
          <div class="flex">
            <div class="blockQtdProduct">
             <button id="btnDecrement-${item.id}" class="btnQtd btnDecrement">-</button>
                <div id="qtd-${item.id}">1</div>
              <button id="btnIncrement-${item.id}" class="btnQtd btnIncrement">+</button>
              </div>
            unidades 
          </div>
          <div class="price" id="price-${item.id}">$${item.price}
          </div>
        </div>
      <div>
        <button>
        <span id="btnDelete-${item.id}" class="material-icons-round btnDelete">
            delete_forever
          </span>
        </button>
        </div>
        </div>`;
    containerBag.innerHTML += cardProductBag;
  }
  addEventClick();
}

export function addInBag(idProduct) {
  const product = datasheet.find((p) => p.id === idProduct);
  var productBag = bag;
  var findInBag = productBag.find((p) => p.id === idProduct);

  if (findInBag !== undefined) {
    SwalAlert('error','Erro', 'O elemento já está no carrinho',2000,true,false);
  } else {
    bag.push(product);
    localStorage.setItem(`bag`, JSON.stringify(bag));
    getProductInBag();
    updateBag();
    SwalAlert('success', 'Sucesso','O item foi adicionado ao carrinho!',2000,true,false);
  }
}

export function addEventClick() {
  const buttonsDecrement = document.getElementsByClassName('btnDecrement');
  for (var x of buttonsDecrement) {
    let itemDec = x;
    itemDec.addEventListener('click', (event) => decrement(event));
  }
  const buttonsIncrement = document.getElementsByClassName('btnIncrement');
  for (var x of buttonsIncrement) {
    let itemInc = x;
    itemInc.addEventListener('mousedown', (event) => increment(event));
  }
  const buttonsDelete = document.getElementsByClassName('btnDelete');
  for (var x of buttonsDelete) {
    let itemDelete = x;
    itemDelete.addEventListener('click', (event) => deleteItem(event));
  }
  const btnImg = document.getElementsByClassName('img-car');
  for (var x of btnImg) {
    let btImg = x;
    btImg.addEventListener('click', (event) => infoProduct(event.target.id));
  }
}

function decrement(event) {
  const idItem = event.target.id;
  const numIdItem = idItem.substring(idItem.indexOf('-') + 1);
  const qtdItem = document.getElementById(`qtd-${numIdItem}`);

  if (qtdItem.innerText > 1) {
    qtdItem.innerText--;
  } else {
    toastAlert('error', 'Quantidade não pode ser menor que 1');
  }
  updateBag();
}
function increment(event) {
  const idItem = event.target.id;
  const numIdItem = idItem.substring(idItem.indexOf('-') + 1);

  const qtdItem = document.getElementById(`qtd-${numIdItem}`);
  qtdItem.innerText++;
  updateBag();
}

export function deleteItem(event) {
  const idItem = event.target.id;
  const numIdItem = idItem.substring(idItem.indexOf('-') + 1);
  const itemIndex = bag.findIndex((p) => p.id == numIdItem);
  bag.splice(itemIndex, 1);
  localStorage.setItem('bag', JSON.stringify(bag));
  getProductInBag();
  updateBag();
}

export function updateBag() {
  let totalValue = document.getElementById('valueTotalBag');
  let productsBag = document.getElementsByClassName('product-bag');
  let bagNotification = document.getElementById('bagNotification');

  let totalBag = 0;
  let totalProduct = 0;
  bagNotification.innerText = productsBag.length;

  for (var x of productsBag) {
    let productId = x.id;
    let numIdItem = productId.substring(productId.indexOf('-') + 1);

    let qtdItem = Number(document.getElementById(`qtd-${numIdItem}`).innerText);
    let valueProduct = Number(
      document.getElementById(`price-${numIdItem}`).innerText.substring(1)
    );

    totalProduct = qtdItem * valueProduct;
    totalBag += totalProduct;
  }
  totalValue.innerHTML = totalBag.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function toastAlert(icon, message) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    showCloseButton: true,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  Toast.fire({
    icon: icon,
    title: message,
  });
}
export function SwalAlert(
  icon,
  title,
  message,
  timer,
  buttonConfirm,
  butonCancel,
  timerProgressBar
) {
  swal.fire({
    icon: icon,
    title: title,
    text: message,
    timer: timer,
    showConfirmButton: buttonConfirm,
    showCancelButton: butonCancel,
    timerProgressBar: timerProgressBar,
  });
}







