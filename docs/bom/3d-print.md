---
id: 3d-print
sidebar_label: 3Dプリント部品
sidebar_position: 7
---

# 3Dプリント部品

発注先: [DMM.com 3Dプリントサービス](https://make.dmm.com/print/)

## 推奨設定

| 項目 | 推奨値 |
|---|---|
| 素材 | ABS または PLA |
| 積層ピッチ | 0.2mm |
| 充填率 | 30〜50% |
| サポート | 部品により必要（各ファイル参照） |

## 発注手順

1. [cube_petit_cad](https://github.com/sbgisen/cube_petit_cad) から STL ファイルをダウンロード
2. [DMM 3Dプリント](https://make.dmm.com/print/) にアップロード
3. 素材・色・数量を指定して発注

## 部品一覧

| No. | 部品名 | STL ファイル | 数量 | 素材 | 備考 |
|---|---|---|---|---|---|
| 1 | ヒンジホルダー | `hinge_holder_x4.stl` | 4 | ABS | — |
| 2 | IMU マウント | `IMU.stl` | 1 | ABS | — |
| 3 | M2006 モーターホルダー | `M2006p36_holder_x2.stl` | 2 | ABS | 強度重視 |
| 4 | OAK-1 カメラマウント | `oak-1-mount_x1.stl` | 1 | PLA | — |
| 5 | RealSense D435i マウント | `realsense_mount_x1.stl` | 1 | PLA | — |

:::tip 素材の選択
モーターホルダー（No.3）は振動・熱に晒されるため ABS を推奨します。
カメラ系マウント（No.4, 5）は精度重視で PLA でも可です。
:::
