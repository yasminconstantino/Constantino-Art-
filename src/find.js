import { datasheet, productGenerate } from './datasheet.js';

export function findProduct() {
  const inputFind = document.getElementById('search-text');
  const btnFind = document.getElementById('icoSearch');
  inputFind.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      find(inputFind);
    }
  });
  btnFind.addEventListener('click',()=>find(inputFind));
}

function find(inputFind) {
  const findText = inputFind.value.toUpperCase();
  const arrayFind = datasheet.filter((p) =>
    p.name.toLocaleUpperCase().includes(findText)
  );
  productGenerate(arrayFind);
}
var interval = null;

  const btnCapa = document.getElementsByClassName('btnImgCapa')
  const imgCapa = document.getElementById('slider')
  imgCapa.addEventListener('mouseenter', () => clearInterval(interval))
  imgCapa.addEventListener('mouseleave', () => nextImage())
  
  for (var bt of btnCapa) {
    bt.addEventListener('click', (event) => transitionCapa(event.target.id))
  }


function transitionCapa(event) {
  var id = Number(event);
  const img1 = document.getElementById('img1')
  switch (id) {
    case 1:
      img1.style.marginLeft = '0%';
      break;
    case 2:
      img1.style.marginLeft = '-25%';
      break;
    case 3:
      img1.style.marginLeft = '-50%';
      break;
    case 4:
      img1.style.marginLeft = '-75%';
      break;
  }
}
let count = 1;

function nextImage() {
  interval = setInterval(() => {
    count++;
    if (count > 4) {
      count = 1;
    }
    transitionCapa(count);
  }, 5000);
}
nextImage();