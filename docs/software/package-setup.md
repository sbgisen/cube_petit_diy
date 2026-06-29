---
id: package-setup
sidebar_label: 2. PC 設定・ROS 2 セットアップ
sidebar_position: 3
---

# 2. PC 設定・ROS 2 Jazzy セットアップ

## PC の初期設定

```bash
sudo apt install -y git
mkdir -p ~/work && cd ~/work/
git clone https://github.com/AiriYokochi/setup_cube_petit.git -b feature/ros2_jazzy

# 壁紙・サイドバー・スリープ解除・Chrome などの設定
source ~/work/setup_cube_petit/setup_pc.bash

# （オプション）GitKraken・VSCode のインストール
source ~/work/setup_cube_petit/setup_dev_tools.bash
```

## SSH キーの設定

sbgisen グループのプライベートリポジトリにアクセスするために SSH キーを登録します。

```bash
ssh-keygen  # Enter を 3 回押す
cat ~/.ssh/id_*.pub  # 公開鍵を表示
```

表示された公開鍵を [github.com/settings/keys](https://github.com/settings/keys) に登録します。
- **Title**：ロボット名
- **Key**：公開鍵の内容

## ROS 2 Jazzy のインストール

```bash
source ~/work/setup_cube_petit/setup_ros.bash
```

SSH キーが未登録の場合はリポジトリのクローン後に実行します：

```bash
cd ~/ros/src
rosdep install --from-path . --ignore-src -r -y
cd ~/ros
colcon build --symlink-install
```

詳細は [cube_petit_ros](https://github.com/sbgisen/cube_petit_ros) を参照してください。
