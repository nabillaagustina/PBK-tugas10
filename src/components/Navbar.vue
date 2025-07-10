<template>
  <nav class="navbar">
    <div class="brand">
      <img src="" alt="logo" />
      <h1>Petshop Bila</h1>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  padding: 15px 30px;
  background: linear-gradient(to right, #00c6ff, #0072ff);
  color: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}
.brand img {
  width: 32px;
  height: 32px;
}
</style>
