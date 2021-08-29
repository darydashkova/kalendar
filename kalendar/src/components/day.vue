<template>
  <div class="days-item">
    <div v-for="item in date1.dayName1" class="days-item_border" :key="item.id">
{{item}}
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'day',
  setup () {
       const date1 = reactive({
      dayName1: [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье'
      ]
    }) 
    return {
      date1
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
.days-item{
width: 100%;
display: flex;
justify-content: space-between;
}
.days-item_border{
  border: 1px solid lightblue;
  border-radius: 10px;
  width: 14%;
}
</style>
