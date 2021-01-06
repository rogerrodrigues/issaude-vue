<template>
  <div class="container mx-auto">
    <img alt="Vue logo" src="/islogo-1.png" />
    {{ $store.state.nome }}
    <Usuarios />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Usuarios from '@/components/Usuarios.vue'; // @ is an alias to /src

@Options({
  components: {
    Usuarios,
  },
})
export default class Home extends Vue {}
</script>
