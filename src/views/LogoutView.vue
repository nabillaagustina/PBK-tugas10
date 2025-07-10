<template>
  <div class="logout">
    <p>Logout berhasil...</p>
  </div>
</template>

<script>
export default {
  mounted() {
    localStorage.removeItem('loggedIn')
    this.$router.replace('/login')
  }
}
</script>

<style scoped>
.logout { text-align: center; margin-top: 50px; }
</style>