<template>
  <ul v-if="!error">
    <li v-for="item in items" v-bind:key="item.id">{{item.val}}</li>
  </ul>
</template>

<script>
export default {
  name: "FizzBuzzList",
  props: ["items", "error"]
};
</script>


<style scoped>
ul {
  background: #b5abab70;
  border: 1px solid gray;
  border-radius: 4px;
  margin: auto;
  padding: 20px;
  text-align: left;
  width: 40%;
}
li {
  margin: 0 0 0 30px;
  padding: 0 0 0 10px;
}
</style>
