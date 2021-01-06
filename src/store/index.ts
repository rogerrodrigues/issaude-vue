import { createStore } from 'vuex';
import api from '@/services/api';

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
  usuario: Usuario;
  usuarios: Usuario[];
};

const initialState = {
  nome: 'Roger',
  usuario: {} as Usuario,
  usuarios: [] as Usuario[],
};

export const store = createStore<State>({
  state: initialState,
  mutations: {
    async obterUsuarios(state, { id }: { id: number }) {
      debugger;
      console.log('obter usuario', id);
      const response = await api.get<Usuario[]>('usuarios');
      state.usuarios = response.data;
      state.nome = response.data[0].name;
      console.log('@usuarios', state.usuarios);
    },
  },
  actions: {},
  modules: {},
});
