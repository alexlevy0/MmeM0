'use strict';

var Section = require('../classes/SectionClass');

var TextPanel = require('../objects3D/TextPanelObject3D');
var HeightMap = require('../objects3D/HeightMapObject3D');

var heightSection = new Section('height');

var heightMap = new HeightMap({
  horizontal: true,
  vertical: false,
  plane: false,
  points: false,
  maps: [
    { name: 'H', url: './app/public/img/heightMap-H.jpg' },
    { name: 'A', url: './app/public/img/heightMap-A.jpg' },
    { name: 'R', url: './app/public/img/heightMap-R.jpg' },
    { name: 'E', url: './app/public/img/heightMap-E.jpg' },
    { name: 'M', url: './app/public/img/heightMap-M.jpg' }
  ]
});
heightMap.el.position.z = -10;
heightMap.el.rotation.y = -0.6;
heightSection.add(heightMap.el);

var text = new TextPanel(
  '          S C R O L L E R  P O U R\n E N T R E R',
  {
    align: 'right',
    style: '',
    size: 50,
    lineSpacing: 40
  }
);
text.el.position.set(-20, 0, 0);
heightSection.add(text.el);

heightMap.el.visible = false;

heightSection.onIn(function () {
  text.in();
});

heightSection.onOut(function (way) {
  text.out(way);
});

heightSection.onStart(function () {
  if (!heightMap.ready) {
    return false;
  }

  heightMap.start();
});

heightSection.onStop(function () {
  if (!heightMap.ready) {
    return false;
  }

  heightMap.stop();
});

heightSection.show = function () {
  heightMap.el.visible = true;
};

heightSection.hide = function () {
  heightMap.el.visible = false;
};

module.exports = heightSection;