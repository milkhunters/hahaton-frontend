<template>

<div class="homeDiv">

  <AuthRegButtons/>

</div>

</template>



<script>


import AuthRegButtons from "@/components/navbar/authRegButtons";
export default {
  name: "Home-App",
  components: {AuthRegButtons},

}
</script>

<style scoped>
  .homeDiv {
    height: 100%;
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  }
</style>