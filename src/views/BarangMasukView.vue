<template>
  <div class="container">
    <h1>📦 Barang Masuk</h1>

    <div class="form-inline">
  <input v-model="nama" placeholder="Nama barang..." />
  <input v-model="foto" placeholder="URL foto barang..." />
  <button @click="tambah" class="btn tambah">+ Tambah</button>
</div>


    <p v-if="pesan" class="pesan">{{ pesan }}</p>

    <ul class="list">
      <li v-for="b in list" :key="b.id" class="item">
        <span>{{ b.nama }}</span>
        <button @click="hapus(b.id)" class="btn hapus">🗑️</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
const API = 'http://localhost:3006/barangMasuk'

export default {
  data() {
    return {
      nama: '',
      list: [],
      pesan: ''
    }
  }, 
  methods: {
    async ambilData() {
      const res = await axios.get(API)
      this.list = res.data
    },
    async tambah() {
      if (!this.nama.trim()) {
        this.pesan = 'Nama barang wajib diisi.'
        setTimeout(() => (this.pesan = ''), 3000)
        return
      }

      try {
        const { data } = await axios.post(API, { nama: this.nama })
        this.list.push(data)
        this.nama = ''
        this.pesan = ''
      } catch {
        this.pesan = 'Gagal menambahkan data.'
      }
    },
    async hapus(id) {
      if (!confirm('Yakin ingin menghapus barang ini?')) return
      try {
        await axios.delete(`${API}/${id}`)
        this.list = this.list.filter(b => b.id !== id)
      } catch {
        alert('Gagal menghapus.')
      }
    }
  },
  mounted() {
    this.ambilData()
  }
}
</script>

<style scoped>
.container {
  padding: 30px;
  background-color: #fffef4;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

h1 {
  color: #f39c12;
  text-align: center;
  margin-bottom: 20px;
  font-size: 26px;
}

.form-inline {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
}

.btn {
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}

.btn.tambah {
  background-color: #f39c12;
  color: white;
}

.btn.tambah:hover {
  background-color: #f5b041;
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
  text-align: center;
  margin-bottom: 10px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  background: #fff;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
