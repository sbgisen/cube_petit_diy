---
id: microphone
sidebar_label: Sound Source Localization Mic
sidebar_position: 2
---

# Sound Source Localization Mic

Optional microphone array for enhanced voice interaction — estimates the direction of sound so Cube Petit can face the speaker.

## Supported Devices

### ReSpeaker USB Mic Array v2.0

| Item | Detail |
|---|---|
| Manufacturer | Seeed Studio |
| Microphones | 4-mic circular array |
| Feature | DOA (Direction of Arrival) estimation |
| Connection | USB |
| Purchase | [Seeed Studio](https://www.seeedstudio.com/ReSpeaker-USB-Mic-Array-p-4247.html) |

:::tip
The ReSpeaker USB Mic Array v2.0 is plug-and-play over USB — no extra drivers needed for the Cube Petit mini PC.
:::

## Setup

### 1. Verify device recognition

```bash
lsusb | grep SEEED
# → Should show 2886:0018
```

### 2. Install ReSpeaker firmware

```bash
sudo apt install -y python3-pip
pip3 install pyusb click
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
sudo python3 dfu.py --download 6_channels_firmware.bin
```

### 3. ROS 2 package

```bash
sudo apt install ros-humble-audio-common
```

See [cube_petit_ros](https://github.com/sbgisen/cube_petit_ros) for the DOA ROS 2 node.
