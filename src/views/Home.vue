<template>
  <div class="home-container">
    <h1>Selamat Datang di Petshop Cat and Dog</h1>
    <p>
      Kami menyediakan berbagai kebutuhan untuk hewan peliharaan Anda, dan kami juga menerima hewan peliharaan Anda untuk dititipkan di sini.
    </p>

    <div class="image-gallery">
      <img src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/05/23074159/pomeranian-1.jpg" alt="Anjing 1" />
      <img src="https://www.teahub.io/photos/full/45-452058_kucing-lucu-bohong-cute-cat.jpg" alt="Kucing 1" />
      <img src="https://cdn1.katadata.co.id/media/images/thumb/2021/10/14/Anjing_Cihuahua-2021_10_14-16_20_51_32c48e2d953e58cb6325874a3eb48017_960x640_thumb.jpg" alt="Anjing 2" />
      <img src="https://tse3.mm.bing.net/th?id=OIP.4m79qJTdfmvlZJRoHcZ8-QHaGq&pid=Api&P=0&h=180" alt="Kucing 2" />
      <img src="https://ik.imagekit.io/anjingpedia/wp-content/uploads/2023/05/Anjing-Toy-Poodle.jpg" alt="Anjing 3" />
    </div>
  </div>
</template>

<style scoped>
.home-container {
  background-color: #f0fdf4;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 128, 0, 0.1);
  max-width: 900px;
  margin: auto;
  text-align: center;
}

h1 {
  color: #14532d;
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  color: #065f46;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.image-gallery img {
  width: 160px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
</style>
