<template>
  <div class="admin_cover">
    <div class="admin_wrapper">
      <admin-navbar></admin-navbar>
      <div class="admin_data">
        <h2 class="data_title">Экспоненты</h2>
        <admin-search></admin-search>
        <admin-form></admin-form>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSearch from "@/components/admin/adminComponent/AdminSearch";

import adminNavbar from "@/components/admin/adminComponent/adminNavbar";

import adminForm from "@/components/admin/adminComponent/adminForm";

export default {
  name: "AdminApp",
  components: {AdminSearch, adminNavbar, adminForm}

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
</style>