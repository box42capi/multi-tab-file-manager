import { defineStore } from "pinia";
import type { FileTask } from "../types/models";

/** 文件任务 Store：复制 / 移动 / 删除在后台执行，不阻塞标签操作。 */
export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as FileTask[],
  }),
  getters: {
    runningTasks(state): FileTask[] {
      return state.tasks.filter((task) => task.status === "running");
    },
  },
  actions: {
    // TODO(MVP): enqueue / pause / resume / cancel / resolveConflict
  },
});
