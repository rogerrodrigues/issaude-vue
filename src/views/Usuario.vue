<template>
  <div class="px-3">
    <div
      class="w-full px-2 md:px-0 md:w-1/3 mx-auto bg-gray-50 p-6 rounded-md flex-col justify-center mb-10 text-center"
      v-if="carregando"
    >
      Carregando
    </div>
    <div
      v-else
      class="w-full md:px-0 md:w-1/3 mx-auto bg-gray-50 p-6 rounded-md flex-col justify-center mb-10"
    >
      <img
        class="mt-2 w-32 mx-auto mb-6 rounded-full "
        src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png"
        alt=""
      />
      <!-- :src="usuario.avatar" -->

      <div class="leading-8 w-3/4 mx-auto mb-4">
        <Form
          @submit="salvar"
          v-slot="{ errors }"
          :initial-values="usuario"
          :validation-schema="schema"
          ref="myForm"
        >
          <Field name="id" as="input" type="hidden" />
          <!-- <TextInput
          name="name"
          type="text"
          label="Nome*"
          placeholder="Informe o nome"
          success-message="Belo nome!"
        /> -->
          <label>Nome*:</label>
          <Field
            :class="{ 'border-red-500 border-2': !!errors.name }"
            name="name"
            as="input"
            class="input"
            type="text"
          />
          <ErrorMessage class="text-red-500 block font-medium" name="name" />
          <label>Profissão*:</label>
          <Field
            :class="{ 'border-red-500 border-2': !!errors.job }"
            name="job"
            as="input"
            class="input"
            type="text"
          />
          <ErrorMessage class="text-red-500 block font-medium" name="job" />
          <label>Avatar:</label>
          <Field name="avatar" as="input" class="input" type="text" />
          <ErrorMessage class="text-red-500 block font-medium" name="avatar" />

          <button type="submit" class="mt-4 w-full btn block text-center">
            Salvar
          </button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { computed, defineComponent, PropType, reactive, ref } from "vue";
import api from "@/services/api";
import { useStore } from "vuex";
import { Usuario } from "@/store";
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import TextInput from "@/components/TextInput.vue";
import { setLocale } from "@vee-validate/i18n";

// import ptBR from "@vee-validate/i18n/dist/locale/pt_BR.json";
// setLocale("pt_BR");

export default defineComponent({
  props: ["id"],
  components: {
    Form,
    Field,

    ErrorMessage
  },
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

    const schema = yup.object().shape({
      id: yup.string(),
      name: yup.string().required("Nome é obrigatório"),
      job: yup.string().required("Profissão é obrigatório"),
      avatar: yup.string()
    });

    return { schema, estadoIS, carregando, usuario };
  },
  beforeMount() {
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
    salvar(values) {
      this.usuario = values;
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
