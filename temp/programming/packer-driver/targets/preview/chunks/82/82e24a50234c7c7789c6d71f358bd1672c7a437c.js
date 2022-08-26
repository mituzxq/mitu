System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, instantiate, Prefab, AudioSource, assert, AudioClip, log, assetManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, Enemy;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      AudioSource = _cc.AudioSource;
      assert = _cc.assert;
      AudioClip = _cc.AudioClip;
      log = _cc.log;
      assetManager = _cc.assetManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65ec9kSeTtHxL7cinn5PnTf", "Enemy", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Enemy", Enemy = (_dec = ccclass('Enemy'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property(AudioSource), _dec(_class = (_class2 = (_class3 = class Enemy extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "enemybullerPre", _descriptor, this);

          _initializerDefineProperty(this, "enemydiePre", _descriptor2, this);

          _initializerDefineProperty(this, "speed", _descriptor3, this);

          _initializerDefineProperty(this, "_audioSource", _descriptor4, this);
        }

        // init AudioManager in GameRoot component.
        static init(audioSource) {
          log('Init AudioManager !');
          Enemy._audioSource = audioSource;
        }

        static playMusic() {
          var audioSource = Enemy._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          audioSource.play();
        }

        static playSound(name) {
          var audioSource = Enemy._audioSource;
          assert(audioSource, 'AudioManager not inited!');
          var path = "audio/sound/" + name;
          var cachedAudioClip = Enemy._cachedAudioClipMap[path];

          if (cachedAudioClip) {
            audioSource.playOneShot(cachedAudioClip, 1);
          } else {
            var _assetManager$resourc;

            (_assetManager$resourc = assetManager.resources) == null ? void 0 : _assetManager$resourc.load(path, AudioClip, (err, clip) => {
              if (err) {
                console.warn(err);
                return;
              }

              Enemy._cachedAudioClipMap[path] = clip;
              audioSource.playOneShot(clip, 1);
            });
          }
        }

        start() {
          this.enemybullet();
        }

        update(deltaTime) {
          var bulletY = this.node.position.y;
          bulletY -= this.speed * deltaTime;
          this.node.setPosition(this.node.position.x, bulletY, 0);

          if (bulletY < -300) {
            this.die();
          }
        } //给敌机生成子弹


        enemybullet() {
          this.schedule(() => {
            var buller = instantiate(this.enemybullerPre);
            buller.setParent(this.node.parent);
            var position = this.node.position;
            buller.setPosition(position.x, position.y - 30, 0);
          }, 0.5);
        }

        die() {
          // resources.load("img/enemydie.png", SpriteFrame, (err, res) => {
          //     if (err) {
          //         console.log(err);
          //     }
          //     this.node.getComponent(Sprite).spriteFrame = res;
          // })
          var die = instantiate(this.enemydiePre);
          die.setParent(this.node.parent);
          die.setPosition(this.node.position);
          this.node.destroy();
        }

      }, _class3._audioSource = void 0, _class3._cachedAudioClipMap = {}, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemybullerPre", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemydiePre", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_audioSource", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=82e24a50234c7c7789c6d71f358bd1672c7a437c.js.map