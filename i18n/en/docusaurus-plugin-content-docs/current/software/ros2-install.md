---
id: ros2-install
sidebar_position: 2
---

# ROS 2 Installation

## Target environment

- Ubuntu 22.04 LTS
- ROS 2 Humble Hawksbill

## Installation

```bash
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo apt install software-properties-common
sudo add-apt-repository universe
sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key \
  -o /usr/share/keyrings/ros-archive-keyring.gpg
sudo apt update
sudo apt install ros-humble-desktop
```

See the [ROS 2 official docs](https://docs.ros.org/en/humble/Installation.html) for details.
