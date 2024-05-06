// $('.button').click(function(){
//     var buttonId = $(this).attr('id');
//     $('#modal-container').removeAttr('class').addClass(buttonId);
//     $('body').addClass('modal-active');
//   })
// //   qodef-page-wrapper
//   $('#modal-container').click(function(){
//     $(this).addClass('out');
//     $('body').removeClass('modal-active');
//   });
//   document.getElementById('modal-section').innerHTML = modalSectionTemplate;

// document.querySelectorAll('.add_to_cart_button').addEventListener('onclick',  alert('me'))
function getDetails(productDetails)  {
    console.log(productDetails)

    let modalSectionTemplate =  `
  <section class="rbt-active rbt-sidearea" >
  
  <div class="rbt-list-holder">
      <div class="rbt-list">
          <div class="rbt-list-inner" style="width: 100%">
          <div id="qodef-page-inner" class="qodef-content-grid">
          <main id="qodef-page-content" class="qodef-grid qodef-layout--template qodef--no-bottom-space">
            <div class="qodef-grid-inner clear">
              <div id="qodef-woo-page" class="qodef-grid-item qodef--single qodef-popup--magnific-popup qodef-magnific-popup qodef-popup-gallery">
                <div class="woocommerce-notices-wrapper"></div>
                <div id="product-162" class="product type-product post-162 status-publish first instock product_cat-anniversary product_tag-supplies product_tag-set product_tag-table has-post-thumbnail shipping-taxable purchasable product-type-simple">
                  <div class="qodef-woo-single-inner">
                    <div class="qodef-woo-single-image">
                      <div class="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-3 images qodef-position--below" data-columns="3" style="opacity: 1; transition: opacity 0.25s ease-in-out 0s;">
                        <figure class="woocommerce-product-gallery__wrapper">
                          <div data-thumb="/assets/images/goldplinths1.png" data-thumb-alt="e" class="woocommerce-product-gallery__image">
                            <swiper-container style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="mySwiper" thumbs-swiper=".mySwiper2" loop="true" space-between="10" navigation="true">
                              <swiper-slide style="width: 700px; margin-right: 10px;" role="group" aria-label="1 / 10" class="swiper-slide-active" data-swiper-slide-index="0">
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg">
                              </swiper-slide>
                              <swiper-slide style="width: 700px; margin-right: 10px;" role="group" aria-label="2 / 10" class="swiper-slide-next" data-swiper-slide-index="1">
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg">
                              </swiper-slide>
                              <swiper-slide style="width: 700px; margin-right: 10px;" role="group" aria-label="3 / 10" data-swiper-slide-index="2">
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg">
                              </swiper-slide>
                              <swiper-slide style="width: 700px; margin-right: 10px;" role="group" aria-label="4 / 10" data-swiper-slide-index="3">
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg">
                              </swiper-slide>
                              <swiper-slide style="width: 700px; margin-right: 10px;" role="group" aria-label="5 / 10" data-swiper-slide-index="4">
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg">
                              </swiper-slide>
                              <swiper-slide style="width: 700px; margin-right: 10px;" role="group" aria-label="6 / 10" data-swiper-slide-index="5">
                                <img src="https://swiperjs.com/demos/images/nature-6.jpg">
                              </swiper-slide>
                              <swiper-slide style="width: 700px; margin-right: 10px;" role="group" aria-label="7 / 10" data-swiper-slide-index="6">
                                <img src="https://swiperjs.com/demos/images/nature-7.jpg">
                              </swiper-slide>
                              <swiper-slide style="width: 700px; margin-right: 10px;" role="group" aria-label="8 / 10" data-swiper-slide-index="7">
                                <img src="https://swiperjs.com/demos/images/nature-8.jpg">
                              </swiper-slide>
                              <swiper-slide style="width: 700px; margin-right: 10px;" role="group" aria-label="9 / 10" data-swiper-slide-index="8">
                                <img src="https://swiperjs.com/demos/images/nature-9.jpg">
                              </swiper-slide>
                              <swiper-slide role="group" aria-label="10 / 10" data-swiper-slide-index="9" style="width: 700px; margin-right: 10px;">
                                <img src="https://swiperjs.com/demos/images/nature-10.jpg">
                              </swiper-slide>
                            </swiper-container>
  
                            <swiper-container class="mySwiper2" loop="true" space-between="10" slides-per-view="4" free-mode="true" watch-slides-progress="true">
                              <swiper-slide style="width: 167.5px; margin-right: 10px;" role="group" aria-label="1 / 10" class="swiper-slide-thumb-active" data-swiper-slide-index="0">
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg">
                              </swiper-slide>
                              <swiper-slide style="width: 167.5px; margin-right: 10px;" role="group" aria-label="2 / 10" class="" data-swiper-slide-index="1">
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg">
                              </swiper-slide>
                              <swiper-slide style="width: 167.5px; margin-right: 10px;" role="group" aria-label="3 / 10" class="" data-swiper-slide-index="2">
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg">
                              </swiper-slide>
                              <swiper-slide style="width: 167.5px; margin-right: 10px;" role="group" aria-label="4 / 10" class="" data-swiper-slide-index="3">
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg">
                              </swiper-slide>
                              <swiper-slide style="width: 167.5px; margin-right: 10px;" role="group" aria-label="5 / 10" data-swiper-slide-index="4" class="">
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg">
                              </swiper-slide>
                              <swiper-slide style="width: 167.5px; margin-right: 10px;" role="group" aria-label="6 / 10" data-swiper-slide-index="5" class="swiper-slide-prev">
                                <img src="https://swiperjs.com/demos/images/nature-6.jpg">
                              </swiper-slide>
                              <swiper-slide style="width: 167.5px; margin-right: 10px;" role="group" aria-label="7 / 10" data-swiper-slide-index="6" class="swiper-slide-active swiper-slide-visible swiper-slide-fully-visible">
                                <img src="https://swiperjs.com/demos/images/nature-7.jpg">
                              </swiper-slide>
                              <swiper-slide style="width: 167.5px; margin-right: 10px;" role="group" aria-label="8 / 10" data-swiper-slide-index="7" class="swiper-slide-next swiper-slide-visible swiper-slide-fully-visible">
                                <img src="https://swiperjs.com/demos/images/nature-8.jpg">
                              </swiper-slide>
                              <swiper-slide style="width: 167.5px; margin-right: 10px;" role="group" aria-label="9 / 10" data-swiper-slide-index="8" class="swiper-slide-visible swiper-slide-fully-visible">
                                <img src="https://swiperjs.com/demos/images/nature-9.jpg">
                              </swiper-slide>
                              <swiper-slide role="group" aria-label="10 / 10" style="width: 167.5px; margin-right: 10px;" data-swiper-slide-index="9" class="swiper-slide-visible">
                                <img src="https://swiperjs.com/demos/images/nature-10.jpg">
                              </swiper-slide>
                            </swiper-container>
                            <!-- <a
                                href="/assets/images/goldplinths1.png"
                                ><img
                                  width="800"
                                  height="978"
                                  src="/assets/images/goldplinths1.png"
                                  class="wp-post-image"
                                  alt="e"
                                  decoding="async"
                                  loading="lazy"
                                  title="shop-img-1"
                                  data-caption
                                  data-src="/assets/images/goldplinths1.png"
                                  data-large_image="/assets/images/goldplinths1.png"
                                  data-large_image_width="800"
                                  data-large_image_height="978"
                                  srcset="
                                  /assets/images/goldplinths1.png 800w,
                                  /assets/images/goldplinths1.png 600w,
                                  /assets/images/goldplinths1.png 245w,
                                  /assets/images/goldplinths1.png 768w
                                  "
                                  sizes="(max-width: 800px) 100vw, 800px"
                              /></a> -->
                          </div>
                          <!-- <div class="qodef-woo-thumbnails-wrapper">
                              <div
                                data-thumb="/assets/images/whiteplinths1.png"
                                data-thumb-alt="d"
                                class="woocommerce-product-gallery__image"
                              >
                                <a
                                  href="/assets/images/whiteplinths1.png"
                                  ><img
                                    width="600"
                                    height="715"
                                    src="/assets/images/balloonsizer.png"
                                    class
                                    alt="d"
                                    decoding="async"
                                    loading="lazy"
                                    title="shop-1-img-3"
                                    data-caption
                                    data-src="/assets/images/whiteplinths1.png"
                                    data-large_image="/assets/images/whiteplinths1.png"
                                    data-large_image_width="600"
                                    data-large_image_height="715"
                                    srcset="
                                    /assets/images/whiteplinths1.png 600w,
                                    /assets/images/whiteplinths1.png 252w
                                    "
                                    sizes="(max-width: 600px) 100vw, 600px"
                                /></a>
                              </div>
                              <div
                                data-thumb="/assets/images/balloonsizer.png"
                                data-thumb-alt="d"
                                class="woocommerce-product-gallery__image"
                              >
                                <a
                                  href="/assets/images/GoldPlinths.png"
                                  ><img
                                    width="600"
                                    height="715"
                                    src="/assets/images/GoldPlinths.png"
                                    class
                                    alt="d"
                                    decoding="async"
                                    loading="lazy"
                                    title="shop-1-img-3"
                                    data-caption
                                    data-src="/assets/images/GoldPlinths.png"
                                    data-large_image="/assets/images/GoldPlinths.png"
                                    data-large_image_width="600"
                                    data-large_image_height="715"
                                    srcset="
                                    /assets/images/GoldPlinths.png 600w,
                                    /assets/images/GoldPlinths.png 252w
                                    "
                                    sizes="(max-width: 600px) 100vw, 600px"
                                /></a>
                              </div>
                              <div
                                data-thumb="/assets/images/WhitePlinths.png"
                                data-thumb-alt="d"
                                class="woocommerce-product-gallery__image"
                              >
                                <a
                                  href="/assets/images/WhitePlinths.png"
                                  ><img
                                    width="600"
                                    height="715"
                                    src="/assets/images/WhitePlinths.png"
                                    class
                                    alt="d"
                                    decoding="async"
                                    loading="lazy"
                                    title="shop-1-img-3"
                                    data-caption
                                    data-src="/assets/images/WhitePlinths.png"
                                    data-large_image="/assets/images/WhitePlinths.png"
                                    data-large_image_width="600"
                                    data-large_image_height="715"
                                    srcset="
                                    /assets/images/WhitePlinths.png 600w,
                                    /assets/images/WhitePlinths.png 252w
                                    "
                                    sizes="(max-width: 600px) 100vw, 600px"
                                /></a>
                              </div>
                            </div> -->
                        </figure>
                      </div>
                    </div>
                    <div class="summary entry-summary">
                      <h2 class="qodef-woo-product-title product_title entry-title">
                        Gold and White Plinths
                      </h2>
  
                      <p class="price">
                        <span class="woocommerce-Price-amount amount"><bdi>90.00<span class="woocommerce-Price-currencySymbol">$</span></bdi></span>
                      </p>
                      <div class="woocommerce-product-details__short-description">
                        <p>
                          Autem dicant cum ex, ei vis nibh solum simul, veritus
                          fierent fastidii quo ea. Cu solum scripta pro. Qui in
                          clita everti propriae, vidit voluptaria cum ne, at nec
                          sint mo vet delectus, sit mazim dictas.
                        </p>
                      </div>
                      <div class="cart">
                        <div class="qodef-quantity-buttons quantity">
                          <label class="screen-reader-text" for="quantity_6586011e78745">Gold and White Plinths
                            quantity</label>
                          <span class="qodef-quantity-minus"><span class="icon-arrows-left"></span></span>
                          <input type="text" id="quantity_6586011e78745" class="input-text qty text qodef-quantity-input" data-step="1" data-min="1" data-max="" name="quantity" value="1" title="Qty" size="4" inputmode="numeric">
                          <span class="qodef-quantity-plus"><span class="icon-arrows-right"></span></span>
                        </div>
                        <button onclick="addProduct()" value="162" class="single_add_to_cart_button button alt wp-element-button">
                          Add to cart
                        </button>
                      </div>
                      <div class="product_meta">
                        <span class="sku_wrapper">
                          <span class="qodef-woo-meta-label">SKU:</span>
                          <span class="sku qodef-woo-meta-value">90</span>
                        </span>
                        <span class="posted_in"><span class="qodef-woo-meta-label">Category:</span><span class="qodef-woo-meta-value"><a href="https://banquet.qodeinteractive.com/product-category/anniversary/" rel="tag">Anniversary</a></span></span>
                        <span class="tagged_as"><span class="qodef-woo-meta-label">Tags:</span><span class="qodef-woo-meta-value"><a href="https://banquet.qodeinteractive.com/product-tag/supplies/" rel="tag">Decoration</a>,
                            <a href="https://banquet.qodeinteractive.com/product-tag/set/" rel="tag">Set</a>,
                            <a href="https://banquet.qodeinteractive.com/product-tag/table/" rel="tag">Table</a></span></span>
                      </div>
                    </div>
                  </div>
                  <div class="woocommerce-tabs wc-tabs-wrapper">
                    <ul class="tabs wc-tabs" role="tablist">
                      <li class="description_tab active" id="tab-title-description" role="tab" aria-controls="tab-description">
                        <a href="#tab-description"> Description </a>
                      </li>
                      <li class="additional_information_tab" id="tab-title-additional_information" role="tab" aria-controls="tab-additional_information">
                        <a href="#tab-additional_information">
                          Additional information
                        </a>
                      </li>
  
                    </ul>
                    <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description" style="">
                      <h2>Description</h2>
                      <p>
                        Autem dicant cum ex, ei vis nibh solum simul, veritus
                        fierent fastidii quo ea. Cu solum scripta pro. Qui in
                        clita everti iberavisse. Autem dicant cum ex, ei vis
                        nibh solum simul, veritus fierent fastidii quo ea. Cu
                        solum scripta pro. Qui in clita everti iberavisse.Autem
                        dicant cum ex, ei vis nibh solum simul, veritus fierent
                        fastidii quo ea. Cu solum scripta pro. Qui in clita
                        everti iberavisse.Autem dicant cum ex, ei vis nibh solum
                        simul, veritus fierent fastidii quo ea.
                      </p>
                    </div>
                    <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab" id="tab-additional_information" role="tabpanel" aria-labelledby="tab-title-additional_information" style="display: none;">
                      <h2>Additional information</h2>
                      <table class="woocommerce-product-attributes shop_attributes">
                        <tbody><tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--dimensions">
                          <th class="woocommerce-product-attributes-item__label">
                            Dimensions
                          </th>
                          <td class="woocommerce-product-attributes-item__value">
                            50 × 50 × 10 in
                          </td>
                        </tr>
                      </tbody></table>
                    </div>
                    <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews" style="display: none;">
                    </div>
                    <section class="related products">
                      <h2>Related products</h2>
                      <div class="qodef-woo-product-list qodef-item-layout--info-below">
                        <ul class="products columns-4">
                          <li class="product type-product post-235 status-publish first instock product_cat-minmal product_tag-supplies product_tag-set product_tag-table has-post-thumbnail shipping-taxable purchasable product-type-simple">
                            <div class="qodef-woo-product-inner">
                              <div class="qodef-woo-product-image">
                                <img width="600" height="734" src="/assets/images/numberballoons3.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="s" decoding="async" loading="lazy" srcset="
                                  /assets/images/numberballoons3.png 600w,
                                  /assets/images/numberballoons3.png 245w,
                                  /assets/images/numberballoons3.png 768w,
                                  /assets/images/numberballoons3.png 800w
                                  " sizes="(max-width: 600px) 100vw, 600px">
                                <div class="qodef-woo-product-image-inner">
  
                                </div>
                              </div>
                              <div class="qodef-woo-product-content">
                                <h5 class="qodef-woo-product-title woocommerce-loop-product__title">
                                  Balloon Numbers
                                </h5>
                                <span class="price"><span class="woocommerce-Price-amount amount"><bdi>58.00<span class="woocommerce-Price-currencySymbol">$</span></bdi></span></span>
                              </div>
                              <a href="/products/number-balloons" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a>
                            </div>
                          </li>
                          <li class="product type-product post-256 status-publish outofstock product_cat-simple product_tag-supplies product_tag-handmade product_tag-set has-post-thumbnail shipping-taxable purchasable product-type-simple">
                            <div class="qodef-woo-product-inner">
                              <div class="qodef-woo-product-image">
                                <img width="600" height="734" src="/assets/images/balloonsizer1.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="c" decoding="async" loading="lazy" srcset="
                                  /assets/images/balloonsizer1.png 600w,
                                  /assets/images/balloonsizer1.png 245w,
                                  /assets/images/balloonsizer1.png 768w,
                                  /assets/images/balloonsizer1.png 800w
                                  " sizes="(max-width: 600px) 100vw, 600px">
                                <div class="qodef-woo-product-image-inner">
  
                                </div>
                              </div>
                              <div class="qodef-woo-product-content">
                                <h5 class="qodef-woo-product-title woocommerce-loop-product__title">
                                  Balloon Sizer
                                </h5>
                                <span class="price"><span class="woocommerce-Price-amount amount"><bdi>58.00<span class="woocommerce-Price-currencySymbol">$</span></bdi></span></span>
                              </div>
                              <a href="/products/gold-and-white-plinths/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a>
                            </div>
                          </li>
  
                          
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
          </div></main>
        </div>
          </div>
      </div>
  </div>
</section>`

  document.getElementById('qodef-page-wrapper').setAttribute('class', 'content-hidden');
  document.getElementById('modal-section').innerHTML = modalSectionTemplate;

}

