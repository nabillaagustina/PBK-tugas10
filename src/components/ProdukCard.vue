<template>
  <div class="card">
    <h3>{{ produk.nama }}</h3>
    <p>Harga: Rp{{ produk.harga.toLocaleString() }}</p>
    <button @click="$emit('hapus')">Hapus</button>
  </div>
</template>

<script setup>
defineProps(['produk'])
</script>

<style scoped>
.card {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 200px;
  background: #fefefe;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.card h3 {
  margin: 0 0 5px;
}
button {
  margin-top: 10px;
  background: #f66;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
