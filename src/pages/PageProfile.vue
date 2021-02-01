<template>
  <div class="flex-grid">
    <div class="col-3 push-top">
      <div class="profile-card">
        <p class="text-center">
          <img :src="user.avatar" alt="" class="avatar-xlarge" />
        </p>

        <h1 class="title">{{ user.username }}</h1>

        <p class="text-lead">{{ user.name }}</p>

        <p class="text-justify">
          <span v-if="user.bio">{{ user.bio }}</span>
          <span v-else>No bio specified.</span>
        </p>

        <span class="online">{{ user.username }} is online</span>

        <div class="stats">
          <span>{{ userPostsCount }} posts</span>
          <span>{{ userThreadsCount }} threads</span>
        </div>

        <hr />

        <p v-if="user.website" class="text-large text-center">
          <i class="fa fa-globe"></i>
          <a :href="user.website">{{ user.website }}</a>
        </p>
      </div>

      <p class="text-xsmall text-faded text-center">
        Member since june 2003, last visited 4 hours ago
      </p>

      <div class="text-center">
        <hr />
        <a href="edit-profile.html" class="btn-green btn-small">Edit Profile</a>
      </div>
    </div>

    <div class="col-7 push-top">
      <div class="profile-header">
        <span class="text-lead"> Joker's recent activity </span>
        <a href="#">See only started threads?</a>
      </div>

      <hr />

      <PostList :posts="userPosts" />

      <!-- <div class="activity-list">
        <div class="activity">
          <div class="activity-header">
            <img
              src="https://i.imgur.com/OqlZN48.jpg"
              alt=""
              class="hide-mobile avatar-small"
            />
            <p class="title">
              How can I chop onions without crying?
              <span>Joker started a topic in Cooking</span>
            </p>
          </div>

          <div class="post-content">
            <div>
              <p>
                I absolutely love onions, but they hurt my eyes! Is there a way
                where you can chop onions without crying?
              </p>
            </div>
          </div>

          <div class="thread-details">
            <span>4 minutes ago</span>
            <span>1 comments</span>
          </div>
        </div>

        <div class="activity">
          <div class="activity-header">
            <img
              src="http://i.imgur.com/s0AzOkO.png"
              alt=""
              class="hide-mobile avatar-small"
            />

            <p class="title">
              Wasabi vs horseraddish?
              <span>Joker replied to Robin's topic in Cooking</span>
            </p>
          </div>

          <div class="post-content">
            <div>
              <blockquote class="small">
                <div class="author">
                  <a href="/user/robin" class=""> robin</a>
                  <span class="time">a month ago</span>
                  <i class="fa fa-caret-down"></i>
                </div>

                <div class="quote">
                  <p>
                    Is horseradish and Wasabi the same thing? I&amp;#39;ve heard
                    so many different things.
                  </p>
                </div>
              </blockquote>

              <p>They're not the same!</p>
            </div>
          </div>

          <div class="thread-details">
            <span>2 days ago</span>
            <span>1 comment</span>
          </div>
        </div>

        <div class="activity">
          <div class="activity-header">
            <img
              src="https://i.imgur.com/OqlZN48.jpg"
              alt=""
              class="hide-mobile avatar-small"
            />
            <p class="title">
              Where is the sign in button??????!?!?!?!
              <span
                >Joker replied to his own topic in Questions & Feedback</span
              >
            </p>
          </div>

          <div class="post-content">
            <div>
              <p>
                <strong
                  ><i>Post deleted due to inappropriate language</i></strong
                >
              </p>
            </div>
          </div>

          <div class="thread-details">
            <span>7 days ago</span>
            <span>7 comments</span>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList";
import { mapGetters } from "vuex";
export default {
  components: {
    PostList,
  },
  computed: {
    ...mapGetters({
      user: "authUser",
    }),
    userPostsCount() {
      return this.user.posts ? Object.keys(this.user.posts).length : 0;
    },
    userThreadsCount() {
      return this.user.threads ? Object.keys(this.user.threads).length : 0;
    },
    userPosts() {
      if (this.user.posts) {
        return Object.values(this.$store.state.posts).filter(
          (post) => post.userId === this.user[".key"]
        );
      }
      return [];
    },
  },
};
</script>

<style></style>
