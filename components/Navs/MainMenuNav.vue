<template>
  <div>
    <nav id="main-nav">
      <div class="toggle-nav"><i class="fa fa-bars sidebar-bar"></i></div>
      <ul id="main-menu" class="sm pixelstrap sm-horizontal">
        <li>
          <div class="mobile-back text-end">Back<i class="fa fa-angle-right ps-2" aria-hidden="true"></i>
          </div>
        </li>
        <li>
          <NuxtLink to="/">Главная</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">Доставка</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Контакты</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">О Нас</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.pixelstrap .router-link-exact-active {
  color: var(--theme-color);
}
</style>
