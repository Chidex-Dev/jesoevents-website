(function () {
    'use strict';
    
    var module = {
        options: [],
        header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
        dataos: [
            { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
            { name: 'Windows', value: 'Win', version: 'NT' },
            { name: 'iPhone', value: 'iPhone', version: 'OS' },
            { name: 'iPad', value: 'iPad', version: 'OS' },
            { name: 'Kindle', value: 'Silk', version: 'Silk' },
            { name: 'Android', value: 'Android', version: 'Android' },
            { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
            { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
            { name: 'Macintosh', value: 'Mac', version: 'OS X' },
            { name: 'Linux', value: 'Linux', version: 'rv' },
            { name: 'Palm', value: 'Palm', version: 'PalmOS' }
        ],
        databrowser: [
            { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
            { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
            { name: 'Safari', value: 'Safari', version: 'Version' },
            { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
            { name: 'Opera', value: 'Opera', version: 'Opera' },
            { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
            { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
        ],
        init: function () {
            var agent = this.header.join(' '),
                os = this.matchItem(agent, this.dataos),
                browser = this.matchItem(agent, this.databrowser);
            
            return { os: os, browser: browser };
        },
        matchItem: function (string, data) {
            var i = 0,
                j = 0,
                html = '',
                regex,
                regexv,
                match,
                matches,
                version;
            
            for (i = 0; i < data.length; i += 1) {
                regex = new RegExp(data[i].value, 'i');
                match = regex.test(string);
                if (match) {
                    regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                    matches = string.match(regexv);
                    version = '';
                    if (matches) { if (matches[1]) { matches = matches[1]; } }
                    if (matches) {
                        matches = matches.split(/[._]+/);
                        for (j = 0; j < matches.length; j += 1) {
                            if (j === 0) {
                                version += matches[j] + '.';
                            } else {
                                version += matches[j];
                            }
                        }
                    } else {
                        version = '0';
                    }
                    return {
                        name: data[i].name,
                        version: parseFloat(version)
                    };
                }
            }
            return { name: 'unknown', version: 0 };
        }
    };
    
    var e = module.init(),
        debug = '';
        
    debug += 'navigator.userAgent = ' + navigator.userAgent + '<br/>';
    
    // debug += 'os.name = ' + e.os.name + '<br/>';
    // debug += 'os.version = ' + e.os.version + '<br/>';
    // debug += 'browser.name = ' + e.browser.name + '<br/>';
    // debug += 'browser.version = ' + e.browser.version + '<br/>';
    
    // debug += '<br/>';
    // debug += 'navigator.userAgent = ' + navigator.userAgent + '<br/>';
    // debug += 'navigator.appVersion = ' + navigator.appVersion + '<br/>';
    // debug += 'navigator.platform = ' + navigator.platform + '<br/>';
    // debug += 'navigator.vendor = ' + navigator.vendor + '<br/>';
    
    // document.getElementById('log').innerHTML = debug;
    
}());

localStorage.setItem("mytime", Date.now());
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

console.log(localStorage.getItem("cart-items"))

// document.querySelector('.single_add_to_cart_button').addEventListener('onclick', addProduct, false)


// document.getElementById('cart-items').innerHTML = customerCart.length == 0 ? cartNoList : cartContainerList;