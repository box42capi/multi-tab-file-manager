import { defineStore } from "pinia";

/** 搜索 Store：当前目录过滤与全局搜索状态（后端由 SearchProvider 提供）。 */
export const useSearchStore = defineStore("search", {
  state: () => ({
    query: "",
    running: false,
    /** 当前生效的搜索后端：everything / spotlight / linux-index / internal */
    provider: null as string | null,
  }),
  actions: {
    // TODO(MVP): filterCurrentDir / globalSearch / cancel
  },
});
