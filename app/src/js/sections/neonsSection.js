'use strict';

var THREE = require('three');

var Section = require('../classes/SectionClass');

var Smoke = require('../objects3D/SmokeObject3D');
var Neon = require('../objects3D/NeonObject3D');

var neonsSection = new Section('neons');

var smoke = new Smoke({
  planesNumber: 3,
  frontColor: '#4c4c4c',
  backColor: '#ffffff',
  data: [
    { positionX : -2.5, positionY: -18.8, positionZ: -6, rotationZ: 2.7, scale: 8.5 },
    { positionX : -11.1, positionY: 10.3, positionZ: -10.4, rotationZ: 1.4, scale: 5.8 },
    { positionX : -15.1, positionY: -5.9, positionZ: -19.2, rotationZ: 1.6, scale: 7.4 }
  ]
});
neonsSection.add(smoke.el);

var logo = new Neon();
logo.getLogo();
neonsSection.add(logo.el);
logo.el.position.set(0, 0, 10);


/*
var neonA = new Neon();
neonA.el.position.set(0, 0, -15);
*/

//neonA.el.position.set(-10, 0, 0);
//
//var neonB = new Neon();
//neonB.el.position.set(-20, 0, 0);
//
//var neonC = new Neon({
//    width: 10
//});
//neonC.el.position.set(-15, 0, 0);
//neonC.el.rotation.z = 0.5 * Math.PI;
//
//var neonD = new Neon({
//    width: 6
//});
//neonD.el.position.set(12, 8, 0);
//neonD.el.rotation.z = 0.25 * Math.PI;
//
//var neonE = new Neon({
//    width: 20
//});
//neonE.el.position.set(10, 0, 0);
//
//var neonF = new Neon({
//    width: 20
//});
//neonF.el.position.set(20, 0, 0);
//
//var neonG = new Neon({
//  width: 6
//});
//neonG.el.position.set(17, 8, 0);
//neonG.el.rotation.z = 0.75 * Math.PI;
//
//var neonH = new Neon({
//  width: 20
//});
//neonH.el.position.set(-10, 0, 0);
//
//
/*
neonsSection.add(neonA.el);
*/
//neonsSection.add(neonB.el);
//neonsSection.add(neonC.el);
//neonsSection.add(neonD.el);
//neonsSection.add(neonE.el);
//neonsSection.add(neonF.el);
//neonsSection.add(neonG.el);
//neonsSection.add(neonH.el);
//
/*
neonA.el.visible = false;
*/
//neonB.el.visible = false;
//neonC.el.visible = false;
//neonD.el.visible = false;
//neonE.el.visible = false;
//neonF.el.visible = false;
//neonG.el.visible = false;
//neonH.el.visible = false;
//smoke.el.visible = false;
//
/*
neonsSection.onStart(function () {
  neonA.start();
*/
//  neonB.start();
//  neonC.start();
//  neonD.start();
//  neonE.start();
//  neonF.start();
//  neonG.start();
//  neonH.start();
//
/*
  neonA.el.visible = true;
*/
//  neonB.el.visible = true;
//  neonC.el.visible = true;
//  neonD.el.visible = true;
//  neonE.el.visible = true;
//  neonF.el.visible = true;
//  neonG.el.visible = true;
//  neonH.el.visible = true;
/*
});
*/
//
/*
neonsSection.onStop(function () {
  neonA.stop();
*/
//  neonB.stop();
//  neonC.stop();
//  neonD.stop();
//  neonE.stop();
//  neonF.stop();
//  neonG.stop();
//  neonH.stop();
//
/*
  neonA.el.visible = false;
*/
//  neonB.el.visible = false;
//  neonC.el.visible = false;
//  neonD.el.visible = false;
//  neonE.el.visible = false;
//  neonF.el.visible = false;
//  neonG.el.visible = false;
//  neonH.el.visible = false;
/*
});
*/

var smokePlaying = false;

neonsSection.smokeStart = function () {
  if (smokePlaying) {
    return false;
  }

  smokePlaying = true;
  smoke.start();
  smoke.el.visible = true;
};

neonsSection.smokeStop = function () {
  if (!smokePlaying) {
    return false;
  }

  smokePlaying = false;
  smoke.stop();
  smoke.el.visible = false;
};

module.exports = neonsSection;