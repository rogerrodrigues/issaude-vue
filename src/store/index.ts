import { createStore } from "vuex";
import api from "@/services/api";

const initialState = {
  nome: "Roger Rodrigues",
  carregando: false,
  usuarios: [] as Usuario[]
};

export const store = createStore<State>({
  state: initialState,
  mutations: {
    async obterUsuarios(state) {
      state.carregando = true;
      try {
        const response = await api.get<Usuario[]>("usuarios");
        state.usuarios = response.data;
      } catch (error) {}
      state.carregando = false;
    }
  },
  actions: {},
  modules: {}
});

export interface Usuario {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  job: string;
}

export type UsuarioProps = {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  job: string;
};

export type State = {
  nome: string;
  carregando: boolean;
  usuarios: Usuario[];
};
