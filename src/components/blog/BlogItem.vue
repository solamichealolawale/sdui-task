<template>
  <article v-if="!!post.id" class="card" :class="{ 'card--wide': featured }">
    <header class="card__header">
      <img :src="post.image" class="card__img" :alt="`${post.title}'s featured image`" />
    </header>

    <div class="card__body">
      <div class="card__details">
        <span>{{ post.author }}</span>
        <span>&nbsp; &middot; &nbsp;</span>
        <time>{{ dayjs(post.date).fromNow() }}</time>
      </div>
      <h2 class="card__title">
        <router-link
          :to="{ name: 'blogDetails', params: { id: post.id } }"
          class="card__title-link"
          >{{ post.title }}</router-link
        >
      </h2>
      <div class="card__excerpt" v-html="post.excerpt"></div>
    </div>

    <footer class="card__footer">
      <time class="card__time">{{ readingTime }} Min Read</time>
      <div class="card__action">
        <a role="button" href="#" class="card__link" @click="editPost">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
          Edit Post</a
        >
        <router-link
          :to="{ name: 'blogDetails', params: { id: post.id } }"
          class="card__link"
        >
          <span>Read More</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16667 10H15.8333"
              stroke="#1473E6"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 13.3333L15.8333 10"
              stroke="#1473E6"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 6.66666L15.8333 9.99999"
              stroke="#1473E6"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </div>
    </footer>
  </article>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default {
  props: {
    post: {
      required: true,
      type: Object,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const store = useStore();
    dayjs.extend(relativeTime);

    const readingTime = computed(() => {
      const text = props.post.body;
      const averageWordPerMinute = 225;
      const words = text.trim().split(/\s+/).length;
      const time = Math.ceil(words / averageWordPerMinute);
      return time;
    });

    const editPost = () => store.commit("SELECT_POST", props.post.id);

    return {
      readingTime,
      dayjs,
      editPost,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  border: 1px solid $c-border;
  border-radius: 5px;
  background-color: $c-white;
  padding: 8px 8px 36px;
  width: 100%;
  font-weight: 400;
  height: 100%;

  &:hover &__img {
    transform: scale(1.1);
  }

  &__header {
    border-radius: 5px;
    height: pxToRem(200px);
    overflow: hidden;
  }

  &__img {
    width: 100%;
    height: pxToRem(200px);
    max-width: 100%;
    object-fit: cover;
    @include transition(transform 300ms);
  }

  &__body {
    color: $c-black-20;
    font-size: pxToRem(14px);
  }

  &__details {
    font-size: pxToRem(12px);
    margin: 10px 0 8px;
    display: inline-block;
    font-weight: 500;

    & span:first-child {
      color: $c-black-30;
    }
  }

  &__title {
    font-size: pxToRem(18px);
    font-weight: 700;
    color: $c-black;
    margin-bottom: 4px;
    @include trim-line(2);
  }

  &__title-link {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: $c-primary;
      text-decoration: underline;
    }
  }

  &__excerpt {
    margin-bottom: 16px;
    line-height: pxToRem(21px);
    @include trim-line(4);
  }

  &__footer {
    width: calc(100% - 16px);
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: pxToRem(12px);
    margin-bottom: 6px;
    position: absolute;
    bottom: 8px;
    left: 8px;
  }

  &__action {
    display: flex;
    gap: 16px;
  }

  &__link {
    display: flex;
    align-items: center;
    color: $c-primary;
    text-decoration: none;
    font-weight: bold;
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    @include transition(background-size 300ms);

    &:hover {
      background-size: 100% 2px;
    }
  }
}

.card--wide {
  padding: 8px 14px 36px 8px;

  @include screen(md) {
    padding: 8px 14px 8px 8px;
    display: grid;
    column-gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .card {
    &__header {
      @include screen(lg) {
        border-radius: 0;
        height: pxToRem(280px);
      }
    }

    &__img {
      height: pxToRem(280px);
    }

    &__title {
      font-size: pxToRem(22px);
      line-height: pxToRem(26px);
      font-weight: 900;
      margin-bottom: 8px;
    }

    &__excerpt {
      @include screen(md) {
        @include trim-line(2);
      }
      @include screen(lg) {
        @include trim-line(6);
      }
    }

    &__footer {
      left: unset;

      @include screen(md) {
        grid-column-start: 2;
      }
    }
  }
}
</style>
