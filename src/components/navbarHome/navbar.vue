<template>
<div>
  <auth-reg-buttons></auth-reg-buttons>
  <search-app></search-app>
</div>
</template>

<script>
import SearchApp from "@/components/navbarHome/search";
export default {
  name: "NavbarHome",
  components: {SearchApp}
}
</script>

<style scoped>

</style>