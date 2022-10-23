<template>

<div class="dialog" @click.stop v-if="show" @click="hideDialog">

<div @click.stop class="dialog__content">
  <slot>

<!--    <div v-for="name in names" :key="name.id">-->
<!--      {{ name.v }} - {{ content.name.d }}-->
<!--    </div>-->
    <div class="dialog_wrapper">
      <div class="dialog_item">
        <p>ID</p><p>{{ content.id }}</p>
      </div>
      <div class="dialog_item">
        <p>About</p><p>{{ content.about }}<input v-model="about"></p>
      </div>
      <div class="dialog_item">
        <p>Company Url</p><p>{{ content.company_url }}<input v-model="company_url"></p>
      </div>
      <div class="dialog_item">
        <p>Cover</p><p>{{ content.cover }}<input v-model="cover"></p>
      </div>
      <div class="dialog_item">
        <p>Description</p><p>{{ content.description }}<input v-model="description"></p>
      </div>
      <div class="dialog_item">
        <p>Import</p><p>{{ content.import_substitution_shield }}<input v-model="import_substitution_shield"></p>
      </div>
      <div class="dialog_item">
        <p>Inn</p><p>{{ content.inn }}<input v-model="inn"></p>
      </div>
      <div class="dialog_item">
        <p>Address</p><p>{{ content.legal_address }}<input v-model="legal_address"></p>
      </div>
      <div class="dialog_item">
        <p>Logo</p><p>{{ content.logo }}<input v-model="logo"></p>
      </div>
      <div class="dialog_item">
        <p>Manufacture</p><p>{{ content.manufacture_address }}<input v-model="manufacture_address"></p>
      </div>
      <div class="dialog_item">
        <p>Phone Number</p><p>{{ content.phone_number }}<input v-model="phone_number"></p>
      </div>
      <div class="dialog_item">
        <p>Title</p><p>{{ content.title }}<input v-model="title"></p>
      </div>
    </div>

    <button @click="updateForm" class="dialog_btn_confirm">Подтвердить</button>
  </slot>
</div>

</div>

</template>

<script>
import axios from "axios";

export default {
  name: "modalWindow",
  data() {
    return{
      // names: [{id:1, v:'ID', d: 'id'}, {id:2,v:'About', d:''}, {id:3,v:'Company_Url', d:''}, {id:4,v:'Cover', d:''}, {id:5,v:'Create_Time', d:''}, {id:6,v:'Description', d:''}, {id:7,v:'Exhibitor', d:''}, {id:8,v:'Import', d:''}, {id:9,v:'Inn', d:''}, {id:10,v:'Address', d:''}, {id:11,v:'Logo', d:''}, {id:12,v:'Manufacture', d:''}, {id:13,v:'PhoneNumber', d:''}, {id:14,v:'Title', d:''}, {id:15, v:'UpdateTime', d:''}],
      title: null,
      description: null,
      about: null,
      logo: null,
      cover: null,
      company_url: null,
      phone_number: null,
      inn: null,
      legal_address: null,
      manufacture_address: null,
      import_substitution_shield: true
    }
  },
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
    },
    async updateForm() {
      const response = await axios.post('https://dev-hack.milkhunters.ru/api/v1/admin/company/update?company_id=' + this.content.id,{
        "title": this.title,
        "description": this.description,
        "about": this.about,
        "logo": this.logo,
        "cover": this.cover,
        "company_url": this.company_url,
        "phone_number": this.phone_number,
        "inn": this.inn,
        "legal_address": this.legal_address,
        "manufacture_address": this.manufacture_address,
        "import_substitution_shield": true
      })
      console.log(response + "test2")
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