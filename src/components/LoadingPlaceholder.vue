<template>
  <div class="blog-grid-list">
    <content-placeholders v-for="placeholder in 12" :key="placeholder">
      <content-placeholders-img />
      <content-placeholders-text :lines="3" />
    </content-placeholders>
  </div>
</template>
