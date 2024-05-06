let allShopData = JSON.parse(localStorage.getItem("shop-list"));
let userCarts = JSON.parse(localStorage.getItem("user-carts"));
let shopListTitle = "";
let shopListContainer = "";
let shopListCategory = "";
let showedShopList = "";
let userSelectedCategory;
let renderedList = [];
let selectedColor;
let selectedSize;

function fetchDatabase() {
  fetch(
    "https://6qq2yvww.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22products%22%5D"
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      console.log(data?.result)
      const stringifiedObj = JSON.stringify(data?.result);
      localStorage.setItem("shop-list", stringifiedObj);
      location.reload();
      // console.log(JSON.parse(localStorage.getItem('shop-list')));
    })
    .catch(console.error);
}

allShopData == null || undefined ? fetchDatabase() : null;

// console.log(JSON.parse(window.localStorage.getItem('shop-list')));

displayShopData();

function displayShopData() {
  for (let x = 0; x < allShopData?.length; x++) {
    renderedList.push({
      renderedTitle: allShopData[x]?.name,
      renderedArray: allShopData[x]?.productLists,
    });

    // console.log(allShopData[x]?.name?.toUpperCase())
    document.getElementById("shop-category").innerHTML += `<option id="${
      allShopData[x]?.name?.toLowerCase() + "-category"
    }" value="${allShopData[x]?.name?.toLowerCase()}">${allShopData[
      x
    ]?.name?.toUpperCase()}</option>`;
  }
  // console.log(allShopData[0]?.name)
  displayShopList(allShopData[0]?.name);
}

function displayShopList(whichShopList) {
  let displayedCoveredImage;
  shopListContainer = "";
  renderedList.forEach((renderedListElement) => {
    whichShopList.toLowerCase() ==
    renderedListElement?.renderedTitle?.toLowerCase()
      ? thisShopList(renderedListElement?.renderedArray)
      : null;
  });

  function thisShopList(products) {
    products.forEach((product) => {
      let dataTest = product?.coverImage?.asset?._ref.replace("image-", "");
      part1 = dataTest.substring(0, dataTest?.lastIndexOf("-"));
      part2 = dataTest.substring(
        dataTest?.lastIndexOf("-") + 1,
        dataTest?.length
      );
      productCoverImage = part1 + "." + part2;
      console.log(part2);
      displayedCoveredImage =
        "https://cdn.sanity.io/images/6qq2yvww/production/" + productCoverImage;
      shopListContainer += `<li
      class="product type-product post-162 status-publish first instock product_cat-anniversary product_tag-supplies product_tag-set product_tag-table has-post-thumbnail shipping-taxable purchasable product-type-simple">
      <div class="qodef-woo-product-inner">
        <div class="qodef-woo-product-image">
          <img class="image-container"  src="${displayedCoveredImage}"
            class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="e" decoding="async"
            loading="lazy" style="height: 300px; width: 300px"/>
              <span class="qodef-woo-product-mark qodef-out-of-stock">${product?.productStatus}</span>
          <div class="qodef-woo-product-image-inner">
            <div
              class="button wp-element-button product_type_simple add_to_cart_button"
              aria-label="Add &ldquo;Beautiful tableware&rdquo; to your cart" rel="nofollow">Add to cart</div>
          </div>
        </div>
        <div class="qodef-woo-product-content">
          <h5 class="qodef-woo-product-title woocommerce-loop-product__title">
            ${product?.productTitle}
          </h5>
          <span class="price"><span class="woocommerce-Price-amount checkout-item-price amount"><bdi>${product?.productPrice}<span
                  class="woocommerce-Price-currencySymbol">&#36;</span></bdi></span></span>
        </div>
      </div>
      </li>`;

      document.getElementById("shop-items").innerHTML = shopListContainer;
    });
    $(function () {
      $(".qodef-woo-product-inner").click(function () {
        var title = $(this)
          .find(".qodef-woo-product-title")
          .text()
          .trim()
          .toLowerCase();
        history.replaceState(
          "",
          "",
          "?category=" +
            whichShopList.toLowerCase() +
            "&item=" +
            title.replace(/ /g, "-")
        );
        getDetails({
          productTitle: title.replace(/-/g, " ").toLowerCase(),
          productCategory: whichShopList.toLowerCase(),
        });
      });
    });
  }
}

