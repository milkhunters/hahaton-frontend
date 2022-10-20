<template>
  <body>
  <div class="reg_wrapper">
    <div class="reg">
      <div class="reg_data">

      <div class="reg_change">
        <router-link :to="{name: 'login'}" class="reg_change_button">Вход</router-link>
        <router-link :to="{name: 'registration'}" class="reg_change_button">Регистрация</router-link>
      </div>


        <h1 class="reg_data_title">Авторизация</h1>

        <form @submit.prevent="signIn" id="login" method="POST">
          <!-- Ответ ajax -->
          <span id="loginmessage"></span>
          <!-- Ответ ajax -->
          <p>E-mail или никнейм</p>

          <input type="text" name="nickname" v-model="username"/>

          <p class="log-pass">Пароль</p>

          <input type="password" name="password" v-model="password"/><br />

          <input type="hidden" name="do_login" />

          <button type="submit" name="do_login" >Войти</button>

        </form>


      </div>
    </div>
  </div>
  </body>
</template>

<script>
import router from "@/router/router";
import axios from "axios";

export default {
  name: "Login-App",
  data() {
    return{
      username: "",
      password: "",
      tmpPass: "pass123@$Zx",
      tmp: ""
    }
  },
  methods: {
    async signIn(){
       const url = 'https://dev-hack.milkhunters.ru/api/v1'

      const response = await axios.post(url + "/auth/signIn", {
        "username": this.username,
        "password": this.password
      })

      if (response.status === 200 && response.data.error === undefined){
        // localStorage.setItem('isAuth', 'true')
        // localStorage.setItem('user', JSON.stringify(response.data))

        document.cookie = "user" + "=" + JSON.stringify(response.data);

        await router.push({name: 'dashboard'})

      } else {
        alert('Nikita')
      }


    }
  }

}


</script>

<style scoped>
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
body.theme-light {
  background-color: var(--light-body-color);
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
  font-size: 17px;
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
.reg_wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  /*background: url(https://img1.akspic.ru/attachments/crops/1/7/1/2/0/102171/102171-peyzash-nebo-vodohranilishhe-priroda-fjord-1920x1080.jpg);*/
  background-size: cover;
}
.reg {
  border-radius: 50px;
  box-shadow: var(--shadow-big-content);
  background: var(--content-color);
  display: flex;
  margin: 0 auto;
  width: 400px;
  position: relative;
  overflow: hidden;
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
  background: var(--content-color-hover);
}
.reg_change_button.active_change_button {
  background: var(--content-color-hover);
}
.reg_data {
  padding: 80px 50px 60px 50px;
  border-radius: 30px;
  height: 100%;
  z-index: 2;
  text-align: center;
  width: 100%;
  background: var(--content-color);
}
.reg_data_name {
  font-size: 17px;
  position: absolute;
  right: 40px;
  font-family: 'Roboto Mono', monospace;;
  top: 20px;
}
.reg_data_title {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 700;
}
.reg_data form p {
  text-align: left;
  color: #5e5d5d;
  margin-top: 6px;
}
.reg_data form input {
  width: 100%;
  padding: 8px;
  font-size: 15px;
  border-radius: 8px;
  font-weight: 400;
  border: 1px solid #ccc;
}
.reg_data form input:focus {
  outline: #8b65fe;
  border: 1px solid var(--primary-color);
}
.reg_data form button {
  border-radius: 15px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  background: var(--primary-color);
  color: #fff;
  font-weight: 600;
  font-size: 17px;
  border: none;
  padding: 15px;
  transition: .2s ease;
}
.reg_data form button:hover {
  background: var(--primary-color-hover);
}
</style>