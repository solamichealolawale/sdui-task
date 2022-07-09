<template>
  <section>
    <BlogSearchFilter
      v-model:query="form.query"
      v-model:sort="form.sort"
      v-model:order="form.order"
    />
    <div v-if="filteredPosts.length">
      <!-- <div class="blog-featured">
        <BlogItem featured :post="posts[0]"></BlogItem>
      </div> -->
      <div class="blog-grid-list">
        <BlogItem v-for="post in filteredPosts" :key="post.id" :post="post"></BlogItem>
      </div>
    </div>
    <Empty v-else />
  </section>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

import BlogItem from "@/components/blog/BlogItem.vue";
import BlogSearchFilter from "@/components/blog/BlogSearchFilter.vue";
import Empty from "@/components/Empty.vue";

export default {
  components: {
    BlogItem,
    BlogSearchFilter,
    Empty,
  },
  async setup() {
    const store = useStore();

    await store.dispatch("getPosts");

    const posts = computed(() => store.getters["posts"]);

    const form = ref({
      query: "",
      sort: "",
      order: "",
    });

    const filteredPosts = computed(() => {
      if (form.value.query !== "") {
        const sortParam = form.value.sort || "title";
        // const orderParam = form.value.order || "asc";

        return posts.value.filter((post) =>
          post[sortParam].toLowerCase().includes(form.value.query.toLowerCase())
        );
      }

      return posts.value;
    });

    return {
      posts,
      filteredPosts,
      form,
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
}
.blog-featured {
  margin-bottom: 1rem;

  @include screen(md) {
    margin-bottom: 2rem;
  }

  @include screen(lg) {
    margin-bottom: 3rem;
  }
}
</style>
