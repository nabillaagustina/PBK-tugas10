<template>
  <aside class="sidebar">
    <h2>🐾 Petshop</h2>
    <nav>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/produk">Produk</router-link>
      <router-link to="/anggota">Anggota</router-link>
      <router-link to="/barang-masuk">Barang Masuk</router-link>
      <router-link to="/barang-keluar">Barang Keluar</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 220px;
  background: linear-gradient(45deg, #00c6ff, #0072ff);
  color: white;
  min-height: 100vh;
  padding: 20px;
}

.sidebar h2 {
  margin-bottom: 30px;
  font-size: 20px;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

a {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background 0.3s;
}
a.router-link-exact-active {
  background: rgba(255, 255, 255, 0.2);
}
</style>
