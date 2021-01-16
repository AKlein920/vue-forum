<template>
<div>
  <div v-for="thread in threads" v-bind:key='thread.threadId' class="col-large push-top">
    <h1>{{thread.title}}</h1>
  <div class="post-list">
  <div v-for="postId in thread.posts" v-bind:key="postId" class='post'>
    <div class="user-info">
                      <a href="profile.html#profile-details" class="user-name">{{users[posts[postId].userId].name}}</a>

                      <a href="#">
                          <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt="">
                      </a>

                      <p class="desktop-only text-small">107 posts</p>

                      <p class="desktop-only text-small">23 threads</p>

                      <span class="online desktop-only">online</span>

                  </div>

                  <div class="post-content">
                      <div>
                        <p>
                          {{posts[postId].text}}
                        </p>
                      </div>
                      <a href="#" style="margin-left: auto;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"></i></a>
                  </div>

                  <div class="post-date text-faded">
                      {{posts[postId].publishedAt}}
                  </div>

                  <div class="reactions">
                      <ul>
                          <li>💡</li>
                          <li>❤️</li>
                          <li>👎</li>
                          <li>👍</li>
                          <li>👌</li>
                      </ul>
                      <button class="btn-xsmall"><span class="emoji">❤️</span>️ 3</button>
                      <button class="btn-xsmall active-reaction"><span class="emoji">👌️</span>️ 1</button>
                      <button class="btn-xsmall">+ <i class="fa fa-smile-o emoji"></i></button>
                  </div>

  </div>

  </div>


  </div>


  </div>
</template>

<script>
import sourceData from "@/data";
console.log(sourceData);
export default {
  name: "HelloWorld",
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    };
  }
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
