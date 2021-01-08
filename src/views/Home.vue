<template>
  <div>
    <img alt="Vue logo" src="/islogo-1.png" class="mx-auto" />
    <div class="text-center text-gray-800">
      <h1 class="text-xl font-bold ">Projeto teste IS Saúde</h1>
      <p>Criado por {{ $store.state.nome }}😃✌️😎</p>
      <h4 class="mt-8 font-bold ">Tecnologias</h4>
      <ul>
        <li>Vue 3 + TypeScript</li>
        <li>Tailwind css</li>
        <li>Vee-validate</li>
        <li>Axios</li>
        <li>Vuex</li>
      </ul>
      <p class="w-1/3 text-center mx-auto mt-2">
        Obs: O código do projeto não está tão organizado e coloquei algumas
        coisas que não tinham necessidade como Vuex
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {}
})
export default class Home extends Vue {}
</script>
