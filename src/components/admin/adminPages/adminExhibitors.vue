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
      <th>{{ item.company.id }}</th>
      <th>{{ item.compantitle }}</th>
      <th>{{ item.inn }}</th>
      <th>ФИО</th>
      <th>Категория</th>
      <th>Статус заявки</th>
      <th>Дата</th>
      <th>{{ item.company.import_substitution_shield }}</th>
    </tr>


    <modal-window v-model:show="dialogVisible" v-model:content = "Item"></modal-window>

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
      Item: 0,
      url: process.env.VUE_APP_BASEAPI_URL,
      newExhibitors:[],

    }
  },
  methods: {
    showDialog(item) {

      this.dialogVisible = true
      this.Item = item

    }

  },
  async mounted() {

    const response = await axios.get(process.env.VUE_APP_BASEAPI_URL + "/user/get")

    this.newExhibitors = response.data

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