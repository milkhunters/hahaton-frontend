<template>
  <body>
  <div class="reg_wrapper">
    <div class="reg">
      <div class="reg_data">
        <div class="reg_change">

            <router-link :to="{name: 'login'}" class="reg_change_button">Вход</router-link>
            <router-link :to="{name: 'registration'}" class="reg_change_button">Регистрация</router-link>

        </div>

        <h1 class="reg_data_title">Регистрация</h1>
        <form id="login" method="POST">
          <!-- Ответ ajax -->
          <span id="loginmessage"></span>
          <!-- Ответ ajax -->
          <div class="reg_data_img_banner">
            <img id="placeholder1" width=300/><br/>
            <input id="file" type="file" accept="image/*" />
          </div>
          <p>Логин</p>
          <input type="text" name="login" required/>
          <p>E-mail</p>
          <input type="email" name="email" value="" required/>
          <p>Название организации</p>
          <input type="text" name="organisation" required/>
          <p>ИНН</p>
          <input type="text" name="inn" required/>
          <p class="log-pass">Пароль</p>
          <input type="password" name="password" value="" required/><br />
          <input type="hidden" name="do_login" />
          <button type="submit" name="do_login">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  </div>
  </body>
</template>

<script>


export default {
  name: "Registration-App"
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  padding: 40px 80px;
  margin: 0 auto;
}
.sec-title {
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 0.3px;
  padding-bottom: 6px;
}
.hide-menu {
  margin-left: 12px;
  position: relative;
}
.hide-menu svg {
  cursor: pointer;
}
.hide-menu svg use {
  fill: var(--title-color);
}
.hide-menu__inner {
  position: absolute;
  z-index: 55;
  right: 0;
  background: var(--content-color);
  padding: 8px 12px;
  border-radius: var(--radius);
  display: none;
  box-shadow: 0 0 10px var(--shadow-color);
}
.post-options-item {
  font-size: 0.9rem;
}
.tippy-box {
  background: #393d46 !important;
  font-size: 12px;
}
.tippy-arrow {
  color: #393d46 !important;
}
.reg_wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  background-color: var(--light-body-color);
  background-size: cover;
}
.reg {
  border-radius: 50px;
  box-shadow: var(--shadow-big-content);
  background: var(--content-color);
  display: flex;
  margin: 20px auto;
  width: 600px;
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
.reg_data_img_banner {
  border-radius: var(--radius-8);
  border: 2px dashed var(--border-light);
  overflow: hidden;
  position: relative;
  padding: 0;
  min-height: 250px;
}
.reg_data_img_banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-8);
}
.reg_data_img_banner input {
  position: absolute;
  bottom: 10px;
  left: 50%;
  width: fit-content !important;
  transform: translateX(-50%);
  background: var(--content-color);
  border-radius: var(--radius);
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
  padding: 50px;
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