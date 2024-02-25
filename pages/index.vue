<script setup>
const { t } = useIntl();

const sections = computed(() => t("sections"));
</script>

<template>
  <ClientOnly>
    <AppSection v-for="({ id, title, text }, index) in sections" :key="id" :id="id" :index="index">
      <template #title>{{ title }}</template>
      <template #content>{{ text }}</template>
    </AppSection>
  </ClientOnly>
</template>

<style scoped></style>
