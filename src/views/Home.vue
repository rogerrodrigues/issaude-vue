<template>
  <img alt="Vue logo" src="/islogo-1.png" />
  {{ $store.state.nome }}
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {}
})
export default class Home extends Vue {}
</script>
