<script setup>
defineProps({
  error: Object,
});
</script>

<template>
  <div>
    <h2>{{ error.statusCode }} - {{ error.statusMessage || "Error" }}</h2>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>

<style scoped>
div {
  margin-top: 4rem;
  text-align: center;
}

h2 {
  margin-bottom: 1rem;
}
</style>
