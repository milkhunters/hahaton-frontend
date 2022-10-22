<template>

<div class="dialog" @click.stop v-if="show" @click="hideDialog">

<div @click.stop class="dialog__content">
  <slot>
    Modal Windows

  </slot>
</div>

</div>

</template>

<script>
export default {
  name: "modalWindow",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
.dialog{
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  position: fixed;
  display: flex;
}
.dialog__content{
  margin: auto;
  background: white;
  border-radius: 50px;
  min-height: 600px;
  min-width: 600px;
  padding: 40px;
  position: relative;
}

.exit__btn
{
  position: absolute;
  top: 20px;
  right: 30px;
  width: 20px;
  height: 50px;
  font-size: 30px;
}
</style>