<template>
<div>
  DASHBOARD
  <button @click="UserCurr">Выйти</button>
</div>
</template>

<script>
import axios from "axios";
import router from "@/router/router";

export default {
  name: "Dashboard-App",
  data() {
    return{
      username: "",
      password: "",
      tmpPass: "pass123@$Zx",
      tmp: ""
    }
  },
  methods: {
    async UserCurr(){
      const url = 'https://dev-hack.milkhunters.ru/api/v1'

      const response = await axios.get(url + "/user/current")

      if (response.data.error === undefined ){
        alert(response.data.error)
      } else {
          await router.push({name: 'login'})
      }

    }
  }


}
</script>

<style scoped>

</style>