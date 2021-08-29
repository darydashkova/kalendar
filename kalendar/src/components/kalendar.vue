<template>
  <div class="kalendar">
    <div class="kalendar__container">
      <div class="kalendar__container-date">
        <div class="kalendar__mounth">
          <select v-model="selectedMonth">
            <option v-for="(mounth,index) in  date.MonthName" :key="index" :value="index" @change="getDates(2021,mounth)">{{mounth}}</option>
          </select>
          <div class="kalendar__year">2021</div>
        </div>
    </div>
    <div class="kalendar__table">
      <div class="kalendar__table-column">
      <div class="kalendar__table-name-date" v-for="day in date.dayName" :key='day.id'>
        {{day}}
      </div>
      </div>
      <div class="kalendar__table-column ">
        <day></day>
      </div>
    </div>
      
    </div>
  </div>
</template>

<script>
import day from './day.vue'
import { reactive, ref } from 'vue'

export default {
  components: {day},
  name: 'kalendar',
  setup () {
    const date = reactive({
      dayName: [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье'
      ],
      MonthName: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
      ]
    })
    const today = new Date();
    const selectedMonth = ref(today.getMonth());
    const selectedDay= ref(today.getDate());
    const selectedYear= ref(2021);
    const getDates = (year, month) => {
      let d = new Date(year, month);
        while(d.getMonth() == month) {
            console.log(d.getDate());
            d = new Date(d.getTime() + (1000 * 60 * 60 * 24));
        }
    }
    return {
      date,
      selectedMonth,
      selectedDay,
      today,
      getDates
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.kalendar{
  width: 100%;
}
.kalendar__container{
  widows: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid grey;
}
.kalendar__img{
  width: 20px;
  height: 20px;
transform: rotate(180deg);
}
.kalendar__mounth{
  display: flex;
}
.kalendar__table{
  display: flex;
 flex-direction: column;
}
.kalendar__table-column{
   display: flex;
  justify-content: space-between;
}
.kalendar__table-name-date{
 width: 14%;
}

</style>
