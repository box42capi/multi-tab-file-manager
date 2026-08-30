import { defineStore } from "pinia";
import type { Workspace } from "../types/models";

/** 工作区 Store：一组保存的标签，可一键整体恢复（类似浏览器标签组）。 */
export const useWorkspaceStore = defineStore("workspace", {
  state: () => ({
    workspaces: [] as Workspace[],
  }),
  actions: {
    // TODO(MVP): save / open / rename / remove
  },
});
