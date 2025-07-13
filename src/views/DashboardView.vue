<template>
  <div class="dashboard-home">
    <h1>🐾 Selamat Datang di <span class="highlight">{{ namaToko }}</span></h1>
    <p class="subtext">Sistem Manajemen Toko Hewan Peliharaan</p>

    <div class="pet-gallery">
      <div v-for="(pet, idx) in pets" :key="idx" class="pet-card" :title="pet.nama">
        <img :src="pet.img" :alt="pet.nama" />
        <p>{{ pet.nama }}</p>
      </div>
    </div>

    <div class="info-cards">
      <div class="card">
        <h3>Kelola Produk</h3>
        <p>Tambah, edit, dan pantau stok produk hewan peliharaan.</p>
      </div>
      <div class="card">
        <h3>Data Pelanggan</h3>
        <p>Kelola data anggota dan pelanggan toko secara mudah.</p>
      </div>
      <div class="card">
        <h3>Transaksi Barang</h3>
        <p>Catat dan pantau barang masuk dan keluar secara real-time.</p>
      </div>
    </div>

    <p class="footer-note">
      Gunakan menu navigasi di atas untuk mengelola data produk, pelanggan, dan transaksi barang masuk & keluar.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      namaToko: 'Petshop Bila',
    pets: [
  {
    nama: 'anjing',
    img: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
  },
  {
    nama: 'kucing',
    img: 'https://cdn-icons-png.flaticon.com/512/616/616430.png',
  },
  {
    nama: 'anjing',
    img: 'https://cdn-icons-png.flaticon.com/512/616/616409.png',
  },
  {
    nama: 'monyet',
    img: 'https://cdn-icons-png.flaticon.com/512/616/616426.png', 
  },
  {
    nama: 'burung',
    img: 'https://cdn-icons-png.flaticon.com/512/616/616438.png',  
  }
]


    }
  }
}
</script>

<style scoped>
.dashboard-home {
  max-width: 900px;
  margin: 40px auto;
  padding: 40px 30px;
  background: linear-gradient(135deg, #ffe6f0, #ffe6cc);
  border-radius: 20px;
  box-shadow: 0 12px 25px rgba(255, 105, 180, 0.25);
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  animation: fadeIn 0.7s ease forwards;
  color: #444;
}

h1 {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 12px;
  color: #ff4081;
}

.highlight {
  color: #d81b60;
  text-shadow: 0 0 8px #d81b60aa;
}

.subtext {
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
  font-weight: 500;
}

.pet-gallery {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 45px;
}

.pet-card {
  background: white;
  border-radius: 15px;
  padding: 20px;
  width: 110px;
  box-shadow: 0 8px 15px rgba(255, 105, 180, 0.15);
  cursor: default;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  user-select: none;
}

.pet-card:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 15px 25px rgba(255, 105, 180, 0.3);
}

.pet-card img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 10px;
}

.pet-card p {
  font-weight: 600;
  font-size: 16px;
  color: #d81b60;
}

.info-cards {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 35px;
}

.card {
  background: white;
  border-radius: 18px;
  padding: 25px 30px;
  width: 260px;
  box-shadow: 0 10px 20px rgba(255, 105, 180, 0.12);
  text-align: left;
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 18px 35px rgba(255, 105, 180, 0.25);
}

.card h3 {
  color: #d81b60;
  margin-bottom: 12px;
  font-size: 22px;
  font-weight: 700;
}

.card p {
  font-size: 15px;
  color: #555;
  line-height: 1.5;
}

.footer-note {
  font-size: 16px;
  color: #666;
  font-style: italic;
  max-width: 700px;
  margin: 0 auto;
  user-select: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
