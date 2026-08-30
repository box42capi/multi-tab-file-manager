import { defineStore } from "pinia";
import type { HistoryEntry } from "../types/models";

/** 浏览历史 Store：记录访问过的目录与文件，支持搜索、删除与整体停用。 */
export const useHistoryStore = defineStore("history", {
  state: () => ({
    entries: [] as HistoryEntry[],
    enabled: true,
  }),
  actions: {
    // TODO(MVP): record / removeEntry / clear / setEnabled
  },
});
