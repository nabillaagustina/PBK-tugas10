<!-- src/views/Login.vue -->
<template>
  <div class="login-page">
    <div class="login-card">
      <h2>Login Admin</h2>
      <input v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="handleLogin">Login</button>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Auth } from '../stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

function handleLogin() {
  if (Auth.login(username.value, password.value)) {
    router.push('/home')
  } else {
    error.value = 'Login gagal! Username atau password salah.'
  }
}
</script>

<style scoped>

:global(body, html) {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.login-page {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #d4edda, #e6f4ea);
}

.login-card {
  background: #ffffff;
  padding: 50px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 420px;
  box-sizing: border-box;
  transition: transform 0.3s ease;
}

.login-card:hover {
  transform: translateY(-4px); /* Sedikit naik saat hover */
}

h2 {
  color: #2e7d32;
  margin-bottom: 30px;
  font-size: 2em;
  font-weight: 600;
}

input {
  display: block;
  width: 100%;
  padding: 14px 16px;
  margin: 16px 0;
  border: 1px solid #a5d6a7;
  border-radius: 10px;
  font-size: 1em;
  background-color: #f8fff8;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #43a047;
  box-shadow: 0 0 6px 2px rgba(67, 160, 71, 0.2);
  outline: none;
  background-color: #ffffff;
}

button {
  background: linear-gradient(to right, #43a047, #2e7d32); /* Gradasi hijau modern */
  color: white;
  padding: 14px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.1em;
  margin-top: 24px;
  transition: all 0.3s ease;
  font-weight: 500;
  letter-spacing: 0.5px;
}

button:hover {
  background: linear-gradient(to right, #388e3c, #1b5e20);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(67, 160, 71, 0.3);
}

button:active {
  transform: translateY(0);
  box-shadow: none;
}

.error {
  color: #d32f2f;
  margin-top: 18px;
  font-size: 0.95em;
  font-weight: 500;
  background-color: #ffebee;
  padding: 10px;
  border-radius: 6px;
}
</style>

