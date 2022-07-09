import { createStore } from "vuex";
import $axios from "@/helpers/axios";

const truncateStringToLength = (str, length) =>
  str.length > length ? `${str.substr(0, length)}...` : str;

const slugify = (str) => {
  return str
    .toString()
    .normalize("NFD") // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, "") // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, "-"); //separator;
};

const getLastMaxID = (arr) =>
  Math.max.apply(
    null,
    arr.map((obj) => obj.id)
  );

export default createStore({
  state: {
    posts: [],
    selectedPost: {},
  },
  getters: {
    posts: (state) => state.posts,
    getPostByID: (state) => (id) => {
      return state.posts.find((post) => post.id == id);
    },
    selectedPost: (state) => state.selectedPost,
  },
  mutations: {
    SET_POSTS(state, payload) {
      state.posts = payload;
    },
    ADD_POST(state, { title, body, author }) {
      state.posts.unshift({
        id: getLastMaxID(state.posts) + 1,
        author,
        title,
        excerpt: truncateStringToLength(body, 245),
        body,
        date: new Date(),
        image: `https://loremflickr.com/320/200/${slugify(title).replaceAll(
          "-",
          ","
        )}`,
      });
    },
    SELECT_POST(state, id) {
      state.selectedPost = state.posts.find((post) => post.id === id);
    },
    EDIT_POST(state, { id, title, body, author }) {
      const index = state.posts.findIndex((item) => item.id === id);
      state.posts[index] = {
        id: state.posts[index].id,
        author,
        title,
        excerpt: truncateStringToLength(body, 245),
        body,
        date: state.posts[index].date,
        image: state.posts[index].image,
      };
      state.selectedPost = {};
    },
  },
  actions: {
    async getPosts({ commit }) {
      const { data } = await $axios.get(`/posts`);
      const posts = data.map((post) => {
        return {
          id: post.id,
          author: "Solar",
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          body: post.content.rendered,
          date: post.date_gmt,
          image: post.jetpack_featured_media_url,
        };
      });
      commit("SET_POSTS", posts);
    },
  },
  modules: {},
});
