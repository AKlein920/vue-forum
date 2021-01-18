<template>
  <div>
    <div class="col-large push-top">
      <h1>{{ thread.title }}</h1>
      <div class="post-list">
        <div v-for="postId in thread.posts" v-bind:key="postId" class="post">
          <div class="user-info">
            <a href="profile.html#profile-details" class="user-name">{{
              users[posts[postId].userId].name
            }}</a>

            <a href="#">
              <img
                class="avatar-large"
                :src="users[posts[postId].userId].avatar"
                alt=""
              />
            </a>
          </div>

          <div class="post-content">
            <div>
              <p>
                {{ posts[postId].text }}
              </p>
            </div>
            <a
              href="#"
              style="margin-left: auto"
              class="link-unstyled"
              title="Make a change"
              ><i class="fa fa-pencil"></i
            ></a>
          </div>

          <div class="post-date text-faded">
            {{ posts[postId].publishedAt }}
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
            <button class="btn-xsmall active-reaction">
              <span class="emoji">👌️</span>️ 1
            </button>
            <button class="btn-xsmall">
              + <i class="fa fa-smile-o emoji"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data";
export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      thread: sourceData.threads[this.id],
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
};
</script>
