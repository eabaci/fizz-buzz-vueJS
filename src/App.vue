<template>
  <div id="app">
    <input v-model="value" placeholder="please add a number">
    <p v-if="!error">FizzBuzz List of: {{ value }}</p>
    <p v-if="error">{{error}}</p>
    <FizzBuzzList v-bind:error="error" v-bind:items="items"></FizzBuzzList>
  </div>
</template>

<script>
import FizzBuzzList from "./components/FizzBuzzList.vue";

export default {
  name: "app",
  components: { FizzBuzzList },
  methods: {
    updateItems() {
      let self = this;
      let regExp = new RegExp("^[0-9]+$", "g");
      let value = self.value;
      self.items.length = 0;
      self.error = false;

      if (regExp.test(value) && value <= 10000 && value >= 0) {
        for (let i = 0; i <= value; i++) {
          let val = "";
          if (i % 3 == 0) {
            val += "Fizz";
          }
          if (i % 5 == 0) {
            val += "Buzz";
          }
          self.items.push({ id: self.items.length, val: val || i });
        }
      } else if (value > 10000) {
        self.error = "Warning: Number is to big. Please try a smaller Number!";
      } else if (value < 0) {
        self.error =
          "Warning: Number is negative. Please try a positive Number!";
      } else if (!value) {
        self.error = "Warning: Input Field is empty. Please add a Number!";
      } else {
        self.error =
          "Error: Wrong Input value. The Input value must be a Number!";
      }
    }
  },
  beforeUpdate() {
    if (this.valid) {
      this.valid = false;
      this.updateItems();
    }
  },
  updated() {
    this.valid = true;
  },
  data() {
    return {
      valid: true,
      error: false,
      value: "",
      items: []
    };
  }
};
</script>

<style>
#app {
  background: #dad3d363;
  border: 1px solid gray;
  border-radius: 4px;
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
  padding: 20px;
  text-align: center;
  width: 50%;
}
</style>
