<template>
  <div class="forum-list">
    <h2 class="list-title">
      <a href="#">Forums</a>
    </h2>

    <ForumListItem
      v-for="forum in forums"
      :forum="forum"
      :key="forum['.key']"
    />

    <div class="forum-listing">
      <div class="forum-details">
        <a href="forum.html" class="text-xlarge">Questions & Feedback</a>
        <p>Ask your questions and drop your feedback here</p>
      </div>

      <div class="threads-count">
        <p class="count">73</p>
        threads
      </div>

      <div class="last-thread">
        <img class="avatar" src="https://i.imgur.com/OqlZN48.jpg" alt="" />
        <div class="last-thread-details">
          <a href="thread.html">Where is the sign in button?</a>
          <p class="text-xsmall">
            By <a href="profile.html">Joseph Kerr</a>, three hours ago
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ForumListItem from "./ForumListItem";
export default {
  components: {
    ForumListItem,
  },
  props: {
    forums: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style></style>
