<template>
  <div class="container">
    <h1>📤 Barang Keluar</h1>

    <div class="form-inline">
      <select v-model="selectedId" @change="setProduk">
        <option disabled value="">📦 Pilih Produk</option>
        <option v-for="p in produkList" :key="p.id" :value="p.id">
          {{ p.nama }} (stok: {{ p.stok }})
        </option>
      </select>
      <input type="number" v-model.number="jumlah" placeholder="Jumlah" min="1" />
      <button @click="tambah" class="btn tambah">+ Tambah</button>
    </div>

    <p v-if="pesan" class="pesan">{{ pesan }}</p>

    <div class="filter-bar">
      <input v-model="filter" placeholder="🔍 Cari barang keluar..." />
    </div>

    <div class="list">
      <div class="card" v-for="b in filteredList" :key="b.id">
        <div class="info">
          <strong>{{ b.nama }}</strong>
          <span>{{ b.jumlah }} pcs</span>
        </div>
        <div class="meta">
          <small>{{ b.tanggal }}</small>
          <button @click="hapus(b.id)" class="btn hapus">🗑️</button>
        </div>
      </div>
    </div>

    <div v-if="list.length" class="total">
      Total Barang Keluar: <strong>{{ total }}</strong> pcs
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const API = 'http://localhost:3006'

export default {
  data() {
    return {
      produkList: [],
      selectedId: '',
      jumlah: 0,
      list: [],
      filter: '',
      pesan: ''
    }
  },
  computed: {
    total() {
      return this.list.reduce((sum, b) => sum + b.jumlah, 0)
    },
    filteredList() {
      return this.list.filter(item =>
        item.nama.toLowerCase().includes(this.filter.toLowerCase())
      )
    }
  },
  methods: {
    async ambilData() {
      try {
        const [barangKeluarRes, produkRes] = await Promise.all([
          axios.get(`${API}/barangKeluar`),
          axios.get(`${API}/produk`)
        ])
        this.list = barangKeluarRes.data
        this.produkList = produkRes.data
      } catch (e) {
        this.pesan = 'Gagal mengambil data.'
      }
    },
    setProduk() {
      // Opsional, bisa digunakan kalau mau sync nama produk
    },
    async tambah() {
      if (!this.selectedId || this.jumlah <= 0) {
        this.pesan = 'Pilih produk dan isi jumlah yang valid.'
        setTimeout(() => (this.pesan = ''), 3000)
        return
      }

      const produk = this.produkList.find(p => p.id === this.selectedId)
      if (!produk) {
        this.pesan = 'Produk tidak ditemukan.'
        setTimeout(() => (this.pesan = ''), 3000)
        return
      }

      if (produk.stok < this.jumlah) {
        this.pesan = 'Stok tidak cukup.'
        setTimeout(() => (this.pesan = ''), 3000)
        return
      }

      const tanggal = new Date().toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      })

      const dataKeluar = {
        nama: produk.nama,
        jumlah: this.jumlah,
        tanggal
      }

      try {
        // Simpan data barang keluar
        const { data } = await axios.post(`${API}/barangKeluar`, dataKeluar)

        // Update stok produk
        await axios.put(`${API}/produk/${produk.id}`, {
          ...produk,
          stok: produk.stok - this.jumlah
        })

        this.list.push(data)

        // Reset input
        this.selectedId = ''
        this.jumlah = 0
        this.pesan = ''
      } catch {
        this.pesan = 'Gagal menyimpan data.'
      }
    },
    async hapus(id) {
      if (!confirm('Yakin hapus item ini?')) return
      try {
        await axios.delete(`${API}/barangKeluar/${id}`)
        this.list = this.list.filter(b => b.id !== id)
      } catch {
        alert('Gagal menghapus data.')
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
  background-color: #fdfcf6;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  color: #3498db;
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

select,
input[type='number'] {
  flex: 1 1 45%;
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
  background-color: #3498db;
  color: white;
}

.btn.tambah:hover {
  background-color: #5dade2;
}

.btn.hapus {
  background-color: #e74c3c;
  color: white;
  padding: 6px 10px;
  font-size: 14px;
}

.btn.hapus:hover {
  background-color: #c0392b;
}

.pesan {
  color: #e74c3c;
  text-align: center;
  margin-bottom: 10px;
}

.filter-bar {
  margin-bottom: 15px;
}

.filter-bar input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card {
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info {
  display: flex;
  flex-direction: column;
}

.info strong {
  font-size: 16px;
  color: #2c3e50;
}

.meta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.meta small {
  color: #888;
  font-size: 12px;
}

.total {
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  background-color: #ecf0f1;
  padding: 10px;
  border-radius: 8px;
}
</style>
