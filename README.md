# UFM · 多标签文件管理器

> 浏览网页用 Chrome,管理文件用 UFM。

把 Google Chrome 的多标签、收藏夹、快捷键、历史记录、会话恢复等成熟交互方式,移植到文件管理领域的跨平台桌面文件管理器。支持 Windows 10/11、macOS、Linux。

**仓库**:<https://github.com/box42capi/multi-tab-file-manager>

## 产品定位

UFM 不是「Windows Explorer + 顶部多标签」,也不是 Finder 克隆,而是用 Chrome 的思维重新设计文件管理:

| Chrome | UFM |
| --- | --- |
| 网页 | 文件 / 文件夹 |
| URL | 文件路径 |
| 网页标签 | 文件夹标签 |
| 链接 | 文件夹 |
| 书签 | 文件 / 文件夹收藏 |
| 书签栏 | 收藏栏 |
| 历史记录 | 目录浏览历史 |
| 地址栏 Omnibox | File Omnibox |
| 下载任务 | 文件传输任务 |
| 恢复页面 | 恢复目录标签 |
| 浏览器窗口 | 文件管理窗口 |

长期使用 Chrome 的用户第一次启动 UFM,基本不需要学习新操作。

## 核心功能

### Chrome 风格标签页

- 每个标签代表一个文件系统位置,拥有独立的路径、前进/后退历史、排序、视图模式、滚动位置和选择状态,切换标签不丢状态
- 新建 / 关闭 / 恢复关闭标签(`Ctrl+T` / `Ctrl+W` / `Ctrl+Shift+T`),连续恢复可回溯更早关闭的标签,行为与 Chrome 一致
- 标签拖动排序(架构预留跨窗口拖动)、固定标签(缩小靠左、重启保留)
- 标签右键菜单:复制标签、固定、加入收藏夹、关闭其他标签、关闭右侧标签、在新窗口打开等
- 文件夹 ≈ 浏览器中的链接:中键 / `Ctrl+双击` 后台新标签打开,`Shift` 新窗口打开

### 收藏系统(核心)

- **文件和文件夹都是一等收藏对象**:`README.md`、PDF、配置文件等可直接放进收藏栏,无需先收藏所在目录;点击文件收藏直接打开文件,点击文件夹收藏进入目录
- 收藏入口:地址栏星标(☆/★)、右键「添加到收藏夹」、`Ctrl+D`
- 地址栏下方收藏栏(`Ctrl+Shift+B` 显隐),支持无限层级收藏文件夹、拖拽整理与「移动到...」
- 收藏管理器(类 `chrome://bookmarks`):搜索、重命名、移动、导入导出、查看失效收藏
- 文件被移动 / 删除 / 设备断开时,收藏标记为「文件不存在 / 设备不可用」并支持重新定位,而不是直接消失

### File Omnibox 地址栏

- 面包屑展示(`D: > Projects > AI`),点击或 `Ctrl+L` / `Alt+D` 进入完整路径编辑
- 支持输入目录路径、文件路径、搜索关键词、`> 命令`,以及 `ufm://` 内部地址

### 内部页面

`ufm://home`、`ufm://bookmarks`、`ufm://history`、`ufm://settings`、`ufm://downloads`、`ufm://tasks`、`ufm://workspace`、`ufm://diagnostics` 均可作为标签页打开,设置不做成永久独立弹窗。

### 历史与会话

- 类 Chrome History:记录访问过的文件夹、打开过的收藏、最近文件、最近搜索,支持按时间查看、搜索、删除单条、清除,可整体关闭
- 启动行为可选:打开主页 / 恢复上次会话(默认推荐)/ 打开指定工作区
- 异常退出后提示恢复标签,或按设置自动恢复

### 工作区

一组保存的标签(如「AI 开发」= 项目、Prompt、模型、输出 4 个目录),点击一次恢复全部标签。

### 文件任务中心

复制、移动等任务后台执行,不阻塞任何标签;显示文件、来源、目标、速度、进度、剩余时间;冲突时提供替换 / 跳过 / 保留两个 / 取消,支持「全部执行此操作」。

### 搜索

统一 `SearchProvider` 接口,按平台自动降级:

- Windows:Everything(SDK / IPC)→ 内置索引
- macOS:Spotlight → 内置索引
- Linux:plocate / locate → 内置索引

### 系统集成

