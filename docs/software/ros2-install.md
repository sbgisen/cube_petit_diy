---
id: ros2-install
sidebar_position: 2
---

# ROS 2 インストール

## 対象環境

- Ubuntu 22.04 LTS
- ROS 2 Humble Hawksbill

## インストール手順

```bash
# ロケール設定
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8

# ROS 2 リポジトリ追加
sudo apt install software-properties-common
sudo add-apt-repository universe
sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key \
  -o /usr/share/keyrings/ros-archive-keyring.gpg

# インストール
sudo apt update
sudo apt install ros-humble-desktop
```

詳細は [ROS 2 公式ドキュメント](https://docs.ros.org/en/humble/Installation.html) を参照してください。