function alwaysCheckUrl() {
  let urlCategory;
  let urlItem;
  if (
    location.search.includes("category") &&
    location.search.includes("item") &&
    location.search.indexOf("item") > location.search.indexOf("category")
  ) {
    let searchString = location.search
      .replace("?category=", "")
      .replace(/-/g, " ");
    urlCategory = searchString.slice(0, searchString.indexOf("&"));
    urlItem = searchString.slice(searchString.indexOf("=") + 1);
    console.log("urlCategory", urlCategory, "urlItem", urlItem);
    changeCategoryFromUrl(urlCategory);
    getDetails({ productTitle: urlItem, productCategory: urlCategory });
  } else {
    let searchString = location.search
      .replace("?category=", "")
      .replace(/-/g, " ");
    urlCategory = searchString.slice(0, searchString.indexOf("&"));
    urlItem = searchString.slice(searchString.indexOf("=") + 1);
    console.log("urlCategory", urlCategory, "urlItem", urlItem);
    console.log("no category");
    // displayShopList(allShopData[0]?.name);
  }
}

function changeCategoryFromUrl(whichCategory) {
  console.log(whichCategory);

  window.onload = function () {
    console.log(showedShopList);

    document.getElementById("shop-category").value =
      showedShopList.toLowerCase();
    document.getElementById("select2-shop-category-container").title =
      showedShopList.toUpperCase();
    document.getElementById("select2-shop-category-container").innerHTML =
      showedShopList.toUpperCase();
  };

  // document.getElementById('shop-category').value = showedShopList.toLowerCase();
  // document.getElementById('select2-shop-category-container').title = showedShopList.toUpperCase();
  // document.getElementById('select2-shop-category-container').innerHTML = showedShopList.toUpperCase();
  // console.log(whichCategory)

  // console.log(document.querySelector('.select2-selection--single').childNodes)

  // console.log(document.querySelector('.select2-selection'))
  // userSelectedCategory = document.querySelector(
  //   ".select2-selection__rendered"
  // ).innerHTML;
  //   console.log(userSelectedCategory)

  // displayShopList(userSelectedCategory);
}

alwaysCheckUrl();

function changeCategory() {
  // console.log(document.querySelector('.select2-selection'))
  userSelectedCategory = document.querySelector(
    ".select2-selection__rendered"
  ).innerHTML;
  console.log(userSelectedCategory);

  displayShopList(userSelectedCategory);
}

