<template>
  <div class="post">
    <div class="user-info">
      <a href="profile.html#profile-details" class="user-name">{{
        user.name
      }}</a>

      <a href="#">
        <img class="avatar-large" :src="user.avatar" alt="" />
      </a>
      <p class="desktop-only text-small">{{ userPostsCount }} posts</p>

      <p class="desktop-only text-small">23 threads</p>

      <span class="online desktop-only">online</span>
    </div>

    <div class="post-content">
      <div>
        <p>
          {{ post.text }}
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

    <div
      class="post-date text-faded"
      :title="post.publishedAt | humanFriendlyDate"
    >
      {{ post.publishedAt | diffForHumans }}
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
      <button class="btn-xsmall">+ <i class="fa fa-smile-o emoji"></i></button>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data";
import moment from "moment";
export default {
  props: {
    post: {
      required: true,
      type: Object,
    },
  },
  computed: {
    user() {
      return sourceData.users[this.post.userId];
    },
    userPostsCount() {
      return Object.keys(this.user.posts).length;
    },
  },
  filters: {
    humanFriendlyDate(date) {
      return moment.unix(date).format("MMMM Do YYYY, h:mm:ss a");
    },
    diffForHumans(date) {
      return moment.unix(date).fromNow();
    },
  },
};
</script>

<style></style>
