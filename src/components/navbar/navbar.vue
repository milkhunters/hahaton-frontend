<template>
  <div class="regNew">
    <h2 class="reg_data_name">MilkHunter's</h2>

    <div class="reg_change">
      <router-link :to="{name: 'login'}" class="reg_change_button">Вход</router-link>
      <router-link :to="{name: 'registration'}" class="reg_change_button">Регистрация</router-link>
<!--      <button @click="$router.push('/registration')" class="reg_change_button"> Регистрация </button>-->
<!--      <button  @click="$router.push('/login')" class="reg_change_button active_change_button"> Авторизация </button>-->

    </div>
  </div>

</template>

<script>
export default {
  name: "Navbar-App"
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400&display=swap');
:root {
/*========== Colors ==========*/
/* light color */
--primary-color: #8b65fe;
--primary-color-hover: #6c49d6;
--body-color: #f6f5f7;
--content-color: #fff;
--content-color-hover: rgb(240, 240, 240);
--title-color: #141414;
--border-light: #e8e8e8;
--text-color-gray: #8d95a4;
--gray-color: #eff7fc;

--radius: 5px;
--radius-8: 8px;

/* shadow */
--shadow-big-content: 0 10px 40px -20px rgb(147 156 176 / 30%);
--shadow-small-content: 0 0 12px rgb(0, 0, 0, 0.1);

/*========== Font and typography ==========*/
--body-font: 'Montserrat', -apple-system, Fira Sans, BlinkMacSystemFont, Arial, sans-serif;
--text-font: -apple-system, Fira Sans, BlinkMacSystemFont, Arial, sans-serif;
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
  line-height: 1.6;
}
.reg_change {
  border: 2px solid rgb(215, 215, 215);
  border-radius: 10px;
  padding: 1px;
  margin-bottom: 20px;
  height: 40px;
  display: flex;
  width: 100%;

}
.reg_change_button {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  height: 100%;
  text-align: center;
  border-radius: 8px;
  color: var(--title-color);
  transition: .2s ease;
}
.reg_change_button:hover {
  background: white;
}
.reg_change_button.active_change_button {
  background: white;
}
.reg_data_name {
  font-size: 17px;
  position: absolute;
  right: 40px;
  font-family: 'Roboto Mono', monospace;;
  top: 20px;
}
.regNew{
  width: 400px;
  right: 40px;
}
</style>