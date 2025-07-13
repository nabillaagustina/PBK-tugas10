<template>
  <div id="app">
    <div class="layout">
      <aside v-if="showNav" class="sidebar">
        <h2>🐾 Bila</h2>
        <nav>
          <router-link to="/" exact-active-class="active">🏠 Dashboard</router-link>
          <router-link to="/anggota" exact-active-class="active">👥 Anggota</router-link>
          <router-link to="/barang-masuk" exact-active-class="active">📦 Masuk</router-link>
          <router-link to="/barang-keluar" exact-active-class="active">📤 Keluar</router-link>
          <router-link to="/produk" exact-active-class="active">🛒 Produk</router-link>
          <router-link to="/logout" exact-active-class="active">🚪 Logout</router-link>
        </nav>
      </aside>

      <div class="content">
        <header class="topbar">
          <h1>Petshop Bila</h1>
        </header>

        <main>
          <router-view />
        </main>

        <footer>
          <p>&copy; 2025 Petshop Bila</p>
          <p>
            📸 <a href="https://www.instagram.com/midfreezer_/" target="_blank">Instagram</a>
            |
            💻 <a href="https://github.com/nabillaagustina/PBK-tugas10" target="_blank">GitHub</a>
          </p>
        </footer>
      </div>
    </div>
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
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fdfdfd;
  color: #333;
}

.layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 220px;
  background-color: #fbe3e8;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
}

.sidebar h2 {
  font-size: 24px;
  color: #ff5f7e;
  margin-bottom: 20px;
  text-align: center;
}

.sidebar a {
  display: block;
  padding: 10px 15px;
  border-radius: 8px;
  color: #555;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.sidebar a.active,
.sidebar a:hover {
  background-color: #ffe2ea;
  color: #ff5f7e;
  font-weight: bold;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.topbar {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  padding: 20px;
  text-align: center;
}

.topbar h1 {
  margin: 0;
  font-size: 28px;
  color: #ff5f7e;
}

main {
  flex: 1;
  padding: 30px;
  background-color: #fff8f8;
}

footer {
  text-align: center;
  padding: 15px;
  background-color: #fbe3e8;
  color: #444;
  font-size: 14px;
  border-top: 1px solid #f1cfd1;
}

footer a {
  color: #ff5f7e;
  font-weight: 500;
  text-decoration: none;
  margin: 0 5px;
}
</style>
