<template>

  <div class="app">
    <router-view/>
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
/*===== GOOGLE FONTS =====*/
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Chango&display=swap');
/*===== VARIABLES CSS =====*/
:root {
  /*========== Colors ==========*/

  --primary-color: #8b65fe;
  --primary-color-hover: #6c49d6;
  --body-color: #f6f5f7;
  --inset-color: #ececec;
  --content-color: #fff;
  --content-color-hover: rgb(240, 240, 240);
  --title-color: #141414;
  --border-light: #adadad;
  --text-color-gray: #8d95a4;
  --gray-color: #eff7fc;

  --radius: 5px;
  --radius-8: 8px;

  /* shadow */
  --shadow-big-content: 0 0 12px rgb(0, 0, 0, 0.16);
  --shadow-small-content: 0 0 12px rgb(0, 0, 0, 0.1);

  /*========== Font and typography ==========*/
  --logo-font: 'Chango';
  --body-font: 'Montserrat', -apple-system, Fira Sans, BlinkMacSystemFont, Arial, sans-serif;
}

/*========== BASE ==========*/
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  min-height: 100%;
}

body {
  min-height: 100%;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow-x: hidden;
  font-family: var(--body-font) !important;
  background-color: var(--body-color);
  color: var(--title-color);
  font-weight: 500;
}
h1,
h2,
h3,
ul,
p {
  margin: 0;
  list-style: none;
}
p {
  line-height: 28px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, var(--body-font), Segoe UI,
  Roboto, Helvetica, Ubuntu, Cantarell, Arial, sans-serif, Apple Color Emoji,
  Segoe UI Emoji, Segoe UI Symbol;
}
h1,
h2,
h3 {
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
}
ul {
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
  outline: none;
  transition: 0.2s ease;
}
img {
  max-width: 100%;
  width: 100%;
  height: auto;
}

</style>
