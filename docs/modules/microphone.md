---
id: microphone
sidebar_label: 音源定位マイク
sidebar_position: 2
---

# 音源定位マイク

Cube Petit の音声対話機能を強化するための音源定位マイクの紹介です。
音が来た方向を推定して、ロボットがその方向を向いたり、話者を追従したりできます。

## 対応デバイス

### ReSpeaker USB Mic Array v2.0

| 項目 | 内容 |
|---|---|
| メーカー | Seeed Studio |
| マイク数 | 4 マイク（円形配置） |
| 音源定位 | DOA（Direction of Arrival）推定対応 |
| 接続 | USB |
| 購入先 | [Seeed Studio](https://www.seeedstudio.com/ReSpeaker-USB-Mic-Array-p-4247.html) / [スイッチサイエンス](https://www.switch-science.com/) |

:::tip
ReSpeaker USB Mic Array v2.0 は USB 接続でドライバ不要のため、Cube Petit のミニ PC（MINISFORUM UM690L Slim）にそのまま接続できます。
:::

## セットアップ

### 1. デバイス認識確認

```bash
lsusb | grep SEEED
# → 2886:0018 の表示を確認
```

### 2. ReSpeaker ドライバのインストール

```bash
sudo apt install -y python3-pip
pip3 install pyusb click
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
sudo python3 dfu.py --download 6_channels_firmware.bin
```

### 3. ROS 2 パッケージ

```bash
sudo apt install ros-humble-audio-common
```

音源定位の ROS 2 ノードは [cube_petit_ros](https://github.com/sbgisen/cube_petit_ros) を参照してください。
