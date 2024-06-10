// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tello::*;
use std;

fn main() {

  let mut connected: bool;

  // #[tauri::command]
  // fn check_connection() -> bool {
  //   connected
  // }

  tauri::Builder::default()
  //   .on_window_event(|event| match event.event() {
  //   tauri::WindowEvent::CloseRequested { api, .. } => {
      
  //   }
  //   _ => {}
  // })
    // .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
