<script setup>
import { LOCALES } from "@/constants/locale";

const { locale, t } = useIntl();

const sections = computed(() => t("sections"));
</script>

<template>
  <header>
    <h1>{{ t('header.title') }}</h1>

    <div>
      <a v-for="{ id, title } in sections" :key="id" :href="`#section-${id}`">
        {{ title }}
      </a>

      <select v-model="locale">
        <option v-for="lang in LOCALES" :key="lang" :selected="lang === locale">{{ lang }}</option>
      </select>
    </div>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem 3rem;

  padding: 1rem 2rem;
  background-color: #f9cb9c;
  border-bottom: 1px solid #eaeaea;
}

h1 {
  font-size: 1.6rem;
}

div {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

a,
select {
  background-color: #eeeded;
  color: #000000;
  border: 1px solid #eaeaea;
  transition: border-color 0.2s ease;
  cursor: pointer;
}

a:hover,
select:hover {
  border-color: #000000;
}

select {
  padding: 0.2rem;
}

a {
  padding: 0.5rem 1rem;
  text-decoration: none;
}
</style>
