<template>
  <div>
    <Header />
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Main</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="btn">Products</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products/abc">ABC Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
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