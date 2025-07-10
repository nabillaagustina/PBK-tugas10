<template>
  <div class="container">
    <h1>📦 Barang Masuk</h1>

    <div class="form-inline">
      <input v-model="nama" placeholder="Nama barang..." />
      <input type="file" @change="setFoto" accept="image/*" />
      <button @click="tambah" class="btn tambah">+ Tambah</button>
    </div>

    <p v-if="pesan" class="pesan">{{ pesan }}</p>

    <div class="grid">
      <div class="card" v-for="(b, i) in list" :key="i">
        <img :src="b.foto" alt="foto barang" />
        <p class="nama">{{ b.nama }}</p>
        <button @click="hapus(i)" class="btn hapus">🗑️ Hapus</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    nama: '',
    foto: null,
    list: [],
    pesan: ''
  }),
  methods: {
    setFoto(e) {
      const file = e.target.files[0];
      if (file) {
        this.foto = URL.createObjectURL(file);
      }
    },
    tambah() {
      if (!this.nama || !this.foto) {
        this.pesan = 'Nama dan foto barang wajib diisi.';
        setTimeout(() => (this.pesan = ''), 3000);
        return;
      }
      this.list.push({ nama: this.nama, foto: this.foto });
      this.nama = '';
      this.foto = null;
      this.pesan = '';
      // Reset file input
      this.$el.querySelector('input[type="file"]').value = null;
    },
    hapus(i) {
      this.list.splice(i, 1);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 30px;
  background-color: #fff0f5;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
}

h1 {
  color: #ff69b4;
  font-size: 26px;
  margin-bottom: 20px;
  text-align: center;
}

.form-inline {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}

input[type="text"],
input[type="file"] {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  background-color: #fff;
}

.btn {
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn.tambah {
  background-color: #ff69b4;
  color: white;
}

.btn.tambah:hover {
  background-color: #ff8ab8;
}

.btn.hapus {
  background-color: #e74c3c;
  color: white;
  margin-top: 10px;
  width: 100%;
}

.btn.hapus:hover {
  background-color: #c0392b;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 15px;
}

.card {
  background: white;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 10px;
}

.nama {
  font-weight: 600;
  font-size: 16px;
  color: #444;
}

.pesan {
  color: #e74c3c;
  font-size: 14px;
  margin-bottom: 15px;
  text-align: center;
}
</style>
