//! 统一搜索接口（SearchProvider）。
//!
//! 平台优先级：Windows 用 Everything，macOS 用 Spotlight，
//! Linux 用 plocate / locate，均不可用时回退 InternalSearchProvider。
