<template>
  <h2 class="data_title">Кейсы</h2>
  <br>
  <admin-search></admin-search>
<div>
  <table class="admin_table">

    <tr>
      <th>ID</th>
      <th>Наименование</th>
      <th>Ссылка</th>
      <th>Категория</th>
      <th>Статус публикации</th>
      <th>Ссылка</th>
      <th>GPS</th>
      <th>Компания</th>
    </tr>


    <tr v-for="item in cases" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.caseName }}</td>
      <td>{{ item.caseLink }}</td>
      <td>{{ item.caseType }}</td>
      <td>{{ item.caseStatus }}</td>
      <td>{{ item.caseDate }}</td>
      <td>{{ item.caseCompany }}</td>
      <td>{{ item.caseShield }}</td>
      <td><a href="#" class="table_link">+</a></td>
    </tr>

  </table>
</div>
</template>

<script>
import AdminSearch from "@/components/admin/adminComponent/adminSearch";
export default {
  name: "adminCase",
  components: {AdminSearch},
  data() {
    return{
      cases: [
        {
          id: 1, caseName: 'РостЗавод', caseLink: 'https://zrost.com', caseType: 'Сельхоз-техника', caseStatus: 'Иванов Иван', caseDate: '123456789', caseCompany: 'Принято', caseShield: 'Да'
        }
      ]}
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