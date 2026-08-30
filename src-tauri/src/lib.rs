//! UFM —— Chrome 风格多标签文件管理器的 Tauri 后端。
//!
//! 前端只通过 `commands` 模块暴露的 Tauri command 与后端交互；
//! 其余模块承载具体业务能力，禁止在入口文件堆积业务逻辑。

mod bookmarks;
mod commands;
mod database;
mod filesystem;
mod integration;
mod platform;
mod search;
mod session;
mod tasks;
mod thumbnail;
mod watcher;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![commands::ping])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
