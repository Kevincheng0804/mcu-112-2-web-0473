import { Product } from "./product";

const product = new Product(1, "圖像 Angular 開發入門 第二版", "博碩文化", 500, true, new Date(2024, 4, 23), undefined);

const product2 = new Product(1, "金魚都能懂得 CSS 必學屬性", "博碩文化", 500, true, new Date(2024, 4, 23), undefined);

const products = [product, product2];
//console.log(products[0]);
//console.log(products[1]);
setProductDisplay(products[1], false);
console.log(products);

function setProductDisplay(product: Product, isShow: boolean) {
  product.isShow = isShow;
}
//npx ts-node ./src/index.ts
