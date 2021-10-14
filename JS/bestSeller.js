// Getting files from bestseller.json
const getBestSeller = async () => {
  try {
    const results = await fetch("./data/bestSeller.json");
    const data = await results.json();
    const bestSellers = data.bestSeller;
    return bestSellers;
  } catch (err) {
    console.log(err);
  }
};

const bestSellerFilter = document.querySelector("#bestSellerDiv-2");

window.addEventListener("DOMContentLoaded", async function () {
  const bestSellers = await getBestSeller();
  displayBestSellerItems(bestSellers);
});

const displayBestSellerItems = (items) => {
  let displayBestSeller = items.map(
    (bestSeller) => ` 
      <div class="bestSellerCard">
      <div class="bestSellerData">
          <div class="bsgridImage">
            <img src=${bestSeller.image} alt="Product Image">
          </div>

          <div class="bsGridText">
            <div class="bsGridWrapper">
            <div class="bestSellerName">
                <h1>${bestSeller.name}</h1>
            </div>
              <div class="bsProductInfo">
                  <div class="bsProductPrice">
                  <p>$${bestSeller.price}</p>
                  </div>
                  <i class="fas fa-shopping-cart"></i>
                </div>
            </div>
          </div>
      </div>

      <div class="bestSellerCardPopup">
          <i class="fas fa-heart"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-eye"></i>
      </div>
  </div>
        `
  );

  displayBestSeller = displayBestSeller.join("");
  if (bestSellerFilter) {
    bestSellerFilter.innerHTML = displayBestSeller;
  }
};

// ============================================
//                 Filter
// ============================================

const bestSellerButton = document.querySelectorAll(".bestSellerButton");
const bestSellerTitles = document.querySelectorAll(".bestSellerTitle");
const top20 = document.querySelector(`[data-tag='top20']`);
top20.classList.add("activeTab");

bestSellerTitles.forEach((bestSellerTitle) => {
  bestSellerTitle.addEventListener("click", async (e) => {
    const tag = bestSellerTitle.dataset.tag;
    const products = await getBestSeller();

    if (tag) {
      // remove active from buttons
      Array.from(bestSellerButton).forEach((btn) => {
        btn.classList.remove("activeTab");
      });
      bestSellerTitle.classList.add("activeTab");

      // Load Products
      let menuCategory = products.filter((product) => {
        if (product.type === tag) {
          return product;
        }
      });

      if (!tag) {
        displayBestSellerItems(menuCategory);
      } else {
        displayBestSellerItems(menuCategory);
      }
    }
  });
});
