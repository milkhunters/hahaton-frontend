<template>
  <h2 class="data_title">Отзывы</h2>
  <br>
  <admin-search></admin-search>
<div>
  <table class="admin_table">

    <tr>
      <th>ID</th>
      <th>От комании</th>
      <th>Компании</th>
      <th>ФИО</th>
      <th>Отзыв</th>
      <th>Статус публикации</th>
      <td>Дата</td>
    </tr>


    <tr class="record" @click="showDialog" v-for="item in reviews" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.companyNameFrom }}</td>
      <td>{{ item.companyNameTo }}</td>
      <td>{{ item.fio }}</td>
      <td>{{ item.state }}</td>
      <td>{{ item.date }}</td>
      <td>{{ item.text }}</td>

    </tr>

<modal-window v-model:show="dialogVisible"></modal-window>

  </table>
</div>
</template>

<script>
import AdminSearch from "@/components/admin/adminComponent/adminSearch";
import ModalWindow from "@/components/admin/ModalWindow/modalWindow";
export default {
  name: "adminReviews",
  components: {ModalWindow, AdminSearch},
  data() {
    return{
      dialogVisible: false,
      reviews: [
        {
          id: 1, companyNameFrom: 'Ростсельмаш', companyNameTo: 'Одджетто', fio: 'Иванов Иван ', point: 4.5, state: 'Принято', date: '06.04.2021', text: 'Качественный продукт!'
        }
      ]

    }
  },
  methods: {
    showDialog() {
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>
/*.admin_table {*/
/*  margin-top: 20px;*/
/*  width: 100%;*/
/*}*/
/*.admin_table tr {*/
/*  border: 1px solid var(--border-light);*/
/*}*/
/*.admin_table th {*/
/*  border-right: 2px solid var(--border-light);*/
/*  border-bottom: 2px solid var(--border-light);*/
/*  text-align: left;*/
/*  padding: 4px;*/
/*}*/
/*.admin_table td {*/
/*  border-right: 2px solid var(--border-light);*/
/*  padding: 4px;*/
/*  border-bottom: 2px solid var(--border-light);*/
/*}*/
/*.table_link {*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*}*/

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
