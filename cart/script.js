let userCarts = JSON.parse(localStorage.getItem("user-carts"));
let finalQuantity;
let totalAmount = 0;
let shippingCost = 0.0;

console.log(userCarts);

function removeItemFromCart(whichItem) {
	userCarts.splice(whichItem?.id - 1, 1);
	localStorage.setItem("user-carts", JSON.stringify(userCarts));
	// checkUserCarts()
	checkoutHandler();
}

function displayDeliveryDetails(whichDetails) {
	if (whichDetails?.id == "pickup-select" || whichDetails == undefined) {
		document.getElementById("shippingCost").innerHTML = 0.0;
		document.getElementById("totalCost").innerHTML = (
			totalAmount +
			totalAmount * 0.05
		).toFixed(2);
		document.getElementById("delivery-details").innerHTML = `
	<span	class="woocommerce-Price-amount amount"><bdi>Pickup at our walk in store.<br>
					50 Nolanridge Ct NW Unit 255, <br>Calgary, AB T3R 1W9, Canada</bdi></span>
					
	`;
	} else if (whichDetails?.id == "shipping-select") {
		document.getElementById("shippingCost").innerHTML = shippingCost.toFixed(2);
		document.getElementById("totalCost").innerHTML = (
			totalAmount +
			shippingCost +
			totalAmount * 0.05
		).toFixed(2);
		document.getElementById("delivery-details").innerHTML = `
		<div class="woocommerce-billing-fields">
		<span class="woocommerce-Price-amount amount"><bdi>We will require your billing address on the payment page.</bdi>
		</span>
	  </div>
					
	`;
	}
}

