import { defineStore } from "pinia";

export type StartupMode = "home" | "restore-session" | "workspace";

/** 设置 Store：启动行为、外观、历史开关等，持久化为 JSON。 */
export const useSettingsStore = defineStore("settings", {
  state: () => ({
    /** 启动时行为，默认恢复上次会话（对齐 Chrome） */
    startupMode: "restore-session" as StartupMode,
    theme: "auto" as "auto" | "light" | "dark",
    language: "zh-CN",
  }),
  actions: {
    // TODO(MVP): load / save / reset
  },
});
