# UFM · 多标签文件管理器

> 用 Chrome 的思维重新设计文件管理器：**Chrome 管网页，UFM 管文件。**

把 Google Chrome 的多标签、收藏夹、Omnibox、历史记录、快捷键与会话恢复完整移植到文件管理场景，目标是一款可以长期作为主力文件管理器使用的跨平台桌面应用（Windows 10/11 · macOS · Linux）。

## 交互映射

| Chrome | UFM |
| --- | --- |
| 网页标签 | 文件夹标签 |
| 链接 | 文件夹 |
| 书签（网址） | 收藏（文件与文件夹都可收藏） |
| 书签栏 | 收藏栏（地址栏下方） |
| Omnibox 地址栏 | 文件 Omnibox（路径 / 搜索 / 命令） |
| 历史记录 | 目录浏览历史 |
| chrome:// 内部页面 | ufm:// 内部页面（同样以标签打开） |
| 下载任务 | 后台文件任务中心 |
| 恢复上次会话 | 恢复目录标签会话 |

## 核心快捷键

| 操作 | Windows / Linux | macOS |
| --- | --- | --- |
| 新建标签 | `Ctrl+T` | `Cmd+T` |
| 关闭标签 | `Ctrl+W` | `Cmd+W` |
| 恢复关闭的标签 | `Ctrl+Shift+T` | `Cmd+Shift+T` |
| 切换标签 | `Ctrl+Tab` / `Ctrl+1~9` | 对应 `Cmd` 组合 |
| 聚焦地址栏 | `Ctrl+L` / `Alt+D` | `Cmd+L` |
| 收藏文件 / 目录 | `Ctrl+D` | `Cmd+D` |
| 收藏栏显隐 | `Ctrl+Shift+B` | `Cmd+Shift+B` |

原则：Chrome 已有的行为与其保持一致，其次遵循系统文件管理习惯，最后才为新功能设计新快捷键。

## 技术栈

- **Tauri 2 + Rust**：文件系统操作、搜索（Everything / Spotlight / Linux 索引）、后台任务、系统集成、SQLite 持久化
- **Vue 3 + TypeScript**：Composition API（`<script setup lang="ts">`），标签页 / 收藏夹 / Omnibox / 虚拟滚动文件列表
- **Pinia + Vue Router**：分域状态管理与 ufm:// 内部页面路由

## 开发

### 环境要求

- Node.js ≥ 20，Rust stable ≥ 1.77
- Linux 需要 Tauri 系统依赖：

```bash
sudo apt install libwebkit2gtk-4.1-dev build-essential curl wget file \
  libxdo-dev libssl-dev libayatana-appindicator3-dev librsvg2-dev
```

其他平台见 [Tauri Prerequisites](https://tauri.app/start/prerequisites/)。

### 常用命令

```bash
npm install         # 安装依赖
npm run tauri dev   # 开发模式（前端 + Rust）
npm run tauri build # 打包桌面应用
npm run build       # 仅前端类型检查与构建
```

## 目录结构

```text
├── src/                  # Vue 3 前端
│   ├── pages/            # ufm:// 内部页面（home / settings / bookmarks / history …）
│   ├── router/           # 内部页面路由
│   ├── stores/           # Pinia：tabs / bookmarks / history / workspace / settings / search / tasks / windows
│   └── types/            # TabState、BookmarkItem 等核心数据模型
├── src-tauri/            # Rust 后端
│   └── src/
│       ├── commands/     # Tauri command（前后端 IPC 唯一入口）
│       ├── filesystem/   # 目录读取、复制移动删除、回收站
│       ├── search/       # SearchProvider：Everything / Spotlight / Linux 索引 / 内建
│       ├── platform/     # PlatformAdapter：三平台差异封装
│       ├── integration/  # 默认文件管理器接管与恢复（IntegrationSnapshot）
│       ├── tasks/        # 后台文件任务中心
│       ├── bookmarks/    # 收藏夹业务
│       ├── database/     # SQLite 持久化
│       ├── session/      # 会话与崩溃恢复
│       ├── watcher/      # 文件系统监听
│       └── thumbnail/    # 缩略图
└── prompt.txt            # 完整产品需求文档
```

## 路线图

- [x] 仓库初始化：Tauri 2 + Vue 3 + TypeScript 骨架与模块划分
- [ ] 架构设计：组件树 / SQLite Schema / ShortcutManager / SearchProvider / PlatformAdapter
- [ ] MVP 1：标签页系统（新建 / 关闭 / 恢复 / 切换 / 固定 / 拖动排序）
- [ ] MVP 2：目录浏览 + 虚拟滚动文件列表 + 地址栏
- [ ] MVP 3：收藏系统（收藏栏 / 收藏管理器 / 失效检测）
- [ ] MVP 4：历史记录 + 会话与崩溃恢复
- [ ] MVP 5：后台文件任务中心与冲突处理
- [ ] 全局搜索 Provider（Everything / Spotlight / plocate）
- [ ] 多窗口与跨窗口标签拖动
- [ ] 系统集成：设为默认文件管理器（可一键恢复）

开发优先级：数据安全 > 系统稳定 > 标签体验 > 收藏体验 > 操作效率 > 搜索性能 > 跨平台一致性 > UI 美观 > 附加功能。
