<template>
  <div
    class="w-1/3 mx-auto bg-gray-50 p-6 rounded-md flex-col justify-center mb-10 text-center"
    v-if="carregando"
  >
    Carregando
  </div>
  <div
    v-else
    class="w-1/3 mx-auto bg-gray-50 p-6 rounded-md flex-col justify-center mb-10"
  >
    <img
      class="mt-2 w-32 mx-auto mb-6 rounded-full "
      :src="usuario.avatar"
      alt=""
    />
    <!-- src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png" -->

    <div class="leading-8 w-3/4 mx-auto mb-4">
      <div>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Nome"
          class="input"
          v-model="usuario.name"
        />
      </div>
      <div>
        <label>Profissão:</label>
        <input
          type="text"
          placeholder="Profissão"
          class="input"
          v-model="usuario.job"
        />
      </div>
      <div>
        <label>Url avatar:</label>
        <input
          type="text"
          placeholder="URL do avatar"
          class="input"
          v-model="usuario.avatar"
        />
      </div>
      <div @click="salvar" class="mt-4 btn block text-center">
        Salvar
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { computed, defineComponent, PropType, reactive, ref } from "vue";
import api from "@/services/api";
import { useStore } from "vuex";
import { Usuario } from "@/store";

export default defineComponent({
  props: ["id"],
  setup(props) {
    const store = useStore();
    const estadoIS = computed(() => store.state.usuarios);
    const carregando = ref(props.id !== "0");

    const usuario = reactive({
      id: "",
      name: "",
      job: "",
      avatar: ""
    });
    return { estadoIS, carregando, usuario };
  },
  beforeMount() {
    console.log("chama", this.id);
    if (this.id !== "0") this.obterUsuarioPorId(this.id);
  },
  methods: {
    async obterUsuarioPorId(id: number) {
      this.carregando = true;
      try {
        const response = await api.get<Usuario>(`usuarios/${id}`);
        this.usuario = response.data;
      } catch (error) {}
      this.carregando = false;
    },
    salvar() {
      console.log("salvar", this.usuario);
      this.carregando = true;
      if (!!this.usuario.id) {
        api
          .put<Usuario>(`usuarios/${this.usuario.id}`, this.usuario)
          .then(response => {
            (this as any).$toast.success(`Usuário salvo com sucesso.`);
            this.$router.push("/usuarios");
          })
          .catch(erro => {
            (this as any).$toast.error(`Ocorreu um erro ao salvar usuário`);
          });
      } else {
        api
          .post<Usuario>(`usuarios/${this.usuario.id}`, this.usuario)
          .then(response => {
            (this as any).$toast.success(`Usuário salvo com sucesso.`);
            this.$router.push("/usuarios");
          })
          .catch(erro => {
            (this as any).$toast.error(`Ocorreu um erro ao salvar usuário`);
          });
      }
    }
  }
});
</script>
