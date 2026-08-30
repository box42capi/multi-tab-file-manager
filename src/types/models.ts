/**
 * 核心数据模型，与需求文档（prompt.txt）中的数据结构一一对应。
 * 前端使用 camelCase；与 Rust / SQLite 的 snake_case 字段转换在 IPC 层完成。
 */

/** 收藏项类型：文件 / 文件夹 / 收藏夹分组（统一 BookmarkItem，不拆分模型） */
export type BookmarkType = "file" | "folder" | "group";

export interface BookmarkItem {
  id: string;
  type: BookmarkType;
  name: string;
  /** 文件系统路径；type 为 group 时为 null */
  path: string | null;
  /** 逻辑路径，用于失效收藏的重新定位 */
  logicalPath: string | null;
  icon: string | null;
  parentId: string | null;
  sortOrder: number;
  createdAt: number;
  updatedAt: number;
}

export type ViewMode = "list" | "grid";

export type SortKey = "name" | "size" | "modifiedAt" | "type";

export interface SortSpec {
  key: SortKey;
  order: "asc" | "desc";
}

/** 单个标签页的完整独立状态，切换标签时必须无损保留 */
export interface TabState {
  id: string;
  title: string;
  /** 文件系统路径，或 ufm:// 内部页面地址 */
  path: string;
  icon: string | null;
  isPinned: boolean;
  backStack: string[];
  forwardStack: string[];
  viewMode: ViewMode;
  sort: SortSpec;
  scrollPosition: number;
  selectedItems: string[];
}

/** 工作区：一组保存的标签，可一键整体恢复 */
export interface Workspace {
  id: string;
  name: string;
  paths: string[];
  createdAt: number;
  updatedAt: number;
}

/** 浏览历史条目 */
export interface HistoryEntry {
  id: string;
  path: string;
  title: string;
  visitedAt: number;
}

/** 后台文件任务，参考 Chrome 下载任务的后台运行方式 */
export type TaskKind = "copy" | "move" | "delete" | "trash";

export type TaskStatus =
  | "pending"
  | "running"
  | "paused"
  | "done"
  | "failed"
  | "canceled";

export interface FileTask {
  id: string;
  kind: TaskKind;
  sources: string[];
  target: string | null;
  status: TaskStatus;
  totalBytes: number;
  doneBytes: number;
  speedBps: number;
  startedAt: number;
}
