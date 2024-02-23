<script setup>
const { data: userData, status, error } = useFetch("https://reqres.in/api/users/1");

onMounted(() => {
  if (error.value) {
    alert(error.value.message);
  }
});

const initials = computed(() => {
  const { first_name, last_name } = userData.value.data;
  return `${first_name[0]}${last_name[0]}`;
});

const avatarUrl = computed(() => userData.value.data.avatar);

const isAvatarVisible = ref(false);

const avatarIconHandler = () => {
  isAvatarVisible.value = !isAvatarVisible.value;
};
</script>

<template>
  <button v-if="status === 'success' && userData?.data" @click="avatarIconHandler">
    <img v-if="isAvatarVisible" :src="avatarUrl" alt="User avatar" />
    <span v-else>{{ initials }}</span>
  </button>
</template>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  padding: 0;
  overflow: hidden;
  border: 1px solid #eaeaea;
  border-radius: 100%;
  background-color: #eee;
  transition: border-color 0.2s ease;
  cursor: pointer;
}

button:hover {
  border-color: #000000;
}

img {
  max-width: 100%;
}

span {
  font-weight: 600;
}
</style>
