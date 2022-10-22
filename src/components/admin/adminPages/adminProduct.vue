<template>
  <h2 class="data_title">Продукты</h2>
  <br>
  <admin-search></admin-search>
  <div>
    <table class="admin_table">

        <tr>
          <th>ID</th>
          <th>Наименование</th>
          <th>Категория</th>
          <th>ФИО</th>
          <th>Статус публикации</th>
          <th>Дата публикации</th>
        </tr>


      <tr v-for="item in exhibitors" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.companyName }}</td>
        <td>{{ item.categorie }}</td>
        <td>{{ item.fio }}</td>
        <td>{{ item.status }}</td>
        <td>{{ item.date }}</td>
        <td><a href="#" class="table_link">+</a></td>
      </tr>



    </table>
  </div>

</template>

<script>
import AdminSearch from "@/components/admin/adminComponent/adminSearch";
export default {
  name: "adminProduct",
  components: {AdminSearch},
  data() {
    return{
      exhibitors: [
        {
          id: 1, companyName: 'Ростсельмаш', categorie: 'Сельхоз-техника', fio: 'Иванов Иван', inn: '123456789', status: 'Принято', date: '12.10.2022'
        },
        {
          id: 2, companyName: 'Оджетто', categorie: 'Программное обеспечение', fio: 'Петров Никита ', inn: '646432763', status: 'Принято', date: '23.8.2022'
        },
        {
          id: 3, companyName: 'Магнит', categorie: 'Сеть розничных магазинов', fio: 'Бояр Недвояр', inn: '992837563', status: 'Принято', date: '08.01.2022'
        }
      ]
    }
  },

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