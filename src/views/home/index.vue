<script setup lang="ts">
import { ref } from "vue";
const str = ref("hello, This is home page");
</script>
<template>
  <div class="content">
    {{ str }}
  </div>
</template>
<style scoped></style>
