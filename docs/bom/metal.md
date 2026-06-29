---
id: metal
sidebar_label: メタル加工部品
sidebar_position: 8
---

# メタル加工部品

発注先: [meviy](https://meviy.misumi-ec.com/) — 板金（2D加工）

## 発注手順

1. [cube_petit_cad](https://github.com/sbgisen/cube_petit_cad) から IPT ファイルをダウンロード
2. Autodesk Inventor または互換ソフトで DXF にエクスポート（フラット展開図）
3. [meviy](https://meviy.misumi-ec.com/) に DXF をアップロード
4. 材質・板厚・表面処理を指定して見積もり・発注

## 部品一覧

| No. | 部品名 | IPT ファイル | 材質 | 板厚 | 数量 | 表面処理 |
|---|---|---|---|---|---|---|
| 1 | ヘッド T ブラケット | `head_T_braket_alminium_3mm_x2.ipt` | アルミ | 3mm | 2 | — |
| 2 | ヒンジストッパー 1 | `hinge_stopper1_alminium_3mm_x4.ipt` | アルミ | 3mm | 4 | — |
| 3 | ヒンジストッパー 2 | `hinge_stopper2_alminium_3mm_x4.ipt` | アルミ | 3mm | 4 | — |
| 4 | L アルマイトブラケット | `L_almite_braket_3mm_x2.ipt` | アルミ | 3mm | 2 | アルマイト処理 |
| 5 | LiDAR プレート（LD19用） | `LiDAR_LD19_LD_Plate_1mm_x1.ipt` | アルミ | 1mm | 1 | — |

:::info IPT から DXF への変換
meviy は 2D 板金加工のため、IPT（3D）ではなく DXF（フラット展開図）を使用します。
Inventor の「板金フラット パターン」→「DXF にエクスポート」で変換できます。
:::
