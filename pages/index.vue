<script setup>
import sections from "@/locales/en.json";
</script>

<template>
  <AppSection v-for="{ id, title, text } in sections" :key="id" :id="id">
    <template #title>{{ title }}</template>
    <template #content>{{ text }}</template>
  </AppSection>
</template>

<style scoped></style>
