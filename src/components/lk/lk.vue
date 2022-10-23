<template>
<div>
  LK
</div>
</template>

<script>
import axios from "axios";
import router from "@/router/router";

export default {
  name: "LkApp",
  async mounted() {
    const response = axios.post(process.env.VUE_APP_BASEAPI_URL + '/user/current')

    if (response.status !== 200 || response.data.error !== undefined) {
      await axios.post(process.env.VUE_APP_BASEAPI_URL + "/auth/logout", {})
      await router.push({name: 'login'})
    }
  }
}
</script>

<style scoped>

</style>