function closeProductDetails()  {
  document.getElementById('qodef-page-wrapper').classList.remove('content-hidden');
  document.getElementById('modal-section').innerHTML = '';
}

function toggleProduct(product) {

let shopList = [
    {
        rentals: [
            {
                item: "Gold and White Plinths",
                price: "$400.00",
                image: "http://localhost:5501/assets/images/goldplinths1.png",
            },
            {
                item: "Balloon Sizer",
                price: "$200.00",
                image: "http://localhost:5501/assets/images/balloonsizer1.png",
            },
            {
                item: "Balloon Numbers",
                price: "$180.00",
                image: "http://localhost:5501/assets/images/numberballoons3.png",
            },
            {
                item: "Chidex",
                price: "$180.00",
                image: "http://localhost:5501/assets/images/numberballoons3.png",
            },
        ],
    },

    {
        sell: [
            {
                item: "mop1",
                price: "$400.00",
                image: "http://localhost:5501/assets/images/goldplinths1.png",
            },
            {
                item: "monitor1",
                price: "$200.00",
                image: "http://localhost:5501/assets/images/balloonsizer1.png",
            },
            {
                item: "laptop1",
                price: "$180.00",
                image: "http://localhost:5501/assets/images/numberballoons3.png",
            },
        ],
    },
    {
        vehicle: [
            {
                item: "mop",
                price: "$400.00",
                image: "http://localhost:5501/assets/images/goldplinths1.png",
            },
            {
                item: "monitor",
                price: "$200.00",
                image: "http://localhost:5501/assets/images/balloonsizer1.png",
            },
            {
                item: "laptop",
                price: "$180.00",
                image: "http://localhost:5501/assets/images/numberballoons3.png",
            },
        ],
    },
    {
        fuckingHell: [
            {
                item: "mop",
                price: "$400.00",
                image: "http://localhost:5501/assets/images/goldplinths1.png",
            },
            {
                item: "monitor",
                price: "$200.00",
                image: "http://localhost:5501/assets/images/balloonsizer1.png",
            },
            {
                item: "laptop",
                price: "$180.00",
                image: "http://localhost:5501/assets/images/numberballoons3.png",
            },
            {
                item: "mop2",
                price: "$400.00",
                image: "http://localhost:5501/assets/images/goldplinths1.png",
            },
            {
                item: "monitor2",
                price: "$200.00",
                image: "http://localhost:5501/assets/images/balloonsizer1.png",
            },
            {
                item: "laptop2",
                price: "$180.00",
                image: "http://localhost:5501/assets/images/numberballoons3.png",
            },
        ],
    },
];
    for (let x = 0; x < shopList[0].rentals?.length; x++) {
        let allProducts = shopList[0].rentals[x].item.toLowerCase();

        allProducts == product.id.replace(/-/g, ' ') ? getDetails(shopList[0].rentals[x]) : null;
    }
}


window.onhashchange = function() {
  if (window.innerDocClick) {
      window.innerDocClick = false;
  } else {
      if (window.location.hash != '#undefined') {
          goBack();
      } else {
          history.pushState("", document.title, window.location.pathname);
          location.reload();
      }
  }
}