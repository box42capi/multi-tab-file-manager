//! Tauri command 层：前端与后端 IPC 的唯一入口，聚合各业务模块能力对外暴露。

/// IPC 连通性自检，前端启动时调用。
#[tauri::command]
pub fn ping() -> &'static str {
    "pong"
}
