---
id: package-setup
sidebar_position: 3
---

# Package Setup

## Install cube_petit_ros

```bash
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws/src
git clone https://github.com/sbgisen/cube_petit_ros.git
cd ~/ros2_ws
rosdep install --from-paths src --ignore-src -r -y
colcon build
```

See [cube_petit_ros](https://github.com/sbgisen/cube_petit_ros) for details.
