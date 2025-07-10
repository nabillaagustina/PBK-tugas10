<template>
  <div class="container">
    <h1>📤 Barang Keluar</h1>

    <div class="form-inline">
      <input v-model="nama" placeholder="Nama barang" />
      <input type="number" v-model.number="jumlah" placeholder="Jumlah" min="1" />
      <button @click="tambah" class="btn tambah">+ Tambah</button>
    </div>

    <p v-if="pesan" class="pesan">{{ pesan }}</p>

    <div class="filter-bar">
      <input v-model="filter" placeholder="Cari barang keluar..." />
    </div>

    <ul class="list">
      <li v-for="(b, i) in filteredList" :key="i">
        <div>
          <strong>{{ b.nama }}</strong> - {{ b.jumlah }} pcs
          <small class="tgl"> ({{ b.tanggal }})</small>
        </div>
        <button @click="hapus(i)" class="btn hapus">🗑️</button>
      </li>
    </ul>

    <div v-if="list.length" class="total">
      Total Barang Keluar: <strong>{{ total }}</strong> pcs
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    nama: '',
    jumlah: 0,
    list: [],
    pesan: '',
    filter: ''
  }),
  computed: {
    total() {
      return this.list.reduce((sum, b) => sum + b.jumlah, 0);
    },
    filteredList() {
      return this.list.filter(item =>
        item.nama.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  },
  methods: {
    tambah() {
      if (!this.nama.trim() || this.jumlah <= 0) {
        this.pesan = 'Nama dan jumlah harus diisi dengan benar.';
        setTimeout(() => (this.pesan = ''), 3000);
        return;
      }

      const tanggal = new Date().toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });

      this.list.push({ nama: this.nama, jumlah: this.jumlah, tanggal });
      this.nama = '';
      this.jumlah = 0;
      this.pesan = '';
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
  background-color: #fff8f0;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

h1 {
  color: #ff8c42;
  text-align: center;
  margin-bottom: 20px;
  font-size: 26px;
}

.form-inline {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  flex: 1;
  min-width: 150px;
}

.btn {
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
}

.btn.tambah {
  background-color: #ff8c42;
  color: white;
}

.btn.tambah:hover {
  background-color: #ffa45b;
}

.btn.hapus {
  background-color: #e74c3c;
  color: white;
}

.btn.hapus:hover {
  background-color: #c0392b;
}

.pesan {
  color: #e74c3c;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
}

.filter-bar {
  margin-bottom: 10px;
}

.list {
  list-style: none;
  padding: 0;
}

.list li {
  background: white;
  margin-bottom: 10px;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.total {
  text-align: right;
  margin-top: 20px;
  font-weight: bold;
  color: #333;
}

.tgl {
  font-size: 12px;
  color: #999;
}
</style>
