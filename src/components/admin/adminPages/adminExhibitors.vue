<template>
  <h2 class="data_title">Экспоненты</h2>
  <br>
  <admin-search></admin-search>
<div>
  <table class="admin_table">

    <tr class="admin_table_title">
      <th>ID</th>
      <th>Наименование</th>
      <th>Инн</th>
      <th>ФИО</th>
      <th>Категория</th>
      <th>Статус заявки</th>
      <th>Дата</th>
      <th>Импортозамещение</th>
    </tr>


    <tr class="record" @click="showDialog(item)" v-for="item in newExhibitors"  :key="item.id">
      <th>{{ item.id }}</th>
      <th>{{ item.title }}</th>
      <th>{{ item.inn }}</th>
      <th>ФИО</th>
      <th>Категория</th>
      <th>Статус заявки</th>
      <th>Дата</th>
      <th>{{ item.import_substitution_shield }}</th>
    </tr>


    <modal-window v-model:show="dialogVisible" :content = "idItem"></modal-window>

  </table>
</div>
</template>

<script>
import AdminSearch from "@/components/admin/adminComponent/adminSearch";
import ModalWindow from "@/components/admin/ModalWindow/modalWindow";
import axios from "axios";
export default {
  name: "ExhibitorsApp",
  components: {ModalWindow, AdminSearch},
  data() {
    return {
      dialogVisible: false,
      idItem: 0,
      url: process.env.VUE_APP_BASEAPI_URL,
      newExhibitors:[],

    }
  },
  methods: {
    showDialog(id) {
      this.dialogVisible = true
      this.idItem = id
    },
    async updateForm() {
      const response = await axios.post('https://dev-hack.milkhunters.ru/api/v1/admin/company/get',{
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
      this.newExhibitors  = response.data

    }

  },
  async mounted() {
    const response = await axios.get(process.env.VUE_APP_BASEAPI_URL + "/admin/company/get")

    this.newExhibitors = response.data
    console.log(response)
    console.log(response.company_url)

  }
}
</script>



<style scoped>

.admin_table {
  margin-top: 20px;
  width: 100%;
}
.admin_table tr {
  border: 1px solid var(--border-light);
}
.admin_table_title th {
  font-weight: 600 !important;
}
.admin_table th {
  border-right: 2px solid var(--border-light);
  border-bottom: 2px solid var(--border-light);
  text-align: left;
  padding: 4px;
  font-weight: 500;
}
.admin_table td {
  border-right: 2px solid var(--border-light);
  padding: 4px;
  border-bottom: 2px solid var(--border-light);
}
.table_link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.record{
  cursor: pointer;
}

.record:hover{
  box-shadow: 0px 8px 4px -6px rgba(0,0,0,0.9) ;
}
</style>