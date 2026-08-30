<script setup lang="ts"></script>

<template>
  <router-view />
</template>

<style>
:root {
  color-scheme: light dark;
  font-family: "Segoe UI", "PingFang SC", "Microsoft YaHei", system-ui,
    -apple-system, sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background: #f6f7f9;
  color: #1f2328;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #1e2023;
    color: #e6e6e6;
  }
}
</style>
