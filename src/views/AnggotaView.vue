<template>
  <div class="container">
    <h1>👥 Data Anggota</h1>

    <div class="form-inline">
      <input v-model="baru" placeholder="Nama pelanggan baru..." />
      <button @click="tambah" class="btn tambah">➕ Tambah</button>
    </div>

    <ul class="list">
      <li v-for="item in list" :key="item.id">
        <template v-if="!item.edit">
          <span>{{ item.nama }}</span>
        </template>
        <input v-else v-model="item.nama" />

        <div class="actions">
          <button @click="hapus(item.id)" class="btn del">🗑️ Hapus</button>
          <button @click="toggleEdit(item)" class="btn edit">
            {{ item.edit ? '💾 Simpan' : '✏️ Edit' }}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      baru: '',
      list: []
    }
  },
  methods: {
    async ambilData() {
      const res = await axios.get('http://localhost:3006/anggota')
      this.list = res.data.map(a => ({ ...a, edit: false }))
    },
    async tambah() {
      if (!this.baru.trim()) return
      const res = await axios.post('http://localhost:3006/anggota', { nama: this.baru })
      this.list.push({ ...res.data, edit: false })
      this.baru = ''
    },
    async hapus(id) {
      await axios.delete(`http://localhost:3006/anggota/${id}`)
      this.list = this.list.filter(a => a.id !== id)
    },
    async toggleEdit(item) {
      if (item.edit && item.nama.trim()) {
        await axios.put(`http://localhost:3006/anggota/${item.id}`, { nama: item.nama })
      }
      item.edit = !item.edit
    }
  },
  mounted() {
    this.ambilData()
  }
}
</script>

<style scoped>
.container { padding: 20px; max-width: 600px; margin: auto; }
.form-inline { display: flex; gap: 10px; margin-bottom: 15px; }
.list { list-style: none; padding: 0; }
.list li {
  background: #fff;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.actions { display: flex; gap: 10px; }
.btn { padding: 6px 12px; border: none; cursor: pointer; border-radius: 4px; }
.btn.tambah { background: #3498db; color: white; }
.btn.del { background: #e74c3c; color: white; }
.btn.edit { background: #f1c40f; }
</style>
