/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare module '@meforma/vue-toaster';

// declare module 'vue/types/vue' {
//   // Global properties can be declared
//   // on the `VueConstructor` interface
//   interface VueConstructor {
//     $toast: string
//   }
// }
//   // import type  from '@meforma/vue-toaster'
// }

// Could not find a declaration file for module '@meforma/vue-toaster'. 'd:/Projetos/Vue/issaude-vue/node_modules/@meforma/vue-toaster/src/index.js' implicitly has an 'any' type.
//   Try `npm i --save-dev @types/meforma__vue-toaster` if it exists or add a new declaration (.d.ts) file containing
//   `declare module '@meforma/vue-toaster';`ts(7016)
