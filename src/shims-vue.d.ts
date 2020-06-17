// src/shims.vue.d.ts
declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  var component: ComponentOptions;
  export default component;
 }