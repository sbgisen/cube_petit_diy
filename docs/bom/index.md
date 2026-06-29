---
id: index
sidebar_label: 概要
sidebar_position: 1
---

import BomDownload from '@site/src/components/BomDownload';
import { BOM_SECTIONS } from '@site/src/data/bom-data';

# 部品リスト（BOM）概要

Cube Petit v3 の組み立てに必要な全部品・外注品・工具の一覧です。

:::note リンクについて
このページのリンクは **2026年4月1日時点** のものです。
リンク切れを見つけた場合は [GitHub Issues](https://github.com/sbgisen/cube_petit_diy/issues) にてお知らせください。
:::

## 全BOM ダウンロード

全セクションをまとめた CSV / Excel をダウンロードできます。

<BomDownload sections={BOM_SECTIONS} filename="cube_petit_bom_v3" />

> 各セクションページでもセクション単位のダウンロードができます。

## カテゴリ別サマリ

| カテゴリ | 調達先 | 概算（税込） |
|---|---|---|
| [フレーム・構造](./frame) | Misumi | ¥29,000 |
| [ネジ・締結・消耗品](./fasteners) | Monotaro | ¥17,000 |
| [電子部品・センサ](./electronics) | Aliexpress | ¥58,000 |
| [PC・周辺機器](./computer) | Amazon | ¥158,000 |
| [アクリル外装](./acrylic) | はざや（外注） | 別途見積り |
| [3Dプリント部品](./3d-print) | DMM.com（外注） | 別途見積り |
| [メタル加工部品](./metal) | meviy（外注） | 別途見積り |
| [工具](./tools) | — | 参考 |

:::info CADデータ
アクリル・3Dプリント・メタル部品の加工データは [cube_petit_cad](https://github.com/sbgisen/cube_petit_cad) で管理しています。
:::

:::warning 在庫・販売終了品
一部部品は Amazon・Monotaro 等で在庫切れの場合があります。各ページの ⚠️ 表示を確認してください。
:::
