import { defineStore } from "pinia";

/** 窗口 Store：多窗口协作与跨窗口标签拖动的状态入口。 */
export const useWindowsStore = defineStore("windows", {
  state: () => ({
    /** 当前 Tauri 窗口 label */
    currentLabel: "main",
  }),
  actions: {
    // TODO(MVP): newWindow / adoptTab / releaseTab
  },
});
