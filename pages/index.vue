<script setup>
const { t } = useIntl();

const sections = computed(() => t("sections"));

const route = useRoute();
const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  if (route.hash) {
    const hash = route.hash;
    const anchor = document.querySelector(hash);

    if (anchor) {
      anchor.scrollIntoView({ behavior: "instant" });
    }
  }
});
</script>

<template>
  <AppSection v-for="({ id, title, text }, index) in sections" :key="id" :id="id" :index="index">
    <template #title>{{ title }}</template>
    <template #content>{{ text }}</template>
  </AppSection>
</template>

<style scoped></style>
