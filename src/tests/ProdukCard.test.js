import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ProdukCard from '../src/components/ProdukCard.vue'

describe('ProdukCard', () => {
  it('menampilkan nama produk', () => {
    const wrapper = mount(ProdukCard, {
      props: {
        produk: { nama: 'Dog Food', harga: 50000 }
      }
    })
    expect(wrapper.text()).toContain('Dog Food')
  })
})
