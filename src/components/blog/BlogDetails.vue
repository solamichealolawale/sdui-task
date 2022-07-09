<template>
  <article class="article" v-if="post">
    <figure class="article__figure">
      <img
        :src="post.image"
        class="article__img"
        :alt="`${post.title}'s featured image`"
      />
    </figure>
    <div class="article__info">
      <span>{{ post.author }}</span>
      <span>&nbsp; &middot; &nbsp;</span>
      <time>{{ dayjs(post.date).fromNow() }}</time>
    </div>
    <h2 class="article__title" v-text="post.title"></h2>
    <div class="article__body">
      <div class="article__paragraph" v-html="post.body"></div>
      <SocialShare :id="Number(route.params.id)" :title="post.title" />
    </div>
  </article>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import SocialShare from "@/components/SocialShare.vue";

export default {
  components: { SocialShare },
  setup() {
    const store = useStore();
    const route = useRoute();
    dayjs.extend(relativeTime);
    const post = store.getters.getPostByID(route.params.id);
    return {
      dayjs,
      post,
      route
    };
  },
};
</script>

<style lang="scss" scoped>
.article {
  background-color: $c-white;

  &__info {
    font-size: pxToRem(12px);
    margin: 10px 0 8px;
    display: inline-block;
    font-weight: 500;
    color: $c-black-20;

    & span:first-child {
      color: $c-black-30;
    }
  }

  &__title {
    font-size: pxToRem(32px);
    line-height: pxToRem(38px);
    font-weight: 900;
    color: $c-black;
    margin-bottom: 1rem;
  }

  &__body {
    color: $c-black-20;
    font-size: pxToRem(14px);
    line-height: pxToRem(21px);
  }

  &__paragraph {
    margin-bottom: 32px;
    line-height: pxToRem(21px);
    color: $c-black-30;
    // text-align: justify;
  }

  &__figure {
    height: 280px;
    overflow: hidden;
    margin: 0 auto 32px;
  }

  &__img {
    width: 100%;
    height: 280px;
    overflow: hidden;
    object-fit: cover;
  }
}
</style>
