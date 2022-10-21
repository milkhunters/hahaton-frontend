<template>

  <div>
    <admin-form></admin-form>
    <admin-navbar></admin-navbar>
    <admin-search></admin-search>
  </div>
</template>

<script>
import AdminSearch from "@/components/admin/adminNavbar/AdminSearch";
export default {
  name: "AdminApp",
  components: {AdminSearch}

}
</script>

<style scoped>

</style>