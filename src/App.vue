<template>
  <div class="p-3">
    <div class="mx-auto max-w-screen-lg flex items-center justify-center">
      <router-link class="mx-2 btn" to="/">Home</router-link>
      <router-link to="/about" class="mx-2 btn">Usuarios</router-link>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
