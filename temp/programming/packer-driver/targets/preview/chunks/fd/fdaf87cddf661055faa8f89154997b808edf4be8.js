System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AudioSource, _dec, _class, _crd, ccclass, property, Enemydie;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35efbuk86VBAIkXzp4ni3cW", "Enemydie", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Enemydie", Enemydie = (_dec = ccclass('Enemydie'), _dec(_class = class Enemydie extends Component {
        constructor() {
          super(...arguments);
          this.isplay = false;
        }

        start() {// this.schedule(() => {
          //     if (this.isplay == true) {
          //         this.play();
          //     }
          // }, 0.5)
        }

        update(deltaTime) {
          this.scheduleOnce(function () {
            this.play();
            this.node.destroy();
          }, 50 * deltaTime);
        }

        play() {
          var play = this.node.getComponent(AudioSource);
          play.play();
          this.isplay = false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fdaf87cddf661055faa8f89154997b808edf4be8.js.map