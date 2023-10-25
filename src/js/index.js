import "../scss/style.scss";

import { getProduct } from "./product";
import { API_URL } from "./api";
import { renderCard } from "./card";
import { getMoreProduct } from "./moreProducts";

const productDetails = getProduct(API_URL);

productDetails.then((data) => {
  const { products } = data;

  renderCard(products);

  getMoreProduct(products);
});
