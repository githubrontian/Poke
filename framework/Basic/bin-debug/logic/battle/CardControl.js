var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var battle;
(function (battle) {
    /**
     * 卡牌控制类，控制卡牌显示位置，和出牌动画
     */
    var CardControl = (function () {
        function CardControl() {
            this._gameScene = null;
            this._landSprite = null; //地主牌
            this._tableSprite_1 = null;
            this._tableSprite_2 = null;
            this._tableSprite_3 = null;
        }
        CardControl.prototype.Init = function (gs) {
            this._gameScene = gs;
            this._landSprite = new egret.Sprite();
            this._tableSprite_1 = new egret.Sprite();
            this._tableSprite_2 = new egret.Sprite();
            this._tableSprite_3 = new egret.Sprite();
            this._gameScene.addChild(this._landSprite);
            this._gameScene.addChild(this._tableSprite_1);
            this._gameScene.addChild(this._tableSprite_2);
            this._gameScene.addChild(this._tableSprite_3);
            this._landSprite.x = 230;
            this._landSprite.y = 80;
            this._tableSprite_1.x = 20;
            this._tableSprite_1.y = 300;
            this._tableSprite_2.x = 340;
            this._tableSprite_2.y = 300;
            this._tableSprite_3.x = 20;
            this._tableSprite_3.y = 500;
        };
        CardControl.prototype.clearAll = function (cland) {
            if (cland === void 0) { cland = false; }
            this._tableSprite_1.removeChildren();
            this._tableSprite_2.removeChildren();
            this._tableSprite_3.removeChildren();
            if (cland) {
                this._landSprite.removeChildren();
            }
        };
        /**
         * 显示地主牌到 游戏中上位置
         */
        CardControl.prototype.ShowLandCard = function (clist) {
            this._landSprite.removeChildren();
            if (clist == null) {
                return;
            }
            var i = 0;
            var len = clist.length;
            for (i = 0; i < len; i++) {
                var card = MandPool.getInsByParm(battle.CardUI, clist[i]);
                this._landSprite.addChild(card);
                card.scaleX = card.scaleY = 0.4;
                card.x = (i % 7) * 64;
                card.y = 0;
            }
        };
        CardControl.prototype.ShowTableCard = function (localtabel, clist) {
            switch (localtabel) {
                case 1:
                    this.init_1(clist);
                    break;
                case 2:
                    this.init_2(clist);
                    break;
                case 3:
                    this.init_3(clist);
                    break;
                default:
                    break;
            }
        };
        // NOTE: 使用场景是什么 出牌动画
        CardControl.prototype.init_1 = function (clist) {
            this._tableSprite_1.removeChildren();
            if (clist == null) {
                return;
            }
            clist.reverse();
            clist.sort(function (a, b) {
                if (a % 100 > b % 100) {
                    return -1;
                }
                return 1;
            });
            var i = 0;
            var len = clist.length;
            for (i = 0; i < len; i++) {
                var card = MandPool.getInsByParm(battle.CardUI, clist[i]);
                this._tableSprite_1.addChild(card);
                card.scaleX = card.scaleY = CardControl.CardScale;
                card.x = (i % 7) * 35;
                card.y = Math.floor(i / 7) * 30;
            }
            this._tableSprite_1.x = 20;
            this._tableSprite_1.y = 100;
            this._tableSprite_1.alpha = 0;
            this._tableSprite_1.scaleX = this._tableSprite_1.scaleY = 1.5;
            this._tableSprite_1.alpha = 1;
            egret.Tween.get(this._tableSprite_1).to({ x: 20, y: 300, scaleX: 1, scaleY: 1, alpha: 1 }, 300, egret.Ease.circIn);
        };
        CardControl.prototype.init_2 = function (clist) {
            this._tableSprite_2.removeChildren();
            if (clist == null) {
                return;
            }
            clist.reverse();
            clist.sort(function (a, b) {
                if (a % 100 > b % 100) {
                    return -1;
                }
                return 1;
            });
            var i = 0;
            var len = clist.length;
            for (i = 0; i < len; i++) {
                var card = MandPool.getInsByParm(battle.CardUI, clist[i]);
                this._tableSprite_2.addChild(card);
                card.scaleX = card.scaleY = CardControl.CardScale;
                card.x = (i % 7) * 35;
                card.y = Math.floor(i / 7) * 30;
            }
            this._tableSprite_2.x = 500;
            this._tableSprite_2.y = 100;
            this._tableSprite_2.alpha = 0;
            this._tableSprite_2.scaleX = this._tableSprite_2.scaleY = 1.5;
            this._tableSprite_2.alpha = 1;
            egret.Tween.get(this._tableSprite_2).to({ x: 340, y: 300, scaleX: 1, scaleY: 1, alpha: 1 }, 300, egret.Ease.circIn);
        };
        CardControl.prototype.init_3 = function (clist) {
            this._tableSprite_3.removeChildren();
            if (clist == null) {
                return;
            }
            clist.reverse();
            clist.sort(function (a, b) {
                if (a % 100 > b % 100) {
                    return -1;
                }
                return 1;
            });
            var i = 0;
            var len = clist.length;
            var dis = 600;
            var gap1 = 50;
            var cnum = 10;
            if (len < cnum) {
                cnum = len;
            }
            var sx1 = (640 - (gap1 * cnum + battle.CardUI.CARDWIDTH * CardControl.CardScale)) / 2;
            for (i = 0; i < len; i++) {
                var card = MandPool.getInsByParm(battle.CardUI, clist[i]);
                this._tableSprite_3.addChild(card);
                card.scaleX = card.scaleY = CardControl.CardScale;
                card.x = sx1 + i % 10 * gap1;
                card.y = Math.floor(i / 10) * 30;
            }
            this._tableSprite_3.x = 20;
            this._tableSprite_3.y = 700;
            this._tableSprite_3.alpha = 0;
            this._tableSprite_3.scaleX = this._tableSprite_3.scaleY = 1.5;
            this._tableSprite_3.alpha = 1;
            egret.Tween.get(this._tableSprite_3).to({ x: 20, y: 500, scaleX: 1, scaleY: 1, alpha: 1 }, 300, egret.Ease.circIn);
        };
        CardControl.CardScale = 0.5;
        return CardControl;
    }());
    battle.CardControl = CardControl;
    __reflect(CardControl.prototype, "battle.CardControl");
})(battle || (battle = {}));
//# sourceMappingURL=CardControl.js.map