<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <ForumList :forums="this.forums" />
  </div>
</template>

<script>
import sourceData from "@/data";
import ForumList from "../components/ForumList";
console.log(sourceData);
export default {
  components: {
    ForumList,
  },
  data() {
    return {
      forums: Object.values(sourceData.forums),
      posts: sourceData.posts,
      users: sourceData.users,
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
