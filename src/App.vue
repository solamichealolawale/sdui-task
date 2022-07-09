<template>
  <div class="container">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 95%;
  margin: 0 auto;

  @include screen(md) {
    width: 90%;
  }
  @include screen(lg) {
    width: 90%;
  }
  @include screen(xl) {
    max-width: 1144px;
  }

}
</style>
