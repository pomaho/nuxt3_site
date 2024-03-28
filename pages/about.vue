<template>
  <div>
    <NavsBreadcrumbs :active="'О нас'" />
    <About />
    <Testimonials />
    <Team />
  </div>
</template>

<script setup>
const {data} = await useFetch('/api/currency/GBP');
</script>

<style></style>
