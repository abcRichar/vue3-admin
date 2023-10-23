<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "../../store/index.ts";
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from "@ant-design/icons-vue";
const store = useStore();
const str = ref("hello, This is login page");

function add(): void {
  store.increment();
}

function change(): void {
  store.change();
}

function reset(): void {
  store.$reset();
}
</script>
<template>
  <div class="content">
    <a-space>
      <home-outlined />
      <setting-filled />
      <smile-outlined />
      <sync-outlined spin />
      <smile-outlined :rotate="180" />
      <loading-outlined />
    </a-space>
    {{ str }}计数{{ store.count }} name:{{ store.name }}
    <a-button type="primary" @click="add">添加</a-button>
    <a-button type="primary" @click="change">便便</a-button>
    <a-button type="primary" @click="reset">重置</a-button>
  </div>
</template>
<style scoped></style>
