---
id: motor-check
sidebar_label: 5. モータ確認
sidebar_position: 6
---

# 5. モータの動作確認

モータが正常に動作することを確認します。

## 必要なもの

- 12V モバイルバッテリー（DC 出力）
- PS4 / PS5 コントローラ

## 起動

```bash
ros2 launch cube_petit_hardware_interface cube_petit_control.launch.py
```

PS4/PS5 コントローラを接続し、ロボットが意図した方向に動くことを確認します。

:::warning
モータ確認時はロボットを持ち上げた状態で行うか、周囲に障害物がない広いスペースで実施してください。
:::
