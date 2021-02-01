<template>
  <div class="forum-listing">
    <div class="forum-details">
      <router-link
        :to="{ name: 'PageForum', params: { id: forum['.key'] } }"
        class="text-xlarge"
        >{{ forum.name }}</router-link
      >
      <p>{{ forum.description }}</p>
    </div>

    <div class="threads-count">
      <p>
        <span class="count">{{ threadsCount }}</span>
        {{ threadsCount === 1 ? "thread" : "threads" }}
      </p>
    </div>

    <div class="last-thread">
      <img
        class="avatar"
        src="https://pbs.twimg.com/profile_images/719242842598699008/Nu43rQz1_400x400.jpg"
        alt=""
      />
      <div class="last-thread-details">
        <!-- TODO: LAST THREAD DETAILS -->
      </div>
    </div>
  </div>
</template>

<script>
import { countObjectProperties } from "../utils";
export default {
  props: {
    forum: {
      required: true,
      type: Object,
    },
  },
  computed: {
    threadsCount() {
      return countObjectProperties(this.forum.threads);
    },
  },
};
</script>

<style></style>
