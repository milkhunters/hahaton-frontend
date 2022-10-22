<template>
  <h2 class="data_title">Экспоненты</h2>
  <br>
  <admin-search></admin-search>
<div>
  <table class="admin_table">

    <tr>
      <th>ID</th>
      <th>Наименование</th>
      <th>...</th>
    </tr>

    <tr>
      <td>1</td>
      <td>Ростсельмаш</td>
      <td>20,00</td>
      <td><a href="#" class="table_link">+</a></td>
    </tr>

    <tr>
      <td>2</td>
      <td>Какая-то ещё компания</td>
      <td>30,00</td>
      <td><a href="#" class="table_link">+</a></td>
    </tr>

  </table>
</div>
</template>

<script>
import AdminSearch from "@/components/admin/adminComponent/adminSearch";
export default {
  name: "ExhibitorsApp",
  components: {AdminSearch},


}
</script>



<style scoped>
  /*admin table*/
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