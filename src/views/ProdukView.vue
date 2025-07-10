<template>
  <div class="container">
    <h1>Produk</h1>
    <div class="form-inline">
      <input v-model="produkBaru" placeholder="Nama produk" />
      <input type="number" v-model.number="stokBaru" placeholder="Stok" min="1" />
      <button @click="tambah">Tambah</button>
    </div>

    <div class="grid">
      <div class="card" v-for="(p, i) in produk" :key="i">
        <template v-if="!p.edit">
          <h3>{{ p.nama }}</h3>
          <p>Stok: {{ p.stok }}</p>
        </template>
        <template v-else>
          <input v-model="p.nama" />
          <input type="number" v-model.number="p.stok" min="1" />
        </template>
        <div class="actions">
          <button @click="hapus(i)" class="del">Hapus</button>
          <button @click="p.edit = !p.edit">{{ p.edit ? 'Simpan' : 'Edit' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    produkBaru: '',
    stokBaru: 1,
    produk: [
      { nama: 'Makanan Kucing', stok: 10, edit: false },
      { nama: 'Pasir', stok: 5, edit: false },
      { nama: 'obat', stok: 10, edit: false }
    ]
  }),
  methods: {
    tambah() {
      if (!this.produkBaru.trim()) return alert('Nama produk harus diisi');
      if (this.stokBaru < 1) return alert('Stok harus lebih dari 0');
      const ada = this.produk.find(p => p.nama.toLowerCase() === this.produkBaru.toLowerCase());
      if (ada) return alert('Produk sudah ada');

      this.produk.push({
        nama: this.produkBaru,
        stok: this.stokBaru,
        edit: false
      });
      this.produkBaru = '';
      this.stokBaru = 1;
    },
    hapus(i) {
      if (confirm('Yakin ingin menghapus produk ini?')) {
        this.produk.splice(i, 1);
      }
    }
  }
}
</script>


<style scoped>
.container {
  padding: 20px;
  max-width: 1000px;
  margin: auto;
}

h1 {
  color: #ff7e5f;
  text-align: center;
  margin-bottom: 20px;
}

.form-inline {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
}

.form-inline input {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  min-width: 200px;
}

button {
  padding: 8px 16px;
  border: none;
  background-color: #ff7e5f;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #eb5a3f;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 15px;
}

.card {
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-3px);
}

.card h3 {
  color: #333;
  margin-bottom: 5px;
}

.card p {
  color: #555;
}

.card input {
  width: 100%;
  padding: 6px;
  margin-bottom: 6px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.del {
  background-color: #e74c3c;
}

.del:hover {
  background-color: #c0392b;
}
</style>
