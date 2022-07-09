<template>
  <article class="skeleton">
    <div class="skeleton__image"></div>
    <div class="skeleton__tags">
      <span class="skeleton__line skeleton__line--narrow"></span>
      <span class="skeleton__line skeleton__line--narrow"></span>
    </div>
    <div class="skeleton__text">
      <p class="skeleton__line skeleton__line--narrow"></p>
      <p v-for="i in 4" :key="i" class="skeleton__line skeleton__line--shorter"></p>
    </div>
    <div class="skeleton__tags">
      <span class="skeleton__line skeleton__line--narrow"></span>
      <span class="skeleton__line skeleton__line--narrow"></span>
    </div>
  </article>
</template>

<style lang="scss" scoped>
$line-height: pxToRem(16px);
.skeleton {
  width: 100%;
  border: 1px solid $c-border;
  border-radius: 5px;
  display: grid;
  gap: 10px;
  padding: 8px;

  &__image,
  &__line {
    @include background;
    border-radius: 4px;
    animation: refresh 2s infinite ease-out;
  }

  &__image {
    height: pxToRem(200px);
  }

  &__tags {
    display: inline-flex;
    column-gap: 10px;

    &:last-of-type {
      display: flex;
      justify-content: space-between;
    }

    & span {
      width: 80px;
      display: inline-block;
      height: $line-height/3;
    }
  }

  &__text {
    display: grid;
    row-gap: 6px;
    margin-bottom: pxToRem(30px);
  }

  &__line {
    height: $line-height;

    &--narrow {
      width: 80%;
      margin-bottom: pxToRem(6px);
    }

    &--shorter {
      height: $line-height/2;
    }
  }
}

@keyframes refresh {
  0% {
    background-position: calc(-100px);
  }

  40%,
  100% {
    background-position: 320px;
  }
}
</style>
