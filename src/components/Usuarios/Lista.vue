<template>
  <div class="bg-gray-100 px-4 py-6 rounded-md" v-if="carregando">
    <h3 class="font-medium text-center text-xl">
      Carregando usuários...
    </h3>
  </div>
  <div v-else-if="!temUsuarios" class="bg-gray-100 px-4 py-6 rounded-md">
    <h3 class="font-medium text-center text-xl">
      =/
      <br />
      Nenhum resultado foi encontrado
    </h3>
  </div>
  <div v-else>
    <span class="md:ml-2 font-medium">
      Total:
    </span>
    <span
      class="md:ml-2 font-medium text-gray-800 bg-gray-100 rounded-xl px-2 py-1 mb-2 inline-block"
      >{{ usuarios?.length }}
    </span>
    <div class="w-full flex flex-col transition-opacity">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:mx-0-">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nome
                  </th>
                  <th
                    scope="col"
                    class="text-right max-w-min px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="u in usuarios" v-bind:key="u.id">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png"
                          alt=""
                        />
                        <!-- ::src="u.avatar" -->
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ u.name }}
                        </div>
                        <div class="text-sm text-gray-500">
                          {{ u.job }}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                  >
                    <router-link
                      :to="`/usuarios/${u.id}`"
                      class="mx-2 btn btn-default border-gray-300 border-2"
                    >
                      <button class="text-indigo-600 hover:text-indigo-900">
                        Editar
                      </button>
                    </router-link>

                    <button
                      class="mx-2 btn btn-default  border-gray-300 border-2 text-indigo-600 hover:text-indigo-900"
                      @click="() => handleRemover(u)"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { Usuario } from "@/store";

export default defineComponent({
  props: {
    carregando: { type: Boolean },
    usuarios: { type: Object as PropType<Usuario[]> },
    handleRemover: {
      type: Function as PropType<(usuario: Usuario) => void>,
      required: true
    }
  },
  setup(props) {
    const temUsuarios = computed(() =>
      !!props.usuarios ? props.usuarios.length > 0 : false
    );

    return {
      temUsuarios
    };
  }
});
</script>
