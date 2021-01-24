<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <CategoryList :categories="this.categories" />
  </div>
</template>

<script>
import sourceData from "@/data";
import CategoryList from "../components/CategoryList";
console.log(sourceData);
export default {
  components: {
    CategoryList,
  },
  data() {
    return {
      categories: Object.values(sourceData.categories),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
