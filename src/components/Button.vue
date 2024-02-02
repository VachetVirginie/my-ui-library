<template>
    <v-btn v-bind="$props" color="primary">
      {{ label }}
    </v-btn>
  </template>
  
  <script lang="ts" setup>
    import { defineProps } from "vue";

  defineProps({
    label: {
      type: String,
      default: "Button",
    },
  });
  </script>