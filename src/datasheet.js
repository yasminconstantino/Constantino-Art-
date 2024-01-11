import { addInBag } from './menuCar.js';

export const datasheet = [
  {
    id: 1,
    brand: 'YC Art',
    name: 'Dog Fiona',
    description: `Gráfite sobre papel 180g.`,
    price: 249.9,
    nameFileImg1: 'product-1-1.jpg',
    categorie: 'Animais',
  },
  {
    id: 2,
    brand: 'YC Art',
    name: 'Dog Conan',
    description: `Gráfite sobre papel 180g.`,
    price: 249.9,
    nameFileImg1: 'product-2-1.jpg',
    categorie: 'Animais',
  },
  {
    id: 3,
    brand: 'YC Art',
    name: 'Dog Jerpy',
    description: `Gráfite sobre papel 180g.`,
    price: 249.9,
    nameFileImg1: 'product-3-1.jpg',
    categorie: 'Animais',
  },
  {
    id: 4,
    brand: 'YC Art',
    name: 'Carro Fiat 147',
    description: `Gráfite, caneta e lápis de cor sobre papel 180g.`,
    price: 249.9,
    nameFileImg1: 'product-4-1.jpg',
    categorie: 'Carros',
  },
  {
    id: 5,
    brand: 'YC Art',
    name: 'Carro Ford Maverick',
    description: `Gráfite, caneta e lápis de cor sobre papel 180g.`,
    price: 249.9,
    nameFileImg1: 'product-5-1.jpg',
    categorie: 'Carros',
  },
  {
    id: 6,
    brand: 'YC Art',
    name: 'Carro Lada Nida',
    description: `Gráfite, caneta e lápis de cor sobre papel 180g.`,
    price: 249.9,
    nameFileImg1: 'product-6-1.jpg',
    categorie: 'Carros',
  },
  {
    id: 7,
    brand: 'YC Art',
    name: 'Carro Ford Mustang',
    description: `Tinta aquarela e caneta sobre papel 180g.`,
    price: 289.9,
    nameFileImg1: 'product-7-1.jpg',
    categorie: 'Carros',
  },
  {
    id: 8,
    brand: 'YC Art',
    name: 'Dog Tonha',
    description: `Gráfite sobre papel 180g.`,
    price: 249.9,
    nameFileImg1: 'product-8-1.jpg',
    categorie: 'Animais',
  },

  {
    id: 9,
    brand: 'YC Art',
    name: 'Dog Simba',
    description: `Gráfite sobre papel 180g.`,
    price: 249.9,
    nameFileImg1: 'product-9-1.jpg',
    categorie: 'Animais',
  },
  {
    id: 10,
    brand: 'YC Art',
    name: 'Dog Argos',
    description: `Gráfite sobre papel 180g.`,
    price: 249.9,
    nameFileImg1: 'product-10-1.jpg',
    categorie: 'Animais',
  },
  {
    id: 11,
    brand: 'YC Art',
    name: 'Carro VW Gol Branco',
    description: `Gráfite, caneta e lápis de cor sobre papel 180g.`,
    price: 249.9,
    nameFileImg1: 'product-11-1.jpg',
    categorie: 'Carros',
  },

  {
    id: 12,
    brand: 'YC Art',
    name: 'Carro VW Fusca',
    description: `Gráfite, caneta e lápis de cor sobre papel 180g.`,
    price: 289.9,
    nameFileImg1: 'product-12-1.jpg',
    categorie: 'Carros',
  },
  {
    id: 13,
    brand: 'YC Art',
    name: 'Dog Bruce',
    description: `Gráfite sobre papel 180g.`,
    price: 249.9,
    nameFileImg1: 'product-13-1.jpg',
    categorie: 'Animais',
  },
  {
    id: 14,
    brand: 'YC Art',
    name: 'Dog Ravenna',
    description: `Gráfite sobre papel 180g.`,
    price: 249.9,
    nameFileImg1: 'product-14-1.jpg',
    categorie: 'Animais',
  },

  {
    id: 15,
    brand: 'YC Art',
    name: 'Dog Duque',
    description: `Gráfite sobre papel 180g.`,
    price: 249.9,
    nameFileImg1: 'product-15-1.jpg',
    categorie: 'Animais',
  },
  {
    id: 16,
    brand: 'YC Art',
    name: 'TCarro VW Gol Rosa',
    description: `Gráfite, caneta e lápis de cor sobre papel 180g.`,
    price: 289.9,
    nameFileImg1: 'product-16-1.jpg',
    categorie: 'Carros',
  },
  {
    id: 17,
    brand: 'YC Art',
    name: 'Carro VW Gol Vermelho',
    description: `Gráfite, caneta e lápis de cor sobre papel 180g.`,
    price: 289.9,
    nameFileImg1: 'product-17-1.jpg',
    categorie: 'Carros',
  },
  {
    id: 18,
    brand: 'YC Art',
    name: 'Carro Cherolet Opala',
    description: `Gráfite sobre papel 180g.`,
    price: 249.9,
    nameFileImg1: 'product-18-1.jpg',
    categorie: 'Carros',
  },
  {
    id: 19,
    brand: 'YC Art',
    name: 'Cavalo',
    description: `Gráfite sobre papel 180g.`,
    price: 249.9,
    nameFileImg1: 'product-19-1.jpg',
    categorie: 'Animais',
  },
  {
    id: 20,
    brand: 'YC Art',
    name: 'Elfo Dobby',
    description: `Gráfite sobre papel 180g.`,
    price: 249.9,
    nameFileImg1: 'product-20-1.jpg',
    categorie: 'Animais',
  },
  {
    id: 21,
    brand: 'YC Art',
    name: 'Carro VW Golf',
    description: `Gráfite, caneta e lápis de cor sobre papel 180g.`,
    price: 289.9,
    nameFileImg1: 'product-21-1.jpg',
    categorie: 'Carros',
  },
  {
    id: 22,
    brand: 'YC Art',
    name: 'Carro Chevrolet Celta',
    description: `Gráfite, caneta e lápis de cor sobre papel 180g.`,
    price: 289.9,
    nameFileImg1: 'product-22-1.jpg',
    categorie: 'Carros',
  },
  {
    id: 23,
    brand: 'YC Art',
    name: 'Carro Ford Escort',
    description: `Gráfite, caneta e lápis de cor sobre papel 180g.`,
    price: 289.9,
    nameFileImg1: 'product-23-1.jpg',
    categorie: 'Carros',
  },
  {
    id: 24,
    brand: 'YC Art',
    name: 'Cavalo e homem',
    description: `Gráfite sobre papel 180g.`,
    price: 249.9,
    nameFileImg1: 'product-24-1.jpg',
    categorie: 'Animais',
  },
  {
    id: 25,
    brand: 'YC Art',
    name: 'Carro VW Saveiro',
    description: `Gráfite, caneta e lápis de cor sobre papel 180g.`,
    price: 289.9,
    nameFileImg1: 'product-25-1.jpg',
    categorie: 'Carros',
  },
];
const newDatasheet = datasheet;