支持「设为主要文件管理器」,但只用安全、用户授权、可恢复的方式(应用注册、URI、Launch Services、xdg-mime 等)。接管前保存 `IntegrationSnapshot`,支持一键恢复系统默认;绝不删除 Explorer、替换 Finder 或修改系统二进制,卸载前自动还原原配置。

## 快捷键速查

| 操作 | Windows / Linux | macOS |
| --- | --- | --- |
| 新建标签 | `Ctrl+T` | `Cmd+T` |
| 关闭标签 | `Ctrl+W` | `Cmd+W` |
| 恢复关闭的标签 | `Ctrl+Shift+T` | `Cmd+Shift+T` |
| 切换标签 | `Ctrl+Tab` / `Ctrl+1~8` / `Ctrl+9` | 对应 `Cmd` 映射 |
| 聚焦地址栏 | `Ctrl+L` / `Alt+D` | `Cmd+L` |
| 收藏文件 / 目录 | `Ctrl+D` | `Cmd+D` |
| 收藏栏显隐 | `Ctrl+Shift+B` | `Cmd+Shift+B` |
| 当前目录过滤 | `Ctrl+F` | `Cmd+F` |
| 全局搜索 | `Ctrl+Shift+F` | `Cmd+Shift+F` |
| 后退 / 前进 / 上级 | `Alt+←` / `Alt+→` / `Alt+↑` | 系统友好映射 |
| 刷新目录 | `Ctrl+R` / `F5` | `Cmd+R` |
| 新窗口 | `Ctrl+N` | `Cmd+N` |
| 复制 / 剪切 / 粘贴 / 全选 / 撤销 | `Ctrl+C/X/V/A/Z` | Finder 习惯映射 |
| 重命名 / 删除到回收站 | `F2` / `Delete` | 系统习惯映射 |

快捷键优先级:Chrome 已有习惯 > 操作系统文件管理习惯 > 新功能新快捷键。全部快捷键由统一的 `ShortcutManager` 管理(action / scope / 冲突检测),支持在设置中自定义与恢复默认。

## 技术架构

技术栈:**Tauri 2 + Vue 3 + TypeScript + Rust**。前端使用 Composition API + `<script setup lang="ts">` + Pinia + Vue Router。

职责分工:

- **Rust / Tauri 后端**:文件系统操作、目录读取、复制 / 移动 / 删除 / 回收站、文件搜索(Everything / Spotlight / Linux 索引)、文件监听、缩略图、磁盘信息、系统集成
- **Vue 前端**:标签页、收藏夹、文件列表、地址栏、侧边栏、设置、搜索界面、任务中心;大型扫描与复制等重任务一律不在前端做

数据存储:SQLite 保存收藏夹、工作区、浏览历史、会话、最近关闭标签与操作历史;用户设置使用 JSON。

核心数据模型:

- `BookmarkItem`:统一的收藏模型(`type: file | folder | group`),不区分 FileFavorite / FolderFavorite
- `TabState`:路径、前进后退栈、视图模式、排序、滚动位置、选中项、固定状态

规划目录结构:

```text
src/
  stores/        # tabs / bookmarks / history / workspace / settings / search / tasks / windows
  components/    # TabBar / BookmarkBar / AddressBar / FileList / Sidebar / TaskCenter / ContextMenu / Search
src-tauri/src/
  filesystem/  search/  platform/  integration/  tasks/
  bookmarks/  database/  session/  watcher/  thumbnail/  commands/
```

性能要求:文件列表必须虚拟滚动,10 万+ 文件目录保持流畅。

## 开发

环境要求:Node.js 18+、Rust stable,以及 [Tauri 2 系统依赖](https://v2.tauri.app/start/prerequisites/)。

```bash
npm install
npm run tauri dev     # 开发调试
npm run tauri build   # 构建发布
```

## 项目状态与路线

当前为初始脚手架(Tauri + Vue 模板),完整需求与执行要求见 [prompt.txt](./prompt.txt):先完成总体架构、组件树、Pinia Store、Tab / Bookmark 数据结构、ShortcutManager、SearchProvider、PlatformAdapter、SystemIntegrationManager、SQLite Schema、异常恢复等设计,再进入编码。

开发优先级:数据安全 > 系统稳定 > 标签体验 > 收藏体验 > 操作效率 > 搜索性能 > 跨平台一致性 > UI 美观 > 附加功能。

最终交付目标是一款能长期作为主要文件管理器使用的软件,而不是 UI Demo。
