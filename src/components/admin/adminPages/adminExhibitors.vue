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


    <tr class="record" @click="showDialog(item.id)" v-for="item in newExhibitors"  :key="item.id">
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
      exhibitors: [
        {
          id: 1,
          exName: 'Ростсельмаш',
          ExInn: '123456789123',
          exFIO: 'Петров Петр',
          exCategorie: 'Сельхоз-техника',
          exStatus: 'Принято',
          exDate: '20.10.2022',
          exManufacture: 'Да'
        }
      ],
      exhibitors2: [
        {
          "id": 1,
          "import_substitution_shield": 'no',
          "category_id": 'IT',
          "legal_address": 'alim',
          "logo": 'alim',
          "about": 'alim',
          "cover": 'alim',
          "description": 'alim',
          "company_url": 'alim',
          "manufacture_address": 'alim',
          "catalog_id": 'alim',
          "inn": "3664069397",
          "title": "ООО Супер Компания",
          "phone_number": 'alim'
        },
        {
          "id": 2,
          "import_substitution_shield": 'yes',
          "category_id": 'Sport',
          "legal_address": 'alim',
          "logo": 'alim',
          "about": 'alim',
          "cover": 'alim',
          "description": 'alim',
          "company_url": 'alim',
          "manufacture_address": 'alim',
          "catalog_id": 'alim',
          "inn": "3664069397",
          "title": "ООО Супер Компания",
          "phone_number": 'alim'
        },
        {
          "id": 4,
          "import_substitution_shield": false,
          "category_id": null,
          "legal_address": null,
          "logo": null,
          "about": null,
          "cover": null,
          "description": null,
          "company_url": null,
          "manufacture_address": null,
          "catalog_id": null,
          "inn": "36640693r97",
          "title": "ООО Супер Пупер Компания",
          "phone_number": null
        },
        {
          "id": 5,
          "import_substitution_shield": false,
          "category_id": null,
          "legal_address": null,
          "logo": null,
          "about": null,
          "description": null,
          "company_url": null,
          "manufacture_address": null,
          "catalog_id": null,
          "inn": "366406397",
          "title": "ООО Супер Мега Компания",
          "phone_number": null
        },
        {
          "id": 6,
          "import_substitution_shield": false,
          "category_id": null,
          "legal_address": null,
          "logo": null,
          "about": null,
          "cover": null,
          "description": null,
          "company_url": null,
          "manufacture_address": null,
          "catalog_id": null,
          "inn": "123456789123",
          "title": "ООО РогаКопыта",
          "phone_number": null
        },
        {
          "id": 7,
          "import_substitution_shield": false,
          "category_id": null,
          "legal_address": null,
          "logo": null,
          "about": null,
          "cover": null,
          "description": null,
          "company_url": null,
          "manufacture_address": null,
          "catalog_id": null,
          "inn": "1337420228",
          "title": "JobGames",
          "phone_number": null
        }    //   "cover": null,

      ]
    }
  },
  methods: {
    showDialog(id) {
      console.log(id)
      this.dialogVisible = true
      this.idItem = id
    },


  },
  mounted() {
    const response = axios.get(process.env.VUE_APP_BASEAPI_URL + "/admin/company/get")
    // this.newExhibitors = response.data
    this.newExhibitors = response
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