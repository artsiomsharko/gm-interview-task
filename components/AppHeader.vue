<script setup>
import sections from "@/locales/en.json";
</script>

<template>
  <header>
    <h1>My amazing website</h1>

    <div>
      <a v-for="{ id, title } in sections" :key="id" :href="`#section-${id}`">
        {{ title }}
      </a>
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
  gap: 0.5rem;
}

a {
  padding: 0.5rem 1rem;
  text-decoration: none;
  background-color: #eeeded;
  color: #000000;
  border: 1px solid #eaeaea;
  transition: border-color 0.2s ease;
}

a:hover {
  border-color: #000000;
}
</style>
