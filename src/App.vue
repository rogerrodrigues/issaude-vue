<template>
  <div class="mx-auto bg-gray-800 w-full flex items-center justify-center">
    <div class="p-3">
      <router-link class="mx-2 btn btn-default" to="/">Home</router-link>
      <router-link to="/usuarios" class="mx-2 btn btn-default">
        Usuarios
      </router-link>
    </div>
  </div>
  <div class="container pt-8 mx-auto mb-32">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
