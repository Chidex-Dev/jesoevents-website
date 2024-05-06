function removeItemFromCart(whichItem) {
  userCarts.splice(whichItem?.id - 1, 1);
  localStorage.setItem("user-carts", JSON.stringify(userCarts));
  checkUserCarts();
}

function checkUserCarts() {
  userCarts = JSON.parse(localStorage.getItem("user-carts"));

  let userCartListing = "";
  let cartId = 0;
  let totalAmount = 0;
  let allItemsQuantity = 0;

  if (userCarts?.length > 0) {
    userCarts.forEach((cartItem) => {
      cartId += 1;
      totalAmount += cartItem?.quantity * cartItem?.price;
      allItemsQuantity += Number(cartItem?.quantity);
      userCartListing += `
      <div class="qodef-woo-dropdown-item qodef-e">
        <div class="qodef-e-image">
          <a ><img width="600" height="734"
              src="${cartItem?.image}"
              class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="u" loading="lazy"></a>
        </div>
        <div class="qodef-e-content">
          <h6 itemprop="name" class="qodef-e-title entry-title">
            <a href="https://banquet.qodeinteractive.com/product/minimal-vase/">${cartItem?.title}</a>
          </h6>
          <p class="qodef-e-price"><span class="woocommerce-Price-amount amount"><bdi>${cartItem?.price}<span
                  class="woocommerce-Price-currencySymbol">$</span></bdi></span></p>
          <p class="qodef-e-quantity">Quantity: ${cartItem?.quantity}</p>
          <a onclick="removeItemFromCart(this)" id="${cartId}"
            class="qodef-e-remove remove" title="Remove this item"><span
              class="qodef-icon-elegant-icons icon_close"></span></a>
        </div>
      </div>
      `;
    });
    document.querySelectorAll(".qodef-m-opener-count").forEach((cartCount) => {
      cartCount.innerHTML = `(${allItemsQuantity})`;
    });

    document.getElementById("cart-items").innerHTML = `
        <div class="${userCarts?.length > 5 ? "cart-maintain" : null}">
            ${userCartListing}
        </div>
        <br>
        <br>
        <div class="qodef-m-order-details" style="margin-top: 15px;">
            <h6 class="qodef-m-order-label">Total:</h6>
        <div class="qodef-m-order-amount"><span class="woocommerce-Price-amount amount"><bdi>${totalAmount}<span
                class="woocommerce-Price-currencySymbol">$</span></bdi></span></div>
        </div>
        <div class=" button wp-element-button product_type_simple add_to_cart_button" style="width:100%">
            <a itemprop="url" href="/cart" class="qodef-m-action-link">Checkout</a>
        </div>`;
    document.getElementById("cart-items-mobile").innerHTML = `
        <div class="${userCarts?.length > 5 ? "cart-maintain" : null}">
            ${userCartListing}
        </div>
        <br>
        <br>
        <div class="qodef-m-order-details" style="margin-top: 15px;">
            <h6 class="qodef-m-order-label">Total:</h6>
        <div class="qodef-m-order-amount"><span class="woocommerce-Price-amount amount"><bdi>${totalAmount}<span
                class="woocommerce-Price-currencySymbol">$</span></bdi></span></div>
        </div>
        <div class=" button wp-element-button product_type_simple add_to_cart_button" style="width:100%">
            <a itemprop="url" href="/cart" class="qodef-m-action-link">Checkout</a>
        </div>`;
  } else {
    document.getElementById(
      "cart-items"
    ).innerHTML = `<p class="qodef-m-posts-not-found qodef-grid-item">No products in the cart.</p>`;
    document.getElementById(
      "cart-items-mobile"
    ).innerHTML = `<p class="qodef-m-posts-not-found qodef-grid-item">No products in the cart.</p>`;
    document.querySelectorAll(".qodef-m-opener-count").forEach((cartCount) => {
      cartCount.innerHTML = "(0)";
    });
  }
}

checkUserCarts();
