<template>
  <div class="form">
    <div class="form__group">
      <span class="form__icon"></span>
      <input
        type="text"
        :value="query"
        @input="$emit('update:query', $event.target.value)"
        class="form__input"
        placeholder="Search Posts by Title"
      />
      <select
        :value="sort"
        @input="$emit('update:sort', $event.target.value)"
        class="form__input"
      >
        <option selected disabled value="">Sort By</option>
        <option value="title">Title</option>
        <option value="body">Body</option>
        <option value="author">Author</option>
      </select>
      <select
        :value="order"
        @input="$emit('update:order', $event.target.value)"
        class="form__input"
      >
        <option selected disabled value="">Sort Direction</option>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    query: {
      type: String,
      default: "",
      required: true,
    },
    sort: {
      type: String,
      default: "",
    },
    order: {
      type: String,
      default: "asc",
    },
  },
  setup() {
    const form = ref({
      query: null,
      sort: "",
      order: "",
    });

    return {
      form,
    };
  },
};
</script>

<style lang="scss" scoped>
textarea,
input[type="text"],
input[type="password"],
input[type="button"],
input[type="submit"] {
  -webkit-appearance: none;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

.form {
  border: 1px solid $c-border;
  border-radius: 5px;
  background-color: $c-white;
  margin-bottom: 2rem;
  padding-right: 10px;
  width: 100%;

  &__group {
    display: flex;
    flex-direction: column;
    @include screen(md) {
      flex-direction: row;
    }
  }

  &__input {
    outline: none;
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    padding: 5px 10px;
    border: none;
    background: #fff;
    letter-spacing: 0.5px;
    font-family: inherit;
    font-size: 1.05rem;
    resize: vertical;
    -webkit-transition: 0.2s;
    transition: 0.2s;

    &:not(input) {
      flex: none;
      width: 100%;
      border-top: 1px solid $c-border;

      @include screen(md) {
        border-top: none;
        border-left: 1px solid $c-border;
        width: 150px;
      }

      &:disabled {
        color: red;
      }

      &:last-of-type {
        @include screen(md) {
          width: 180px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
