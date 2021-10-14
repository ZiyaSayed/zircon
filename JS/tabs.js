const getProducts = async () => {
  try {
    const results = await fetch("./data/tabs.json");
    const data = await results.json();
    const products = data.products;
    return products;
  } catch (err) {
    console.log(err);
  }
};
const productFilter = document.querySelector("#productFilterDiv-2");

window.addEventListener("DOMContentLoaded", async function () {
  const products = await getProducts();
  displayProductItems(products);
});

const displayProductItems = (items) => {
  let displayProduct = items.map(
    (product) => ` 
                        <div class="productCard">
                          <div class="product">
                            <div class="productImage">
                                <img src=${product.image} alt="Product Image">
                            </div>

                            <div class="productData">
                                <div class="productName">
                                <h1>${product.name}</h1>
                                </div>
                                <div class="productinfo">
                                    <div class="productPrice">
                                        <p>$${product.price}</p>
                                    </div>
                                    <div class="basketIcon">
                                        <i class="fas fa-shopping-cart"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="productCardPopup">
                        <i class="fas fa-heart"></i>
                        <i class="far fa-eye"></i>
                      </div>
                      </div>
                    `
  );

  displayProduct = displayProduct.join("");
  if (productFilter) {
    productFilter.innerHTML = displayProduct;
  }
};

// ============================================
//                 Filter
// ============================================

const filterButton = document.querySelectorAll(".filterButton");
const titles = document.querySelectorAll(".categoryTitle");

titles.forEach((title) => {
  title.addEventListener("click", async (e) => {
    const id = title.dataset.id;
    const products = await getProducts();

    if (id) {
      // remove active from buttons
      Array.from(filterButton).forEach((btn) => {
        btn.classList.remove("activeTab");
      });
      title.classList.add("activeTab");

      // Load Products
      let menuCategory = products.filter((product) => {
        if (product.type === id) {
          return product;
        }
      });

      if (!id) {
        displayProductItems(products);
      } else {
        displayProductItems(menuCategory);
      }
    }
  });
});
