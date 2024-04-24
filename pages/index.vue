<script setup lang="ts">
useHead({
	title: 'Maple Bear PH',
	meta: [{ name: 'Maple Bear', content: 'The best of Canadian education for a global future.' }],
})

import Background from '../assets/bg.gif';
</script>

<template>
    <div>
      <img class="background" :src='Background' />
      <div class="container">
          <h2>WELCOME TO MAPLE BEAR PH</h2>
          <p>
          Maple Bear Preschool brings the best of Canadian bilingual education to the world by offering high-quality bilingual (immersion) education. There are currently over 586 Maple Bear early childhood, elementary, middle, and high schools in 40 countries around the world. The Maple Bear mission is to deliver a student-focused learning system in a safe, secure and stimulating environment that prepares students for success at the post-secondary level and instills a passion for life-long learning.
          </p>
      </div>
    </div>
</template>

<style scoped>
.background {
  width: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: auto;
  margin-top: 150px;
}

.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1300px;
  padding: 20px;
  height: 100vh;
}

@media screen and (max-width: 600px) {
  .background {
    margin-top: 160px;
  }
}
</style>