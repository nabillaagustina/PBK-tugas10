<template>
  <div class="layout">
    <Navbar />
    <Sidebar />
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
</script>

<style scoped>
.layout {
  display: flex;
}
.content {
  flex-grow: 1;
  padding: 20px;
}
</style>
