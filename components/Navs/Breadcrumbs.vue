<template>
  <div class="breadcrumb-section">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="page-title">
            <h2>{{ active }}</h2>
          </div>
        </div>
        <div class="col-sm-6">
          <nav aria-label="breadcrumb" class="theme-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <NuxtLink to="/">Главная</NuxtLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{ active }}</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  active: String,
})
</script>

<style scoped>

</style>
