/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  introSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'はじめに',
    },
    {
      type: 'category',
      label: '📦 バージョン',
      collapsed: false,
      items: [
        'versions/v3',
        'versions/v2',
        'versions/v1',
      ],
    },
  ],

  bomSidebar: [
    'bom/index',
    'bom/frame',
    'bom/fasteners',
    'bom/electronics',
    'bom/computer',
    'bom/acrylic',
    'bom/3d-print',
    'bom/metal',
    'bom/tools',
  ],

  assemblySidebar: [
    'assembly/index',
    'assembly/step1-body',
    'assembly/step2-electronics',
  ],

  wiringSidebar: [
    'wiring/index',
    'wiring/power',
    'wiring/connectors',
  ],

  softwareSidebar: [
    'software/index',
    'software/ros2-install',
    'software/package-setup',
  ],

  modulesSidebar: [
    'modules/index',
    'modules/microphone',
  ],
};

module.exports = sidebars;