function pushItemToCart({ itemColor, itemSize, shipCost }) {
  
  let newCartItem;
  let itemQuantity = document.getElementById("item-quantity")?.value;
  let inputColor = document.querySelector(".color-input")?.value;
  let itemImage = document.getElementById("frontImage").src;

  console.log(shipCost)

  let itemPriceGrep = document.querySelector(".checkout-item-price")?.innerHTML;
  itemPrice = itemPriceGrep
    .replace("<bdi>", "")
    .slice(0, itemPriceGrep.indexOf("<s"))
    .replace("<span", "");

  let itemTitle = document.querySelector(".item-title").innerText;

  let userCarts = JSON.parse(localStorage.getItem("user-carts"));

  // console.log(userCarts);
  let newCartItemArray;

  function addCartItem() {
    if (userCarts == null) {
      localStorage.setItem(
        "user-carts",
        JSON.stringify([
          {
            title: itemTitle,
            price: itemPrice,
            quantity: itemQuantity,
            image: itemImage,
            size: itemSize,
            color: inputColor == undefined ? itemColor : inputColor,
            shipCost: shipCost,
          },
        ])
      );
    } else if (userCarts != null) {
      // newCartItemArray = userCarts;
      newCartItemArray = {
        title: itemTitle,
        price: itemPrice,
        quantity: itemQuantity,
        image: itemImage,
        size: itemSize,
        color: inputColor == undefined ? itemColor : inputColor,
        shipCost: shipCost,
      };
      userCarts.push(newCartItemArray);
      localStorage.setItem("user-carts", JSON.stringify(userCarts));
    }
    document.getElementById("qodef-page-outer").hidden = false;
    document.querySelector(".modal-section-container").hidden = true;
    document.getElementById("modal-section").innerHTML = "";
    checkUserCarts();
  }

  addCartItem();

  // if (itemColor == undefined || itemSize == undefined) {
  //   alert("Please Select all options");
  // } else {
  //   addCartItem();
  // }
}

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
      // console.log(cartItem)
      userCartListing += `
  <div class="qodef-woo-dropdown-item qodef-e">
    <div class="qodef-e-image">
      <a ><img width="600" height="734"
          src="${cartItem?.image}"
          class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="u" loading="lazy"></a>
    </div>
    <div class="qodef-e-content">
      <h6 itemprop="name" class="qodef-e-title entry-title">
        <a >${cartItem?.title}</a>
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
    document.querySelectorAll(
      ".qodef-m-opener-count"
    )[0].innerHTML = `(${allItemsQuantity})`;
    document.querySelectorAll(
      ".qodef-m-opener-count"
    )[1].innerHTML = `(${allItemsQuantity})`;
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
    // document.querySelector(".qodef-m-opener-count").innerHTML = "(0)";
    document.querySelectorAll(".qodef-m-opener-count").forEach((cartCount) => {
      cartCount.innerHTML = "(0)";
      // console.log(cartCount);
    });
    // document.querySelector(".qodef-m-opener-count-mobile").innerHTML = "(0)";
  }

  // console.log(document.querySelector('.qodef-m-opener-count').innerHTML)
}

checkUserCarts();

function readerSearchCategory(whichCategory) {
  displayShopList(whichCategory);
  showedShopList = whichCategory;
}
function getDetails({ productTitle, productCategory }) {
  let shopDataName;
  let sizeContainer;
  let colorContainer;
  let inputColorContainer;
  let sizeOption = "";
  let colorOption = "";
  let swiperListMain = "";
  let swiperListSub = "";
  let itemTitle = "";

  allShopData.forEach((shopData) => {
    shopDataName = shopData?.name?.toLowerCase();
    if (shopDataName == productCategory) {
      getProductObject(shopData?.productLists);
      readerSearchCategory(productCategory);
    }
    // shopDataName == productCategory
    //   ? getProductObject(shopData?.productLists)
    //   : null;
  });

  function sterilizeImageObject(imageObject) {
    let imageObjectBlob = imageObject.asset._ref.replace("image-", "");
    let imageObjectBlobFirst = imageObjectBlob.substring(
      0,
      imageObjectBlob?.lastIndexOf("-")
    );
    let imageObjectBlobSecond = imageObjectBlob.substring(
      imageObjectBlob?.lastIndexOf("-") + 1,
      imageObjectBlob?.length
    );
    return (imageSwiperUrl =
      "https://cdn.sanity.io/images/6qq2yvww/production/" +
      imageObjectBlobFirst +
      "." +
      imageObjectBlobSecond);
  }

  function getProductObject(productCategoryArray) {
    productCategoryArray.forEach((productItem) => {
      // console.log(productItem?.productDescription)
      productItem.productTitle.toLowerCase() == productTitle
        ? displayProductDetails(productItem)
        : null;
    });
  }
  function displayProductDetails(productItem) {
    let frontImage = sterilizeImageObject(productItem.coverImage);

    itemTitle = productItem?.productTitle;
    // itemPrice = productItem?.productPrice;

    if (productItem?.imageList?.length > 0) {
      let imageIteration = 0;
      productItem?.imageList.forEach((imageUrl) => {
        imageIteration += 1;
        imageSwiperUrl = sterilizeImageObject(imageUrl);

        swiperListMain +=
          imageIteration == 1
            ? `
        <swiper-slide style="width: 700px; margin-right: 10px;" role="group" class="swiper-slide-next" data-swiper-slide-index="${imageIteration}">
          <img src="${imageSwiperUrl}">
        </swiper-slide>
        `
            : `
        <swiper-slide style="width: 700px; margin-right: 10px;" role="group" data-swiper-slide-index="${imageIteration}">
          <img src="${imageSwiperUrl}">
        </swiper-slide>
        `;

        swiperListSub += `
        <swiper-slide style="width: 167.5px; margin-right: 10px;" role="group" data-swiper-slide-index="${imageIteration}">
          <img src="${imageSwiperUrl}">
        </swiper-slide>
        `;
      });
    } else {
      inputColorContainer = ``;
    }
    if (productItem?.productSizes?.length > 0) {
      productItem?.productSizes.forEach((productSize) => {
        sizeOption += `<button onclick="var allButton = document.querySelectorAll('.size-button'); allButton.forEach(sizeButton => {sizeButton.style.backgroundColor = 'transparent'; sizeButton.style.color = '#696359'}); var selectedIdSize = this.id; document.getElementById(selectedIdSize).style.backgroundColor = 'black'; document.getElementById(selectedIdSize).style.color = 'white'; selectedSize = '${productSize}'" class="single_add_to_cart_button button alt wp-element-button size-button" id="${productSize}inches" style="margin-right: 5px; ">${productSize}</button>`;
      });
      sizeContainer = `<h5 class="qodef-woo-product-title item-title product_title entry-title">Size:</h5>
        <div class="btn-grid">
        ${sizeOption}
        </div>
        `;
    } else {
      sizeContainer = "";
    }
    if (productItem?.productColors?.length > 0) {
      productItem?.productColors.forEach((productColor) => {
        colorOption += `<button onclick="var allButton = document.querySelectorAll('.color-button'); allButton.forEach(sizeButton => {sizeButton.style.backgroundColor = 'transparent'; sizeButton.style.color = '#696359'}); var selectedIdColor = this.id; document.getElementById(selectedIdColor).style.backgroundColor = 'black'; document.getElementById(selectedIdColor).style.color = 'white'; selectedColor = '${productColor}'" class="single_add_to_cart_button button alt wp-element-button color-button" id="${productColor}color" style="margin-right: 5px">${productColor}</button>`;
        colorContainer = `
        <h5 class="qodef-woo-product-title item-title product_title entry-title">Color:</h5>
            <div class="btn-grid">
              ${colorOption}
            </div>
        `;
      });
    } else {
      colorContainer = "";
    }
    if (productItem?.inputColor == "true") {
      inputColorContainer = `
      <h5 class="qodef-woo-product-title item-title product_title entry-title">Please input available COLOUR as shown in photos</h5>
      <input class="color-input">`;
    } else {
      inputColorContainer = ``;
    }

    let modalSectionTemplate = `<div id="qodef-page-outer">

