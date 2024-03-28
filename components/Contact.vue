<template>
  <section class="contact-page section-b-space">
    <div class="container">
      <div class="row section-b-space">
        <div class="col-lg-7 map">
          <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=ru&amp;q=Gyeonggi-do,%20Ansan-si,%20Danwon-gu,%20Choji-dong,%20742-3,%20210%ED%98%B8+(Evacode)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowfullscreen></iframe>
        </div>
        <div class="col-lg-5">
          <div class="contact-right">
            <ul>
              <li>
                <div class="contact-icon"><img src="../assets/images/icon/phone.png"
                                               alt="Generic placeholder image">
                  <h6>Звоните</h6>
                </div>
                <div class="media-body">
                  <p>+8210-7652-8595 (там WhatsApp)</p>
                  <p>&nbsp;</p>
                </div>
              </li>
              <li>
                <div class="contact-icon"><i class="fa fa-map-marker" aria-hidden="true"></i>
                  <h6>Адрес</h6>
                </div>
                <div class="media-body">
                  <p>안산시 단원구 초지동 742-3, 2 этаж, 210 кабинет</p>
                  <p>Gyeonggi-do, Ansan-si, Danwon-gu, Choji-dong, 742-3, 210호</p>
                </div>
              </li>
              <li>
                <div class="contact-icon"><img src="../assets/images/icon/email.png"
                                               alt="Generic placeholder image">
                  <h6>Email</h6>
                </div>
                <div class="media-body">
                  <p>shop@evacode.org</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <form class="theme-form">
            <div class="form-row row">
              <div class="col-md-6">
                <label for="name">Имя</label>
                <input type="text" class="form-control" id="name" placeholder="Введите имя"
                       required="">
              </div>
              <div class="col-md-6">
                <label for="email">Фамилия</label>
                <input type="text" class="form-control" id="last-name" placeholder="Введите фамилию" required="">
              </div>
              <div class="col-md-6">
                <label for="review">Номер телефона</label>
                <input type="text" class="form-control" id="review" placeholder="Введите свой номер телефона"
                       required="">
              </div>
              <div class="col-md-6">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" placeholder="Email" required="">
              </div>
              <div class="col-md-12">
                <label for="review">Напишите свое сообщение</label>
                <textarea class="form-control" placeholder="Напишите свое сообщение"
                          id="exampleFormControlTextarea1" rows="6"></textarea>
              </div>
              <div class="col-md-12">
                <button class="btn btn-solid" type="submit">Отправить Ваше Сообщение</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.map {
  height: 600px;
}
.contact-page label {
  text-transform: none;
}
</style>
