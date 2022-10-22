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


    <tr v-for="item in reviews" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.companyNameFrom }}</td>
      <td>{{ item.companyNameTo }}</td>
      <td>{{ item.fio }}</td>
      <td>{{ item.state }}</td>
      <td>{{ item.date }}</td>
      <td>{{ item.text }}</td>

    </tr>



  </table>
</div>
</template>

<script>
import AdminSearch from "@/components/admin/adminComponent/adminSearch";
export default {
  name: "adminReviews",
  components: {AdminSearch},
  data() {
    return{
      reviews: [
        {
          id: 1, companyNameFrom: 'Ростсельмаш', companyNameTo: 'Одджетто', fio: 'Иванов Иван ', point: 4.5, state: 'Принято', date: '06.04.2021', text: 'Качественный продукт!'
        }
      ]

    }
  }
}
</script>

<style scoped>

</style>