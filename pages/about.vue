<template>
  <div>
    <h2>About</h2>
    <p>This is the About Page</p>
    <p>
      <NuxtLink to="/">Home</NuxtLink>
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/GBP');
</script>

<style></style>
