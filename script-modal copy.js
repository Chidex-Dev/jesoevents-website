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


  let modalSectionTemplate =  `<section class="rbt-sidearea  rbt-active width-100">
  <div class="rbt-list-holder">
      <div class="rbt-list">
          <div class="rbt-list-inner">

              <div class="rbt-logo">
                  <a href="https://qodeinteractive.com" target="_blank">
                      <div class="logo-svg-holder">
                          <svg x="0px" y="0px" viewBox="0 0 87 87" style="fill: #ee2852; height: 40px;">
                              <path d="M55.4,81.5c6.1-11.1,5.2-16.1-4.3-24.3c6.1-3.5,9.5-8.5,9.1-15.7c-0.5-8.2-7.7-14.7-16.3-14.6
                                  c-8.5,0.1-15.6,6.7-15.9,15c-0.3,8.5,5.9,15.8,14.3,16.6c1.4,0.1,2.8,0.2,4.2,0.5c5.9,1.2,10.2,6.7,9.8,12.6
                                  c-0.4,6.4-5.5,11.4-11.8,11.7C24.9,84.2,5.9,68.5,3.2,49.3C-0.1,26.9,14.4,6.8,36.4,2.8c22.3-4,43.4,10,48.1,32
                                  c4.3,20-8.6,41.2-28.4,46.7C55.9,81.5,55.6,81.5,55.4,81.5z"></path>
                          </svg>
                      </div>
                      <p class="logo-text-holder">Qode Interactive</p>
                  </a>
              </div>

              
              
                                      <span class="rbt-list-related">Related Themes</span>
                                                  <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/conflux-conference-and-event-theme/?utm_campaign=edge-themes&amp;utm_source=toolbar" title="Conflux - Conference and Event Theme">
                              <div class="rbt-theme">
                                  <div class="rbt-img-hover">
                                      <img itemprop="image" width="225" height="114" src="https://previews.customer.envatousercontent.com/files/463161932/00_preview.__large_preview.png" alt="Conflux" class="">
                                  </div>
                                  <span class="rbt-theme-name">Conflux</span>
                                  <span class="rbt-theme-tag">events</span>
                                  <span class="rbt-theme-price">$85</span>
                              </div>
                          </a>
                                                          <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/bluhen-event-conference-theme/?utm_campaign=select-themes&amp;utm_source=toolbar" title="Blühen - Event &amp; Conference WordPress Theme">
                              <div class="rbt-theme">
                                  <div class="rbt-img-hover">
                                      <img itemprop="image" width="225" height="114" src="https://previews.customer.envatousercontent.com/files/439722640/00_preview.__large_preview.png" alt="Blühen" class="">
                                  </div>
                                  <span class="rbt-theme-name">Blühen</span>
                                  <span class="rbt-theme-tag">events</span>
                                  <span class="rbt-theme-price">$85</span>
                              </div>
                          </a>
                                                          <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/booth-event-and-conference-theme/?utm_campaign=select-themes&amp;utm_source=toolbar" title="Booth - Event and Conference Theme">
                              <div class="rbt-theme">
                                  <div class="rbt-img-hover">
                                      <img itemprop="image" width="225" height="114" src="https://previews.customer.envatousercontent.com/files/465868513/Booth.__large_preview.jpg" alt="Booth" class="">
                                  </div>
                                  <span class="rbt-theme-name">Booth</span>
                                  <span class="rbt-theme-tag">events</span>
                                  <span class="rbt-theme-price">$85</span>
                              </div>
                          </a>
                                                          <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/wellexpo-a-modern-event-and-conference-wordpress-theme/?utm_campaign=select-themes&amp;utm_source=toolbar" title="WellExpo - Event &amp; Conference WordPress Theme">
                              <div class="rbt-theme">
                                  <div class="rbt-img-hover">
                                      <img itemprop="image" width="225" height="114" src="https://previews.customer.envatousercontent.com/files/261413543/00_preview.__large_preview.png" alt="WellExpo" class="">
                                  </div>
                                  <span class="rbt-theme-name">WellExpo</span>
                                  <span class="rbt-theme-tag">events</span>
                                  <span class="rbt-theme-price">$85</span>
                              </div>
                          </a>
                                                          <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/evently-multi-concept-event-and-conference-theme/?utm_campaign=mikado-themes&amp;utm_source=toolbar" title="Evently - Conference &amp; Meetup Theme">
                              <div class="rbt-theme">
                                  <div class="rbt-img-hover">
                                      <img itemprop="image" width="225" height="114" src="https://previews.customer.envatousercontent.com/files/230870921/00_preview.__large_preview.png" alt="Evently" class="">
                                  </div>
                                  <span class="rbt-theme-name">Evently</span>
                                  <span class="rbt-theme-tag">events</span>
                                  <span class="rbt-theme-price">$69</span>
                              </div>
                          </a>
                                                          <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/xpo-business-conference-theme/?utm_campaign=edge-themes&amp;utm_source=toolbar" title="Xpo - Conference &amp; Event Theme">
                              <div class="rbt-theme">
                                  <div class="rbt-img-hover">
                                      <img itemprop="image" width="225" height="114" src="https://previews.customer.envatousercontent.com/files/219817492/00_preview.__large_preview.png" alt="Xpo" class="">
                                  </div>
                                  <span class="rbt-theme-name">Xpo</span>
                                  <span class="rbt-theme-tag">events</span>
                                  <span class="rbt-theme-price">$79</span>
                              </div>
                          </a>
                          
              <span class="rbt-list-new">New Themes</span>
                                          <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/prophysique-physiotherapy-and-medical-wordpress-theme/?utm_campaign=select-themes&amp;utm_source=toolbar" title="ProPhysique - Physiotherapy and Medical WordPress Theme">
                          <div class="rbt-theme">
                              <div class="rbt-img-hover">
                                  <img itemprop="image" width="225" height="114" src="https://previews.customer.envatousercontent.com/files/486654378/00_preview.__large_preview.png" alt="ProPhysique" class="">
                              </div>
                              <span class="rbt-theme-name">ProPhysique</span>
                              <span class="rbt-theme-tag">medical</span>
                              <span class="rbt-theme-price">$79</span>
                          </div>
                      </a>
                                                  <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/wanderaway-travel-blog-wordpress-theme/?utm_campaign=select-themes&amp;utm_source=toolbar" title="WanderAway - Travel Blog WordPress Theme">
                          <div class="rbt-theme">
                              <div class="rbt-img-hover rbt-lazy-load">
                                  <img itemprop="image" data-image="https://previews.customer.envatousercontent.com/files/485025952/00_preview.__large_preview.png" width="225" height="114" src="https://toolbar.qodeinteractive.com/_toolbar/assets/img/rbt-placeholder.jpg" alt="WanderAway">
                              </div>
                              <span class="rbt-theme-name">WanderAway</span>
                              <span class="rbt-theme-tag">blog &amp; magazine</span>
                              <span class="rbt-theme-price">$85</span>
                          </div>
                      </a>
                                                  <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/mien-eyelash-eyebrow-salon-wordpress-theme/?utm_campaign=mikado-themes&amp;utm_source=toolbar" title="Mien - Eyelash &amp; Eyebrow Salon WordPress Theme">
                          <div class="rbt-theme">
                              <div class="rbt-img-hover rbt-lazy-load">
                                  <img itemprop="image" data-image="https://previews.customer.envatousercontent.com/files/484176883/00_preview.__large_preview.png" width="225" height="114" src="https://toolbar.qodeinteractive.com/_toolbar/assets/img/rbt-placeholder.jpg" alt="Mien">
                              </div>
                              <span class="rbt-theme-name">Mien</span>
                              <span class="rbt-theme-tag">lifestyle</span>
                              <span class="rbt-theme-price">$79</span>
                          </div>
                      </a>
                                                  <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/einar-design-agency-wordpress-theme/?utm_campaign=select-themes&amp;utm_source=toolbar" title="Einar - Design Agency WordPress Theme">
                          <div class="rbt-theme">
                              <div class="rbt-img-hover rbt-lazy-load">
                                  <img itemprop="image" data-image="https://previews.customer.envatousercontent.com/files/485018403/00_preview.__large_preview.png" width="225" height="114" src="https://toolbar.qodeinteractive.com/_toolbar/assets/img/rbt-placeholder.jpg" alt="Einar">
                              </div>
                              <span class="rbt-theme-name">Einar</span>
                              <span class="rbt-theme-tag">creative business</span>
                              <span class="rbt-theme-price">$89</span>
                          </div>
                      </a>
                                                  <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/chaises-furniture-woocommerce-wordpress-theme/?utm_campaign=edge-themes&amp;utm_source=toolbar" title="Chaises - Furniture WooCommerce WordPress Theme">
                          <div class="rbt-theme">
                              <div class="rbt-img-hover rbt-lazy-load">
                                  <img itemprop="image" data-image="https://previews.customer.envatousercontent.com/files/481413281/00_preview.__large_preview.png" width="225" height="114" src="https://toolbar.qodeinteractive.com/_toolbar/assets/img/rbt-placeholder.jpg" alt="Chaises">
                              </div>
                              <span class="rbt-theme-name">Chaises</span>
                              <span class="rbt-theme-tag">woocommerce</span>
                              <span class="rbt-theme-price">$85</span>
                          </div>
                      </a>
                                                  <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/sonora-photography-wordpress-theme/?utm_campaign=select-themes&amp;utm_source=toolbar" title="Sonora - Photography WordPress Theme">
                          <div class="rbt-theme">
                              <div class="rbt-img-hover rbt-lazy-load">
                                  <img itemprop="image" data-image="https://previews.customer.envatousercontent.com/files/481152732/00_preview.__large_preview.jpg" width="225" height="114" src="https://toolbar.qodeinteractive.com/_toolbar/assets/img/rbt-placeholder.jpg" alt="Sonora">
                              </div>
                              <span class="rbt-theme-name">Sonora</span>
                              <span class="rbt-theme-tag">photography</span>
                              <span class="rbt-theme-price">$85</span>
                          </div>
                      </a>
                                                  <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/exon-gaming-and-esports-wordpress-theme/?utm_campaign=edge-themes&amp;utm_source=toolbar" title="Exon - Gaming and eSports WordPress Theme">
                          <div class="rbt-theme">
                              <div class="rbt-img-hover rbt-lazy-load">
                                  <img itemprop="image" data-image="https://previews.customer.envatousercontent.com/files/480586445/00_preview.__large_preview.jpg" width="225" height="114" src="https://toolbar.qodeinteractive.com/_toolbar/assets/img/rbt-placeholder.jpg" alt="Exon">
                              </div>
                              <span class="rbt-theme-name">Exon</span>
                              <span class="rbt-theme-tag">gaming</span>
                              <span class="rbt-theme-price">$85</span>
                          </div>
                      </a>
                                                  <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/peony-organic-tea-and-herbal-shop-wordpress-theme/?utm_campaign=select-themes&amp;utm_source=toolbar" title="Peony - Organic Tea and Herbal Shop WordPress Theme">
                          <div class="rbt-theme">
                              <div class="rbt-img-hover rbt-lazy-load">
                                  <img itemprop="image" data-image="https://previews.customer.envatousercontent.com/files/480073194/00_preview.__large_preview.png" width="225" height="114" src="https://toolbar.qodeinteractive.com/_toolbar/assets/img/rbt-placeholder.jpg" alt="Peony">
                              </div>
                              <span class="rbt-theme-name">Peony</span>
                              <span class="rbt-theme-tag">woocommerce</span>
                              <span class="rbt-theme-price">$85</span>
                          </div>
                      </a>
                                                  <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/avelina-chocolate-and-cake-shop-theme/?utm_campaign=mikado-themes&amp;utm_source=toolbar" title="Avelina - Chocolate and Cake Shop Theme">
                          <div class="rbt-theme">
                              <div class="rbt-img-hover rbt-lazy-load">
                                  <img itemprop="image" data-image="https://previews.customer.envatousercontent.com/files/476343570/00_preview.__large_preview.png" width="225" height="114" src="https://toolbar.qodeinteractive.com/_toolbar/assets/img/rbt-placeholder.jpg" alt="Avelina">
                              </div>
                              <span class="rbt-theme-name">Avelina</span>
                              <span class="rbt-theme-tag">food &amp; restaurants</span>
                              <span class="rbt-theme-price">$79</span>
                          </div>
                      </a>
                                                  <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/donde-elementor-portfolio-theme/?utm_campaign=edge-themes&amp;utm_source=toolbar" title="Donde - Artist Portfolio Theme">
                          <div class="rbt-theme">
                              <div class="rbt-img-hover rbt-lazy-load">
                                  <img itemprop="image" data-image="https://previews.customer.envatousercontent.com/files/474947761/00_preview.__large_preview.png" width="225" height="114" src="https://toolbar.qodeinteractive.com/_toolbar/assets/img/rbt-placeholder.jpg" alt="Donde">
                              </div>
                              <span class="rbt-theme-name">Donde</span>
                              <span class="rbt-theme-tag">portfolio</span>
                              <span class="rbt-theme-price">$85</span>
                          </div>
                      </a>
                                                  <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/orison-church-and-charity-theme/?utm_campaign=edge-themes&amp;utm_source=toolbar" title="Orison - Church and Charity Theme">
                          <div class="rbt-theme">
                              <div class="rbt-img-hover rbt-lazy-load">
                                  <img itemprop="image" data-image="https://previews.customer.envatousercontent.com/files/474092662/00_preview.__large_preview.png" width="225" height="114" src="https://toolbar.qodeinteractive.com/_toolbar/assets/img/rbt-placeholder.jpg" alt="Orison">
                              </div>
                              <span class="rbt-theme-name">Orison</span>
                              <span class="rbt-theme-tag">nonprofit</span>
                              <span class="rbt-theme-price">$79</span>
                          </div>
                      </a>
                                                  <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/sorina-creative-portfolio-theme/?utm_campaign=select-themes&amp;utm_source=toolbar" title="Sørina - Creative Portfolio Theme">
                          <div class="rbt-theme">
                              <div class="rbt-img-hover rbt-lazy-load">
                                  <img itemprop="image" data-image="https://previews.customer.envatousercontent.com/files/476774171/Sorina.__large_preview.png" width="225" height="114" src="https://toolbar.qodeinteractive.com/_toolbar/assets/img/rbt-placeholder.jpg" alt="Sørina">
                              </div>
                              <span class="rbt-theme-name">Sørina</span>
                              <span class="rbt-theme-tag">portfolio</span>
                              <span class="rbt-theme-price">$85</span>
                          </div>
                      </a>
                                                  <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/morkie-pet-shop-and-pet-care-theme/?utm_campaign=select-themes&amp;utm_source=toolbar" title="Morkie - Pet Shop and Pet Care Theme">
                          <div class="rbt-theme">
                              <div class="rbt-img-hover rbt-lazy-load">
                                  <img itemprop="image" data-image="https://previews.customer.envatousercontent.com/files/472791486/00_preview.__large_preview.png" width="225" height="114" src="https://toolbar.qodeinteractive.com/_toolbar/assets/img/rbt-placeholder.jpg" alt="Morkie">
                              </div>
                              <span class="rbt-theme-name">Morkie</span>
                              <span class="rbt-theme-tag">woocommerce</span>
                              <span class="rbt-theme-price">$79</span>
                          </div>
                      </a>
                                                  <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/formarta-handmade-shop-theme/?utm_campaign=elated-themes&amp;utm_source=toolbar" title="Formarta - Handmade Shop Theme">
                          <div class="rbt-theme">
                              <div class="rbt-img-hover rbt-lazy-load">
                                  <img itemprop="image" data-image="https://previews.customer.envatousercontent.com/files/471985480/00_preview.__large_preview.png" width="225" height="114" src="https://toolbar.qodeinteractive.com/_toolbar/assets/img/rbt-placeholder.jpg" alt="Formarta">
                              </div>
                              <span class="rbt-theme-name">Formarta</span>
                              <span class="rbt-theme-tag">woocommerce</span>
                              <span class="rbt-theme-price">$79</span>
                          </div>
                      </a>
                                                  <a target="_blank" href="https://qodeinteractive.com/wordpress-theme/courtroom-lawyer-and-law-firm-theme/?utm_campaign=mikado-themes&amp;utm_source=toolbar" title="Courtroom - Lawyer and Law Firm Theme">
                          <div class="rbt-theme">
                              <div class="rbt-img-hover rbt-lazy-load">
                                  <img itemprop="image" data-image="https://previews.customer.envatousercontent.com/files/471108586/00_preview.__large_preview.png" width="225" height="114" src="https://toolbar.qodeinteractive.com/_toolbar/assets/img/rbt-placeholder.jpg" alt="Courtroom">
                              </div>
                              <span class="rbt-theme-name">Courtroom</span>
                              <span class="rbt-theme-tag">law</span>
                              <span class="rbt-theme-price">$79</span>
                          </div>
                      </a>
                      
              <!--					<div class="rbt-social-inlist">-->
              <!--						<span class="rbt-social-facebook"><a-->
              <!--									href="--><!--"-->
              <!--									target="_blank"><img-->
              <!--										src="--><!--"></a></span>-->
              <!--						<span class="rbt-social-twitter"><a-->
              <!--									href="--><!--"-->
              <!--									target="_blank"><img-->
              <!--										src="--><!--"></a></span>-->
              <!--						<span class="rbt-social-instagram"><a-->
              <!--									href="--><!--"-->
              <!--									target="_blank"><img-->
              <!--										src="--><!--"></a></span>-->
              <!--					</div>-->
          </div>
      </div>

      <div class="rbt-list-bottom">
          <a class="rbt-link-holder" href="https://qodeinteractive.com" target="_blank">
              <p class="link-text-holder">VIEW ALL QODE THEMES</p>
              <div class="link-svg-holder">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9" height="9" viewBox="0 0 9 9">
                      <image width="9" height="9" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAQAAABKmM6bAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfjBhISBAPLk0qYAAAAZ0lEQVQI103OsQnCUACE4S9qmofLWLpDcChXEPcIksoF3CG94ALaBDmLl0j+Kw7urjgxq2TMmBIblWLQag1KE2jcbT1w9F1WN53JpNPvQFzm6uO6rFaso/3s/xOHPHOKkFcq75xr+QPBNi/UsU/OawAAAABJRU5ErkJggg=="></image>
                  </svg>
              </div>
          </a>
      </div>
  </div>
</section>`

  document.getElementById('modal-section').innerHTML = modalSectionTemplate;