// src/stores/product.js
export const ProductStore = {
  products: JSON.parse(localStorage.getItem('products') || '[]'),

  save() {
    localStorage.setItem('products', JSON.stringify(this.products))
  },

  add(product) {
    this.products.push(product)
    this.save()
  },

  remove(index) {
    this.products.splice(index, 1)
    this.save()
  },

  update(index, product) {
    this.products[index] = product
    this.save()
  }
}
