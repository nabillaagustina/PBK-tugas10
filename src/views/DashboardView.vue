<template>
  <div class="dashboard-home">
    <h1>🐾 Selamat Datang di {{ namaToko }}</h1>
    <p class="subtext">Sistem Manajemen Toko Hewan Peliharaan</p>

    <div class="pet-gallery">
      <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Kucing" />
      <img src="https://cdn-icons-png.flaticon.com/512/616/616430.png" alt="Anjing" />
      <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Kucing Lagi" />
      <img src="https://cdn-icons-png.flaticon.com/512/616/616409.png" alt="Kelinci" />
    </div>

    <p class="info">
      Gunakan menu navigasi di atas untuk mengelola data produk, pelanggan, dan transaksi barang masuk & keluar.
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    namaToko: 'Petshop Bila'
  })
}
</script>

<style scoped>
.dashboard-home {
  padding: 40px;
  background: #fff0f5;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(255, 182, 193, 0.2);
  text-align: center;
  animation: fadeIn 0.5s ease-in-out;
}

h1 {
  font-size: 32px;
  color: #ff69b4;
  margin-bottom: 10px;
}

.subtext {
  color: #666;
  font-size: 18px;
  margin-bottom: 30px;
}

.pet-gallery {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 25px;
}

.pet-gallery img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 12px;
  background: #fff;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.pet-gallery img:hover {
  transform: scale(1.1);
}

.info {
  font-size: 16px;
  color: #444;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
