<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
  .router-link-exact-active {
    color: red;
  }
</style>