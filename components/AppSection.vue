<script setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <section>
    <a :id="`section-${id}`">
      <h2 v-editable="`sections.${index}.title`"><slot name="title" /></h2>
    </a>
    <p v-editable="`sections.${index}.text`">
      <slot name="content" />
    </p>
  </section>
</template>

<style scoped>
section {
  margin-bottom: 2rem;
}

a {
  scroll-margin-top: 5rem;
}

h2 {
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.2rem;
}
</style>
