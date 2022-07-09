<template>
  <div class="container">
    <img src="/cone.webp" alt="Error Image" />
    <h1>
      <span>Oops</span> <br />
      Something went wrong
    </h1>
    <p>We are currently trying to fix the problem.</p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  text-align: center;
  width: 100%;
  padding: 4em;
  border: 1px solid $c-border;
  border-radius: 5px;

  img {
    width: 256px;
    height: 225px;
  }

  h1 {
    margin-top: 1rem;
    font-size: 35px;
    text-align: center;

    span {
      font-size: 60px;
    }
  }
  p {
    margin-top: 1rem;
  }
}
</style>
