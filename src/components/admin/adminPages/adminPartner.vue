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


    <tr v-for="item in partner" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.status }}</td>
      <td>{{ item.date }}</td>
      <td>{{ item.priority }}</td>
    </tr>

  </table>
</div>
</template>

<script>
import AdminSearch from "@/components/admin/adminComponent/adminSearch";
export default {
  name: "adminPartner",
  components: {AdminSearch},
  data() {
    return{
      partner:[
        {id: 1, name: 'РосАтом', status: 'Принято', date: '10.10.2019', priority: 1}
      ]
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
</style>