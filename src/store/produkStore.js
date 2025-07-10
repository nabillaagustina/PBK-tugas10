import { defineStore } from 'pinia'

export const useProdukStore = defineStore('produk', {
  state: () => ({
    daftarProduk: JSON.parse(localStorage.getItem('produk')) || []
  }),
  actions: {
    tambahProduk(produk) {
      this.daftarProduk.push(produk)
      this.sync()
    },
    hapusProduk(index) {
      this.daftarProduk.splice(index, 1)
      this.sync()
    },
    sync() {
      localStorage.setItem('produk', JSON.stringify(this.daftarProduk))
    }
  }
})
