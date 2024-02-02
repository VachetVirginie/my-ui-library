declare module 'my-toto-ui-library' {
  export function myFunction(): void;

  //import types
  import { VueConstructor, PluginFunction } from 'vue';
  import { Framework } from 'vuetify/types';

  // Types for the library usage
  // eg. Vue.use(MyUILibrary, options)

  export interface Icons {
      [key: string]: string;
  }

  export interface Theme {
      icons: Icons;
  }

  export interface LocalStorageControl {
      version?: number;
      expiration?: number;
      prefix?: string;
  }

  export interface MyUILibraryOptions {
      theme?: Theme;
      localStorageControl: LocalStorageControl;
  }

  export interface MyUILibraryPlugin {
      install: PluginFunction<MyUILibraryOptions>;
  }

  declare const MyUILibrary: MyUILibraryPlugin;

  declare global {
    interface Window {
      Vue?: VueConstructor;
    }
  }

    declare module 'vue/types/vue' {
        interface Vue {
        $vd: MyUILibraryOptions;
        $vuetify: Framework;
        }
    }

    export default MyUILibrary;

}