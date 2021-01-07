<template>
  <div class="mx-2 flex-col md:flex-row mb-4 flex justify-between">
    <div class="w-full px-2 md:px-0 md:w-4/12 tra">
      <input
        type="text"
        placeholder="Busque o usuário pelo nome"
        class="w-full py-2 md:w-9/12 px-4 rounded-md border-gray-300 border-2 focus:bg-gray-50 focus:border-blue-500 focus:w-full
        focus:transition transition-delay duration-300 ease-in-out"
        v-model="busca"
      />
    </div>
    <router-link to="/usuarios/0">
      <div class="mt-2 md:mt-0 btn text-center">
        Adicionar usuário
      </div>
    </router-link>
  </div>
  <Lista
    class="px-2 md:px-0 mb-20 w-full mx-auto"
    :carregando="stateIS.carregando"
    :usuarios="usuarios"
    :handleRemover="mostrarModalRemover"
  />
  <Modal
    v-if="mostrarModal"
    :titulo="`Remover ${usuarioRemover?.name}`"
    :nome="usuarioRemover?.name"
    :onClose="fecharModal"
    :onOk="remover"
  />
</template>

<script lang="ts">
import { useStore } from "vuex";
import Lista from "@/components/Usuarios/Lista.vue";
import Modal from "@/components/Modal.vue";
import { defineComponent, ref, computed } from "vue";
import api from "@/services/api";
import { Usuario } from "@/store";

export default defineComponent({
  components: {
    Lista,
    Modal
  },
  setup() {
    const store = useStore();
    const estadoRef = ref(store.state);
    const busca = ref("");
    const mostrarModal = ref(false);
    const usuarioRemover = ref<Usuario>();

    const stateIS = computed(() => estadoRef.value);
    const usuarios = computed(() => {
      if (!!busca.value) {
        return store.state.usuarios.filter(u => {
          return u.name.toLowerCase().indexOf(busca.value.toLowerCase()) !== -1;
        });
      }

      return store.state.usuarios;
    });

    const obterUsuarios = () => {
      store.commit("obterUsuarios");
    };

    return {
      store,
      busca,
      obterUsuarios,
      stateIS,
      usuarios,
      mostrarModal,
      usuarioRemover
    };
  },
  beforeMount() {
    this.obterUsuarios();
  },
  methods: {
    mostrarModalRemover(usuario: Usuario) {
      console.log("openModal", usuario);
      this.mostrarModal = true;
      this.usuarioRemover = usuario;
    },
    fecharModal() {
      this.mostrarModal = false;
    },
    remover() {
      api
        .delete<Usuario>(`usuarios/${this.usuarioRemover?.id}`)
        .then(response => {
          this.mostrarModal = false;
          (this as any).$toast.success(`Usuário removido com sucesso.`);
          this.obterUsuarios();
        })
        .catch(erro => {
          (this as any).$toast.error(`Ocorreu um erro ao remover usuário`);
        });
    }
  }
});
</script>
