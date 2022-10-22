<template>
  <div class="admin_navbar">
    <h1 class="navbar_title" title="Какое-то название фирмы">
      Какое-то название фирмы
    </h1>
    <div class="navbar_crud">
      <router-link :to="{name: 'exponent'}" class="navbar_crud_item navbar_crud_item_active">Экспоненты</router-link>
      <router-link :to="{name: 'products'}" class="navbar_crud_item">Товары</router-link>
      <router-link :to="{name: 'cases'}" class="navbar_crud_item">Кейсы</router-link>
      <router-link :to="{name: 'partners'}" class="navbar_crud_item">Партнёры</router-link>
      <router-link :to="{name: 'reviews'}" class="navbar_crud_item">Отзывы</router-link>
      <router-link :to="{name: 'locations'}" class="navbar_crud_item">Локации</router-link>
    </div>
    <router-link :to="{name: 'exit'}" class="navbar_exit">Выход <i class="fa-regular fa-right-from-bracket"></i
    ></router-link>
  </div>
</template>

<script>
export default {
  name: "adminNavbar"
}
</script>

<style scoped>
.admin_navbar {
  max-width: 400px;
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
.navbar_crud_item_active {
  background: var(--primary-color) !important;
  color: #fff;
}
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