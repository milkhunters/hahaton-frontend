<template>
  <h2 class="data_title">Партнёры</h2>
  <br>
 <admin-search></admin-search>
<div>
  <table class="admin_table">

    <tr>
      <th>ID</th>
      <th>Наименование</th>
      <th>Статутс публикации</th>
      <th>Дата публикации</th>
      <th>Приоритетность</th>
    </tr>


    <tr class="record" @click="showDialog" v-for="item in partner" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.status }}</td>
      <td>{{ item.date }}</td>
      <td>{{ item.priority }}</td>
    </tr>

    <modal-window v-model:show="dialogVisible"></modal-window>
  </table>
</div>
</template>

<script>
import AdminSearch from "@/components/admin/adminComponent/adminSearch";
import ModalWindow from "@/components/admin/ModalWindow/modalWindow";
export default {
  name: "adminPartner",
  components: {ModalWindow, AdminSearch},
  data() {
    return{
      dialogVisible: false,
      partner:[
        {id: 1, name: 'РосАтом', status: 'Принято', date: '10.10.2019', priority: 1}
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
.admin_table {
  margin-top: 20px;
  width: 100%;
}
.admin_table tr {
  border: 1px solid var(--border-light);
}
.admin_table th {
  border-right: 2px solid var(--border-light);
  border-bottom: 2px solid var(--border-light);
  text-align: left;
  padding: 4px;
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