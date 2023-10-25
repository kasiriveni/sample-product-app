function getMoreProduct(product) {
  const moreCards = document.getElementById("similar-card");

  const moreImages = product.map(({ images }) => {
    const getImages = images.map((item) => {
      return `
        <div class="left-container">
        <h4>Similar Details</h4>
          <img
            src="${item}"
            alt=""
            class="left-img"
          />

        </div>
        `;
    });
    return getImages;
  });

  moreCards.innerHTML = moreImages;
}

export { getMoreProduct };
