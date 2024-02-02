declare module 'my-toto-ui-library' {

  //import types
  import { VueConstructor, PluginFunction } from 'vue';
  import { Framework } from 'vuetify/types';

  // Types for the library usage
  // eg. Vue.use(MyTotoUILibrary, options)

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

  export interface MyTotoUILibraryOptions {
      theme?: Theme;
      localStorageControl: LocalStorageControl;
  }

  export interface MyTotoUILibraryPlugin {
      install: PluginFunction<MyTotoUILibraryOptions>;
  }

  declare const MyTotoUILibrary: MyTotoUILibraryPlugin;

  declare global {
    interface Window {
      Vue?: VueConstructor;
    }
  }

    declare module 'vue/types/vue' {
        interface Vue {
        $vd: MyTotoUILibraryOptions;
        $vuetify: Framework;
        }
    }

    export default MyTotoUILibrary;

}