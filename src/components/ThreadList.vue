<template>
  <div>
    <div class="container">
      <!-- <div class="col-full">
            <div class="category-item">
                <div class="forum-list">
                    <h2 class="list-title">Recipes</h2>

                    <div class="forum-listing">
                        <div class="forum-details">
                            <a href="#" class="forum-name">Recipes</a>

                            <p class="forum-description ">Recipes, Guides and Tips & Tricks</p>
                        </div>


                        <div class="threads-count">
                            <p class="count text-lead">1</p> threads
                        </div>

                        <div class="last-thread">
                            <img class="avatar" src="http://cleaneatsfastfeets.com/wp-content/uploads/2013/05/Mr-Burns.gif" alt="">
                            <div class="last-thread-details">
                                <a href="#">How I grill my fish</a>
                                <p class="text-xsmall">By <a href="profile.html">Charles Montgomery Burns</a>, 2 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

      <div class="col-full">
        <div class="thread-list">
          <h2 class="list-title">Threads</h2>

          <ThreadListItem
            v-for="thread in threads"
            :thread="thread"
            :key="thread['.key']"
          />
        </div>

        <div class="pagination">
          <button class="btn-circle" disabled>
            <i class="fa fa-angle-left"></i>
          </button>
          1 of 3
          <button class="btn-circle"><i class="fa fa-angle-right"></i></button>
        </div>
      </div>
    </div>

    <div class="forum-stats desktop-only">
      <hr />
      <ul>
        <li><i class="fa fa-user-circle-o"></i>47 users online</li>
        <li><i class="fa fa-user-o"></i>497 users registered</li>
        <li><i class="fa fa-comments-o"></i>49 threads</li>
        <li><i class="fa fa-comment-o"></i>763 posts</li>
      </ul>
    </div>
  </div>
</template>

<script>
import ThreadListItem from "./ThreadListItem";
export default {
  components: {
    ThreadListItem,
  },
  props: {
    threads: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style></style>
