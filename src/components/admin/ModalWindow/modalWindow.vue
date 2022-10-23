<template>

<div class="dialog" @click.stop v-if="show" @click="hideDialog">

<div @click.stop class="dialog__content">
  <slot>
    ID - {{ content.id }}
    <br>
   {{content.about  }}
    <br>
    {{ content.company_url }}
    <br>
    {{ content.cover }}
    <br>
   {{ content.create_time }}
    <br>
    {{content.description}}
    <br>
    {{content.exhibitor}}
    <br>
    {{ content.import_substitution_shield }}
    <br>
    {{ content.inn }}
    <br>
    {{content.legal_address}}
    <br>
    {{content.logo}}
    <br>
    {{content.manufacture_address}}
    <br>
    {{content.phone_number}}
    <br>
    {{content.title}}
    <br>
    {{content.update_time}}
<!--    <tr class="record" v-for="item in content" :key="item.id">-->
<!--      <th>{{ item.id }}</th>-->
<!--      <th>{{ item.title }}</th>-->
<!--      <th>{{ item.inn }}</th>-->
<!--      <th>ФИО</th>-->
<!--      <th>Категория</th>-->
<!--      <th>Статус заявки</th>-->
<!--      <th>Дата</th>-->
<!--      <th>{{ item.import_substitution_shield }}</th>-->
<!--    </tr>-->

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
    },
    content: {

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