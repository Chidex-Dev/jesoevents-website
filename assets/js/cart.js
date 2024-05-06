
// let productPrice = document.querySelector('.woocommerce-Price-amount').children[0].childNodes[0].data
// let  productTitle = document.querySelector('.product_title').innerHTML.trim();
// let productQuantity = document.getElementById('quantity_6586011e78745').value;
// let productImage = document.querySelector('.wp-post-image').src;

// console.log(document.querySelector('.woocommerce-Price-amount').children[0].childNodes[0].data)
function addProduct() {
    let productPrice = document.querySelector('.woocommerce-Price-amount').children[0].childNodes[0].data
    let productTitle = document.querySelector('.product_title').innerHTML.trim();
    let productQuantity = document.getElementById('quantity_6586011e78745').value;
    let productImage = document.querySelector('.wp-post-image').src;
    let cardQuantity = document.querySelector('.qodef-m-opener-count');

    let cartContainerItem = `
<div class="qodef-woo-dropdown-item qodef-e">
            <div class="qodef-e-image">
                <a><img width="600" height="734" src="${productImage}" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="e" loading="lazy"></a>				</div>
            <div class="qodef-e-content">
                <h6 itemprop="name" class="qodef-e-title entry-title">
                    <a>${productTitle}</a>					</h6>
                <p class="qodef-e-price"><span class="woocommerce-Price-amount amount"><bdi>${productPrice}<span class="woocommerce-Price-currencySymbol">$</span></bdi></span></p>
                <p class="qodef-e-quantity">Piece: ${productQuantity}</p>
                <a href="https://banquet.qodeinteractive.com/cart/?remove_item=82aa4b0af34c2313a562076992e50aa3&amp;_wpnonce=4fd39c6539" class="qodef-e-remove remove" title="Remove this item"><span class="qodef-icon-elegant-icons icon_close"></span></a>				</div>
        </div>
`

    let cartContainerList = `
<div class="qodef-woo-dropdown-items">
            ${cartContainerItem}
    </div>
    <div class="qodef-m-order-details">
        <h6 class="qodef-m-order-label">Total:</h6>
        <div class="qodef-m-order-amount"><span class="woocommerce-Price-amount amount"><bdi>${(productPrice * productQuantity).toFixed(2)}<span class="woocommerce-Price-currencySymbol">$</span></bdi></span></div>
    </div>
    <div class="qodef-m-action">
        <a itemprop="url" href="https://banquet.qodeinteractive.com/cart/" class="qodef-m-action-link">View Cart</a>
        <a itemprop="url" href="https://banquet.qodeinteractive.com/checkout/" class="qodef-m-action-link">Checkout</a>
    </div>
`
    cardQuantity.innerHTML = `(${productQuantity})`
    document.getElementById('cart-items').innerHTML = cartContainerList;
    
    localStorage.setItem("cart-items", cartContainerList);

}

localStorage.getItem("cart-items")

// document.querySelector('.single_add_to_cart_button').addEventListener('onclick', addProduct, false)


// document.getElementById('cart-items').innerHTML = customerCart.length == 0 ? cartNoList : cartContainerList;