<template>
  <div class="login-page">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="Username" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Masuk</button>
    </form>
    <p v-if="pesan" class="error">{{ pesan }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      username: '',
      password: '',
      pesan: ''
    }
  },
  methods: {
    async handleLogin() {
      try {
        const res = await axios.get('http://localhost:3006/users', {
          params: {
            username: this.username,
            password: this.password
          }
        })
        console.log('Login response:', res.data)

        if (res.data.length > 0) {
          localStorage.setItem('loggedIn', 'true')
          this.$router.push('/dashboard')
        } else {
          this.pesan = 'Login gagal. Username atau password salah.'
        }
      } catch (err) {
        console.error('Gagal login:', err)
        this.pesan = 'Tidak bisa terhubung ke server. Pastikan json-server berjalan.'
      }
    }
  }
}
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 10px;
  text-align: center;
}

.login-page input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
}

.login-page button {
  padding: 10px 20px;
  background-color: #0072ff;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
