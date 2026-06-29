---
id: device-test
sidebar_label: 6. デバイステスト
sidebar_position: 7
---

# 6. デバイステスト

全デバイスの総合動作確認を行います。

## 確認項目

| 項目 | 内容 |
|---|---|
| 配線チェック | USB・HDMI・電源の接続確認 |
| 電源チェック | バッテリー・各デバイスの電源確認 |
| 起動チェック | Ubuntu・ROS 2 の起動確認 |
| ネットワークチェック | Wi-Fi・SSH 接続確認 |
| マイク・スピーカチェック | 音声入出力の確認 |

## udev チェック

```bash
source ~/setup_cube_petit/shell_scripts/udev_check.sh
```

すべての項目に `[OK]` が表示されれば成功です。

:::tip
エラーが出た場合は、該当デバイスの USB 接続を確認し、再度実行してください。
:::
