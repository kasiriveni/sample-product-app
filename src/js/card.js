function renderCard(products) {
  const card = document.getElementById("card");

  const cardHtml = products.map(
    ({
      id,
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
    }) => {
      return `
        <div class="right-container">
          <div class="card-header">
            <img
              src="${thumbnail}"
              alt="${title}"
            />
            <div class="card-number">${id}</div>
          </div>
          <div class="desc">${title}</div>
  
          <p>${description}</p>
          <div class="sub-content">
            <div>
            <p class="desc">Price</p>
            <p class="value">${price}$</p>
            </div>
  
            <div>
            <p class="desc">DiscountPercentage</p>
            <p class="value">${discountPercentage}$</p>
            </div>
  
            <div>
            <p class="desc">Rating</p>
            <p class="value">${rating}</p>
            </div>
  
            <div>
            <p class="desc">Stock</p>
            <p class="value">${stock}</p>
            </div>
  
            <div>
            <p class="desc">Brand</p>
            <p class="value">${brand}</p>
            </div>

            <div>
            <p class="desc">Category</p>
            <p class="value">${category}</p>
            </div>
          </div>
        </div>`;
    }
  );
  card.innerHTML = cardHtml;
}

export { renderCard };
