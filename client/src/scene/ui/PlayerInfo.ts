/**
 * Created by Administrator on 2015/12/29.
 */
module scene {
    export class PlayerInfo extends egret.Sprite implements IInit {
        private _scoretxt:egret.TextField=null;
        private _cointxt:egret.TextField=null;
        private _player:data.Player=null;
        private _jifen:string="积分: ";
        private _jinbi:string="金币: ";
        public constructor() {
            super();
        }
        public ReSet():void
        {
            this._scoretxt.text = this._jifen + this._player.integral;
            this._cointxt.text = this._jinbi + this._player.money;
        }

        public Init(pld:data.Player):void {
            if(data.GameData.flag==data.GameData.GameFlag_Activity)
            {
                this._jifen="积分: ";
                this._jinbi="比赛积分: ";
            }
            var bg:egret.Bitmap = new egret.Bitmap(RES.getRes("ui_info_bg"));
            bg.scale9Grid = new egret.Rectangle(35, 75, 130, 60);
            this.addChild(bg);

            this._player=pld;

            var nametxt:egret.TextField = new egret.TextField();
            nametxt.textColor = 0x804813;
            nametxt.textAlign = egret.HorizontalAlign.LEFT;
            nametxt.size = 24;
            this.addChild(nametxt);
            nametxt.x = 5;
            nametxt.y = 20;
            nametxt.width = 190;
            nametxt.text = pld.nickname;

            var scoretxt:egret.TextField = new egret.TextField();
            scoretxt.textColor = 0x804813;
            scoretxt.textAlign = egret.HorizontalAlign.LEFT;
            scoretxt.size = 24;
            scoretxt.x = 25;
            scoretxt.y = 70;
            scoretxt.width = 170;
            scoretxt.text = this._jifen + pld.integral;
            this._scoretxt=scoretxt;

            var cointxt:egret.TextField = new egret.TextField();
            cointxt.textColor = 0x804813;
            cointxt.textAlign = egret.HorizontalAlign.LEFT;
            cointxt.size = 24;
            cointxt.x = 25;
            cointxt.y = 100;
            cointxt.width = 170;
            cointxt.text = this._jinbi + pld.money;
            this._cointxt=cointxt;

            if(data.GameData.flag==data.GameData.GameFlag_Activity)
            {
                cointxt.y = 70;
                bg.height=120;
                this.addChild(cointxt);
            }
            else
            {
                this.addChild(scoretxt);
                this.addChild(cointxt);
            }
        }
    }

}