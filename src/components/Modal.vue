<template>
  <div
    style="filter:blur(30px)"
    class="bg-gray-900 opacity-50  top-0 left-0 fixed w-full h-full z-10"
  ></div>

  <div
    class="transition  delay-200 ease-in z-20
     w-3/6  left-1/4 mx-auto p-4
  fixed  top-20 bg-gray-50 rounded-lg flex flex-col justify-between"
    style="min-height: 200px;"
  >
    <div class="flex justify-between border-b-2">
      <span class="ml-2">{{ titulo }}</span>
      <span class="btn btn-default" @click="onClose()">X</span>
    </div>
    <div>
      Deseja realmente excluir o usuário <b>{{ nome }}</b
      >?
    </div>
    <div class="flex  justify-end ">
      <div
        @click="onClose()"
        class="btn text-center border-gray-400 border-2 mx-2 btn-default"
      >
        Cancelar
      </div>
      <div @click="onOk()" class="btn text-center bg-red-500">
        Remover
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { Usuario } from "@/store";

export default defineComponent({
  props: ["nome", "titulo", "onClose", "onOk"],
  setup(props) {
    return {};
  }
});
</script>