<div class="qodef-content-grid">
<div style="display: flex; justify-content: flex-end">
  <a itemprop="url" class="qodef-breadcrumbs-link" onclick="closeProductDetails()"><h5 style="cursor: pointer"><img src="/assets/images/icons8-close.svg"></h5></a>
</div>
<br>
  <main id="qodef-page-content" class="qodef-grid qodef-layout--template qodef--no-bottom-space">
    <div class="qodef-grid-inner clear">
      <div class="qodef-page-border--left"></div>
      <div class="qodef-page-border--right"></div>
      <div id="qodef-woo-page" class="qodef-grid-item qodef--single qodef-popup--magnific-popup qodef-magnific-popup qodef-popup-gallery">
        <div class="woocommerce-notices-wrapper"></div>
        <div id="product-169" class="product type-product post-169 status-publish first instock product_cat-celebration product_tag-supplies product_tag-set product_tag-table has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
          <div class="qodef-woo-single-inner">
          <div
    class="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-3 images qodef-position--below"
    data-columns="3" style="opacity: 1; transition: opacity 0.25s ease-in-out 0s;">
    <figure class="woocommerce-product-gallery__wrapper">
      <div data-thumb-alt="e" class="woocommerce-product-gallery__image" >
        <swiper-container style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="mySwiper"
          thumbs-swiper=".mySwiper2" loop="true" space-between="10" navigation="true">
          <swiper-slide margin-right: 10px;" role="group"
            class="swiper-slide-active" data-swiper-slide-index="0">
            <img id="frontImage" src="${frontImage}">
          </swiper-slide>
          ${swiperListMain}
        </swiper-container>

        <swiper-container class="mySwiper2" loop="true" space-between="10" slides-per-view="4" free-mode="true"
          watch-slides-progress="true">
          <swiper-slide margin-right: 10px;" role="group" aria-label="1 / 10"
            class="swiper-slide-thumb-active" data-swiper-slide-index="0">
            <img src="${frontImage}">
          </swiper-slide>
          ${swiperListSub}
        </swiper-container>
      </div>
    </figure>
  </div>
          <div class="summary entry-summary">
          <h3 class="qodef-woo-product-title item-title product_title entry-title">
            ${productItem?.productTitle}
          </h3>
          <h6 class="qodef-woo-product-title item-title product_title entry-title">Description:</h6>
              <p style="text-align: left">
                ${productItem?.productDescription}
              </p>
          <p class="price" style="font-weight: 600; color: #3e3930; font-size: 20px">
            <span class="woocommerce-Price-amount amount"><bdi>CAD ${productItem?.productPrice}<span
                  class="woocommerce-Price-currencySymbol">$</span></bdi></span>
          </p>
          <div class="woocommerce-product-details__short-description">
            ${sizeContainer}
            <br>
            ${colorContainer}
            ${inputColorContainer}
            <br>
          </div>
          <div class="cart">
            <div class="qodef-quantity-buttons quantity">
              <label class="screen-reader-text" for="quantity_6586011e78745">Gold and White Plinths
                quantity</label>
              <span class="qodef-quantity-minus"><span class="icon-arrows-left"></span></span>
              <input type="text" id="item-quantity" class="input-text qty text qodef-quantity-input" data-step="1" data-min="1"
                data-max="" name="quantity" value="1" title="Qty" size="4" inputmode="numeric">
              <span class="qodef-quantity-plus"><span class="icon-arrows-right"></span></span>
            </div>
            <button onclick="{pushItemToCart({itemColor: selectedColor, itemSize: selectedSize, shipCost: ${productItem?.shippingCost}})}" value="162"
              class="single_add_to_cart_button button alt wp-element-button">
              Add to cart
            </button>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
</div>`;
    document.getElementById("qodef-page-outer").hidden = true;
    document.querySelector(".modal-section-container").hidden = false;
    document.getElementById("modal-section").innerHTML = modalSectionTemplate;
    window.scrollY = 0;
  }
}

// listen for back button
window.onhashchange = function () {
  if (window.innerDocClick) {
    window.innerDocClick = false;
  } else {
    if (window.location.hash != "#undefined") {
      goBack();
    } else {
      history.pushState("", document.title, window.location.pathname);
      location.reload();
    }
  }
};

function closeProductDetails() {
  document.getElementById("qodef-page-outer").hidden = false;
  document.querySelector(".modal-section-container").hidden = true;
  // document.getElementById('qodef-page-wrapper').classList.remove('content-hidden');
  // document.getElementById('modal-section').innerHTML = '';
}

function clickCategory() {
  let elementToClick = document.getElementById(
    `${showedShopList + "-category"}`
  );
  // document.getElementById(`${showedShopList + '-category'}`).click()
  console.log(elementToClick);
  elementToClick.click();
}
