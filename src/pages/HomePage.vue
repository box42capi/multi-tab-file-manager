<script setup lang="ts">
import { onMounted, ref } from "vue";
import { invoke } from "@tauri-apps/api/core";

const backendStatus = ref("检测中…");

onMounted(async () => {
  try {
    const reply = await invoke<string>("ping");
    backendStatus.value = reply === "pong" ? "已连接" : `异常响应：${reply}`;
  } catch {
    backendStatus.value = "不可用（当前为浏览器预览，未运行 Tauri）";
  }
});
</script>

<template>
  <main class="home">
    <h1 class="logo">UFM</h1>
    <p class="tagline">
      用 Chrome 的方式管理文件 —— 多标签 · 收藏夹 · Omnibox · 会话恢复
    </p>
    <p class="status">Rust 后端：{{ backendStatus }}</p>
  </main>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  padding: 24px;
}

.logo {
  font-size: 56px;
  margin: 0;
  letter-spacing: 2px;
}

.tagline {
  margin: 0;
  opacity: 0.75;
}

.status {
  margin-top: 24px;
  font-size: 13px;
  opacity: 0.6;
}
</style>