export function productGenerate(newDatasheet) {
  document.getElementById('container-card-product').innerHTML = '';
  for (const product of newDatasheet) {
    const cardProduct = `<div id="card-product-${product.id}" class='card'>
      <img id="imgProduct1-${product.id
      }" class='imgProduct imgProduct1 opacity1'src="./assets/img/${product.nameFileImg1
      }"> 
      <img id="imgProduct2-${product.id
      }" class='imgProduct imgProduct2 opacity0'src="./assets/img/${product.nameFileImg2
      }" 
      alt="Produto ${product.id} da Magazine Hashtag"/>
      <p class='description text'>${product.name} - ${product.brand}</p>
        <div class="blockPrice">
          <div>
            <p class='price text'>
              R$${product.price.toFixed(2)}
            </p>
            <p class='priceBefore text'>
              R$${(product.price * 1.1).toFixed(2)}
            </p>
          </div>
          <button id="btnProduct-${product.id}" class="btnAdd"> 
          <span class="material-icons-outlined">
          local_mall
          </span>
          </button>
        </div>`;
    document.getElementById('container-card-product').innerHTML += cardProduct;
  }
  for (const product of newDatasheet) {
    document
      .getElementById(`btnProduct-${product.id}`)
      .addEventListener('click', () => addInBag(product.id));
    document
      .getElementById(`imgProduct2-${product.id}`)
      .addEventListener('click', () => infoProduct(product.id));
  }
  var imgCard = document.getElementsByClassName('imgProduct');
  for (var img of imgCard) {
    img.addEventListener('mouseenter', (event) => mouseOver(event));
    img.addEventListener('mouseleave', (event) => mouseOut(event));
  }
}

function mouseOver(event) {
  const id = event.target.id;
  const idNum = id.substring(id.indexOf('-') + 1);
  const img1 = document.getElementById(`imgProduct1-${idNum}`);
  const img2 = document.getElementById(`imgProduct2-${idNum}`);
  img1.classList.remove('opacity1');
  img1.classList.add('opacity0');
  img2.classList.remove('opacity0');
  img2.classList.add('opacity1');
}
function mouseOut(event) {
  const id = event.target.id;
  const idNum = id.substring(id.indexOf('-') + 1);
  const img1 = document.getElementById(`imgProduct1-${idNum}`);
  const img2 = document.getElementById(`imgProduct2-${idNum}`);
  img1.classList.add('opacity1');
  img1.classList.remove('opacity0');
  img2.classList.add('opacity0');
  img2.classList.remove('opacity1');
}
export function infoProduct(id) {
  const idItem = id;
  const product = datasheet.find((p) => p.id == idItem);
  localStorage.setItem('infoProduct', JSON.stringify(product));
  window.location.href = 'detailsProduct.html';
}

