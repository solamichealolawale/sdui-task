<template>
  <form role="form" @submit.prevent="submitForm" class="form" action="#">
    <h2 v-if="'id' in selectedPost" class="form__title">Edit Blog</h2>
    <h2 v-else class="form__title">Add New Blog</h2>
    <p class="form__subtitle">Label marked as * are required</p>

    <div class="">
      <div class="form__container">
        <label class="form__label">Blog Title *</label>
        <input
          type="text"
          class="form__input"
          autofocus
          autocomplete="off"
          required
          v-model.trim="form.title"
          placeholder="Title goes here"
        />
      </div>

      <div class="form__container">
        <label class="form__label">Blog Body *</label>
        <textarea
          class="form__input"
          required
          v-model="form.body"
          placeholder="Blog contents goes here"
        ></textarea>
      </div>

      <div class="form__container">
        <label class="form__label">Author *</label>
        <input
          type="text"
          class="form__input"
          required
          v-model.trim="form.author"
          placeholder="Author goes here"
        />
      </div>

      <button type="submit" class="form__btn form__btn--primary">
        <span v-if="'id' in selectedPost">Update Post</span>
        <span v-else>Publish Post</span>
      </button>
    </div>
  </form>
</template>

<script>
import { reactive, watch, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const initialData = {
      title: null,
      body: null,
      author: null,
    };

    const form = reactive({ ...initialData });

    const selectedPost = computed(() => store.getters["selectedPost"]);

    watch(
      () => selectedPost.value,
      function () {
        form.id = selectedPost.value.id;
        form.title = selectedPost.value.title;
        form.body = selectedPost.value.body;
        form.author = selectedPost.value.author;
      }
    );

    const submitForm = () => {
      store.commit("id" in selectedPost.value ? "EDIT_POST" : "ADD_POST", form);
      return Object.assign(form, initialData);
    };

    return {
      form,
      submitForm,
      selectedPost,
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
  padding: 20px 20px 36px;
  position: sticky;
  top: 1rem;

  &__title {
    font-size: pxToRem(22px);
    line-height: pxToRem(26px);
    font-weight: 900;
    margin-bottom: 8px;
  }

  &__subtitle {
    font-size: small;
    color: $c-black-30;
    margin-bottom: 1rem;
  }

  &__container {
    position: relative;
    padding-bottom: 10px;
  }

  &__label {
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
    padding-left: 0px;
    font-size: 14px;
    line-height: 32px;
    letter-spacing: 0.5px;
    height: 32px;
    color: #77777a;
  }

  &__input {
    outline: none;
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    padding: 10px 15px;
    border: 1px solid $c-border;
    background: #fff;
    letter-spacing: 0.5px;
    font-family: inherit;
    font-size: 1.05rem;
    border-radius: 4px;
    resize: vertical;
    -webkit-transition: 0.2s;
    transition: 0.2s;

    &:not(input) {
      height: 10rem;
    }

    &:focus {
      background: #f8fafb;
    }
  }

  &__btn {
    display: block;
    border: none;
    min-width: 160px;
    height: 48px;
    letter-spacing: 1.5px;
    font-family: inherit;
    font-size: .9rem;
    text-transform: uppercase;
    text-align: center;
    border-radius: 4px;
    padding: 10px 24px;
    margin-top: 20px;
    cursor: pointer;
  }

  &__btn--primary {
    background-color: $c-primary;
    color: white;

    &:hover {
      color: #fff;
      background-color: $c-primary-dark;
    }
  }
}
</style>
