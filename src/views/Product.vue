<template>
  <div class="product-page">
    <h1>Manajemen Produk</h1>

    <form @submit.prevent="addOrUpdateProduct">
      <input v-model="newProduct.name" placeholder="Nama Produk" required />
      <input v-model="newProduct.price" type="number" placeholder="Harga (Rp)" required />
      <button type="submit">
        {{ editingIndex !== null ? 'Simpan Perubahan' : 'Tambah Produk' }}
      </button>
    </form>

    <div class="product-list">
      <div class="product-card" v-for="(product, index) in products" :key="index">
        <h3>{{ product.name }}</h3>
        <p class="price">Rp{{ formatPrice(product.price) }}</p>
        <div class="actions">
          <button class="edit" @click="edit(index)">Edit</button>
          <button class="delete" @click="remove(index)">Hapus</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ProductStore } from '../stores/product'

// Produk baru
const newProduct = reactive({ name: '', price: '' })
const editingIndex = ref(null)

// Ambil data dari store
const products = ProductStore.products

// Tambah atau update produk
function addOrUpdateProduct() {
  const product = {
    name: newProduct.name,
    price: parseFloat(newProduct.price)
  }

  if (editingIndex.value !== null) {
    ProductStore.update(editingIndex.value, product)
    editingIndex.value = null
  } else {
    ProductStore.add(product)
  }

  Object.assign(newProduct, { name: '', price: '' })
}

// Edit produk
function edit(index) {
  const selected = products.value[index]
  Object.assign(newProduct, selected)
  editingIndex.value = index
}

// Hapus produk
function remove(index) {
  if (confirm('Yakin ingin menghapus produk ini?')) {
    ProductStore.remove(index)

    // Jika sedang diedit, batalkan edit jika produk yang dihapus
    if (editingIndex.value === index) {
      editingIndex.value = null
      Object.assign(newProduct, { name: '', price: '' })
    }
  }
}

// Format harga
function formatPrice(price) {
  return Number(price).toLocaleString('id-ID')
}
</script>

<style scoped>
.product-page {
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: Arial, Helvetica, sans-serif;
  color: #333;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #2c3e50;
  text-align: center;
}

/* Form styling */
form {
  margin-bottom: 30px;
}

form input {
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
}

form button {
  width: 100%;
  padding: 12px;
  background-color: #16a34a;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

form button:hover {
  background-color: #15803d;
}

/* Product list and card */
.product-list {
  display: grid;
  gap: 20px;
}

.product-card {
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.product-card h3 {
  margin: 0 0 8px;
  font-size: 20px;
  color: #111827;
}

.product-card .price {
  font-size: 16px;
  color: #10b981;
  margin-bottom: 12px;
}

/* Action buttons */
.actions {
  display: flex;
  gap: 10px;
}

.actions button {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;
}

.actions .edit {
  background-color: #3b82f6;
}

.actions .edit:hover {
  background-color: #2563eb;
}

.actions .delete {
  background-color: #ef4444;
}

.actions .delete:hover {
  background-color: #dc2626;
}
</style>

