import { initializeBag } from "./src/menuCar.js";
import { datasheet, productGenerate } from "./src/datasheet.js";
import { menuAlignleft } from "./src/menuListFilters.js";
import { addFilter } from "./src/menuListFilters.js";
import { findProduct } from "./src/find.js";

productGenerate(datasheet);
initializeBag();
menuAlignleft();
addFilter();
findProduct();
