<template>
<div>
  DASHBOARD
  <br>
  <br>
  Hello, {{ this.name }}
  <br>
  <br>
  <button @click="LogOut">Выйти</button>
</div>
</template>

<script>
import axios from "axios";
import router from "@/router/router";

export default {
  name: "Dashboard-App",
  data() {
    return{
      name: ''
    }
  },
  methods: {
    async LogOut(){
      const url = 'https://dev-hack.milkhunters.ru/api/v1'
      await axios.post(url + "/auth/logout")
      await router.push({name: 'login'})

      // const url = 'https://dev-hack.milkhunters.ru/api/v1'
      //
      // const response = await axios.get(url + "/user/current")
      //
      // if (response.data.error === undefined ){
      //   alert(response.data.username)
      // } else {
      //     await router.push({name: 'login'})
      // }

    }
  },
  async mounted() {
    const url = 'https://dev-hack.milkhunters.ru/api/v1'

    const response = await axios.get(url + "/user/current")

    this.name = response.data.username
    // if (response.data.error === undefined) {
    //   alert(response.data.username)
    // } else {
    //   await router.push({name: 'login'})
    // }

  }
// автоматически выполнять current запрос

}
</script>

<style scoped>

</style>