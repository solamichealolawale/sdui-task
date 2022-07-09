<template>
  <nav class="nav">
    <router-link to="/" class="nav__logo">
      <img src="/logo.svg" class="nav__logo-icon" />
    </router-link>
    <ul class="nav__list">
      <li class="nav__item">
        <router-link to="/" class="nav__link" href="javascript:void(0)">
          Home
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/terms-conditions" class="nav__link" href="javascript:void(0)">
          Terms
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/privacy-policy" class="nav__link" href="javascript:void(0)">
          Policy</router-link
        >
      </li>
      <li class="nav__item">
        <a class="nav__link" href="javascript:void(0)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
            ></path>
          </svg>
        </a>
      </li>
      <li class="nav__item">
        <a class="nav__link" href="javascript:void(0)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid $c-border;

  &__logo {
    display: block;
    width: pxToRem(80px);
    height: pxToRem(80px);

    &-icon {
      height: 100%;
      width: 100%;
    }
  }

  &__list {
    display: flex;
    align-items: center;
    color: $c-black-30;
    list-style: none;
  }

  &__item {
    svg {
      stroke: $c-black-30;
      fill: none;
      width: 20px;
      height: 20px;
    }
    &:not(:first-child) {
      position: relative;
      margin-left: 1rem;

      &:after {
        content: "\2022";
        font-size: 7px;
        color: $c-black-20;
        position: absolute;
        top: 6px;
        left: -8px;
      }
    }
  }

  &__link {
    color: inherit;
    font-family: inherit;
    font-size: 1rem;
    text-decoration: none;
    display: block;
    @include transition(transform 300ms);

    @include screen (lg) {
      font-size: 1.05rem;
    }

    &:hover {
      color: $c-primary-dark;

      svg {
        stroke: $c-primary;
      }
    }

    &-icon {
      height: 100%;
      width: 100%;
      stroke: currentColor;
      color: $c-black-30;
    }
  }
}
</style>
