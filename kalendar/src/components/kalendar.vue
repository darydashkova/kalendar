<template>
  <div class="kalendar">
    <div class="kalendar__container">
      <div class="kalendar__container-date">
        <div class="kalendar__mounth">
          <select v-model="selectedMonth" @change="getDates">
            <option
              v-for="(mounth, index) in date.MonthName"
              :key="index"
              :value="index"
            >
              {{ mounth }}
            </option>
          </select>
          <div class="kalendar__year">{{ selectedYear }}</div>
        </div>
      </div>
      <div class="kalendar__table">
        <div class="kalendar__table-column">
          <div
            class="kalendar__table-name-date"
            v-for="(day, index) in date.dayName"
            :key="index"
          >
            {{ day.name }}
            <div v-for="(d, indx) in day.days" :key="indx">{{ d }}</div>
          </div>
        </div>

        <div class="kalendar__table-column kalendar_max-width-day">
          <day
            v-for="item in dayArray"
            :date="item.date"
            :day="item.day"
            :key="item.date"
          ></day>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import day from "./day.vue";
import { reactive, ref } from "vue";

export default {
  components: { day },
  name: "kalendar",
  setup() {
    const date = reactive({
      dayName: [
        {
          name: "Понедельник",
          days: [],
        },
        {
          name: "Вторник",
          days: [],
        },
        {
          name: "Среда",
          days: [],
        },
        {
          name: "Четверг",
          days: [],
        },
        {
          name: "Пятница",
          days: [],
        },
        {
          name: "Суббота",
          days: [],
        },
        {
          name: "Воскресенье",
          days: [],
        },
      ],
      MonthName: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
    });
    const today = new Date();
    const selectedMonth = ref(today.getMonth());
    const selectedDay = ref(today.getDate());
    const selectedYear = ref(2021);

    const getDates = () => {
      let d = new Date(selectedYear.value, selectedMonth.value);

      for (let i = 0; i < date.dayName.length; i++) {
        date.dayName[i].days = [];
      }

      while (d.getMonth() == selectedMonth.value) {
        let dayIndex = d.getDay();

        date.dayName[dayIndex == 0 ? 6 : dayIndex - 1].days.push(d.getDate());

        d = new Date(d.getTime() + 1000 * 60 * 60 * 24);
      }
    };

    getDates();

    return {
      date,
      selectedMonth,
      selectedDay,
      selectedYear,
      today,
      getDates,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
.kalendar_max-width-day {
  flex-wrap: wrap;
}
.kalendar {
  width: 100%;
}
.kalendar__container {
  widows: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid grey;
}
.kalendar__img {
  width: 20px;
  height: 20px;
  transform: rotate(180deg);
}
.kalendar__mounth {
  display: flex;
}
.kalendar__table {
  display: flex;
  flex-direction: column;
}
.kalendar__table-column {
  display: flex;
  justify-content: space-between;
}
.kalendar__table-name-date {
  width: 14%;
}
</style>
