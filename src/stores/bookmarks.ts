import { defineStore } from "pinia";
import type { BookmarkItem } from "../types/models";

/**
 * 收藏夹 Store。
 * 统一管理文件 / 文件夹 / 分组三种 BookmarkItem（对齐 Chrome 书签模型），
 * 支持收藏栏展示、拖动排序与失效标记。
 */
export const useBookmarksStore = defineStore("bookmarks", {
  state: () => ({
    items: [] as BookmarkItem[],
    /** 收藏栏显隐（Ctrl/Cmd+Shift+B） */
    barVisible: true,
  }),
  getters: {
    /** 收藏栏顶层条目，按 sortOrder 排列 */
    barItems(state): BookmarkItem[] {
      return state.items
        .filter((item) => item.parentId === null)
        .sort((a, b) => a.sortOrder - b.sortOrder);
    },
  },
  actions: {
    // TODO(MVP): add / remove / rename / move / toggleBar / markBroken
  },
});
