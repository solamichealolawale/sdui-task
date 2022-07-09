<template>
  <div class="blog">
    <Error v-if="error" />

    <Suspense v-else>
      <BlogLists />
      <template #fallback>
        <div class="blog-grid-list">
          <Loader v-for="i in 12" :key="i" />
        </div>
      </template>
    </Suspense>

    <aside>
      <BlogForm />
    </aside>
  </div>
</template>

<script>
import { onErrorCaptured, ref } from "vue";
import BlogLists from "@/components/blog/BlogLists.vue";
import BlogForm from "@/components/blog/BlogForm.vue";
import Loader from "@/components/Loader.vue";
import Error from "@/components/Error.vue";

export default {
  name: "HomeView",
  components: {
    BlogLists,
    BlogForm,
    Loader,
    Error,
  },
  setup() {
    const error = ref();

    onErrorCaptured((e) => {
      error.value = e;
      return true;
    });

    return {
      error,
    };
  },
};
</script>

<style lang="scss" scoped>
.blog {
  width: 100%;
  margin: 1rem 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @include screen(md) {
    margin: 2rem 0 4rem;
  }

  @include screen(lg) {
    margin: 3rem 0 6rem;
    flex-direction: row;
  }

  aside {
    flex: none;
    order: -1;

    @include screen(lg) {
      width: 400px;
      order: 2;
    }
  }
}
</style>
