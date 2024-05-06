let shopListContainer = '' 
  for (let x = 0; x < shopList[0].rentals?.length; x++) {
    let allProducts = shopList[0].rentals[x]
    // let allProducts = shopList[0].rentals[x].item.toLowerCase();
    // console.log(allProducts)

    shopListContainer += `<li
    class="product type-product post-162 status-publish first instock product_cat-anniversary product_tag-supplies product_tag-set product_tag-table has-post-thumbnail shipping-taxable purchasable product-type-simple">
    <div class="qodef-woo-product-inner">
      <div class="qodef-woo-product-image">
        <img  src="${allProducts?.coverImage}"
          class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="e" decoding="async"
          loading="lazy" style="height: 300px; width: 300px"/>
            <span class="qodef-woo-product-mark qodef-out-of-stock">${allProducts?.productStatus}</span>
        <div class="qodef-woo-product-image-inner">
          <div
            class="button wp-element-button product_type_simple add_to_cart_button"
            aria-label="Add &ldquo;Beautiful tableware&rdquo; to your cart" rel="nofollow">Add to
            cart</div>
        </div>
      </div>
      <div class="qodef-woo-product-content">
        <h5 class="qodef-woo-product-title woocommerce-loop-product__title">
          ${allProducts?.item}
        </h5>
        <span class="price"><span class="woocommerce-Price-amount amount"><bdi>${allProducts?.price}<span
                class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span>
      </div>
    </div>
    </li>`
    document.getElementById('shop-items').innerHTML = shopListContainer;

    // allProducts == product.id.replace(/-/g, ' ') ? getDetails(shopList[0].rentals[x]) : null;
}



$(function () {
    $(".qodef-woo-product-inner").click(function () {
        console.log('here')
    //  var source = $(this).find("source").attr("src");
     console.log(this)
     var title = $(this).find(".qodef-woo-product-title").text();
    //  var person = $(this).find(".video-by").text()
     console.log(title.trim())
    //  var title = $(this).find(".video-name").text();
    //  var person = $(this).find(".video-by").text();
    //  var img = $(this).find(".author-img").attr("src");
    //  $(".video-stream video").stop();
    //  $(".video-stream source").attr("src", source);
    //  $(".video-stream video").load();
    //  $(".video-p-title").text(title);
    //  $(".video-p-name").text(person);
    //  $(".video-detail .author-img").attr("src", img);
    });
   });
   



