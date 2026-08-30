import { defineStore } from "pinia";
import type { TabState } from "../types/models";

/**
 * 标签页 Store。
 * 每个标签持有独立的路径、前进后退历史、排序、视图与滚动状态，
 * 切换标签时无损保留（对齐 Chrome 标签行为）。
 */
export const useTabsStore = defineStore("tabs", {
  state: () => ({
    tabs: [] as TabState[],
    activeTabId: null as string | null,
    /** 最近关闭的标签，供 Ctrl/Cmd+Shift+T 依次恢复 */
    recentlyClosed: [] as TabState[],
  }),
  getters: {
    activeTab(state): TabState | undefined {
      return state.tabs.find((tab) => tab.id === state.activeTabId);
    },
    pinnedTabs(state): TabState[] {
      return state.tabs.filter((tab) => tab.isPinned);
    },
  },
  actions: {
    // TODO(MVP): newTab / closeTab / restoreClosedTab / activateTab / pinTab / moveTab
  },
});
