---
id: sensor-check
sidebar_label: 4. センサ確認
sidebar_position: 5
---

# 4. センサの動作確認

各センサが正常に動作することを確認します。

## LiDAR（LDROBOT LD19）

```bash
ros2 launch cube_petit_bringup lidar_check.launch.py
```

RViz で赤い点群が表示されれば成功です。

## 深度カメラ（Intel RealSense D435i）

```bash
# コマンドは cube_petit_ros を参照
```

RGB 画像と深度画像の 2 つが表示されることを確認します。

## AI カメラ（OAK-1）

```bash
# コマンドは cube_petit_ros を参照
```

カメラの前に手をかざして **PEACE / FIVE** などのジェスチャーが認識されることを確認します。

:::note
各起動コマンドの詳細は [cube_petit_ros](https://github.com/sbgisen/cube_petit_ros) を参照してください。
:::
