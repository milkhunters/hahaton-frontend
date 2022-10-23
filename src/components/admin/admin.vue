<template>
  <div class="admin_cover">
    <div class="admin_wrapper">
      <admin-navbar></admin-navbar>
      <div class="admin_data">
<!--        <h2 class="data_title">Экспоненты</h2>-->
<!--        <admin-search></admin-search>-->
        <admin-form></admin-form>
      </div>
    </div>
  </div>
</template>

<script>
// import AdminSearch from "@/components/admin/adminComponent/adminSearch";

import adminNavbar from "@/components/admin/adminComponent/adminNavbar";

import adminForm from "@/components/admin/adminComponent/adminForm";
// import axios from "axios";
// import router from "@/router/router";

export default {
  name: "AdminApp",
  components: { adminNavbar, adminForm},
  async mounted() {
    // const response = axios.get(process.env.VUE_APP_BASEAPI_URL + '/user/current')
    //
    // if (response.data.role_id < 20 || response.status !== 200 || response.data.error !== undefined) {
    //   await router.push({name: 'lk'})
    // }
  }
  // mounted() {
  //   if (router === '/admin/products')
  //   document.getElementById("product").style.backgroundColor = 'blue';
  //   document.getElementById('product').style.color = 'white';
  // }
  }

</script>


<style scoped>
.admin_cover {
  height: 100%;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin_wrapper {
  max-width: 1200px;
  height: 100%;
  display: flex;
  max-height: calc(100vh - 100px);
  margin: 50px 20px;
  overflow: hidden;
  box-shadow: var(--shadow-big-content);
  border-radius: 25px;
  width: 100%;
}
/* data */
.admin_data {
  background: var(--content-color);
  height: 100%;
  width: 100%;
  padding: 20px;
  overflow-x: auto;
}
.data_title {
  font-weight: 600;
  font-size: 21px;
  margin-bottom: 20px;
}
</style>