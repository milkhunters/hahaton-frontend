<template>
  <h2 class="data_title">Локации</h2>
  <br>
  <admin-search></admin-search>
<div>
  <table class="admin_table">

    <tr>
      <th>ID</th>
      <th>Наименование</th>
      <th>Адрес</th>
      <th>Тип сотрудничества</th>
      <th>Статус публикации</th>
      <th>Ссылка</th>
      <th>GPS</th>
      <th>Компания</th>
    </tr>


    <tr v-for="item in locations" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.type }}</td>
      <td>{{ item.status }}</td>
      <td>{{ item.link }}</td>
      <td>{{ item.gps }}</td>
      <td>{{ item.companyName }}</td>
      <td><a href="#" class="table_link">+</a></td>
    </tr>

  </table>
</div>
</template>

<script>
import AdminSearch from "@/components/admin/adminComponent/adminSearch";
export default {
  name: "adminLocations",
  components: {AdminSearch},
  data() {
    return{
      locations: [
        { id: 1, name: 'Пентхаус', address: 'ул.Северная 120/1', type: 'Партнер', status: 'Принято', link: 'https/google.com', gps: '39.7136063', companyName: 'Оджетто' }
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