---
id: step6-motor
sidebar_label: 6. モーターコントローラ配線
sidebar_position: 7
---

# 6. モーターコントローラの配線

CAN 配線・電源配線を行い、モータ ID を設定します。

## 必要工具

- はんだごて・はんだ
- ニッパー
- ワイヤーストリッパー
- ヒートガン
- テスター

## 使用部品

| 部品 | 数量 |
|---|---|
| CANable Pro | 1 |
| Molex 3.25mm ピッチ 3pin（基板 L型） | 1 |
| Molex 3.25mm ピッチ 3pin（ソケット） | 1 |
| 5pin SM コネクタ（ソケット） | 1 |
| 5pin SM コネクタ（コネクタ） | 1 |
| DC 電源コネクタ（内径 2.5mm） | 1 |
| DJI RoboMaster C610 モータコントローラ | 2 |
| 透明熱収縮チューブ Φ21 | 適量 |
| 赤・黒熱収縮チューブ Φ6 | 各適量 |
| 赤・緑・黒 ケーブル AWG20 | 各 1 本 |
| リボンケーブル | 適量 |

## 手順

### ① ケーブルの準備

- 赤・黒・緑ケーブルを 120mm にカット
- リボンケーブル 3 芯を 120mm × 2 本にカット
- 透明熱収縮 50mm、赤黒熱収縮 30mm にカット

![モーターコントローラ 1](/img/assembly/2-6/2-6_motor_controller_132.jpg)

### ② CANable Pro のコネクタ交換

CANable Pro のバージョンを確認します（Ver1.0 は TERM にジャンパ切替が必要）。

3pin コネクタを外し Molex に交換します。ピン順：**CANL・CANH・GND**

![モーターコントローラ 2](/img/assembly/2-6/2-6_motor_controller_133.jpg)
![モーターコントローラ 3](/img/assembly/2-6/2-6_motor_controller_137.jpg)
![モーターコントローラ 4](/img/assembly/2-6/2-6_motor_controller_138.jpg)

### ③ SM コネクタの作成

SM コネクタを作成します。ピン順：

| ピン | 信号 | 色 |
|---|---|---|
| 1 | GND | 黒 |
| 2 | CANL | 緑 |
| 3 | CANH | 赤 |

ワイヤーストリッパーで被膜を剥いてはんだ付けします。

![モーターコントローラ 5](/img/assembly/2-6/2-6_motor_controller_139.jpg)
![モーターコントローラ 6](/img/assembly/2-6/2-6_motor_controller_140.jpg)
![モーターコントローラ 7](/img/assembly/2-6/2-6_motor_controller_141.jpg)
![モーターコントローラ 8](/img/assembly/2-6/2-6_motor_controller_142.jpg)

### ④ 電源ケーブルの作成

電源ケーブル 120mm でカットします。C610 付属電源ケーブル 2 本 + カットケーブル 1 本の赤・黒各 3 本をまとめてはんだ付け → 熱収縮 → DC ジャックにはんだ付けします。

![モーターコントローラ 9](/img/assembly/2-6/2-6_motor_controller_145.jpg)
![モーターコントローラ 10](/img/assembly/2-6/2-6_motor_controller_146.jpg)
![モーターコントローラ 11](/img/assembly/2-6/2-6_motor_controller_147.jpg)
![モーターコントローラ 12](/img/assembly/2-6/2-6_motor_controller_148.jpg)

### ⑤ C610 への CAN 配線

C610 の CANL・CANH・GND にリボンケーブルをはんだ付けし、SM コネクタで接続します。

| ピン | 信号 |
|---|---|
| 1 | GND |
| 2 | CANL |
| 3 | CANH |

![モーターコントローラ 13](/img/assembly/2-6/2-6_motor_controller_149.jpg)
![モーターコントローラ 14](/img/assembly/2-6/2-6_motor_controller_150.jpg)
![モーターコントローラ 15](/img/assembly/2-6/2-6_motor_controller_151.jpg)
![モーターコントローラ 16](/img/assembly/2-6/2-6_motor_controller_152.jpg)
![モーターコントローラ 17](/img/assembly/2-6/2-6_motor_controller_153.jpg)

### ⑥ 導通確認・熱収縮

テスターで導通を確認します。問題なければ CANable Pro に Φ21 熱収縮、C610 に付属熱収縮チューブを装着します。

![モーターコントローラ 18](/img/assembly/2-6/2-6_motor_controller_154.jpg)
![モーターコントローラ 19](/img/assembly/2-6/2-6_motor_controller_155.jpg)
![モーターコントローラ 20](/img/assembly/2-6/2-6_motor_controller_156.jpg)
![モーターコントローラ 21](/img/assembly/2-6/2-6_motor_controller_157.jpg)

### ⑦ 電源テスト・ID 設定

モバイルバッテリー（12V 出力）に接続して電源テストします。**赤以外の LED が点滅すれば成功**です。

次にモータ ID を設定します。C610 の黒ボタンを押す回数で ID を設定します：

| モータ | ID | ボタン押し回数 |
|---|---|---|
| 左モータ | 1 | 1 回 |
| 右モータ | 2 | 2 回 |

設定完了後、インシュロックでボディに固定します。タイヤを取り付けます。

![モーターコントローラ 22](/img/assembly/2-6/2-6_motor_controller_158.jpg)
![モーターコントローラ 23](/img/assembly/2-6/2-6_motor_controller_159.jpg)
![モーターコントローラ 24](/img/assembly/2-6/2-6_motor_controller_160.jpg)
![モーターコントローラ 25](/img/assembly/2-6/2-6_motor_controller_161.jpg)
