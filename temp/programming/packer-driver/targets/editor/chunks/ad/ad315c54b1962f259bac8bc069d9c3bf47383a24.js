System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Contact2DType, director, PhysicsSystem2D, Enemy, GameManger, PlayerBullet, _dec, _class, _crd, ccclass, property, Collider;

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "./Enemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManger(extras) {
    _reporterNs.report("GameManger", "./GameManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerBullet(extras) {
    _reporterNs.report("PlayerBullet", "./PlayerBullet", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      director = _cc.director;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
    }, function (_unresolved_2) {
      Enemy = _unresolved_2.Enemy;
    }, function (_unresolved_3) {
      GameManger = _unresolved_3.GameManger;
    }, function (_unresolved_4) {
      PlayerBullet = _unresolved_4.PlayerBullet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "46a04qkFA1ByLoO1znaFsre", "Collider", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Collider", Collider = (_dec = ccclass('Collider'), _dec(_class = class Collider extends Component {
        constructor(...args) {
          super(...args);
          this.Score = this.node.parent.getComponent(_crd && GameManger === void 0 ? (_reportPossibleCrUseOfGameManger({
            error: Error()
          }), GameManger) : GameManger);
          this.dieNumber = 0;
        }

        start() {
          PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        update(deltaTime) {}

        onBeginContact(selfCollider, otherCollider, contact) {
          if (selfCollider.tag == 1 && otherCollider.tag == 2 || selfCollider.tag == 2 && otherCollider.tag == 1) {
            if (selfCollider.tag == 1) {
              selfCollider.getComponent(_crd && PlayerBullet === void 0 ? (_reportPossibleCrUseOfPlayerBullet({
                error: Error()
              }), PlayerBullet) : PlayerBullet).die();
              otherCollider.getComponent(_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
                error: Error()
              }), Enemy) : Enemy).die();
            }

            if (selfCollider.tag == 2) {
              selfCollider.getComponent(_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
                error: Error()
              }), Enemy) : Enemy).die();
              otherCollider.getComponent(_crd && PlayerBullet === void 0 ? (_reportPossibleCrUseOfPlayerBullet({
                error: Error()
              }), PlayerBullet) : PlayerBullet).die();
            }

            this.Score.score();
          }

          if (selfCollider.tag == 0 && otherCollider.tag == 2 || selfCollider.tag == 2 && otherCollider.tag == 0) {
            alert("你以死亡，分数：" + this.dieNumber);
            director.purgeDirector();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ad315c54b1962f259bac8bc069d9c3bf47383a24.js.map