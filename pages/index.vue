<script setup>
const { t } = useIntl();

const sections = computed(() => t("sections"));
</script>

<template>
  <AppSection v-for="{ id, title, text } in sections" :key="id" :id="id">
    <template #title>{{ title }}</template>
    <template #content>{{ text }}</template>
  </AppSection>
</template>

<style scoped></style>