function checkoutHandler(item) {
	// let newQuantity = document.getElementById(`quantity-change-${item}`).value;
	// console.log(item);
	console.log(userCarts?.length);
	if (userCarts?.length > 0) {
		let userCartListing = "";
		let cartId = 0;
		totalAmount = 0;
		shippingCost = 0.0;
		userCarts.forEach((cartItem) => {
			if (
				item != undefined &&
				item?.id == document.getElementById(`${cartId + 1}`)?.id &&
				item?.value > 0
			) {
				userCarts[cartId].quantity = item?.value;
				localStorage.setItem("user-carts", JSON.stringify(userCarts));
			}
			cartId += 1;
			totalAmount += cartItem?.quantity * cartItem?.price;
			shippingCost += cartItem.shipCost * cartItem?.quantity;
			userCartListing += `

      <tr class="woocommerce-cart-form__cart-item cart_item">

					<td class="product-remove">
						<a
							class="remove" aria-label="Remove this item" data-product_id="1075" id="${cartId}" onclick="removeItemFromCart(this)"
							data-product_sku="116">×</a>
					</td>

					<td class="product-thumbnail">
						<a ><img width="600"
								height="734"
								src="${cartItem?.image}"
								class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="u"
								decoding="async" loading="lazy"
								sizes="(max-width: 600px) 100vw, 600px"></a>
					</td>
					<td class="product-name" data-title="Product">
						<a>${cartItem?.title}</a>
                        <p>Size: ${cartItem?.size}</p>
                        <p>Color: ${cartItem?.color}</p>
					</td>

					<td class="product-price" data-title="Price">
						<span class="woocommerce-Price-amount amount"><bdi>${cartItem?.price}<span
									class="woocommerce-Price-currencySymbol">$</span></bdi></span>
					</td>
					<td class="product-quantity" data-title="Quantity">
						<div class="qodef-quantity-buttons quantity">
							<label class="screen-reader-text" for="quantity_65d1f0eda17c2">Minimal vase quantity</label>
							<span class="qodef-quantity-minus"><span class="icon-arrows-left"></span></span>
							<input type="text" id="${cartId}"
								class="input-text qty text qodef-quantity-input" data-step="1" data-min="0" data-max=""
								name="cart[46072631582fc240dd2674a7d063b040][qty]" value="${cartItem?.quantity
				}" onchange="checkoutHandler(this)"  title="Qty" size="4"
								inputmode="numeric">
							<span class="qodef-quantity-plus"><span class="icon-arrows-right"></span></span>
						</div>
					</td>
					<td class="product-subtotal" data-title="Subtotal">
						<span class="woocommerce-Price-amount amount"><bdi>${cartItem?.quantity * cartItem?.price
				}<span
									class="woocommerce-Price-currencySymbol">$</span></bdi></span>
					</td>
				</tr>
    `;
		});

		document.getElementById("cart-checkout").innerHTML = `
<div id="qodef-woo-page" class="qodef--cart">
	<form class="woocommerce-cart-form" action="/cart" method="post">

		<table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellspacing="0">
			<thead>
				<tr>
					<th class="product-remove"><span class="screen-reader-text">Remove item</span></th>
					<th class="product-thumbnail"><span class="screen-reader-text">Thumbnail image</span></th>
					<th class="product-name">Product</th>
					<th class="product-price">Price</th>
					<th class="product-quantity">Quantity</th>
					<th class="product-subtotal">Subtotal</th>
				</tr>
			</thead>
			<tbody>
				${userCartListing}
				<tr colspan="6" class="actions" >
					
				</tr>
				<table cellspacing="0"
				class="shop_table shop_table_responsive"
				style="margin-top: 50px; width: 100%">

				<tr class="cart-subtotal">
					<th>Subtotal:</th>
					<td data-title="Subtotal"><span
							class="woocommerce-Price-amount amount"
							style="font-weight: bolder; font-size: 20px"><span
							class="woocommerce-Price-currencySymbol">$</span><bdi>${totalAmount.toFixed(
			2
		)}</bdi></span>
					</td>
				</tr>
				<tr class="cart-tax">
					<th>Tax:</th>
					<td data-title="Subtotal"><span
							class="woocommerce-Price-amount amount"
							style="font-weight: bolder; font-size: 20px"><span
							class="woocommerce-Price-currencySymbol">$</span><bdi>${(
				totalAmount * 0.05
			).toFixed(2)}</bdi></span>
					</td>
				</tr>
				<tr
					class="woocommerce-shipping-totals shipping">
					<th>Shipping:</th>
					<td data-title="Shipping:">
						<ul id="shipping_method"
							class="woocommerce-shipping-methods">
							<li>
								<input type="hidden"
									name="shipping_method[0]"
									data-index="0"
									id="shipping_method_0_flat_rate2"
									value="flat_rate:2"
									class="shipping_method" /><label
									for="shipping_method_0_flat_rate2"><span
										class="woocommerce-Price-amount amount"
										style="font-weight: bolder; font-size: 20px"><span
										class="woocommerce-Price-currencySymbol">$</span><bdi id="shippingCost">${shippingCost.toFixed(
				2
			)}</bdi></span></label>
							</li>
						</ul>

					</td>
				</tr>
				<tr class="order-total">
					<th>Total:</th>
					<td data-title="Total"><strong><span
								class="woocommerce-Price-amount amount"
								style="font-weight: bolder; font-size: 20px"><span
								class="woocommerce-Price-currencySymbol">$</span><bdi id="totalCost">${(
				totalAmount +
				totalAmount * 0.05
			).toFixed(2)}</bdi></span></strong>
					</td>
				</tr>
				</table>
			</tbody>
		</table>
	</form>
	<br>
	<h4>Delivery Options</h4>
		<div colspan="6" class="actions" style="display: flex; gap: 30px;">
			<div style="display: flex; gap: 10px;"><input type="radio"  style="accent-color: rgb(46, 46, 46)" id="pickup-select" name="demo" onclick="displayDeliveryDetails(this)" checked="" data-toggle-value="duplication">Pickup</div>
			<div style="display: flex; gap: 10px;"><input type="radio" style="accent-color: rgb(46, 46, 46)" id="shipping-select" onclick="displayDeliveryDetails(this)" name="demo" data-toggle-value="duplication">Shipping</div>
		</div>
		<br>
		<div>
			<div class="woocommerce-form-coupon-toggle">
				<div style="border: 1px solid #bdb5aa; padding: 40px" id="delivery-details">
				</div>
			</div>
		</div>

		<br>
		<div>
			<button type="submit" onclick="proceedPayment()" class="wp-element-button" >Proceed to payment</button>
		</div>
 
</div>
	
	`;
		displayDeliveryDetails();
	} else if (userCarts?.length == null) {
		document.getElementById("cart-checkout").innerHTML = `
<p class="cart-empty woocommerce-info">
                                  Your cart is currently empty.
                                </p>
                                <p class="return-to-shop">
                                  <a
                                    class="button wc-backward wp-element-button"
                                    href="/shop-list"
                                  >
                                    Return to shop
                                  </a>
                                </p>
`;
	} else {
		document.getElementById("cart-checkout").innerHTML = `
<p class="cart-empty woocommerce-info">
                                  Your cart is currently empty.
                                </p>
                                <p class="return-to-shop">
                                  <a
                                    class="button wc-backward wp-element-button"
                                    href="/shop-list"
                                  >
                                    Return to shop
                                  </a>
                                </p>
`;
	}
}

checkoutHandler();

function proceedPayment() {

let deliveryOption = {
	type: "pickup",
	amount: 0
};

	let checkoutLists = []

	// console.log(userCarts);
	userCarts.forEach(cartItem => {
		checkoutLists.push(
			{
				"price_data": {
					"currency": "usd",
					"product_data": {
						"name": cartItem?.title,
						"images": [cartItem?.image],
						// "tax_code": 'txcd_99999999',
					},
					"unit_amount": cartItem?.price * 100,
					// "tax_behavior": 'exclusive',
				},
				"quantity": cartItem?.quantity
			}
		)

		console.log(checkoutLists)
	})

	if (document.getElementById("shipping-select").checked == true) {
	deliveryOption = {
		type: "shipping",
		amount: shippingCost * 100
	}

	}
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const raw = JSON.stringify({ checkoutLists, deliveryOption });

	const requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow"
	};

	fetch("https://jesoevents-stripe.netlify.app/.netlify/functions/api", requestOptions)
		.then((response) => response.text())
		.then((result) => location.href = result)
		.catch((error) => console.error(error));
}
