<template>
  <div id="app">
    <header>
      <h1>🐾 Petshop Bila</h1>

      <nav v-if="showNav">
        <ul class="navigasi">
          <li><router-link to="/">🏠 Dashboard</router-link></li>
          <li><router-link to="/anggota">👥 Data Anggota</router-link></li>
          <li><router-link to="/barang-masuk">📦 Barang Masuk</router-link></li>
          <li><router-link to="/barang-keluar">📤 Barang Keluar</router-link></li>
          <li><router-link to="/produk">🛒 Produk</router-link></li>
          <li><router-link to="/logout">🚪 Logout</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2025 Petshop Bila</p>
      <p>
        📸 
        <a href="https://www.instagram.com/midfreezer_/profilecard/?igsh=MTMzOWN5YWlvdG5uZg==" target="_blank">Instagram</a>
        |
        💻 
        <a href="https://github.com/nabillaagustina/PBK-tugas10" target="_blank">GitHub</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    showNav() {
      return localStorage.getItem('loggedIn') === 'true'
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fff8f5;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background: linear-gradient(to right, #ffa69e, #ffb347);
  color: white;
  padding: 25px 20px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

header h1 {
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
}

.navigasi {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  list-style: none;
  margin-top: 10px;
}

.navigasi li {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

.navigasi li a {
  display: block;
  padding: 10px 18px;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
}

.navigasi li:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

main {
  flex: 1;
  padding: 25px;
}

footer {
  background-color: #ffa69e;
  color: white;
  text-align: center;
  padding: 15px;
  font-size: 14px;
}

footer a {
  color: white;
  font-weight: 500;
  text-decoration: underline;
  margin: 0 5px;
}
</style>
