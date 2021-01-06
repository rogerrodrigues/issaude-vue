<template>
  <div>
    <div @click="obterUsuarios" class="btn">Obter Usuários</div>
    <div class="">Counter: {{ counter }}</div>

    <Lista
      class="mb-20 w-11/12 mx-auto shadow-md"
      :usuarios="stateIS.usuarios"
    />
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { Vue } from "vue-class-component";
import Lista from "@/components/Usuarios/Lista.vue";
import { defineComponent, ref, reactive } from "vue";
import api from "@/services/api";
// import { StoreIS, Usuario } from "@/store";

export default defineComponent({
  components: {
    Lista
  },
  setup() {
    const store = useStore();

    // const usuarios = store.state.usuarios as Usuario[];

    const stateIS = ref(store.state);
    const obterUsuarios = () => {
      store.commit("obterUsuarios", { id: 12 });
    };

    return { store, obterUsuarios, stateIS };
  },
  data() {
    return {
      counter: 0
    };
  },
  mounted() {
    // this.store.subscribe((mutation, state) => {
    //   if (["obterUsuarios"].includes(mutation.type)) {
    //     debugger;
    //     // console.log("usuarios atualizados", this.usuarios, state);
    //     // this.usuarios = state.usuarios;
    //     // your code here
    //   }
    // });
    // this.obterUsuarios();
    console.log(this.counter);
    // setInterval(() => this.counter++, 1000);
    console.log("mounted", this.stateIS.usuarios);
  },
  beforeUpdate() {
    console.log("before update", this.stateIS.usuarios);
  },
  updated() {
    console.log("updated update", this.stateIS.usuarios);
  }
});
</script>
