<template>
  <footer class="footer-light">
    <div class="light-layout">
      <div class="container">
        <section class="small-section border-section border-top-0">
          <div class="row">
            <div class="col-lg-6">
              <div class="subscribe">
                <div>
                  <h4>KNOW IT ALL FIRST!</h4>
                  <p>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <form
                action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&amp;id=082f74cbda"
                class="form-inline subscribe-form auth-form needs-validation" method="post"
                id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                <div class="form-group mx-sm-3">
                  <input type="text" class="form-control" name="EMAIL" id="mce-EMAIL" placeholder="Enter your email"
                    required="required">
                </div>
                <button type="submit" class="btn btn-solid" id="mc-submit">subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
    <section class="section-b-space light-layout">
      <div class="container">
        <div class="row footer-theme partition-f">
          <div class="col-lg-4 col-md-6">
            <div class="footer-title footer-mobile-title">
              <h4>О нас</h4>
            </div>
            <div class="footer-contant">
              <FooterAbout />
              <FooterSocials />
            </div>
          </div>

          <div class="col offset-xl-4">
            <div class="sub-title">
              <div class="footer-title">
                <h4>Информация о магазине</h4>
              </div>
              <div class="footer-contant">
                <FooterContacts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="sub-footer">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-md-6 col-sm-12">
            <div class="footer-end">
              <p><i class="fa fa-copyright" aria-hidden="true"></i> 2024 created by
                Sonic Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>

import FooterContacts from '~/components/Footer/FooterContacts.vue';
</script>

<style></style>
