/*import { datasheet, productGenerate } from './datasheet.js';

export function menuAlignleft() {
  const btnOpenMenu = document.getElementById('listOptions');
  const btnCloseMenu = document.getElementById('closeMenu');
  const main = document.getElementById('container-card-product');

  function openMenu() {
    document.getElementById('blockListOptions').classList.add('openList');
    document.getElementById('closeMenu').classList.add('flex');
    document.getElementById('listOptions').classList.add('none');
  }
  function closeList() {
    document.getElementById('blockListOptions').classList.remove('openList');
    document.getElementById('closeMenu').classList.remove('flex');
    document.getElementById('listOptions').classList.remove('none');
  }

  btnOpenMenu.addEventListener('click', openMenu);
  btnCloseMenu.addEventListener('click', closeList);
  main.addEventListener('click',closeList);
}

export function addFilter() {
  const btnFilter = document.getElementsByClassName('btnFilter');
  for (let bt of btnFilter) {
    let btFilter = bt;
    btFilter.addEventListener('click', (event) => filter(event));
  }
}

function filter(event) {
  const filterCategorie = event.target.innerText;

  if (filterCategorie === 'Todos') {
    productGenerate(datasheet);
  } else {
    const newDatasheet = datasheet.filter(
      (product) => product.categorie === filterCategorie
    );
    productGenerate(newDatasheet);
  }
}*/

import { datasheet, productGenerate } from './datasheet.js';

export function menuAlignleft() {
  const btnOpenMenu = document.getElementById('listOptions');
  const btnCloseMenu = document.getElementById('closeMenu');
  const main = document.getElementById('container-card-product');

  function openMenu() {
    document.getElementById('blockListOptions').classList.add('openList');
    document.getElementById('closeMenu').classList.add('flex');
    document.getElementById('listOptions').classList.add('none');
  }

  function closeList() {
    document.getElementById('blockListOptions').classList.remove('openList');
    document.getElementById('closeMenu').classList.remove('flex');
    document.getElementById('listOptions').classList.remove('none');
  }

  btnOpenMenu.addEventListener('click', openMenu);
  btnCloseMenu.addEventListener('click', closeList);
  main.addEventListener('click', closeList);
}

export function addFilter() {
  const btnFilter = document.getElementsByClassName('btnFilter');
  for (let bt of btnFilter) {
    let btFilter = bt;
    btFilter.addEventListener('click', (event) => filter(event));
  }
}

function filter(event) {
  const filterCategorie = event.target.innerText;

  if (filterCategorie === 'Todos') {
    productGenerate(datasheet);
  } else {
    const newDatasheet = datasheet.filter(
      (product) => product.categorie === filterCategorie
    );
    productGenerate(newDatasheet);
  }
}


