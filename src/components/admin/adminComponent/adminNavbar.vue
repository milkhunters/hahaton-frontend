<template>
  <div class="admin_navbar">
    <h1 class="navbar_title" title="Какое-то название фирмы">
      Панель администратора
    </h1>
    <div class="navbar_crud">

      <router-link :to="{name: 'exhibitors'}" id="exhibitos" class="navbar_crud_item navbar_crud_item_active">Экспоненты</router-link>
      <router-link :to="{name: 'products'}" id="product" class="navbar_crud_item">Продукты</router-link>
      <router-link :to="{name: 'cases'}" id="case" class="navbar_crud_item">Кейсы</router-link>
      <router-link :to="{name: 'partners'}" id="partners" class="navbar_crud_item">Партнёры</router-link>
      <router-link :to="{name: 'reviews'}" id="reviews" class="navbar_crud_item">Отзывы</router-link>
      <router-link :to="{name: 'locations'}" id="location" class="navbar_crud_item">Локации</router-link>
    </div>
     <div class="navbar_exit" @click="logOut">Выход <i class="fa-regular fa-right-from-bracket"></i></div>
    <!-- Тут тупо добавить js с запросом апи на /logout. И починить вёрстку-->
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router/router";

export default {
  name: "adminNavbar",
  methods: {

    async logOut() {
      const url = process.env.VUE_APP_BASEAPI_URL
      await axios.post(url + "/auth/logout", {})
      await router.push({name: 'login'})
    }

  }

}
</script>

<style scoped>
.admin_navbar {
  max-width: 390px;
  min-width: 370px;
  overflow: hidden;
  background: var(--content-color);
  width: 100%;
  border-right: 2px solid var(--border-light);
  height: 100%;
}
.navbar_title {
  font-size: 21px;
  font-weight: 700;
  border-bottom: 2px solid var(--border-light);
  padding: 20px;
}
.navbar_crud {
  display: flex;
  padding: 12px 12px 12px 0;
  height: calc(100% - 135px);
  flex-direction: column;
}
.navbar_crud_item {
  font-weight: 500;
  color: var(--text-color-gray);
  padding: 15px 15px 15px 20px;
  border-radius: 0 25px 25px 0;
  margin: 2px 0;
}
.navbar_crud_item:hover {
  background: var(--content-color-hover);
}
/*.navbar_crud_item_active {*/
/*  background: var(--primary-color) !important;*/
/*  color: #fff;*/
/*}*/
.navbar_exit {
  font-size: 21px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-color-gray);
  width: 100%;
  border-top: 2px solid var(--border-light);
  padding: 20px;

}
.navbar_exit:hover {
  border-top: 2px solid var(--content-color);
  background: rgb(227, 99, 99);
  color: #fff;
}
</style>