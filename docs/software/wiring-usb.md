---
id: wiring-usb
sidebar_label: 3. USB 配線
sidebar_position: 4
---

# 3. USB 配線

USB ハブを取り付けて各デバイスを接続します。

## 必要なもの

| 部品 | 用途 |
|---|---|
| USB ハブ（ELECOM） | メインハブ・外側 |
| USB ハブ（BUFFALO） | サブハブ |
| USB ハブ（ANKER） | CAN 用（アイソレータ経由） |
| USB micro-B ケーブル 0.15m | ディスプレイ電源 |
| USB-C ケーブル 0.3m | 各センサ・周辺機器 |
| HDMI リボンケーブル | ディスプレイ映像 |
| USB アイソレータ（ADUM3160） | モータ CAN ノイズ絶縁 |
| 強力両面テープ | USB ハブの固定 |
| 養生テープ | HDMI 絶縁 |

## 手順

### ① USB ハブの貼り付け

ELECOM・BUFFALO に強力両面テープを貼り付け、ELECOM が外側になるようにボディ側面に固定します。

### ② USB 配線

**BUFFALO（側面 1 ポート）**
- micro-B 0.15m → ディスプレイ電源

**BUFFALO（下面 3 ポート）**
- USB-C → LiDAR（LDROBOT LD19）
- USB-C → SoundBlaster（オーディオ）
- USB-C → スピーカアンプ

**ELECOM**
- USB-C → AI カメラ（OAK-1）
- USB → キーボードドングル
- USB-C → 深度カメラ（RealSense D435i）
- USB-A → ANKER ハブ

**ANKER**
- USB → アイソレータ（ADUM3160）経由 → USB-C → CANable Pro

### ③ HDMI の接続

HDMI リボンケーブルをディスプレイと Mini PC に接続し、養生テープで絶縁します。

![USB 配線 1](/img/assembly/3-4/3-4_wire_186.jpg)
![USB 配線 2](/img/assembly/3-4/3-4_wire_187.jpg)
![USB 配線 3](/img/assembly/3-4/3-4_wire_188.jpg)
![USB 配線 4](/img/assembly/3-4/3-4_wire_189.jpg)
