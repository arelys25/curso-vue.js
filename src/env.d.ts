// ARCHIVO CREADO PARA QUE TypeScipt entienda cómo tratar a los archivos .vue

/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}