---
id: ros2-install
sidebar_label: 1. Ubuntu インストール
sidebar_position: 2
---

# 1. Ubuntu 24.04 のインストール

Mini PC（または Raspberry Pi 5）に Ubuntu 24.04 LTS を導入します。

## 必要なもの

- Mini PC / Raspberry Pi 5 + 電源
- キーボード・マウス・モニタ
- 作業用 PC（Live USB 作成用）
- Wi-Fi または有線 LAN

## 手順

### ① Live USB の作成

作業用 PC で [ubuntu.com](https://ubuntu.com/download/desktop) から Ubuntu 24.04 LTS の ISO をダウンロードし、USB メモリに書き込みます。

### ② BIOS で USB ブート優先に設定

Mini PC の電源を入れ、起動時に **Delete / F2 / F7** を連打して BIOS を起動します。USB ブートを最優先に設定します。

### ③ Ubuntu のインストール

1. 「**Try or Install Ubuntu**」を選択
2. 言語：**English**、キーボード配列を選択
3. ネットワーク接続（Wi-Fi または LAN）
4. **Skip**（更新スキップ）
5. **Install Ubuntu** → **Interactive installation** → **Default selection**
6. ドライバ 2 つにチェック
7. **Erase disk and install Ubuntu**
8. ユーザ名・PC 名・パスワードを設定

   :::note
   ロボット本体の PC は自動ログインを **チェックなし** にします。
   :::

9. タイムゾーン：**Asia/Tokyo**
10. **Install** → **Restart Now** → USB を抜いて **Enter**

![Ubuntu インストール 1](/img/assembly/ubuntu_install/24_install_01.png)
![Ubuntu インストール 2](/img/assembly/ubuntu_install/24_install_02.png)
![Ubuntu インストール 3](/img/assembly/ubuntu_install/24_install_03.png)
![Ubuntu インストール 4](/img/assembly/ubuntu_install/24_install_04.png)
![Ubuntu インストール 5](/img/assembly/ubuntu_install/24_install_05.png)
![Ubuntu インストール 6](/img/assembly/ubuntu_install/24_install_06.png)
![Ubuntu インストール 7](/img/assembly/ubuntu_install/24_install_07.png)
![Ubuntu インストール 8](/img/assembly/ubuntu_install/24_install_08.png)
![Ubuntu インストール 9](/img/assembly/ubuntu_install/24_install_09.png)
![Ubuntu インストール 10](/img/assembly/ubuntu_install/24_install_10.png)
![Ubuntu インストール 11](/img/assembly/ubuntu_install/24_install_11.png)
![Ubuntu インストール 12](/img/assembly/ubuntu_install/24_install_12.png)
![Ubuntu インストール 13](/img/assembly/ubuntu_install/24_install_13.png)
![Ubuntu インストール 14](/img/assembly/ubuntu_install/24_install_14.png)

### ④ ターミナルの起動

デスクトップを右クリック → **Open in Terminal**
