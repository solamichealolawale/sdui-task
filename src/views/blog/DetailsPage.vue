<template>
  <main>
    <section class="blog-details-wrapper">
      <BlogDetails></BlogDetails>
    </section>
  </main>
</template>

<script>
import BlogDetails from "@/components/blog/BlogDetails.vue";

export default {
  components: {
    BlogDetails,
  },
  setup() {


    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-details-wrapper {
  margin: 0 auto 7rem;
  @include screen(lg) {
    max-width: 705px;
  }
}
</style>
