let userCarts = JSON.parse(localStorage.getItem("user-carts"));
let finalQuantity;

function removeItemFromCart(whichItem) {
  userCarts.splice(whichItem?.id - 1, 1);
  localStorage.setItem("user-carts", JSON.stringify(userCarts));
  // checkUserCarts()
  checkoutHandler();
}

// function updateNewQuantity(item) {
// 	let newQuantity = document.getElementById(`quantity-change-${item}`).value
// 	// console.log(userCarts[item - 1])
// 	// console.log(userCarts[item - 1]?.quantity)
// 	console.log(typeof(newQuantity))
// 	userCarts[item - 1]?.quantity == newQuantity;
// 	console.log(typeof(userCarts[item - 1]?.quantity));
// 	localStorage.setItem('user-carts', JSON.stringify(userCarts))
// 	// userCarts.splice(whichItem?.id - 1, 1)
// 	// finalQuantity = document.getElementById(item?.id).value
// 	// console.log(finalQuantity)
// 	// checkoutHandler(finalQuantity)
// }

// finalQuantity == undefined ? cartItem?.quantity : finalQuantity;

function checkoutHandler(item) {
  // let newQuantity = document.getElementById(`quantity-change-${item}`).value;
  // console.log(item);
  if (userCarts.length > 0) {
    let userCartListing = "";
    let cartId = 0;
    let totalAmount = 0;
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
      userCartListing += `

      <tr class="woocommerce-cart-form__cart-item cart_item">

					<td class="product-remove">
						<a
							class="remove" aria-label="Remove this item" data-product_id="1075" id="${cartId}" onclick="removeItemFromCart(this)"
							data-product_sku="116">×</a>
					</td>

					<td class="product-thumbnail">
						<a href="https://banquet.qodeinteractive.com/product/minimal-vase-2/"><img width="600"
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
								name="cart[46072631582fc240dd2674a7d063b040][qty]" value="${
                  cartItem?.quantity
                }" onchange="checkoutHandler(this)"  title="Qty" size="4"
								inputmode="numeric">
							<span class="qodef-quantity-plus"><span class="icon-arrows-right"></span></span>
						</div>
					</td>
					<td class="product-subtotal" data-title="Subtotal">
						<span class="woocommerce-Price-amount amount"><bdi>${
              cartItem?.quantity * cartItem?.price
            }<span
									class="woocommerce-Price-currencySymbol">$</span></bdi></span>
					</td>
				</tr>
    `;
    });

    document.getElementById("cart-checkout").innerHTML = `
<div id="qodef-woo-page" class="qodef--cart">
	<form class="woocommerce-cart-form" action="https://banquet.qodeinteractive.com/cart/" method="post">

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
					<th>Total</th>
					<td data-title="Total"><strong><span class="woocommerce-Price-amount amount"><bdi>${totalAmount}<span class="woocommerce-Price-currencySymbol">$</span></bdi></span></strong> </td>
				</tr>
				<tr>
					<td colspan="6" class="actions">
						<button type="submit" onclick="proceedPayment()" class="button wp-element-button" name="update_cart" value="Update cart"
							disabled="" aria-disabled="true">Proceed</button>
					</td>
				</tr>

			</tbody>
		</table>
	</form>

	<div class="cart-collaterals">
		<div class="cart_totals ">


			<h2>Cart totals</h2>

			<table cellspacing="0"
				class="shop_table shop_table_responsive">

				<tr class="cart-subtotal">
					<th>Subtotal</th>
					<td data-title="Subtotal"><span
							class="woocommerce-Price-amount amount"
							style="font-weight: bolder;"><bdi>$310.00<span
									class="woocommerce-Price-currencySymbol"></span></bdi></span>
					</td>
				</tr>
				<tr class="cart-tax">
					<th>Tax</th>
					<td data-title="Subtotal"><span
							class="woocommerce-Price-amount amount"
							style="font-weight: bolder;"><bdi>$30.00<span
									class="woocommerce-Price-currencySymbol"></span></bdi></span>
					</td>
				</tr>
				<style>
					#radio1, #radio2 {
						accent-color: rgb(46, 46, 46);
					}
				</style>
				<tr
					class="woocommerce-shipping-totals shipping">
					<th> <input type="radio" id="radio1" name="demo" CHECKED
						data-toggle-value="duplication"> Pickup</th>
					<td data-title="Subtotal"><span
							class="woocommerce-Price-amount amount"><bdi>Pickup at our walk in store.<br>
								50 Nolanridge Ct NW Unit 255, <br>Calgary, AB T3R 1W9, Canada<span
									class="woocommerce-Price-currencySymbol"></span></bdi></span>
					</td>
					<th> <input type="radio" id="radio2" name="demo" 
						data-toggle-value="permission"> Delivery</th>
					<div data-toggle-group="permission">
					<td data-title="Shipping">
						<ul id="shipping_method"
							class="woocommerce-shipping-methods">
							<li>
								<input type="hidden"
									name="shipping_method[0]"
									data-index="0"
									id="shipping_method_0_flat_rate2"
									value="flat_rate:2"
									class="shipping_method" /><label
									for="shipping_method_0_flat_rate2">Flat
									rate: <span
										class="woocommerce-Price-amount amount"
										style="font-weight: bolder;"><bdi>$12.00<span
												class="woocommerce-Price-currencySymbol"></span></bdi></span></label>
							</li>
						</ul>
						<p
							class="woocommerce-shipping-destination">
							Shipping In
							<strong>Canada</strong>. </p>



						<form
							class="woocommerce-shipping-calculator"
							action="https://banquet.qodeinteractive.com/cart/"
							method="post">

							<a href="#"
								class="shipping-calculator-button">Add shipping
								Information</a>
							<section
								class="shipping-calculator-form"
								style="display:none;">

								<p class="form-row form-row-wide"
									id="calc_shipping_country_field">
									<label
										for="calc_shipping_country"
										class="screen-reader-text">Country
										/ region:</label>
									<select
										name="calc_shipping_country"
										id="calc_shipping_country"
										class="country_to_state country_select"
										rel="calc_shipping_state">
										<option
											value="default">
											Select a country
											/ region&hellip;
										</option>
										<option value="AF">
											Afghanistan
										</option>
										<option value="AX">
											Åland Islands
										</option>
										<option value="AL">
											Albania</option>
										<option value="DZ">
											Algeria</option>
										<option value="AS">
											American Samoa
										</option>
										<option value="AD">
											Andorra</option>
										<option value="AO">
											Angola</option>
										<option value="AI">
											Anguilla
										</option>
										<option value="AQ">
											Antarctica
										</option>
										<option value="AG">
											Antigua and
											Barbuda</option>
										<option value="AR">
											Argentina
										</option>
										<option value="AM">
											Armenia</option>
										<option value="AW">
											Aruba</option>
										<option value="AU">
											Australia
										</option>
										<option value="AT">
											Austria</option>
										<option value="AZ">
											Azerbaijan
										</option>
										<option value="BS">
											Bahamas</option>
										<option value="BH">
											Bahrain</option>
										<option value="BD">
											Bangladesh
										</option>
										<option value="BB">
											Barbados
										</option>
										<option value="BY">
											Belarus</option>
										<option value="PW">
											Belau</option>
										<option value="BE">
											Belgium</option>
										<option value="BZ">
											Belize</option>
										<option value="BJ">
											Benin</option>
										<option value="BM">
											Bermuda</option>
										<option value="BT">
											Bhutan</option>
										<option value="BO">
											Bolivia</option>
										<option value="BQ">
											Bonaire, Saint
											Eustatius and
											Saba</option>
										<option value="BA">
											Bosnia and
											Herzegovina
										</option>
										<option value="BW">
											Botswana
										</option>
										<option value="BV">
											Bouvet Island
										</option>
										<option value="BR">
											Brazil</option>
										<option value="IO">
											British Indian
											Ocean Territory
										</option>
										<option value="BN">
											Brunei</option>
										<option value="BG">
											Bulgaria
										</option>
										<option value="BF">
											Burkina Faso
										</option>
										<option value="BI">
											Burundi</option>
										<option value="KH">
											Cambodia
										</option>
										<option value="CM">
											Cameroon
										</option>
										<option value="CA"
										selected='selected'>
											Canada</option>
										<option value="CV">
											Cape Verde
										</option>
										<option value="KY">
											Cayman Islands
										</option>
										<option value="CF">
											Central African
											Republic
										</option>
										<option value="TD">
											Chad</option>
										<option value="CL">
											Chile</option>
										<option value="CN">
											China</option>
										<option value="CX">
											Christmas Island
										</option>
										<option value="CC">
											Cocos (Keeling)
											Islands</option>
										<option value="CO">
											Colombia
										</option>
										<option value="KM">
											Comoros</option>
										<option value="CG">
											Congo
											(Brazzaville)
										</option>
										<option value="CD">
											Congo (Kinshasa)
										</option>
										<option value="CK">
											Cook Islands
										</option>
										<option value="CR">
											Costa Rica
										</option>
										<option value="HR">
											Croatia</option>
										<option value="CU">
											Cuba</option>
										<option value="CW">
											Cura&ccedil;ao
										</option>
										<option value="CY">
											Cyprus</option>
										<option value="CZ">
											Czech Republic
										</option>
										<option value="DK">
											Denmark</option>
										<option value="DJ">
											Djibouti
										</option>
										<option value="DM">
											Dominica
										</option>
										<option value="DO">
											Dominican
											Republic
										</option>
										<option value="EC">
											Ecuador</option>
										<option value="EG">
											Egypt</option>
										<option value="SV">
											El Salvador
										</option>
										<option value="GQ">
											Equatorial
											Guinea</option>
										<option value="ER">
											Eritrea</option>
										<option value="EE">
											Estonia</option>
										<option value="SZ">
											Eswatini
										</option>
										<option value="ET">
											Ethiopia
										</option>
										<option value="FK">
											Falkland Islands
										</option>
										<option value="FO">
											Faroe Islands
										</option>
										<option value="FJ">
											Fiji</option>
										<option value="FI">
											Finland</option>
										<option value="FR">
											France</option>
										<option value="GF">
											French Guiana
										</option>
										<option value="PF">
											French Polynesia
										</option>
										<option value="TF">
											French Southern
											Territories
										</option>
										<option value="GA">
											Gabon</option>
										<option value="GM">
											Gambia</option>
										<option value="GE">
											Georgia</option>
										<option value="DE">
											Germany</option>
										<option value="GH">
											Ghana</option>
										<option value="GI">
											Gibraltar
										</option>
										<option value="GR">
											Greece</option>
										<option value="GL">
											Greenland
										</option>
										<option value="GD">
											Grenada</option>
										<option value="GP">
											Guadeloupe
										</option>
										<option value="GU">
											Guam</option>
										<option value="GT">
											Guatemala
										</option>
										<option value="GG">
											Guernsey
										</option>
										<option value="GN">
											Guinea</option>
										<option value="GW">
											Guinea-Bissau
										</option>
										<option value="GY">
											Guyana</option>
										<option value="HT">
											Haiti</option>
										<option value="HM">
											Heard Island and
											McDonald Islands
										</option>
										<option value="HN">
											Honduras
										</option>
										<option value="HK">
											Hong Kong
										</option>
										<option value="HU">
											Hungary</option>
										<option value="IS">
											Iceland</option>
										<option value="IN">
											India</option>
										<option value="ID">
											Indonesia
										</option>
										<option value="IR">
											Iran</option>
										<option value="IQ">
											Iraq</option>
										<option value="IE">
											Ireland</option>
										<option value="IM">
											Isle of Man
										</option>
										<option value="IL">
											Israel</option>
										<option value="IT">
											Italy</option>
										<option value="CI">
											Ivory Coast
										</option>
										<option value="JM">
											Jamaica</option>
										<option value="JP">
											Japan</option>
										<option value="JE">
											Jersey</option>
										<option value="JO">
											Jordan</option>
										<option value="KZ">
											Kazakhstan
										</option>
										<option value="KE">
											Kenya</option>
										<option value="KI">
											Kiribati
										</option>
										<option value="KW">
											Kuwait</option>
										<option value="KG">
											Kyrgyzstan
										</option>
										<option value="LA">
											Laos</option>
										<option value="LV">
											Latvia</option>
										<option value="LB">
											Lebanon</option>
										<option value="LS">
											Lesotho</option>
										<option value="LR">
											Liberia</option>
										<option value="LY">
											Libya</option>
										<option value="LI">
											Liechtenstein
										</option>
										<option value="LT">
											Lithuania
										</option>
										<option value="LU">
											Luxembourg
										</option>
										<option value="MO">
											Macao</option>
										<option value="MG">
											Madagascar
										</option>
										<option value="MW">
											Malawi</option>
										<option value="MY">
											Malaysia
										</option>
										<option value="MV">
											Maldives
										</option>
										<option value="ML">
											Mali</option>
										<option value="MT">
											Malta</option>
										<option value="MH">
											Marshall Islands
										</option>
										<option value="MQ">
											Martinique
										</option>
										<option value="MR">
											Mauritania
										</option>
										<option value="MU">
											Mauritius
										</option>
										<option value="YT">
											Mayotte</option>
										<option value="MX">
											Mexico</option>
										<option value="FM">
											Micronesia
										</option>
										<option value="MD">
											Moldova</option>
										<option value="MC">
											Monaco</option>
										<option value="MN">
											Mongolia
										</option>
										<option value="ME">
											Montenegro
										</option>
										<option value="MS">
											Montserrat
										</option>
										<option value="MA">
											Morocco</option>
										<option value="MZ">
											Mozambique
										</option>
										<option value="MM">
											Myanmar</option>
										<option value="NA">
											Namibia</option>
										<option value="NR">
											Nauru</option>
										<option value="NP">
											Nepal</option>
										<option value="NL">
											Netherlands
										</option>
										<option value="NC">
											New Caledonia
										</option>
										<option value="NZ">
											New Zealand
										</option>
										<option value="NI">
											Nicaragua
										</option>
										<option value="NE">
											Niger</option>
										<option value="NG">
											Nigeria</option>
										<option value="NU">
											Niue</option>
										<option value="NF">
											Norfolk Island
										</option>
										<option value="KP">
											North Korea
										</option>
										<option value="MK">
											North Macedonia
										</option>
										<option value="MP">
											Northern Mariana
											Islands</option>
										<option value="NO">
											Norway</option>
										<option value="OM">
											Oman</option>
										<option value="PK">
											Pakistan
										</option>
										<option value="PS">
											Palestinian
											Territory
										</option>
										<option value="PA">
											Panama</option>
										<option value="PG">
											Papua New Guinea
										</option>
										<option value="PY">
											Paraguay
										</option>
										<option value="PE">
											Peru</option>
										<option value="PH">
											Philippines
										</option>
										<option value="PN">
											Pitcairn
										</option>
										<option value="PL">
											Poland</option>
										<option value="PT">
											Portugal
										</option>
										<option value="PR">
											Puerto Rico
										</option>
										<option value="QA">
											Qatar</option>
										<option value="RE">
											Reunion</option>
										<option value="RO">
											Romania</option>
										<option value="RU">
											Russia</option>
										<option value="RW">
											Rwanda</option>
										<option value="ST">
											S&atilde;o
											Tom&eacute; and
											Pr&iacute;ncipe
										</option>
										<option value="BL">
											Saint
											Barth&eacute;lemy
										</option>
										<option value="SH">
											Saint Helena
										</option>
										<option value="KN">
											Saint Kitts and
											Nevis</option>
										<option value="LC">
											Saint Lucia
										</option>
										<option value="SX">
											Saint Martin
											(Dutch part)
										</option>
										<option value="MF">
											Saint Martin
											(French part)
										</option>
										<option value="PM">
											Saint Pierre and
											Miquelon
										</option>
										<option value="VC">
											Saint Vincent
											and the
											Grenadines
										</option>
										<option value="WS">
											Samoa</option>
										<option value="SM">
											San Marino
										</option>
										<option value="SA">
											Saudi Arabia
										</option>
										<option value="SN">
											Senegal</option>
										<option value="RS">
											Serbia</option>
										<option value="SC">
											Seychelles
										</option>
										<option value="SL">
											Sierra Leone
										</option>
										<option value="SG">
											Singapore
										</option>
										<option value="SK">
											Slovakia
										</option>
										<option value="SI">
											Slovenia
										</option>
										<option value="SB">
											Solomon Islands
										</option>
										<option value="SO">
											Somalia</option>
										<option value="ZA">
											South Africa
										</option>
										<option value="GS">
											South
											Georgia/Sandwich
											Islands</option>
										<option value="KR">
											South Korea
										</option>
										<option value="SS">
											South Sudan
										</option>
										<option value="ES">
											Spain</option>
										<option value="LK">
											Sri Lanka
										</option>
										<option value="SD">
											Sudan</option>
										<option value="SR">
											Suriname
										</option>
										<option value="SJ">
											Svalbard and Jan
											Mayen</option>
										<option value="SE">
											Sweden</option>
										<option value="CH">
											Switzerland
										</option>
										<option value="SY">
											Syria</option>
										<option value="TW">
											Taiwan</option>
										<option value="TJ">
											Tajikistan
										</option>
										<option value="TZ">
											Tanzania
										</option>
										<option value="TH">
											Thailand
										</option>
										<option value="TL">
											Timor-Leste
										</option>
										<option value="TG">
											Togo</option>
										<option value="TK">
											Tokelau</option>
										<option value="TO">
											Tonga</option>
										<option value="TT">
											Trinidad and
											Tobago</option>
										<option value="TN">
											Tunisia</option>
										<option value="TR">
											Turkey</option>
										<option value="TM">
											Turkmenistan
										</option>
										<option value="TC">
											Turks and Caicos
											Islands</option>
										<option value="TV">
											Tuvalu</option>
										<option value="UG">
											Uganda</option>
										<option value="UA">
											Ukraine</option>
										<option value="AE">
											United Arab
											Emirates
										</option>
										<option value="GB">
											United Kingdom
											(UK)</option>
										<option value="US">
											United States
											(US)</option>
										<option value="UM">
											United States
											(US) Minor
											Outlying Islands
										</option>
										<option value="UY">
											Uruguay</option>
										<option value="UZ">
											Uzbekistan
										</option>
										<option value="VU">
											Vanuatu</option>
										<option value="VA">
											Vatican</option>
										<option value="VE">
											Venezuela
										</option>
										<option value="VN">
											Vietnam</option>
										<option value="VG">
											Virgin Islands
											(British)
										</option>
										<option value="VI">
											Virgin Islands
											(US)</option>
										<option value="WF">
											Wallis and
											Futuna</option>
										<option value="EH">
											Western Sahara
										</option>
										<option value="YE">
											Yemen</option>
										<option value="ZM">
											Zambia</option>
										<option value="ZW">
											Zimbabwe
										</option>
									</select>
								</p>

								<p class="form-row form-row-wide"
									id="calc_shipping_state_field">
									<span>
										<label
											for="calc_shipping_state"
											class="screen-reader-text">State/County:</label>
										<select
											name="calc_shipping_state"
											class="state_select"
											id="calc_shipping_state"
											data-placeholder="State / County">
											<option
												value="">
												Select an
												option&hellip;
											</option>
											<option
												value="AB">
												Abia
											</option>
											<option
												value="FC">
												Abuja
											</option>
											<option
												value="AD">
												Adamawa
											</option>
											<option
												value="AK">
												Akwa Ibom
											</option>
											<option
												value="AN">
												Anambra
											</option>
											<option
												value="BA">
												Bauchi
											</option>
											<option
												value="BY">
												Bayelsa
											</option>
											<option
												value="BE">
												Benue
											</option>
											<option
												value="BO">
												Borno
											</option>
											<option
												value="CR">
												Cross River
											</option>
											<option
												value="DE">
												Delta
											</option>
											<option
												value="EB">
												Ebonyi
											</option>
											<option
												value="ED">
												Edo</option>
											<option
												value="EK">
												Ekiti
											</option>
											<option
												value="EN">
												Enugu
											</option>
											<option
												value="GO">
												Gombe
											</option>
											<option
												value="IM">
												Imo</option>
											<option
												value="JI">
												Jigawa
											</option>
											<option
												value="KD">
												Kaduna
											</option>
											<option
												value="KN">
												Kano
											</option>
											<option
												value="KT">
												Katsina
											</option>
											<option
												value="KE">
												Kebbi
											</option>
											<option
												value="KO">
												Kogi
											</option>
											<option
												value="KW">
												Kwara
											</option>
											<option
												value="LA">
												Lagos
											</option>
											<option
												value="NA">
												Nasarawa
											</option>
											<option
												value="NI">
												Niger
											</option>
											<option
												value="OG">
												Ogun
											</option>
											<option
												value="ON">
												Ondo
											</option>
											<option
												value="OS">
												Osun
											</option>
											<option
												value="OY">
												Oyo</option>
											<option
												value="PL">
												Plateau
											</option>
											<option
												value="RI">
												Rivers
											</option>
											<option
												value="SO">
												Sokoto
											</option>
											<option
												value="TA">
												Taraba
											</option>
											<option
												value="YO">
												Yobe
											</option>
											<option
												value="ZA">
												Zamfara
											</option>
										</select>
									</span>
								</p>

								<p class="form-row form-row-wide"
									id="calc_shipping_city_field">
									<label
										for="calc_shipping_city"
										class="screen-reader-text">City:</label>
									<input type="text"
										class="input-text"
										value=""
										placeholder="City"
										name="calc_shipping_city"
										id="calc_shipping_city" />
								</p>

								<p class="form-row form-row-wide"
									id="calc_shipping_postcode_field">
									<label
										for="calc_shipping_postcode"
										class="screen-reader-text">Postcode
										/ ZIP:</label>
									<input type="text"
										class="input-text"
										value=""
										placeholder="Postcode / ZIP"
										name="calc_shipping_postcode"
										id="calc_shipping_postcode" />
								</p>

								<p><button type="submit"
										name="calc_shipping"
										value="1"
										class="button wp-element-button">Update</button>
								</p>
								<input type="hidden"
									id="woocommerce-shipping-calculator-nonce"
									name="woocommerce-shipping-calculator-nonce"
									value="a8fc8207c0" /><input
									type="hidden"
									name="_wp_http_referer"
									value="/cart/" />
							</section>
						</form>

					</td>
					</div>
				</tr>






				<tr class="order-total">
					<th>Total</th>
					<td data-title="Total"><strong><span
								class="woocommerce-Price-amount amount"><bdi>$433.00<span
										class="woocommerce-Price-currencySymbol"></span></bdi></span></strong>
					</td>
				</tr>


			</table>

			<div class="wc-proceed-to-checkout">

				<a href="https://banquet.qodeinteractive.com/checkout/"
					class="checkout-button button alt wc-forward wp-element-button">
					Proceed to checkout</a>
			</div>


		</div>
	</div>

</div>
	
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
	fetch('https://2rw8rf-3000.csb.app/pay', {
            method: "POST",
            body: JSON.stringify({
                "paymentInfo": {
					amount: "5000",
					currency: "usd"
				},
                
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(
                (res) => {
                    if (res.status == 200) {
                        console.log("done")
                        // console.log(paymentUrl)
                        // window.location.href = paymentUrl;
                    }
                }
            )
}