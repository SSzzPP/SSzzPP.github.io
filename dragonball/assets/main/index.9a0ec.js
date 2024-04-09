window.__require = function e(t, o, n) {
	function s(a, r) {
		if (!o[a]) {
			if (!t[a]) {
				var c = a.split("/");
				if (c = c[c.length - 1], !t[c]) {
					var l = "function" == typeof __require && __require;
					if (!r && l) return l(c, !0);
					if (i) return i(c, !0);
					throw new Error("Cannot find module '" + a + "'")
				}
				a = c
			}
			var d = o[a] = {
				exports: {}
			};
			t[a][0].call(d.exports, function(e) {
				return s(t[a][1][e] || e)
			}, d, d.exports, e, t, o, n)
		}
		return o[a].exports
	}
	for (var i = "function" == typeof __require && __require, a = 0; a < n.length; a++) s(n[a]);
	return s
}({
	BtnAddShort: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "af737xdihFBxJyfGuJE1lJp", "BtnAddShort");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../engines/gameEngine"),
			{
				ccclass: i,
				property: a
			} = cc._decorator;
		let r = class extends cc.Component {
			OnBtnAddShort() {
				s.default.getManagers().soundMgr.playSound("anNiu");
				const e = window.qg;
				e && e.installShortcut({
					success() {
						console.log(
							"\u684c\u9762\u56fe\u6807\u521b\u5efa\u6210\u529f\uff01\uff01\uff01"
							)
					},
					fail() {}
				})
			}
		};
		r = n([i], r), o.default = r, cc._RF.pop()
	}, {
		"../engines/gameEngine": "gameEngine"
	}],
	CSubExitRoom: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "7cb7ezPdnFB6bB+QdcAQSx9", "CSubExitRoom"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto"),
			i = e("../wsProtoConfigBase");
		class a {
			constructor() {
				this.head = a.HEAD
			}
			getPackageBody(e) {
				let t = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.GAME, e);
				return s.MSG.CSubExitRoom.encode(t).finish()
			}
			static unPackageMessage(e) {
				return new a
			}
		}
		o.default = a, a.HEAD = i.SUB.CSubExitRoom, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead",
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	CSubGetHostUid: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "cb2e5NQPqBNWYLlCmdyYjQD", "CSubGetHostUid"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto"),
			i = e("../wsProtoConfigBase");
		class a {
			constructor() {
				this.head = a.HEAD
			}
			getPackageBody(e) {
				let t = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.GAME, e);
				return s.MSG.CSubLoginServer.encode(t).finish()
			}
			static unPackageMessage(e) {
				return new a
			}
		}
		o.default = a, a.HEAD = i.SUB.CSubGetHostUid, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead",
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	CSubLoginGame: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "0bc2beKCxFIqKuxqR2zuCRa", "CSubLoginGame"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto"),
			i = e("../wsProtoConfigBase");
		class a {
			constructor(e) {
				this.head = a.HEAD, this.body = {
					gameId: e
				}
			}
			getPackageBody() {
				let e = {
					msgType: n.$WS.ProtoHead.HALL,
					hallHead: a.HEAD
				};
				return e = Object.assign(e, this.body), s.MSG.CSubLoginGame.encode(e).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.CSubLoginGame.decode(e);
				return new a(t.gameId)
			}
		}
		o.default = a, a.HEAD = i.SUB.CSubLoginGame, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead",
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	CSubLoginServer: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "cccb86eVBZL9p2hk+TlqATo", "CSubLoginServer"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto"),
			i = e("../wsProtoConfigBase");
		class a {
			constructor(e) {
				this.head = a.HEAD, this.body = {
					userId: e
				}
			}
			getPackageBody() {
				let e = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.HALL);
				return e = Object.assign(e, this.body), s.MSG.CSubLoginServer.encode(e).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.CSubLoginServer.decode(e);
				return new a(t.userId)
			}
		}
		o.default = a, a.HEAD = i.SUB.CSubLoginServer, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead",
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	CSubLogoutGame: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "9b9c8ioXLdB2Lg1moLPmztd", "CSubLogoutGame"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto"),
			i = e("../wsProtoConfigBase");
		class a {
			constructor() {
				this.head = a.HEAD
			}
			getPackageBody() {
				let e = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.HALL);
				return s.MSG.CSubLogoutGame.encode(e).finish()
			}
			static unPackageMessage(e) {
				return new a
			}
		}
		o.default = a, a.HEAD = i.SUB.CSubLogoutGame, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead",
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	CSubMatchRoom: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "c688eMWodtGHoFqi0C0MMBt", "CSubMatchRoom"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto"),
			i = e("../wsProtoConfigBase");
		class a {
			constructor(e, t) {
				this.head = a.HEAD, this.body = {
					name: e,
					rmId: t || 0
				}
			}
			getPackageBody(e) {
				let t = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.GAME, e);
				return t = Object.assign(t, this.body), s.MSG.CSubMatchRoom.encode(t).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.CSubMatchRoom.decode(e);
				return new a(t.name, t.rmId)
			}
		}
		o.default = a, a.HEAD = i.SUB.CSubMatchRoom, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead",
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	CSubObHurtEnemy: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "96bd46NPYBI06wHfystybSv", "CSubObHurtEnemy"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto");
		class i {
			constructor(e, t) {
				this.head = i.HEAD, this.body = {
					eid: e,
					hurt: t
				}
			}
			getPackageBody(e) {
				let t = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.GAME, e);
				return t = Object.assign(t, this.body), s.MSG.CSubObHurtEnemy.encode(t).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.CSubObHurtEnemy.decode(e);
				return new i(t.eid, t.hurt)
			}
		}
		o.default = i, i.HEAD = 2003, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead"
	}],
	CSubPlaneMove: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "0bffb/KiLBD/o88lVwGvLiw", "CSubPlaneMove"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto");
		class i {
			constructor(e, t) {
				this.head = i.HEAD, this.body = {
					x: e,
					y: t
				}
			}
			getPackageBody(e) {
				let t = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.GAME, e);
				return t = Object.assign(t, this.body), s.MSG.CSubPlaneMove.encode(t).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.CSubPlaneMove.decode(e);
				return new i(t.x, t.y)
			}
		}
		o.default = i, i.HEAD = 2001, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead"
	}],
	CSubShopBullet: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "da75dYEBgtB37sGUt1+35F8", "CSubShopBullet"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto");
		class i {
			constructor() {
				this.head = i.HEAD
			}
			getPackageBody(e) {
				let t = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.GAME, e);
				return s.MSG.CSubShopBullet.encode(t).finish()
			}
			static unPackageMessage(e) {
				return new i
			}
		}
		o.default = i, i.HEAD = 2006, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead"
	}],
	CardPage: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "81b56gEIgVGZKY1umgspFh8", "CardPage");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../Config/SkinConfig"),
			i = e("../../engines/components/comSpSkeleton"),
			a = e("../../engines/gameEngine"),
			r = e("../../engines/libs/data_control"),
			{
				ccclass: c,
				property: l
			} = cc._decorator;
		let d = class extends cc.Component {
			constructor() {
				super(...arguments), this.head = null, this.lbName = null, this.joinDayLb =
					null, this.joinPigLb = null, this.idLb = null, this.allCountLb = null, this
					.JoinPigCountLb = null, this.todayCountLb = null, this.muNode = null, this
					.pigAniNode = null, this.pigAni = null, this.BGcircle = null, this.content =
					null
			}
			start() {
				this.open(), this.updatePage();
				let e = cc.tween(this.BGcircle).by(3, {
					angle: 360
				});
				cc.tween(this.BGcircle).repeatForever(e).start()
			}
			updatePage() {
				let e = a.default.getModules().gameHttpModule;
				this.lbName.string = e.UserName, this.idLb.string = `ID:${e.UserAccount}`, this
					.joinPigLb.string = a.services().userSrv.getTodayJoinPig() ?
					"\u5df2\u52a0\u5165\u732a\u5708" : "\u672a\u52a0\u5165\u732a\u5708", this
					.allCountLb.string =
					`<color = #000000>\u671f\u95f4\u6311\u6218\u6b21\u6570</color><color = #F19008> ${a.services().userSrv.getAllChallengeCount()} </color><color = #000000>\u6b21</color>`,
					this.JoinPigCountLb.string =
					`<color = #000000>\u52a0\u5165\u732a\u5708\u6b21\u6570</color><color = #F19008> ${a.services().userSrv.getAllJoinPigCount()} </color><color = #000000>\u6b21</color>`,
					this.todayCountLb.string =
					`<color = #000000>\u52a0\u5165\u732a\u5708\u6b21\u6570</color><color = #F19008> ${a.services().userSrv.getTodayChallengeCount()} </color><color = #000000>\u6b21</color>`;
				let t = r.default.getDateOfDataNow(a.default.getModules().gameHttpModule
					.LoginDay);
				this.joinDayLb.string = t.getFullYear() + "\u5e74" + (t.getMonth() + 1) +
					"\u6708" + t.getDate() + "\u65e5\u8bde\u751f", this.loadHead(), this
					.updateAni()
			}
			updateAni() {
				if (a.services().userSrv.getTodayJoinPig()) {
					this.pigAniNode.active = !0, this.muNode.active = !1;
					let e = a.services().userSrv.getUserUseSkin(),
						t = s.getOneSkinConfigById(e);
					a.default.getModules().uiControlModule.getGameBundle().load(`sp/${t.sk}`, sp
						.SkeletonData, (e, o) => {
							if (e) return void console.error(
								"\u52a0\u8f7d\u76ae\u80a4\u5931\u8d25  CardPage.ts #76"
								);
							this.pigAni.skeletonData = o;
							let n = `Shake_0${Math.floor(3*Math.random()+1)}`;
							this.pigAni.setSkin(t.skin), this.pigAni.playAnimation(n).start(
								!0)
						})
				} else this.pigAniNode.active = !1, this.muNode.active = !0
			}
			loadHead() {
				a.default.getServices().miniGameSrv.getAppApiInstance().drawUrlImage(a.default
					.getModules().gameHttpModule.HeadUrl, e => {
						this.head.getComponent(cc.Sprite).spriteFrame = e
					})
			}
			open() {
				this.node.opacity = 0, cc.tween(this.node).to(.25, {
					opacity: 255
				}).start(), cc.tween(this.content).delay(.2).call(() => {}).to(.3, {
					scale: 1
				}, {
					easing: "backOut"
				}).start()
			}
			close() {
				this.node.isValid && cc.tween(this.node).to(.1, {
					opacity: 0
				}).call(() => {
					this.node.destroy(), this.node.removeFromParent()
				}).start()
			}
			onBtnConfirm() {
				this.close()
			}
		};
		n([l({
			type: cc.Node,
			displayName: "\u5934\u50cf\u8282\u70b9"
		})], d.prototype, "head", void 0), n([l({
			type: cc.Label,
			displayName: "\u7528\u6237\u540d"
		})], d.prototype, "lbName", void 0), n([l({
			type: cc.Label,
			displayName: "\u8bde\u751f\u65f6\u95f4\u6587\u672c"
		})], d.prototype, "joinDayLb", void 0), n([l({
			type: cc.Label,
			displayName: "\u4eca\u65e5\u52a0\u5165\u732a\u5708\u6587\u672c"
		})], d.prototype, "joinPigLb", void 0), n([l({
			type: cc.Label,
			displayName: "ID\u6587\u672c"
		})], d.prototype, "idLb", void 0), n([l({
			type: cc.RichText,
			displayName: "\u603b\u6311\u6218\u6b21\u6570\u6587\u672c"
		})], d.prototype, "allCountLb", void 0), n([l({
			type: cc.RichText,
			displayName: "\u52a0\u5165\u732a\u5708\u6b21\u6570\u6587\u672c"
		})], d.prototype, "JoinPigCountLb", void 0), n([l({
			type: cc.RichText,
			displayName: "\u4eca\u65e5\u6311\u6218\u6b21\u6570"
		})], d.prototype, "todayCountLb", void 0), n([l({
			type: cc.Node,
			displayName: "\u5893\u7891\u8282\u70b9"
		})], d.prototype, "muNode", void 0), n([l({
			type: cc.Node,
			displayName: "\u732a\u52a8\u753b\u8282\u70b9"
		})], d.prototype, "pigAniNode", void 0), n([l({
			type: i.default,
			displayName: "\u732a\u7684\u52a8\u753b"
		})], d.prototype, "pigAni", void 0), n([l({
			type: cc.Node,
			displayName: "\u80cc\u666f\u5708"
		})], d.prototype, "BGcircle", void 0), n([l({
			type: cc.Node
		})], d.prototype, "content", void 0), d = n([c], d), o.default = d, cc._RF.pop()
	}, {
		"../../Config/SkinConfig": "SkinConfig",
		"../../engines/components/comSpSkeleton": "comSpSkeleton",
		"../../engines/gameEngine": "gameEngine",
		"../../engines/libs/data_control": "data_control"
	}],
	DragBase: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "5f017QDPIJL6Z1vvDvJLz8U", "DragBase");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../libs/data_control"),
			{
				ccclass: i,
				property: a,
				menu: r,
				disallowMultiple: c
			} = cc._decorator;
		let l = class extends cc.Component {
			constructor() {
				super(...arguments), this.checkTime = 1, this.origin = null, this.nodePos =
					null, this.oldPos = null, this.newPos = null, this.limit = {
						minX: 0,
						maxX: 0,
						minY: 0,
						maxY: 0
					}, this.ctrlNode = null, this.canMove = !0
			}
			get Limit() {
				return this.limit
			}
			set NodePos(e) {
				this.nodePos.x = e.x, this.nodePos.y = e.y
			}
			CanMove(e) {
				this.canMove = e
			}
			start() {
				null == this.ctrlNode && (this.ctrlNode = this.node), this.ctrlNode && this
					.scheduleOnce(this.SetPos), this.scheduleOnce(() => {
						let e = s.default.GetWorldPos(this.ctrlNode.parent);
						this.limit.maxX = .5 * cc.winSize.width / this.ctrlNode.parent
							.scaleX - e.x, this.limit.minX = .5 * -cc.winSize.width / this
							.ctrlNode.parent.scaleX - e.x, this.limit.maxY = .5 * cc.winSize
							.height / this.ctrlNode.parent.scaleY - e.y, this.limit.minY =
							.5 * -cc.winSize.height / this.ctrlNode.parent.scaleY - e.y
					}, .1), this.ctrlNode && this.RegistEvent()
			}
			SetPos() {
				this.origin = this.ctrlNode.getPosition(), this.nodePos = this.ctrlNode
					.getPosition()
			}
			RegistEvent() {
				this.ctrlNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this
					.ctrlNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this
					.ctrlNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this
					.ctrlNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
			}
			onDestroy() {
				this.ctrlNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this
					.ctrlNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this), this
					.ctrlNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this
					.ctrlNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
			}
			onTouchStart() {}
			onTouchMove(e) {
				if (!this.canMove) return;
				let t = e.getTouches();
				this.oldPos = this.ctrlNode.parent.convertToNodeSpaceAR(t[0]
				.getStartLocation()), this.newPos = this.ctrlNode.parent.convertToNodeSpaceAR(t[
						0].getLocation());
				let o = this.oldPos.sub(this.newPos);
				this.ctrlNode.x = this.nodePos.x - o.x, this.ctrlNode.y = this.nodePos.y - o.y;
				let n = this.ctrlNode.getPosition();
				n.x < this.limit.minX && (n.x = this.limit.minX), n.x > this.limit.maxX && (n
						.x = this.limit.maxX), n.y < this.limit.minY && (n.y = this.limit.minY),
					n.y > this.limit.maxY && (n.y = this.limit.maxY), this.ctrlNode.setPosition(
						n)
			}
			onTouchEnd() {
				this.canMove && (this.ctrlNode.setPosition(this.origin), this.ctrlNode
					.getPosition(this.nodePos))
			}
		};
		l = n([i, r("\u5de5\u5177\u7ec4\u4ef6/\u53ef\u62d6\u52a8\u7269")], l), o.default = l, cc._RF
			.pop()
	}, {
		"../libs/data_control": "data_control"
	}],
	FpsSyncListMsg: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "d65d69No2NF8JZsppqYOMrf", "FpsSyncListMsg"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto"),
			i = e("../wsProtoConfigBase");
		class a {
			constructor(e, t, o) {
				this.head = a.HEAD, this.body = {
					frame: e,
					seat: t,
					list: o
				}
			}
			addSync(e, t) {
				this.body.seat.push(e), this.body.list.push(t)
			}
			getPackageBody() {
				let e = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.FPS_SYNC);
				return e = Object.assign(e, this.body), s.MSG.FpsSyncListMsg.encode(e).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.FpsSyncListMsg.decode(e);
				return new a(t.frame, t.seat, t.list)
			}
		}
		o.default = a, a.HEAD = i.SUB.FpsSyncListMsg, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead",
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	KSAPI: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "55e95d95kpIPLK3VAIyH9Pb", "KSAPI");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../miniApp"),
			i = e("../../../gameEngine"),
			a = window.ks;
		o.default = class extends s.default {
			constructor() {
				super(...arguments), this.m_appId = "ks664843898070715499", this.m_secret =
					"820c32c3a9fff4c7b2db1720e30192132e5e2f07", this.m_adUnitId =
					"2300003261_01", this.m_gameRecorderManager = null, this
					.m_gameRecordVideoUrl = null, this.m_videoAd = null, this.canShare = !0,
					this.m_gameRecordTimeNow = 0
			}
			navigateToMiniGame(e, t, o) {
				console.error("#501025 \u672a\u5b9e\u73b0\u8df3\u8f6c\u65b9\u6cd5")
			}
			commitRank(e, t) {
				return n(this, void 0, void 0, function*() {
					return Promise.resolve(!1)
				})
			}
			showRank(e) {
				return n(this, void 0, void 0, function*() {
					return Promise.resolve(!1)
				})
			}
			showModal(e) {}
			LocalInBlockCityList() {
				return !1
			}
			vibrate(e) {}
			Init() {
				console.log("Init   start"), this.m_gameRecorderManager = a.getGameRecorder(),
					null === this.m_gameRecorderManager && console.log(
						"\u5f53\u524d\u7248\u672c App \u4e0d\u652f\u6301\u5f55\u5c4f"), console
					.log("Init   over")
			}
			Read() {
				console.log("Read   over")
			}
			LoadSubPackageLoadSubPack(e, t) {
				a.loadSubpackage({
					name: e,
					success: function(e) {
						t(!1, e), console.log(
							"\u5206\u5305\u52a0\u8f7d\u6210\u529f")
					},
					fail: function(e) {
						t(e, null), console.log(JSON.stringify(e))
					}
				}).onProgressUpdate(e => {
					console.log(e)
				})
			}
			getUserInfo(e) {}
			showToast(e) {}
			showLoading(e) {}
			hideLoading() {}
			preCreateUnits() {
				this.Init(), this.Read(), this.createRewardedVideoAd({
					adUnitId: this.m_adUnitId
				}), this.m_gameRecorderManager = a.getGameRecorder()
			}
			loadAndShowVideoAd(e, t, o) {
				if (null == this.m_videoAd) return console.error(
					"\u5feb\u624b\u5e7f\u544a\u89c6\u9891\u7ec4\u4ef6\u4e0d\u5b58\u5728"
					), void t(null);
				this.m_videoAd.show().then(() => {
					console.log("\u6fc0\u52b1\u89c6\u9891\u64ad\u653e\u6210\u529f")
				});
				let n = e => {
					t && t(e), console.log(
						"\u6fc0\u52b1\u89c6\u9891\u64ad\u653e\u5931\u8d25: " + JSON
						.stringify(e))
				};
				this.m_videoAd.onError(n);
				let s = t => {
					t && t.isEnded || void 0 === t ? (e && e(), console.log(
							"\u6fc0\u52b1\u89c6\u9891\u5956\u52b1\u56de\u8c03: " + JSON
							.stringify(t))) : console.log(
							"\u6fc0\u52b1\u89c6\u9891\u5173\u95ed\u56de\u8c03: " + JSON
							.stringify(t)), this.m_videoAd.offClose(s), this.m_videoAd
						.offError(n), o && o()
				};
				this.m_videoAd.onClose(s)
			}
			login(e) {
				a.login(e)
			}
			authorize(e) {
				e.success && e.success()
			}
			gameRecordStart(e, t) {
				this.m_gameRecordTimeNow = Date.now(), this.m_gameRecordVideoUrl = null, this
					.m_gameRecorderManager.on("start", e => {
						console.log("ks \u5f55\u5c4f\u5f00\u59cb", e), t && t(e)
					}), this.m_gameRecorderManager.on("stop", e => {
						console.log("ks \u5f55\u5c4f\u7ed3\u675f", e.videoID), this
							.m_gameRecordVideoUrl = e.videoID
					}), this.m_gameRecorderManager.on("error", e => {
						console.log("ks \u5f55\u5c4f\u9519\u8bef :", e.code, "-", e.msg)
					}), this.m_gameRecorderManager.start()
			}
			gameRecordStop() {
				return this.canShare = !0, this.m_gameRecorderManager.stop(), !0
			}
			shareGameRecordVideo(e, t) {
				this.isHaveShareVideo() ? null != this.m_gameRecordVideoUrl ? this
					.m_gameRecorderManager.publishVideo({
						video: this.m_gameRecordVideoUrl,
						callback: o => {
							if (null == o || null == o) this.canShare = !1, console.log(
								"\u5206\u4eab\u5f55\u5c4f\u6210\u529f"), e && e();
							else switch (console.log(
								"\u5206\u4eab\u5f55\u5c4f\u5931\u8d25: " + JSON
								.stringify(o), o.code), o.code) {
								case 0:
								case -10018:
									i.default.getModules().uiControlModule
										.showMessageBox(
											"\u7528\u6237\u53d6\u6d88\u5f55\u5c4f");
									break;
								default:
									t && t()
							}
						}
					}) : i.default.getModules().uiControlModule.showMessageBox(
						"\u5f55\u5c4f\u5931\u8d25\uff0c\u4e0d\u80fd\u5206\u4eab") : i.default
					.getModules().uiControlModule.showMessageBox(
						"\u4e0d\u80fd\u91cd\u590d\u5206\u4eab")
			}
			isProduction() {
				return "production" == a.env.VERSION
			}
			isHaveShareVideo() {
				return this.canShare
			}
			validAppId() {}
			reportAnalytics(e, t) {}
			clearMemory() {}
			shareAppMessage(e) {}
			createRewardedVideoAd(e) {
				this.m_videoAd = a.createRewardedVideoAd(e)
			}
			PlayLastRecordSound(e, t, o) {}
			StartRecordSound() {}
			StopRecordSound(e) {}
			addShortcut() {
				return Promise.resolve(void 0)
			}
			createMoreGameBtn() {}
			drawUrlImage(e, t) {
				e.includes("local://") ? i.default.getModules().uiControlModule.getGameBundle()
					.load(e.replace("local://", "Head/"), cc.SpriteFrame, (e, o) => {
						e ? console.error(
							"\u52a0\u8f7d\u5934\u50cf\u5931\u8d25 ttApi #755") : t(o)
					}) : cc.assetManager.loadRemote(e, (e, o) => {
						if (e) return console.error("#1553937 \u56fe\u7247\u51fa\u9519", e),
							void t(null);
						t(new cc.SpriteFrame(o))
					})
			}
			getShareVideoRank(e, t) {}
			hideBanner() {}
			operateGameLive() {}
			reportAdClickNativeAd() {}
			showAddFavoriteGuide(e, t, o) {}
			showBannerAD(e, t, o, n, s) {}
			showInterstitialAd(e, t) {}
			showNativeAd(e, t, o) {}
			showVideo(e) {}
			subscribeMessage(e, t, o) {}
			drawHead(e) {
				return Promise.resolve(void 0)
			}
			fullScreenVideo() {
				return Promise.resolve(void 0)
			}
		}, cc._RF.pop()
	}, {
		"../../../gameEngine": "gameEngine",
		"../miniApp": "miniApp"
	}],
	Native: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "b2ff4U5nR5HYLYnaJHU8t8k", "Native"), Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.default = class {
			static enablePullRefresh(e) {
				this.js2android("refresh", e ? "1" : "0")
			}
			static onCreateSuccess() {
				this.js2android("home_loaded",
					"\u6e38\u620f\u9996\u9875\u521d\u59cb\u5316\u5b8c\u6210")
			}
			static beginLevel(e) {
				this.js2android("begin_level", e + "")
			}
			static passLevel(e) {
				this.js2android("pass_level", e + "")
			}
			static actionEvent(e, t) {
				var o = {
					scene: e,
					type: t
				};
				this.js2android("action_event", JSON.stringify(o))
			}
			static reStart() {
				this.js2android("restart", "0")
			}
			static showInsertAd() {
				this.js2android("show_insert_ad", "1")
			}
			static gamePass(e) {
				this.js2android("game_pass", e + "")
			}
			static gameFailed(e) {
				this.js2android("game_failed", e + "")
			}
			static openAgreement(e) {
				this.js2android("openAgreement", e)
			}
			static showRewardVideo() {
				this.js2android("show_reward_video", "1")
			}
			static js2android(e, t) {
				console.log(`name:${e}-data:${t}`), window.injectedObject && window
					.injectedObject.setJsContent && window.injectedObject.setJsContent(e, t)
			}
			static android2js(e, t) {
				window[e] = t
			}
		}, cc._RF.pop()
	}, {}],
	PageBase: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "0fcddj6rstIX6qKbdGu63RY", "PageBase");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../gameEngine"),
			i = e("../../managers/gameContent/gameMode_json"),
			a = e("../uiModule");
		o.default = class extends cc.Component {
			constructor() {
				super(...arguments), this.m_mode = i.GAME_MODE.NORMAL, this.registed = !1, this
					.content = null, this.btnRoot = null, this.topRoot = null, this.onClose =
					null, this.onReward = null, this.dialogIndex = 0, this.m_prams = null, this
					.useAnim = !0
			}
			managers() {
				return s.default.getManagers()
			}
			services() {
				return s.default.getServices()
			}
			modules() {
				return s.default.getModules()
			}
			OnPageOpen(e) {
				var t, o, s;
				return n(this, void 0, void 0, function*() {
					if (e ? (this.m_prams = e, this.m_mode = e.mode, this.onClose = e
							.onClose, this.onReward = e.onReward) : (this.m_mode =
							null === (t = this.m_prams) || void 0 === t ? void 0 : t
							.mode, this.onClose = null === (o = this.m_prams) ||
							void 0 === o ? void 0 : o.onClose, this.onReward = null ===
							(s = this.m_prams) || void 0 === s ? void 0 : s.onReward),
						this.registed || this.AddEvent(), this.btnRoot = this.node
						.getChildByName("ButtonRoot"), this.topRoot = this.node
						.getChildByName("TopRoot"), this.content = this.node
						.getChildByName("Content"), this.node.active = !0, this.useAnim
						) {
						if (this.node.opacity = 0, this.btnRoot && this.btnRoot.children
							.forEach(e => {
								e.opacity = 0
							}), this.content && (this.content.scale = 0), this.Log(
								"\u6253\u5f00", this.dialogIndex), cc.tween(this.node)
							.to(.25, {
								opacity: 255
							}).start(), this.content && (yield new Promise(e => {
								cc.tween(this.content).delay(.2).call(
							() => {}).to(.3, {
									scale: 1
								}, {
									easing: "backOut"
								}).call(e).start()
							})), this.btnRoot)
							for (let e = 0; e < this.btnRoot.children.length; e++) {
								const t = this.btnRoot.children[e];
								cc.tween(t).to(.1, {
									opacity: 255
								}).start()
							}
					} else this.node.opacity = 255
				})
			}
			HidePage() {
				cc.tween(this.node).to(.1, {
					opacity: 0
				}).call(() => {
					this.node.active = !1
				}).start()
			}
			ClosePage() {
				const e = this.pageIndex == a.UI_Z_INDEX.DIALOG ? this.pageName + this
					.dialogIndex.toString() : this.pageName;
				this.modules().uiControlModule.ClosePage(e)
			}
			OnPageClose() {
				this.RemoveEvent(), this.Log("\u5173\u95ed\u9875\u9762", this.dialogIndex), this
					.onClose && this.onClose(), this.onClose = null, this.onReward = null, this
					.node.isValid && cc.tween(this.node).to(.1, {
						opacity: 0
					}).call(() => {
						this.node.destroy()
					}).start()
			}
			BackMain() {
				return n(this, void 0, void 0, function*() {
					yield s.default.getManagers().gameMgr.returnMainScene(), this
						.modules().uiControlModule.CloseAllPage()
				})
			}
			OnMainBtn() {
				return n(this, void 0, void 0, function*() {
					this.managers().soundMgr.playSound("anNiu"), this.BackMain()
				})
			}
			OnCloseBtn() {
				this.managers().soundMgr.playSound("anNiu"), this.ClosePage()
			}
			AddEvent() {
				this.registed = !0, this.Log("\u6ce8\u518c\u4e8b\u4ef6")
			}
			RemoveEvent() {
				this.Log("\u6ce8\u9500\u4e8b\u4ef6"), this.registed = !1
			}
			Log(...e) {
				console.log(`${this.pageName}:---\x3e>[\n`, ...e, "\n]")
			}
			Warn(...e) {
				console.warn(`${this.pageName}:---[\n`, ...e, "\n]")
			}
			onDestroy() {}
		}, cc._RF.pop()
	}, {
		"../../gameEngine": "gameEngine",
		"../../managers/gameContent/gameMode_json": "gameMode_json",
		"../uiModule": "uiModule"
	}],
	RewardView: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "30de07vUj1Ckqt6CK40Y8xf", "RewardView");
		var n = this && this.__decorate || function(e, t, o, n) {
				var s, i = arguments.length,
					a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
					.decorate(e, t, o, n);
				else
					for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
						t, o, a) : s(t, o)) || a);
				return i > 3 && a && Object.defineProperty(t, o, a), a
			},
			s = this && this.__awaiter || function(e, t, o, n) {
				return new(o || (o = Promise))(function(s, i) {
					function a(e) {
						try {
							c(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function r(e) {
						try {
							c(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function c(e) {
						var t;
						e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
							e) {
							e(t)
						})).then(a, r)
					}
					c((n = n.apply(e, t || [])).next())
				})
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const i = e("../../engines/modules/uiModule/PageBase"),
			a = e("../../engines/services/userContent/userInterface"),
			{
				ccclass: r,
				property: c
			} = cc._decorator;
		let l = class extends i.default {
			constructor() {
				super(...arguments), this.BgLight = null, this.lbTitle = null, this.lbCount =
					null, this.spRewardIcon = null, this.spfPower = null, this.spfCoin = null,
					this.spfDiamond = null, this.m_prams = null
			}
			onLoad() {}
			OnPageOpen(e) {
				const t = Object.create(null, {
					OnPageOpen: {
						get: () => super.OnPageOpen
					}
				});
				return s(this, void 0, void 0, function*() {
					t.OnPageOpen.call(this, e), this.OnShowReward(this.m_prams
							.rewardType, this.m_prams.rewardCount, this.m_prams
							.titleString, this.m_prams.customSpriteFrame), this
						.spRewardIcon.spriteFrame = null, this.lbTitle.string =
						"\u606d\u559c", this.OnIn()
				})
			}
			OnShowReward(e, t, o = "\u606d\u559c", n) {
				switch (this.lbTitle.string = o, this.lbCount.string = `\xd7${Math.floor(t)}`,
					e) {
					case a.REWARD_TYPE.POWER:
						this.spRewardIcon.spriteFrame = this.spfPower;
						break;
					case a.REWARD_TYPE.COIN:
						this.spRewardIcon.spriteFrame = this.spfCoin;
						break;
					case a.REWARD_TYPE.DIAMOND:
						this.spRewardIcon.spriteFrame = this.spfDiamond;
						break;
					case a.REWARD_TYPE.CUSTOM:
						this.spRewardIcon.spriteFrame = n;
						break;
					default:
						console.error("\u9519\u8bef\u7684\u5956\u52b1\u7c7b\u578b", e)
				}
			}
			OnRewardBg() {
				cc.tween(this.BgLight).by(1, {
					angle: 120
				}).repeatForever().start()
			}
			OnBtnKnow() {
				this.ClosePage()
			}
			OnIn() {
				this.node.scale = .1, this.OnRewardBg(), cc.tween(this.node).to(.3, {
					scale: 1
				}, {
					easing: "backOut"
				}).call(() => {}).start()
			}
			OnOut() {}
		};
		n([c(cc.Node)], l.prototype, "BgLight", void 0), n([c(cc.Label)], l.prototype, "lbTitle",
			void 0), n([c(cc.Label)], l.prototype, "lbCount", void 0), n([c(cc.Sprite)], l
			.prototype, "spRewardIcon", void 0), n([c(cc.SpriteFrame)], l.prototype, "spfPower",
			void 0), n([c(cc.SpriteFrame)], l.prototype, "spfCoin", void 0), n([c(cc.SpriteFrame)],
			l.prototype, "spfDiamond", void 0), l = n([r], l), o.default = l, cc._RF.pop()
	}, {
		"../../engines/modules/uiModule/PageBase": "PageBase",
		"../../engines/services/userContent/userInterface": "userInterface"
	}],
	SCSubGameSync: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "d43a25DeklAhrW2d36P8HlM", "SCSubGameSync"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto"),
			i = e("../wsProtoConfigBase");
		class a {
			constructor(e, ...t) {
				this.head = a.HEAD, this.body = {
					seat: e,
					syncs: t
				}
			}
			getPackageBody() {
				let e = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.SYNC);
				return e = Object.assign(e, this.body), s.MSG.SCSubGameSync.encode(e).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.SCSubGameSync.decode(e);
				return new a(t.seat, ...t.syncs)
			}
		}
		o.default = a, a.HEAD = i.SUB.SCSubGameSync, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead",
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	SSubExitRoom: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "376f2sYXwRJcJjowS/GH3Hv", "SSubExitRoom"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto"),
			i = e("../wsProtoConfigBase");
		class a {
			constructor(e, t) {
				this.head = a.HEAD, this.body = {
					uid: e,
					rid: t
				}
			}
			getPackageBody(e) {
				let t = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.GAME, e);
				return t = Object.assign(t, this.body), s.MSG.SSubExitRoom.encode(t).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.SSubExitRoom.decode(e);
				return new a(t.uid, t.rid)
			}
		}
		o.default = a, a.HEAD = i.SUB.SSubExitRoom, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead",
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	SSubFpsGameStart: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "c130eMrpoVL5J8DF9iWi3sp", "SSubFpsGameStart"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto"),
			i = e("../wsProtoConfigBase");
		class a {
			constructor(e, t, o, n) {
				this.head = a.HEAD, this.body = {
					frameTime: e,
					pUidList: t,
					pSeatList: o,
					pNameList: n
				}
			}
			getPackageBody(e) {
				let t = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.GAME, e);
				return t = Object.assign(t, this.body), s.MSG.SSubFpsGameStart.encode(t).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.SSubFpsGameStart.decode(e);
				return new a(t.frameTime, t.pUidList, t.pSeatList, t.pNameList)
			}
		}
		o.default = a, a.HEAD = i.SUB.SSubFpsGameStart, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead",
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	SSubKillEnemy: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "3a8ffr6guRBDpvxiUM26RA4", "SSubKillEnemy"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto");
		class i {
			constructor(e, t, o) {
				this.head = i.HEAD, this.body = {
					eid: e,
					score: t,
					seatId: o
				}
			}
			getPackageBody(e) {
				let t = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.GAME, e);
				return t = Object.assign(t, this.body), s.MSG.SSubKillEnemy.encode(t).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.SSubNewEnemy.decode(e);
				return new i(t.eid, t.score, t.seatId)
			}
		}
		o.default = i, i.HEAD = 6005, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead"
	}],
	SSubLoginGame: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "b35155AYeBKXZXm6QCEPSru", "SSubLoginGame"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto"),
			i = e("../wsProtoConfigBase");
		class a {
			constructor(e, t = 0, o) {
				this.head = a.HEAD, this.body = {
					gameId: e,
					loginCode: t,
					loginMsg: o || (t ? "\u767b\u5f55\u5931\u8d25" : "\u767b\u5f55\u6210\u529f")
				}
			}
			getPackageBody() {
				let e = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.HALL);
				return e = Object.assign(e, this.body), s.MSG.SSubLoginGame.encode(e).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.SSubLoginGame.decode(e);
				return new a(t.gameId, t.loginCode)
			}
		}
		o.default = a, a.HEAD = i.SUB.SSubLoginGame, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead",
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	SSubLoginServer: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "77557GvOrhOSKI3sRmESZGe", "SSubLoginServer"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto"),
			i = e("../wsProtoConfigBase");
		class a {
			constructor(e) {
				this.head = a.HEAD, this.body = {
					userId: e
				}
			}
			getPackageBody() {
				let e = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.HALL);
				return e = Object.assign(e, this.body), s.MSG.SSubLoginServer.encode(e).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.SSubLoginServer.decode(e);
				return new a(t.userId)
			}
		}
		o.default = a, a.HEAD = i.SUB.SSubLoginServer, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead",
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	SSubLogoutGame: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "277f10o+zlIpY+H17T4J/Fj", "SSubLogoutGame"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto"),
			i = e("../wsProtoConfigBase");
		class a {
			constructor() {
				this.head = a.HEAD
			}
			getPackageBody() {
				let e = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.HALL);
				return s.MSG.SSubLogoutGame.encode(e).finish()
			}
			static unPackageMessage(e) {
				return new a
			}
		}
		o.default = a, a.HEAD = i.SUB.SSubLogoutGame, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead",
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	SSubMatchRoom: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "4825dkLrPBF64aMcWQKTKCc", "SSubMatchRoom"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto"),
			i = e("../wsProtoConfigBase");
		class a {
			constructor(e, t, o, n, s) {
				this.head = a.HEAD, this.body = {
					roomId: e,
					userId: t,
					seatI: o,
					roomName: n,
					userName: s
				}
			}
			getPackageBody(e) {
				let t = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.GAME, e);
				return t = Object.assign(t, this.body), s.MSG.SSubMatchRoom.encode(t).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.SSubMatchRoom.decode(e);
				return new a(t.roomId, t.userId, t.seatI, t.roomName, t.userName)
			}
		}
		o.default = a, a.HEAD = i.SUB.SSubMatchRoom, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead",
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	SSubNewEnemy: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "1669atVeo5Fkbz8IweegimQ", "SSubNewEnemy"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto");
		class i {
			constructor(e, t, o, n, s) {
				this.head = i.HEAD, this.body = {
					eid: e,
					x: t,
					y: o,
					time: n,
					hp: s
				}
			}
			getPackageBody(e) {
				let t = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.GAME, e);
				return t = Object.assign(t, this.body), s.MSG.SSubNewEnemy.encode(t).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.SSubNewEnemy.decode(e);
				return new i(t.eid, t.x, t.y, t.time, t.hp)
			}
		}
		o.default = i, i.HEAD = 6002, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead"
	}],
	SSubObGameStart: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "34f9fxvA0NElbppw3H02El8", "SSubObGameStart"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto");
		class i {
			constructor(e, t, o, n, s, a) {
				this.head = i.HEAD, this.body = {
					pUidList: e,
					pSeatList: t,
					pNameList: o,
					pScoreList: n,
					pPosXList: s,
					pPosYList: a
				}
			}
			getPackageBody(e) {
				let t = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.GAME, e);
				return t = Object.assign(t, this.body), s.MSG.SSubObGameStart.encode(t).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.SSubObGameStart.decode(e);
				return new i(t.pUidList, t.pSeatList, t.pNameList, t.pScoreList, t.pPosXList, t
					.pPosYList)
			}
		}
		o.default = i, i.HEAD = 6101, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead"
	}],
	SSubPlaneMove: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "ff031bP47dM845TtgVYeHN/", "SSubPlaneMove"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto");
		class i {
			constructor(e, t, o) {
				this.head = i.HEAD, this.body = {
					seat: e,
					x: t,
					y: o
				}
			}
			getPackageBody(e) {
				let t = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.GAME, e);
				return t = Object.assign(t, this.body), s.MSG.SSubPlaneMove.encode(t).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.SSubPlaneMove.decode(e);
				return new i(t.seat, t.x, t.y)
			}
		}
		o.default = i, i.HEAD = 6001, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead"
	}],
	SSubRushLogin: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "0399bO4uVNH2LkCHZGJWdRk", "SSubRushLogin"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto"),
			i = e("../wsProtoConfigBase");
		class a {
			constructor() {
				this.head = a.HEAD
			}
			getPackageBody() {
				let e = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.HALL);
				return s.MSG.SSubRushLogin.encode(e).finish()
			}
			static unPackageMessage(e) {
				return new a
			}
		}
		o.default = a, a.HEAD = i.SUB.SSubRushLogin, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead",
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	SSubShopBullet: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "b06b61VQA9BUJH8g+Cb+f0c", "SSubShopBullet"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto");
		class i {
			constructor(e) {
				this.head = i.HEAD, this.body = {
					seatI: e
				}
			}
			getPackageBody(e) {
				let t = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.GAME, e);
				return t = Object.assign(t, this.body), s.MSG.SSubShopBullet.encode(t).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.SSubShopBullet.decode(e);
				return new i(t.seatI)
			}
		}
		o.default = i, i.HEAD = 2006, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead"
	}],
	SSubSyncScore: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "c887cEZwV5PD4I3AVio7Hbb", "SSubSyncScore"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto");
		class i {
			constructor(e = [], t = []) {
				this.head = i.HEAD, this.body = {
					seats: e,
					scores: t
				}
			}
			pushSync(e, t) {
				this.body.seats.push(e), this.body.scores.push(t)
			}
			getPackageBody(e) {
				let t = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.GAME, e);
				return t = Object.assign(t, this.body), s.MSG.SSubSyncScore.encode(t).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.SSubSyncScore.decode(e);
				return new i(t.seats, t.scores)
			}
		}
		o.default = i, i.HEAD = 6004, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead"
	}],
	SSubUpdateHostUid: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "d54d4lXzSFHSpgk0OucvnE2", "SSubUpdateHostUid"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto"),
			i = e("../wsProtoConfigBase");
		class a {
			constructor(e) {
				this.head = a.HEAD, this.body = {
					uid: e
				}
			}
			getPackageBody(e) {
				let t = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.GAME, e);
				return t = Object.assign(t, this.body), s.MSG.SSubUpdateHostUid.encode(t).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.SSubUpdateHostUid.decode(e);
				return new a(t.uid)
			}
		}
		o.default = a, a.HEAD = i.SUB.SSubUpdateHostUid, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead",
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	SSubUpdateHurtHp: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "12921i4dvpKSp6L6b0TFVnu", "SSubUpdateHurtHp"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto");
		class i {
			constructor(e, t) {
				this.head = i.HEAD, this.body = {
					eid: e,
					hp: t
				}
			}
			getPackageBody(e) {
				let t = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.GAME, e);
				return t = Object.assign(t, this.body), s.MSG.SSubUpdateHurtHp.encode(t).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.SSubUpdateHurtHp.decode(e);
				return new i(t.eid, t.hp)
			}
		}
		o.default = i, i.HEAD = 6003, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead"
	}],
	SkinConfig: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "4860f47gNFEIrNKI4VVYsvB", "SkinConfig"), Object.defineProperty(o,
		"__esModule", {
			value: !0
		}), o.unLockOneSkinById = o.getOneSkinIsUnlock = o.getOneSkinConfigById = void 0;
		const n = e("../engines/gameEngine");
		let s = null;

		function i() {
			return s || (s = {
				0: {
					id: 0,
					name: "\u66b4\u8d70\u5c0f\u732a",
					getExplain: "<color = #000000>\u9ed8\u8ba4\u76ae\u80a4</color> \n<color = #ff0000>\u521d\u59cb\u8d60\u9001</color>",
					spPath: "pf_00",
					sk: "hm_Zhu",
					skin: "Zhu_01"
				},
				1: {
					id: 1,
					name: "\u53ee\u5f53\u55b5",
					getExplain: "<color = #000000>\u5b8c\u6210\u7b2c2\u5173\u83b7\u5f97</color>",
					spPath: "pf_012",
					sk: "hm_Zhu",
					skin: "Zhu_03"
				},
				2: {
					id: 2,
					name: "\u9ed1\u65e0\u5e38",
					getExplain: "<color = #ff0000>\u5168\u56fd\u9886\u5934\u732a\u83b7\u5f97</color>\n<color =#000000 > (\u6bcf\u65e5\u7b2c\u4e00\u4e2a\u5b8c\u6210\u7b2c\u4e8c\u5173)</color>",
					spPath: "pf_03",
					sk: "hm_WuChang",
					skin: "HeiWuChange"
				},
				3: {
					id: 3,
					name: "\u767d\u65e0\u5e38",
					getExplain: "<color = #ff0000>\u79cb\u540d\u5c71\u732a\u795e\u83b7\u5f97</color>\n<color =#000000 > (\u901a\u5173\u65f6\u95f4\u6700\u77ed)</color>",
					spPath: "pf_01",
					sk: "hm_WuChang",
					skin: "BaiWuChange"
				},
				4: {
					id: 4,
					name: "\u960e\u738b\u7237",
					getExplain: "<color = #ff0000>\u6700\u5f3a\u738b\u8005\u83b7\u5f97</color>\n<color =#000000 > (\u4e0d\u7528\u9053\u5177\u901a\u5173)</color>",
					spPath: "pf_05",
					sk: "hm_YanWang",
					skin: "default"
				},
				5: {
					id: 5,
					name: "\u738b\u8def\u98de",
					getExplain: "<color = #000000>\u7701\u4efd\u699c\u7b2c1</color>",
					spPath: "pf_08",
					sk: "hm_Zhu",
					skin: "Zhu_05"
				},
				6: {
					id: 6,
					name: "\u4e5d\u795e\u5eb5",
					getExplain: "<color = #000000>\u7701\u4efd\u699c\u7b2c2</color>",
					spPath: "pf_06",
					sk: "hm_Zhu",
					skin: "Zhu_06"
				},
				7: {
					id: 7,
					name: "\u5929\u7ebf\u8d1d\u8d1d",
					getExplain: "<color = #000000>\u7701\u4efd\u699c\u7b2c3</color>",
					spPath: "pf_014",
					sk: "hm_Zhu",
					skin: "Zhu_02"
				}
			}), s
		}

		function a(e) {
			let t = n.services().userSrv.getUserHasSkin();
			return "number" == typeof e && (e = String(e)), t.includes(e)
		}
		o.default = i, o.getOneSkinConfigById = function(e) {
			return i()[e]
		}, o.getOneSkinIsUnlock = a, o.unLockOneSkinById = function(e) {
			if (!a(e)) {
				let t = n.services().userSrv.getUserHasSkin();
				return "number" == typeof e && (e = String(e)), t.push(e), n.default.getServices()
					.userSrv.setUserHasSkin(t), !0
			}
			return !1
		}, cc._RF.pop()
	}, {
		"../engines/gameEngine": "gameEngine"
	}],
	SkinExplainPage: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "b375eD/B3tGs6Pcm4L0YK81", "SkinExplainPage");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../Config/SkinConfig"),
			i = e("../../engines/gameEngine"),
			{
				ccclass: a,
				property: r
			} = cc._decorator;
		let c = class extends cc.Component {
			constructor() {
				super(...arguments), this.content = null, this.skinSp = null, this.skinNameLb =
					null, this.skinExplainLb = null, this.useBtn = null, this.data = null
			}
			start() {
				this.open()
			}
			setData(e) {
				this.data = e, this.updatePage()
			}
			updatePage() {
				if (!this.data) return;
				let e = this.data.name,
					t = this.data.getExplain,
					o = s.getOneSkinIsUnlock(this.data.id);
				this.skinNameLb.string = o ? e : "???", this.skinExplainLb.string = t, this
					.skinSp.color = o ? cc.color(255, 255, 255) : cc.color(0, 0, 0), this
					.updateBtn(), this.loadSp()
			}
			updateBtn() {
				let e = s.getOneSkinIsUnlock(this.data.id),
					t = this.useBtn.getChildByName("unlock"),
					o = this.useBtn.getChildByName("lock");
				t.active = e, o.active = !e
			}
			loadSp() {
				this.data && i.default.getModules().uiControlModule.getGameBundle().load(
					`Image/SkinSp/${this.data.spPath}`, cc.SpriteFrame, (e, t) => {
						e ? console.log("\u52a0\u8f7d\u56fe\u7247\u51fa\u9519") : this
							.skinSp.getComponent(cc.Sprite).spriteFrame = t
					})
			}
			open() {
				this.node.opacity = 0, cc.tween(this.node).to(.25, {
					opacity: 255
				}).start(), cc.tween(this.content).delay(.2).call(() => {}).to(.3, {
					scale: 1
				}, {
					easing: "backOut"
				}).start()
			}
			close() {
				this.node.isValid && cc.tween(this.node).to(.1, {
					opacity: 0
				}).call(() => {
					this.node.destroy(), this.node.removeFromParent()
				}).start()
			}
			onBtnConfirm() {
				this.data ? (s.getOneSkinIsUnlock(this.data.id) && i.services().userSrv
					.getUserUseSkin() != this.data.id && (i.default.getModules()
						.uiControlModule.showMessageBox(
							"\u4f7f\u7528\u76ae\u80a4\u6210\u529f"), i.default.getServices()
						.userSrv.setUserUseSkin(this.data.id), i.default.getModules()
						.gameHttpModule.setUserSkin(this.data.id), i.default.emit(
							"skinitemupdataitem")), this.close()) : this.close()
			}
		};
		n([r({
			type: cc.Node
		})], c.prototype, "content", void 0), n([r({
			type: cc.Node,
			displayName: "\u76ae\u80a4\u56fe\u7247"
		})], c.prototype, "skinSp", void 0), n([r({
			type: cc.Label,
			displayName: "\u76ae\u80a4\u540d\u5b57\u6587\u672c"
		})], c.prototype, "skinNameLb", void 0), n([r({
			type: cc.RichText,
			displayName: "\u76ae\u80a4\u63cf\u8ff0\u6587\u672c"
		})], c.prototype, "skinExplainLb", void 0), n([r({
			type: cc.Node,
			displayName: "\u4f7f\u7528\u6309\u94ae"
		})], c.prototype, "useBtn", void 0), c = n([a], c), o.default = c, cc._RF.pop()
	}, {
		"../../Config/SkinConfig": "SkinConfig",
		"../../engines/gameEngine": "gameEngine"
	}],
	SkinRewardPage: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "58a01TdyQpKforkjhyAsWoY", "SkinRewardPage");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../Config/SkinConfig"),
			i = e("../../engines/gameEngine"),
			{
				ccclass: a,
				property: r
			} = cc._decorator;
		let c = class extends cc.Component {
			constructor() {
				super(...arguments), this.content = null, this.skinNode = null, this.lb_name =
					null, this.BGcircle = null, this.confirmFun = null, this.data = null
			}
			start() {
				let e = cc.tween(this.BGcircle).by(3, {
					angle: 360
				});
				cc.tween(this.BGcircle).repeatForever(e).start(), this.open()
			}
			setData(e, t) {
				this.data = e, s.unLockOneSkinById(e.id), this.confirmFun = t, this.updatePage()
			}
			updatePage() {
				this.data && (this.lb_name.string = this.data.name, this.loadSp())
			}
			loadSp() {
				this.data && i.default.getModules().uiControlModule.getGameBundle().load(
					`Image/SkinSp/${this.data.spPath}`, cc.SpriteFrame, (e, t) => {
						e ? console.log("\u52a0\u8f7d\u56fe\u7247\u51fa\u9519") : this
							.skinNode.getComponent(cc.Sprite).spriteFrame = t
					})
			}
			open() {
				this.node.opacity = 0, cc.tween(this.node).to(.25, {
					opacity: 255
				}).start(), cc.tween(this.content).delay(.2).call(() => {}).to(.3, {
					scale: 1
				}, {
					easing: "backOut"
				}).start()
			}
			close() {
				this.node.isValid && cc.tween(this.node).to(.1, {
					opacity: 0
				}).call(() => {
					this.node.destroy(), this.node.removeFromParent()
				}).start()
			}
			onBtnConfirm() {
				this.confirmFun && this.confirmFun(), this.close()
			}
		};
		n([r({
			type: cc.Node
		})], c.prototype, "content", void 0), n([r({
			type: cc.Node,
			displayName: "\u76ae\u80a4\u8282\u70b9"
		})], c.prototype, "skinNode", void 0), n([r({
			type: cc.Label,
			displayName: "\u76ae\u80a4\u540d\u5b57\u6587\u672c"
		})], c.prototype, "lb_name", void 0), n([r({
			type: cc.Node,
			displayName: "\u80cc\u666f\u5708"
		})], c.prototype, "BGcircle", void 0), c = n([a], c), o.default = c, cc._RF.pop()
	}, {
		"../../Config/SkinConfig": "SkinConfig",
		"../../engines/gameEngine": "gameEngine"
	}],
	SubBase: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "608c1r5RHtGGInKH5Mxa9MX", "SubBase"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const n = e("../wsProtoConfigBase");
		class s {
			constructor() {
				this.head = s.HEAD
			}
			getPackageBody() {
				return null
			}
			static unPackageMessage(e) {
				return new s
			}
		}
		o.default = s, s.HEAD = n.SUB.SubBase, cc._RF.pop()
	}, {
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	SyncMessage: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "22c11z5Ew1Mk4LV7VpzteLK", "SyncMessage"), Object.defineProperty(o,
		"__esModule", {
			value: !0
		});
		const n = e("../webSocketProtoHead"),
			s = e("../../proto/proto"),
			i = e("../wsProtoConfigBase");
		class a {
			constructor(e, ...t) {
				this.head = a.HEAD, this.body = {
					fps: e,
					syncs: t
				}
			}
			getPackageBody() {
				let e = n.$WS.getHallGameProtoHeadObject(this.head, n.$WS.ProtoHead.FPS_SYNC);
				return e = Object.assign(e, this.body), s.MSG.SyncMessage.encode(e).finish()
			}
			static unPackageMessage(e) {
				const t = s.MSG.SyncMessage.decode(e);
				return new a(t.fps, ...t.syncs)
			}
		}
		o.default = a, a.HEAD = i.SUB.SyncMessage, cc._RF.pop()
	}, {
		"../../proto/proto": "proto",
		"../webSocketProtoHead": "webSocketProtoHead",
		"../wsProtoConfigBase": "wsProtoConfigBase"
	}],
	UIPrams: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "acb8bTSCt9PaoEb6mTt67wM", "UIPrams"), Object.defineProperty(o, "__esModule", {
			value: !0
		}), cc._RF.pop()
	}, {}],
	addUserProp: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "8e0cctcEbZO37/60kD776BI", "addUserProp");
		var n = this && this.__decorate || function(e, t, o, n) {
				var s, i = arguments.length,
					a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
					.decorate(e, t, o, n);
				else
					for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
						t, o, a) : s(t, o)) || a);
				return i > 3 && a && Object.defineProperty(t, o, a), a
			},
			s = this && this.__awaiter || function(e, t, o, n) {
				return new(o || (o = Promise))(function(s, i) {
					function a(e) {
						try {
							c(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function r(e) {
						try {
							c(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function c(e) {
						var t;
						e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
							e) {
							e(t)
						})).then(a, r)
					}
					c((n = n.apply(e, t || [])).next())
				})
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const i = e("../../engines/gameEngine"),
			a = e("../../engines/services/userContent/userInterface"),
			r = e("../../engines/libs/data_control"),
			c = e("../../engines/modules/uiModule/PageBase"),
			{
				ccclass: l,
				property: d
			} = cc._decorator;
		let u = class extends c.default {
			constructor() {
				super(...arguments), this.detail = null, this.title = null, this.showNum = null,
					this.spIcon = null, this.spfIcons = [], this.m_prams = null, this
					.m_propType = null, this.m_propCount = null
			}
			OnPageOpen(e) {
				const t = Object.create(null, {
					OnPageOpen: {
						get: () => super.OnPageOpen
					}
				});
				return s(this, void 0, void 0, function*() {
					t.OnPageOpen.call(this, e), this.setData(this.m_prams.propType, this
						.m_prams.propNumber), this.initView()
				})
			}
			setData(e, t) {
				this.m_propType = e, this.m_propCount = t
			}
			initView() {
				null != this.m_propType ? (this.showNum.string =
					`\xd7${r.default.getNumberFormat(this.m_propCount)}`, this.spIcon
					.spriteFrame = this.spfIcons[this.m_propType], this.title.string = [
						"\u83b7\u53d6\u91d1\u5e01", "\u83b7\u53d6\u4f53\u529b",
						"\u83b7\u53d6\u94bb\u77f3"
					][this.m_propType]) : console.error(
					"#505131 \u6dfb\u52a0\u7528\u6237\u9053\u5177\u9519\u8bef")
			}
			onBtnClose() {
				this.ClosePage()
			}
			onBtnGet() {
				let e = "\u672a\u5b9a\u4e49\u83b7\u53d6\u9053\u5177\u8bf4\u660e",
					t = null,
					o = null;
				switch (this.m_propType) {
					case a.REWARD_TYPE.COIN:
						t = () => {
							i.services().userSrv.setCoins(this.m_propCount, !0)
						}, o = a.REWARD_TYPE.COIN, e = "\u83b7\u53d6\u91d1\u5e01";
						break;
					case a.REWARD_TYPE.POWER:
						t = () => {
							i.services().userSrv.addPowerOfVideo()
						}, o = a.REWARD_TYPE.POWER, e = "\u83b7\u53d6\u4f53\u529b";
						break;
					case a.REWARD_TYPE.DIAMOND:
						t = () => {
							console.warn("#841801 \u94bb\u77f3\u672a\u5b9a\u4e49")
						}, o = a.REWARD_TYPE.DIAMOND, e = "\u83b7\u53d6\u94bb\u77f3";
						break;
					default:
						throw "#900224 \u672a\u77e5\u5b9a\u4e49\u9053\u5177"
				}
				i.services().miniGameSrv.getAppApiInstance().loadAndShowVideoAd(() => {
					t(), i.modules().uiControlModule.showGetRewarded(o, this
						.m_propCount)
				}, null, null, e)
			}
		};
		n([d(cc.Node)], u.prototype, "detail", void 0), n([d(cc.Label)], u.prototype, "title", void 0),
			n([d(cc.Label)], u.prototype, "showNum", void 0), n([d(cc.Sprite)], u.prototype, "spIcon",
				void 0), n([d([cc.SpriteFrame])], u.prototype, "spfIcons", void 0), u = n([l], u), o
			.default = u, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"../../engines/libs/data_control": "data_control",
		"../../engines/modules/uiModule/PageBase": "PageBase",
		"../../engines/services/userContent/userInterface": "userInterface"
	}],
	apiQuery: [function(e, t, o) {
		"use strict";
		var n;
		cc._RF.push(t, "956e3qrPE5Cw4tbhkaM1nfo", "apiQuery"), Object.defineProperty(o, "__esModule", {
				value: !0
			}), o.ApiTaoBaoMethodRefund = o.ApiTaoBaoMethod = o.ApiPlusDeleteOne = o
			.ApiQueryLevelLevel = o.ApiExtraJsonChange = o.ApiQueryMeLevels = o.ApiPlayerLevel = o
			.ApiSetLevelRelease = o.ApiSetMaster = o.ApiAuditQueryLevels = o.ApiQueryLevelOfUuid = o
			.ApiCreateLevel = o.ApiAqH5LevelList = o.ApiTaoBaoLogin = o.ApiH5UserLogin = o
			.ApiMasterCheatLevel = o.ApiMasterLogin = o.ApiKingSheep = o.ApiGetMeProvinceRank = o
			.ApiSetMeSpin = o.ApiRankUserListNum = o.ApiRankListNum = o.ApiCommitRank = o.AWARD_SPIN = o
			.ApiTTUserLogin = o.SHEEP_API = o.ApiRank = o.ApiMethod = void 0,
			function(e) {
				e[e.GET = 0] = "GET", e[e.POST = 1] = "POST", e[e.SEND = 2] = "SEND"
			}(n = o.ApiMethod || (o.ApiMethod = {})), o.ApiRank = {
				head: "/rankList",
				method: n.POST,
				body: null,
				response: null
			}, o.SHEEP_API = "/sheep", o.ApiTTUserLogin = {
				head: `${o.SHEEP_API}/ttLogin`,
				method: n.POST,
				body: null,
				res: null
			},
			function(e) {
				e[e.NULL = 0] = "NULL", e[e.LEVEL_SUCCESS = 1] = "LEVEL_SUCCESS", e[e.FAST_SUCCESS =
					2] = "FAST_SUCCESS", e[e.MIN_TIME_SUCCESS = 3] = "MIN_TIME_SUCCESS", e[e
						.KINE_SUCCESS = 4] = "KINE_SUCCESS", e[e.PROVINCE_TOP1 = 5] = "PROVINCE_TOP1",
					e[e.PROVINCE_TOP2 = 6] = "PROVINCE_TOP2", e[e.PROVINCE_TOP3 = 7] = "PROVINCE_TOP3"
			}(o.AWARD_SPIN || (o.AWARD_SPIN = {})), o.ApiCommitRank = {
				head: `${o.SHEEP_API}/commitRank`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiRankListNum = {
				head: `${o.SHEEP_API}/rankListNum`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiRankUserListNum = {
				head: `${o.SHEEP_API}/rankUserListNum`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiSetMeSpin = {
				head: `${o.SHEEP_API}/setSpin`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiGetMeProvinceRank = {
				head: `${o.SHEEP_API}/getMeProRank`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiKingSheep = {
				head: `${o.SHEEP_API}/kingSheep`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiMasterLogin = {
				head: `${o.SHEEP_API}/masterLogin`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiMasterCheatLevel = {
				head: `${o.SHEEP_API}/masterCheatLevel`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiH5UserLogin = {
				head: `${o.SHEEP_API}/h5Login`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiTaoBaoLogin = {
				head: `${o.SHEEP_API}/taoBaoLogin`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiAqH5LevelList = {
				head: `${o.SHEEP_API}/levelList`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiCreateLevel = {
				head: `${o.SHEEP_API}/createLevel`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiQueryLevelOfUuid = {
				head: `${o.SHEEP_API}/queryLevelNum`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiAuditQueryLevels = {
				head: `${o.SHEEP_API}/auditQueryLevels`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiSetMaster = {
				head: `${o.SHEEP_API}/master20200606`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiSetLevelRelease = {
				head: `${o.SHEEP_API}/auditSetLevelRelease`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiPlayerLevel = {
				head: `${o.SHEEP_API}/playerLevel`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiQueryMeLevels = {
				head: `${o.SHEEP_API}/queryMeLevels`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiExtraJsonChange = {
				head: `${o.SHEEP_API}/changeExtraJson`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiQueryLevelLevel = {
				head: `${o.SHEEP_API}/queryLevelList`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiPlusDeleteOne = {
				head: `${o.SHEEP_API}/addLessOne`,
				method: n.POST,
				body: null,
				res: null
			}, o.ApiTaoBaoMethod = {
				head: `${o.SHEEP_API}/taoBao`,
				method: n.POST,
				body: {},
				res: {}
			}, o.ApiTaoBaoMethodRefund = {
				head: `${o.SHEEP_API}/taoBaoRefund`,
				method: n.POST,
				body: {},
				res: {}
			}, cc._RF.pop()
	}, {}],
	attention: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "77650wOFTxKIoo8+mVTrBgv", "attention");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../engines/configs/gameConfig"),
			i = e("../../engines/gameEngine"),
			{
				ccclass: a,
				property: r
			} = cc._decorator;
		let c = class extends cc.Component {
			onEnable() {
				if (window.tt && 1 == s.default.DOUYIN_YUMAI) {
					let e = null,
						t = this;
					window.tt.getSystemInfo({
						success: o => {
							"Douyin" != (e = o.appName) && (t.node.active = !1)
						},
						fail: () => {
							console.log("getSystemInfo \u8c03\u7528\u5931\u8d25"), t
								.node.active = !1
						}
					})
				} else this.node.active = !1
			}
			OnClickAttention() {
				i.default.getManagers().soundMgr.playSound("anNiu").then(), window.tt && window
					.tt.openAwemeUserProfile()
			}
		};
		c = n([a], c), o.default = c, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine"
	}],
	blockManager: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "9dc93yOAQ5OioUzVpJtZYj4", "blockManager");
		var n, s = this && this.__decorate || function(e, t, o, n) {
				var s, i = arguments.length,
					a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
					.decorate(e, t, o, n);
				else
					for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
						t, o, a) : s(t, o)) || a);
				return i > 3 && a && Object.defineProperty(t, o, a), a
			},
			i = this && this.__awaiter || function(e, t, o, n) {
				return new(o || (o = Promise))(function(s, i) {
					function a(e) {
						try {
							c(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function r(e) {
						try {
							c(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function c(e) {
						var t;
						e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
							e) {
							e(t)
						})).then(a, r)
					}
					c((n = n.apply(e, t || [])).next())
				})
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const a = e("../../../engines/components/comSpSkeleton"),
			r = e("../../../engines/gameEngine"),
			c = e("../levelConfig/levelConfig1"),
			l = e("../normalMode"),
			d = e("../prefab/block"),
			u = e("../prefab/blockRotate"),
			{
				ccclass: h,
				property: g
			} = cc._decorator;
		let p = n = class extends cc.Component {
			constructor() {
				super(...arguments), this.blockPrefab = null, this.nodePosArea = [cc.v2(-279, -
						390), cc.v2(-185, -390), cc.v2(-91, -390), cc.v2(3, -390), cc.v2(97,
						-390), cc.v2(191, -390), cc.v2(285, -390)], this.curUsedNodes = [], this
					.isHard = !1, this.allBlockNum = 0, this.allBlockNodes = [], this
					.lastBlock = null, this.canDestory = !1, this.speed = 2e3, this.blockRoot =
					null, this.blockRoot2 = null, this.blockRootDui = null, this.ef_xiaochu =
					null, this.ef_zhuanPai = null, this.spiritFrameMap = [], this
					.curBlockIndexList = []
			}
			restart() {
				for (let e = 0; e < this.curUsedNodes.length; e++) this.curUsedNodes[e].node
					.destroy();
				this.curUsedNodes = [], this.isHard = !1, this.allBlockNum = 0, this
					.allBlockNodes = [], this.lastBlock = null, this.canDestory = !1, this
					.blockRoot.removeAllChildren(), this.blockRoot2.removeAllChildren(), this
					.blockRootDui.removeAllChildren(), this.blockRoot2.width = cc.winSize.width,
					this.blockRoot2.height = cc.winSize.height, this.blockRoot2.x = cc.winSize
					.width, this.curBlockIndexList = []
			}
			onLoad() {
				n._instance = this
			}
			start() {
				for (let e of this.nodePosArea) e.y = e.y - 60;
				this.ef_xiaochu = this.node.getChildByName("ef_xiaochu"), this.ef_zhuanPai =
					this.node.getChildByName("sc_Pai"), this.blockRoot = this.node
					.getChildByName("blocksRoot"), this.blockRoot2 = this.node.getChildByName(
						"blocksRoot2"), this.blockRootDui = this.node.getChildByName(
						"blocksRootDui"), this.blockRoot2.width = cc.winSize.width, this
					.blockRoot2.height = cc.winSize.height, this.blockRoot2.x = cc.winSize
					.width, this.initBlock()
			}
			loadImg(e, t) {
				return i(this, void 0, void 0, function*() {
					this.spiritFrameMap[e] ? t.spriteFrame = this.spiritFrameMap[e] :
						new Promise(o => i(this, void 0, void 0, function*() {
							r.default.getManagers().gameMgr.getCurrMode().bundle
								.load("res/blockImg/" + e, cc.SpriteFrame, (n,
									s) => {
									n ? console.error(
										"#85 \u9519\u8bef\u7684\u56fe\u7247"
										) : (this.spiritFrameMap[e] = s,
										t.spriteFrame = this
										.spiritFrameMap[e], o(s))
								})
						}))
				})
			}
			startHard() {
				this.isHard = !0, this.curBlockIndexList = [], this.initBlock()
			}
			checkCanClick() {
				return this.curUsedNodes.length < 7
			}
			initBlock() {
				this.curUsedNodes = [], this.curBlockIndexList = [];
				let e = c.default.BLOCK_NUM,
					t = c.default.BLOCK_CENG,
					o = c.default.SPECAIL_BLOCKS,
					n = 1;
				this.isHard && (e = c.default.BLOCK_NUM_HARD, t = c.default.BLOCK_CENG_HARD, o =
					c.default.SPECAIL_BLOCKS_HARD, n = 2);
				for (let s = t - 1; s >= 0; s--) {
					let t = c.default["LEVEL_CARD_" + s];
					this.isHard && (t = c.default["LEVEL_CARD_HARD_" + s]);
					let i = [];
					for (let r = 0; r < t.length; r++) {
						let c = cc.instantiate(this.blockPrefab),
							l = cc.v2(t[r].x, t[r].y);
						this.isHard && (r == t.length - 2 && s > 11 && (l.y = l.y - 110), r == t
								.length - 1 && s > 11 && (l.y = l.y - 110)), c.setPosition(l), c
							.getComponent(d.default).blockZindex = s, c.zIndex = s;
						for (let e = 0; e < o.length; e++)
							if (o[e].x == t[r].x && o[e].y == t[r].y) {
								c.getComponent(d.default).isSpecial = !0;
								let e = cc.instantiate(this.ef_zhuanPai);
								e.active = !0, c.addChild(e), e.getComponent(a.default)
									.playAnimation("animation").start(!0), this.setTimeOut(
								() => {
										e.active = !1, e.removeFromParent()
									}, n);
								break
							} this.isHard ? c.setParent(this.blockRoot2) : c.setParent(this
							.blockRoot);
						let h = Math.floor(Math.random() * e.length);
						if (this.curBlockIndexList[h])
							for (this.curBlockIndexList[h] += 1; this.curBlockIndexList[h] > e[
									h] || !e[h];) this.curBlockIndexList[h] -= 1, h = Math
								.floor(Math.random() * e.length), this.curBlockIndexList[h] +=
								1;
						else
							for (this.curBlockIndexList[h] = 1; this.curBlockIndexList[h] > e[
								h] || !e[h];) this.curBlockIndexList[h] -= 1, h = Math.floor(
									Math.random() * e.length), this.curBlockIndexList[h] ? this
								.curBlockIndexList[h] += 1 : this.curBlockIndexList[h] = 1;
						c.getComponent(d.default).blockIndex = h, c.getComponent(u.default)
							.target = this.blockRoot, this.allBlockNum += 1, this.isHard && this
							.allBlockNodes.push(c), i.push(h)
					}
					console.log("\u7b2c" + s + "\u5c42:", i)
				}
				this.isHard && cc.tween(this.blockRoot2).to(1, {
					x: 0
				}, {
					easing: "sineOut"
				}).call(() => {
					for (let e = 0; e < this.allBlockNodes.length; e++) this
						.allBlockNodes[e].setParent(this.blockRoot);
					this.allBlockNodes = []
				}).start()
			}
			setThreeCardBack() {
				let e = [];
				e = this.curUsedNodes.splice(0, 3);
				let t = this.blockRootDui;
				for (let o = 0; o < e.length; o++) {
					let n = e[o].node.getPosition().sub(cc.v2(94 * o - 94, -280)).len() / this
						.speed;
					cc.tween(e[o].node).to(n, {
						x: 94 * o - 94,
						y: -280
					}).call(() => {
						e[o].node.setParent(t), e[o].node.getComponent(d.default)
							.isInArea = !1, e[o].node.getComponent(d.default)
							.setIsCanTouch(!0), e[o].node.getComponent(d.default)
							.prePos = cc.v2(94 * o - 94, -280), e[o].node.getComponent(d
								.default).isInDui = !0, e[o].node.getComponent(u
								.default).target = null
					}).start()
				}
				for (let o = 0; o < this.curUsedNodes.length; o++) {
					let e = this.nodePosArea[o],
						t = this.curUsedNodes[o].node.getPosition().sub(this.lastBlock.prePos)
						.len() / this.speed;
					cc.tween(this.curUsedNodes[o].node).to(t, {
						x: e.x,
						y: e.y
					}).start()
				}
				return e.length > 0
			}
			setLastCardBack() {
				let e = !1;
				if (null != this.lastBlock) {
					e = !0, this.curUsedNodes.splice(this.curUsedNodes.indexOf(this.lastBlock),
						1);
					let t = this.lastBlock.node.getPosition().sub(this.lastBlock.prePos).len() /
						this.speed;
					cc.tween(this.lastBlock.node).to(t, {
						x: this.lastBlock.prePos.x,
						y: this.lastBlock.prePos.y
					}).call(() => {
						this.lastBlock.node.getComponent(d.default).isInDui ? (this
								.lastBlock.node.getComponent(u.default).target = null,
								this.lastBlock.node.setParent(this.blockRootDui)) : (
								this.lastBlock.node.getComponent(u.default).target =
								this.blockRoot, this.lastBlock.node.setParent(this
									.blockRoot)), this.lastBlock.node.getComponent(d
								.default).isInArea = !1, this.lastBlock.node
							.getComponent(d.default).setIsCanTouch(!0)
					}).start()
				}
				return e
			}
			resetCards() {
				let e = [],
					t = this.blockRoot;
				this.curUsedNodes.forEach(e => {
					e.isRotating = !0
				}), this.blockRootDui.children.forEach(e => {
					e.getComponent(d.default).isRotating = !0
				});
				for (let o = t.children.length - 1; o >= 0; o--) {
					let n = t.children[o].getComponent(d.default).blockIndex;
					e[n] ? e[n] += 1 : e[n] = 1, t.children[o].getComponent(d.default)
						.isRotating = !0, this.setTimeOut(() => {
							t.children[o].getComponent(u.default).run()
						}, .02 * (t.children.length - o))
				}
				r.managers().soundMgr.playSound("washCard"), this.setTimeOut(() => {
					for (let e = t.children.length - 1; e >= 0; e--) this.setTimeOut(
					() => {
							t.children[e].getComponent(u.default).stop();
							let o = t.children[e].getComponent(d.default);
							if (t.children[e].setPosition(o.prePos), 0 == e) {
								cc.log("\u91cd\u7f6e\u724c\u53ef\u70b9\u51fb");
								for (let e = t.children.length - 1; e >= 0; e--) t
									.children[e].getComponent(d.default)
									.isRotating = !1;
								this.curUsedNodes.forEach(e => {
									e.isRotating = !0
								}), this.blockRootDui.children.forEach(e => {
									e.getComponent(d.default).isRotating = !
										1
								})
							}
						}, .02 * (t.children.length - e));
					this.curBlockIndexList = [];
					for (let o = 0; o < t.children.length; o++) {
						let n = Math.floor(Math.random() * e.length);
						if (this.curBlockIndexList[n])
							for (this.curBlockIndexList[n] += 1; this.curBlockIndexList[
									n] > e[n] || !e[n];) this.curBlockIndexList[n] -= 1,
								n = Math.floor(Math.random() * e.length), this
								.curBlockIndexList[n] += 1;
						else
							for (this.curBlockIndexList[n] = 1; this.curBlockIndexList[
									n] > e[n] || !e[n];) this.curBlockIndexList[n] -= 1,
								n = Math.floor(Math.random() * e.length), this
								.curBlockIndexList[n] ? this.curBlockIndexList[n] += 1 :
								this.curBlockIndexList[n] = 1;
						t.children[o].getComponent(d.default).blockIndex = n, t
							.children[o].getComponent(d.default).loadBlockImg()
					}
				}, 2)
			}
			resetCardWithoutAnim() {
				let e = [],
					t = this.blockRoot;
				for (let o = t.children.length - 1; o >= 0; o--) {
					let n = t.children[o].getComponent(d.default).blockIndex;
					e[n] ? e[n] += 1 : e[n] = 1
				}
				this.curBlockIndexList = [];
				for (let o = 0; o < t.children.length; o++) {
					let n = Math.floor(Math.random() * e.length);
					if (this.curBlockIndexList[n])
						for (this.curBlockIndexList[n] += 1; this.curBlockIndexList[n] > e[n] ||
							!e[n];) this.curBlockIndexList[n] -= 1, n = Math.floor(Math
						.random() * e.length), this.curBlockIndexList[n] += 1;
					else
						for (this.curBlockIndexList[n] = 1; this.curBlockIndexList[n] > e[n] ||
							!e[n];) this.curBlockIndexList[n] -= 1, n = Math.floor(Math
							.random() * e.length), this.curBlockIndexList[n] ? this
							.curBlockIndexList[n] += 1 : this.curBlockIndexList[n] = 1;
					t.children[o].getComponent(d.default).blockIndex = n, t.children[o]
						.getComponent(d.default).loadBlockImg()
				}
			}
			addNodeToArea(e) {
				this.lastBlock = e;
				let t = -1,
					o = 0;
				e.node.getComponent(u.default).target = null;
				for (let n = 0; n < this.curUsedNodes.length; n++) this.curUsedNodes[n]
					.blockIndex == e.blockIndex && (t = n, o += 1);
				if (t >= 0) {
					for (let e = t + 1; e < this.curUsedNodes.length; e++) {
						let t = this.nodePosArea[e + 1];
						this.curUsedNodes[e].isAriveArea || (cc.log("\u505c\u7528\u7f13\u52a8",
							this.curUsedNodes[e].blockIndex), cc.Tween.stopAllByTarget(
							this.curUsedNodes[e].node));
						let o = this.curUsedNodes[e].node.getPosition().sub(t).len() / this
							.speed;
						cc.tween(this.curUsedNodes[e].node).to(o, {
							x: t.x,
							y: t.y
						}).start()
					}
					this.curUsedNodes.splice(t + 1, 0, e);
					let n = this.nodePosArea[t + 1],
						s = e.node.getPosition().sub(n).len() / this.speed;
					cc.tween(e.node).call(() => {
						o >= 2 ? (this.canDestory = !0, this.setTimeOut(() => {
							this.checkArea(e.blockIndex)
						}, s + .1)) : (this.canDestory = !1, this.setTimeOut(() => {
							this.checkArea()
						}, s + .1))
					}).to(s, {
						x: n.x,
						y: n.y
					}, {
						easing: "quadOut"
					}).call(() => {
						e.isAriveArea = !0
					}).start()
				} else {
					this.curUsedNodes.push(e);
					let t = this.nodePosArea[this.curUsedNodes.length - 1],
						o = e.node.getPosition().sub(t).len() / this.speed;
					cc.tween(e.node).call(() => {
						this.setTimeOut(() => {
							this.checkArea()
						}, o + .1)
					}).to(o, {
						x: t.x,
						y: t.y
					}).call(() => {
						e.isAriveArea = !0
					}).start()
				}
			}
			checkArea(e) {
				if (e || 0 == e) {
					let t = -1,
						o = 0;
					for (let n = 0; n < this.curUsedNodes.length && (this.curUsedNodes[n]
							.blockIndex != e || (t = n, 3 != (o += 1))); n++);
					if (3 == o) {
						let e = this.curUsedNodes[t - 2].node,
							o = this.curUsedNodes[t - 1].node,
							n = this.curUsedNodes[t].node,
							s = Math.floor(3 * Math.random() + 1),
							i = cc.instantiate(this.ef_xiaochu);
						i.active = !0, i.setParent(this.node), i.setPosition(e.getPosition()), i
							.getComponent(a.default).playAnimation("0" + s).start(!1)
							.onComplete(1, () => {
								i.removeFromParent()
							}), s = Math.floor(3 * Math.random() + 1);
						let c = cc.instantiate(this.ef_xiaochu);
						c.active = !0, c.setParent(this.node), c.setPosition(o.getPosition()), c
							.getComponent(a.default).playAnimation("0" + s).start(!1)
							.onComplete(1, () => {
								c.removeFromParent()
							}), s = Math.floor(3 * Math.random() + 1);
						let u = cc.instantiate(this.ef_xiaochu);
						return u.active = !0, u.setParent(this.node), u.setPosition(n
								.getPosition()), u.getComponent(a.default).playAnimation("0" +
								s).start(!1).onComplete(1, () => {
								u.removeFromParent()
							}), cc.tween(e).to(.1, {
								scale: .1
							}).call(() => {}).start(), cc.tween(o).to(.1, {
								scale: .1
							}).call(() => {}).start(), cc.tween(n).to(.1, {
								scale: .1
							}).call(() => {}).start(), r.managers().soundMgr.playSound("kill"),
							void cc.tween(this.node).delay(.1).call(() => {
								this.curUsedNodes.splice(this.curUsedNodes.indexOf(e
										.getComponent(d.default)), 3).forEach(e => {
										e.node.removeFromParent()
									}), e.removeFromParent(), o.removeFromParent(), n
									.removeFromParent(), this.canDestory = !1;
								for (let e = 0; e < this.curUsedNodes.length; e++) {
									let t = this.nodePosArea[e];
									this.curUsedNodes[e].isAriveArea || (cc.log(
											"\u505c\u7528\u7f13\u52a8", this
											.curUsedNodes[e].blockIndex), cc.Tween
										.stopAllByTarget(this.curUsedNodes[e].node));
									let o = this.curUsedNodes[e].node.getPosition().sub(t)
										.len() / this.speed;
									cc.tween(this.curUsedNodes[e].node).to(o, {
										x: t.x,
										y: t.y
									}).start()
								}
								if (this.allBlockNum = Math.max(this.allBlockNum - 3, 0),
									console.log("\u80dc\u5229\u6761\u4ef6:", this
										.allBlockNum, this.curUsedNodes.length), 0 == this
									.allBlockNum) return this.curUsedNodes.forEach(e => {
									e.node.removeFromParent()
								}), void l.default._instance.gameWin(this.isHard);
								this.lastBlock = null
							}).start()
					}
				}
				this.canDestory ? cc.log(
						"\u53ef\u4ee5\u6d88\u9664\uff0c\u505c\u6b62\u65b9\u6cd5\uff0c\u4ea4\u7ed9\u53ef\u6d88\u9664\u7684\u5904\u7406"
						) : 7 == this.curUsedNodes.length && this.isHard && l.default._instance
					.gameLose()
			}
			setTimeOut(e, t) {
				cc.tween(this.node).delay(t).call(e).start()
			}
		};
		s([g({
			type: cc.Prefab,
			displayName: "\u683c\u5b50\u9884\u5236\u4f53"
		})], p.prototype, "blockPrefab", void 0), p = n = s([h], p), o.default = p, cc._RF.pop()
	}, {
		"../../../engines/components/comSpSkeleton": "comSpSkeleton",
		"../../../engines/gameEngine": "gameEngine",
		"../levelConfig/levelConfig1": "levelConfig1",
		"../normalMode": "normalMode",
		"../prefab/block": "block",
		"../prefab/blockRotate": "blockRotate"
	}],
	blockRotate: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "21f0cOQkfNEVK+joBB37oq4", "blockRotate");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.Axis = void 0;
		const {
			ccclass: s,
			property: i
		} = cc._decorator;
		var a;
		(function(e) {
			e[e.PositiveX = 0] = "PositiveX", e[e.PositiveY = 1] = "PositiveY", e[e.NegativeX = 2] =
				"NegativeX", e[e.NegativeY = 3] = "NegativeY"
		})(a = o.Axis || (o.Axis = {}));
		let r = class extends cc.Component {
			constructor() {
				super(...arguments), this.target = null, this.clockwise = !0, this
					.timePerRound = 10, this.faceToTarget = !1, this.faceAxis = a.NegativeY,
					this.autoStart = !1, this.angle = 0, this.radius = 0, this.isRotating = !1
			}
			run(e, t, o, n, s) {
				e && (this.target = e), t && (this.clockwise = t), o && (this.timePerRound = o),
					n && (this.faceToTarget = n), s && (this.faceAxis = s), this.target ? (this
						.angle = this.getAngle(this.target.getPosition(), this.node
						.getPosition()), this.radius = this.getDistance(this.target
						.getPosition(), this.node.getPosition()), this.isRotating = !0) : cc
					.log("No target!")
			}
			getAngle(e, t) {
				return Math.atan(t.y - e.y / t.x - e.x)
			}
			getDistance(e, t) {
				return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
			}
			update(e) {
				if (!this.isRotating || !this.target) return;
				let t = Math.PI / 180 * this.angle;
				if (this.node.x = this.target.x + this.radius * Math.cos(t), this.node.y = this
					.target.y + this.radius * Math.sin(t), this.faceToTarget) switch (this
					.faceAxis) {
					case a.PositiveX:
						this.node.angle = this.angle + 180;
						break;
					case a.PositiveY:
						this.node.angle = this.angle + 90;
						break;
					case a.NegativeX:
						this.node.angle = this.angle;
						break;
					case a.NegativeY:
						this.node.angle = this.angle - 90
				}
				let o = e * (360 / this.timePerRound);
				this.clockwise ? this.angle -= o : this.angle += o, this.angle >= 360 ? this
					.angle %= 360 : this.angle <= -360 && (this.angle %= -360)
			}
			start() {
				this.autoStart && this.run()
			}
			stop() {
				this.isRotating = !1
			}
		};
		n([i({
			type: cc.Node,
			tooltip: "\u56f4\u7ed5\u65cb\u8f6c\u7684\u76ee\u6807"
		})], r.prototype, "target", void 0), n([i({
			tooltip: "\u987a\u65f6\u9488\u65cb\u8f6c"
		})], r.prototype, "clockwise", void 0), n([i({
			tooltip: "\u65cb\u8f6c\u4e00\u5708\u82b1\u8d39\u7684\u65f6\u95f4"
		})], r.prototype, "timePerRound", void 0), n([i({
			tooltip: "\u662f\u5426\u59cb\u7ec8\u9762\u5411\u76ee\u6807\u8282\u70b9"
		})], r.prototype, "faceToTarget", void 0), n([i({
			type: cc.Enum(a),
			tooltip: "\u9762\u5411\u76ee\u6807\u8282\u70b9\u7684\u8f74\uff1a\n- PositiveX\uff1a\u6b63 X \u8f74\n- PositiveY\uff1a\u6b63 Y \u8f74\n- NegativeX\uff1a\u8d1f X \u8f74\n- NegativeY\uff1a\u8d1f Y \u8f74",
			visible() {
				return this.faceToTarget
			}
		})], r.prototype, "faceAxis", void 0), n([i({
			tooltip: "\u81ea\u52a8\u5f00\u59cb\u65cb\u8f6c"
		})], r.prototype, "autoStart", void 0), r = n([s], r), o.default = r, cc._RF.pop()
	}, {}],
	block: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "41e601on1hNbraCo9PGgG6K", "block");
		var n, s = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const i = e("../../../engines/gameEngine"),
			a = e("../managers/blockManager"),
			r = e("../normalMode"),
			{
				ccclass: c,
				property: l
			} = cc._decorator;
		let d = n = class extends cc.Component {
			constructor() {
				super(...arguments), this.blockIndex = 0, this.blockZindex = 0, this
					.isCanTouch = !0, this.isInArea = !1, this.isAriveArea = !1, this
					.duiDieBlock = [], this.prePos = cc.Vec2.ZERO, this.isInDui = !1, this
					.m_isRotating = !1, this.grayImg = null, this.isSpecial = !1, this
					.iconNode = null, this.covered = !1
			}
			setIsCanTouch(e) {
				this.isCanTouch = e, e ? cc.tween(this.node).to(.2, {
					color: cc.color(255, 255, 255)
				}).start() : cc.tween(this.node).to(.2, {
					color: cc.color(157, 157, 157)
				}).start()
			}
			getIsCanTouch() {
				return this.isCanTouch
			}
			set isRotating(e) {
				e ? console.log("\u53d8\u4e0d\u53ef\u64cd\u4f5c", this.uuid) : console.log(
					"\u53d8\u53ef\u4ee5\u64cd\u4f5c", this.uuid), this.m_isRotating = e
			}
			get isRotating() {
				return this.m_isRotating
			}
			onLoad() {}
			start() {
				this.grayImg = this.node.getChildByName("gray"), this.prePos = this.node
					.getPosition(), this.loadBlockImg()
			}
			update(e) {
				this.isInArea
			}
			clickBlock() {
				!this.isInArea && this.isCanTouch && r.default._instance.getCanClickBlock() && (
					i.default.getManagers().soundMgr.playSound("anNiu").then(), i.managers()
					.soundMgr.playVibrate(), this.isCanTouch = !1, this.isInArea = !0, this
					.node.color = cc.Color.WHITE, r.default._instance.clickBlock(this))
			}
			loadBlockImg() {
				a.default._instance.loadImg(this.blockIndex, this.node.getComponent(cc.Sprite))
			}
			onCollisionStay(e, t) {
				this.covered = e.node.getComponent(n).blockZindex > this.blockZindex && !e.node
					.getComponent(n).isInArea && this.isCanTouch, this.isRotating || e.node
					.getComponent(n).blockZindex > this.blockZindex && !e.node.getComponent(n)
					.isInArea && this.isCanTouch && (this.isCanTouch = !1, cc.tween(this.node)
						.to(.2, {
							color: cc.color(157, 157, 157)
						}).start(), this.duiDieBlock.indexOf(e.node) < 0 && this.duiDieBlock
						.push(e.node))
			}
			onCollisionExit(e, t) {
				this.covered = !(this.duiDieBlock.indexOf(e.node) >= 0 && e.node.getComponent(n)
					.isInArea), this.isRotating || (console.log(
						"\u79fb\u9664\u4e86\u8986\u76d6\u7269?", this.covered, this
						.isRotating, this.uuid), this.duiDieBlock.indexOf(e.node) >= 0 && e
					.node.getComponent(n).isInArea && (this.isCanTouch = !0, cc.tween(this
						.node).to(.2, {
						color: cc.color(255, 255, 255)
					}).start()))
			}
			FindTouch() {
				this.covered || (this.isCanTouch = !0, cc.tween(this.node).to(.2, {
					color: cc.color(255, 255, 255)
				}).start())
			}
		};
		s([l(cc.Sprite)], d.prototype, "iconNode", void 0), d = n = s([c], d), o.default = d, cc._RF
			.pop()
	}, {
		"../../../engines/gameEngine": "gameEngine",
		"../managers/blockManager": "blockManager",
		"../normalMode": "normalMode"
	}],
	btButton: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "bdc91QO3ddAt5nQfZr9K2G3", "btButton");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.BT_BODY_COLOR = o.BT_LINE_COLOR = void 0;
		var s = cc._decorator.executeInEditMode,
			i = cc._decorator.playOnFocus;
		const a = e("../../engines/gameEngine"),
			{
				ccclass: r,
				property: c,
				requireComponent: l
			} = cc._decorator;
		var d, u;
		(function(e) {
			e[e.WHITE = 0] = "WHITE", e[e.BLACK = 1] = "BLACK"
		})(d = o.BT_LINE_COLOR || (o.BT_LINE_COLOR = {})),
		function(e) {
			e[e.NORMAL = 0] = "NORMAL", e[e.OUTSTANDING = 1] = "OUTSTANDING", e[e.OBVIOUS = 2] =
				"OBVIOUS"
		}(u = o.BT_BODY_COLOR || (o.BT_BODY_COLOR = {}));
		let h = class extends cc.Component {
			constructor() {
				super(...arguments), this.lineColor = d.WHITE, this.bodyColor = u.NORMAL, this
					.textColor = d.WHITE, this.strButton = "\u6309\u94ae\u4e8b\u4ef6", this
					.isEditColor = !1
			}
			onLoad() {
				this.OnUpdateLineColor(), this.OnUpdateBodyColor(), this.OnUpdateTextColor(),
					this.node.on("click", () => {
						a.managers().soundMgr.playSound("anNiu").then(), a.managers()
							.soundMgr.playVibrate()
					})
			}
			start() {}
			getButtonText() {
				return this.strButton
			}
			setButtonText(e) {
				this.strButton = e;
				let t = this.node.getChildByName("Background");
				if (t) {
					let e = t.getChildByName("Label");
					e && (e.getComponent(cc.Label).string = this.strButton)
				}
			}
			OnUpdateLineColor() {
				switch (this.lineColor) {
					case d.WHITE:
						this.node.color = cc.Color.WHITE;
						break;
					case d.BLACK:
						this.node.color = cc.Color.BLACK
				}
			}
			OnUpdateBodyColor() {
				let e = this.node.getChildByName("Background");
				if (!e) return void console.error(
					"#57\u9519\u8bef \u4e0d\u5b58\u5728\u7684\u80cc\u666f\u8282\u70b9");
				switch (this.bodyColor) {
					case u.NORMAL:
						e.color = cc.color(140, 208, 255);
						break;
					case u.OUTSTANDING:
						e.color = cc.color(255, 211, 48);
						break;
					case u.OBVIOUS:
						e.color = cc.color(230, 100, 76)
				}
				let t = e.getChildByName("Label");
				t && (t.getComponent(cc.Label).string = this.strButton)
			}
			OnUpdateTextColor() {
				let e = cc.find("Background/Label", this.node);
				switch (this.textColor) {
					case d.WHITE:
						e.color = cc.Color.WHITE;
						break;
					case d.BLACK:
						e.color = cc.Color.BLACK
				}
			}
			update(e) {}
		};
		n([c({
				type: cc.Enum(d),
				displayName: "\u6309\u94ae\u63cf\u8fb9\u8272",
				tooltip: "\u56fa\u5b9a\u9ed1\u767d"
			})], h.prototype, "lineColor", void 0), n([c({
				type: cc.Enum(u),
				displayName: "\u6309\u94ae\u989c\u8272",
				tooltip: "NORMAL(\u666e\u901a\u6309\u94ae)\nOUTSTANDING(\u7a81\u51fa\u6309\u94ae)\nOBVIOUS(\u66f4\u7a81\u51fa\u3001\u660e\u663e\u6309\u94ae)"
			})], h.prototype, "bodyColor", void 0), n([c({
				type: cc.Enum(d),
				displayName: "\u6309\u94ae\u6587\u672c\u989c\u8272",
				tooltip: "\u56fa\u5b9a\u9ed1\u767d"
			})], h.prototype, "textColor", void 0), n([c({
				displayName: "\u6309\u94ae\u6587\u672c",
				multiline: !0
			})], h.prototype, "strButton", void 0), n([c({
				displayName: "\u81ea\u7f16\u8f91\u989c\u8272"
			})], h.prototype, "isEditColor", void 0), h = n([r, l(cc.Button), s(), i()], h), o.default =
			h, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine"
	}],
	cellLayerMiniGameJump: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "a3cabW5JqRBn7PAwWbJRknU", "cellLayerMiniGameJump");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../engines/configs/gameConfig"),
			i = e("../public/cellMiniGameJump"),
			{
				ccclass: a,
				property: r
			} = cc._decorator;
		let c = class extends cc.Component {
			start() {
				this.onShowMiniJumpCellList()
			}
			setPosition(...e) {
				for (let t = 0; t < e.length && t < this.node.childrenCount; t++) this.node
					.children[t].setPosition(e[t])
			}
			onShowMiniJumpCellList() {
				let e = s.default.MINI_GAME_JUMP_CELL_LIST;
				for (let t = 0; t < this.node.childrenCount; t++) null != e[t] ? (this.node
					.children[t].active = !0, this.showCellData(this.node.children[t], e[t])
					) : this.node.children[t].active = !1
			}
			showCellData(e, t) {
				e.getComponent(i.default).setData(t)
			}
		};
		c = n([a], c), o.default = c, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../public/cellMiniGameJump": "cellMiniGameJump"
	}],
	cellMiniGameJump: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "e71d5xGI5FO/49dqAk3rDDp", "cellMiniGameJump");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../engines/gameEngine"),
			{
				ccclass: i,
				property: a
			} = cc._decorator;
		let r = class extends cc.Component {
			constructor() {
				super(...arguments), this.m_data = null
			}
			start() {
				this.initView()
			}
			setData(e) {
				this.m_data = e
			}
			initView() {
				const e = this.m_data;
				this.node.getChildByName("name").getComponent(cc.Label).string = e.name;
				let t = this.node.getChildByName("icon").getComponent(cc.Sprite);
				s.default.getServices().ossSrv.showOssPathMiniGameJumpIcon(e.iconId, t), this
					.node.on("click", () => {
						s.default.getServices().miniGameSrv.getAppApiInstance()
							.navigateToMiniGame(e.appId)
					})
			}
		};
		r = n([i], r), o.default = r, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine"
	}],
	codeHead: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "a78d0lS7ehOh7Ti3UXwxvUz", "codeHead"), Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.$RealCode = void 0, (o.$RealCode || (o.$RealCode = {})).PRE_SIX = {
			659001: 1
		}, cc._RF.pop()
	}, {}],
	coin: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "64797XHawpGpo704ir/km/v", "coin");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../engines/gameEngine"),
			i = e("../../engines/services/userContent/userInterface"),
			a = e("../../engines/libs/data_control"),
			r = e("../../engines/configs/gameConfig"),
			{
				ccclass: c,
				property: l
			} = cc._decorator;
		let d = class extends cc.Component {
			constructor() {
				super(...arguments), this.lbCoin = null
			}
			onLoad() {}
			start() {}
			OnBtnAddCoins() {
				s.modules().uiControlModule.showUserPropGet(i.REWARD_TYPE.COIN, r.default
					.ADD_ONCE_COINS)
			}
			update(e) {
				this.lbCoin.string = a.default.getNumberFormat(s.default.getServices().userSrv
					.getCoins(), 0)
			}
		};
		n([l(cc.Label)], d.prototype, "lbCoin", void 0), d = n([c], d), o.default = d, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine",
		"../../engines/libs/data_control": "data_control",
		"../../engines/services/userContent/userInterface": "userInterface"
	}],
	comFirstPlayerProtect: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "9ec58dZOABO4o3tqqqnk87p", "comFirstPlayerProtect");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../gameEngine"),
			{
				ccclass: i,
				property: a,
				menu: r
			} = cc._decorator;
		let c = class extends cc.Component {
			constructor() {
				super(...arguments), this.nodes = []
			}
			onLoad() {
				s.default.on("addFirstPlayerNode", this.addFirstPlayerNode.bind(this)), this
					.schedule(this.updateShowNodes.bind(this), 1), this.updateShowNodes()
			}
			addFirstPlayerNode(e) {
				this.nodes.push(e)
			}
			updateShowNodes() {
				let e = !s.default.getServices().userSrv.isFirstPlayerTimeIn();
				for (let t of this.nodes) t && t.isValid && (t.active = e)
			}
		};
		n([a({
			type: [cc.Node],
			tooltip: "\u9700\u8981\u52a8\u6001\u9690\u85cf\u663e\u793a\u7684\u8282\u70b9\u62d6\u62fd\u81f3\u6b64\uff0c\u52a8\u6001\u52a0\u5165\u7684\u8282\u70b9\u53ef\u901a\u8fc7\u4e8b\u4ef6<addFirstPlayerNode>\u6765\u6dfb\u52a0"
		})], c.prototype, "nodes", void 0), c = n([i], c), o.default = c, cc._RF.pop()
	}, {
		"../gameEngine": "gameEngine"
	}],
	comFluency: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "bc897IOehtKG74+Zy3f/JTW", "comFluency");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../gameEngine"),
			{
				ccclass: i,
				property: a,
				menu: r
			} = cc._decorator;
		let c = class extends cc.Component {
			constructor() {
				super(...arguments), this.libCount = 1e3, this.onceCount = 10, this.showTime =
					1, this.maxOpacity = 10, this.minTick = 1, this.m_loaded = 0
			}
			onLoad() {
				this.m_lastShowNodes = [], this.m_nodeList = []
			}
			start() {
				this.m_lastPos = this.node.getPosition().clone()
			}
			isLoaded() {
				return this.m_loaded >= this.libCount
			}
			loadOnce() {
				const e = this.node.getComponent(cc.Sprite),
					t = this.node.getComponent(cc.Label);
				for (let o = 0; o < this.onceCount; o++) {
					const o = new cc.Node;
					o.group = "Water", e && (o.setContentSize(this.node.getContentSize()), o
							.addComponent(cc.Sprite).spriteFrame = e.spriteFrame), t && (o
							.addComponent(cc.Label).string = t.string), this.node.parent
						.addChild(o), this.m_nodeList.push(o), o.active = !1, this.m_loaded++
				}
				this.isLoaded() && (console.log("\u542f\u52a8\u6b8b\u5f71"), s.modules()
					.uiControlModule.showMessageBox("\u542f\u52a8\u6b8b\u5f71"))
			}
			getReallyPos() {
				const e = this.node.getPosition().clone();
				let t = this.node.parent;
				for (; null == t.getComponent(cc.Canvas);) e.x += t.x, e.y += t.y, t = t.parent;
				return e
			}
			setReallyPos(e, t) {
				const o = cc.v2(0, 0);
				let n = this.node.parent;
				for (; null == n.getComponent(cc.Canvas);) o.x += n.x, o.y += n.y, n = n.parent;
				return cc.v2(t.x - o.x, t.y - o.y)
			}
			onShowFluency(e) {
				if (this.m_lastPos) {
					for (let p = 0; p < this.m_lastShowNodes.length; p++) {
						const t = this.m_lastShowNodes[p];
						t.showTime > this.showTime ? (this.m_lastShowNodes.splice(p, 1), p--, t
							.active = !1, this.m_nodeList.push(t)) : t.showTime += e
					}
					const t = this.node.getPosition().clone(),
						o = this.m_lastPos.clone(),
						n = Math.abs(t.x - o.x),
						s = Math.abs(t.y - o.y),
						i = Math.max(n, s) / this.minTick;
					if (0 == i) return void(this.node.opacity = 255);
					const a = n / i * this.minTick,
						r = s / i * this.minTick;
					let c = this.m_lastShowNodes.length,
						l = c + i;
					const d = this.maxOpacity;
					let u = d * (l > 0 ? c / l : 0),
						h = d - u,
						g = "";
					for (let e = 0; e < c; e++) this.m_lastShowNodes[e].opacity = (e + 1) / c *
						u, this.m_lastShowNodes[e].zIndex -= i, g +=
						`${this.m_lastShowNodes[e].zIndex},`;
					for (let e = 0; e < i; e++) {
						let n = t.x > o.x ? o.x + e * a : o.x - e * a,
							s = t.y > o.y ? o.y + e * r : o.y - e * r;
						const c = this.m_nodeList.shift();
						c && (c.showTime = 0, this.m_lastShowNodes.push(c), c.active = !0, c
							.zIndex = -i + e - 1, c.opacity = u + (e + 1) / i * h, c.color =
							this.node.color, c.setPosition(n, s), g += `${c.zIndex},`)
					}
					this.node.opacity = i
				}
				this.m_lastPos = this.node.getPosition().clone()
			}
			update(e) {
				this.isLoaded() ? this.onShowFluency(e) : this.loadOnce()
			}
		};
		n([a()], c.prototype, "libCount", void 0), n([a()], c.prototype, "onceCount", void 0), n([a()],
				c.prototype, "showTime", void 0), n([a()], c.prototype, "maxOpacity", void 0), n([a()],
				c.prototype, "minTick", void 0), c = n([i, r(
				"\u6846\u67b6\u7ec4\u4ef6/\u8282\u70b9\u6d41\u7545\u8f85\u52a9")], c), o.default = c, cc
			._RF.pop()
	}, {
		"../gameEngine": "gameEngine"
	}],
	comO1Box: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "621158i+oxLvpRzfr56Wp6y", "comO1Box");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../managers/o1BoxManager");
		var i = cc._decorator.executeInEditMode;
		const a = e("../gameEngine"),
			{
				ccclass: r,
				property: c,
				menu: l
			} = cc._decorator;
		let d = class extends cc.Component {
			constructor() {
				super(...arguments), this.boxGroup = s.O1BoxGroup.NORMAL, this
					.isCollisionCallback = !1, this.isDynamic = !1, this.gravity = 1, this
					.lineVelocity = cc.v2(0, 0), this.tag = 0, this.m_predictLineVelocity = [],
					this.m_predictPos = []
			}
			start() {
				this.m_predictPos = [], this.m_predictLineVelocity = []
			}
			getProductLastLineVelocity() {
				return this.m_predictLineVelocity.length > 0 ? this.m_predictLineVelocity[this
					.m_predictLineVelocity.length - 1] : this.lineVelocity
			}
			pushPredictLineVelocity(e) {
				this.m_predictLineVelocity.push(e)
			}
			pushLastPredictLineVelocity() {
				this.pushPredictLineVelocity(this.getProductLastLineVelocity().clone())
			}
			clearPredictLineVelocity() {
				this.m_predictLineVelocity.length = 0
			}
			onTimerRunSync() {
				this.m_predictLineVelocity.length > 0 && (this.lineVelocity = this
						.m_predictLineVelocity.shift()), this.m_predictPos.length > 0 && this
					.node.setPosition(this.m_predictPos.shift().clone())
			}
			isHaveLastPos() {
				return this.m_predictLineVelocity.length > 0 || this.m_predictPos.length > 0
			}
			getPredictLastPos() {
				return this.m_predictPos.length > 0 ? this.m_predictPos[this.m_predictPos
					.length - 1] : this.node.getPosition()
			}
			pushPredictPos(e) {
				this.m_predictPos.push(e)
			}
			pushLastPredictPos() {
				this.pushPredictPos(this.getPredictLastPos().clone())
			}
			clearPredictPoss() {
				this.m_predictPos.length = 0
			}
			onEnable() {
				a.managers().o1BoxMgr.addBox(this)
			}
			onDisable() {
				a.managers().o1BoxMgr.deleteBox(this)
			}
			onCollisionBox(e) {
				console.debug("\u78b0\u5230\u4e86", "\u6211", this, "\u5176\u4ed6", e)
			}
			onCollisionBoxLearn(e) {
				console.debug("\u79bb\u5f00\u4e86", "\u6211", this, "\u5176\u4ed6", e)
			}
			onUpdateLogicEnd() {}
			update(e) {}
		};
		n([c({
				tooltip: "\u5206\u7ec4\u53ca\u5206\u7ec4\u78b0\u649e\u9700\u8981\u4ee3\u7801\u6dfb\u52a0",
				type: cc.Enum(s.O1BoxGroup)
			})], d.prototype, "boxGroup", void 0), n([c({
				tooltip: "\u5f00\u542f\u78b0\u649e\u56de\u8c03"
			})], d.prototype, "isCollisionCallback", void 0), n([c({
				tooltip: "\u53ea\u6709\u52a8\u6001\u7684\u7269\u54c1\u624d\u53ef\u4ee5\u52a8"
			})], d.prototype, "isDynamic", void 0), n([c({
				tooltip: "\u91cd\u529b\u7f29\u653e"
			})], d.prototype, "gravity", void 0), n([c({
				tooltip: "\u7ebf\u6027\u901f\u5ea6 \u552f\u4e00\u9a71\u52a8"
			})], d.prototype, "lineVelocity", void 0), n([c({
				tooltip: "\u6807\u8bb0\u53f7"
			})], d.prototype, "tag", void 0), d = n([r, l(
				"\u6846\u67b6\u7ec4\u4ef6/\u7b80\u5355\u78b0\u649e"), i()], d), o.default = d, cc._RF
			.pop()
	}, {
		"../gameEngine": "gameEngine",
		"../managers/o1BoxManager": "o1BoxManager"
	}],
	comSpSkeleton: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "97b4cTo/t5GWZP8dO+4HhIG", "comSpSkeleton");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const {
			menu: s,
			ccclass: i
		} = cc._decorator;
		let a = class extends sp.Skeleton {
			constructor() {
				super(), this.m_completeCount = 0, this.m_completeCallback = null, this
					.m_trackEntryEventCallback = null, this.m_trackEventCount = 0, this
					.m_currSkinName = null
			}
			start() {
				this.m_currSkinName = this.defaultSkin
			}
			playAnimation(e) {
				this.m_completeCount = 0, this.m_completeCallback = null, this
					.m_trackEventCount = 0, this.m_trackEntryEventCallback = null;
				let t = {
					onComplete: (e, o) => (this.m_completeCount = e, this
						.m_completeCallback = o, t),
					onEvent: (e, o) => (this.m_trackEventCount = e, this
						.m_trackEntryEventCallback = o, t),
					start: o => (this.setCompleteListener(this.onPlayAnimationOver.bind(
						this)), this.setAnimation(0, e, o), this.setEventListener(
						this.onPlayEvent.bind(this)), t)
				};
				return t
			}
			getCurrAnimation() {
				var e;
				return null === (e = this.getCurrent(0)) || void 0 === e ? void 0 : e.animation
			}
			getCurrAnimationEndTime() {
				if (this.getCurrAnimation()) return this.getCurrAnimation().duration
			}
			getCurrAnimationName() {
				if (this.getCurrAnimation()) return this.getCurrAnimation().name
			}
			getCurrAnimationPlayTime() {
				return this.getCurrent(0).trackTime
			}
			setCurrAnimationPlayTime(e) {
				this.getCurrent(0).trackTime = e
			}
			replaceTheSlot(e, t, o, n) {
				if (!o && !n) return void console.error(
					"#1171033 \u53c2\u65703\u30014\u4e0d\u80fd\u540c\u65f6\u4e3a\u7a7a");
				let s = o || this,
					i = this.findSlot(t),
					a = s.getCurrSkinName();
				n && s.setSkin(n);
				let r = s.findSlot(e).getAttachment();
				s.setSkin(a), i.setAttachment(r)
			}
			setSkin(e) {
				super.setSkin(e), this.m_currSkinName = e
			}
			getCurrSkinName() {
				return this.m_currSkinName
			}
			onPlayAnimationOver() {
				this.m_completeCallback && 0 != this.m_completeCount && (this
						.m_completeCallback(), this.m_completeCount--), this
					.m_trackEntryEventCallback && 0 != this.m_trackEventCount && this
					.m_trackEventCount--
			}
			onPlayEvent(e, t) {
				this.m_trackEntryEventCallback && 0 != this.m_trackEventCount && this
					.m_trackEntryEventCallback(e, t)
			}
		};
		a = n([i, s("\u6846\u67b6\u7ec4\u4ef6/\u9aa8\u9abc\u52a8\u753b")], a), o.default = a, cc._RF
			.pop()
	}, {}],
	copy: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "39a38oGTlZDZ6iPz8FG2DFP", "copy"), Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.default = function() {
			return "\n----------------------------------------------------------------------\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n\u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\n  \u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557  \n \u2588\u2588\u2588\u2554\u255d  \u2588\u2588\u2554\u2550\u2550\u255d  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255d  \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u255d  \u255a\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\n @version 1.0.0\n @time 2022\u5e741\u670812\u65e5\n @copy \n----------------------------------------------------------------------"
		}, cc._RF.pop()
	}, {}],
	dataField: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "51c4cIS8PlJaocQGe8RykYE", "dataField"), Object.defineProperty(o, "__esModule", {
				value: !0
			}), o.dataField = void 0,
			function(e) {
				let t, o, n;
				(function(e) {
					e.TT_USER = "ttUser"
				})(t = e.RANK_GROUP || (e.RANK_GROUP = {})),
				function(e) {
					e[e.COMMIT_SCORE = 0] = "COMMIT_SCORE", e[e.SHOW_SCORE = 1] = "SHOW_SCORE"
				}(o = e.OPERA_TYPE || (e.OPERA_TYPE = {})),
				function(e) {
					e.TRIPLE_JUMP = "triple", e.JAVELIN = "javelin"
				}(n = e.RANK_ID || (e.RANK_ID = {}))
			}(o.dataField || (o.dataField = {})), cc._RF.pop()
	}, {}],
	data_control: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "f11acgVgU1AQqD2zO7INjrB", "data_control"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			}), o.AStarPot = void 0;
		const n = [{
			numValue: 1e3,
			text: "K"
		}, {
			numValue: 1e6,
			text: "M"
		}, {
			numValue: 1e9,
			text: "G"
		}, {
			numValue: 1e12,
			text: "T"
		}, {
			numValue: 1e15,
			text: "P"
		}, {
			numValue: 1e18,
			text: "E"
		}, {
			numValue: 1e21,
			text: "Z"
		}, {
			numValue: 1e24,
			text: "Y"
		}, {
			numValue: 1e27,
			text: "B"
		}, {
			numValue: 1e30,
			text: "N"
		}, {
			numValue: 1e33,
			text: "D"
		}, {
			numValue: 1e36,
			text: "aa"
		}, {
			numValue: 1e39,
			text: "bb"
		}, {
			numValue: 1e42,
			text: "cc"
		}, {
			numValue: 1e45,
			text: "dd"
		}, {
			numValue: 1e48,
			text: "ee"
		}, {
			numValue: 1e51,
			text: "ff"
		}, {
			numValue: 1e54,
			text: "gg"
		}, {
			numValue: 1e57,
			text: "hh"
		}, {
			numValue: 1e60,
			text: "ii"
		}, {
			numValue: 1e63,
			text: "jj"
		}, {
			numValue: 1e66,
			text: "kk"
		}, {
			numValue: 1e69,
			text: "ll"
		}, {
			numValue: 1e72,
			text: "mm"
		}, {
			numValue: 1e75,
			text: "nn"
		}, {
			numValue: 1e78,
			text: "oo"
		}, {
			numValue: 1e81,
			text: "pp"
		}, {
			numValue: 1e84,
			text: "qq"
		}, {
			numValue: 1e87,
			text: "rr"
		}, {
			numValue: 1e90,
			text: "ss"
		}, {
			numValue: 1e93,
			text: "tt"
		}, {
			numValue: 1e96,
			text: "uu"
		}, {
			numValue: 1e99,
			text: "vv"
		}];
		class s {
			constructor(e, t, o) {
				this.i = e, this.j = t, this.parent = o, this.parentCount = 0, o && (this
					.parentCount = o.parentCount + 1)
			}
			equals(e) {
				return e.i == this.i && e.j == this.j
			}
			inList(e) {
				for (let t of e)
					if (this.equals(t)) return !0;
				return !1
			}
		}
		o.AStarPot = s;
		class i {
			static getRandId(e = 16) {
				let t = "";
				for (let o = 0; o < e; o++) {
					let e = Math.floor(Math.random() * this.IDs.length);
					t += this.IDs[e]
				}
				return t
			}
			static getValueOfAreaMinMax(e, t, o) {
				return e < t ? t : e > o ? o : e
			}
			static getNumLoopOfAreaMinMax(e, t, o) {
				return e < t ? o : e > o ? t : e
			}
			static sum(e) {
				let t = 0;
				for (let o of e) t += o;
				return t
			}
			static getRandItemOfArray(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			static getRandNumberOfArrayTwo(e) {
				return 2 != e.length || e[0] > e[1] ? (console.error(
						"#40 data_control \u9519\u8bef\u7684\u533a\u95f4", e), NaN) : e[0] + Math
					.random() * (e[1] - e[0])
			}
			static getRandIPosByWeights(e) {
				const t = this.sum(e);
				let o = Math.random() * t;
				for (let n = 0; n < e.length; n++)
					if ((o -= e[n]) <= 0) return n;
				return console.error("#114 data_control \u4e0d\u53ef\u80fd\u7684\u9519\u8bef", e),
					NaN
			}
			static randomSortArray(e) {
				return e.sort(() => Math.random() - .5), e
			}
			static getNumberFormat(e, t = 2) {
				const o = n;
				for (let n = o.length - 1; n >= 0; n--) {
					const {
						numValue: s,
						text: i
					} = o[n];
					if (e >= 10 * s) return `${Number((e/s).toFixed(t))}${i}`
				}
				return "" + Number(Number(e).toFixed(t))
			}
			static getNumberSplitCharString(e, t = ",") {
				let o = String(Math.floor(e));
				return o.replace(/(?=(?!\b)(?:\d{3})+(?!\d))/g, t)
			}
			static keepDecimals(e, t = 2, o = !1) {
				let n = e.toFixed(t);
				return o ? "" + Number(n) : n
			}
			static getChineseNum(e) {
				if (e = String(e), !/^([1-9]\d*)/.test(e)) return "\u975e\u6cd5\u6570\u636e";
				let t = "\u5343\u767e\u5341\u4ebf\u5343\u767e\u5341\u4e07\u5343\u767e\u5341\u4e2a";
				if (e.length > t.length) return "\u6570\u636e\u8fc7\u957f";
				let o = "",
					n = e.length;
				t = t.substr(t.length - n);
				for (let s = 0; s < n; s++) o +=
					"\u96f6\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d".charAt(Number(e[
						s])) + t.charAt(s);
				return console.log(o), o = o.substr(0, o.length - 1), console.log(o), o.replace(
						/\u96f6(\u5343|\u767e|\u5341)/g, "\u96f6").replace(/(\u96f6)+/g, "\u96f6")
					.replace(/\u96f6(\u4ebf|\u4e07)/g, "$1")
			}
			static getTimeFormatClock(e) {
				let t = "",
					o = Math.floor(e / 3600);
				o > 0 && (t += `${String(o).padStart(2,"0")}:`);
				let n = Math.floor(e % 3600 / 60);
				return (t += `${String(n).padStart(2,"0")}:`) + String(e % 60).padStart(2, "0")
			}
			static getNewTimeClock(e) {
				const t = Math.floor(e / 3600);
				let o = t > 9 ? t + ":" : "0" + t + ":";
				0 == t && (o = "");
				const n = Math.floor((e - 3600 * t) / 60);
				let s = n > 9 ? n + ":" : "0" + n + ":";
				const i = Math.floor(e - 3600 * t - 60 * n);
				let a = i > 9 ? i : "0" + i;
				return o.toString() + s.toString() + a.toString()
			}
			static getCurrDateDayString() {
				const e = new Date;
				return `${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`
			}
			static GetWorldPos(e) {
				let t = e.parent.convertToWorldSpaceAR(e.getPosition());
				return t.addSelf(cc.v2(-.5 * cc.winSize.width, -.5 * cc.winSize.height)), t
			}
			static getMemoryNumber(e) {
				const t = 1024,
					o = 1024 * t,
					n = 1024 * o,
					s = 1024 * n;
				return e < t ? `${e}B` : e < o ? `${Math.floor(e/t).toFixed(2)}K` : e < n ?
					`${Math.floor(e/o).toFixed(2)}M` : e < s ? `${Math.floor(e/n).toFixed(2)}G` :
					`${Math.floor(e/s).toFixed(2)}T`
			}
			static aStarPathFind(e, t, o, n, i, a, r, c) {
				if (n.length > 0) {
					let l = 0,
						d = null;
					for (let e = 0; e < n.length; e++) {
						const s = n[e];
						let i = Math.sqrt(Math.pow(Math.abs(s.i - t.i), 2) + Math.pow(Math.abs(s.j -
							t.j), 2)) + Math.sqrt(Math.pow(Math.abs(s.i - o.i), 2) + Math.pow(
							Math.abs(s.j - o.j), 2));
						(null == d || i < d) && (l = e, d = i)
					}
					let u = n[l];
					if (u.i == o.i && u.j == o.j) {
						c.length = 0;
						let e = u;
						for (; e;) c.push(e), e = e.parent;
						c.reverse()
					} else {
						i[`${u.i}-${u.j}`] = !0, n.splice(l, 1);
						for (let t of a) {
							let o = new s(u.i + t.i, u.j + t.j, u);
							o.i >= e.length || o.i < 0 || o.j >= e[0].length || o.j < 0 || r(e[o.i][
								o.j
							]) && (i[`${o.i}-${o.j}`] || o.inList(n) || n.push(o))
						}
						n.length > 0 && this.aStarPathFind(e, t, o, n, i, a, r, c)
					}
				} else console.log("\u6ca1\u6709\u5230\u8fbe\u76ee\u6807\u7ec8\u70b9");
				return c
			}
			static getDateOfDataNow(e) {
				return new Date(e)
			}
		}
		o.default = i, i.IDs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", cc._RF.pop()
	}, {}],
	dialogMiniGameJump: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "22eb72VEyRGSbqucDSQFP2U", "dialogMiniGameJump");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../engines/configs/gameConfig"),
			i = e("../public/cellMiniGameJump"),
			{
				ccclass: a,
				property: r
			} = cc._decorator;
		let c = class extends cc.Component {
			constructor() {
				super(...arguments), this.pbThreeItem = null, this.ndListContent = null
			}
			start() {
				this.showAllDialogMiniGameJumpList()
			}
			showAllDialogMiniGameJumpList() {
				const e = s.default.MINI_GAME_JUMP_SIDE_LIST;
				cc.Tween.stopAllByTarget(this.ndListContent);
				for (let t = 0; t < e.length; t += 4) {
					let o = e[t],
						n = e[t + 1],
						s = e[t + 2],
						i = e[t + 3],
						a = cc.instantiate(this.pbThreeItem);
					this.ndListContent.addChild(a), this.controlCellOne(a.children[0], o), this
						.controlCellOne(a.children[1], n), this.controlCellOne(a.children[2],
						s), this.controlCellOne(a.children[3], i)
				}
				this.scheduleOnce(() => {
					if (this.ndListContent.height <= this.ndListContent.parent.height)
						return;
					let e = this.ndListContent.height - this.ndListContent.parent
					.height;
					cc.tween(this.ndListContent).then(cc.tween(this.ndListContent).to(
					0, {
						y: 205
					}).to(this.ndListContent.height / this.ndListContent.parent
						.height * 6, {
							y: 205 + e
						})).repeatForever().start()
				})
			}
			controlCellOne(e, t) {
				null != t ? e.getComponent(i.default).setData(t) : e.active = !1
			}
			onBtnClose() {
				this.node.destroy()
			}
		};
		n([r(cc.Prefab)], c.prototype, "pbThreeItem", void 0), n([r(cc.Node)], c.prototype,
			"ndListContent", void 0), c = n([a], c), o.default = c, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../public/cellMiniGameJump": "cellMiniGameJump"
	}],
	disFindItem: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "560591/yMlBKqm6mEhVeARI", "disFindItem");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("./disPlayConfig"),
			i = e("../../engines/gameEngine"),
			{
				ccclass: a,
				property: r
			} = cc._decorator;
		let c = class extends cc.Component {
			constructor() {
				super(...arguments), this.lbId = null, this.lbName = null, this.spIcon = null,
					this.m_data = null
			}
			onLoad() {}
			start() {
				this.initView()
			}
			setId(e) {
				this.m_data = s.Desk.getDisPlayItemList(e)
			}
			initView() {
				const {
					id: e,
					name: t,
					icon: o
				} = this.m_data;
				this.lbId.string = `[${e}]`, this.lbName.string = t, o && i.modules()
					.uiControlModule.getFrameBundle().load(`preload/hallIcon/${o}`, cc
						.SpriteFrame, (e, t) => {
							e ? console.error("#405511 \u9519\u8bef\u7684icon", o) : this.spIcon
								.spriteFrame = t
						})
			}
			onBtnClick() {
				this.m_data.onClickEvent()
			}
		};
		n([r(cc.Label)], c.prototype, "lbId", void 0), n([r(cc.Label)], c.prototype, "lbName", void 0),
			n([r(cc.Sprite)], c.prototype, "spIcon", void 0), c = n([a], c), o.default = c, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"./disPlayConfig": "disPlayConfig"
	}],
	disItem: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "f5967bjIxlK2KjjXKeP/xe3", "disItem");
		var n, s = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const i = e("./disPlayConfig"),
			a = e("../../engines/gameEngine"),
			r = e("../../engines/services/i18nService"),
			{
				ccclass: c,
				property: l
			} = cc._decorator;
		let d = n = class extends cc.Component {
			constructor() {
				super(...arguments), this.lbName = null, this.spIcon = null, this.m_data = null,
					this.m_parentCallback = null
			}
			onLoad() {}
			start() {
				this.initView()
			}
			setId(e) {
				this.m_data = i.Desk.getDisPlayItemList(e)
			}
			initView() {
				null != this.m_data ? (this.m_data && this.m_data.icon && a.modules()
					.uiControlModule.getFrameBundle().load(
						`preload/hallIcon/${this.m_data.icon}`, cc.SpriteFrame, (e, t) => {
							e ? console.error("#405511 \u9519\u8bef\u7684icon", this.m_data
								.icon) : this.spIcon.spriteFrame = t
						}), this.lbName.string = r.TT(this.m_data.name)) : console.error(
					"#29152544 \u672a\u521d\u59cb\u5316\u6570\u636e", n)
			}
			addParentClick(e) {
				this.m_parentCallback = e
			}
			onBtnClick(e, t) {
				this.m_parentCallback && this.m_parentCallback(), this.m_data.onClickEvent &&
					this.m_data.onClickEvent(e, t)
			}
		};
		s([l(cc.Label)], d.prototype, "lbName", void 0), s([l(cc.Sprite)], d.prototype, "spIcon",
			void 0), d = n = s([c], d), o.default = d, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"../../engines/services/i18nService": "i18nService",
		"./disPlayConfig": "disPlayConfig"
	}],
	disPlayConfig: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "2bb85YeDU1OlbE7/luAs9wt", "disPlayConfig"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			}), o.Desk = void 0;
		const n = e("../../engines/gameEngine"),
			s = e("../../engines/managers/gameContent/gameMode_json"),
			i = e("../../engines/services/miniGameContent/miniApp"),
			a = e("../test/filterWord"),
			r = e("../../engines/services/miniGameContent/dataField");
		(function(e) {
			var t = r.dataField.RANK_ID;
			e.searchIdsOfName = function(e) {
				let t = [];
				return o.forEach(o => {
					(o.name.includes(e) || o.id.includes(e)) && t.push(o.id)
				}), t
			}, e.getDisPlayItemList = function(e) {
				if (!e) return o;
				for (let t of o)
					if (t.id == e) return t;
				return null
			}, e.getDeskDisplayListInfo = function() {
				return [{
					id: "display001",
					name: "UI\u64cd\u4f5c",
					disItemIdList: ["item001", "item002", "item003", "item004",
						"item005", "item013", "item020", "item021", "item022",
						"item028", "item041"
					]
				}, {
					id: "display002",
					name: "\u5e73\u53f0\u76f8\u5173",
					disItemIdList: ["item005", "item006", "item007", "item008",
						"item005", "item011", "item014", "item015", "item016",
						"item017", "item018", "item019", "item023", "item025",
						"item026", "item029", "item030", "item031", "item032",
						"item033", "item034", "item035", "item036", "item037",
						"item038"
					]
				}, {
					id: "display003",
					name: "\u6846\u67b6\u5185\u5bb9",
					disItemIdList: ["item039"]
				}, {
					id: "display004",
					name: "\u5185\u7f6e\u6a21\u5f0f",
					disItemIdList: ["item012", "item024", "item027", "item040"]
				}]
			};
			const o = [{
				id: "item001",
				name: "\u786e\u8ba4\u6846",
				onClickEvent: () => {
					n.modules().uiControlModule.showDialogBox(
						"\u6e29\u99a8\u63d0\u793a",
						"\u544a\u8bc9\u4f60\u4e00\u4e2a\u6d88\u606f", !1, null,
						null, "\u6211\u77e5\u9053\u4e86")
				}
			}, {
				id: "item002",
				name: "\u786e\u5b9a\u53d6\u6d88\u6846",
				onClickEvent: () => {
					n.default.getModules().uiControlModule.showDialogBox(
						"\u6e29\u99a8\u63d0\u793a",
						"\u4f60\u9700\u8981\u9009\u62e9\u4e00\u4e2a\u9009\u9879", !
						0, e => {
							n.default.getModules().uiControlModule.showMessageBox(
								e ? "\u786e\u8ba4\u4e86" : "\u53d6\u6d88\u4e86")
						}, null, "A\u3001\u786e\u8ba4", "B\u3001\u53d6\u6d88")
				}
			}, {
				id: "item003",
				name: "\u770b\u4e00\u6b21\u89c6\u9891",
				onClickEvent: () => {
					n.default.getModules().uiControlModule.showDialogBox(
						"\u6e29\u99a8\u63d0\u793a",
						"\u4f60\u9700\u8981\u89c2\u770b\u4e00\u4e2a\u89c6\u9891\u6765\u5f97\u5230\u4e00\u4e2a\u4e1c\u897f",
						!0, e => {
							n.default.getModules().uiControlModule.showMessageBox(
								e ? "\u770b\u5b8c" : "\u6ca1\u770b\u5b8c")
						}, null, "\u770b\u5427", "\u5fcd\u75db\u4e0d\u770b", 1)
				}
			}, {
				id: "item004",
				name: "\u770b\u591a\u6b21\u89c6\u9891",
				onClickEvent: () => {
					n.default.getModules().uiControlModule.showDialogBox(
						"\u6e29\u99a8\u63d0\u793a",
						"\u4f60\u9700\u8981\u89c2\u770b\u591a\u4e2a\u89c6\u9891\u6765\u5f97\u5230\u4e00\u4e2a\u4e1c\u897f",
						!0, e => {
							n.default.getModules().uiControlModule.showMessageBox(
								e ? "\u770b\u5b8c" : "\u6ca1\u770b\u5b8c")
						}, null, "\u770b\u5427", "\u5fcd\u75db\u4e0d\u770b", 2 +
						Math.floor(3 * Math.random()))
				}
			}, {
				id: "item005",
				name: "3\u79d2\u52a0\u8f7d\u5b8c",
				onClickEvent: () => {
					n.default.getModules().uiControlModule.showLoading(), n.default
						.Component().scheduleOnce(() => {
							n.default.getModules().uiControlModule.hideLoading()
						}, 3)
				}
			}, {
				id: "item006",
				name: "\u5f00\u59cb\u76f4\u64ad",
				onClickEvent: () => {
					n.default.getServices().miniGameSrv.getAppApiInstance()
						.operateGameLive()
				}
			}, {
				id: "item007",
				name: "banner\u5e7f\u544a",
				onClickEvent: () => {}
			}, {
				id: "item008",
				name: "native\u5e7f\u544a",
				onClickEvent: () => {}
			}, {
				id: "item011",
				name: "\u6dfb\u52a0\u684c\u9762",
				onClickEvent: () => {
					n.default.getServices().miniGameSrv.getAppApiInstance()
					.addShortcut().then()
				}
			}, {
				id: "item012",
				name: "\u8ff7\u5bab",
				onClickEvent: () => {
					n.default.getManagers().gameMgr.selectMode(s.GAME_MODE.DFS).then()
				}
			}, {
				id: "item013",
				name: "\u753b\u677f\u9884\u5236",
				onClickEvent: () => {
					n.modules().uiControlModule.showFramePrefab(
						"preload/control/o1DrawBoard", null)
				}
			}, {
				id: "item014",
				name: "\u89c6\u9891\u5217\u8868",
				onClickEvent: () => {
					n.modules().uiControlModule.showFramePrefab(
						"preload/control/shareVideoRank", null)
				}
			}, {
				id: "item015",
				name: "\u8ba2\u9605\u6d88\u606f",
				onClickEvent: () => {
					n.default.getServices().miniGameSrv.getAppApiInstance()
						.subscribeMessage()
				}
			}, {
				id: "item016",
				name: "\u6dfb\u52a0\u5230\u6536\u85cf",
				onClickEvent: () => {
					n.default.getServices().miniGameSrv.getAppApiInstance()
						.showAddFavoriteGuide()
				}
			}, {
				id: "item017",
				name: "\u4e92\u8df31",
				onClickEvent: () => {
					window.tt && window.tt.setMoreGamesInfo({
						appLaunchOptions: [{
							appId: "tt3a5c4ce1a56771f4",
							query: "foo=bar&baz=qux",
							extraData: {}
						}, {
							appId: "tt1fed695080d61c40",
							query: "foo=bar&baz=qux",
							extraData: {}
						}]
					})
				}
			}, {
				id: "item018",
				name: "\u4e92\u8df32",
				onClickEvent: () => {
					if (null == window.tt) return;
					const e = window.tt.createMoreGamesBanner({
						style: {
							left: 20,
							top: 40,
							width: 150,
							height: 40
						},
						appLaunchOptions: [{
							appId: "tt3a5c4ce1a56771f4",
							query: "foo=bar&baz=qux",
							extraData: {}
						}, {
							appId: "tt1fed695080d61c40",
							query: "foo=bar&baz=qux",
							extraData: {}
						}]
					});
					e.show(), e.onTap(() => {
						console.log(
							"\u70b9\u51fb\u8df3\u8f6c\u6e38\u620f\u76d2\u5b50"
							)
					})
				}
			}, {
				id: "item019",
				name: "\u4e92\u8df33",
				onClickEvent: () => {
					null != window.tt && window.tt.createMoreGamesButton({
						type: "image",
						image: "images/more_games_btn.png",
						actionType: "box",
						style: {
							left: 20,
							top: 40,
							width: 150,
							height: 40,
							lineHeight: 40,
							backgroundColor: "#ff0000",
							textColor: "#ffffff",
							textAlign: "center",
							fontSize: 16,
							borderRadius: 4,
							borderWidth: 1,
							borderColor: "#ff0000"
						},
						appLaunchOptions: [{
							appId: "tt3a5c4ce1a56771f4",
							query: "foo=bar&baz=qux",
							extraData: {}
						}, {
							appId: "tt1fed695080d61c40",
							query: "foo=bar&baz=qux",
							extraData: {}
						}],
						onNavigateToMiniGame(e) {
							console.log(
								"\u8df3\u8f6c\u5176\u4ed6\u5c0f\u6e38\u620f",
								e)
						}
					}).onTap(() => {
						console.log("\u70b9\u51fb\u66f4\u591a\u6e38\u620f")
					})
				}
			}, {
				id: "item020",
				name: "\u65b0\u624b\u624b\u52bf",
				onClickEvent: () => {
					n.default.getModules().uiControlModule.showFramePrefab(
						"public/prefab/GuideFinger")
				}
			}, {
				id: "item021",
				name: "\u661f\u661f\u7c92\u5b50",
				onClickEvent: () => {
					n.default.getModules().uiControlModule.showFramePrefab(
						"public/prefab/ef_Star")
				}
			}, {
				id: "item022",
				name: "\u5f69\u5e26\u7c92\u5b50",
				onClickEvent: () => {
					n.default.getModules().uiControlModule.showFramePrefab(
						"public/prefab/ef_Confetti")
				}
			}, {
				id: "item023",
				name: "\u5f55\u97f3\u53d8\u58f0",
				onClickEvent: () => {
					n.default.getModules().uiControlModule.showFramePrefab(
						"preload/control/recordVoiceChange")
				}
			}, {
				id: "item024",
				name: "\u70ab\u5f69\u7c92\u5b50",
				onClickEvent: () => {
					n.default.getManagers().gameMgr.selectMode(s.GAME_MODE.NORMAL)
					.then()
				}
			}, {
				id: "item025",
				name: "\u77ed\u632f\u52a8",
				onClickEvent: () => {
					n.default.getServices().miniGameSrv.getAppApiInstance().vibrate(i
						.VIBRATE_TYPE.SHORT)
				}
			}, {
				id: "item026",
				name: "\u957f\u632f\u52a8",
				onClickEvent: () => {
					n.default.getServices().miniGameSrv.getAppApiInstance().vibrate(i
						.VIBRATE_TYPE.LONG)
				}
			}, {
				id: "item027",
				name: "\u5185\u7f51\u804a\u5929",
				onClickEvent: () => {
					n.default.getManagers().gameMgr.selectMode(s.GAME_MODE.TALK_ROOM)
						.then()
				}
			}, {
				id: "item028",
				name: "\u7248\u672c\u516c\u544a",
				icon: "1",
				onClickEvent: () => {
					n.default.getManagers().gameMgr.showVersionNotice()
				}
			}, {
				id: "item029",
				name: "\u654f\u611f\u8bcd\u6c47",
				onClickEvent: () => {
					let e = Date.now();
					console.log(a.textFilter(
						"\u6211\u8bf4\u9022\u4e5d\u5fc5\u4e71\uff0c\u7535\u51fb\u67aa"
						)), console.log(Date.now() - e)
				}
			}, {
				id: "item030",
				name: "\u5f00\u59cb\u5f55\u5c4f",
				onClickEvent: () => {
					n.default.getServices().miniGameSrv.getAppApiInstance()
						.gameRecordStart({
							duration: 60
						})
				}
			}, {
				id: "item031",
				name: "\u505c\u6b62\u5f55\u5c4f",
				onClickEvent: () => {
					n.default.getServices().miniGameSrv.getAppApiInstance()
						.gameRecordStop() || n.default.getModules().uiControlModule
						.showMessageBox(
							"\u505c\u6b62\u5931\u8d25 \u5f55\u5c4f\u65f6\u95f4\u8fc7\u77ed"
							)
				}
			}, {
				id: "item032",
				name: "\u5206\u4eab\u5f55\u5c4f",
				onClickEvent: () => {
					n.default.getServices().miniGameSrv.getAppApiInstance()
						.shareGameRecordVideo()
				}
			}, {
				id: "item033",
				name: "\u63d0\u4ea4\u6392\u884c\u699c",
				onClickEvent: () => {
					console.log("\u53d1\u9001\u6570\u636e\u57df"), n.services()
						.miniGameSrv.getAppApiInstance().commitRank(t.TRIPLE_JUMP, 100)
						.then(e => {
							e || n.modules().uiControlModule.showMessageBox(
								"\u63d0\u4ea4\u5206\u6570\u5230\u6392\u884c\u699c\u5931\u8d25"
								)
						})
				}
			}, {
				id: "item034",
				name: "\u5c55\u793a\u6392\u884c\u699c",
				onClickEvent: () => {
					console.log("\u5c55\u793a\u6570\u636e\u57df"), n.default.emit(
							"hall.onRankShow"), n.services().miniGameSrv
						.getAppApiInstance().showRank(t.TRIPLE_JUMP).then(e => {
							e || n.modules().uiControlModule.showMessageBox(
								"\u83b7\u53d6\u6392\u884c\u699c\u6570\u636e\u5931\u8d25"
								)
						})
				}
			}, {
				id: "item035",
				name: "\u53d1\u9001\u57cb\u70b9",
				onClickEvent: () => {
					console.log("\u53d1\u9001\u57cb\u70b9"), n.default.getServices()
						.miniGameSrv.getAppApiInstance().reportAnalytics("0", 1)
				}
			}, {
				id: "item036",
				name: "\u683c\u5b50\u8df3\u8f6c",
				onClickEvent: () => {
					n.modules().uiControlModule.showFramePrefab(
						"preload/cellLayerMiniGameJump", null, !1, () => {})
				}
			}, {
				id: "item037",
				name: "\u8f6e\u64ad\u5f39\u7a97\u8df3\u8f6c",
				onClickEvent: () => {
					n.modules().uiControlModule.showFramePrefab(
						"preload/scrollMiniGameJump")
				}
			}, {
				id: "item038",
				name: "\u4fa7\u62c9\u680f\u8df3\u8f6c",
				icon: "2",
				onClickEvent: () => {
					n.modules().uiControlModule.showFramePrefab(
						"preload/dialogMiniGameJump")
				}
			}, {
				id: "item039",
				icon: "Option",
				name: "\u6e38\u620f\u8bbe\u7f6e",
				onClickEvent: () => {
					n.modules().uiControlModule.showFramePrefab(
						"preload/control/gameSetting")
				}
			}, {
				id: "item040",
				name: "\u8054\u673a\u5bf9\u6218",
				onClickEvent: () => {
					n.default.getManagers().gameMgr.selectMode(s.GAME_MODE.BATTLE_MODE)
						.then()
				}
			}, {
				id: "item041",
				name: "\u9009\u62e9\u6846",
				onClickEvent: () => {
					n.modules().uiControlModule.showSelectBox("\u9009\u62e9",
						"\u9009\u62e9\u4e00\u4e2a\u9009\u9879", [
							"\u7b2c\u4e00\u4e2a\u9009\u62e9",
							"\u7b2c\u4e8c\u4e2a\u9009\u9879",
							"\u7b2c\u4e09\u4e2a\u9009\u9879"
						]).then(e => {
						n.modules().uiControlModule.showMessageBox(
							`\u9009\u62e9\u4e86\u7b2c${e}\u4e2a`)
					})
				}
			}]
		})(o.Desk || (o.Desk = {})), cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"../../engines/managers/gameContent/gameMode_json": "gameMode_json",
		"../../engines/services/miniGameContent/dataField": "dataField",
		"../../engines/services/miniGameContent/miniApp": "miniApp",
		"../test/filterWord": "filterWord"
	}],
	disPlayItem: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "eebafRPVjJFGL49OSzGmbjT", "disPlayItem");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("./disItem"),
			i = e("../../engines/services/i18nService"),
			{
				ccclass: a,
				property: r
			} = cc._decorator;
		let c = class extends cc.Component {
			constructor() {
				super(...arguments), this.lbName = null, this.lbNameBottom = null, this
					.ndContentList = null, this.pbDisItem = null, this.minMask = null, this
					.minMask2 = null, this.svList = null, this.showTime = .4, this.m_data =
					null, this.m_minPos = null, this.m_maxPos = null, this.m_minSize = null,
					this.m_isMin = null, this.isAction = null, this.m_click = !1, this
					.m_isScroll = null
			}
			onLoad() {}
			start() {
				this.initView(), this.svList.node.on("touchstart", this.onTouStart, this), this
					.svList.node.on("touchmove", this.onTouMove, this), this.svList.node.on(
						"touchend", this.onTouEnd, this), this.svList.node.on("touchcancel",
						this.onTouEnd, this), i.TT(this.node)
			}
			initView() {
				if (null != this.m_data) {
					for (let e of this.m_data.disItemIdList) {
						this.lbNameBottom.string = this.lbName.string = this.m_data.name;
						let t = cc.instantiate(this.pbDisItem);
						this.ndContentList.addChild(t);
						let o = t.getComponent(s.default);
						o.setId(e), o.addParentClick(() => {
							this.m_isScroll = !0
						})
					}
					this.onMin(!0)
				} else console.error("#27 \u8bf7\u5148\u521d\u59cb\u5316\u6570\u636e")
			}
			onTouStart(e) {
				this.m_click = !0
			}
			onTouMove(e) {
				this.m_click = !1
			}
			onTouEnd(e) {
				this.m_click && this.onBtnThis()
			}
			onBtnThis() {
				this.m_isMin ? this.onMax() : this.onMin()
			}
			onScrollView(e, t) {
				if (!this.m_isMin) return;
				let o = () => {
					let e = this.svList.isScrolling();
					this.m_isScroll || e ? this.m_isScroll = e : this.onBtnThis()
				};
				this.svList.isScrolling() ? o() : this.scheduleOnce(o)
			}
			onMin(e) {
				if (this.isAction) return;
				this.node.zIndex = 0, this.isAction = !0, this.minMask2.active = this.minMask
					.enabled = !0, this.m_isMin = !0, this.lbName.node.active = !1, this
					.lbNameBottom.node.active = !1, this.svList.vertical = !1;
				let t = this.ndContentList.getComponent(cc.Layout);
				if (e) return this.scheduleOnce(() => {
						this.svList.node.scaleY = 16 / 9
					}), this.lbNameBottom.node.active = !0, this.node.scaleX = this
					.m_minSize.width, this.node.scaleY = this.m_minSize.height, this.node
					.setPosition(this.m_minPos), this.isAction = !1, void(t.paddingTop =
						240.8);
				cc.Tween.stopAllByTarget(this.svList.node), cc.Tween.stopAllByTarget(this.node),
					cc.tween(this.node).parallel(cc.tween(this.node).to(.5 * this.showTime, {
						y: this.m_minPos.y + 300
					}, {
						easing: "quadOut"
					}).to(.5 * this.showTime, {
						y: this.m_minPos.y
					}, {
						easing: "quadIn"
					}), cc.tween(this.node).to(this.showTime, {
						x: this.m_minPos.x
					}), cc.tween().to(this.showTime, {
						scaleX: this.m_minSize.width,
						scaleY: this.m_minSize.height
					})).call(() => {
						this.lbNameBottom.node.active = !0, this.ndContentList.y = 517, this
							.isAction = !1
					}).start(), cc.tween(this.svList.node).to(this.showTime, {
						scaleY: 16 / 9
					}).start(), cc.tween(t).to(this.showTime, {
						paddingTop: 240.8
					}).start()
			}
			onMax() {
				if (this.isAction) return;
				this.isAction = !0, this.m_isMin = !1, this.lbName.node.active = !1, this
					.lbNameBottom.node.active = !1, this.svList.vertical = !0, this.node
					.zIndex = 1;
				let e = this.ndContentList.getComponent(cc.Layout);
				cc.Tween.stopAllByTarget(this.node), cc.Tween.stopAllByTarget(this.svList.node),
					cc.tween(this.node).parallel(cc.tween(this.node).to(.5 * this.showTime, {
						y: this.m_maxPos.y + 375
					}, {
						easing: "quadOut"
					}).to(.5 * this.showTime, {
						y: this.m_maxPos.y
					}, {
						easing: "quadIn"
					}), cc.tween(this.node).to(this.showTime, {
						x: this.m_maxPos.x
					}), cc.tween().to(this.showTime, {
						scale: 1
					})).call(() => {
						this.lbName.node.active = !0, this.minMask2.active = this.minMask
							.enabled = !1, this.isAction = !1
					}).start(), cc.tween(this.svList.node).to(this.showTime, {
						scaleY: 1
					}).start(), cc.tween(e).to(this.showTime, {
						paddingTop: 86.8
					}).start()
			}
			setMaxMinParam(e, t, o) {
				this.m_minPos = e.clone(), this.m_maxPos = t.clone(), this.m_minSize = o.clone()
			}
			bindData(e) {
				this.m_data = e
			}
		};
		n([r(cc.Label)], c.prototype, "lbName", void 0), n([r(cc.Label)], c.prototype, "lbNameBottom",
				void 0), n([r(cc.Node)], c.prototype, "ndContentList", void 0), n([r(cc.Prefab)], c
				.prototype, "pbDisItem", void 0), n([r(cc.Mask)], c.prototype, "minMask", void 0), n([r(
				cc.Node)], c.prototype, "minMask2", void 0), n([r(cc.ScrollView)], c.prototype,
				"svList", void 0), n([r()], c.prototype, "showTime", void 0), c = n([a], c), o.default =
			c, cc._RF.pop()
	}, {
		"../../engines/services/i18nService": "i18nService",
		"./disItem": "disItem"
	}],
	disPlayLayer: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "08c3bhOykROg4lQbZ/9wtIJ", "disPlayLayer");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("./disPlayConfig"),
			i = e("./disPlayItem"),
			a = e("./disFindItem"),
			{
				ccclass: r,
				property: c
			} = cc._decorator;
		let l = class extends cc.Component {
			constructor() {
				super(...arguments), this.ndContextList = null, this.pbDisplayList = null, this
					.pbFindDisItem = null, this.ndPos = null, this.szContent = null, this
					.editFind = null, this.ndFindResult = null, this.ndFindListContent = null,
					this.lbSearchTitle = null
			}
			onLoad() {
				this.initDesk()
			}
			start() {
				this.ndFindResult.active = !1
			}
			initDesk() {
				const e = s.Desk.getDeskDisplayListInfo();
				for (let t = 0; t < e.length; t++) {
					let o = e[t],
						n = cc.instantiate(this.pbDisplayList);
					this.ndContextList.addChild(n);
					let s = n.getComponent(i.default);
					s.bindData(o);
					const {
						x: a,
						y: r
					} = this.ndPos.getPosition();
					let c = t % 3,
						l = Math.floor(t / 3);
					s.setMaxMinParam(cc.v2(a + 140 + c * (this.szContent.width + 50), r - 100 -
						l * (this.szContent.height + 80)), cc.v2(0, 0), cc.size(this
						.szContent.width / 750, this.szContent.height / 1334))
				}
			}
			onEditInputOver() {
				if (!this.editFind.string) return;
				this.ndFindResult.active = !0;
				let e = s.Desk.searchIdsOfName(this.editFind.string);
				this.lbSearchTitle.string =
					`"${this.editFind.string}" ${e.length}\u4e2a\u67e5\u627e\u7ed3\u679c`;
				for (let t of e) {
					let e = cc.instantiate(this.pbFindDisItem);
					this.ndFindListContent.addChild(e), e.getComponent(a.default).setId(t)
				}
			}
			onTouchCloseFindResult() {
				this.ndFindListContent.destroyAllChildren(), this.ndFindResult.active = !1
			}
		};
		n([c(cc.Node)], l.prototype, "ndContextList", void 0), n([c(cc.Prefab)], l.prototype,
				"pbDisplayList", void 0), n([c(cc.Prefab)], l.prototype, "pbFindDisItem", void 0), n([c(
				cc.Node)], l.prototype, "ndPos", void 0), n([c(cc.Size)], l.prototype, "szContent",
				void 0), n([c(cc.EditBox)], l.prototype, "editFind", void 0), n([c(cc.Node)], l
				.prototype, "ndFindResult", void 0), n([c(cc.Node)], l.prototype, "ndFindListContent",
				void 0), n([c(cc.Label)], l.prototype, "lbSearchTitle", void 0), l = n([r], l), o
			.default = l, cc._RF.pop()
	}, {
		"./disFindItem": "disFindItem",
		"./disPlayConfig": "disPlayConfig",
		"./disPlayItem": "disPlayItem"
	}],
	drawDetail: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "d4fe4r1Zi5N5rJoMT9UZcHc", "drawDetail");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../../engines/gameEngine"),
			{
				ccclass: i,
				property: a
			} = cc._decorator;
		let r = class extends cc.Component {
			constructor() {
				super(...arguments), this.gdi = null, this.lbTitleName = null, this.m_drawInfo =
					null
			}
			onLoad() {}
			start() {}
			setInfo(e) {
				this.m_drawInfo = e, this.lbTitleName.string = this.m_drawInfo.name, this
					.OnShowGdi()
			}
			OnShowGdi() {
				for (let e of this.m_drawInfo.drawList) {
					const {
						isStart: t,
						color: o,
						lineWidth: n,
						x: s,
						y: i
					} = e, {
						r: a,
						g: r,
						b: c
					} = o;
					this.gdi.lineWidth = n, this.gdi.strokeColor = cc.color(a, r, c), t ? (this
							.gdi.moveTo(s - 1, i - 1), this.gdi.lineTo(s, i), this.gdi.stroke()
							) : (this.gdi.lineTo(s, i), this.gdi.stroke(), this.gdi.moveTo(s,
							i))
				}
			}
			OnBtnDelete() {
				s.default.emit("drawRecord.OnDeleteDraw", this.m_drawInfo.name)
			}
			OnBtnEdit() {
				s.default.emit("drawRecord.OnEditDraw", this.m_drawInfo.name)
			}
		};
		n([a(cc.Graphics)], r.prototype, "gdi", void 0), n([a(cc.Label)], r.prototype, "lbTitleName",
			void 0), r = n([i], r), o.default = r, cc._RF.pop()
	}, {
		"../../../engines/gameEngine": "gameEngine"
	}],
	drawRecord: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "01570fie7FEJLC04rT+Tj2v", "drawRecord");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../../engines/gameEngine"),
			i = e("./drawDetail"),
			{
				ccclass: a,
				property: r
			} = cc._decorator;
		let c = class extends cc.Component {
			constructor() {
				super(...arguments), this.drawDetail = null, this.svContentList = null, this
					.m_drawClass = null
			}
			onLoad() {
				s.default.off("drawRecord.OnEditDraw"), s.default.off(
					"drawRecord.OnDeleteDraw"), s.default.on("drawRecord.OnEditDraw", this
						.OnEditDraw.bind(this)), s.default.on("drawRecord.OnDeleteDraw", this
						.OnDeleteDraw.bind(this))
			}
			start() {}
			bindDrawInterface(e) {
				this.m_drawClass = e, this.OnLoadDrawList()
			}
			OnEditDraw(e) {
				s.default.emit("o1DrawBoard.OnEditDraw", e), this.OnBtnExit()
			}
			OnDeleteDraw(e) {
				s.default.getModules().uiControlModule.showDialogBox("\u5220\u9664\u6587\u4ef6",
					`\u5220\u9664\u540e\u4e0d\u53ef\u6062\u590d,\u662f\u5426\u5220\u9664<${e}>?`,
					!0, t => {
						t && (s.default.emit("o1DrawBoard.OnDeleteDraw", e), this
							.svContentList.destroyAllChildren(), this.scheduleOnce(this
								.OnLoadDrawList.bind(this)))
					}, this.node, "\u5220\u9664", "\u53d6\u6d88")
			}
			OnLoadDrawList() {
				s.default.getModules().uiControlModule.showLoading(this.node,
					"\u6b63\u5728\u52a0\u8f7d\u753b\u518c");
				const e = this.m_drawClass.getAllData();
				for (let t in e) {
					let o = e[t],
						n = cc.instantiate(this.drawDetail);
					this.svContentList.addChild(n), n.getComponent(i.default).setInfo(o)
				}
				s.default.getModules().uiControlModule.hideLoading()
			}
			OnBtnExit() {
				this.svContentList.destroyAllChildren(), this.node.destroy()
			}
		};
		n([r(cc.Prefab)], c.prototype, "drawDetail", void 0), n([r(cc.Node)], c.prototype,
			"svContentList", void 0), c = n([a], c), o.default = c, cc._RF.pop()
	}, {
		"../../../engines/gameEngine": "gameEngine",
		"./drawDetail": "drawDetail"
	}],
	engineConfig: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "ea828nD7IhHr4TMvb12NFRK", "engineConfig"), Object.defineProperty(o,
				"__esModule", {
					value: !0
				}), o.GameEvent = void 0,
			function(e) {
				e.CHANGE_SCENE_BEFORE = "GameEvent.CHANGE_SCENE_BEFORE", e.CHANGE_SCENE_AFTER =
					"GameEvent.CHANGE_SCENE_AFTER"
			}(o.GameEvent || (o.GameEvent = {})), cc._RF.pop()
	}, {}],
	filterWord: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "8c620dgSJdGuKZOid9hJS3x", "filterWord"), Object.defineProperty(o,
		"__esModule", {
			value: !0
		}), o.textFilter = o.getAryText = void 0;
		const n =
			"\u798f\u97f3\u4f1a#\u4e2d\u56fd\u6559\u5f92#\u7edf\u4e00\u6559#\u89c2\u97f3\u6cd5\u95e8#\u6e05\u6d77\u65e0\u4e0a\u5e08#\u76d8\u53e4#\u674e\u6d2a\u5fd7#\u5fd7\u6d2a\u674e#\u674e\u5b8f\u5fd7#\u8f6e\u529f#\u6cd5\u8f6e#\u8f6e\u6cd5\u529f#\u4e09\u53bb\u8f66\u4ed1#\u6c35\u53bb\u8f66\u4ed1#\u53d1\u8bba\u5de5#\u6cd5x\u529f#\u6cd5o\u529f#\u6cd50\u529f#\u6cd5\u4e00\u8f6e\u4e00\u529f#\u8f6e\u5b50\u529f#\u8f66\u4ed1\u5de5\u529b#\u6cd5lun#fa\u8f6e#\u6cd5lg#flg#fl\u529f#falungong#\u5927\u6cd5\u5f1f\u5b50#\u5927\u7eaa\u5143#dajiyuan#\u660e\u6167\u7f51#\u660e\u6167\u5468\u62a5#\u6b63\u89c1\u7f51#\u65b0\u5510\u4eba#\u4f2a\u706b#\u9000\u515a#tuidang#\u9000dang#\u8d85\u8d8a\u7ea2\u5899#\u81eafen#\u771f\u5584\u5fcd#\u4e5d\u8bc4#9\u8bc4#9ping#\u4e5dping#jiuping#\u85cf\u5b57\u77f3#\u96c6\u4f53\u81ea\u6740#\u81easha#zi\u6740#suicide#titor#\u90228\u5fc5\u707e#\u9022\u516b\u5fc5\u707e#\u90229\u5fc5\u4e71#\u9022\u4e5d\u5fc5\u4e71#\u6731\u745f\u91cc\u8bfa#\u6839\u8fbe\u4e9a\u6587\u660e#\u8bfa\u67e5\u4e39\u739b\u65af#\u4eba\u7c7b\u706d\u4ea1\u8fdb\u7a0b\u8868#\u6309\u7167\u9a6c\u96c5\u5386\u6cd5#\u63a8\u80cc\u56fe#\u63a8bei\u56fe#\u6d4e\u4e16\u7075\u6587#\u8bf8\u4e16\u7eaa#\u7535\u72d7#\u7535\u8bdd\u5b9a\u4f4d\u5668#\u7535\u8bdd\u62e6\u622a\u5668#\u7535\u8bdd\u7a83\u542c#\u7535\u8bdd\u76d1#\u7535\u8bdd\u4ea4\u53cb#\u7535\u8bdd\u8ffd\u6740\u7cfb\u7edf#\u7535\u51fb\u67aa#\u7535\u9e21#\u7535\u8b66\u68d2#\u67aa\u51fa\u552e#\u67aa\u7684\u5236#\u67aa\u8d27\u5230#\u67aa\u51b3\u5973\u72af#\u67aa\u6a21#\u67aa\u624b#\u67aa\u9500\u552e#\u67aa\u68b0\u5236#\u67aa\u5b50\u5f39#\u552e\u6b65\u67aa#\u552e\u7eaf\u5ea6#\u552e\u5355\u7ba1#\u552e\u5f39\u7c27\u5200#\u552e\u9632\u8eab#\u552e\u72d7\u5b50#\u552e\u864e\u5934#\u552e\u706b\u836f#\u552e\u5047\u5e01#\u552e\u5065\u536b#\u552e\u519b\u7528#\u552e\u730e\u67aa#\u552e\u6c2f\u80fa#\u552e\u9ebb\u9189#\u552e\u67aa\u652f#\u552e\u70ed\u6b66#\u552e\u4e09\u68f1#\u552e\u624b\u67aa#\u552e\u4e94\u56db#\u552e\u4e00\u5143\u786c#\u552e\u5b50\u5f39#\u552e\u5de6\u8f6e#\u4e9a\u7837\uff08\u9178\uff09\u9150#\u4e9a\u7837\u9178\u94be#\u4e9a\u7837\u9178\u94a0#\u4e9a\u7852\u9178#\u4e9a\u7852\u9178\u4e8c\u94a0#\u4e9a\u7852\u9178\u9541#\u4e9a\u7852\u9178\u94a0#\u4e9a\u7852\u9178\u6c22\u94a0#\u4e9a\u785d\u9178\u4e59\u916f#\u4e9a\u785d\u9170\u4e59\u6c27#\u6c27\u5316\u4e8c\u4e01\u57fa\u9521#\u6c27\u5316\u6c5e#\u6c27\u5316\u94ca#\u6c27\u5316\u4e9a\u94ca#\u6c27\u6c2f\u5316\u78f7#\u539f\u88c5\u5f39#\u539f\u5b50\u5f39\u65b9\u6cd5#\u539f\u5b50\u5f39\u6e05\u5355#\u5b89\u7720\u916e#\u4ee3\u8840\u6d46#\u666e\u8418\u6d1b\u5c14#\u544b\u585e\u7c73#\u897f\u5e03\u66f2\u660e#testosterone#\u80f0\u5c9b\u7d20\u6837\u751f\u957f\u56e0\u5b50#\u4fc3\u7ea2\u7ec6\u80de\u751f\u6210\u7d20#\u5730\u897f\u6cee#\u5c3c\u53ef\u5239\u7c73#\u7532\u777e\u916e#adrenaline#erythropoietin#\u5730\u5948\u5fb7#\u83ab\u8fbe\u975e\u5c3c#\u6c2f\u567b\u55ea#\u82ef\u5df4\u6bd4\u59a5#\u4fc3\u6027\u817a\u6fc0\u7d20#\u6cfc\u5c3c\u677e#\u9ebb\u9ec4\u8349#\u96c4\u70ef\u4e8c\u9187#\u5730\u585e\u7c73\u677e#tamoxifen#strychnine#androst#\u65b0\u578b\u6bd2\u54c1#\u675c\u51b7\u4e01#\u5174\u594b\u5242#mdma#\u6d77\u6d1b\u56e0#\u6d77luo\u56e0#heroin#diamorphine#diacetylmorphine#\u9e26\u7247#\u963f\u8299\u84c9#\u5496\u5561\u56e0#cocain#\u4e09\u5511\u4ed1#\u7f8e\u6c99\u916e#\u9ebb\u53e4#k\u7c89#\u51ef\u4ed6\u654f#ketamine#\u51b0\u6bd2#\u82ef\u4e19\u80fa#cannabis#\u5927\u9ebb#\u7231\u4ed6\u6b7b#\u6c2f\u80fa\u916e#benzodiazepines#\u7532\u57fa\u5b89\u975e\u4ed6\u660e#\u5b89\u975e\u4ed6\u547d#\u5417\u5561#\u8150\u8d25\u4e2d\u56fd#\u4e09\u4e2a\u5446\u5a4a#\u4f60\u529e\u4e8b\u6211\u653e\u5fc3#\u793e\u4f1a\u4e3b\u4e49\u706d\u4ea1#\u6253\u5012\u4e2d\u56fd#\u6253\u5012\u5171\u4ea7\u515a#\u6253\u5012\u5171\u4ea7\u4e3b\u4e49#\u6253\u5012\u80e1\u9526\u6d9b#\u6253\u5012\u6c5f\u6cfd\u6c11#\u6253\u5012\u6c5f\u4e3b\u5e2d#\u6253\u5012\u674e\u9e4f#\u6253\u5012\u7f57\u5e72#\u6253\u5012\u6e29\u5bb6\u5b9d#\u6253\u5012\u4e2d\u5171#\u6253\u5012\u6731\u9555#\u62b5\u5236\u5171\u4ea7\u515a#\u62b5\u5236\u5171\u4ea7\u4e3b\u4e49#\u62b5\u5236\u80e1\u9526\u6d9b#\u62b5\u5236\u6c5f\u6cfd\u6c11#\u62b5\u5236\u6c5f\u4e3b\u5e2d#\u62b5\u5236\u674e\u9e4f#\u62b5\u5236\u7f57\u5e72#\u62b5\u5236\u6e29\u5bb6\u5b9d#\u62b5\u5236\u4e2d\u5171#\u62b5\u5236\u6731\u9555\u57fa#\u706d\u4ea1\u4e2d\u56fd#\u4ea1\u515a\u4ea1\u56fd#\u7c89\u788e\u56db\u4eba\u5e2e#\u6fc0\u6d41\u4e2d\u56fd#\u7279\u4f9b#\u7279\u8d21#\u7279\u5171#zf\u5927\u697c#\u6b83\u89c6#\u8d2a\u6c61\u8150\u8d25#\u5f3a\u5236\u62c6\u9664#\u5f62\u5f0f\u4e3b\u4e49#\u653f\u6cbb\u98ce\u6ce2#\u592a\u5b50\u515a#\u4e0a\u6d77\u5e2e#\u5317\u4eac\u5e2e#\u6e05\u534e\u5e2e#\u7ea2\u8272\u8d35\u65cf#\u6743\u8d35\u96c6\u56e2#\u6cb3\u87f9\u793e\u4f1a#\u559d\u8840\u793e\u4f1a#\u4e5d\u98ce#9\u98ce#\u5341\u4e03\u5927#\u53417\u5927#17da#\u4e5d\u5b66#9\u5b66#\u56db\u98ce#4\u98ce#\u53cc\u89c4#\u5357\u8857\u6751#\u6700\u6deb\u5b98\u5458#\u8b66\u532a#\u5b98\u532a#\u72ec\u592b\u6c11\u8d3c#\u5b98\u5546\u52fe\u7ed3#\u57ce\u7ba1\u66b4\u529b\u6267\u6cd5#\u5f3a\u5236\u6350\u6b3e#\u6bd2\u8c7a#\u4e00\u515a\u6267\u653f#\u4e00\u515a\u4e13\u5236#\u4e00\u515a\u4e13\u653f#\u4e13\u5236\u653f\u6743#\u5baa\u6cd5\u6cd5\u9662#\u80e1\u5e73#\u82cf\u6653\u5eb7#\u8d3a\u536b\u65b9#\u8c2d\u4f5c\u4eba#\u7126\u56fd\u6807#\u4e07\u6da6\u5357#\u5f20\u5fd7\u65b0#\u8f9b\u705d\u5e74#\u9ad8\u52e4\u8363#\u738b\u70b3\u7ae0#\u9ad8\u667a\u665f#\u53f8\u9a6c\u7490#\u5218\u6653\u7af9#\u5218\u5bbe\u96c1#\u9b4f\u4eac\u751f#\u5bfb\u627e\u6797\u662d\u7684\u7075\u9b42#\u522b\u68a6\u6210\u7070#\u8c01\u662f\u65b0\u4e2d\u56fd#\u8ba8\u4f10\u4e2d\u5ba3\u90e8#\u5f02\u8bae\u4eba\u58eb#\u6c11\u8fd0\u4eba\u58eb#\u542f\u8499\u6d3e#\u9009\u56fd\u5bb6\u4e3b\u5e2d#\u6c11\u4e00\u4e3b#min\u4e3b#\u6c11\u7af9#\u6c11\u73e0#\u6c11\u732a#chinesedemocracy#\u5927\u8d66\u56fd\u9645#\u56fd\u9645\u7279\u8d66#da\u9009#\u6295\u516c#\u516c\u5934#\u5baa\u653f#\u5e73\u53cd#\u515a\u7ae0#\u7ef4\u6743#\u661d\u7231\u5b97#\u5baa\u7ae0#08\u5baa#08xz#\u62bf\u4e3b#\u654f\u4e3b#\u4eba\u62f3#\u4eba\u6728\u53c8#\u4ebaquan#renquan#\u4e2d\u56fd\u4eba\u6743#\u4e2d\u56fd\u65b0\u6c11\u515a#\u7fa4\u4f53\u4e8b\u4ef6#\u7fa4\u4f53\u6027\u4e8b\u4ef6#\u4e0a\u4e2d\u592e#\u53bb\u4e2d\u592e#\u8ba8\u8bf4\u6cd5#\u8bf7\u613f#\u8bf7\u547d#\u516c\u5f00\u4fe1#\u8054\u540d\u4e0a\u4e66#\u4e07\u4eba\u5927\u7b7e\u540d#\u4e07\u4eba\u9a9a\u52a8#\u622a\u8bbf#\u4e0a\u8bbf#shangfang#\u4fe1\u8bbf#\u8bbf\u6c11#\u96c6\u5408#\u96c6\u4f1a#\u7ec4\u7ec7\u96c6\u4f53#\u9759\u5750#\u9759zuo#jing\u5750#\u793a\u5a01#\u793awei#\u6e38\u884c#you\u884c#\u6cb9\u884c#\u6e38xing#youxing#\u5b98\u903c\u6c11\u53cd#\u53cdparty#\u53cd\u5171#\u6297\u8bae#\u4ea2\u8bae#\u62b5\u5236#\u4f4e\u5236#\u5e95\u5236#di\u5236#\u62b5zhi#dizhi#boycott#\u8840\u4e66#\u711a\u70e7\u4e2d\u56fd\u56fd\u65d7#baoluan#\u6d41\u8840\u51b2\u7a81#\u51fa\u73b0\u66b4\u52a8#\u53d1\u751f\u66b4\u52a8#\u5f15\u8d77\u66b4\u52a8#baodong#\u706d\u5171#\u6740\u6bd9#\u7f62\u5de5#\u9738\u5de5#\u7f62\u8003#\u7f62\u9910#\u9738\u9910#\u7f62\u53c2#\u7f62\u996d#\u7f62\u5403#\u7f62\u98df#\u7f62\u8bfe#\u7f62ke#\u9738\u8bfe#ba\u8bfe#\u7f62\u6559#\u7f62\u5b66#\u7f62\u8fd0#\u7f51\u7279#\u7f51\u8bc4\u5458#\u7f51\u7edc\u8bc4\u8bba\u5458#\u4e94\u6bdb\u515a#\u4e94\u6bdb\u4eec#5\u6bdb\u515a#\u6212\u4e25#jieyan#jie\u4e25#\u6212yan#8\u7684\u5e73\u65b9\u4e8b\u4ef6#\u77e5\u905364#\u516b\u4e5d\u5e74#\u8d30\u62fe\u5e74#2o\u5e74#20\u548c\u8c10\u5e74#\u8d30\u62fe\u5468\u5e74#\u516d\u56db#\u516d\u6cb3\u87f9\u56db#\u516d\u767e\u5ea6\u56db#\u516d\u548c\u8c10\u56db#\u9646\u56db#\u9646\u8086#198964#5\u670835#89\u5e74\u6625\u590f\u4e4b\u4ea4#64\u60e8\u6848#64\u65f6\u671f#64\u8fd0\u52a8#4\u4e8b\u4ef6#\u56db\u4e8b\u4ef6#\u5317\u4eac\u98ce\u6ce2#\u5b66\u6f6e#\u5b66chao#xuechao#\u5b66\u767e\u5ea6\u6f6e#\u95e8\u5b89\u5929#\u5929\u6309\u95e8#\u5766\u514b\u538b\u5927\u5b66\u751f#\u6c11\u4e3b\u5973\u795e#\u5386\u53f2\u7684\u4f24\u53e3#\u9ad8\u81ea\u8054#\u5317\u9ad8\u8054#\u8840\u6d17\u4eac\u57ce#\u56db\u4e8c\u516d\u793e\u8bba#\u738b\u4e39#\u67f4\u73b2#\u6c88\u5f64#\u5c01\u4ece\u5fb7#\u738b\u8d85\u534e#\u738b\u7ef4\u6797#\u543e\u5c14\u5f00\u5e0c#\u543e\u5c14\u5f00\u897f#\u4faf\u5fb7\u5065#\u960e\u660e\u590d#\u65b9\u52b1\u4e4b#\u848b\u6377\u8fde#\u4e01\u5b50\u9716#\u8f9b\u704f\u5e74#\u848b\u5f66\u6c38#\u4e25\u5bb6\u5176#\u9648\u4e00\u54a8#\u4e2d\u534e\u5c40\u57df\u7f51#\u515a\u7684\u5589\u820c#\u4e92\u8054\u7f51\u5ba1\u67e5#\u5f53\u5c40\u4e25\u5bc6\u5c01\u9501#\u65b0\u95fb\u5c01\u9501#\u5c01\u9501\u6d88\u606f#\u7231\u56fd\u8005\u540c\u76df#\u5173\u95ed\u6240\u6709\u8bba\u575b#\u7f51\u7edc\u5c01\u9501#\u91d1\u76fe\u5de5\u7a0b#gfw#\u65e0\u754c\u6d4f\u89c8#\u65e0\u754c\u7f51\u7edc#\u81ea\u7531\u95e8#\u4f55\u6e05\u6d9f#\u4e2d\u56fd\u7684\u9677\u9631#\u6c6a\u5146\u94a7#\u8bb0\u8005\u65e0\u7586\u754c#\u5883\u5916\u5a92\u4f53#\u7ef4\u57fa\u767e\u79d1#\u7ebd\u7ea6\u65f6\u62a5#bbc\u4e2d\u6587\u7f51#\u534e\u76db\u987f\u90ae\u62a5#\u4e16\u754c\u65e5\u62a5#\u4e1c\u68ee\u65b0\u95fb\u7f51#\u4e1c\u68ee\u7535\u89c6#\u661f\u5c9b\u65e5\u62a5#wikipedia#youtube#googleblogger#\u7f8e\u56fd\u5e7f\u64ad\u516c\u53f8#\u82f1\u56fd\u91d1\u878d\u65f6\u62a5#\u81ea\u7531\u4e9a\u6d32#\u81ea\u7531\u65f6\u62a5#\u4e2d\u56fd\u65f6\u62a5#\u53cd\u5206\u88c2#\u5a01\u80c1\u8bba#\u5de6\u7ffc\u8054\u76df#\u9493\u9c7c\u5c9b#\u4fdd\u9493\u7ec4\u7ec7#\u4e3b\u6743#\u5f13\u5355#\u706b\u4e4d#\u6728\u4ed3#\u77f3\u8096#\u6838\u86cb#\u6b65qiang#bao\u70b8#\u7206zha#baozha#zha\u836f#zha\u5f39#\u70b8dan#\u70b8yao#zhadan#zhayao#hmtd#\u4e09\u785d\u57fa\u7532\u82ef#\u516d\u6c1f\u5316\u94c0#\u70b8\u836f\u914d\u65b9#\u5f39\u836f\u914d\u65b9#\u70b8\u5f39\u914d\u65b9#\u76ae\u7bb1\u70b8\u5f39#\u706b\u836f\u914d\u65b9#\u4eba\u4f53\u70b8\u5f39#\u4eba\u8089\u70b8\u5f39#\u89e3\u653e\u519b#\u5175\u529b\u90e8\u7f72#\u519b\u8f6c#\u519b\u4e8b\u793e#8341\u90e8\u961f#\u7b2c21\u96c6\u56e2\u519b#\u4e03\u5927\u519b\u533a#7\u5927\u519b\u533a#\u5317\u4eac\u519b\u533a#\u6c88\u9633\u519b\u533a#\u6d4e\u5357\u519b\u533a#\u6210\u90fd\u519b\u533a#\u5e7f\u5dde\u519b\u533a#\u5357\u4eac\u519b\u533a#\u5170\u5dde\u519b\u533a#\u989c\u8272\u9769\u547d#\u89c4\u6a21\u51b2\u7a81#\u5854\u5229\u73ed#\u57fa\u5730\u7ec4\u7ec7#\u6050\u6016\u5206\u5b50#\u6050\u6016\u4efd\u5b50#\u4e09\u80a1\u52bf\u529b#\u5370\u5c3c\u5c60\u534e#\u5370\u5c3c\u4e8b\u4ef6#\u848b\u516c\u7eaa\u5ff5\u6b4c#\u9a6c\u82f1\u4e5d#mayingjiu#\u674e\u5929\u7fbd#\u82cf\u8d1e\u660c#\u6797\u6587\u6f2a#\u9648\u6c34\u6241#\u9648s\u6241#\u9648\u968f\u4fbf#\u963f\u6241#a\u6241#\u544a\u5168\u56fd\u540c\u80de\u4e66#\u53f0\u767e\u5ea6\u6e7e#\u53f0\u5b8c#\u53f0wan#taiwan#\u53f0\u5f2f#\u6e7e\u53f0#\u53f0\u6e7e\u56fd#\u53f0\u6e7e\u5171\u548c\u56fd#\u53f0\u519b#\u53f0\u72ec#\u53f0\u6bd2#\u53f0du#taidu#twdl#\u4e00\u4e2d\u4e00\u53f0#\u6253\u53f0\u6e7e#\u4e24\u5cb8\u6218\u4e89#\u653b\u5360\u53f0\u6e7e#\u652f\u6301\u53f0\u6e7e#\u8fdb\u653b\u53f0\u6e7e#\u5360\u9886\u53f0\u6e7e#\u7edf\u4e00\u53f0\u6e7e#\u6536\u590d\u53f0\u6e7e#\u767b\u9646\u53f0\u6e7e#\u89e3\u653e\u53f0\u6e7e#\u89e3\u653etw#\u89e3\u51b3\u53f0\u6e7e#\u5149\u590d\u6c11\u56fd#\u53f0\u6e7e\u72ec\u7acb#\u53f0\u6e7e\u95ee\u9898#\u53f0\u6d77\u95ee\u9898#\u53f0\u6d77\u5371\u673a#\u53f0\u6d77\u7edf\u4e00#\u53f0\u6d77\u5927\u6218#\u53f0\u6d77\u6218\u4e89#\u53f0\u6d77\u5c40\u52bf#\u5165\u8054#\u5165\u8033\u5173#\u4e2d\u534e\u8054\u90a6#\u56fd\u6c11\u515a#x\u6c11\u515a#\u6c11\u8fdb\u515a#\u9752\u5929\u767d\u65e5#\u95f9\u72ec\u7acb#duli#fenlie#\u65e5\u672c\u4e07\u5c81#\u5c0f\u6cfd\u4e00\u90ce#\u52a3\u7b49\u6c11\u65cf#\u6c49\u4eba#\u6c49\u7ef4#\u7ef4\u6c49#\u7ef4\u543e#\u543e\u5c14#\u70ed\u6bd4\u5a05#\u4f0a\u529b\u54c8\u6728#\u7586\u72ec#\u4e1c\u7a81\u53a5\u65af\u5766\u89e3\u653e\u7ec4\u7ec7#\u4e1c\u7a81\u89e3\u653e\u7ec4\u7ec7#\u8499\u53e4\u5206\u88c2\u5206\u5b50#\u5217\u786e#\u963f\u65fa\u664b\u7f8e#\u85cf\u4eba#\u81e7\u4eba#zang\u4eba#\u85cf\u6c11#\u85cfm#\u8fbe\u8d56#\u8d56\u8fbe#dalai#\u54d2\u8d56#dl\u5587\u561b#\u4e39\u589e\u5609\u63aa#\u6253\u7838\u62a2#\u897f\u72ec#\u85cf\u72ec#\u846c\u72ec#\u81e7\u72ec#\u85cf\u6bd2#\u85cfdu#zangdu#\u652f\u6301zd#\u85cf\u66b4\u4e71#\u85cf\u9752\u4f1a#\u96ea\u5c71\u72ee\u5b50\u65d7#\u62c9\u8428#\u5566\u8428#\u5566\u6c99#\u5566\u6492#\u62c9sa#lasa#la\u8428#\u897f\u85cf#\u85cf\u897f#\u85cf\u6625\u9601#\u85cf\u7368#\u85cf\u72ec#\u85cf\u72ec\u7acb#\u85cf\u5987\u4f1a#\u85cf\u9752\u4f1a#\u85cf\u5b57\u77f3#xizang#xi\u85cf#x\u85cf#\u897fz#tibet#\u5e0c\u846c#\u5e0c\u85cf#\u7852\u85cf#\u7a00\u85cf#\u897f\u810f#\u897f\u5958#\u897f\u846c#\u897f\u81e7#\u63f4\u85cf#bjork#\u738b\u5343\u6e90#\u5b89\u62c9#\u56de\u6559#\u56de\u65cf#\u56de\u56de#\u56de\u6c11#\u7a46\u65af\u6797#\u7a46\u7f55\u7a46\u5fb7#\u7a46\u7f55\u9ed8\u5fb7#\u9ed8\u7f55\u9ed8\u5fb7#\u4f0a\u65af\u5170#\u5723\u6218\u7ec4\u7ec7#\u6e05\u771f#\u6e05zhen#qingzhen#\u771f\u4e3b#\u963f\u62c9\u4f2f#\u9ad8\u4e3d\u68d2\u5b50#\u97e9\u56fd\u72d7#\u6ee1\u6d32\u7b2c\u4e09\u5e1d\u56fd#\u6ee1\u72d7#\u9791\u5b50#\u6c5f\u4e11\u95fb#\u6c5f\u5ae1\u7cfb#\u6c5f\u6bd2#\u6c5f\u72ec\u88c1#\u6c5f\u86e4\u87c6#\u6c5f\u6838\u5fc3#\u6c5f\u9ed1\u5fc3#\u6c5f\u80e1\u5185\u6597#\u6c5f\u7978\u5fc3#\u6c5f\u5bb6\u5e2e#\u6c5f\u7ef5\u6052#\u6c5f\u6d3e\u548c\u80e1\u6d3e#\u6c5f\u6d3e\u4eba\u9a6c#\u6c5f\u6cc9\u96c6\u56e2#\u6c5f\u4eba\u9a6c#\u6c5f\u4e09\u6761\u817f#\u6c5f\u6c0f\u96c6\u56e2#\u6c5f\u6c0f\u5bb6\u65cf#\u6c5f\u6c0f\u653f\u6cbb\u5c40#\u6c5f\u6c0f\u653f\u6cbb\u59d4\u5458#\u6c5f\u68b3\u5934#\u6c5f\u592a\u4e0a#\u6c5f\u620f\u5b50#\u6c5f\u7cfb\u4eba#\u6c5f\u7cfb\u4eba\u9a6c#\u6c5f\u5bb0\u6c11#\u6c5f\u8d3c#\u6c5f\u8d3c\u6c11#\u6c5f\u4e3b\u5e2d#\u9ebb\u679c\u4e38#\u9ebb\u5c06\u900f#\u9ebb\u9189\u5f39#\u9ebb\u9189\u72d7#\u9ebb\u9189\u67aa#\u9ebb\u9189\u69cd#\u9ebb\u9189\u836f#\u9ebb\u9189\u85e5#\u53f0\u72ec#\u53f0\u6e7e\u7248\u5047\u5e01#\u53f0\u6e7e\u72ec\u7acb#\u53f0\u6e7e\u56fd#\u53f0\u6e7e\u5e94\u8be5\u72ec\u7acb#\u53f0\u6e7e\u6709\u6743\u72ec\u7acb#\u5929\u706d\u4e2d\u5171#\u4e2d\u5171\u5e2e\u51f6#\u4e2d\u5171\u4fdd\u547d#\u4e2d\u5171\u88c1#\u4e2d\u5171\u515a\u6587\u5316#\u4e2d\u5171\u8150\u8d25#\u4e2d\u5171\u7684\u8840\u65d7#\u4e2d\u5171\u7684\u7f6a\u6076#\u4e2d\u5171\u5e1d\u56fd#\u4e2d\u5171\u72ec\u88c1#\u4e2d\u5171\u5c01\u9501#\u4e2d\u5171\u5c01\u7f51#\u4e2d\u5171\u8150\u8d25#\u4e2d\u5171\u9ed1#\u4e2d\u5171\u9ed1\u5e2e#\u4e2d\u5171\u89e3\u4f53#\u4e2d\u5171\u8fd1\u671f\u6743\u529b\u6597\u4e89#\u4e2d\u5171\u6050\u60e7#\u4e2d\u5171\u6743\u529b\u6597\u4e89#\u4e2d\u5171\u4efb\u7528#\u4e2d\u5171\u9000\u515a#\u4e2d\u5171\u6d17\u8111#\u4e2d\u5171\u90aa\u6559#\u4e2d\u5171\u90aa\u6bd2\u7d20#\u4e2d\u5171\u653f\u6cbb\u6e38\u620f#\u6253\u4eba#\u6253\u4eba#\u62c6\u8fc1#\u62c6\u8fc1#\u7ea0\u7eb7#\u7ea0\u7eb7#\u76d7\u7a83#\u76d7\u7a83#\u5b89\u7720\u916e#\u4ee3\u836f\u7269\u6bd2\u54c1\u7c7b\uff1a\u8840\u6d46#\u666e\u8418\u6d1b\u5c14#\u544b\u585e\u7c73#\u897f\u5e03\u66f2\u660e#testosterone#\u80f0\u5c9b\u7d20\u6837\u751f\u957f\u56e0\u5b50#\u4fc3\u7ea2\u7ec6\u80de\u751f\u6210\u7d20#\u5730\u897f\u6cee#\u5c3c\u53ef\u5239\u7c73#\u7532\u777e\u916e#adrenaline#erythropoietin#\u5730\u5948\u5fb7#\u83ab\u8fbe\u975e\u5c3c#\u6c2f\u567b\u55ea#\u82ef\u5df4\u6bd4\u59a5#\u4fc3\u6027\u817a\u6fc0\u7d20#\u6cfc\u5c3c\u677e#\u9ebb\u9ec4\u8349#\u96c4\u70ef\u4e8c\u9187#\u5730\u585e\u7c73\u677e#tamoxifen#strychnine#androst#\u65b0\u578b\u6bd2\u54c1#\u675c\u51b7\u4e01#\u5174\u594b\u5242#mdma#\u6d77\u6d1b\u56e0#\u6d77luo\u56e0#heroin#diamorphine#diacetylmorphine#\u9e26\u7247#\u963f\u8299\u84c9#\u5496\u5561\u56e0#cocain#\u4e09\u5511\u4ed1#\u7f8e\u6c99\u916e#\u9ebb\u53e4#k\u7c89#\u51ef\u4ed6\u654f#ketamine#\u51b0\u6bd2#\u82ef\u4e19\u80fa#cannabis#\u5927\u9ebb#\u7231\u4ed6\u6b7b#\u6c2f\u80fa\u916e#benzodiazepines#\u7532\u57fa\u5b89\u975e\u4ed6\u660e#\u5b89\u975e\u4ed6\u547d#\u5417\u5561#morphine#\u6447\u5934\u4e38#\u8ff7\u836f#\u4e56\u4e56\u7c89#narcotic#\u9ebb\u9189\u836f#\u7cbe\u795e\u836f\u54c1#\u4e13\u4e1a\u4ee3\u7406#\u5e2e\u5fd9\u70b9\u4e00\u4e0b#\u5e2e\u5fd9\u70b9\u4e0b#\u8bf7\u70b9\u51fb\u8fdb\u5165#\u8be6\u60c5\u8bf7\u8fdb\u5165#\u79c1\u4eba\u4fa6\u63a2#\u79c1\u5bb6\u4fa6\u63a2#\u9488\u5b54\u6444\u8c61#\u8c03\u67e5\u5a5a\u5916\u60c5#\u4fe1\u7528\u5361\u63d0\u73b0#\u65e0\u62b5\u62bc\u8d37\u6b3e#\u5e7f\u544a\u4ee3\u7406#\u539f\u97f3\u94c3\u58f0#\u501f\u8179\u751f\u5b50#\u627e\u4e2a\u5988\u5988#\u627e\u4e2a\u7238\u7238#\u4ee3\u5b55\u5988\u5988#\u4ee3\u751f\u5b69\u5b50#\u4ee3\u5f00\u53d1\u7968#\u817e\u8baf\u5ba2\u670d\u7535\u8bdd#\u9500\u552e\u70ed\u7ebf#\u514d\u8d39\u8ba2\u8d2d\u70ed\u7ebf#\u4f4e\u4ef7\u51fa\u552e#\u6b3e\u5230\u53d1\u8d27#\u56de\u590d\u53ef\u89c1#\u8fde\u9501\u52a0\u76df#\u52a0\u76df\u8fde\u9501#\u514d\u8d39\u4e8c\u7ea7\u57df\u540d#\u514d\u8d39\u4f7f\u7528#\u514d\u8d39\u7d22\u53d6#\u8681\u529b\u795e#\u5a74\u513f\u6c64#\u552e\u80be#\u523b\u7ae0\u529e#\u4e70\u5c0f\u8f66#\u5957\u724c\u8f66#\u739b\u96c5\u7f51#\u7535\u8111\u4f20\u8baf#\u89c6\u9891\u6765\u6e90#\u4e0b\u8f7d\u901f\u5ea6#\u9ad8\u6e05\u5728\u7ebf#\u5168\u96c6\u5728\u7ebf#\u5728\u7ebf\u64ad\u653e#txt\u4e0b\u8f7d#\u516d\u4f4dqq#6\u4f4dqq#\u4f4d\u7684qq#\u4e2aqb#\u9001qb#\u7528\u5200\u6a2a\u5411\u5207\u8179#\u5b8c\u5168\u81ea\u6740\u624b\u518c#\u56db\u6d77\u5e2e#\u8db3\u7403\u6295\u6ce8#\u5730\u4e0b\u94b1\u5e84#\u4e2d\u56fd\u590d\u5174\u515a#\u963f\u6ce2\u7f57\u7f51#\u66fe\u9053\u4eba#\u516d\u5408\u5f69#\u6539\u5377\u5185\u5e55#\u66ff\u8003\u8bd5#\u9690\u5f62\u8033\u673a#\u51fa\u552e\u7b54\u6848#\u8003\u4e2d\u7b54\u6848#\u7b54an#da\u6848#\u8d44\u91d1\u5468\u8f6c#\u6551\u5e02#\u80a1\u5e02\u5708\u94b1#\u5d29\u76d8#\u8d44\u91d1\u77ed\u7f3a#\u8bc1\u76d1\u4f1a#\u8d28\u62bc\u8d37\u6b3e#\u5c0f\u989d\u8d37\u6b3e#\u5468\u5c0f\u5ddd#\u5218\u660e\u5eb7#\u5c1a\u798f\u6797#\u5b54\u4e39#\u6c49\u82af\u9020\u5047#\u6768\u6811\u5bbd#\u4e2d\u5370\u8fb9\u754c\u8c08\u5224\u7ed3\u679c#\u5582\u5976\u95e8#\u6478nai\u95e8#\u9152\u74f6\u95e8#\u8131\u88e4\u95e8#75\u4e8b\u4ef6#\u4e4c\u9c81\u6728\u9f50#\u65b0\u7586\u9a9a\u4e71#\u9488\u523a#\u6253\u9488#\u98df\u5802\u6da8\u4ef7#\u996d\u83dc\u6da8\u4ef7#h1n1#\u761f\u75ab\u7206\u53d1#yangjia#y\u4f73#yang\u4f73#\u6768\u4f73#\u6768j#\u88ad\u8b66#\u6740\u8b66#\u6b66\u4faf\u7960#\u5dddb26931#\u8d3a\u7acb\u65d7#\u5468\u6b63\u6bc5#px\u9879\u76ee#\u9a82\u56db\u5ddd#\u5bb6l\u798f#\u5bb6le\u798f#\u52a0\u4e86\u670d#\u9ea6\u5f53\u52b3\u88ab\u7838#\u8c46\u8150\u6e23#\u8fd9\u4e0d\u662f\u5929\u707e#\u9f99\u5c0f\u971e#\u9707\u5176\u56fd\u571f#yuce#\u63d0\u524d\u9884\u6d4b#\u5730\u9707\u9884\u6d4b#\u9690\u7792\u5730\u9707#\u674e\u56db\u5149\u9884\u6d4b#\u87fe\u870d\u8fc1\u5f99#\u5730\u9707\u6765\u5f97\u66f4\u731b\u70c8#\u516b\u7ea7\u5730\u9707\u6beb\u65e0\u9884\u62a5#\u8e29\u8e0f\u4e8b\u6545#\u8042\u6811\u658c#\u4e07\u91cc\u5927\u9020\u6797#\u9648\u76f8\u8d35#\u5f20\u4e39\u7ea2#\u5c39\u65b9\u660e#\u674e\u6811\u83f2#\u738b\u5949\u53cb#\u96f6\u516b\u5965\u8fd0\u8270#\u60e8\u5965#\u5965\u6655#\u51f9\u6655#\u61ca\u8fd0#\u61ca\u5b55#\u5965\u5b55#\u5965\u4f60\u5988\u7684\u8fd0#\u53cd\u5965#628\u4e8b\u4ef6#weng\u5b89#wengan#\u7fc1\u5b89#\u74ee\u5b89\u4e8b\u4ef6#\u5316\u5de5\u5382\u7206\u70b8#\u8ba8\u56de\u5de5\u8d44#\u4ee3\u529e\u53d1\u7968#\u4ee3\u529e\u5404#\u4ee3\u529e\u6587#\u4ee3\u529e\u5b66#\u4ee3\u529e\u5236#\u4ee3\u8fa6#\u4ee3\u8868\u70e6#\u4ee3\u5f00\u53d1\u7968#\u4ee3\u958b#\u4ee3\u8003#\u4ee3\u7406\u53d1\u7968#\u4ee3\u7406\u7968\u636e#\u4ee3\u60a8\u8003#\u4ee3\u8ba8\u503a#\u4ee3\u5199\u6bd5#\u4ee3\u5199\u8bba\u6587#\u4ee3\u5b55#\u4ee3\u8ffd\u503a#\u8003\u540e\u4ed8\u6b3e#\u8003\u673a\u6784#\u8003\u8003\u9093#\u8003\u8054\u76df#\u8003\u524d\u7b54\u6848#\u8003\u524d\u4ed8#\u8003\u524d\u5bc6\u5377#\u8003\u524d\u9884\u6d4b#\u8003\u8bd5,\u7b54\u6848#\u8003\u8bd5,\u4f5c\u5f0a\u5668#\u8003\u8bd5\u5305\u8fc7#\u8003\u8bd5\u4fdd#\u8003\u8bd5\u7b54\u6848#\u8003\u8bd5\u673a\u6784#\u8003\u8bd5\u8054\u76df#\u8003\u8bd5\u67aa#\u8003\u8bd5\u4f5c\u5f0a#\u8003\u8bd5\u4f5c\u5f0a\u5668#\u8003\u7814\u8003\u4e2d#\u8003\u4e2d\u7b54\u6848#\u900f\u89c6\u529f\u80fd#\u900f\u89c6\u955c#\u900f\u89c6\u6251#\u900f\u89c6\u5668#\u900f\u89c6\u773c\u775b#\u900f\u89c6\u773c\u955c#\u900f\u89c6\u836f#\u900f\u89c6\u4eea#\u6253\u6b7b\u7ecf\u8fc7#\u6253\u6b7b\u4eba#\u6253\u7838\u529e\u516c#\u6253\u7838\u62a2#\u5b89\u7720\u916e#\u4ee3\u8840\u6d46#\u666e\u8418\u6d1b\u5c14#\u544b\u585e\u7c73#\u897f\u5e03\u66f2\u660e#testosterone#\u80f0\u5c9b\u7d20\u6837\u751f\u957f\u56e0\u5b50#\u4fc3\u7ea2\u7ec6\u80de\u751f\u6210\u7d20#\u5730\u897f\u6cee#\u5c3c\u53ef\u5239\u7c73#\u7532\u777e\u916e#adrenaline#erythropoietin#\u5730\u5948\u5fb7#\u83ab\u8fbe\u975e\u5c3c#\u6c2f\u567b\u55ea#\u82ef\u5df4\u6bd4\u59a5#\u4fc3\u6027\u817a\u6fc0\u7d20#\u6cfc\u5c3c\u677e#\u9ebb\u9ec4\u8349#\u96c4\u70ef\u4e8c\u9187#\u5730\u585e\u7c73\u677e#tamoxifen#strychnine#androst#\u65b0\u578b\u6bd2\u54c1#\u675c\u51b7\u4e01#\u5174\u594b\u5242#mdma#\u6d77\u6d1b\u56e0#\u6d77luo\u56e0#heroin#diamorphine#diacetylmorphine#\u9e26\u7247#\u963f\u8299\u84c9#\u5496\u5561\u56e0#cocain#\u4e09\u5511\u4ed1#\u7f8e\u6c99\u916e#\u9ebb\u53e4#k\u7c89#\u51ef\u4ed6\u654f#ketamine#\u51b0\u6bd2#\u82ef\u4e19\u80fa#cannabis#\u5927\u9ebb#\u7231\u4ed6\u6b7b#\u6c2f\u80fa\u916e#benzodiazepines#\u7532\u57fa\u5b89\u975e\u4ed6\u660e#\u5b89\u975e\u4ed6\u547d#\u5417\u5561#KC\u77ed\u4fe1#KC\u5609\u5e74\u534e#\u77ed\u4fe1\u5e7f\u544a#\u77ed\u4fe1\u7fa4\u53d1#\u77ed\u4fe1\u7fa4\u53d1\u5668#\u5c0f6\u7075\u901a#\u77ed\u4fe1\u5546\u52a1\u5e7f\u544a#\u6bb5\u5f55\u5b9a#\u65e0\u754c\u6d4f\u89c8#\u65e0\u754c\u6d4f\u89c8\u5668#\u65e0\u754c#\u65e0\u7f51\u754c#\u65e0\u7f51\u754c\u6d4f\u89c8#\u65e0\u5e2e\u56fd#KC\u63d0\u793a#KC\u7f51\u7ad9#UP8\u65b0\u52bf\u529b#\u767d\u76ae\u4e66#UP\u65b0\u52bf\u529b#\u79fb\u6c11#\u6613\u8fbe\u7f51\u7edc\u5361#\u5b89\u9b42\u7f51#\u7f62\u5de5#\u7f62\u8bfe#\u7ebd\u5d14\u83b1\u4e03\u6298#\u624b\u673a\u590d\u5236#\u624b\u673a\u94c3\u58f0#\u7f51\u5173#\u795e\u901a\u52a0\u6301\u6cd5#\u51681\u7403\u901a#\u59826\u610f\u901a#\u6e05\u4ed3#\u7075\u52a8\u5361#\u7b54\u6848\u536b\u661f\u63a5\u6536\u673a#\u9ad8\u85aa\u517b\u5ec9#\u8003\u540e\u4ed8\u6b3e#\u4f73\u9759\u5b89\u5b9a\u7247#\u822a\u7a7a\u6bcd\u8230#\u822a\u7a7a\u552e\u7968#\u53f7\u7801\u767e\u4e8b\u901a#\u8003\u524d\u53d1\u653e#\u6210\u672c\u4ef7#\u8bda\u4fe1\u901a\u624b\u673a\u5546\u57ce#\u9ad8\u5229\u8d37#\u80544\u901a#\u9ed1\u5e84#\u9ed1\u624b\u515a#\u9ed1\u8f66#\u8054\u901a\u8d35\u5bbe\u5361#\u8054\u603b#\u8054\u603b\u8fd9\u58f0\u4f20\u5355#\u8054\u603b\u4e4b\u58f0\u4f20\u5355#\u9ad8\u606f\u8d37\u6b3e#\u9ad8\u5e72\u5b50\u5f1f#\u606d\u559c\u4f60\u7684\u53f7\u7801#\u606d\u559c\u60a8\u7684\u53f7\u7801#\u9ad8\u5e72\u5b50\u5973#\u5404\u4e2a\u94f6\u884c\u5168\u79f0#\u5404\u79cd\u53d1\u7968#\u9ad8\u5b98#\u9ad8\u5b98\u4e92\u8c03#\u9ad8\u5b98\u5b50\u5973#\u559d\u4e00\u9001\u4e00#\u5361\u53f7#\u590d\u5236#\u76d1\u542c\u738b#\u4f20\u5355#\u65e6\u79d1#\u9493\u9c7c\u5c9b#\u9493\u9c7c\u53f0#\u5f53\u5b98\u9760\u540e\u53f0#\u515a\u6821\u5b89\u63d2\u4eb2\u4fe1#\u4f20\u4e5d\u4fc3\u4e09#\u5ba2\u6237\u7aef\u975e\u6cd5\u5b57\u7b26#\u523b\u7ae0#\u5927\u9ebb\u6811\u8102#\u5927\u9ebb\u6cb9#\u5927\u6cd5#\u5927\u6cd5\u5f1f\u5b50#dpp\u5927\u6cd5#fa lun#falu#\u53d1\u62a1#\u53d1\u62a1\u529f#\u6d17\u8111#\u4e0b\u6cd5\u8f6e#\u53d1\u8f6e#\u53d1\u4f26#\u53d1\u4f26\u529f#\u53d1\u4ed1#\u53d1\u6ca6#\u53d1\u7eb6#\u53d1\u8bba#\u53d1\u8bba\u529f#\u53d1\u8bba\u516c#\u53d1\u6b63\u5ff5#\u53d1\u56f5#\u53d1\u6123#\u53d1\u779f#\u7f5a\u62a1#\u7f5a\u4f26#\u7f5a\u4ed1#\u7f5a\u6ca6#\u7f5a\u7eb6#\u7f5a\u56f5#\u7b4f\u62a1#\u7b4f\u8f6e#\u7b4f\u4f26#\u7b4f\u4ed1#\u7b4f\u6ca6#\u7b4f\u7eb6#\u7b4f\u8bba#\u7b4f\u56f5#\u4f10\u62a1#\u4f10\u8f6e#\u4f10\u4f26#\u4f10\u4ed1#\u4f10\u6ca6#\u4f10\u8bba#\u4f10\u56f5#\u4e4f\u62a1#\u4e4f\u8f6e#\u4e4f\u4f26#\u4e4f\u4ed1#\u4e4f\u6ca6#\u4e4f\u7eb6#\u4e4f\u8bba#\u4e4f\u56f5#\u9600\u62a1#\u9600\u4f26#\u9600\u4ed1#\u9600\u6ca6#\u9600\u7eb6#\u9600\u8bba#\u9600\u56f5#\u6cd5 \u8f6e \u529f#\u6cd5*\u529f#\u6cd5.\u8f6e.\u529f#\u6cd5L\u529f#\u6cd5lun\u529f#\u6cd5\u529f#\u6cd5\u4f1a#\u6cd5\u62a1#\u6cd5\u62a1\u529f#\u6cd5\u8f6e#\u6cd5\u8f6e\u5927\u6cd5#\u6cd5\u8f6e\u4f5b\u6cd5#\u6cd5\u8f6e\u529f#\u6cd5\u4f26#\u6cd5\u4ed1#\u6cd5\u6ca6#\u6cd5\u7eb6#\u6cd5\u8bba#\u6cd5\u5341\u8f6e\u5341\u529f#\u6cd5\u897f\u65af#\u6cd5\u9662#\u6cd5\u6b63#\u6cd5\u8c2a#\u6cd5\u8c2a\u529f#\u6cd5\u8f2a#\u6cd5\u56f5#\u6cd5\u6123#\u73d0.\u8f2a\u529f#\u73d0\u62a1#\u73d0\u8f6e#\u73d0\u4f26#\u73d0\u4ed1#\u73d0\u6ca6#\u4e94\u4e0d#\u4e94\u4e0d\u4e89\u9e23\u8bba\u575b#\u4e94\u51fa\u4e09\u8fdb#\u4e94\u5957\u529f\u6cd5#\u909d\u9526\u6587#\u57a1\u62a1#\u57a1\u8f6e#\u57a1\u4f26#\u57a1\u4ed1#\u57a1\u6ca6#\u57a1\u7eb6#\u57a1\u8bba#\u57a1\u56f5#\u8333\u6fa4\u6c11#\u836d\u5fd7#\u95f3\u5fd7#\u95f5\u7ef4\u65b9#\u6c35\u53bb#\u6c35\u53bb\u8f66\u4ed1\u5de5\u529b#\u8f6c\u6cd5\u8f6e#\u781d\u62a1#\u781d\u8f6e#\u781d\u4f26#\u781d\u4ed1#\u781d\u6ca6#\u781d\u7eb6#\u771f\u3001\u5584\u3001\u5fcd#\u771f\u7406\u6559#\u771f\u5584\u7f8e#\u771f\u5584\u5fcd#\u781d\u8bba#\u781d\u56f5#\u6cd3\u5fd7#\u5c59\u6c11#\u73d0\u7eb6#\u73d0\u8bba#\u73d0\u56f5#falun#Falundafa#fa\u8f6e#Flg#\u5f1f\u5b50#\u5730\u4e0b\u6559\u4f1a#\u70bc\u529f#\u68a6\u7f51\u6d2a\u5fd7#\u8f6e\u5927#\u62a1\u529f#\u8f6e\u529f#\u4f26\u529f#\u6469\u95e8\u6559#\u4e09\u6c34\u6cd5\u8f6e#\u4e09\u5511\u4ed1#\u5929\u7687#\u5929\u6012#\u5929\u846c#\u8f66\u81e3#\u8fbe\u8d56#\u529f\u6cd5#\u8bb2\u6cd5#\u57fa\u7763#\u57fa\u7763\u6559#\u62a4\u6cd5#\u56de\u6559#\u6559\u5f92#\u529f\u53cb#\u5927\u5e08#\u8fbe\u8d56\u5587\u561b#\u8679\u5fd7#\u9e3f\u5fd7#\u6d2a\u4f20#\u8d2f\u901a\u4e24\u6781\u6cd5#\u5149\u7956#\u6d2a\u541f#\u6d2a\u54f2\u80dc#\u6d2a\u5fd7#\u5b8f\u6cd5#\u89c2\u4e16\u97f3#\u5b8f\u5fd7#\u5f18\u5fd7#\u53e4\u5170\u7ecf#\u7ea2\u5fd7#\u8f66\u5e93#\u8f66\u4ed1#\u7ecf\u6587#\u7231\u5973\u4eba#\u7231\u6db2#\u6309\u6469\u68d2#\u62d4\u51fa\u6765#\u7206\u8349#\u5305\u4e8c\u5976#\u66b4\u5e72#\u66b4\u5978#\u66b4\u4e73#\u7206\u4e73#\u66b4\u6deb#\u5c44#\u88ab\u64cd#\u88ab\u63d2#\u88ab\u5e72#\u903c\u5978#\u4ed3\u4e95\u7a7a#\u63d2\u66b4#\u64cd\u903c#\u64cd\u9ed1#\u64cd\u70c2#\u808f\u4f60#\u808f\u6b7b#\u64cd\u6b7b#\u64cd\u6211#\u5395\u5974#\u63d2\u6bd4#\u63d2b#\u63d2\u903c#\u63d2\u8fdb#\u63d2\u4f60#\u63d2\u6211#\u63d2\u9634#\u6f6e\u5439#\u6f6e\u55b7#\u6210\u4ebadv#\u6210\u4eba\u7535\u5f71#\u6210\u4eba\u8bba\u575b#\u6210\u4eba\u5c0f\u8bf4#\u6210\u4eba\u7535#\u6210\u4eba\u7535\u5f71#\u6210\u4eba\u5361\u901a#\u6210\u4eba\u804a#\u6210\u4eba\u7247#\u6210\u4eba\u89c6#\u6210\u4eba\u56fe#\u6210\u4eba\u6587#\u6210\u4eba\u5c0f#\u6210\u4eba\u7535\u5f71#\u6210\u4eba\u8bba\u575b#\u6210\u4eba\u8272\u60c5#\u6210\u4eba\u7f51\u7ad9#\u6210\u4eba\u6587\u5b66#\u6210\u4eba\u5c0f\u8bf4#\u8273\u60c5\u5c0f\u8bf4#\u6210\u4eba\u6e38\u620f#\u5403\u7cbe#\u8d64\u88f8#\u62bd\u63d2#\u624c\u7531\u63d2#\u62bd\u4e00\u63d2#\u6625\u836f#\u5927\u6ce2#\u5927\u529b\u62bd\u9001#\u5927\u4e73#\u8361\u5987#\u8361\u5973#\u76d7\u64ae#\u591a\u4eba\u8f6e#\u53d1\u6d6a#\u653e\u5c3f#\u80a5\u903c#\u7c89\u7a74#\u5c01\u9762\u5973\u90ce#\u98ce\u6708\u5927\u9646#\u5e72\u6b7b\u4f60#\u5e72\u7a74#\u809b\u4ea4#\u809b\u95e8#\u9f9f\u5934#\u88f9\u672c#\u56fd\u4ea7av#\u597d\u5ae9#\u8c6a\u4e73#\u9ed1\u903c#\u540e\u5ead#\u540e\u7a74#\u864e\u9a91#\u82b1\u82b1\u516c\u5b50#\u6362\u59bb\u4ff1\u4e50\u90e8#\u9ec4\u7247#\u51e0\u5427#\u9e21\u5427#\u9e21\u5df4#\u9e21\u5978#\u5bc2\u5bde\u7537#\u5bc2\u5bde\u5973#\u5993\u5973#\u6fc0\u60c5#\u96c6\u4f53\u6deb#\u5978\u60c5#\u53eb\u5e8a#\u811a\u4ea4#\u91d1\u9cde\u5c82\u662f\u6c60\u4e2d\u7269#\u91d1\u9e9f\u5c82\u662f\u6c60\u4e2d\u7269#\u7cbe\u6db2#\u5c31\u53bb\u65e5#\u5de8\u5c4c#\u83ca\u82b1\u6d1e#\u83ca\u95e8#\u5de8\u5976#\u5de8\u4e73#\u83ca\u7a74#\u5f00\u82de#\u53e3\u7206#\u53e3\u6d3b#\u53e3\u4ea4#\u53e3\u5c04#\u53e3\u6deb#\u88e4\u889c#\u72c2\u64cd#\u72c2\u63d2#\u6d6a\u903c#\u6d6a\u5987#\u6d6a\u53eb#\u6d6a\u5973#\u72fc\u53cb#\u804a\u6027#\u6d41\u6deb#\u94c3\u6728\u9ebb#\u51cc\u8fb1#\u6f0f\u4e73#\u9732b#\u4e71\u4ea4#\u4e71\u4f26#\u8f6e\u66b4#\u8f6e\u64cd#\u8f6e\u5978#\u88f8\u966a#\u4e70\u6625#\u7f8e\u903c#\u7f8e\u5c11\u5987#\u7f8e\u4e73#\u7f8e\u817f#\u7f8e\u7a74#\u7f8e\u5e7c#\u79d8\u5507#\u8ff7\u5978#\u5bc6\u7a74#\u871c\u7a74#\u871c\u6db2#\u6478\u5976#\u6478\u80f8#\u6bcd\u5978#\u5948\u7f8e#\u5976\u5b50#\u7537\u5974#\u5185\u5c04#\u5ae9\u903c#\u5ae9\u5973#\u5ae9\u7a74#\u634f\u5f04#\u5973\u4f18#\u70ae\u53cb#\u7832\u53cb#\u55b7\u7cbe#\u5c41\u773c#\u54c1\u9999\u5802#\u524d\u51f8\u540e\u7fd8#\u5f3ajian#\u5f3a\u66b4#\u5f3a\u5978\u5904\u5973#\u60c5\u8da3\u7528\u54c1#\u60c5\u8272#\u62f3\u4ea4#\u5168\u88f8#\u7fa4\u4ea4#\u60f9\u706b\u8eab\u6750#\u4eba\u59bb#\u4eba\u517d#\u65e5\u903c#\u65e5\u70c2#\u8089\u68d2#\u8089\u903c#\u8089\u5507#\u8089\u6d1e#\u8089\u7f1d#\u8089\u68cd#\u8089\u830e#\u8089\u5177#\u63c9\u4e73#\u8089\u7a74#\u8089\u6b32#\u4e73\u7206#\u4e73\u623f#\u4e73\u6c9f#\u4e73\u4ea4#\u4e73\u5934#\u4e09\u7ea7\u7247#\u9a9a\u903c#\u9a9a\u6bd4#\u9a9a\u5973#\u9a9a\u6c34#\u9a9a\u7a74#\u8272\u903c#\u8272\u754c#\u8272\u732b#\u8272\u76df#\u8272\u60c5\u7f51\u7ad9#\u8272\u533a#\u8272\u8272#\u8272\u8bf1#\u8272\u6b32#\u8272b#\u5c11\u5e74\u963f\u5bbe#\u5c11\u4fee\u6b63#\u5c04\u723d#\u5c04\u989c#\u98df\u7cbe#\u91ca\u6b32#\u517d\u5978#\u517d\u4ea4#\u624b\u6deb#\u517d\u6b32#\u719f\u5987#\u719f\u6bcd#\u719f\u5973#\u723d\u7247#\u723d\u6b7b\u6211\u4e86#\u53cc\u81c0#\u6b7b\u903c#\u4e1d\u889c#\u4e1d\u8bf1#\u677e\u5c9b\u67ab#\u9165\u75d2#\u6c64\u52a0\u4e3d#\u5957\u5f04#\u4f53\u5978#\u4f53\u4f4d#\u8214\u811a#\u8214\u9634#\u8c03\u6559#\u5077\u6b22#\u5077\u62cd#\u63a8\u6cb9#\u8131\u5185\u88e4#\u6587\u505a#\u6211\u5c31\u8272#\u65e0\u7801#\u821e\u5973#\u65e0\u4fee\u6b63#\u5438\u7cbe#\u590f\u5ddd\u7eaf#\u76f8\u5978#\u5c0f\u903c#\u6821\u9e21#\u5c0f\u7a74#\u5c0fxue#\u5199\u771f#\u6027\u611f\u5996\u5a06#\u6027\u611f\u8bf1\u60d1#\u6027\u864e#\u6027\u9965\u6e34#\u6027\u6280\u5de7#\u6027\u4ea4#\u6027\u5974#\u6027\u8650#\u6027\u606f#\u6027\u6b32#\u80f8\u63a8#\u7a74\u53e3#\u5b66\u751f\u59b9#\u7a74\u56fe#\u4e9a\u60c5#\u989c\u5c04#\u9633\u5177#\u6768\u601d\u654f#\u8981\u5c04\u4e86#\u591c\u52e4\u75c5\u680b#\u4e00\u672c\u9053#\u4e00\u591c\u6b22#\u4e00\u591c\u60c5#\u4e00ye\u60c5#\u9634\u90e8#\u6deb\u866b#\u9634\u5507#\u6deb\u8361#\u9634\u9053#\u6deb\u7535\u5f71#\u9634\u961c#\u6deb\u5987#\u6deb\u6cb3#\u9634\u6838#\u9634\u6237#\u6deb\u8d31#\u6deb\u53eb#\u6deb\u6559\u5e08#\u9634\u830e#\u9634\u7cbe#\u6deb\u6d6a#\u6deb\u5a9a#\u6deb\u7cdc#\u6deb\u9b54#\u6deb\u6bcd#\u6deb\u5973#\u6deb\u8650#\u6deb\u59bb#\u6deb\u60c5#\u6deb\u8272#\u6deb\u58f0\u6d6a\u8bed#\u6deb\u517d\u5b66\u56ed#\u6deb\u4e66#\u6deb\u672f\u70bc\u91d1\u58eb#\u6deb\u6c34#\u6deb\u5a03#\u6deb\u5a01#\u6deb\u4eb5#\u6deb\u6837#\u6deb\u6db2#\u6deb\u7167#\u9634b#\u5e94\u53ec#\u5e7c\u4ea4#\u5e7c\u7537#\u5e7c\u5973#\u6b32\u706b#\u6b32\u5973#\u7389\u5973\u5fc3\u7ecf#\u7389\u84b2\u56e2#\u7389\u4e73#\u6b32\u4ed9\u6b32\u6b7b#\u7389\u7a74#\u63f4\u4ea4#\u539f\u5473\u5185\u8863#\u63f4\u52a9\u4ea4\u9645#\u5f20\u7b71\u96e8#\u62db\u9e21#\u62db\u5993#\u4e2d\u5e74\u7f8e\u5987#\u6293\u80f8#\u81ea\u62cd#\u81ea\u6170#\u4f5c\u7231#18\u7981#99bb#a4u#a4y#adult#amateur#anal#a\u7247#fuck#gay\u7247#g\u70b9#g\u7247#hardcore#h\u52a8\u753b#h\u52a8\u6f2b#incest#porn#secom#sexinsex#sm\u5973\u738b#xiao77#xing\u4f34\u4fa3#tokyohot#yin\u8361#\u8d31\u4eba#\u88c5b#\u5927sb#\u50bb\u903c#\u50bbb#\u715e\u903c#\u715e\u7b14#\u5239\u7b14#\u50bb\u6bd4#\u6c99\u6bd4#\u6b20\u5e72#\u5a4a\u5b50\u517b\u7684#\u6211\u65e5\u4f60#\u6211\u64cd#\u6211\u8349#\u5367\u8279#\u5367\u69fd#\u7206\u4f60\u83ca#\u8279\u4f60#cao\u4f60#\u4f60\u4ed6\u5988#\u771f\u4ed6\u5988#\u522b\u4ed6\u5417#\u8349\u4f60\u5417#\u8349\u4f60\u4e2b#\u64cd\u4f60\u5988#\u64e6\u4f60\u5988#\u64cd\u4f60\u5a18#\u64cd\u4ed6\u5988#\u65e5\u4f60\u5988#\u5e72\u4f60\u5988#\u5e72\u4f60\u5a18#\u5a18\u897f\u76ae#\u72d7\u64cd#\u72d7\u8349#\u72d7\u6742\u79cd#\u72d7\u65e5\u7684#\u64cd\u4f60\u7956\u5b97#\u64cd\u4f60\u5168\u5bb6#\u64cd\u4f60\u5927\u7237#\u5988\u903c#\u4f60\u9ebb\u75f9#\u9ebb\u75f9\u7684#\u5988\u4e86\u4e2a\u903c#\u9a6c\u52d2#\u72d7\u5a18\u517b#\u8d31\u6bd4#\u8d31b#\u4e0b\u8d31#\u6b7b\u5168\u5bb6#\u5168\u5bb6\u6b7b\u5149#\u5168\u5bb6\u4e0d\u5f97\u597d\u6b7b#\u5168\u5bb6\u6b7b\u7edd#\u767d\u75f4#\u65e0\u803b#sb#\u6740b#\u4f60\u5417b#\u4f60\u5988\u7684#\u5a4a\u5b50#\u8d31\u8d27#\u4eba\u6e23#\u6df7\u86cb#\u5a9a\u5916#\u548c\u5f26#\u517c\u804c#\u9650\u91cf#\u94c3\u58f0#\u6027\u4f34\u4fa3#\u7537\u516c\u5173#\u706b\u8fa3#\u7cbe\u5b50#\u5c04\u7cbe#\u8bf1\u5978#\u5f3a\u5978#\u505a\u7231#\u6027\u7231#\u53d1\u751f\u5173\u7cfb#\u6309\u6469#\u5feb\u611f#\u5904\u7537#\u731b\u7537#\u5c11\u5987#\u5c4c#\u5c41\u80a1#\u4e0b\u4f53#a\u7247#\u5185\u88e4#\u6d51\u5706#\u54aa\u54aa#\u53d1\u60c5#\u523a\u6fc0#\u767d\u5ae9#\u7c89\u5ae9#\u517d\u6027#\u98ce\u9a9a#\u547b\u541f#sm#\u9609\u5272#\u9ad8\u6f6e#\u88f8\u9732#\u4e0d\u7a7f#\u4e00\u4e1d\u4e0d\u6302#\u8131\u5149#\u5e72\u4f60#\u5e72\u6b7b#\u6211\u5e72#\u88d9\u4e2d\u6027\u8fd0\u52a8#\u4e71\u5978#\u4e71\u4f26#\u4e71\u4f26\u7c7b#\u4e71\u4f26\u5c0f#\u4f26\u7406\u5927#\u4f26\u7406\u7535\u5f71#\u4f26\u7406\u6bdb#\u4f26\u7406\u7247#\u88f8\u804a#\u88f8\u804a\u7f51#\u88f8\u4f53\u5199\u771f#\u88f8\u821e\u89c6#\u88f8\u7167#\u7f8e\u5973\u88f8\u4f53#\u7f8e\u5973\u5199\u771f#\u7f8e\u5973\u4e0a\u95e8#\u7f8e\u8273\u5c11\u5987#\u59b9\u6309\u6469#\u59b9\u4e0a\u95e8#\u8ff7\u5e7b\u836f#\u8ff7\u5e7b\u85e5#\u8ff7\u660f\u53e3#\u8ff7\u660f\u836f#\u8ff7\u660f\u85e5#\u8ff7\u9b42\u9999#\u8ff7\u9b42\u836f#\u8ff7\u9b42\u85e5#\u8ff7\u5978\u7c89#\u8ff7\u5978\u836f#\u8ff7\u60c5\u7c89#\u8ff7\u60c5\u6c34#\u8ff7\u60c5\u836f#\u8ff7\u836f#\u8ff7\u85e5#\u8c1c\u5978\u836f#\u9a9a\u5987#\u9a9a\u8d27#\u9a9a\u6d6a#\u9a9a\u5973#\u9a9a\u5634#\u8272\u7535\u5f71#\u8272\u59b9\u59b9#\u8272\u60c5\u8868\u6f14#\u8272\u60c5\u7535\u5f71#\u8272\u60c5\u670d\u52a1#\u8272\u60c5\u56fe\u7247#\u8272\u60c5\u5c0f\u8bf4#\u8272\u60c5\u5f71\u7247#\u8272\u60c5\u8868\u6f14#\u8272\u60c5\u7535\u5f71#\u8272\u60c5\u670d\u52a1#\u8272\u60c5\u7247#\u8272\u89c6\u9891#\u8272\u5c0f\u8bf4#\u6027\u4f34\u4fa3#\u6027\u670d\u52a1#\u6027\u798f\u60c5#\u6027\u611f\u5c11#\u6027\u4f19\u4f34#\u6027\u4ea4#\u6027\u4ea4\u89c6\u9891#\u6027\u4ea4\u56fe\u7247#\u6027\u5974#\u6027\u5974\u96c6\u4e2d\u8425#\u6027\u8650#\u9634\u5507#\u9634\u9053#\u9634\u8482#\u9634\u6237#\u9634\u95f4\u6765\u7535#\u9634\u830e#\u9634\u830e\u589e\u5927#\u9634\u830e\u52a9\u52c3#\u9634\u6bdb#\u9670\u5507#\u9670\u9053#\u9670\u6236#\u6deb\u8361#\u6deb\u8361\u7f8e\u5973#\u6deb\u8361\u89c6\u9891#\u6deb\u8361\u7167\u7247#\u6deb\u4e71#\u6deb\u9761#\u6deb\u9b54#\u6deb\u9b54\u821e#\u6deb\u5973#\u6deb\u60c5\u5973#\u6deb\u8089#\u6deb\u9a37\u59b9#\u6deb\u517d#\u6deb\u517d\u5b66#\u6deb\u6c34#\u6deb\u7a74#morphine#\u6447\u5934\u4e38#\u8ff7\u836f#\u4e56\u4e56\u7c89#narcotic#\u9ebb\u9189\u836f#\u7cbe\u795e\u836f\u54c1#\u7231\u5973\u4eba#\u7231\u6db2#\u6309\u6469\u68d2#\u62d4\u51fa\u6765#\u7206\u8349#\u5305\u4e8c\u5976#\u66b4\u5e72#\u66b4\u5978#\u66b4\u4e73#\u7206\u4e73#\u66b4\u6deb#\u5c44#\u88ab\u64cd#\u88ab\u63d2#\u88ab\u5e72#\u903c\u5978#\u4ed3\u4e95\u7a7a#\u63d2\u66b4#\u64cd\u903c#\u64cd\u9ed1#\u64cd\u70c2#\u808f\u4f60#\u808f\u6b7b#\u64cd\u6b7b#\u64cd\u6211#\u5395\u5974#\u63d2\u6bd4#\u63d2b#\u63d2\u903c#\u63d2\u8fdb#\u63d2\u4f60#\u63d2\u6211#\u63d2\u9634#\u6f6e\u5439#\u6f6e\u55b7#\u6210\u4eba\u7535\u5f71#\u6210\u4eba\u8bba\u575b#\u6210\u4eba\u8272\u60c5#\u6210\u4eba\u7f51\u7ad9#\u6210\u4eba\u6587\u5b66#\u6210\u4eba\u5c0f\u8bf4#\u8273\u60c5\u5c0f\u8bf4#\u6210\u4eba\u6e38\u620f#\u5403\u7cbe#\u8d64\u88f8#\u62bd\u63d2#\u624c\u7531\u63d2#\u62bd\u4e00\u63d2#\u6625\u836f#\u5927\u6ce2#\u5927\u529b\u62bd\u9001#\u5927\u4e73#\u8361\u5987#\u8361\u5973#\u76d7\u64ae#\u591a\u4eba\u8f6e#\u53d1\u6d6a#\u653e\u5c3f#\u80a5\u903c#\u7c89\u7a74#\u5c01\u9762\u5973\u90ce#\u98ce\u6708\u5927\u9646#\u5e72\u6b7b\u4f60#\u5e72\u7a74#\u809b\u4ea4#\u809b\u95e8#\u9f9f\u5934#\u88f9\u672c#\u56fd\u4ea7av#\u597d\u5ae9#\u8c6a\u4e73#\u9ed1\u903c#\u540e\u5ead#\u540e\u7a74#\u864e\u9a91#\u82b1\u82b1\u516c\u5b50#\u6362\u59bb\u4ff1\u4e50\u90e8#\u9ec4\u7247#\u51e0\u5427#\u9e21\u5427#\u9e21\u5df4#\u9e21\u5978#\u5bc2\u5bde\u7537#\u5bc2\u5bde\u5973#\u5993\u5973#\u6fc0\u60c5#\u96c6\u4f53\u6deb#\u5978\u60c5#\u53eb\u5e8a#\u811a\u4ea4#\u91d1\u9cde\u5c82\u662f\u6c60\u4e2d\u7269#\u91d1\u9e9f\u5c82\u662f\u6c60\u4e2d\u7269#\u7cbe\u6db2#\u5c31\u53bb\u65e5#\u5de8\u5c4c#\u83ca\u82b1\u6d1e#\u83ca\u95e8#\u5de8\u5976#\u5de8\u4e73#\u83ca\u7a74#\u5f00\u82de#\u53e3\u7206#\u53e3\u6d3b#\u53e3\u4ea4#\u53e3\u5c04#\u53e3\u6deb#\u88e4\u889c#\u72c2\u64cd#\u72c2\u63d2#\u6d6a\u903c#\u6d6a\u5987#\u6d6a\u53eb#\u6d6a\u5973#\u72fc\u53cb#\u804a\u6027#\u6d41\u6deb#\u94c3\u6728\u9ebb#\u51cc\u8fb1#\u6f0f\u4e73#\u9732b#\u4e71\u4ea4#\u4e71\u4f26#\u8f6e\u66b4#\u8f6e\u64cd#\u8f6e\u5978#\u88f8\u966a#\u4e70\u6625#\u7f8e\u903c#\u7f8e\u5c11\u5987#\u7f8e\u4e73#\u7f8e\u817f#\u7f8e\u7a74#\u7f8e\u5e7c#\u79d8\u5507#\u8ff7\u5978#\u5bc6\u7a74#\u871c\u7a74#\u871c\u6db2#\u6478\u5976#\u6478\u80f8#\u6bcd\u5978#\u5948\u7f8e#\u5976\u5b50#\u7537\u5974#\u5185\u5c04#\u5ae9\u903c#\u5ae9\u5973#\u5ae9\u7a74#\u634f\u5f04#\u5973\u4f18#\u70ae\u53cb#\u7832\u53cb#\u55b7\u7cbe#\u5c41\u773c#\u54c1\u9999\u5802#\u524d\u51f8\u540e\u7fd8#\u5f3ajian#\u5f3a\u66b4#\u5f3a\u5978\u5904\u5973#\u60c5\u8da3\u7528\u54c1#\u60c5\u8272#\u62f3\u4ea4#\u5168\u88f8#\u7fa4\u4ea4#\u60f9\u706b\u8eab\u6750#\u4eba\u59bb#\u4eba\u517d#\u65e5\u903c#\u65e5\u70c2#\u8089\u68d2#\u8089\u903c#\u8089\u5507#\u8089\u6d1e#\u8089\u7f1d#\u8089\u68cd#\u8089\u830e#\u8089\u5177#\u63c9\u4e73#\u8089\u7a74#\u8089\u6b32#\u4e73\u7206#\u4e73\u623f#\u4e73\u6c9f#\u4e73\u4ea4#\u4e73\u5934#\u4e09\u7ea7\u7247#\u9a9a\u903c#\u9a9a\u6bd4#\u9a9a\u5973#\u9a9a\u6c34#\u9a9a\u7a74#\u8272\u903c#\u8272\u754c#\u8272\u732b#\u8272\u76df#\u8272\u60c5\u7f51\u7ad9#\u8272\u533a#\u8272\u8272#\u8272\u8bf1#\u8272\u6b32#\u8272b#\u5c11\u5e74\u963f\u5bbe#\u5c11\u4fee\u6b63#\u5c04\u723d#\u5c04\u989c#\u98df\u7cbe#\u91ca\u6b32#\u517d\u5978#\u517d\u4ea4#\u624b\u6deb#\u517d\u6b32#\u719f\u5987#\u719f\u6bcd#\u719f\u5973#\u723d\u7247#\u723d\u6b7b\u6211\u4e86#\u53cc\u81c0#\u6b7b\u903c#\u4e1d\u889c#\u4e1d\u8bf1#\u677e\u5c9b\u67ab#\u9165\u75d2#\u6c64\u52a0\u4e3d#\u5957\u5f04#\u4f53\u5978#\u4f53\u4f4d#\u8214\u811a#\u8214\u9634#\u8c03\u6559#\u5077\u6b22#\u5077\u62cd#\u63a8\u6cb9#\u8131\u5185\u88e4#\u6587\u505a#\u6211\u5c31\u8272#\u65e0\u7801#\u821e\u5973#\u65e0\u4fee\u6b63#\u5438\u7cbe#\u590f\u5ddd\u7eaf#\u76f8\u5978#\u5c0f\u903c#\u6821\u9e21#\u5c0f\u7a74#\u5c0fxue#\u5199\u771f#\u6027\u611f\u5996\u5a06#\u6027\u611f\u8bf1\u60d1#\u6027\u864e#\u6027\u9965\u6e34#\u6027\u6280\u5de7#\u6027\u4ea4#\u6027\u5974#\u6027\u8650#\u6027\u606f#\u6027\u6b32#\u80f8\u63a8#\u7a74\u53e3#\u5b66\u751f\u59b9#\u7a74\u56fe#\u4e9a\u60c5#\u989c\u5c04#\u9633\u5177#\u6768\u601d\u654f#\u8981\u5c04\u4e86#\u591c\u52e4\u75c5\u680b#\u4e00\u672c\u9053#\u4e00\u591c\u6b22#\u4e00\u591c\u60c5#\u4e00ye\u60c5#\u9634\u90e8#\u6deb\u866b#\u9634\u5507#\u6deb\u8361#\u9634\u9053#\u6deb\u7535\u5f71#\u9634\u961c#\u6deb\u5987#\u6deb\u6cb3#\u9634\u6838#\u9634\u6237#\u6deb\u8d31#\u6deb\u53eb#\u6deb\u6559\u5e08#\u9634\u830e#\u9634\u7cbe#\u6deb\u6d6a#\u6deb\u5a9a#\u6deb\u7cdc#\u6deb\u9b54#\u6deb\u6bcd#\u6deb\u5973#\u6deb\u8650#\u6deb\u59bb#\u6deb\u60c5#\u6deb\u8272#\u6deb\u58f0\u6d6a\u8bed#\u6deb\u517d\u5b66\u56ed#\u6deb\u4e66#\u6deb\u672f\u70bc\u91d1\u58eb#\u6deb\u6c34#\u6deb\u5a03#\u6deb\u5a01#\u6deb\u4eb5#\u6deb\u6837#\u6deb\u6db2#\u6deb\u7167#\u9634b#\u5e94\u53ec#\u5e7c\u4ea4#\u5e7c\u7537#\u5e7c\u5973#\u6b32\u706b#\u6b32\u5973#\u7389\u5973\u5fc3\u7ecf#\u7389\u84b2\u56e2#\u7389\u4e73#\u6b32\u4ed9\u6b32\u6b7b#\u7389\u7a74#\u63f4\u4ea4#\u539f\u5473\u5185\u8863#\u63f4\u52a9\u4ea4\u9645#\u5f20\u7b71\u96e8#\u62db\u9e21#\u62db\u5993#\u4e2d\u5e74\u7f8e\u5987#\u6293\u80f8#\u81ea\u62cd#\u81ea\u6170#\u4f5c\u7231#18\u7981#99bb#a4u#a4y#adult#amateur#anal#a\u7247#fuck#gay\u7247#g\u70b9#g\u7247#hardcore#h\u52a8\u753b#h\u52a8\u6f2b#incest#porn#secom#sexinsex#sm\u5973\u738b#xiao77#xing\u4f34\u4fa3#tokyohot#yin\u8361#\u8150\u8d25#\u8d2a\u6c61#gcd#\u5171\u8d2a\u515a#gongchandang#\u963f\u5171#\u5171\u4e00\u4ea7\u4e00\u515a#\u4ea7\u515a\u5171#\u516c\u4ea7\u515a#\u5de5\u4ea7\u515a#\u5171c\u515a#\u5171x\u515a#\u5171\u94f2#\u4f9b\u4ea7#\u5171\u60e8#\u4f9b\u94f2\u515a#\u4f9b\u94f2\u8c20#\u4f9b\u94f2\u88c6#\u5171\u6b8b\u515a#\u5171\u6b8b\u4e3b\u4e49#\u5171\u4ea7\u4e3b\u4e49\u7684\u5e7d\u7075#\u62f1\u94f2#\u8001\u5171#\u4e2d\u73d9#\u4e2dgong#gc\u515a#\u8d21\u6321#gong\u515a#g\u4ea7#\u72d7\u4ea7\u86cb#\u5171\u6b8b\u88c6#\u6076\u515a#\u90aa\u515a#\u5171\u4ea7\u4e13\u5236#\u5171\u4ea7\u738b\u671d#\u88c6\u4e2d\u592e#\u571f\u5171#\u571fg#\u5171\u72d7#g\u532a#\u5171\u532a#\u4ec7\u5171#\u5171\u4ea7\u515a\u8150\u8d25#\u5171\u4ea7\u515a\u4e13\u5236#\u5171\u4ea7\u515a\u7684\u62a5\u5e94#\u5171\u4ea7\u515a\u7684\u672b\u65e5#\u5171\u4ea7\u515a\u4e13\u5236#communistparty#\u75c7\u8150#\u653f\u8150#\u653f\u4ed8#\u6b63\u5e9c#\u653f\u4fef#\u653ff#zhengfu#\u653fzhi#\u6321\u4e2d\u592e#\u6863\u4e2d\u592e#\u4e2d\u56fdzf#\u4e2d\u592ezf#\u56fdwu\u9662#\u4e2d\u534e\u5e1d\u56fd#gong\u548c#\u5927\u9646\u5b98\u65b9#\u5317\u4eac\u653f\u6743#\u5218\u5fd7\u519b#\u5f20\u66d9#\u5218\u5fd7\u519b#\u4e70\u522b\u5885#\u73a9\u5973\u4eba#\u8d2a20\u4ebf#\u8bb8\u5b97\u8861#\u8d2a\u8d22\u7269#\u674e\u542f\u7ea2#\u8d2a\u8150\u8d22\u5bcc#\u843d\u9a6c#\u9ad8\u5b98\u540d\u5355#\u9648\u5e0c\u540c#\u8d2a\u6c61#\u73a9\u5ffd\u804c\u5b88#\u6709\u671f\u5f92\u5211#\u9648\u826f\u5b87#\u53d7\u8d3f\u7f6a#\u6ee5\u7528\u804c\u6743#\u6709\u671f\u5f92\u5211#\u6ca1\u6536\u4e2a\u4eba\u8d22\u4ea7#\u6210\u514b\u6770#\u6b7b\u5211#\u7a0b\u7ef4\u9ad8#\u4e25\u91cd\u8fdd\u7eaa#\u5f00\u9664\u515a\u7c4d#\u64a4\u9500\u804c\u52a1#\u5218\u65b9\u4ec1#\u65e0\u671f\u5f92\u5211#\u502a\u732e\u7b56#\u5f87\u79c1\u821e\u5f0a#\u6881\u6e58#\u4ee5\u6743\u8c0b\u79c1#\u64a4\u804c\u3002#\u674e\u5609\u5ef7#\u6b7b\u5211\u7f13\u671f#\u5f20\u56fd\u5149#\u97e9\u6842\u829d#\u5b8b\u5e73\u987a#\u81ea\u6740#\u9ec4\u7476#\u53cc\u89c4#\u9648\u7ecd\u57fa#\u5224\u5904\u6b7b\u5211#\u5265\u593a\u653f\u6cbb\u6743\u5229\u7ec8\u8eab#\u6ca1\u6536\u4e2a\u4eba\u5168\u90e8\u8d22\u4ea7#\u77f3\u5146\u5f6c#\u4faf\u4f0d\u6770#\u738b\u662d\u8000#\u5265\u593a\u653f\u6cbb\u6743\u5229#\u675c\u4e16\u6210#\u6c88\u56fe#\u53db\u9003\u7f8e\u56fd#\u7f57\u4e91\u5149#\u8d77\u8bc9#\u5f20\u8f9b\u6cf0#\u674e\u6548\u65f6#\u8fb9\u5c11\u658c#\u5f90\u9e4f\u822a#\u8fdd\u7eaa#\u6536\u53d7\u80a1\u7968#\u738b\u4e50\u6bc5#\u674e\u7eaa\u5468#\u90d1\u5149\u8fea#\u7530\u51e4\u5c71\u3002#\u90b1\u6653\u534e#\u90d1\u7b71\u8438#\u5b59\u9e64\u9f84#\u84dd\u7530\u9020\u5047\u6848#\u4e8e\u5e7c\u519b#\u7559\u515a\u5bdf\u770b#\u4f55\u6d2a\u8fbe#\u6731\u5fd7\u521a#\u6768\u6c47\u6cc9#\u5b98\u50da\u4e3b\u4e49#\u5f90\u70b3\u677e#\u6258\u4e4e\u63d0\u6c99\u6bd4\u5c14#\u738b\u5b9d\u68ee#\u7ecf\u6d4e\u72af\u7f6a#\u754f\u7f6a\u81ea\u6740\u3002#\u9648\u6c34\u6587#\u5b5f\u5e86\u5e73#\u80e1\u957f\u6e05#\u6731\u5ddd#\u8bb8\u8fd0\u9e3f#\u4e18\u5e7f\u949f#\u5218\u77e5\u70b3#\u4e1b\u798f\u594e#\u738b\u6000\u5fe0#\u5de8\u989d\u8d22\u4ea7#\u6765\u6e90\u4e0d\u660e\u7f6a#\u674e\u8fbe\u660c#\u5218\u957f\u8d35#\u738b\u949f\u9e93#\u963f\u66fc\u54c8\u5409#\u4ed8\u6653\u5149#\u81ea\u52a8\u8f9e#\u5218\u514b\u7530#\u5415\u5fb7\u5f6c#\u5218\u7ef4\u660e#\u53cc\u5f00#\u5218\u5fd7\u534e#\u5b59\u745c#\u674e\u5802\u5802#\u97e9\u798f\u624d \u9752\u6d77#\u6b27\u9633\u5fb7 \u5e7f\u4e1c#\u97e6\u6cfd\u82b3 \u6d77\u5357#\u94c1\u82f1 \u5317\u4eac#\u8f9b\u4e1a\u6c5f \u6d77\u5357#\u4e8e\u98de \u5e7f\u4e1c#\u59dc\u6bbf\u6b66 \u6cb3\u5317#\u79e6\u660c\u5178 \u91cd\u5e86#\u8303\u5e7f\u4e3e \u9ed1\u9f99\u6c5f#\u5f20\u51ef\u5e7f\u4e1c#\u738b\u539a\u5b8f\u6d77\u5357#\u9648\u7ef4\u5e2d\u5b89\u5fbd#\u738b\u6709\u6770\u6cb3\u5357#\u738b\u6b66\u9f99\u6c5f\u82cf#\u7c73\u51e4\u541b\u5409\u6797#\u5b8b\u52c7\u8fbd\u5b81#\u5f20\u5bb6\u76df\u6d59\u6c5f#\u9a6c\u70c8\u5b59\u5b81\u590f#\u9ec4\u7eaa\u8bda\u5317\u4eac#\u5e38\u5f81\u8d35\u5dde#\u738b\u5f0f\u60e0\u91cd\u5e86#\u5468\u6587\u5409#\u738b\u5e86\u5f55\u5e7f\u897f#\u6f58\u5e7f\u7530\u5c71\u4e1c#\u6731\u4f5c\u52c7\u7518\u8083#\u5b59\u5584\u6b66\u6cb3\u5357#\u5b8b\u6668\u5149\u6c5f\u897f#\u6881\u6625\u7984\u5e7f\u897f\u653f\u534f#\u9c81\u5bb6\u5584 \u4e2d\u56fd\u4ea4\u901a#\u91d1\u5fb7\u7434 \u4e2d\u4fe1#\u674e\u5927\u5f3a \u795e\u534e#\u5434\u6587\u82f1 \u7eba\u7ec7#\u67e5\u514b\u660e \u534e\u80fd#\u6731\u5c0f\u534e\u5149\u5927#\u9ad8\u4e25 \u56fd\u5bb6\u7535\u529b#\u738b\u96ea\u51b0#\u6797\u5b54\u5174#\u5218\u91d1\u5b9d#\u5f20\u6069\u7167#\u9648\u540c\u6d77#\u5eb7\u65e5\u65b0#\u738b\u76ca#\u5f20\u6625\u6c5f#\u6d2a\u6e05\u6e90#\u5e73\u4e49\u6770#\u674e\u6069\u6f6e#\u5b59\u5c0f\u8679#\u9648\u5fe0#\u6155\u7ee5\u65b0#\u7530\u51e4\u5c90#\u9ea6\u5d07\u6977#\u67f4\u738b\u7fa4#\u5434\u632f\u6c49#\u5f20\u79cb\u9633#\u5f90\u884d\u4e1c#\u5f90\u53d1 \u9ed1\u9f99\u6c5f#\u5f20\u5b97\u6d77#\u4e01\u946b\u53d1#\u5f90\u56fd\u5065#\u674e\u5b9d\u91d1#\u5355\u5e73#\u6bb5\u4e49\u548c#\u8346\u798f\u751f#\u9648\u5c11\u52c7#\u9ec4\u677e\u6709#\u76ae\u9ed4\u751f#\u738b\u534e\u5143#\u738b\u5b88\u4e1a#\u5218\u8fde\u6606#\u5b59\u664b\u7f8e#\u90b5\u677e\u9ad8#\u8096\u6000\u67a2#\u5218\u5e7f\u667a \u7a7a\u519b#\u59ec\u80dc\u5fb7 \u603b\u53c2#\u5ed6\u4f2f\u5e74 \u5317\u4eac#\u7a74\u6d77#\u534f\u8b66#\u7eb3\u7c73\u6bd4\u4e9a#\u4e13\u4e1a\u8c03\u67e5#\u6709\u534e\u9f99#jq\u7684\u6765#\u7535\u4fe1\u8def#\u7b2c\u4e00\u592b\u4eba#\u515a\u97ad#\u9ec4\u5de8#\u8361\u5c3d\u5929\u4e0b#\u5bb6\u5143\u81ea\u79f0\u7389\u7687\u5927\u5e1d#\u4e3b\u5e2d\u674e\u4e16\u6c11#\u4f55\u795a\u5ea5#\u5218\u521a#\u4e0d\u8981\u6c89\u9ed8#\u540e\u52e4\u96c6\u56e2#\u98df\u5802\u6da8\u4ef7#\u53d1\u56fd\u96be\u8d22#\u6d6a\u6f2b\u9082\u9005#\u7ea2\u6ee1\u5802#\u5f20\u5c0f\u6d0b#\u70b8\u5b66\u6821#\u5b50\u5bab#\u53eb\u6676\u6676\u7684\u5973\u5b69#\u56de\u6d3e#\u793e\u4f1a\u9ed1\u6697#\u56fd\u4e4b\u6bcd#\u56fd\u6bcd#\u56fd\u59c6#\u4e1c\u65b9\u5fae\u70b9#\u9707\u60ca\u5168\u7403#nowto#chengdu#\u5f90\u660e#\u516d\u6708\u98de\u96ea#\u66b4\u529b\u8650\u5f85#\u66b4\u529b\u88ad\u51fb#\u5929\u5e9c\u5e7f\u573a#\u7cae\u8352#\u6d17\u8111\u73ed#\u674e\u611a\u8822#\u4e2d\u56fd\u732a#\u53f0\u6e7e\u732a#\u8fdb\u5316\u4e0d\u5b8c\u5168\u7684\u751f\u547d\u4f53#\u9707\u6b7b\u4ed6\u4eec##10010#10086#10159#13423205670#13725516608#13875448369#15112886328#189#6-4tianwang#64#68170802#6a6.net#7.31#7.310#89-64cdjp#8945212#23\u6761#259o#381929279#3P#4-Jun#AV#BJ#CBD#CCTV#CDMA#DICK#Dick#FLG#FOCUSC#FUCK#Fuck#GAMEMASTER#GCD#GameMaster#IP17908#KEY_TEXT#NMD#QQb#SM#Soccer01.com#TMD#UltraSurf#bignews#Bitch#boxun#Chinaliberal#chinamz#Chinesenewsnet#cnd#Creaders#dafa#Dajiyuan#df'd#Dfdz#die#dpp#Freechina#freedom#Freenet#fuck#fuck your mother#hongzhi#hrichina#huanet#hypermart.net#incest#jiangdongriji#l2590803027#lihongzhi#ma#making#minghui#minghuinews#nacb#na?ve#nmis#paper64#peacehall#piao#playboy#renminbao#renmingbao#rfa#safeweb#sex#shit#simple#svdc#taip#tibetalk#triangle#triangleboy#txwq.net#unixbox#ustibet#voa#voachinese#wangce#wstaiji#www#xinsheng#yuming#yy\u901a\u8baf\u5f55#zhengjian#zhengjianwang#zhenshanren#zhuanfalu#zhuanfalun#\u516b\u4e5d#\u516b\u8001#";
		let s = null;

		function i() {
			return s && 0 != s.length || (s = n.split("#")), s
		}
		o.getAryText = i, o.textFilter = function(e) {
			for (let t of i())
				if (t && e.includes(t)) {
					let o = new RegExp(t, "g"),
						n = "".padEnd(t.length, "*");
					e = e.replace(o, n)
				} return e
		}, cc._RF.pop()
	}, {}],
	fpsSyncEnum: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "f66cc7Opq1M26Cm5pcxbKm1", "fpsSyncEnum"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			}), o.FpsSync = void 0,
			function(e) {
				e[e.NULL = 0] = "NULL", e[e.LEFT_DOWN = 1] = "LEFT_DOWN", e[e.RIGHT_DOWN = 2] =
					"RIGHT_DOWN", e[e.LEFT_UP = 3] = "LEFT_UP", e[e.RIGHT_UP = 4] = "RIGHT_UP", e[e
						.JUMP = 5] = "JUMP"
			}(o.FpsSync || (o.FpsSync = {})), cc._RF.pop()
	}, {}],
	gameBox4399: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "d0ff0CeUedPj5+B05rcmQsh", "gameBox4399");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../miniApp"),
			i = window.gamebox;
		class a extends s.default {
			constructor() {
				super(...arguments), this.m_appId = "", this.m_secret = "", this.m_adUnitId = ""
			}
			commitRank(e, t) {
				return n(this, void 0, void 0, function*() {
					return Promise.resolve(!1)
				})
			}
			showRank(e) {
				return n(this, void 0, void 0, function*() {
					return Promise.resolve(!1)
				})
			}
			LocalInBlockCityList() {
				return !1
			}
			vibrate(e) {
				console.log("\u6e38\u620f\u76d2 4399 \u632f\u52a8")
			}
			drawHead(e) {
				return Promise.resolve(null)
			}
			static getRandNameAndUrl() {
				return {
					nickName: "4399\u6e38\u5ba2",
					avatarUrl: null,
					language: "ch",
					gender: 0,
					country: "\u4e2d\u56fd",
					province: "",
					city: ""
				}
			}
			validAppId() {}
			getUserInfo(e) {
				e.success && e.success({
					userInfo: a.getRandNameAndUrl()
				})
			}
			showToast(e) {}
			showLoading(e) {
				console.log("\u6e38\u620f\u76d2 4399 \u663e\u793a\u8fdb\u5ea6", e)
			}
			hideLoading() {
				console.log("\u6e38\u620f\u76d2 4399 \u9690\u85cf\u8fdb\u5ea6")
			}
			preCreateUnits() {
				console.log("\u6e38\u620f\u76d2 4399 \u9884\u5148\u521b\u5efa"), i.login({
					success: () => {
						console.log("\u767b\u5f55\u6210\u529f")
					},
					fail: () => {
						console.log("\u767b\u5f55\u5931\u8d25")
					},
					complete: () => {}
				})
			}
			loadAndShowVideoAd(e, t, o) {
				console.log("\u6e38\u620f\u76d2 4399 4399\u6fc0\u52b1\u89c6\u9891"), console
					.log("\u521b\u5efa\u5e7f\u544a");
				const n = i.createRewardedVideoAd();
				console.log("\u52a0\u8f7d\u5e7f\u544a");
				let s = !1;
				n.onClose(() => {
					s ? e() : t && t("\u672a\u64ad\u653e\u5b8c"), o && o(), console.log(
						"\u5173\u95ed\u5e7f\u544a"), n.destroy()
				}), n.onCompleted(() => {
					s = !0, console.log("\u64ad\u653e\u5e7f\u544a \u5b8c\u6bd5")
				}), n.onLoad(() => {
					console.log("\u663e\u793a\u5e7f\u544a"), n.show().catch(() => {
						t && t("\u64ad\u653e\u51fa\u9519"), o && o()
					})
				})
			}
			authorize(e) {
				e.success && e.success()
			}
			login(e) {
				e.success && e.success({
					code: null
				})
			}
			gameRecordStart(e, t) {
				console.log("\u6e38\u620f\u76d2 4399 \u5f55\u5c4fstart"), t && t(null)
			}
			gameRecordStop() {
				return console.log("\u6e38\u620f\u76d2 4399 \u5f55\u5c4fstop"), !0
			}
			shareGameRecordVideo(e, t) {
				console.log("\u6e38\u620f\u76d2 4399 \u5206\u4eab\u5f55\u5c4f")
			}
			isProduction() {
				return a.isProduction()
			}
			isHaveShareVideo() {
				return !0
			}
			reportAnalytics(e, t) {
				console.log("\u6e38\u620f\u76d2 4399 \u53d1\u9001\u57cb\u70b9")
			}
			clearMemory() {}
			shareAppMessage(e) {}
			operateGameLive() {}
			static isProduction() {
				return !0
			}
			createMoreGameBtn() {}
			hideBanner() {}
			showBannerAD(e, t, o) {}
			showInterstitialAd(e, t) {}
			showNativeAd() {}
			reportAdClickNativeAd() {}
			addShortcut() {
				return console.log("\u6e38\u620f\u76d2 4399 \u6dfb\u52a0\u684c\u9762"), Promise
					.resolve(!0)
			}
			drawUrlImage(e, t) {
				cc.assetManager.loadRemote(e, (e, o) => {
					if (e) return console.error("#1553937 \u56fe\u7247\u51fa\u9519", e),
						void t(null);
					t(new cc.SpriteFrame(o))
				})
			}
			showVideo(e) {}
			getShareVideoRank(e, t) {
				t([])
			}
			subscribeMessage() {}
			showAddFavoriteGuide(e, t, o) {}
			PlayLastRecordSound(e, t, o) {
				setTimeout(() => {
					t && t()
				}, 1e3)
			}
			StartRecordSound() {}
			StopRecordSound(e) {
				setTimeout(() => {
					e && e()
				}, 1e3)
			}
			showModal(e) {
				console.log("\u6e38\u620f\u76d2 4399 \u5bf9\u8bdd\u6846", e)
			}
			navigateToMiniGame(e, t, o) {
				console.log(
					"\u6e38\u620f\u76d2 4399 \u8df3\u8f6c\u5230\u5176\u4ed6\u5c0f\u6e38\u620f",
					e), t && t()
			}
			fullScreenVideo() {
				return console.warn(
					"H5 \u7248\u672c\u672a\u63a5\u5165\u5168\u5c4f\u89c6\u9891"), Promise
					.resolve(void 0)
			}
		}
		o.default = a, cc._RF.pop()
	}, {
		"../miniApp": "miniApp"
	}],
	gameConfig: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "eaa55ffAZVFk4HlvvX1BWfi", "gameConfig"), Object.defineProperty(o,
		"__esModule", {
			value: !0
		});
		class n {}
		o.default = n, n.COPY = "@\u957f\u6c99\u96f6\u4e00\u4e92\u52a8", n.GAME_NAME =
			"\u7206\u8d70\u5c0f\u732a", n.MINI_GAME_JUMP_CELL_LIST = [{
				name: "-\u8001\u4e61\u4f60\u8981\u5565",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-\u6211\u662f\u533b\u751f",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}], n.MINI_GAME_JUMP_SCROLL_LIST = [{
				name: "-\u8001\u4e61\u4f60\u8981\u5565",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-\u6211\u662f\u533b\u751f1",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}], n.MINI_GAME_JUMP_SIDE_LIST = [{
				name: "-\u8001\u4e61\u4f60\u8981\u5565",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-\u6211\u662f\u533b\u751f1",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}, {
				name: "-\u8001\u4e61\u4f60\u8981\u5565",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-\u6211\u662f\u533b\u751f2",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}, {
				name: "-\u8001\u4e61\u4f60\u8981\u5565",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-\u6211\u662f\u533b\u751f3",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}, {
				name: "-\u8001\u4e61\u4f60\u8981\u5565",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-\u6211\u662f\u533b\u751f4",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}, {
				name: "-\u8001\u4e61\u4f60\u8981\u5565",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-\u6211\u662f\u533b\u751f5",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}, {
				name: "-\u8001\u4e61\u4f60\u8981\u5565",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-\u6211\u662f\u533b\u751f6",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}, {
				name: "-\u8001\u4e61\u4f60\u8981\u5565",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-\u6211\u662f\u533b\u751f7",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}, {
				name: "-\u8001\u4e61\u4f60\u8981\u5565",
				iconId: "lxnys",
				appId: "wxc7d2241fc9e870aa"
			}, {
				name: "-\u6211\u662f\u533b\u751f8",
				iconId: "wsys",
				appId: "wx75542a90a4f3b540"
			}], n.GAME_VIDEO_SHARE_DESC = "\u7206\u8d70\u5c0f\u732a", n.GAME_VIDEO_SHARE_TITLE =
			"\u7206\u8d70\u5c0f\u732a", n.VERSION_NOTICE = "", n.MAX_POWER = 10, n.NORMAL_POWER = 15, n
			.NORMAL_COINS = 5, n.ADD_ONCE_POWER = 5, n.ADD_ONCE_COINS = 100, n.REST_POWER_TIME = 60, n
			.REST_POWER_VALUE = 1, n.FIRST_PLAY_INFINITY_PROBABILITY = 1, n.INFINITY_POWER_VIDEO_COUNT =
			3, n.CLICK_POWER_INFINITY_PROBABILITY = 1, n.LOG_SERVICE_OPEN = !1, n.SCREEN_LOG_SWITCH = !
			1, n.CONSOLE_LOG_LEVEL = 2, n.FULL_SCREEN_VIDEO_TIME = 30, n.BACK_MAIN_QT_TEMPLATEGL = 1, n
			.TEMPLATEN_AD_QT_GL = 1, n.TEMPLATENA_CX_GL = 1, n.FIRST_VIDEO_TIME = 0, n
			.IP_BLOCK_CITY = [], n.DOUYIN_YUMAI = 0, cc._RF.pop()
	}, {}],
	gameEngine: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "1b48cGCTZdCZZCQRqG55qLY", "gameEngine");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.modules = o.managers = o.services = void 0;
		const s = e("./services/localStorageService"),
			i = e("./managers/soundManager"),
			a = e("./services/ossService"),
			r = e("./services/miniGameService"),
			c = e("./services/userService"),
			l = e("./managers/gameManager"),
			d = e("./modules/uiModule"),
			u = e("./modules/gameHttpModule"),
			h = e("./configs/logConfig"),
			g = e("./modules/gameWebSocketModule"),
			p = e("./services/logService"),
			m = e("./configs/engineConfig"),
			f = e("./managers/gameSocketManager"),
			y = e("./configs/copy"),
			S = e("./managers/o1BoxManager"),
			v = e("./services/i18nService");
		o.services = function() {
			return b.getServices()
		}, o.managers = function() {
			return b.getManagers()
		}, o.modules = function() {
			return b.getModules()
		};
		class _ {
			constructor() {
				this.shareSwitch = !0, this.m_modules = {
					uiControlModule: new d.default,
					gameHttpModule: new u.default,
					gameWebsocketModule: new g.default
				}, this.services = {
					localStorageSrv: new s.default,
					ossSrv: new a.default,
					miniGameSrv: new r.default,
					userSrv: new c.default,
					logSrv: new p.default,
					i18nSrv: new v.default
				}, this.managers = {
					soundMgr: new i.default,
					gameMgr: new l.default,
					socketMgr: new f.default,
					o1BoxMgr: new S.default
				}, console.log("<\u6e38\u620f\u4e3b\u6846\u67b6>"), this.reDefinedApi()
			}
			getModules() {
				return this.m_modules
			}
			getManagers() {
				return this.managers
			}
			getServices() {
				return this.services
			}
			loadAll() {
				return n(this, void 0, void 0, function*() {
					const e = Date.now();
					let t = e;
					console.log(
						"\u2605\u2605\u2605\u2605\u2605\u6846\u67b6\u8f7d\u5165\u2605\u2605\u2605\u2605\u2605"
						), console.log(
						`${h.LINE_SPLIT_START_LEFT}\u52a0\u8f7d\u6240\u6709\u6a21\u5757${h.LINE_SPLIT_START_RIGHT}`
						), yield b.loadAllModules(), console.log(
						`${h.LINE_SPLIT_END_LEFT}\u6240\u6709\u6a21\u5757\u5df2\u8f7d${h.LINE_SPLIT_END_RIGHT}`,
						Date.now() - t, "ms"), t = Date.now(), console.log(
						`${h.LINE_SPLIT_START_LEFT}\u52a0\u8f7dOSS\u670d\u52a1${h.LINE_SPLIT_START_RIGHT}`
						), yield this.getServices().ossSrv.loadService(), console
						.log(
							`${h.LINE_SPLIT_END_LEFT}OSS\u670d\u52a1\u5df2\u8f7d${h.LINE_SPLIT_END_RIGHT}`,
							Date.now() - t, "ms"), yield this.getServices().ossSrv
							.onLoadedService(), t = Date.now(), console.log(
								`${h.LINE_SPLIT_START_LEFT}\u52a0\u8f7d\u6240\u6709\u670d\u52a1${h.LINE_SPLIT_START_RIGHT}`
								), yield this.loadServices(), console.log(
									`${h.LINE_SPLIT_END_LEFT}\u6240\u6709\u670d\u52a1\u5df2\u8f7d${h.LINE_SPLIT_END_RIGHT}`,
									Date.now() - t, "ms"), t = Date.now(), console
								.log(
									`${h.LINE_SPLIT_START_LEFT}\u52a0\u8f7d\u6240\u6709\u7ba1\u7406${h.LINE_SPLIT_START_RIGHT}`
									), yield this.loadManagers(), console.log(
										`${h.LINE_SPLIT_END_LEFT}\u6240\u6709\u7ba1\u7406\u5df2\u8f7d${h.LINE_SPLIT_END_RIGHT}`,
										Date.now() - t, "ms"), t = Date.now(),
									console.log(
										"\u2605\u2605\u2605\u2605\u2605\u6846\u67b6\u5b8c\u6bd5\u2605\u2605\u2605\u2605\u2605",
										Date.now() - e, "ms (\u603b\u8017\u65f6)"),
									console.log("%c\n%s", "color:#0a2;", y
									.default());
					const o = window.tt;
					return o && o.getSystemInfo({
						complete: e => {
							e && (this.shareSwitch = "novelapp" != e.appName)
						}
					}), Promise.resolve()
				})
			}
			emit(e, ...t) {
				this.Canvas().emit(e, ...t)
			}
			on(e, t, ...o) {
				this.Canvas().on(e, t, ...o)
			}
			off(e, t, ...o) {
				this.Canvas().off(e)
			}
			once(e, t, ...o) {
				this.Canvas().once(e, t, ...o)
			}
			Component() {
				return this.Canvas().getComponent(cc.Component)
			}
			Canvas() {
				return cc.find("Canvas")
			}
			releaseUnusedAssets() {
				try {
					cc.resources.releaseUnusedAssets()
				} catch (e) {
					console.warn("#498 \u8b66\u544a res unused release", e)
				}
			}
			changeScene(e, t) {
				this.loadScene(e, t)
			}
			loadScene(e, t) {
				b.emit(m.GameEvent.CHANGE_SCENE_BEFORE), cc.director.loadScene(e, () => {
					b.emit(m.GameEvent.CHANGE_SCENE_AFTER), t && t()
				})
			}
			loadAllModules() {
				return n(this, void 0, void 0, function*() {
					for (let e in this.m_modules) yield this.m_modules[e].preLoadModules();
					for (let e in this.m_modules) yield this.m_modules[e].loadModule(),
						yield this.m_modules[e].onLoadedModule();
					return Promise.resolve()
				})
			}
			reDefinedApi() {}
			loadManagers() {
				return n(this, void 0, void 0, function*() {
					for (let e in this.managers) {
						let t = this.managers[e];
						if (!(yield t.loadManager())) break;
						yield t.onLoadedManager()
					}
				})
			}
			loadServices() {
				return n(this, void 0, void 0, function*() {
					for (let e in this.services) {
						let t = this.services[e];
						t.isLoaded() || (yield t.loadService(), yield t.onLoadedService())
					}
				})
			}
		}
		let b = function() {
			try {
				return window.O1HD = new _, window.O1HD
			} catch (e) {
				console.error("\u4e3b\u5f15\u64ce\u521b\u5efa\u5931\u8d25", e)
			}
		}();
		o.default = b, cc._RF.pop()
	}, {
		"./configs/copy": "copy",
		"./configs/engineConfig": "engineConfig",
		"./configs/logConfig": "logConfig",
		"./managers/gameManager": "gameManager",
		"./managers/gameSocketManager": "gameSocketManager",
		"./managers/o1BoxManager": "o1BoxManager",
		"./managers/soundManager": "soundManager",
		"./modules/gameHttpModule": "gameHttpModule",
		"./modules/gameWebSocketModule": "gameWebSocketModule",
		"./modules/uiModule": "uiModule",
		"./services/i18nService": "i18nService",
		"./services/localStorageService": "localStorageService",
		"./services/logService": "logService",
		"./services/miniGameService": "miniGameService",
		"./services/ossService": "ossService",
		"./services/userService": "userService"
	}],
	gameHttpContent: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "2f1411L24hNgravCFgKRVf9", "gameHttpContent"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			}), cc._RF.pop()
	}, {}],
	gameHttpModule: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "3957cmNSF5CaohvsIYsfrks", "gameHttpModule"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("./superModule"),
			s = e("../gameEngine"),
			i = e("../services/ossService"),
			a = e("../../sdk/apiQuery");
		o.default = class extends n.default {
			constructor() {
				super(...arguments), this.m_className = "\u7f51\u7edchttp\u6a21\u5757", this
					.GAME_SERVER_URL = "", this.userAccount = "", this.nickName = null, this
					.userPermission = 0, this.userAreaInfo = [], this.headUrl = "", this
					.loginDay = 0
			}
			PingPong(e, t) {}
			getUserWebInfo(e, t, o) {}
			getLocalPropertyInfo(e, t) {
				this.sendHttp("/dataCenter/api/ip/getClientInfo", "get", null, {}, e, e => {
					console.error("#38 http\u9519\u8bef", e), t && t(e)
				})
			}
			get UserAccount() {
				return this.userAccount
			}
			set UserAccount(e) {
				this.userAccount = e
			}
			get UserName() {
				return this.nickName
			}
			set UserName(e) {
				this.nickName = e
			}
			get UserPermission() {
				return this.userPermission
			}
			get UserAreaInfo() {
				return this.userAreaInfo
			}
			get HeadUrl() {
				return this.headUrl
			}
			set HeadUrl(e) {
				this.headUrl = e
			}
			get LoginDay() {
				return this.loginDay
			}
			contrastSkin(e) {
				e || (e = []), e.push(0);
				let t = s.services().userSrv.getUserHasSkin(),
					o = [];
				for (let n = 0; n < e.length; n++) {
					let s = e[n];
					t.includes(String(s)) || o.push(String(s))
				}
				s.default.getModules().uiControlModule.showSkinRewardPage(...o)
			}
			h5Login(e, t, o, n) {
				const s = {
					account: e,
					nickName: t,
					platform: o
				};
				this.sendHttp(a.ApiH5UserLogin.head, "post", s, {}, e => {
					let t = e;
					this.userAccount = t.account, this.headUrl = t.head, t.account && (
							this.nickName =
							`\u6e38\u5ba2${t.account.substring(t.account.length-6)}`),
						this.userAreaInfo = [], this.userAreaInfo.push(t.country), this
						.userAreaInfo.push(t.province), this.userAreaInfo.push(t.city),
						this.loginDay = t.regTime, this.contrastSkin(t.spins), n && n(
						t), console.log("\u767b\u5f55success", e)
				}, e => {
					console.log("\u767b\u5f55fail", e), n && n(null)
				})
			}
			ttLogin(e) {
				return new Promise(t => {
					const o = window.tt,
						n = this;
					o.login({
						force: !0,
						fail: () => {
							t(!1)
						},
						success(s) {
							o.getUserInfo({
								withCredentials: !0,
								lang: "",
								success: o => {
									console.warn(
										"\u5e73\u53f0\u767b\u5f55succeed",
										o);
									const i = o.userInfo.nickName,
										r = {
											code: s.code,
											anonymousCode: s
												.anonymousCode,
											nickName: i,
											headData: o.userInfo
												.avatarUrl,
											country: o.userInfo
												.country,
											province: o.userInfo
												.province,
											city: o.userInfo.city
										};
									n.sendHttp(a.ApiTTUserLogin
										.head, "post", r, {},
										o => {
											console.warn(
												"tt\u767b\u5f55\u6210\u529f",
												o);
											let s = o;
											n.userAccount = s
												.account, n
												.nickName = i, n
												.headUrl = s
												.head, n
												.userAreaInfo = [],
												n.userAreaInfo
												.push(s
												.country), n
												.userAreaInfo
												.push(s
													.province),
												n.userAreaInfo
												.push(s.city), n
												.contrastSkin(s
													.spins), n
												.loginDay = s
												.regTime, e &&
												e(i, s.account),
												t(!0)
										}, o => {
											console.log(
												"tt\u767b\u5f55fail",
												o), e && e(
												i, null), t(
												!1)
										})
								},
								fail: () => {
									console.warn(
										"\u5e73\u53f0\u767b\u5f55fail",
										s), t(!1)
								}
							})
						}
					})
				})
			}
			commitRank(e, t) {
				const o = {
					account: this.UserAccount,
					time: e,
					prop: t
				};
				this.sendHttp(a.ApiCommitRank.head, "post", o, {}, e => {
					console.log("\u63d0\u4ea4\u6210\u529f", e), s.modules()
						.uiControlModule.showSkinRewardPage(...e.getSpin)
				}, e => {
					console.log("\u63d0\u4ea4\u5931\u8d25", e)
				})
			}
			getCountryRank(e, t) {
				return new Promise(o => {
					const n = {
						account: this.UserAccount,
						start: e,
						limit: t
					};
					this.sendHttp(a.ApiRankListNum.head, "post", n, {}, e => {
						let t = e;
						console.log("\u8bf7\u6c42\u6210\u529f", e), o(t)
					}, e => {
						console.log("\u8bf7\u6c42\u5931\u8d25", e), o(null)
					})
				})
			}
			getHallRank(e, t) {
				return new Promise(o => {
					const n = {
						start: e,
						limit: t
					};
					this.sendHttp(a.ApiRankUserListNum.head, "post", n, {}, e => {
						let t = e;
						console.log(
							"\u8bf7\u6c42\u4e3b\u9875\u4fe1\u606f\u6210\u529f",
							e), o(t)
					}, e => {
						console.log(
							"\u8bf7\u6c42\u4e3b\u9875\u4fe1\u606f\u5931\u8d25",
							e), o(null)
					})
				})
			}
			getMyProvinceRank() {
				return new Promise(e => {
					const t = {
						account: this.UserAccount
					};
					this.sendHttp(a.ApiGetMeProvinceRank.head, "post", t, {}, t => {
						let o = t;
						console.log(
							"\u8bf7\u6c42\u8eab\u4efd\u4fe1\u606f\u6210\u529f",
							t), e(o)
					}, t => {
						console.log(
							"\u8bf7\u6c42\u8eab\u4efd\u4fe1\u606f\u5931\u8d25",
							t), e({})
					})
				})
			}
			setUserSkin(e) {
				const t = {
					account: this.UserAccount,
					spin: e
				};
				this.sendHttp(a.ApiSetMeSpin.head, "post", t, {}, e => {
					console.log("\u8bbe\u7f6e\u76ae\u80a4\u6210\u529f", e)
				}, e => {
					console.log("\u8bbe\u7f6e\u76ae\u80a4\u5931\u8d25", e)
				})
			}
			getTopThree(e) {
				return new Promise(t => {
					this.sendHttp(a.ApiKingSheep.head, "post", {}, {}, o => {
						let n = o;
						console.log("\u8bf7\u6c42\u6210\u529f", o), e && e(n),
							t()
					}, e => {
						console.log("\u8bf7\u6c42\u5931\u8d25", e), t()
					})
				})
			}
			sendKsHttp(e, t, o, n, s, i) {
				t = t.toUpperCase();
				const a = this.GAME_SERVER_URL + e,
					r = window.ks;
				"POST" == t ? r.request({
					method: t,
					url: a,
					data: o,
					header: {
						"content-type": "application/json"
					},
					success: t => {
						console.log("\u5feb\u624b\u56de\u6267", t, e);
						let o = t.data;
						o.data && (o = o.data), s(o)
					},
					fail: e => {
						i(e)
					}
				}) : console.error("\u672a\u5b9e\u73b0\u5feb\u624b\u7684GET\u8bf7\u6c42")
			}
			sendHttp(e, t, o, n, a, r, c = !0) {
				if (s.services().ossSrv.getPlatform() == i.PLATFORM_CODE.KS) return void this
					.sendKsHttp(e, t, o, n, a, r);
				let l = this.GAME_SERVER_URL + e,
					d = null;
				if (o)
					for (let s in o) {
						let e = o[s];
						null == d ? d = `${s}=${e}` : d += `&${s}=${e}`
					}
				let u = new XMLHttpRequest;
				u.timeout = 1e4, u.onreadystatechange = () => {
						if (u.readyState == XMLHttpRequest.DONE)
							if (u.status >= 200 && u.status < 300) {
								let e = u.responseText;
								console.warn(e, "???????????"), this.onHttpDone(JSON.parse(e),
									e => {
										switch (typeof e) {
											case "object":
												a(e);
												break;
											case "string":
												a(JSON.parse(e))
										}
									}, r, u)
							} else r && r(null)
					}, u.ontimeout = () => {
						console.error("\u8bf7\u6c42\u8d85\u65f6", l), r && r({
							code: -1,
							msg: "\u8bf7\u6c42\u8d85\u65f6",
							data: null
						})
					}, "GET" == t.toUpperCase() && d && (l += `?${d}`), u.open(t, l, c), u
					.setRequestHeader("Content-type", "application/json"), "POST" == t
					.toUpperCase() ? u.send(JSON.stringify(o)) : u.send()
			}
			onHttpDone(e, t, o, n) {
				let {
					code: s,
					msg: i,
					data: a
				} = e;
				if (null != s && 0 != s) return o && o(e), void console.error(
					"\u9519\u8bef\u7684\u56de\u6267", e);
				t(a || e)
			}
		}, cc._RF.pop()
	}, {
		"../../sdk/apiQuery": "apiQuery",
		"../gameEngine": "gameEngine",
		"../services/ossService": "ossService",
		"./superModule": "superModule"
	}],
	gameManager: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "c63c5oIiCRPLaC81YD0U0on", "gameManager");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("./superManager"),
			i = e("./gameContent/gameMode_json"),
			a = e("../gameEngine"),
			r = e("../libs/data_control"),
			c = e("../configs/gameConfig"),
			l = e("../../O1ModuleRes/frame/versionNotice"),
			d = e("../../WsSdk/webSocketProtocol/wsInstanceList/CSubLoginGame");
		o.default = class extends s.default {
			constructor() {
				super(), this.className = "\u6e38\u620f\u7ba1\u7406", this.m_currGameMode =
					null, this.m_versionNotice = null, this.m_VERSION_NOTICE_KEY =
					"game-version-notice"
			}
			loadManager() {
				const e = Object.create(null, {
					loadManager: {
						get: () => super.loadManager
					}
				});
				return n(this, void 0, void 0, function*() {
					return yield e.loadManager.call(this), this.m_versionNotice = a
						.default.getServices().localStorageSrv.getStorage(this
							.m_VERSION_NOTICE_KEY), Promise.resolve(!0)
				})
			}
			onGameRun() {
				let e = c.default.VERSION_NOTICE;
				this.m_versionNotice != e && (this.m_versionNotice = e, a.default.getServices()
					.localStorageSrv.setStorage(this.m_VERSION_NOTICE_KEY, this
						.m_versionNotice), this.showVersionNotice());
				const t = window.tt;
				if (t) {
					let e = t.getLaunchOptionsSync();
					console.log(e.showFrom), console.log("\u542f\u52a8\u53c2\u6570", e, JSON
						.stringify(e))
				}
			}
			showVersionNotice() {
				this.m_versionNotice && a.modules().uiControlModule.showFramePrefab(
					"preload/frame/versionNotice", null, !1, e => {
						e.getComponent(l.default).setNotice(this.m_versionNotice)
					})
			}
			getVersionNotice() {
				return this.m_versionNotice
			}
			loadModeOver() {
				switch (console.log("\u52a0\u8f7d\u5b50\u6e38\u620f\u573a\u666f", this
						.m_currGameMode.sceneName), a.default.getModules().uiControlModule
					.showLoading().then(), this.m_currGameMode.sceneMode) {
					case i.SCENE_MODE.FIRE:
						a.default.loadScene(this.m_currGameMode.sceneName, () => {
							a.default.getModules().uiControlModule.hideLoading(), this
								.m_currGameMode.onlineGameId && a.modules()
								.uiControlModule.showFramePrefab("preload/frame/ping", a
									.default.Canvas(), !1)
						});
						break;
					case i.SCENE_MODE.PREFAB:
						this.m_currGameMode.bundle.load(this.m_currGameMode.sceneName, cc
							.Prefab, (e, t) => {
								e ? console.error(
									"#55 \u6a21\u5f0f\u5bf9\u5e94\u9884\u5236\u4f53\u4e0d\u5b58\u5728\u6216\u5f02\u5e38",
									this.m_currGameMode) : (this.m_currGameMode
									.currScenePrefabNode = cc.instantiate(t), a.default
									.Canvas().addChild(this.m_currGameMode
										.currScenePrefabNode), a.default.getModules()
									.uiControlModule.hideLoading())
							});
						break;
					default:
						a.default.getModules().uiControlModule.hideLoading(), console.error(
							"#56 \u8bf7\u6307\u793a\u52a0\u8f7d\u6a21\u5f0f\u7684\u7c7b\u578b"
							)
				}
			}
			getMainSceneNameAndLoadBundle() {
				for (let e of i.default())
					if (e.isMainScene) return e.sceneMode == i.SCENE_MODE.FIRE ? (this
						.m_currGameMode = e, e) : (console.error(
						"\u5165\u53e3\u573a\u666f\u6a21\u5f0f\u4e0d\u5141\u8bb8\u4e3a\u9884\u5236\u4f53",
						e.name, e), null);
				return "hall"
			}
			setMainModeLoaded(e) {
				this.m_currGameMode = e
			}
			loginGameServer(e) {
				a.modules().uiControlModule.showLoading(null,
					"\u6b63\u5728\u767b\u5f55\u6e38\u620f\u2026\u2026").then(() => {
					const t = new d.default(e);
					a.managers().socketMgr.sendHallMessage(t)
				})
			}
			onLoginFailGameServer(e) {
				a.modules().uiControlModule.showMessageBox(e), a.modules().uiControlModule
					.hideLoading()
			}
			onLoginSuccessGameServer(e) {
				a.modules().uiControlModule.showMessageBox("\u767b\u5f55\u6210\u529f"), i
					.default().forEach(t => {
						t.onlineGameId != e || this.onLoadCurrModeDetail(t).then()
					})
			}
			selectMode(e) {
				return n(this, void 0, void 0, function*() {
					let t = null;
					null != (t = i.default()[e]) ? t.onlineGameId ? this
						.loginGameServer(t.onlineGameId) : yield this
							.onLoadCurrModeDetail(t): a.default.getModules()
							.uiControlModule.showMessageBox("\u656c\u8bf7\u671f\u5f85")
				})
			}
			onLoadCurrModeDetail(e) {
				return n(this, void 0, void 0, function*() {
					if (this.m_currGameMode = e, null == e.bundle) {
						console.debug("\u5b50\u5305\u662f\u5426\u5df2\u52a0\u8f7d", e
							.name, null != cc.assetManager.bundles.get(e.name));
						let t = cc.assetManager.bundles.get(e.name);
						t && (e.bundle = t)
					}
					null == e.bundle ? (console.log("\u663e\u793a\u8fdb\u5ea6"), a
						.default.getModules().uiControlModule.showLoading().then(),
						console.log("\u8fdb\u5ea6\u663e\u793a\u5b8c", e), cc
						.assetManager.loadBundle(e.name, (t, o) => {
							a.default.getModules().uiControlModule
							.hideLoading(), t ? console.error(
									"\u6e38\u620f\u5b50\u5305\u4e0d\u5b58\u5728",
									e) : (e.bundle = o, this.loadModeOver())
						})) : this.loadModeOver()
				})
			}
			getCurrMode() {
				return this.m_currGameMode
			}
			getCurrModeNeedPower() {
				let {
					type: e
				} = this.m_currGameMode;
				return this.getModeNeedPower(e)
			}
			getModeNeedPower(e) {
				return 0
			}
			getModeInfo(e) {
				let t = i.default()[e];
				return t && t.lookVideCount > 0 && (t.currLookedVideoCount = Number(a.default
						.getServices().localStorageSrv.getStorage(
						`mode-looked-${t.type}`) || ""), t.lookVideoUnlockDate = a.default
					.getServices().localStorageSrv.getStorage(
					`mode-looked-date-${t.type}`) || ""), t
			}
			addModeLookCount(e) {
				let t = i.default()[e];
				t.lookVideCount > 0 && (t.currLookedVideoCount++, a.default.getServices()
					.localStorageSrv.setStorage(`mode-looked-${t.type}`, t
						.currLookedVideoCount), a.default.getServices().localStorageSrv
					.setStorage(`mode-looked-date-${t.type}`, r.default
						.getCurrDateDayString()))
			}
			returnMainScene() {
				return n(this, void 0, void 0, function*() {
					switch (yield a.default.getModules().uiControlModule.showLoading(),
						this.m_currGameMode.sceneMode) {
						case i.SCENE_MODE.PREFAB:
							this.m_currGameMode.currScenePrefabNode && this
								.m_currGameMode.currScenePrefabNode.isValid && this
								.m_currGameMode.currScenePrefabNode.destroy(), this
								.m_currGameMode.currScenePrefabNode = null, a.default
								.getModules().uiControlModule.hideLoading();
							break;
						case i.SCENE_MODE.FIRE:
							a.default.getModules().uiControlModule.hideLoading(), a
								.default.loadScene("hall")
					}
				})
			}
		}, cc._RF.pop()
	}, {
		"../../O1ModuleRes/frame/versionNotice": "versionNotice",
		"../../WsSdk/webSocketProtocol/wsInstanceList/CSubLoginGame": "CSubLoginGame",
		"../configs/gameConfig": "gameConfig",
		"../gameEngine": "gameEngine",
		"../libs/data_control": "data_control",
		"./gameContent/gameMode_json": "gameMode_json",
		"./superManager": "superManager"
	}],
	gameMode_json: [function(e, t, o) {
		"use strict";
		var n, s;
		cc._RF.push(t, "82b55TxVEtEYbSZfd6tVnMG", "gameMode_json"), Object.defineProperty(o,
				"__esModule", {
					value: !0
				}), o.SCENE_MODE = o.GAME_MODE = void 0,
			function(e) {
				e[e.NORMAL = 0] = "NORMAL"
			}(n = o.GAME_MODE || (o.GAME_MODE = {})),
			function(e) {
				e[e.NORMAL = 0] = "NORMAL", e[e.FIRE = 0] = "FIRE", e[e.PREFAB = 1] = "PREFAB"
			}(s = o.SCENE_MODE || (o.SCENE_MODE = {}));
		const i = [{
			type: n.NORMAL,
			name: "normalMode",
			sceneName: "normalMode",
			sceneMode: s.FIRE,
			explain: "\u95ef\u5173\u6a21\u5f0f",
			lookVideCount: 0
		}];
		o.default = function() {
			return i
		}, cc._RF.pop()
	}, {}],
	gameSetting: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "dca3bvwZTZDu6NsE7YdwpM+", "gameSetting");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.URL_USER_AGREEMENT = o.URL_PRIVACY_POLICY = void 0;
		const s = e("../../engines/gameEngine"),
			i = e("../../engines/services/i18nService"),
			a = e("../../engines/services/i18nContent/i18nInterface"),
			r = e("../../modes/normalMode/normalMode"),
			{
				ccclass: c,
				property: l
			} = cc._decorator;
		o.URL_PRIVACY_POLICY = "", o.URL_USER_AGREEMENT = "";
		let d = class extends cc.Component {
			constructor() {
				super(...arguments), this.spSound = null, this.spVibrate = null, this
					.lbSelectLanguage = null
			}
			onLoad() {}
			start() {
				s.modules().uiControlModule.showHideDialogAnimation(this.node.getChildByName(
					"center"), !0), this.initView()
			}
			initView() {
				i.TT(this.node), this.updateLanguageSelected(), r.default._instance ? this.node
					.getChildByName("center").getChildByName("btnCancel").active = !0 : this
					.node.getChildByName("center").getChildByName("btnCancel").active = !1
			}
			onBtnSelectLanguage() {
				const e = s.services().i18nSrv.getI18nSetting();
				s.modules().uiControlModule.showSelectBox("\u8bed\u8a00",
					"\u8bf7\u9009\u62e9\u8bed\u8a00", ["\u7b80\u4f53\u4e2d\u6587",
						"\u7e41\u9ad4\u4e2d\u6587", "English"
					]).then(t => {
					t < 0 || t != e && (s.services().i18nSrv.setI18nSetting(t), s
						.modules().uiControlModule.showDialogBox(
							"\u8bbe\u7f6e\u6210\u529f",
							"\u9700\u8981\u91cd\u542f\u540e\u751f\u6548", !0, e => {
								e && cc.game.restart()
							}, null, "\u7acb\u5373\u91cd\u542f",
							"\u7136\u540e\u91cd\u542f"), this
						.updateLanguageSelected())
				})
			}
			updateLanguageSelected() {
				switch (s.services().i18nSrv.getI18nSetting()) {
					case a.I18nLanguageEnum.ZH_CN:
						this.lbSelectLanguage.string = i.TT("\u7b80\u4f53\u4e2d\u6587");
						break;
					case a.I18nLanguageEnum.ZH_TC:
						this.lbSelectLanguage.string = i.TT("\u7e41\u4f53\u4e2d\u6587");
						break;
					case a.I18nLanguageEnum.ENGLISH:
						this.lbSelectLanguage.string = i.TT("English")
				}
			}
			onBtnClose() {
				s.managers().soundMgr.playSound("anNiu").then(), s.managers().soundMgr
					.playVibrate(), s.modules().uiControlModule.showHideDialogAnimation(this
						.node.getChildByName("center"), !1, () => {
							this.node.destroy()
						})
			}
			onBtnPrivacy() {
				cc.sys.openURL(o.URL_PRIVACY_POLICY)
			}
			onBtnUserAgreement() {
				cc.sys.openURL(o.URL_USER_AGREEMENT)
			}
			onBtnSwitchSet(e, t) {
				switch (t) {
					case "sound":
						s.managers().soundMgr.setSoundEnabled(!s.managers().soundMgr
							.isSoundEnabled());
						break;
					case "vibrate":
						s.managers().soundMgr.setVibrateEnabled(!s.managers().soundMgr
							.isVibrateEnabled())
				}
				s.managers().soundMgr.playSound("anNiu").then(), s.managers().soundMgr
					.playVibrate()
			}
			update(e) {
				this.spSound.node.active = !s.managers().soundMgr.isSoundEnabled(), this
					.spVibrate.node.active = !s.managers().soundMgr.isVibrateEnabled()
			}
			OnBtnCancel() {
				s.managers().soundMgr.playSound("anNiu").then(), this.node.destroy(), r.default
					._instance.onBtnGiveUp()
			}
		};
		n([l(cc.Sprite)], d.prototype, "spSound", void 0), n([l(cc.Sprite)], d.prototype, "spVibrate",
				void 0), n([l(cc.Label)], d.prototype, "lbSelectLanguage", void 0), d = n([c], d), o
			.default = d, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"../../engines/services/i18nContent/i18nInterface": "i18nInterface",
		"../../engines/services/i18nService": "i18nService",
		"../../modes/normalMode/normalMode": "normalMode"
	}],
	gameSocketManager: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "cbc6fzj3zNI+5dsM+GYaAvD", "gameSocketManager");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("./superManager"),
			i = e("../gameEngine"),
			a = e("../../WsSdk/webSocketProtocol/webSocketProtoHead"),
			r = e("../../WsSdk/webSocketProtocol/wsInstanceList/SSubLoginGame"),
			c = e("../libs/data_control"),
			l = e("../../WsSdk/webSocketProtocol/wsInstanceList/CSubLoginServer"),
			d = e("../../WsSdk/webSocketProtocol/wsInstanceList/SSubLoginServer"),
			u = e("../../WsSdk/webSocketProtocol/wsInstanceList/SSubRushLogin"),
			h = e("../../WsSdk/webSocketProtocol/wsInstanceList/SSubMatchRoom"),
			g = e("../../WsSdk/webSocketProtocol/wsInstanceList/SSubExitRoom"),
			p = e("../../WsSdk/proto/proto"),
			m = e("../../WsSdk/webSocketProtocol/wsInstanceList/SCSubGameSync"),
			f = e("../../WsSdk/webSocketProtocol/wsInstanceList/FpsSyncListMsg");
		o.default = class extends s.default {
			constructor() {
				super(), this.className = "\u6e38\u620fsocket\u7ba1\u7406", this.m_serverUrl =
					"", this.USER_ID_KEY = "web-socket-user-id", this.m_seatI = -1, this
					.m_loginIng = !1, this.m_pingTimeC = 0
			}
			loadManager() {
				const e = Object.create(null, {
					loadManager: {
						get: () => super.loadManager
					}
				});
				return n(this, void 0, void 0, function*() {
					return yield e.loadManager.call(this), this.onloadUserId(), Promise
						.resolve(!0)
				})
			}
			connectServer(e) {
				return n(this, void 0, void 0, function*() {
					return new Promise(t => {
						console.log("socket url", this.m_serverUrl), this.m_ws =
							new WebSocket(this.m_serverUrl), this.m_ws.onerror =
							o => {
								e ? t(!1) : (console.error(
									"#661546 \u8fde\u63a5\u9519\u8bef",
									o), t(!1))
							}, this.m_ws.onopen = e => {
								this.m_ws.binaryType = "arraybuffer", this.m_ws
									.onerror = this.onWebsocketError.bind(this),
									this.m_ws.onclose = this.onWebsocketClose
									.bind(this), this.m_ws.onmessage = this
									.onWebsocketMessage.bind(this), this
									.onWebsocketOpen(e), this.onLoginServer()
									.then(e => {
										e && this.onHeart(), t(e)
									})
							}
					})
				})
			}
			bindRmId(e) {
				this.m_rmId = e
			}
			bindSeatI(e) {
				this.m_seatI = e
			}
			getRmId() {
				return this.m_seatI
			}
			getSeatI() {
				return this.m_seatI
			}
			getUserId() {
				return this.m_userId
			}
			onHeart() {
				this.m_heartInterValId && clearInterval(this.m_heartInterValId);
				const e = p.MSG.Msg.encode({
					msgType: a.$WS.ProtoHead.PING
				}).finish();
				this.m_pingTimeC = Date.now(), this.sendMessage(e), this.m_heartInterValId =
					setInterval(() => {
						this.m_pingTimeC = Date.now(), this.sendMessage(e)
					}, a.$WS.HEART_SEND_TIME)
			}
			onLoginServer() {
				return n(this, void 0, void 0, function*() {
					return this.m_loginIng = !0, new Promise(e => {
						const t = new l.default(this.getUserId());
						this.sendMessage(t);
						let o = setInterval(() => {
							this.m_loginIng || (clearInterval(o), e(!0))
						}, 10);
						cc.game.on(cc.game.EVENT_HIDE, () => {
							this.m_ws.close()
						})
					})
				})
			}
			onLoginServerSuccess() {
				this.m_loginIng = !1
			}
			onloadUserId() {
				let e = i.services().localStorageSrv.getStorage(this.USER_ID_KEY, !1);
				e || (e = c.default.getRandId(16), i.services().localStorageSrv.setStorage(this
					.USER_ID_KEY, e, !1)), this.m_userId = e
			}
			changeUserId(e) {
				this.m_userId = e, i.services().localStorageSrv.setStorage(this.USER_ID_KEY, e,
					!1)
			}
			onServerUserId(e) {
				this.getUserId() != e && this.changeUserId(e)
			}
			destroyCurrGameClient() {
				delete this.m_gameClient, this.m_gameClient = null
			}
			registerGameClient(e) {
				this.m_gameClient && this.destroyCurrGameClient(), this.m_gameClient = e
			}
			sendHallMessage(e) {
				this.sendMessage(e)
			}
			sendGameMessage(e) {
				this.sendMessage(e)
			}
			sendMessage(e) {
				let t = null;
				t = e instanceof Uint8Array ? e : e.getPackageBody(), this.m_ws.send(t.slice()
					.buffer)
			}
			onResetConnectServer() {
				return n(this, void 0, void 0, function*() {
					null != this.m_heartInterValId && clearInterval(this
						.m_heartInterValId), this.m_heartInterValId = null;
					const e = () => {
						try {
							i.modules().uiControlModule.showDialogBox(
								"\u8fde\u63a5\u65ad\u5f00",
								"\u4e0e\u670d\u52a1\u5668\u8fde\u63a5\u65ad\u5f00\uff0c\u8bf7\u91cd\u65b0\u8fde\u63a5",
								!1, () => {
									e()
								})
						} catch (t) {}
					};
					e()
				})
			}
			onWebsocketError(e) {
				console.log("socket\u8fde\u63a5\u9519\u8bef", e), this.onResetConnectServer()
					.then()
			}
			onWebsocketClose(e) {
				console.log("socket\u8fde\u63a5\u5173\u95ed", e), this.onResetConnectServer()
					.then()
			}
			onWebsocketOpen(e) {
				console.log("socket\u8fde\u63a5\u6210\u529f", e)
			}
			onUserComeIn(e) {
				e.body.userId == this.getUserId() && this.bindSeatI(e.body.seatI)
			}
			onUserGoOut(e) {
				e.body.uid == this.getUserId() && this.bindSeatI(-1)
			}
			onFpsGameSyncMessage(e) {
				return n(this, void 0, void 0, function*() {
					this.m_gameClient ? yield this.m_gameClient.onFpsGameSyncMessage(e):
						console.error(
							"#2822114 \u6ca1\u6709\u6e38\u620f\u8fd0\u884c %s", e)
				})
			}
			onGameSyncMessage(e) {
				return n(this, void 0, void 0, function*() {
					this.m_gameClient ? yield this.m_gameClient.onGameSyncMessage(e):
						console.error(
							"#1311716 \u6ca1\u6709\u6e38\u620f\u8fd0\u884c %s", e)
				})
			}
			onGameMessage(e) {
				return n(this, void 0, void 0, function*() {
					if (!this.m_gameClient) return void console.error(
						"#1311716 \u6ca1\u6709\u6e38\u620f\u8fd0\u884c %s", e);
					const t = p.MSG.GameMsg.decode(e),
						o = t.gameId,
						n = t.gameHead;
					if (this.m_gameClient.gameId == o) {
						switch (n) {
							case h.default.HEAD:
								this.onUserComeIn(h.default.unPackageMessage(e));
								break;
							case g.default.HEAD:
								this.onUserGoOut(g.default.unPackageMessage(e))
						}
						yield this.m_gameClient.onGameMessage(n, e)
					} else console.error(
						"#1361720 \u6e38\u620f\u5df2\u7ecf\u5207\u6362\uff0c\u6570\u636e\u8fd8\u672a\u5207\u6362",
						this.m_gameClient.gameId, this.m_gameClient.gameName, e)
				})
			}
			onHallMessage(e) {
				return n(this, void 0, void 0, function*() {
					const t = p.MSG.HallMsg.decode(e);
					switch (console.log("\u5927\u5385\u6d88\u606f", t), t.hallHead) {
						case d.default.HEAD: {
							const t = d.default.unPackageMessage(e);
							this.onServerUserId(t.body.userId), this
								.onLoginServerSuccess();
							break
						}
						case r.default.HEAD: {
							const t = r.default.unPackageMessage(e);
							t.body.loginCode ? i.managers().gameMgr
								.onLoginFailGameServer(t.body.loginMsg) : i.managers()
								.gameMgr.onLoginSuccessGameServer(t.body.gameId);
							break
						}
						case u.default.HEAD:
							this.m_ws.close(), i.default.emit("loading-title",
								"\u6b64\u8d26\u53f7\u6b63\u5728\u6e38\u620f\u4e2d");
							break;
						default:
							console.error("#1341833 \u534f\u8bae\u4e0d\u5bf9\u7b49", t)
					}
				})
			}
			onWebsocketMessage(e) {
				const t = new Uint8Array(e.data);
				try {
					switch (a.$WS.unPackageMessage(t)) {
						case a.$WS.ProtoHead.HALL:
							this.onHallMessage(t).then();
							break;
						case a.$WS.ProtoHead.GAME:
							this.onGameMessage(t).then();
							break;
						case a.$WS.ProtoHead.PONG: {
							const e = Date.now() - this.m_pingTimeC;
							i.default.emit("ping-time", e);
							break
						}
						case a.$WS.ProtoHead.SYNC: {
							let e = m.default.unPackageMessage(t);
							this.onGameSyncMessage(e).then();
							break
						}
						case a.$WS.ProtoHead.FPS_SYNC: {
							let e = f.default.unPackageMessage(t);
							this.onFpsGameSyncMessage(e).then();
							break
						}
					}
				} catch (e) {
					console.error("#931658 \u9519\u8bef\u7684\u6d88\u606f", t, e)
				}
			}
			getWebSocketObject() {
				return this.m_ws
			}
		}, cc._RF.pop()
	}, {
		"../../WsSdk/proto/proto": "proto",
		"../../WsSdk/webSocketProtocol/webSocketProtoHead": "webSocketProtoHead",
		"../../WsSdk/webSocketProtocol/wsInstanceList/CSubLoginServer": "CSubLoginServer",
		"../../WsSdk/webSocketProtocol/wsInstanceList/FpsSyncListMsg": "FpsSyncListMsg",
		"../../WsSdk/webSocketProtocol/wsInstanceList/SCSubGameSync": "SCSubGameSync",
		"../../WsSdk/webSocketProtocol/wsInstanceList/SSubExitRoom": "SSubExitRoom",
		"../../WsSdk/webSocketProtocol/wsInstanceList/SSubLoginGame": "SSubLoginGame",
		"../../WsSdk/webSocketProtocol/wsInstanceList/SSubLoginServer": "SSubLoginServer",
		"../../WsSdk/webSocketProtocol/wsInstanceList/SSubMatchRoom": "SSubMatchRoom",
		"../../WsSdk/webSocketProtocol/wsInstanceList/SSubRushLogin": "SSubRushLogin",
		"../gameEngine": "gameEngine",
		"../libs/data_control": "data_control",
		"./superManager": "superManager"
	}],
	gameWebSocketModule: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "2d0fcx7v2lFrJeGz9OMwl6q", "gameWebSocketModule");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.HandleMessage = void 0;
		const s = e("./superModule");
		class i {}
		o.HandleMessage = i, o.default = class extends s.default {
			constructor() {
				super(), this.m_className = "webSocket\u7f51\u7edc\u6a21\u5757", this.m_ws =
					null, this.m_message = new i
			}
			preLoadModules() {
				const e = Object.create(null, {
					preLoadModules: {
						get: () => super.preLoadModules
					}
				});
				return n(this, void 0, void 0, function*() {
					yield e.preLoadModules.call(this)
				})
			}
			loadModule() {
				const e = Object.create(null, {
					loadModule: {
						get: () => super.loadModule
					}
				});
				return n(this, void 0, void 0, function*() {
					yield e.loadModule.call(this)
				})
			}
			connectServer(e) {
				return n(this, void 0, void 0, function*() {
					return new Promise(e => {
						e(!0)
					})
				})
			}
			addMessageOnEvent(e, t) {
				null == this.m_message[e] && (this.m_message[e] = []), this.m_message[e].push(t)
			}
			removeMessageEvent(e, t = null) {
				if (null != this.m_message[e])
					if (null == t) this.m_message[e].length = 0;
					else {
						let o = this.m_message[e].indexOf(t);
						o >= 0 && this.m_message[e].splice(o, 1)
					}
			}
			disconnectServer() {
				this.m_ws && this.m_ws.readyState != this.m_ws.CLOSED && this.m_ws.readyState !=
					this.m_ws.CLOSING && this.m_ws.close()
			}
			sendMessage(e) {
				return null == this.m_ws ? (console.error("#48 \u672a\u521b\u5efaWebsocket"), !
					1) : this.m_ws.readyState != this.m_ws.OPEN ? (console.warn(
						"#52 \u4e0e\u670d\u52a1\u5668\u7684\u8fde\u63a5\u5df2\u65ad\u5f00"),
					!1) : (console.log("\u53d1\u9001\u6570\u636e", e), this.m_ws.send(e), !
					0)
			}
		}, cc._RF.pop()
	}, {
		"./superModule": "superModule"
	}],
	getItemDialog: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "4e0bcJDvaBIWIaKUi6wqitB", "getItemDialog");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../../engines/gameEngine"),
			i = e("../normalMode"),
			a = e("../Native"),
			{
				ccclass: r,
				property: c
			} = cc._decorator;
		let l = class extends cc.Component {
			constructor() {
				super(...arguments), this.itemName = null, this.adNumLabel = null, this.item1 =
					null, this.item2 = null, this.item3 = null, this.curItemIndex = 0
			}
			start() {}
			initItem(e) {
				this.curItemIndex = e;
				for (let t = 1; t <= 3; t++) this["item" + t].active = e == t;
				switch (e) {
					case 1:
						this.itemName.string = "\u79fb\u51fa\u9053\u5177", a.default
							.actionEvent("2", "1");
						break;
					case 2:
						this.itemName.string = "\u64a4\u56de\u9053\u5177", a.default
							.actionEvent("3", "1");
						break;
					case 3:
						this.itemName.string = "\u6d17\u724c\u9053\u5177", a.default
							.actionEvent("4", "1")
				}
			}
			onBtnGet() {
				switch (s.managers().soundMgr.playSound("anNiu"), this.curItemIndex) {
					case 1:
						this.itemName.string = "\u79fb\u51fa\u9053\u5177", a.default
							.actionEvent("2", "2");
						break;
					case 2:
						this.itemName.string = "\u64a4\u56de\u9053\u5177", a.default
							.actionEvent("3", "2");
						break;
					case 3:
						this.itemName.string = "\u6d17\u724c\u9053\u5177", a.default
							.actionEvent("4", "2")
				}
				a.default.showRewardVideo(), this.scheduleOnce(() => {
					i.default._instance.setItemNum(this.curItemIndex), this.adNumLabel
						.string = "1/1", this.node.destroy()
				}, .5)
			}
			onBtnClose() {
				s.managers().soundMgr.playSound("anNiu"), this.node.destroy()
			}
		};
		n([c(cc.Label)], l.prototype, "itemName", void 0), n([c(cc.Label)], l.prototype, "adNumLabel",
				void 0), n([c(cc.Node)], l.prototype, "item1", void 0), n([c(cc.Node)], l.prototype,
				"item2", void 0), n([c(cc.Node)], l.prototype, "item3", void 0), l = n([r], l), o
			.default = l, cc._RF.pop()
	}, {
		"../../../engines/gameEngine": "gameEngine",
		"../Native": "Native",
		"../normalMode": "normalMode"
	}],
	giveupDialog: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "6695dG6pf5K8KE1QKxat/GG", "giveupDialog");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../../engines/gameEngine"),
			i = e("../normalMode"),
			{
				ccclass: a,
				property: r
			} = cc._decorator;
		let c = class extends cc.Component {
			start() {
				i.default._instance.isReborn && (this.node.getChildByName("panel_window4")
					.getChildByName("zi").active = !1, this.node.getChildByName(
						"panel_window4").getChildByName("button_1").y = 124)
			}
			onBtnGiveUp(e) {
				s.managers().soundMgr.playSound("anNiu"), this.node.destroy(), i.default
					._instance.gameLose(!0)
			}
			onBtnTry(e) {
				s.managers().soundMgr.playSound("anNiu"), this.node.destroy()
			}
		};
		c = n([a], c), o.default = c, cc._RF.pop()
	}, {
		"../../../engines/gameEngine": "gameEngine",
		"../normalMode": "normalMode"
	}],
	h5Api: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "8c5b6fpATBMXbIq7jHbcOsG", "h5Api");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../miniApp"),
			i = e("../../../gameEngine");
		class a extends s.default {
			constructor() {
				super(...arguments), this.m_appId = "", this.m_secret = "", this.m_adUnitId = ""
			}
			commitRank(e, t) {
				return n(this, void 0, void 0, function*() {
					return Promise.resolve(!1)
				})
			}
			showRank(e) {
				return n(this, void 0, void 0, function*() {
					return Promise.resolve(!1)
				})
			}
			LocalInBlockCityList() {
				return !1
			}
			vibrate(e) {
				console.log("h5 \u632f\u52a8")
			}
			static getRandNameAndUrl() {
				return {
					nickName: "123",
					avatarUrl: null,
					language: "ch",
					gender: 0,
					country: "\u4e2d\u56fd",
					province: "",
					city: ""
				}
			}
			validAppId() {}
			getUserInfo(e) {
				e.success && e.success({
					userInfo: a.getRandNameAndUrl()
				})
			}
			showToast(e) {}
			showLoading(e) {
				console.log("h5 \u663e\u793a\u8fdb\u5ea6", e)
			}
			hideLoading() {
				console.log("h5 \u9690\u85cf\u8fdb\u5ea6")
			}
			preCreateUnits() {}
			loadAndShowVideoAd(e, t, o) {
				console.log("H5 \u5e7f\u544a\u52a0\u8f7d\u5e76\u663e\u793a"), e && e(), o && o()
			}
			authorize(e) {
				e.success && e.success()
			}
			login(e) {
				e.success && e.success({
					code: null
				})
			}
			gameRecordStart(e, t) {
				console.log("h5 \u5f55\u5c4fstart"), t && t(null)
			}
			gameRecordStop() {
				return console.log("h5 \u5f55\u5c4fstop"), !0
			}
			shareGameRecordVideo(e, t) {
				console.log("h5 \u5206\u4eab\u5f55\u5c4f")
			}
			isProduction() {
				return a.isProduction()
			}
			isHaveShareVideo() {
				return !0
			}
			reportAnalytics(e, t) {
				console.log("h5 \u53d1\u9001\u57cb\u70b9")
			}
			clearMemory() {}
			shareAppMessage(e) {}
			operateGameLive() {}
			static isProduction() {
				return !0
			}
			createMoreGameBtn() {}
			hideBanner() {}
			showBannerAD(e, t, o) {}
			showInterstitialAd(e, t) {}
			showNativeAd() {}
			reportAdClickNativeAd() {}
			addShortcut() {
				return console.log("h5 \u6dfb\u52a0\u684c\u9762"), Promise.resolve(!0)
			}
			drawUrlImage(e, t) {
				e.includes("local://") ? i.default.getModules().uiControlModule.getGameBundle()
					.load(e.replace("local://", "Head/"), cc.SpriteFrame, (e, o) => {
						e ? console.error(
							"\u52a0\u8f7d\u5934\u50cf\u5931\u8d25 ttApi #755") : t(o)
					}) : cc.assetManager.loadRemote(e, (e, o) => {
						if (e) return console.error("#1553937 \u56fe\u7247\u51fa\u9519", e),
							void t(null);
						t(new cc.SpriteFrame(o))
					})
			}
			showVideo(e) {}
			getShareVideoRank(e, t) {
				t([{
					cover_url: "https://p6.toutiaoimg.com/img/tos-cn-i-0022/21042eee9d1a44cda8835b0586cf1d90~noop.jpeg?from=shortvideo",
					create_time: "2021-04-07 21:15:12",
					digg_count: "0",
					rank: 7,
					source: 13,
					user_name: "Visitor",
					video_id: "131047150d294037025515410e7d436501502b42017e4c605757404d01734560505247440973",
					video_tag: ""
				}, {
					cover_url: "https://p6.toutiaoimg.com/img/tos-cn-i-0022/21042eee9d1a44cda8835b0586cf1d90~noop.jpeg?from=shortvideo",
					create_time: "2021-04-07 21:15:12",
					digg_count: "0",
					rank: 7,
					source: 13,
					user_name: "Visitor",
					video_id: "131047150d294037025515410e7d436501502b42017e4c605757404d01734560505247440973",
					video_tag: ""
				}, {
					cover_url: "https://p6.toutiaoimg.com/img/tos-cn-i-0022/21042eee9d1a44cda8835b0586cf1d90~noop.jpeg?from=shortvideo",
					create_time: "2021-04-07 21:15:12",
					digg_count: "0",
					rank: 7,
					source: 13,
					user_name: "Visitor",
					video_id: "131047150d294037025515410e7d436501502b42017e4c605757404d01734560505247440973",
					video_tag: ""
				}, {
					cover_url: "https://p6.toutiaoimg.com/img/tos-cn-i-0022/21042eee9d1a44cda8835b0586cf1d90~noop.jpeg?from=shortvideo",
					create_time: "2021-04-07 21:15:12",
					digg_count: "0",
					rank: 7,
					source: 13,
					user_name: "Visitor",
					video_id: "131047150d294037025515410e7d436501502b42017e4c605757404d01734560505247440973",
					video_tag: ""
				}, {
					cover_url: "https://p6.toutiaoimg.com/img/tos-cn-i-0022/21042eee9d1a44cda8835b0586cf1d90~noop.jpeg?from=shortvideo",
					create_time: "2021-04-07 21:15:12",
					digg_count: "0",
					rank: 7,
					source: 13,
					user_name: "Visitor",
					video_id: "131047150d294037025515410e7d436501502b42017e4c605757404d01734560505247440973",
					video_tag: ""
				}, {
					cover_url: "https://p6.toutiaoimg.com/img/tos-cn-i-0022/21042eee9d1a44cda8835b0586cf1d90~noop.jpeg?from=shortvideo",
					create_time: "2021-04-07 21:15:12",
					digg_count: "0",
					rank: 7,
					source: 13,
					user_name: "Visitor",
					video_id: "131047150d294037025515410e7d436501502b42017e4c605757404d01734560505247440973",
					video_tag: ""
				}, {
					cover_url: "https://p6.toutiaoimg.com/img/tos-cn-i-0022/21042eee9d1a44cda8835b0586cf1d90~noop.jpeg?from=shortvideo",
					create_time: "2021-04-07 21:15:12",
					digg_count: "0",
					rank: 7,
					source: 13,
					user_name: "Visitor",
					video_id: "131047150d294037025515410e7d436501502b42017e4c605757404d01734560505247440973",
					video_tag: ""
				}, {
					cover_url: "https://p6.toutiaoimg.com/img/tos-cn-i-0022/21042eee9d1a44cda8835b0586cf1d90~noop.jpeg?from=shortvideo",
					create_time: "2021-04-07 21:15:12",
					digg_count: "0",
					rank: 7,
					source: 13,
					user_name: "Visitor",
					video_id: "131047150d294037025515410e7d436501502b42017e4c605757404d01734560505247440973",
					video_tag: ""
				}, {
					cover_url: "https://p6.toutiaoimg.com/img/tos-cn-i-0022/21042eee9d1a44cda8835b0586cf1d90~noop.jpeg?from=shortvideo",
					create_time: "2021-04-07 21:15:12",
					digg_count: "0",
					rank: 7,
					source: 13,
					user_name: "Visitor",
					video_id: "131047150d294037025515410e7d436501502b42017e4c605757404d01734560505247440973",
					video_tag: ""
				}, {
					cover_url: "https://p6.toutiaoimg.com/img/tos-cn-i-0022/21042eee9d1a44cda8835b0586cf1d90~noop.jpeg?from=shortvideo",
					create_time: "2021-04-07 21:15:12",
					digg_count: "0",
					rank: 7,
					source: 13,
					user_name: "Visitor",
					video_id: "131047150d294037025515410e7d436501502b42017e4c605757404d01734560505247440973",
					video_tag: ""
				}])
			}
			subscribeMessage() {}
			showAddFavoriteGuide(e, t, o) {}
			PlayLastRecordSound(e, t, o) {
				setTimeout(() => {
					t && t()
				}, 1e3)
			}
			StartRecordSound() {}
			StopRecordSound(e) {
				setTimeout(() => {
					e && e()
				}, 1e3)
			}
			showModal(e) {
				console.log("h5 \u5bf9\u8bdd\u6846", e)
			}
			navigateToMiniGame(e, t, o) {
				console.log("h5 \u8df3\u8f6c\u5230\u5176\u4ed6\u5c0f\u6e38\u620f", e), t && t()
			}
			drawHead(e) {
				return Promise.resolve(void 0)
			}
			fullScreenVideo() {
				return Promise.resolve(void 0)
			}
		}
		o.default = a, cc._RF.pop()
	}, {
		"../../../gameEngine": "gameEngine",
		"../miniApp": "miniApp"
	}],
	h5_4399: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "dc6caKpTMVJxIWSWMscitRJ", "h5_4399");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../miniApp"),
			i = window.h5api;
		class a extends s.default {
			constructor() {
				super(...arguments), this.m_appId = "", this.m_secret = "", this.m_adUnitId = ""
			}
			commitRank(e, t) {
				return n(this, void 0, void 0, function*() {
					return Promise.resolve(!1)
				})
			}
			showRank(e) {
				return n(this, void 0, void 0, function*() {
					return Promise.resolve(!1)
				})
			}
			LocalInBlockCityList() {
				return !1
			}
			vibrate(e) {
				console.log("h5 4399 \u632f\u52a8")
			}
			drawHead(e) {
				return Promise.resolve(null)
			}
			static getRandNameAndUrl() {
				return {
					nickName: "4399\u6e38\u5ba2",
					avatarUrl: null,
					language: "ch",
					gender: 0,
					country: "\u4e2d\u56fd",
					province: "",
					city: ""
				}
			}
			validAppId() {}
			getUserInfo(e) {
				e.success && e.success({
					userInfo: a.getRandNameAndUrl()
				})
			}
			showToast(e) {}
			showLoading(e) {
				console.log("h5 4399 \u663e\u793a\u8fdb\u5ea6", e)
			}
			hideLoading() {
				console.log("h5 4399 \u9690\u85cf\u8fdb\u5ea6")
			}
			preCreateUnits() {}
			loadAndShowVideoAd(e, t, o) {
				console.log("h5 4399 4399\u6fc0\u52b1\u89c6\u9891"), i.canPlayAd(t => {
					console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", t
						.canPlayAd, "\u5269\u4f59\u6b21\u6570", t.remain), i.playAd(
						t => {
							console.log("\u4ee3\u7801:" + t.code +
									",\u6d88\u606f:" + t.message), 1e4 === t.code ?
								console.log("\u5f00\u59cb\u64ad\u653e") : 10001 ===
								t.code ? (console.log("\u64ad\u653e\u7ed3\u675f"),
									e(), o && o()) : (console.log(
									"\u5e7f\u544a\u5f02\u5e38"), o && o())
						})
				})
			}
			authorize(e) {
				e.success && e.success()
			}
			login(e) {
				e.success && e.success({
					code: null
				})
			}
			gameRecordStart(e, t) {
				console.log("h5 4399 \u5f55\u5c4fstart"), t && t(null)
			}
			gameRecordStop() {
				return console.log("h5 4399 \u5f55\u5c4fstop"), !0
			}
			shareGameRecordVideo(e, t) {
				console.log("h5 4399 \u5206\u4eab\u5f55\u5c4f")
			}
			isProduction() {
				return a.isProduction()
			}
			isHaveShareVideo() {
				return !0
			}
			reportAnalytics(e, t) {
				console.log("h5 4399 \u53d1\u9001\u57cb\u70b9")
			}
			clearMemory() {}
			shareAppMessage(e) {}
			operateGameLive() {}
			static isProduction() {
				return !0
			}
			createMoreGameBtn() {}
			hideBanner() {}
			showBannerAD(e, t, o) {}
			showInterstitialAd(e, t) {}
			showNativeAd() {}
			reportAdClickNativeAd() {}
			addShortcut() {
				return console.log("h5 4399 \u6dfb\u52a0\u684c\u9762"), Promise.resolve(!0)
			}
			drawUrlImage(e, t) {
				cc.assetManager.loadRemote(e, (e, o) => {
					if (e) return console.error("#1553937 \u56fe\u7247\u51fa\u9519", e),
						void t(null);
					t(new cc.SpriteFrame(o))
				})
			}
			showVideo(e) {}
			getShareVideoRank(e, t) {
				t([])
			}
			subscribeMessage() {}
			showAddFavoriteGuide(e, t, o) {}
			PlayLastRecordSound(e, t, o) {
				setTimeout(() => {
					t && t()
				}, 1e3)
			}
			StartRecordSound() {}
			StopRecordSound(e) {
				setTimeout(() => {
					e && e()
				}, 1e3)
			}
			showModal(e) {
				console.log("h5 4399 \u5bf9\u8bdd\u6846", e)
			}
			navigateToMiniGame(e, t, o) {
				console.log("h5 4399 \u8df3\u8f6c\u5230\u5176\u4ed6\u5c0f\u6e38\u620f", e), t &&
					t()
			}
			fullScreenVideo() {
				return console.warn(
					"H5 \u7248\u672c\u672a\u63a5\u5165\u5168\u5c4f\u89c6\u9891"), Promise
					.resolve(void 0)
			}
		}
		o.default = a, cc._RF.pop()
	}, {
		"../miniApp": "miniApp"
	}],
	hallPig: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "bd017hFqaxE15KrV+6vU/oH", "hallPig");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../Config/SkinConfig"),
			i = e("../../engines/components/comSpSkeleton"),
			a = e("../../engines/gameEngine"),
			{
				ccclass: r,
				property: c
			} = cc._decorator;
		let l = class extends cc.Component {
			constructor() {
				super(...arguments), this.pigAni = null, this.cardPrefab = null, this
					.HeardSprite = null, this.card = null, this.m_currInfo = null
			}
			loadCardInfo(e, t) {
				if (null == this.m_currInfo) return;
				if (null == this.cardPrefab || null != this.card) return;
				this.pigAni = this.node.getChildByName("sp").getComponent(i.default), this
					.card = cc.instantiate(this.cardPrefab);
				const o = this.node.getChildByName("head");
				this.node.parent.addChild(this.card), this.card.setPosition(o.x + this.node.x, o
					.y + this.node.y), this.card.zIndex = 1e3;
				const n = this.card.getChildByName("name").getComponent(cc.Label);
				this.card.getChildByName("city").getComponent(cc.Label).string = t, n.string =
					e, this.card.getChildByName("head").children[0].getComponent(cc.Sprite)
					.spriteFrame = this.HeardSprite, this.scheduleOnce(() => {
						this.card.destroy(), this.card = null
					}, 3)
			}
			setPigInfo(e, t, o) {
				if (this.m_currInfo = e, null == this.m_currInfo) return void(this.node
					.opacity = 0);
				this.cardPrefab = t;
				const n = this.node.getChildByName("head").children[0].children[0].getComponent(
					cc.Sprite);
				n.spriteFrame = null, this.node.on(cc.Node.EventType.TOUCH_END, () => {
					this.loadCardInfo(e.name, o)
				}), this.LoadHeadImg(e.head, e => {
					n.node.scale = .5, n.spriteFrame = e, this.HeardSprite = e
				}), this.loadAni(e.spin)
			}
			loadAni(e) {
				if (null == e) return;
				let t = s.getOneSkinConfigById(e),
					o = `sp/${t.sk}`;
				this.pigAni || (this.pigAni = this.node.getChildByName("sp").getComponent(i
					.default)), a.default.getModules().uiControlModule.getGameBundle().load(
					o, sp.SkeletonData, (e, o) => {
						if (e) return void console.error(
							"\u52a0\u8f7d\u52a8\u753b\u9519\u8bef hallPig.ts #87");
						this.pigAni.skeletonData = o, this.pigAni.setSkin(t.skin);
						let n = `Shake_0${Math.floor(3*Math.random()+1)}`;
						this.pigAni.playAnimation(n).start(!0)
					})
			}
			LoadHeadImg(e, t) {
				a.services().miniGameSrv.getAppApiInstance().drawUrlImage(e, t)
			}
		};
		l = n([r], l), o.default = l, cc._RF.pop()
	}, {
		"../../Config/SkinConfig": "SkinConfig",
		"../../engines/components/comSpSkeleton": "comSpSkeleton",
		"../../engines/gameEngine": "gameEngine"
	}],
	hall: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "3479d0y2TtLFom7ScGAqe3j", "hall");
		var n = this && this.__decorate || function(e, t, o, n) {
				var s, i = arguments.length,
					a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
					.decorate(e, t, o, n);
				else
					for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
						t, o, a) : s(t, o)) || a);
				return i > 3 && a && Object.defineProperty(t, o, a), a
			},
			s = this && this.__awaiter || function(e, t, o, n) {
				return new(o || (o = Promise))(function(s, i) {
					function a(e) {
						try {
							c(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function r(e) {
						try {
							c(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function c(e) {
						var t;
						e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
							e) {
							e(t)
						})).then(a, r)
					}
					c((n = n.apply(e, t || [])).next())
				})
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const i = e("../engines/gameEngine"),
			a = e("../Config/SkinConfig"),
			r = e("../engines/managers/gameContent/gameMode_json"),
			c = e("./hall/topThreePage"),
			{
				ccclass: l,
				property: d
			} = cc._decorator;
		let u = class extends cc.Component {
			constructor() {
				super(...arguments), this.rankPrefab = null, this.skinPrefab = null, this
					.topThree = null, this.topThreePage = null, this.provinceLavel = null
			}
			onLoad() {
				return s(this, void 0, void 0, function*() {
					i.services().miniGameSrv.getAppApiInstance().gameRecordStop(), i
						.services().userSrv.checkTodayDate(), i.managers().soundMgr
						.playMusic("hallBgm");
					const e = yield i.modules().gameHttpModule.getMyProvinceRank();
					e.count < 0 ? this.provinceLavel.string = "\u672a\u4e0a\u699c" :
						this.provinceLavel.string = "\u7b2c" + (e.count + 1) + "\u540d"
				})
			}
			showTopThreePage(e, t, o, n) {
				let s = cc.instantiate(this.topThreePage);
				this.node.addChild(s), s.getComponent(c.default).loadPage(e, t, o, n)
			}
			loadAni(e, t = 0) {
				null == t && (t = 0);
				let o = a.getOneSkinConfigById(t),
					n = `sp/${o.sk}`;
				i.default.getModules().uiControlModule.getGameBundle().load(n, sp.SkeletonData,
					(t, n) => {
						if (t) return void console.error(
							"\u52a0\u8f7d\u52a8\u753b\u9519\u8bef hallPig.ts #87");
						e.skeletonData = n, e.setSkin(o.skin);
						let s = `Shake_0${Math.floor(3*Math.random()+1)}`;
						e.setAnimation(0, s, !0)
					})
			}
			start() {
				i.modules().gameHttpModule.getTopThree(e => {
					console.log("hall\u6536\u5230\u6d88\u606f", e);
					let t = e.fast,
						o = e.king,
						n = e.least;
					const s = this.topThree.getChildByName("fast"),
						i = this.topThree.getChildByName("king"),
						a = this.topThree.getChildByName("least");
					s.on(cc.Node.EventType.TOUCH_END, () => {
						this.showTopThreePage(t, null, null, 0)
					}), t ? (s.getChildByName("Label").getComponent(cc.Label)
						.string = t.name, this.loadAni(s.getChildByName("sp")
							.getComponent(sp.Skeleton), t.spin)) : (s
						.getChildByName("sp").active = !1, console.error(
							"\u7b2c\u4e00\u540d\u5f02\u5e38")), i.on(cc.Node
						.EventType.TOUCH_END, () => {
							this.showTopThreePage(null, o, null, 1)
						}), o ? (this.loadAni(i.getChildByName("sp").getComponent(sp
							.Skeleton), o.spin), i.getChildByName("Label")
						.getComponent(cc.Label).string = o.name) : (i
						.getChildByName("sp").active = !1, console.error(
							"\u7b2c\u4e8c\u540d\u5f02\u5e38")), a.on(cc.Node
						.EventType.TOUCH_END, () => {
							this.showTopThreePage(null, null, n, 2)
						}), n ? (this.loadAni(a.getChildByName("sp").getComponent(sp
							.Skeleton), n.spin), a.getChildByName("Label")
						.getComponent(cc.Label).string = n.name) : (a
						.getChildByName("sp").active = !1, console.error(
							"\u7b2c\u4e09\u540d\u5f02\u5e38"))
				})
			}
			update(e) {}
			onBtnStart() {
				i.default.getManagers().soundMgr.playSound("anNiu").then(), i.default
					.getManagers().gameMgr.selectMode(r.GAME_MODE.NORMAL).then()
			}
			onBtnCommitRank() {
				i.modules().gameHttpModule.commitRank(666, 3), this.scheduleOnce(() => {
					i.modules().gameHttpModule.getHallRank(0, 100)
				}, 1)
			}
			onBtnShowRank() {
				i.default.getManagers().soundMgr.playSound("anNiu").then();
				let e = cc.instantiate(this.rankPrefab);
				this.node.addChild(e)
			}
			onBtnShowSkin() {
				i.default.getManagers().soundMgr.playSound("anNiu").then();
				let e = cc.instantiate(this.skinPrefab);
				this.node.addChild(e)
			}
			OnBtnSetting() {
				i.default.getManagers().soundMgr.playSound("anNiu").then(), i.modules()
					.uiControlModule.showFramePrefab("preload/control/gameSetting")
			}
			onBtnCard() {
				i.modules().uiControlModule.showCardPage()
			}
		};
		n([d({
			type: cc.Prefab,
			displayName: "\u6392\u884c\u699c\u9884\u5236\u4f53"
		})], u.prototype, "rankPrefab", void 0), n([d({
			type: cc.Prefab,
			displayName: "\u76ae\u80a4\u5546\u57ce\u9884\u5236\u4f53"
		})], u.prototype, "skinPrefab", void 0), n([d({
			type: cc.Node,
			displayName: "top3"
		})], u.prototype, "topThree", void 0), n([d({
			type: cc.Prefab,
			displayName: "\u524d\u4e09\u9875\u9762"
		})], u.prototype, "topThreePage", void 0), n([d({
			type: cc.Label,
			displayName: "\u6211\u7684\u7701\u4efd\u6392\u540d"
		})], u.prototype, "provinceLavel", void 0), u = n([l], u), o.default = u, cc._RF.pop()
	}, {
		"../Config/SkinConfig": "SkinConfig",
		"../engines/gameEngine": "gameEngine",
		"../engines/managers/gameContent/gameMode_json": "gameMode_json",
		"./hall/topThreePage": "topThreePage"
	}],
	hardMode: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "7b95bEgu4tHh5oFVqkELoAr", "hardMode");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const {
			ccclass: s,
			property: i
		} = cc._decorator;
		let a = class extends cc.Component {
			start() {
				let e = this.node.getChildByName("nandu");
				e.x = cc.winSize.width, cc.tween(e).to(.5, {
					x: 0
				}).delay(1).to(.5, {
					x: -cc.winSize.width
				}).call(() => {
					this.node.destroy()
				}).start()
			}
		};
		a = n([s], a), o.default = a, cc._RF.pop()
	}, {}],
	hotUpdate: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "0ce87knfblAsa7uwF4d/z2I", "hotUpdate");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../engines/gameEngine"),
			i = e("../engines/libs/data_control"),
			{
				ccclass: a,
				property: r
			} = cc._decorator,
			c = window.jsb;
		let l = class extends cc.Component {
			constructor() {
				super(...arguments), this.lbTitle = null, this.lbUpdate = null, this.pbFile =
					null, this.pbUpdate = null, this.manifestUrl = null, this._updateListener =
					null, this._updating = !1, this._storagePath = "", this._am = null, this
					._failCount = 0, this.versionCompareHandle = null
			}
			start() {
				this.onCheckVersion()
			}
			onCheckVersion() {
				c && (this._storagePath = (c.fileUtils ? c.fileUtils.getWritablePath() : "/") +
					"blackjack-remote-asset", console.log(
						"Storage path for remote asset : " + this._storagePath), this
					.versionCompareHandle = function(e, t) {
						console.log("JS Custom Version Compare: version A is " + e +
							", version B is " + t);
						let o = e.split("."),
							n = t.split(".");
						for (let s = 0; s < o.length; ++s) {
							let e = parseInt(o[s]),
								t = parseInt(n[s] || "0");
							if (e !== t) return e - t
						}
						return n.length > o.length ? -1 : 0
					}, this._am = new c.AssetsManager("", this._storagePath, this
						.versionCompareHandle), this._am.setVerifyCallback((e, t) => {
						let o = t.compressed,
							n = t.md5,
							s = t.path;
						return t.size, o ? (this.lbUpdate.string =
							"\u9a8c\u8bc1\u901a\u8fc7 : " + s, !0) : (this.lbUpdate
							.string = "\u9a8c\u8bc1\u901a\u8fc7 : " + s + " (" + n +
							")", !0)
					}), this.lbUpdate.string =
					"\u6b63\u5728\u68c0\u67e5\u7248\u672c\u4fe1\u606f", this.pbFile
					.progress = 0, this.pbUpdate.progress = 0, this.checkUpdate())
			}
			checkCb(e) {
				console.log("Code: " + e.getEventCode());
				let t = !1;
				switch (e.getEventCode()) {
					case c.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
						this.lbUpdate.string =
							"\u672a\u627e\u5230\u672c\u5730\u7248\u672c\u6587\u4ef6\uff0c\u5373\u5c06\u8df3\u8fc7\u66f4\u65b0",
							t = !0;
						break;
					case c.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
					case c.EventAssetsManager.ERROR_PARSE_MANIFEST:
						this.lbUpdate.string =
							"\u66f4\u65b0\u7248\u672c\u4fe1\u606f\u52a0\u8f7d\u5931\u8d25\uff0c\u5373\u5c06\u8df3\u8fc7\u66f4\u65b0",
							t = !0;
						break;
					case c.EventAssetsManager.ALREADY_UP_TO_DATE:
						this.lbUpdate.string = "\u5df2\u662f\u6700\u65b0\u7248\u672c", s.default
							.loadScene("loading");
						break;
					case c.EventAssetsManager.NEW_VERSION_FOUND:
						this.lbUpdate.string =
							"\u68c0\u67e5\u5230\u65b0\u7248\u672c\uff0c\u5373\u5c06\u81ea\u52a8\u66f4\u65b0 (" +
							i.default.getMemoryNumber(this._am.getTotalBytes()) + ")", this
							.scheduleOnce(() => {
								this.hotUpdate()
							}, 1.5), this.pbFile.progress = 0, this.pbUpdate.progress = 0;
						break;
					default:
						return
				}
				t && this.scheduleOnce(() => {
					s.default.loadScene("loading")
				}, 1.5), this._am.setEventCallback(null), this._updating = !1
			}
			checkUpdate() {
				if (this._updating) this.lbUpdate.string =
					"\u6b63\u5728\u68c0\u67e5\u6216\u66f4\u65b0...";
				else {
					if (this._am.getState() === c.AssetsManager.State.UNINITED) {
						let e = this.manifestUrl.nativeUrl;
						console.log("\u7ed3\u679c\u5730\u57402", e), this._am.loadLocalManifest(
							e)
					}
					this._am.getLocalManifest() && this._am.getLocalManifest().isLoaded() ? (
							this._am.setEventCallback(this.checkCb.bind(this)), this._am
							.checkUpdate(), this._updating = !0) : this.lbUpdate.string =
						"\u52a0\u8f7d\u672c\u5730\u7248\u672c\u6587\u4ef6\u5931\u8d25..."
				}
			}
			hotUpdate() {
				if (this._am && !this._updating) {
					if (this._am.setEventCallback(this.updateCb.bind(this)), this._am
					.getState() === c.AssetsManager.State.UNINITED) {
						let e = this.manifestUrl.nativeUrl;
						console.log("\u7ed3\u679c\u5730\u5740", e), this._am.loadLocalManifest(
							e)
					}
					this._failCount = 0, this._am.update(), this._updating = !0
				}
			}
			updateCb(e) {
				let t = !1,
					o = !1;
				switch (e.getEventCode()) {
					case c.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
						this.lbUpdate.string =
							"\u672a\u5339\u914d\u5230\u672c\u5730\u7248\u672c\u6587\u4ef6\uff0c\u5373\u5c06\u8df3\u8fc7\u66f4\u65b0",
							o = !0;
						break;
					case c.EventAssetsManager.UPDATE_PROGRESSION:
						this.pbUpdate.progress = e.getPercent(), this.pbFile.progress = e
							.getPercentByFile(), this.lbUpdate.string = e.getDownloadedFiles() +
							" / " + e.getTotalFiles();
						let n = e.getMessage();
						n && (this.lbUpdate.string = "\u66f4\u65b0\u6587\u4ef6:" + n);
						break;
					case c.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
					case c.EventAssetsManager.ERROR_PARSE_MANIFEST:
						this.lbUpdate.string =
							"\u8fdc\u7a0b\u7248\u672c\u5339\u914d\u52a0\u8f7d\u5931\u8d25\uff0c\u5373\u5c06\u8df3\u8fc7\u66f4\u65b0",
							o = !0;
						break;
					case c.EventAssetsManager.ALREADY_UP_TO_DATE:
						this.lbUpdate.string =
							"\u5df2\u5339\u914d\u6700\u65b0\u8fdc\u7a0b\u7248\u672c", o = !0;
						break;
					case c.EventAssetsManager.UPDATE_FINISHED:
						this.lbUpdate.string = "\u66f4\u65b0\u6210\u529f " + e.getMessage(),
							t = !0;
						break;
					case c.EventAssetsManager.UPDATE_FAILED:
						this.lbUpdate.string = "\u66f4\u65b0\u5931\u8d25 " + e.getMessage(),
							this._updating = !1;
						break;
					case c.EventAssetsManager.ERROR_UPDATING:
						this.lbUpdate.string = "\u8d44\u6e90\u66f4\u65b0\u51fa\u9519: " + e
							.getAssetId() + ", " + e.getMessage();
						break;
					case c.EventAssetsManager.ERROR_DECOMPRESS:
						this.lbUpdate.string = e.getMessage()
				}
				if (o && (this._am.setEventCallback(null), this._updateListener = null, this
						._updating = !1), t) {
					this._am.setEventCallback(null), this._updateListener = null;
					let e = c.fileUtils.getSearchPaths(),
						t = this._am.getLocalManifest().getSearchPaths();
					console.log(JSON.stringify(t)), Array.prototype.unshift.apply(e, t),
						localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(e)), c
						.fileUtils.setSearchPaths(e), setTimeout(() => {
							cc.game.restart()
						}, 1e3)
				}
			}
		};
		n([r(cc.Label)], l.prototype, "lbTitle", void 0), n([r(cc.Label)], l.prototype, "lbUpdate",
				void 0), n([r(cc.ProgressBar)], l.prototype, "pbFile", void 0), n([r(cc.ProgressBar)], l
				.prototype, "pbUpdate", void 0), n([r(cc.Asset)], l.prototype, "manifestUrl", void 0),
			l = n([a], l), o.default = l, cc._RF.pop()
	}, {
		"../engines/gameEngine": "gameEngine",
		"../engines/libs/data_control": "data_control"
	}],
	i18nInterface: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "5b6edHijOVNsYB40wdyIc87", "i18nInterface"), Object.defineProperty(o,
				"__esModule", {
					value: !0
				}), o.I18nLanguageEnum = void 0,
			function(e) {
				e[e.ZH_CN = 0] = "ZH_CN", e[e.ZH_TC = 1] = "ZH_TC", e[e.ENGLISH = 2] = "ENGLISH"
			}(o.I18nLanguageEnum || (o.I18nLanguageEnum = {})), cc._RF.pop()
	}, {}],
	i18nJson: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "5d4e4sX3RBDgYuqijuURVAc", "i18nJson"), Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const n = {
			"\u6a21\u7cca\u641c\u7d22:": ["\u6a21\u7cca\u641c\u7d22:", "\u6a21\u7cca\u6aa2\u7d22:",
				"Search:"
			],
			"\u70b9\u51fb\u8f93\u5165\u8981\u641c\u7d22\u7684\u63a5\u53e3": [
				"\u70b9\u51fb\u8f93\u5165\u8981\u641c\u7d22\u7684\u63a5\u53e3",
				"\u8f38\u5165\u8981\u6aa2\u7d22\u7684\u63a5\u53e3",
				"Enter the interface to search"
			],
			"\u6846\u67b6\u5185\u5bb9": ["\u6846\u67b6\u5185\u5bb9", "\u6846\u67b6\u5167\u5bb9",
				"Frame content"
			],
			"\u6e38\u620f\u8bbe\u7f6e": ["\u6e38\u620f\u8bbe\u7f6e", "\u904a\u6232\u8a2d\u5b9a",
				"Game setting"
			],
			"\u53d6\u6d88": ["\u53d6\u6d88", "\u53d6\u6d88", "Cancel"],
			"\u7b80\u4f53\u4e2d\u6587": ["\u7b80\u4f53\u4e2d\u6587", "\u7b80\u4f53\u4e2d\u6587",
				"\u7b80\u4f53\u4e2d\u6587"
			],
			"\u7e41\u9ad4\u4e2d\u6587": ["\u7e41\u9ad4\u4e2d\u6587", "\u7e41\u9ad4\u4e2d\u6587",
				"\u7e41\u9ad4\u4e2d\u6587"
			],
			"\u7e41\u4f53\u4e2d\u6587": ["\u7e41\u9ad4\u4e2d\u6587", "\u7e41\u9ad4\u4e2d\u6587",
				"\u7e41\u9ad4\u4e2d\u6587"
			],
			English: ["English", "English", "English"],
			"\u8bed\u8a00": ["\u8bed\u8a00", "\u8a9e\u8a00", "Language"],
			"\u8bf7\u9009\u62e9\u8bed\u8a00": ["\u8bf7\u9009\u62e9\u8bed\u8a00",
				"\u8acb\u9078\u64c7\u8a9e\u8a00", "Select Language"
			],
			"\u8bbe\u7f6e\u6210\u529f": ["\u8bbe\u7f6e\u6210\u529f", "\u8a2d\u7f6e\u6210\u529f",
				"Success"
			],
			"\u9700\u8981\u91cd\u542f\u540e\u751f\u6548": [
				"\u9700\u8981\u91cd\u542f\u540e\u751f\u6548",
				"\u9700\u8981\u91cd\u555f\u540e\u751f\u6548", "Effective after restart"
			],
			"\u7acb\u5373\u91cd\u542f": ["\u7acb\u5373\u91cd\u542f", "\u7acb\u5373\u91cd\u555f",
				"Restart"
			],
			"\u7136\u540e\u91cd\u542f": ["\u7136\u540e\u91cd\u542f", "\u7136\u5f8c\u91cd\u555f",
				"Later"
			],
			"\u6211\u7684\u64cd\u4f5c": ["\u6211\u7684\u64cd\u4f5c", "", "My operation"],
			"\u201c\u5173\u952e\u5b57\u201d\u67e5\u627e\u7ed3\u679c": [
				"\u201c\u95dc\u9375\u5b57\u201d\u67e5\u627e\u7d50\u679c", "",
				"Keyword search results"
			],
			"\u5173\u95ed": ["\u5173\u95ed", "\u95dc\u9589", "close"],
			"\u786e\u8ba4\u6846": ["\u786e\u8ba4\u6846", "\u78ba\u8a8d\u6846", "Confirmation box"],
			"\u786e\u5b9a\u53d6\u6d88\u6846": ["\u786e\u5b9a\u53d6\u6d88\u6846",
				"\u78ba\u5b9a\u53d6\u6d88\u6846", "OK cancel box"
			],
			"\u770b\u4e00\u6b21\u89c6\u9891": ["\u770b\u4e00\u6b21\u89c6\u9891",
				"\u770b\u4e00\u6b21\u8996\u983b", "Watch a video"
			],
			"\u770b\u591a\u6b21\u89c6\u9891": ["\u770b\u591a\u6b21\u89c6\u9891",
				"\u770b\u591a\u6b21\u8996\u983b", "Watch videos many times"
			],
			"3\u79d2\u52a0\u8f7d\u5b8c": ["3\u79d2\u52a0\u8f7d\u5b8c", "3\u79d2\u52a0\u8f09\u5b8c",
				"Load in 3 seconds"
			],
			"\u753b\u677f\u9884\u5236": ["\u753b\u677f\u9884\u5236", "\u756b\u677f\u9810\u88fd",
				"Drawing board prefabrication"
			],
			"\u65b0\u624b\u624b\u52bf": ["\u65b0\u624b\u624b\u52bf", "\u65b0\u624b\u624b\u52e2",
				"Novice gesture"
			],
			"\u661f\u661f\u7c92\u5b50": ["\u661f\u661f\u7c92\u5b50", "\u661f\u661f\u7c92\u5b50",
				"Star particle"
			],
			"\u5f69\u5e26\u7c92\u5b50": ["\u5f69\u5e26\u7c92\u5b50", "\u7db5\u5e36\u7c92\u5b50",
				"Ribbon particle"
			],
			"\u7248\u672c\u516c\u544a": ["\u7248\u672c\u516c\u544a", "\u7248\u672c\u516c\u544a",
				"Version announcement"
			],
			"\u9009\u62e9\u6846": ["\u9009\u62e9\u6846", "\u9078\u64c7\u6846", "Selection box"],
			"\u5f00\u59cb\u76f4\u64ad": ["\u5f00\u59cb\u76f4\u64ad", "\u958b\u59cb\u76f4\u64ad",
				"Start live broadcast"
			],
			"banner\u5e7f\u544a": ["banner\u5e7f\u544a", "banner\u5ee3\u544a",
				"Banner advertising"],
			"native\u5e7f\u544a": ["native\u5e7f\u544a", "native\u5ee3\u544a",
				"Native advertising"],
			"\u6dfb\u52a0\u684c\u9762": ["\u6dfb\u52a0\u684c\u9762", "\u6dfb\u52a0\u684c\u9762",
				"Add desktop"
			],
			"\u89c6\u9891\u5217\u8868": ["\u89c6\u9891\u5217\u8868", "\u8996\u983b\u5217\u8868",
				"Video list"
			],
			"\u8ba2\u9605\u6d88\u606f": ["\u8ba2\u9605\u6d88\u606f", "\u8a02\u95b1\u6d88\u606f",
				"Subscribe to messages"
			],
			"\u6dfb\u52a0\u5230\u6536\u85cf": ["\u6dfb\u52a0\u5230\u6536\u85cf",
				"\u6dfb\u52a0\u5230\u6536\u85cf", "Add to collection"
			],
			"\u4e92\u8df31": ["\u4e92\u8df31", "\u4e92\u8df31", "Mutual jump 1"],
			"\u4e92\u8df32": ["\u4e92\u8df32", "\u4e92\u8df32", "Mutual jump 2"],
			"\u4e92\u8df33": ["\u4e92\u8df33", "\u4e92\u8df33", "Mutual jump 3"],
			"\u5f55\u97f3\u53d8\u58f0": ["\u5f55\u97f3\u53d8\u58f0", "\u9304\u97f3\u8b8a\u8072",
				"Recording sound change"
			],
			"\u77ed\u632f\u52a8": ["\u77ed\u632f\u52a8", "\u77ed\u632f\u52d5", "Short vibration"],
			"\u957f\u632f\u52a8": ["\u957f\u632f\u52a8", "\u9577\u632f\u52d5", "Long vibration"],
			"\u654f\u611f\u8bcd\u6c47": ["\u654f\u611f\u8bcd\u6c47", "\u654f\u611f\u8a5e\u5f59",
				"Sensitive vocabulary"
			],
			"\u5f00\u59cb\u5f55\u5c4f": ["\u5f00\u59cb\u5f55\u5c4f", "\u958b\u59cb\u9304\u5c4f",
				"Start screen recording"
			],
			"\u505c\u6b62\u5f55\u5c4f": ["\u505c\u6b62\u5f55\u5c4f", "\u505c\u6b62\u9304\u5c4f",
				"Stop screen recording"
			],
			"\u5206\u4eab\u5f55\u5c4f": ["\u5206\u4eab\u5f55\u5c4f", "\u5206\u4eab\u9304\u5c4f",
				"Share recording screen"
			],
			"\u63d0\u4ea4\u6392\u884c\u699c": ["\u63d0\u4ea4\u6392\u884c\u699c",
				"\u63d0\u4ea4\u6392\u884c\u699c", "Submit Leaderboard"
			],
			"\u5c55\u793a\u6392\u884c\u699c": ["\u5c55\u793a\u6392\u884c\u699c",
				"\u5c55\u793a\u6392\u884c\u699c", "Show Leaderboard"
			],
			"\u53d1\u9001\u57cb\u70b9": ["\u53d1\u9001\u57cb\u70b9", "\u767c\u9001\u57cb\u9ede",
				"Send buried point"
			],
			"\u683c\u5b50\u8df3\u8f6c": ["\u683c\u5b50\u8df3\u8f6c", "\u683c\u5b50\u8df3\u8f49",
				"Grid jump"
			],
			"\u8f6e\u64ad\u5f39\u7a97\u8df3\u8f6c": ["\u8f6e\u64ad\u5f39\u7a97\u8df3\u8f6c",
				"\u8f2a\u64ad\u5f48\u7a97\u8df3\u8f49", "Rotation pop-up jump"
			],
			"\u4fa7\u62c9\u680f\u8df3\u8f6c": ["\u4fa7\u62c9\u680f\u8df3\u8f6c",
				"\u5074\u62c9\u6b04\u8df3\u8f49", "Sidebar jump"
			],
			"\u8ff7\u5bab": ["\u8ff7\u5bab", "\u8ff7\u5bae", "maze"],
			"\u70ab\u5f69\u7c92\u5b50": ["\u70ab\u5f69\u7c92\u5b50", "\u70ab\u5f69\u7c92\u5b50",
				"Atomus HD"
			],
			"\u5185\u7f51\u804a\u5929": ["\u5185\u7f51\u804a\u5929", "\u5167\u7db2\u804a\u5929",
				"Intranet chat"
			],
			"\u8054\u673a\u5bf9\u6218": ["\u8054\u673a\u5bf9\u6218", "\u806f\u6a5f\u5c0d\u6230",
				"Online battle"
			],
			"UI\u64cd\u4f5c": ["UI\u64cd\u4f5c", "UI\u64cd\u4f5c", "UI"],
			"\u6211\u7684\u5e94\u7528": ["\u6211\u7684\u5e94\u7528", "\u6211\u7684\u61c9\u7528",
				"My application"
			],
			"\u5e73\u53f0\u76f8\u5173": ["\u5e73\u53f0\u76f8\u5173", "\u5e73\u81fa\u76f8\u95dc",
				"Platform related"
			],
			"\u5185\u7f6e\u6a21\u5f0f": ["\u5185\u7f6e\u6a21\u5f0f", "\u5167\u7f6e\u6a21\u5f0f",
				"Built in mode"
			],
			"\u97f3\u6548": ["\u97f3\u6548", "\u97f3\u6548", "Sound"],
			"\u632f\u52a8": ["\u632f\u52a8", "\u632f\u52d5", "Vibration"],
			"\u8bed\u8a00\u9009\u62e9": ["\u8bed\u8a00\u9009\u62e9", "\u8a9e\u8a00\u9078\u64c7",
				"Language"
			],
			"\u9690\u79c1\u653f\u7b56": ["\u9690\u79c1\u653f\u7b56", "\u96b1\u79c1\u653f\u7b56",
				"Privacy policy"
			],
			"\u7528\u6237\u534f\u8bae": ["\u7528\u6237\u534f\u8bae", "\u7528\u6236\u5354\u8b70",
				"User agreement"
			]
		};
		o.default = function() {
			return n
		}, cc._RF.pop()
	}, {}],
	i18nService: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "8194el7gepE4o2AIg242ViY", "i18nService");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.TT = void 0;
		const s = e("./superService"),
			i = e("./i18nContent/i18nInterface"),
			a = e("../gameEngine"),
			r = e("./i18nContent/i18nJson");
		o.default = class extends s.default {
			constructor() {
				super(), this.className =
					"i18n\u56fd\u9645\u5316\u591a\u8bed\u8a00\u670d\u52a1", this.I18N_KEY =
					"i18n-key", this.m_i18nKey = i.I18nLanguageEnum.ZH_CN
			}
			loadService() {
				const e = Object.create(null, {
					loadService: {
						get: () => super.loadService
					}
				});
				return n(this, void 0, void 0, function*() {
					return yield e.loadService.call(this), this.loadSetting(), Promise
						.resolve()
				})
			}
			loadSetting() {
				let e = a.services().localStorageSrv.getStorage(this.I18N_KEY, !1);
				e && (this.m_i18nKey = Number(e)), this.m_i18nMap = r.default()
			}
			getI18nSetting() {
				return this.m_i18nKey
			}
			setI18nSetting(e) {
				this.m_i18nKey = e, a.services().localStorageSrv.setStorage(this.I18N_KEY, e, !
					1)
			}
			recursionNodeLabelI18n(e) {
				e.isValid && (e.getComponents(cc.Label).forEach(e => {
					e.string = this.getI18nString(e.string)
				}), e.children.forEach(e => {
					this.recursionNodeLabelI18n(e)
				}))
			}
			getI18nRecursion(e) {
				this.recursionNodeLabelI18n(e)
			}
			getI18nString(e) {
				let t = this.getI18nSetting();
				const o = this.m_i18nMap[e];
				return o && o.length > 0 ? o[t] ? o[t] : (console.log(
					"%c#451546 \u672a\u914d\u7f6e\u591a\u8bed\u8a00:%s[%d]",
					"color:#f81;", e, t), o[0]) : (console.log(
					"%c#491546 \u672a\u914d\u7f6e\u591a\u8bed\u8a00:%s", "color:#e81;",
					e), e)
			}
		}, o.TT = function(e) {
			return "string" == typeof e ? a.services().i18nSrv.getI18nString(e) : e instanceof cc
				.Node ? a.services().i18nSrv.getI18nRecursion(e) : void console.error(
					"#\u53c2\u6570\u4e0d\u5408\u6cd5", e.toString())
		}, cc._RF.pop()
	}, {
		"../gameEngine": "gameEngine",
		"./i18nContent/i18nInterface": "i18nInterface",
		"./i18nContent/i18nJson": "i18nJson",
		"./superService": "superService"
	}],
	infinitypower: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "a27447LHA5Kz6caGFilUah5", "infinitypower");
		var n, s = this && this.__decorate || function(e, t, o, n) {
				var s, i = arguments.length,
					a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
					.decorate(e, t, o, n);
				else
					for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
						t, o, a) : s(t, o)) || a);
				return i > 3 && a && Object.defineProperty(t, o, a), a
			},
			i = this && this.__awaiter || function(e, t, o, n) {
				return new(o || (o = Promise))(function(s, i) {
					function a(e) {
						try {
							c(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function r(e) {
						try {
							c(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function c(e) {
						var t;
						e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
							e) {
							e(t)
						})).then(a, r)
					}
					c((n = n.apply(e, t || [])).next())
				})
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const a = e("../engines/gameEngine"),
			r = e("../engines/services/userContent/userInterface"),
			c = e("../engines/configs/gameConfig"),
			l = e("../engines/modules/uiModule/PageBase"),
			{
				ccclass: d,
				property: u
			} = cc._decorator;
		let h = n = class extends l.default {
			constructor() {
				super(...arguments), this.detail = null, this.looktimeLabel = null, this
					.lbMessageExplain = null, this.RewardView = null, this.Reward = null, this
					.InfinityModel = "user-is-infinity"
			}
			OnPageOpen(e) {
				const t = Object.create(null, {
					OnPageOpen: {
						get: () => super.OnPageOpen
					}
				});
				return i(this, void 0, void 0, function*() {
					this.UpdateLookLabel(), this.lbMessageExplain.string = this
						.lbMessageExplain.string.replace(/#/g,
							`${c.default.INFINITY_POWER_VIDEO_COUNT}`), t.OnPageOpen
						.call(this, e)
				})
			}
			OnNoLookBtn() {
				a.default.getManagers().soundMgr.playSound("anNiu").then(), this.ClosePage()
			}
			OnLookBtn() {
				a.default.getManagers().soundMgr.playSound("anNiu").then(), n.lookedTimes < c
					.default.INFINITY_POWER_VIDEO_COUNT && a.default.getServices().miniGameSrv
					.getAppApiInstance().loadAndShowVideoAd(() => {
						n.lookedTimes++, this.UpdateLookLabel(), n.lookedTimes == c.default
							.INFINITY_POWER_VIDEO_COUNT && (a.default.getServices().userSrv
								.setPower(999, !0, !0), a.default.getServices()
								.localStorageSrv.setStorage(this.InfinityModel, 1), a
								.default.getModules().uiControlModule.showGetRewarded(r
									.REWARD_TYPE.POWER, 999, "\u83b7\u5f97\u4f53\u529b"),
								this.ClosePage())
					}, () => {}, null, "\u89e3\u9501\u65e0\u9650\u4f53\u529b")
			}
			UpdateLookLabel() {
				this.looktimeLabel && (this.looktimeLabel.string =
					`(${n.lookedTimes.toString()}/${c.default.INFINITY_POWER_VIDEO_COUNT})`)
			}
		};
		h.lookedTimes = 0, s([u(cc.Node)], h.prototype, "detail", void 0), s([u(cc.Label)], h.prototype,
				"looktimeLabel", void 0), s([u(cc.Label)], h.prototype, "lbMessageExplain", void 0), s([
				u(cc.Prefab)
			], h.prototype, "RewardView", void 0), s([u(cc.Node)], h.prototype, "Reward", void 0), h =
			n = s([d], h), o.default = h, cc._RF.pop()
	}, {
		"../engines/configs/gameConfig": "gameConfig",
		"../engines/gameEngine": "gameEngine",
		"../engines/modules/uiModule/PageBase": "PageBase",
		"../engines/services/userContent/userInterface": "userInterface"
	}],
	levelConfig1: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "5ae939OlcZK17HiSBE1f9UW", "levelConfig1"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		class n {}
		o.default = n, n.LEVEL_CARD_1 = [cc.v2(-180, 200), cc.v2(0, 200), cc.v2(180, 200), cc.v2(-180,
				0), cc.v2(0, 0), cc.v2(180, 0), cc.v2(-180, -188), cc.v2(0, -188), cc.v2(180, -188)], n
			.LEVEL_CARD_0 = [cc.v2(-180, 250), cc.v2(0, 250), cc.v2(180, 250), cc.v2(-180, 50), cc.v2(0,
				50), cc.v2(180, 50), cc.v2(-180, -180), cc.v2(0, -180), cc.v2(180, -180)], n
			.SPECAIL_BLOCKS = [cc.v2(-180, -188), cc.v2(0, -188), cc.v2(180, -188)], n.BLOCK_NUM = [0,
				0, 0, 0, 0, 6, 0, 0, 0, 6, 0, 6, 0, 0, 0
			], n.BLOCK_CENG = 2, n.BLOCK_NUM_HARD = [24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
				24, 24
			], n.BLOCK_CENG_HARD = 24, n.SPECAIL_BLOCKS_HARD = [cc.v2(-188, -215), cc.v2(188, -215)], n
			.LEVEL_CARD_HARD_23 = [cc.v2(-282, 349), cc.v2(-94, 349), cc.v2(0, 349), cc.v2(94, 349), cc
				.v2(282, 349), cc.v2(-282, 255), cc.v2(-94, 255), cc.v2(94, 255), cc.v2(282, 255), cc
				.v2(-282, 161), cc.v2(-94, 161), cc.v2(0, 161), cc.v2(94, 161), cc.v2(282, 161), cc.v2(-
					188, 20), cc.v2(-94, 20), cc.v2(0, 20), cc.v2(94, 20), cc.v2(188, 20), cc.v2(-188, -
					121), cc.v2(-94, -121), cc.v2(0, -121), cc.v2(94, -121), cc.v2(188, -121), cc.v2(-
					188.1, -215), cc.v2(188.1, -215)
			], n.LEVEL_CARD_HARD_22 = [cc.v2(-235, 302), cc.v2(-94, 302), cc.v2(0, 302), cc.v2(94, 302),
				cc.v2(235, 302), cc.v2(-235, 208), cc.v2(-94, 208), cc.v2(0, 208), cc.v2(94, 208), cc
				.v2(235, 208), cc.v2(-188, 67), cc.v2(-94, 67), cc.v2(0, 67), cc.v2(94, 67), cc.v2(188,
					67), cc.v2(-188, -74), cc.v2(-94, -74), cc.v2(0, -74), cc.v2(94, -74), cc.v2(188, -
					74), cc.v2(-196, -215), cc.v2(196, -215)
			], n.LEVEL_CARD_HARD_21 = [cc.v2(-94, 396), cc.v2(0, 396), cc.v2(94, 396), cc.v2(-188, 349),
				cc.v2(188, 349), cc.v2(-188, 255), cc.v2(188, 255), cc.v2(-188, 161), cc.v2(188, 161),
				cc.v2(-94, 114), cc.v2(0, 114), cc.v2(94, 114), cc.v2(-141, 20), cc.v2(141, 20), cc.v2(-
					141, -74), cc.v2(141, -74), cc.v2(-204, -215), cc.v2(204, -215)
			], n.LEVEL_CARD_HARD_20 = [cc.v2(-141, 396), cc.v2(-47, 396), cc.v2(47, 396), cc.v2(141,
					396), cc.v2(-141, 114), cc.v2(-47, 114), cc.v2(47, 114), cc.v2(141, 114), cc.v2(-94,
					20), cc.v2(0, 20), cc.v2(94, 20), cc.v2(-94, -74), cc.v2(0, -74), cc.v2(94, -74), cc
				.v2(-212, -215), cc.v2(212, -215)
			], n.LEVEL_CARD_HARD_19 = [cc.v2(-188, 396), cc.v2(-94, 396), cc.v2(0, 396), cc.v2(94, 396),
				cc.v2(188, 396), cc.v2(-141, 302), cc.v2(141, 302), cc.v2(-141, 208), cc.v2(141, 208),
				cc.v2(-188, 114), cc.v2(-94, 114), cc.v2(0, 114), cc.v2(94, 114), cc.v2(188, 114), cc
				.v2(-141, -27), cc.v2(141, -27), cc.v2(-220, -215), cc.v2(220, -215)
			], n.LEVEL_CARD_HARD_18 = [cc.v2(-141, 396), cc.v2(-47, 396), cc.v2(47, 396), cc.v2(141,
					396), cc.v2(-94, 302), cc.v2(0, 302), cc.v2(94, 302), cc.v2(-94, 208), cc.v2(0,
				208), cc.v2(94, 208), cc.v2(-141, 67), cc.v2(-47, 67), cc.v2(47, 67), cc.v2(141, 67), cc
				.v2(-141, -27), cc.v2(-47, -27), cc.v2(47, -27), cc.v2(141, -27), cc.v2(-228, -215), cc
				.v2(228, -215)
			], n.LEVEL_CARD_HARD_17 = [cc.v2(-141, 302), cc.v2(-47, 302), cc.v2(47, 302), cc.v2(141,
					302), cc.v2(-141, 208), cc.v2(-47, 208), cc.v2(47, 208), cc.v2(141, 208), cc.v2(-
					141, 114), cc.v2(-47, 114), cc.v2(47, 114), cc.v2(141, 114), cc.v2(-236, -215), cc
				.v2(236, -215)
			], n.LEVEL_CARD_HARD_16 = [cc.v2(-94, 255), cc.v2(94, 255), cc.v2(-94, 161), cc.v2(94, 161),
				cc.v2(-94, 67), cc.v2(94, 67), cc.v2(-94, -27), cc.v2(94, -27), cc.v2(-244, -215), cc
				.v2(244, -215)
			], n.LEVEL_CARD_HARD_15 = [cc.v2(-94, 302), cc.v2(0, 302), cc.v2(94, 302), cc.v2(-94, 208),
				cc.v2(94, 208), cc.v2(-94, 114), cc.v2(0, 114), cc.v2(94, 114), cc.v2(-252, -215), cc
				.v2(252, -215)
			], n.LEVEL_CARD_HARD_14 = [cc.v2(-47, 255), cc.v2(47, 255), cc.v2(-47, 161), cc.v2(47, 161),
				cc.v2(-141, -27), cc.v2(-141, -27), cc.v2(-260, -215), cc.v2(260, -215)
			], n.LEVEL_CARD_HARD_13 = [cc.v2(-47, 208), cc.v2(47, 208), cc.v2(-141, -27), cc.v2(-141, -
				27), cc.v2(-268, -215), cc.v2(268, -215)], n.LEVEL_CARD_HARD_12 = [cc.v2(-47, 208), cc
				.v2(47, 208), cc.v2(-188, 20), cc.v2(-94, 20), cc.v2(94, 20), cc.v2(188, 20), cc.v2(-
					188, -74), cc.v2(-94, -74), cc.v2(94, -74), cc.v2(188, -74), cc.v2(-276, -215), cc
				.v2(276, -215)
			], n.LEVEL_CARD_HARD_11 = [cc.v2(-282, 349), cc.v2(-94, 349), cc.v2(0, 349), cc.v2(94, 349),
				cc.v2(282, 349), cc.v2(-282, 255), cc.v2(-94, 255), cc.v2(94, 255), cc.v2(282, 255), cc
				.v2(-282, 161), cc.v2(-94, 161), cc.v2(0, 161), cc.v2(94, 161), cc.v2(282, 161), cc.v2(-
					188, 20), cc.v2(-94, 20), cc.v2(0, 20), cc.v2(94, 20), cc.v2(188, 20), cc.v2(-188, -
					121), cc.v2(-94, -121), cc.v2(0, -121), cc.v2(94, -121), cc.v2(188, -121), cc.v2(-
					188, -215), cc.v2(188, -215)
			], n.LEVEL_CARD_HARD_10 = [cc.v2(-235, 302), cc.v2(-94, 302), cc.v2(0, 302), cc.v2(94, 302),
				cc.v2(235, 302), cc.v2(-235, 208), cc.v2(-94, 208), cc.v2(0, 208), cc.v2(94, 208), cc
				.v2(235, 208), cc.v2(-188, 67), cc.v2(-94, 67), cc.v2(0, 67), cc.v2(94, 67), cc.v2(188,
					67), cc.v2(-188, -74), cc.v2(-94, -74), cc.v2(0, -74), cc.v2(94, -74), cc.v2(188, -
					74), cc.v2(-196, -215), cc.v2(196, -215)
			], n.LEVEL_CARD_HARD_9 = [cc.v2(-94, 396), cc.v2(0, 396), cc.v2(94, 396), cc.v2(-188, 349),
				cc.v2(188, 349), cc.v2(-188, 255), cc.v2(188, 255), cc.v2(-188, 161), cc.v2(188, 161),
				cc.v2(-94, 114), cc.v2(0, 114), cc.v2(94, 114), cc.v2(-141, 20), cc.v2(141, 20), cc.v2(-
					141, -74), cc.v2(141, -74), cc.v2(-204, -215), cc.v2(204, -215)
			], n.LEVEL_CARD_HARD_8 = [cc.v2(-141, 396), cc.v2(-47, 396), cc.v2(47, 396), cc.v2(141,
				396), cc.v2(-141, 114), cc.v2(-47, 114), cc.v2(47, 114), cc.v2(141, 114), cc.v2(-94,
				20), cc.v2(0, 20), cc.v2(94, 20), cc.v2(-94, -74), cc.v2(0, -74), cc.v2(94, -74), cc.v2(
					-212, -215), cc.v2(212, -215)
			], n.LEVEL_CARD_HARD_7 = [cc.v2(-188, 396), cc.v2(-94, 396), cc.v2(0, 396), cc.v2(94, 396),
				cc.v2(188, 396), cc.v2(-141, 302), cc.v2(141, 302), cc.v2(-141, 208), cc.v2(141, 208),
				cc.v2(-188, 114), cc.v2(-94, 114), cc.v2(0, 114), cc.v2(94, 114), cc.v2(188, 114), cc
				.v2(-141, -27), cc.v2(141, -27), cc.v2(-220, -215), cc.v2(220, -215)
			], n.LEVEL_CARD_HARD_6 = [cc.v2(-141, 396), cc.v2(-47, 396), cc.v2(47, 396), cc.v2(141,
				396), cc.v2(-94, 302), cc.v2(0, 302), cc.v2(94, 302), cc.v2(-94, 208), cc.v2(0, 208), cc
				.v2(94, 208), cc.v2(-141, 67), cc.v2(-47, 67), cc.v2(47, 67), cc.v2(141, 67), cc.v2(-
					141, -27), cc.v2(-47, -27), cc.v2(47, -27), cc.v2(141, -27), cc.v2(-228, -215), cc
				.v2(228, -215)
			], n.LEVEL_CARD_HARD_5 = [cc.v2(-141, 302), cc.v2(-47, 302), cc.v2(47, 302), cc.v2(141,
				302), cc.v2(-141, 208), cc.v2(-47, 208), cc.v2(47, 208), cc.v2(141, 208), cc.v2(-141,
					114), cc.v2(-47, 114), cc.v2(47, 114), cc.v2(141, 114), cc.v2(-236, -215), cc.v2(
					236, -215)
			], n.LEVEL_CARD_HARD_4 = [cc.v2(-94, 255), cc.v2(94, 255), cc.v2(-94, 161), cc.v2(94, 161),
				cc.v2(-94, 67), cc.v2(94, 67), cc.v2(-94, -27), cc.v2(94, -27), cc.v2(-244, -215), cc
				.v2(244, -215)
			], n.LEVEL_CARD_HARD_3 = [cc.v2(-94, 302), cc.v2(0, 302), cc.v2(94, 302), cc.v2(-94, 208),
				cc.v2(94, 208), cc.v2(-94, 114), cc.v2(0, 114), cc.v2(94, 114), cc.v2(-252, -215), cc
				.v2(252, -215)
			], n.LEVEL_CARD_HARD_2 = [cc.v2(-47, 255), cc.v2(47, 255), cc.v2(-47, 161), cc.v2(47, 161),
				cc.v2(-141, -27), cc.v2(-141, -27), cc.v2(-260, -215), cc.v2(260, -215)
			], n.LEVEL_CARD_HARD_1 = [cc.v2(-47, 208), cc.v2(47, 208), cc.v2(-141, -27), cc.v2(-141, -
				27), cc.v2(-268, -215), cc.v2(268, -215)], n.LEVEL_CARD_HARD_0 = [cc.v2(-47, 208), cc
				.v2(47, 208), cc.v2(-188, 20), cc.v2(-94, 20), cc.v2(94, 20), cc.v2(188, 20), cc.v2(-
					188, -74), cc.v2(-94, -74), cc.v2(94, -74), cc.v2(188, -74), cc.v2(-276, -215), cc
				.v2(276, -215)
			], cc._RF.pop()
	}, {}],
	loadConfig_json: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "68e93Sp6xJCw5i9EczguDOA", "loadConfig_json"), Object.defineProperty(o,
				"__esModule", {
					value: !0
				}), o.RESOURCES_TYPE = void 0,
			function(e) {
				e[e.BUNDLE = 0] = "BUNDLE", e[e.ASSETS = 1] = "ASSETS", e[e.SCENE = 2] = "SCENE"
			}(o.RESOURCES_TYPE || (o.RESOURCES_TYPE = {})), cc._RF.pop()
	}, {}],
	loading: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "603a3rAJkNDyosE9QpKwHRN", "loading");
		var n = this && this.__decorate || function(e, t, o, n) {
				var s, i = arguments.length,
					a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
					.decorate(e, t, o, n);
				else
					for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
						t, o, a) : s(t, o)) || a);
				return i > 3 && a && Object.defineProperty(t, o, a), a
			},
			s = this && this.__awaiter || function(e, t, o, n) {
				return new(o || (o = Promise))(function(s, i) {
					function a(e) {
						try {
							c(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function r(e) {
						try {
							c(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function c(e) {
						var t;
						e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
							e) {
							e(t)
						})).then(a, r)
					}
					c((n = n.apply(e, t || [])).next())
				})
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const i = e("../engines/gameEngine"),
			a = e("./loading/loadConfig_json"),
			r = e("../engines/configs/gameConfig"),
			c = e("../O1ModuleRes/frame/logScreen"),
			l = e("../engines/libs/data_control");
		let {
			ccclass: d,
			property: u
		} = cc._decorator, h = class extends cc.Component {
			constructor() {
				super(...arguments), this.pmPreLoadScenes = !0, this.pmLoadBar = null, this
					.pmSonLoadBar = null, this.isShowSonBar = !0, this.sonLoadCount = 100, this
					.pmLoadLabel = null, this.m_allPreloadResources = [], this
					.UserLocalAccountKey = "local-account-key", this.UserLocalNameKey =
					"local-name-key"
			}
			start() {}
			onLoad() {
				i.default.on("loading-title", e => {
						this.pmLoadLabel.string = e
					}), console.log("<loading> \u573a\u666f"), this.pmLoadBar.progress = 0, this
					.pmLoadLabel.string = "\u6b63\u5728\u521d\u59cb\u5316", this.pmSonLoadBar
					.progress = 0, this.pmSonLoadBar.node.active = this.isShowSonBar, this
					.loadPackages()
			}
			loadPackages() {
				this.loadSubpackages().then(() => s(this, void 0, void 0, function*() {
					yield this.Platlogin();
					let e = i.managers().gameMgr.getMainSceneNameAndLoadBundle();
					"string" == typeof e ? this.preLoadSceneOver(e) : i.managers()
						.gameMgr.selectMode(e.type).then()
				}))
			}
			onAddLogServiceNode() {
				return s(this, void 0, void 0, function*() {
					return new Promise(e => {
						r.default.LOG_SERVICE_OPEN && r.default
							.SCREEN_LOG_SWITCH ? i.modules().uiControlModule
							.showFramePrefab("preload/frame/logScreen", i
								.default.Canvas().parent, !1, t => {
									i.services().logSrv.addScreenPrint(t
										.getComponent(c.default)), e()
								}) : e()
					})
				})
			}
			loadSubpackages() {
				return s(this, void 0, void 0, function*() {
					return yield i.default.loadAll(), yield this
						.loadAllPreloadResources(), yield this
							.onAddLogServiceNode(), Promise.resolve()
				})
			}
			initPreloadResources() {
				this.m_allPreloadResources = [], this.m_allPreloadResources.push({
					resourcesType: a.RESOURCES_TYPE.BUNDLE,
					resPathOrName: i.modules().uiControlModule.getFontBundlePath(),
					loadText: "\u52a0\u8f7d\u516c\u7528\u5b57\u4f53\u5305",
					onBundleLoaded: () => {}
				}), this.m_allPreloadResources.push({
					resourcesType: a.RESOURCES_TYPE.BUNDLE,
					resPathOrName: i.modules().uiControlModule.getFrameBundlePath(),
					loadText: "\u52a0\u8f7d\u6846\u67b6\u5305",
					onBundleLoaded: e => {
						i.modules().uiControlModule.setFrameBundle(e)
					}
				}), this.m_allPreloadResources.push({
					resourcesType: a.RESOURCES_TYPE.ASSETS,
					resPathOrName: i.modules().uiControlModule
						.getFrameBundlePreloadResPath(),
					loadText: "\u52a0\u8f7d\u6846\u67b6\u8d44\u6e90",
					bundle: () => i.modules().uiControlModule.getFrameBundle()
				}), this.m_allPreloadResources.push({
					resourcesType: a.RESOURCES_TYPE.BUNDLE,
					resPathOrName: i.modules().uiControlModule.getGameBundlePath(),
					loadText: "\u52a0\u8f7d\u6e38\u620f\u516c\u5171\u5305",
					onBundleLoaded: e => {
						i.modules().uiControlModule.setGameBundle(e)
					}
				}), this.m_allPreloadResources.push({
					resourcesType: a.RESOURCES_TYPE.ASSETS,
					resPathOrName: i.modules().uiControlModule
						.getGameBundlePreloadResPath(),
					loadText: "\u52a0\u8f7d\u6e38\u620f\u8d44\u6e90",
					bundle: () => i.modules().uiControlModule.getGameBundle()
				}), this.m_allPreloadResources.push({
					resourcesType: a.RESOURCES_TYPE.BUNDLE,
					resPathOrName: "hall",
					loadText: "\u52a0\u8f7d\u603b\u573a\u666f\u5305"
				});
				let e = i.managers().gameMgr.getMainSceneNameAndLoadBundle();
				if (null == e && console.error(
					"#69 \u4e3b\u573a\u666f\u914d\u7f6e\u9519\u8bef"), "hall" === e) this
					.m_allPreloadResources.push({
						resourcesType: a.RESOURCES_TYPE.SCENE,
						resPathOrName: e,
						loadText: "\u52a0\u8f7d\u4e3b\u573a\u666f"
					});
				else {
					let t = e;
					this.m_allPreloadResources.push({
						resourcesType: a.RESOURCES_TYPE.BUNDLE,
						resPathOrName: t.name,
						loadText: "\u52a0\u8f7d\u4e3b\u573a\u666f\u5305",
						onBundleLoaded: e => {
							t.bundle = e, i.managers().gameMgr.setMainModeLoaded(t)
						}
					}), this.m_allPreloadResources.push({
						resourcesType: a.RESOURCES_TYPE.SCENE,
						resPathOrName: t.sceneName,
						loadText: "\u52a0\u8f7d\u4e3b\u573a\u666f\u8d44\u6e90"
					})
				}
			}
			loadAllPreloadResources() {
				return s(this, void 0, void 0, function*() {
					return this.initPreloadResources(), yield this
						.startPreloadResources(), Promise.resolve()
				})
			}
			startPreloadResources() {
				return s(this, void 0, void 0, function*() {
					const {
						length: e
					} = this.m_allPreloadResources;
					for (let t = 0; t < e; t++) {
						let o = this.m_allPreloadResources[t],
							n = t / e;
						this.setLoadProgress(n, o.loadText), yield this
							.preloadOneResources(o, n)
					}
					return Promise.resolve()
				})
			}
			preloadOneResources(e, t) {
				return s(this, void 0, void 0, function*() {
					return new Promise(o => {
						const {
							resourcesType: n,
							resPathOrName: s,
							bundle: i,
							onBundleLoaded: r,
							onComplete: c
						} = e;
						switch (n) {
							case a.RESOURCES_TYPE.BUNDLE:
								cc.assetManager.loadBundle(s, (e, t) => {
									r && r(t), o()
								});
								break;
							case a.RESOURCES_TYPE.ASSETS:
								i().loadDir(s, (e, o) => {
									this.setSonLoadProgress(e / o, t)
								}, (e, t) => {
									c && c(e, t), o()
								});
								break;
							case a.RESOURCES_TYPE.SCENE:
								cc.director.preloadScene(s, (e, o) => {
									this.setSonLoadProgress(e / o, t)
								}, () => {
									o()
								})
						}
					})
				})
			}
			preLoadSceneOver(e) {
				this.setLoadProgress(1, "\u6e38\u620f\u52a0\u8f7d\u5b8c\u6210"), i.default
					.loadScene(e, () => {
						i.default.getManagers().gameMgr.onGameRun()
					})
			}
			setSonLoadProgress(e, t) {
				this.pmSonLoadBar.progress = e;
				const o = this.m_allPreloadResources.length;
				this.setLoadProgress(t + e / o)
			}
			setLoadProgress(e, t) {
				this.pmLoadBar.progress = e, t && (this.pmLoadLabel.string =
					`${t}(${(100*e).toFixed(1)}%)`)
			}
			Platlogin() {
				return s(this, void 0, void 0, function*() {
					const e = i.services().ossSrv.getPlatform();
					let t = i.services().localStorageSrv.getStorage(this
						.UserLocalAccountKey);
					i.services().localStorageSrv.getStorage(this.UserLocalNameKey);
					try {
						switch (e) {
							case "tt":
								yield i.modules().gameHttpModule.ttLogin((e, t) => {
									i.services().localStorageSrv.setStorage(this
											.UserLocalNameKey, e), i.services()
										.localStorageSrv.setStorage(this
											.UserLocalAccountKey, t), i
										.modules().gameHttpModule.wasLogin = !0
								});
								break;
							case "h5":
							case "ks":
								t || (t = l.default.getRandId(16)), yield new Promise(
									e => {
										i.modules().gameHttpModule.h5Login(t,
											null, 1, t => {
												null != t ? (i.services()
														.localStorageSrv
														.setStorage(this
															.UserLocalAccountKey,
															t.account), i
														.modules()
														.gameHttpModule
														.wasLogin = !0) : i
													.modules()
													.gameHttpModule
													.wasLogin = !1, e()
											})
									})
						}
					} catch (o) {
						o && console.warn(o,
							"\u767b\u5f55\u9519\u8bef----\u76f4\u63a5\u8fdb\u5165\u6e38\u620f"
							)
					}
				})
			}
		};
		n([u({
			displayName: "\u9884\u52a0\u8f7d\u573a\u666f",
			tooltip: "\u662f\u5426\u9884\u5148\u52a0\u8f7d\u5927\u5385\u548c\u6e38\u620f\u573a\u666f"
		})], h.prototype, "pmPreLoadScenes", void 0), n([u({
			type: cc.ProgressBar,
			displayName: "\u8fdb\u5ea6\u6761"
		})], h.prototype, "pmLoadBar", void 0), n([u({
			type: cc.ProgressBar,
			displayName: "\u5b50\u8fdb\u5ea6\u6761"
		})], h.prototype, "pmSonLoadBar", void 0), n([u({
			displayName: "\u662f\u5426\u663e\u793a\u5b50\u8fdb\u5ea6\u6761"
		})], h.prototype, "isShowSonBar", void 0), n([u({
			displayName: "\u5b50\u8fdb\u5ea6\u6761\u52a0\u8f7d\u6761\u6570"
		})], h.prototype, "sonLoadCount", void 0), n([u({
			type: cc.Label,
			displayName: "\u8fdb\u5ea6\u6587\u5b57"
		})], h.prototype, "pmLoadLabel", void 0), h = n([d], h), o.default = h, cc._RF.pop()
	}, {
		"../O1ModuleRes/frame/logScreen": "logScreen",
		"../engines/configs/gameConfig": "gameConfig",
		"../engines/gameEngine": "gameEngine",
		"../engines/libs/data_control": "data_control",
		"./loading/loadConfig_json": "loadConfig_json"
	}],
	localStorageService: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "9ba941av6lGZ6N6Qm4R8rVa", "localStorageService");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.LOCAL_STORAGE_VERSION = void 0;
		const s = e("./superService");
		o.LOCAL_STORAGE_VERSION = "1.0.0.01261542", o.default = class extends s.default {
			constructor() {
				super(), this.className = "\u672c\u5730\u7f13\u5b58\u670d\u52a1"
			}
			loadService() {
				const e = Object.create(null, {
					loadService: {
						get: () => super.loadService
					}
				});
				return n(this, void 0, void 0, function*() {
					return yield e.loadService.call(this), this.newVersionCheck(),
						Promise.resolve()
				})
			}
			setStorage(e, t, o = !0) {
				let n = this.getKey(e, o),
					s = t;
				cc.sys.localStorage.setItem(n, s)
			}
			getStorage(e, t = !0) {
				let o = this.getKey(e, t);
				return cc.sys.localStorage.getItem(o)
			}
			newVersionCheck() {
				this.isVersionAlso() || (this.clearAllStorage(), this.setLocalVersion(o
					.LOCAL_STORAGE_VERSION))
			}
			getLocalVersion() {
				return cc.sys.localStorage.getItem("localVersion")
			}
			setLocalVersion(e) {
				cc.sys.localStorage.setItem("localVersion", e)
			}
			isVersionAlso() {
				return this.getLocalVersion() == o.LOCAL_STORAGE_VERSION
			}
			clearAllStorage() {
				cc.sys.localStorage.clear()
			}
			getKey(e, t) {
				return t ? `${o.LOCAL_STORAGE_VERSION}-${e}` : e
			}
		}, cc._RF.pop()
	}, {
		"./superService": "superService"
	}],
	logConfig: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "1a1c0APdr9EKpaXyrPKFSnf", "logConfig"), Object.defineProperty(o, "__esModule", {
				value: !0
			}), o.DEEP_NEXT_SPLIT = o.LINE_SPLIT_END_RIGHT = o.LINE_SPLIT_END_LEFT = o
			.LINE_SPLIT_START_RIGHT = o.LINE_SPLIT_START_LEFT = void 0, o.LINE_SPLIT_START_LEFT =
			"\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501", o.LINE_SPLIT_START_RIGHT =
			"\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513", o.LINE_SPLIT_END_LEFT =
			"\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501", o.LINE_SPLIT_END_RIGHT =
			"\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u251b", o.DEEP_NEXT_SPLIT =
			"\u2523", cc._RF.pop()
	}, {}],
	logScreen: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "69cdetEISRLoYxGWYk51AP6", "logScreen");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../control/btButton"),
			{
				ccclass: i,
				property: a
			} = cc._decorator;
		let r = class extends cc.Component {
			constructor() {
				super(...arguments), this.ndUiLayer = null, this.btShowHide = null, this
					.ndList = null, this.ndText = null, this.sOpacity = null, this.maxCount =
					1e3, this.m_newFps = !1
			}
			addLog(e, t) {
				let o = e,
					n = cc.instantiate(this.ndText);
				if (this.ndList.addChild(n), n.color = t, n.getComponent(cc.Label).string = o,
					this.ndList.childrenCount > this.maxCount)
					for (let s = 0; s < this.maxCount / 2; s++) this.ndList.children[s]
					.destroy();
				this.m_newFps = !0, this.unscheduleAllCallbacks(), this.scheduleOnce(() => {
					this.onScrollDown()
				})
			}
			onLoad() {}
			start() {
				cc.game.addPersistRootNode(this.node)
			}
			onScrollUp(e) {
				if (this.ndList.height < this.node.height) return;
				let t = this.node.height / 2;
				e && (t = Math.max(t, this.ndList.y - .15 * this.node.height)), cc.tween(this
					.ndList).to(.5, {
					y: t
				}, {
					easing: "cubicOut"
				}).start()
			}
			onScrollDown(e) {
				if (this.ndList.height < this.node.height) return;
				let t = this.node.height / 2 + (this.ndList.height - this.node.height);
				e && (t = Math.min(t, this.ndList.y + .15 * this.node.height)), cc.tween(this
					.ndList).to(.5, {
					y: t
				}, {
					easing: "cubicOut"
				}).start()
			}
			onBtnUp() {
				this.ndList.height < this.node.height || this.onScrollUp(!0)
			}
			onBtnDown() {
				this.ndList.height < this.node.height || this.onScrollDown(!0)
			}
			onBtnShowHide() {
				this.ndList.active = !this.ndList.active, this.ndUiLayer.active = !this
					.ndUiLayer.active, this.btShowHide.setButtonText(this.ndList.active ?
						"\u9690" : "\u663e"), this.ndList.active && this.onScrollDown()
			}
			onBtnClear() {
				this.ndList.destroyAllChildren()
			}
			onSetOpacity() {
				this.ndList.opacity = 20 + 235 * this.sOpacity.progress
			}
			update(e) {
				this.m_newFps && this.onScrollDown(), this.m_newFps = !1
			}
		};
		n([a(cc.Node)], r.prototype, "ndUiLayer", void 0), n([a(s.default)], r.prototype, "btShowHide",
			void 0), n([a(cc.Node)], r.prototype, "ndList", void 0), n([a(cc.Node)], r.prototype,
			"ndText", void 0), n([a(cc.Slider)], r.prototype, "sOpacity", void 0), n([a()], r
			.prototype, "maxCount", void 0), r = n([i], r), o.default = r, cc._RF.pop()
	}, {
		"../control/btButton": "btButton"
	}],
	logService: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "29d69mJwcND34xgZpSpnvrH", "logService");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.LOG_LEVEL = void 0;
		const s = e("./superService"),
			i = e("../configs/gameConfig");
		var a;
		(function(e) {
			e[e.debug = 0] = "debug", e[e.log = 1] = "log", e[e.info = 2] = "info", e[e.warn = 3] =
				"warn", e[e.error = 4] = "error", e[e.empty = 5] = "empty"
		})(a = o.LOG_LEVEL || (o.LOG_LEVEL = {})), o.default = class extends s.default {
			constructor() {
				super(), this.className = "\u65e5\u5fd7\u670d\u52a1", this.m_logLevel = a.debug,
					this.m_screenLog = null, this.m_needPrintText = []
			}
			loadService() {
				const e = Object.create(null, {
					loadService: {
						get: () => super.loadService
					}
				});
				return n(this, void 0, void 0, function*() {
					if (yield e.loadService.call(this), !i.default.LOG_SERVICE_OPEN)
						return Promise.resolve();
					this.m_logLevel = i.default.CONSOLE_LOG_LEVEL, this
						.registerConsoleAgent()
				})
			}
			registerConsoleAgent() {
				this.m_debug = console.debug, this.m_log = console.log, this.m_info = console
					.info, this.m_warn = console.warn, this.m_error = console.error, console
					.error = this.onScreenPrint.bind(this, a.error), console.warn = this
					.onScreenPrint.bind(this, a.warn), console.info = this.onScreenPrint.bind(
						this, a.info), console.log = this.onScreenPrint.bind(this, a.log),
					console.debug = this.onScreenPrint.bind(this, a.debug)
			}
			onScreenPrint(e, ...t) {
				let o = cc.Color.WHITE,
					n = "",
					s = new Date,
					i =
					`${s.getHours()}:${s.getMinutes()}:${s.getSeconds()}.${s.getTime()%1e3}`;
				switch (e) {
					case a.empty:
						break;
					case a.error:
						this.m_error(n, ...t), n = "[ERROR]", n += `${i}:`, o = cc.color(238, 0,
							0);
						break;
					case a.warn:
						n = "[WARN]", n += `${i}:`, this.m_warn(n, ...t), o = cc.color(238, 238,
							0);
						break;
					case a.info:
						n = "[INFO]", n += `${i}:`, this.m_info(n, ...t), o = cc.color(0, 238,
							0);
						break;
					case a.log:
						n = "[LOG]", n += `${i}:`, this.m_log(n, ...t), o = cc.color(255, 255,
							255);
						break;
					case a.debug:
						n = "[DEBUG]", n += `${i}:`, this.m_debug(n, ...t), o = cc.color(204,
							204, 204)
				}
				t.forEach(e => {
						if ("object" == typeof e) try {
							n += JSON.stringify(e)
						} catch (t) {
							n += e.toString()
						} else n += e
					}), this.m_screenLog ? (this.m_needPrintText.length > 0 && (this
						.m_needPrintText.forEach(e => {
							this.m_screenLog.addLog(e.text, e.color)
						}), this.m_needPrintText.length = 0), this.m_screenLog.addLog(n, o)) :
					this.m_needPrintText.push({
						text: n,
						color: o
					})
			}
			addScreenPrint(e) {
				this.m_screenLog = e
			}
		}, cc._RF.pop()
	}, {
		"../configs/gameConfig": "gameConfig",
		"./superService": "superService"
	}],
	loseDialog: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "205deVaVJZJ+KG/Jx/ASgCB", "loseDialog");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../../engines/components/comSpSkeleton"),
			i = e("../../../engines/gameEngine"),
			a = e("../normalMode"),
			r = e("../Native"),
			{
				ccclass: c,
				property: l
			} = cc._decorator;
		let d = class extends cc.Component {
			constructor() {
				super(...arguments), this.rebornPage = null, this.sharePage = null, this
					.todayTimeLabel = null, this.provicyLabel = null, this.shareBtn = null
			}
			start() {
				if (this.shareBtn && (this.shareBtn.active = i.default.shareSwitch), a.default
					._instance.isReborn) i.services().miniGameSrv.getAppApiInstance()
					.gameRecordStop();
				else {
					let e = cc.instantiate(this.rebornPage);
					this.node.addChild(e)
				}
				let e = i.services().userSrv.getTodayChallengeCount();
				this.todayTimeLabel.string = "\u4eca\u65e5\u5df2\u6311\u6218" + e + "\u6b21",
					this.provicyLabel.string = "--", i.modules().uiControlModule.showLoading(
						void 0, "\u6b63\u5728\u83b7\u53d6\u6392\u884c\u699c").then(() => {
						i.modules().uiControlModule.hideLoading(), i.modules()
							.gameHttpModule.getCountryRank(0, 100).then(e => {
								null == e && i.modules().uiControlModule.showMessageBox(
									"\u83b7\u53d6\u5931\u8d25\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5"
									);
								for (let t = 0; t < e.length; t++) e[t].province == i
									.modules().gameHttpModule.UserAreaInfo[1] && (this
										.provicyLabel.string = t + 1 + "")
							})
					}), this.node.getChildByName("ef_jieshu").getComponent(s.default)
					.playAnimation("01").start(!1).onComplete(1, () => {
						this.node.getChildByName("ef_jieshu").active = !1
					});
				let t = this.getMubeiSkinNameByNum(e);
				this.node.getChildByName("ef_mubei").getComponent(s.default).setSkin(t)
			}
			getMubeiSkinNameByNum(e) {
				return "01"
			}
			onBtnRestart() {
				i.managers().soundMgr.playSound("anNiu"), a.default._instance.restart(), this
					.node.destroy(), r.default.reStart()
			}
			onBtnBack() {
				i.managers().soundMgr.playSound("anNiu"), a.default._instance.btnBack(), this
					.node.destroy()
			}
			onBtnShare() {
				if (this.node.getChildByName("sharePage")) return;
				i.managers().soundMgr.playSound("anNiu");
				let e = cc.instantiate(this.sharePage);
				this.node.addChild(e)
			}
		};
		n([l(cc.Prefab)], d.prototype, "rebornPage", void 0), n([l(cc.Prefab)], d.prototype,
			"sharePage", void 0), n([l(cc.Label)], d.prototype, "todayTimeLabel", void 0), n([l(cc
			.Label)], d.prototype, "provicyLabel", void 0), n([l({
			type: cc.Node,
			displayName: "\u5206\u4eab\u6309\u94ae"
		})], d.prototype, "shareBtn", void 0), d = n([c], d), o.default = d, cc._RF.pop()
	}, {
		"../../../engines/components/comSpSkeleton": "comSpSkeleton",
		"../../../engines/gameEngine": "gameEngine",
		"../Native": "Native",
		"../normalMode": "normalMode"
	}],
	miniApp: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "daa809nnc5KgKqhMK4RMJkC", "miniApp"), Object.defineProperty(o, "__esModule", {
				value: !0
			}), o.VIBRATE_TYPE = o.analyticsLookVideo = o.analyticsBase = o.SHARE_VIDEO_SORT_TYPE =
			void 0,
			function(e) {
				e[e.HOT = 0] = "HOT", e[e.TIME = 1] = "TIME"
			}(o.SHARE_VIDEO_SORT_TYPE || (o.SHARE_VIDEO_SORT_TYPE = {}));
		class n {
			constructor(e) {
				this.key = e
			}
			getKey() {
				return this.key
			}
			getObj() {
				return this.obj
			}
			setObj(e) {
				this.obj = JSON.parse(JSON.stringify(e))
			}
		}
		o.analyticsBase = n, o.analyticsLookVideo = class extends n {
				constructor(e) {
					super("lookVideo"), this.obj = {
						src: e
					}
				}
			},
			function(e) {
				e[e.LONG = 0] = "LONG", e[e.SHORT = 1] = "SHORT"
			}(o.VIBRATE_TYPE || (o.VIBRATE_TYPE = {})), o.default = class {
				static isProduction() {
					return !0
				}
			}, cc._RF.pop()
	}, {}],
	miniGameService: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "2e194elcZdNKLonXGnWTekM", "miniGameService");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("./superService"),
			i = e("./miniGameContent/h5/h5Api"),
			a = e("./miniGameContent/tt/ttApi"),
			r = e("./miniGameContent/native/native"),
			c = e("./miniGameContent/ks/KSAPI"),
			l = e("./miniGameContent/vivo/vivoApi"),
			d = e("./miniGameContent/oppo/oppoApi"),
			u = e("../configs/gameConfig"),
			h = e("../gameEngine"),
			g = e("./miniGameContent/h5_4399/h5_4399"),
			p = e("./miniGameContent/gameBox4399/gameBox4399");
		class m extends s.default {
			constructor() {
				if (super(), this.className = "\u6e38\u620f\u5e73\u53f0\u670d\u52a1", this
					.m_miniApp = null, window.hasOwnProperty("gamebox")) return console.warn(
					"4399\u6e38\u620f\u76d2\u5b50"), void(m.m_MiniAppClass = p.default);
				switch (cc.sys.platform) {
					case cc.sys.WECHAT_GAME_SUB:
					case cc.sys.WECHAT_GAME:
						m.m_MiniAppClass = c.default;
						break;
					case cc.sys.BYTEDANCE_GAME:
					case cc.sys.BYTEDANCE_GAME_SUB:
						m.m_MiniAppClass = a.default;
						break;
					case cc.sys.VIVO_GAME:
						m.m_MiniAppClass = l.default;
						break;
					case cc.sys.OPPO_GAME:
						m.m_MiniAppClass = d.default;
						break;
					default:
						cc.sys.isNative ? m.m_MiniAppClass = r.default : 3 == cc.sys.platform ||
							4 == cc.sys.platform ? m.m_MiniAppClass = c.default : window
							.hasOwnProperty("h5api") ? m.m_MiniAppClass = g.default : window
							.hasOwnProperty("gamebox") ? m.m_MiniAppClass = p.default : m
							.m_MiniAppClass = i.default
				}
			}
			loadService() {
				const e = Object.create(null, {
					loadService: {
						get: () => super.loadService
					}
				});
				return n(this, void 0, void 0, function*() {
					return yield e.loadService.call(this), this.m_miniApp = new m
						.m_MiniAppClass, this.m_miniApp.validAppId(), this.m_miniApp
						.preCreateUnits(), Promise.resolve()
				})
			}
			getAppApiInstance() {
				return this.m_miniApp
			}
			onTimerStart() {
				console.log("jhsdk time start"), this.onFullVideoEvent()
			}
			onPushFullVideo() {
				console.log("jhsdk push"), this.m_fullTouchTime && (this.getAppApiInstance()
					.fullScreenVideo().then(), this.onResetFullVideoTime())
			}
			onFullVideoEvent() {
				u.default.FULL_SCREEN_VIDEO_TIME <= 0 || (this.getAppApiInstance()
					.fullScreenVideo ? this.onResetFullVideoTime() : console.warn(
						"\u6b64\u5e73\u53f0\u672a\u63a5\u5165\u5168\u5c4f\u89c6\u9891\u5e7f\u544a - ",
						h.services().ossSrv.getPlatform()))
			}
			onResetFullVideoTime() {
				this.m_fullTouchTime = !1, setInterval(() => {
					this.m_fullTouchTime = !0
				}, 1e3 * u.default.FULL_SCREEN_VIDEO_TIME)
			}
			static getMiniGameAppStatic() {
				return m.m_MiniAppClass
			}
		}
		o.default = m, m.m_MiniAppClass = null, cc._RF.pop()
	}, {
		"../configs/gameConfig": "gameConfig",
		"../gameEngine": "gameEngine",
		"./miniGameContent/gameBox4399/gameBox4399": "gameBox4399",
		"./miniGameContent/h5/h5Api": "h5Api",
		"./miniGameContent/h5_4399/h5_4399": "h5_4399",
		"./miniGameContent/ks/KSAPI": "KSAPI",
		"./miniGameContent/native/native": "native",
		"./miniGameContent/oppo/oppoApi": "oppoApi",
		"./miniGameContent/tt/ttApi": "ttApi",
		"./miniGameContent/vivo/vivoApi": "vivoApi",
		"./superService": "superService"
	}],
	miniParam: [function(e, t, o) {
		"use strict";

		function n(e, t) {
			let o = [];
			o = "string" == typeof t ? [t] : [].concat(t);
			let n = {};
			n.key = e.key, n.obj = {};
			for (let s in e.data) {
				let t = e.data[s];
				n.obj[t] = o.shift()
			}
			return n
		}
		cc._RF.push(t, "610cbP2IV5IpLCGWct8fXSG", "miniParam"), Object.defineProperty(o, "__esModule", {
				value: !0
			}), o.getVideoFailLoadOrShow = o.getAddShortcutReportData = o
			.getLookVideoFailShareReportData = o.getShareGameRecordReportData = o
			.getLookVideoReportData = o.getBeforeCloseVideoReportData = o.getShowVideoReportData = o
			.getLoadVideoReportData = o.ADD_SHORTCUT = o.VIDEO_FAIL_LOAD_OR_SHOW = o
			.LOOK_VIDEO_FAIL_TO_SHARE = o.SHARE_GAME_RECORD = o.LOOK_VIDEO = o.BEFORE_CLOSE_VIDEO = o
			.SHOW_VIDEO = o.LOAD_VIDEO = void 0, o.LOAD_VIDEO = {
				key: "loadVideo",
				data: ["source"]
			}, o.SHOW_VIDEO = {
				key: "showVideo",
				data: ["source"]
			}, o.BEFORE_CLOSE_VIDEO = {
				key: "beforeCloseVideo",
				data: ["source"]
			}, o.LOOK_VIDEO = {
				key: "lookVideo",
				data: ["source"]
			}, o.SHARE_GAME_RECORD = {
				key: "shareGameRecord",
				data: ["explain"]
			}, o.LOOK_VIDEO_FAIL_TO_SHARE = {
				key: "lookVideoFailToShare",
				data: ["explain"]
			}, o.VIDEO_FAIL_LOAD_OR_SHOW = {
				key: "videoFailLoadOrShow",
				data: ["code", "msg"]
			}, o.ADD_SHORTCUT = {
				key: "addShortcut",
				data: ["explain"]
			}, o.getLoadVideoReportData = function(e) {
				return n(o.LOAD_VIDEO, e)
			}, o.getShowVideoReportData = function(e) {
				return n(o.SHOW_VIDEO, e)
			}, o.getBeforeCloseVideoReportData = function(e) {
				return n(o.BEFORE_CLOSE_VIDEO, e)
			}, o.getLookVideoReportData = function(e) {
				return n(o.LOOK_VIDEO, e)
			}, o.getShareGameRecordReportData = function(e) {
				return n(o.SHARE_GAME_RECORD, e)
			}, o.getLookVideoFailShareReportData = function(e) {
				return n(o.LOOK_VIDEO_FAIL_TO_SHARE, e)
			}, o.getAddShortcutReportData = function(e) {
				return n(o.ADD_SHORTCUT, e)
			}, o.getVideoFailLoadOrShow = function(e) {
				return n(o.VIDEO_FAIL_LOAD_OR_SHOW, e)
			}, cc._RF.pop()
	}, {}],
	native: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "8bc0erOHapBNL45QQzX39t9", "native");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../miniApp");
		e("../../../gameEngine");
		class i extends s.default {
			constructor() {
				super(...arguments), this.m_appId = "205615", this.m_secret = "", this
					.m_adUnitId = "945669906"
			}
			navigateToMiniGame(e, t, o) {
				console.error("#23102559 \u672a\u5b9e\u73b0\u8df3\u8f6c")
			}
			commitRank(e, t) {
				return n(this, void 0, void 0, function*() {
					return Promise.resolve(!1)
				})
			}
			showRank(e) {
				return n(this, void 0, void 0, function*() {
					return Promise.resolve(!1)
				})
			}
			LocalInBlockCityList() {
				return !1
			}
			vibrate(e) {}
			showBannerAD(e, t, o, n, s) {
				throw new Error("Method not implemented.")
			}
			hideBanner() {
				throw new Error("Method not implemented.")
			}
			showInterstitialAd(e, t) {
				throw new Error("Method not implemented.")
			}
			showNativeAd(e, t, o) {
				throw new Error("Method not implemented.")
			}
			reportAdClickNativeAd() {
				throw new Error("Method not implemented.")
			}
			createMoreGameBtn() {
				throw new Error("Method not implemented.")
			}
			addShortcut() {
				throw new Error("Method not implemented.")
			}
			operateGameLive() {
				throw new Error("Method not implemented.")
			}
			getShareVideoRank(e, t) {
				throw new Error("Method not implemented.")
			}
			drawUrlImage(e, t) {
				throw new Error("Method not implemented.")
			}
			showVideo(e) {
				throw new Error("Method not implemented.")
			}
			subscribeMessage(e, t, o) {
				throw new Error("Method not implemented.")
			}
			showAddFavoriteGuide(e, t, o) {
				throw new Error("Method not implemented.")
			}
			StartRecordSound() {
				throw new Error("Method not implemented.")
			}
			StopRecordSound(e) {
				throw new Error("Method not implemented.")
			}
			PlayLastRecordSound(e, t, o) {
				throw new Error("Method not implemented.")
			}
			static getRandNameAndUrl() {
				return {
					nickName: "123",
					avatarUrl: null,
					language: "ch",
					gender: 0,
					country: "\u4e2d\u56fd",
					province: "",
					city: ""
				}
			}
			validAppId() {}
			getUserInfo(e) {
				e.success && e.success({
					userInfo: i.getRandNameAndUrl()
				})
			}
			showToast(e) {}
			showLoading(e) {
				console.log("h5 \u663e\u793a\u8fdb\u5ea6", e)
			}
			hideLoading() {
				console.log("h5 \u9690\u85cf\u8fdb\u5ea6")
			}
			preCreateUnits() {}
			loadAndShowVideoAd(e, t, o) {
				e && e(), o && o()
			}
			authorize(e) {
				e.success && e.success()
			}
			login(e) {
				e.success && e.success({
					code: null
				})
			}
			gameRecordStart(e, t) {
				console.log("h5 \u5f55\u5c4fstart"), t && t(null)
			}
			gameRecordStop() {
				return console.log("h5 \u5f55\u5c4fstop"), !0
			}
			shareGameRecordVideo(e, t) {
				console.log("h5 \u5206\u4eab\u5f55\u5c4f")
			}
			isProduction() {
				return !!cc.sys.isMobile
			}
			isHaveShareVideo() {
				return !1
			}
			reportAnalytics(e, t) {
				switch (cc.sys.os) {
					case cc.sys.OS_ANDROID:
					case cc.sys.OS_IOS:
				}
			}
			clearMemory() {}
			shareAppMessage(e) {}
			showModal(e) {}
			drawHead(e) {
				return Promise.resolve(void 0)
			}
			fullScreenVideo() {
				return n(this, void 0, void 0, function*() {
					switch (cc.sys.os) {
						case cc.sys.OS_ANDROID:
							return Promise.resolve();
						case cc.sys.OS_IOS:
							return console.log(
								"cocos SDK \u8c03\u7528\u82f9\u679c \u5168\u5c4f\u89c6\u9891"
								), new Promise(e => {
								jsb.reflection.callStaticMethod(
									"RootViewController",
									"loadFullScreenVideo"), e()
							});
						default:
							return Promise.resolve()
					}
				})
			}
		}
		o.default = i, cc._RF.pop()
	}, {
		"../../../gameEngine": "gameEngine",
		"../miniApp": "miniApp"
	}],
	node_component: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "e6dbf+TDB1GV5h01wKup7rx", "node_component"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("./data_control");
		class s {
			constructor(e) {
				this.totalCount = 0, this.completed = 0, this.name = e
			}
		}
		class i {}
		class a {
			constructor() {
				this.map = new i, this.m_overEd = !1
			}
			initStart() {}
			initIng() {
				for (let e in this.map)
					if (0 == this.map[e].totalCount) return !0;
				return !1
			}
			push(e, t) {
				this.map[e] = t
			}
			getAllTotalCount() {
				let e = 0;
				for (let t in this.map) e += this.map[t].totalCount;
				return e
			}
			getAllCompletedCount() {
				let e = 0;
				for (let t in this.map) e += this.map[t].completed;
				return e
			}
			setCompleted(e, t) {
				this.map[e].completed = t
			}
			setTotalCount(e, t) {
				this.map[e].totalCount = t
			}
			setLoaded(e) {
				this.map[e].completed = this.map[e].totalCount
			}
			isLoadOver() {
				return !this.m_overEd && (this.m_overEd = this.getAllTotalCount() == this
					.getAllCompletedCount(), this.m_overEd)
			}
		}
		o.default = class {
			static nextTickRun(e, t) {
				e.scheduleOnce(t, 0)
			}
			static numFpsAfterRun(e, t, o) {
				let n = o,
					s = () => {
						this.nextTickRun(e, () => {
							--n <= 0 ? t() : s()
						})
					};
				s()
			}
			static mergePreLoadScenes(e, t, o) {
				let n = new a;
				n.initStart();
				for (let i of e) n.push(i, new s(i)), cc.director.preloadScene(i, (e, o, s) => {
					n.setCompleted(i, e), n.setTotalCount(i, o), n.initIng() || t && t(n
						.getAllCompletedCount(), n.getAllTotalCount(), s)
				}, () => {
					n.setLoaded(i), n.initIng() || n.isLoadOver() && o && o()
				})
			}
			static loadResourcesPicture(e, t) {
				cc.resources.load(e, cc.SpriteFrame, (o, n) => {
					if (o) return console.error("\u56fe\u7247\u4e0d\u5b58\u5728", e),
						void console.error(o);
					if (t instanceof cc.Node) t.getComponent(cc.Sprite).spriteFrame = n;
					else {
						if (!(t instanceof cc.Sprite))
						throw "\u52a0\u8f7d\u975e\u56fe\u7247\u4e0d\u80fd\u4f7f\u7528\u6b64\u65b9\u6cd5";
						t.spriteFrame = n
					}
				})
			}
			static getPosOfParentNode(e, t) {
				let o = e,
					n = cc.v2(0, 0);
				for (; o != t;) n = n.add(o.getPosition()), o = o.parent;
				return n
			}
			static getTimeOfFps(e) {
				return 1 / 60 * e
			}
			static isInPolygon(e, t) {
				let o = t.world.points.concat(),
					s = void 0;
				for (let i = 0; i < o.length; i++) {
					let t = n.default.getNumLoopOfAreaMinMax(i + 1, 0, o.length - 1);
					const a = o[i],
						r = o[t],
						c = e.sub(a),
						l = r.sub(a);
					let d = cc.v2(c.x, c.y).cross(cc.v2(l.x, l.y));
					if (s) {
						if (Math.sign(d) !== Math.sign(s)) return !1;
						s = d
					} else s = d
				}
				return !0
			}
		}, cc._RF.pop()
	}, {
		"./data_control": "data_control"
	}],
	normalMode: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "1efafRl+7RLd4YJXZ4/d/IQ", "normalMode");
		var n, s = this && this.__decorate || function(e, t, o, n) {
				var s, i = arguments.length,
					a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
					.decorate(e, t, o, n);
				else
					for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
						t, o, a) : s(t, o)) || a);
				return i > 3 && a && Object.defineProperty(t, o, a), a
			},
			i = this && this.__awaiter || function(e, t, o, n) {
				return new(o || (o = Promise))(function(s, i) {
					function a(e) {
						try {
							c(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function r(e) {
						try {
							c(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function c(e) {
						var t;
						e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
							e) {
							e(t)
						})).then(a, r)
					}
					c((n = n.apply(e, t || [])).next())
				})
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const a = e("../../engines/gameEngine"),
			r = e("../../engines/libs/physics_tool"),
			c = e("./dialog/getItemDialog"),
			l = e("./dialog/winDialog"),
			d = e("./managers/blockManager"),
			u = e("./Native"),
			{
				ccclass: h,
				property: g
			} = cc._decorator;
		let p = n = class extends cc.Component {
			constructor() {
				super(...arguments), this.blockManager = null, this.blockArea = null, this
					.isReborn = !1, this.countTime = 0, this.getItemDialog = null, this
					.gameWinDialog = null, this.gameLoseDialog = null, this.hardMode = null,
					this.giveUpDialog = null, this.hardPoint = null, this.btnDuiNum = 0, this
					.btnRegretNum = 0, this.btnResetNum = 0, this.password = ""
			}
			onLoad() {
				n._instance = this, this.blockManager = this.node.getComponent(d.default), this
					.blockArea = this.node.getChildByName("blockArea"), r.default
					.openCollision(), a.services().miniGameSrv.getAppApiInstance()
					.gameRecordStart({
						duration: 150
					}), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.OnKeyDown,
						this), a.managers().soundMgr.playMusic("gameBgm")
			}
			start() {
				let e = a.services().userSrv.getTodayChallengeCount();
				e += 1, a.services().userSrv.setToDayChallengeCount(e);
				let t = a.services().userSrv.getAllChallengeCount();
				t += 1, a.services().userSrv.setAllChallengeCount(t)
			}
			update(e) {
				this.countTime += e
			}
			clickBlock(e) {
				e.node.setParent(this.blockArea), this.blockManager.addNodeToArea(e)
			}
			getCanClickBlock() {
				return this.blockManager.checkCanClick()
			}
			gameLose(e = !1) {
				if (cc.log("\u6e38\u620f\u5931\u8d25"), this.node.getChildByName("losePage"))
					return;
				e && (this.isReborn = e), a.managers().soundMgr.playSound("gameLose");
				let t = cc.instantiate(this.gameLoseDialog);
				this.node.addChild(t)
			}
			gameWin(e) {
				if (cc.log("\u6e38\u620f\u80dc\u5229"), e) {
					a.managers().soundMgr.playSound("gameWin");
					let e = cc.instantiate(this.gameWinDialog);
					this.node.addChild(e), e.getComponent(l.default).completeTime = this
						.countTime;
					let t = 0;
					t += this.btnDuiNum, t += this.btnRegretNum, t += this.btnResetNum, this
						.isReborn && (t += 1), a.services().userSrv.setTodayJoinPig(!0);
					let o = a.services().userSrv.getAllJoinPigCount();
					o += 1, a.services().userSrv.setAllJoinPigCount(o), a.modules()
						.gameHttpModule.commitRank(this.countTime, t), u.default.passLevel(2)
				} else {
					this.blockManager.startHard(), this.hardPoint.active = !0;
					let e = cc.instantiate(this.hardMode);
					this.node.addChild(e), u.default.passLevel(1)
				}
			}
			rebornGame() {
				this.blockManager.setThreeCardBack(), this.isReborn = !0
			}
			btnBack() {
				return i(this, void 0, void 0, function*() {
					n._instance = null, this.node.destroy(), yield new Promise(e => {
						a.default.loadScene("hall", e)
					})
				})
			}
			OnBtnSetting() {
				a.default.getManagers().soundMgr.playSound("anNiu").then(), a.modules()
					.uiControlModule.showFramePrefab("preload/control/gameSetting")
			}
			onBtnGiveUp() {
				let e = cc.instantiate(this.giveUpDialog);
				this.node.addChild(e)
			}
			restart() {
				cc.log("restart"), this.blockManager.restart(), this.btnDuiNum = 0, this
					.btnRegretNum = 0, this.btnResetNum = 0, this.node.getChildByName("btnArea")
					.getChildByName("btn_dui").getChildByName("plus").active = !0, this.node
					.getChildByName("btnArea").getChildByName("btn_dui").color = cc.Color.WHITE,
					this.node.getChildByName("btnArea").getChildByName("btn_dui").getComponent(
						cc.Button).enabled = !0, this.node.getChildByName("btnArea")
					.getChildByName("btn_regret").getChildByName("plus").active = !0, this.node
					.getChildByName("btnArea").getChildByName("btn_regret").color = cc.Color
					.WHITE, this.node.getChildByName("btnArea").getChildByName("btn_regret")
					.getComponent(cc.Button).enabled = !0, this.node.getChildByName("btnArea")
					.getChildByName("btn_restar").getChildByName("plus").active = !0, this.node
					.getChildByName("btnArea").getChildByName("btn_restar").color = cc.Color
					.WHITE, this.node.getChildByName("btnArea").getChildByName("btn_restar")
					.getComponent(cc.Button).enabled = !0, this.isReborn = !1, this.countTime =
					0, this.hardPoint.active = !1;
				let e = a.services().userSrv.getTodayChallengeCount();
				e += 1, a.services().userSrv.setToDayChallengeCount(e);
				let t = a.services().userSrv.getAllChallengeCount();
				t += 1, a.services().userSrv.setAllChallengeCount(t), this.blockManager
					.initBlock()
			}
			setItemNum(e) {
				switch (e) {
					case 1: {
						this.btnDuiNum = 1;
						let e = this.node.getChildByName("btnArea").getChildByName("btn_dui"),
							t = this.node.getChildByName("push"),
							o = cc.instantiate(t);
						o.active = !0, this.node.addChild(o), cc.tween(o).to(.1, {
							angle: 20
						}).to(.2, {
							angle: -20
						}).to(.1, {
							angle: 0
						}).to(.3, {
							x: -242,
							y: -580
						}).call(() => {
							o.removeFromParent(), e.getChildByName("plus").active = !1,
								cc.tween(e).to(.2, {
									scale: .8
								}).to(.2, {
									scale: .7
								}).start()
						}).start()
					}
					break;
				case 2: {
					this.btnRegretNum = 1;
					let e = this.node.getChildByName("btnArea").getChildByName("btn_regret"),
						t = this.node.getChildByName("back"),
						o = cc.instantiate(t);
					o.active = !0, this.node.addChild(o), cc.tween(o).to(.1, {
						angle: 20
					}).to(.2, {
						angle: -20
					}).to(.1, {
						angle: 0
					}).to(.3, {
						x: 0,
						y: -580
					}).call(() => {
						o.removeFromParent(), e.getChildByName("plus").active = !1, cc
							.tween(e).to(.2, {
								scale: .8
							}).to(.2, {
								scale: .7
							}).start()
					}).start()
				}
				break;
				case 3:
					this.btnResetNum = 1;
					let t = this.node.getChildByName("btnArea").getChildByName("btn_restar"),
						o = this.node.getChildByName("restart"),
						n = cc.instantiate(o);
					n.active = !0, this.node.addChild(n), cc.tween(n).to(.1, {
						angle: 20
					}).to(.2, {
						angle: -20
					}).to(.1, {
						angle: 0
					}).to(.3, {
						x: 242,
						y: -580
					}).call(() => {
						n.removeFromParent(), t.getChildByName("plus").active = !1, cc
							.tween(t).to(.2, {
								scale: .8
							}).to(.2, {
								scale: .7
							}).start()
					}).start()
				}
			}
			btnDui(e) {
				if (a.default.getManagers().soundMgr.playSound("anNiu").then(), 0 == this
					.btnDuiNum) {
					let e = cc.instantiate(this.getItemDialog);
					this.node.addChild(e), e.getComponent(c.default).initItem(1)
				} else if (1 == this.btnDuiNum && this.blockManager.setThreeCardBack()) {
					let t = e.target;
					t.color = cc.Color.GRAY, t.getComponent(cc.Button).enabled = !1
				}
			}
			btnRegret(e) {
				if (a.default.getManagers().soundMgr.playSound("anNiu").then(), 0 == this
					.btnRegretNum) {
					let e = cc.instantiate(this.getItemDialog);
					this.node.addChild(e), e.getComponent(c.default).initItem(2)
				} else if (1 == this.btnRegretNum)
					if (this.blockManager.setLastCardBack()) {
						let t = e.target;
						t.color = cc.Color.GRAY, t.getComponent(cc.Button).enabled = !1
					} else a.modules().uiControlModule.showMessageBox(
						"\u5f53\u524d\u9053\u5177\u4e0d\u53ef\u4f7f\u7528", this.node)
			}
			btnRestart(e) {
				if (a.default.getManagers().soundMgr.playSound("anNiu").then(), 0 == this
					.btnResetNum) {
					let e = cc.instantiate(this.getItemDialog);
					this.node.addChild(e), e.getComponent(c.default).initItem(3)
				} else if (1 == this.btnResetNum) {
					this.blockManager.resetCards();
					let t = e.target;
					t.color = cc.Color.GRAY, t.getComponent(cc.Button).enabled = !1
				}
			}
			onClickGrass(e, t) {
				cc.log(t)
			}
			OnKeyDown(e) {
				switch (e.keyCode) {
					case cc.macro.KEY.r:
						this.blockManager.resetCardWithoutAnim();
						break;
					case cc.macro.KEY.z:
						this.gameWin(!0);
						break;
					case cc.macro.KEY.x:
						this.gameWin(!1)
				}
			}
		};
		s([g(cc.Prefab)], p.prototype, "getItemDialog", void 0), s([g(cc.Prefab)], p.prototype,
				"gameWinDialog", void 0), s([g(cc.Prefab)], p.prototype, "gameLoseDialog", void 0), s([
				g(cc.Prefab)
			], p.prototype, "hardMode", void 0), s([g(cc.Prefab)], p.prototype, "giveUpDialog", void 0),
			s([g(cc.Node)], p.prototype, "hardPoint", void 0), p = n = s([h], p), o.default = p, cc._RF
			.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"../../engines/libs/physics_tool": "physics_tool",
		"./Native": "Native",
		"./dialog/getItemDialog": "getItemDialog",
		"./dialog/winDialog": "winDialog",
		"./managers/blockManager": "blockManager"
	}],
	o1BoxManager: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "97532fNdYFGOLdAbDnstgCV", "o1BoxManager");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.CollisionDirection = o.O1BoxGroup = void 0;
		const s = e("./superManager"),
			i = e("../libs/data_control");
		var a, r;
		(function(e) {
			e[e.NORMAL = 0] = "NORMAL", e[e.GAME = 1] = "GAME"
		})(a = o.O1BoxGroup || (o.O1BoxGroup = {})),
		function(e) {
			e[e.NULL = 0] = "NULL", e[e.UP = 1] = "UP", e[e.DOWN = 2] = "DOWN", e[e.LEFT = 3] = "LEFT",
				e[e.RIGHT = 4] = "RIGHT"
		}(r = o.CollisionDirection || (o.CollisionDirection = {}));
		class c extends s.default {
			constructor() {
				super(), this.className = "\u7b80\u5355\u78b0\u649e\u7ba1\u7406", this.GRAVITY =
					.025, this.m_collisionGroupMap = {}, this.m_o1Boxes = {}, this
					.m_fpsReactionMap = {}, this.m_collisionBoomMap = {}
			}
			loadManager() {
				const e = Object.create(null, {
					loadManager: {
						get: () => super.loadManager
					}
				});
				return n(this, void 0, void 0, function*() {
					return yield e.loadManager.call(this), this.init(), Promise.resolve(
						!0)
				})
			}
			init() {
				this.m_collisionGroupMap = {}, this.m_o1Boxes = {}, this
					.m_collisionBoomMap = {}, this.addBoxCollisionGroup(a.GAME, a.GAME)
			}
			overFrame() {}
			clearBoxCollisionGroup() {
				this.m_collisionGroupMap = {}, this.m_o1Boxes = {}, this.m_collisionBoomMap = {}
			}
			onCollisionAABB(e, t, o, n) {
				let s = Math.abs(e.x - o.x),
					i = Math.abs(e.y - o.y),
					a = (t.width + n.width) / 2,
					c = (t.height + n.height) / 2;
				return s <= a && i <= c ? s / a >= i / c ? e.x < o.x ? r.LEFT : r.RIGHT : e.y >
					o.y ? r.UP : r.DOWN : r.NULL
			}
			onUpdateOneLineVelocity(e) {
				e.getProductLastLineVelocity().y -= this.GRAVITY * e.gravity
			}
			onUpdateOnePos(e) {
				const t = e.getPredictLastPos().add(e.getProductLastLineVelocity());
				for (let o in this.m_o1Boxes) {
					const n = this.m_o1Boxes[o];
					let s = e.boxGroup,
						i = n.boxGroup;
					if (e.id == o) continue;
					if (!this.isCanCollision(s, i)) continue;
					let a = this.onCollisionAABB(t, e.node.getContentSize(), n
							.getPredictLastPos(), n.node.getContentSize()),
						c = `${e.id}+${n.id}`,
						l = `${e.id}+${n.id}`,
						d = !1,
						u = !1;
					(this.m_collisionBoomMap[c] || this.m_collisionBoomMap[l]) && (d = !0), a !=
						r.NULL && (this.m_collisionBoomMap[c] = this.m_collisionBoomMap[l] = !0,
							u = !0);
					const h = e.getProductLastLineVelocity(),
						g = e.getPredictLastPos();
					switch (a) {
						case r.UP: {
							h.y = 0;
							let t = n.getPredictLastPos().y + n.node.height / 2 + e.node
								.height / 2;
							g.y = t;
							break
						}
						case r.DOWN: {
							h.y = 0;
							let t = n.getPredictLastPos().y - n.node.height / 2 - e.node
								.height / 2;
							g.y = t;
							break
						}
						case r.LEFT: {
							h.x = 0;
							let t = n.getPredictLastPos().x - n.node.width / 2 - e.node.width /
								2;
							g.x = t;
							break
						}
						case r.RIGHT: {
							h.x = 0;
							let t = n.getPredictLastPos().x + n.node.width / 2 + e.node.width /
								2;
							g.x = t;
							break
						}
						default:
							g.x += h.x, g.y += h.y, (this.m_collisionBoomMap[c] || this
								.m_collisionBoomMap[l]) && (delete this.m_collisionBoomMap[
									c], delete this.m_collisionBoomMap[l], this
								.onEmitCollisionCallback(e, n, "onCollisionBoxLearn"))
					}!d && u && this.onEmitCollisionCallback(e, n, "onCollisionBox")
				}
			}
			onEmitCollisionCallback(e, t, o) {
				e.getComponents(cc.Component).forEach(e => {
					null != e[o] && e[o](t)
				})
			}
			onUpdate() {
				this.m_fpsReactionMap = {};
				for (let e in this.m_o1Boxes) {
					const t = this.m_o1Boxes[e];
					t.isDynamic && (t.pushLastPredictLineVelocity(), t.onUpdateLogicStart(),
						this.onUpdateOneLineVelocity(t))
				}
				for (let e in this.m_o1Boxes) {
					const t = this.m_o1Boxes[e];
					t.isDynamic && (t.pushLastPredictPos(), t.onUpdateLogicEnd(), this
						.onUpdateOnePos(t))
				}
			}
			onTimerPredictSync() {
				for (let e in this.m_o1Boxes) {
					const t = this.m_o1Boxes[e];
					t.isDynamic && t.onTimerRunSync()
				}
			}
			isHaveLastPos() {
				for (let e in this.m_o1Boxes)
					if (this.m_o1Boxes[e].isHaveLastPos() || this.m_o1Boxes[e].isHaveLastPos())
						return !0;
				return !1
			}
			addBox(e) {
				if (e.id) console.error("#591651\u5df2\u7ecf\u6dfb\u52a0BOX");
				else
					for (;;) {
						const t = i.default.getRandId();
						if (!this.m_o1Boxes[t]) {
							e.id = t, this.m_o1Boxes[t] = e;
							break
						}
						console.warn("#701654 \u51e0\u4e4e\u4e0d\u53ef\u80fd\u7684\u91cd\u590d",
							t, this.m_o1Boxes)
					}
			}
			deleteBox(e) {
				const {
					id: t
				} = e;
				t ? delete this.m_o1Boxes[t] : console.error("#481620 \u7a7a\u7684ID")
			}
			addBoxCollisionGroup(e, t) {
				let o = `${e}-${t}`,
					n = `${t}-${e}`;
				this.m_collisionGroupMap[o] = !0, this.m_collisionGroupMap[n] = !0
			}
			isCanCollision(e, t) {
				let o = `${e}-${t}`;
				return this.m_collisionGroupMap[o]
			}
		}
		o.default = c, c.UPDATE_TICK = 5, cc._RF.pop()
	}, {
		"../libs/data_control": "data_control",
		"./superManager": "superManager"
	}],
	o1DialogBox: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "e74172bE7xNIar42zhPq36E", "o1DialogBox");
		var n = this && this.__decorate || function(e, t, o, n) {
				var s, i = arguments.length,
					a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
					.decorate(e, t, o, n);
				else
					for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
						t, o, a) : s(t, o)) || a);
				return i > 3 && a && Object.defineProperty(t, o, a), a
			},
			s = this && this.__awaiter || function(e, t, o, n) {
				return new(o || (o = Promise))(function(s, i) {
					function a(e) {
						try {
							c(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function r(e) {
						try {
							c(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function c(e) {
						var t;
						e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
							e) {
							e(t)
						})).then(a, r)
					}
					c((n = n.apply(e, t || [])).next())
				})
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const i = e("../../gameEngine"),
			a = e("../../services/i18nService"),
			r = e("./PageBase"),
			{
				ccclass: c,
				property: l
			} = cc._decorator;
		let d = class extends r.default {
			constructor() {
				super(...arguments), this.showNode = null, this.ndBg = null, this.lbTitle =
					null, this.lbMessage = null, this.lbOk = null, this.lbCancel = null, this
					.lbVideoCount = null, this.lookVideoNode = null, this.btCancel = null, this
					.m_prams = null, this.m_videoCountInfo = null, this.m_callBack = null, this
					.m_lookVideoSource = null, this.m_thisClickTween = null, this.m_runIng = !1
			}
			onLoad() {}
			start() {}
			showAction() {
				i.modules().uiControlModule.showHideDialogAnimation(this.showNode, !0)
			}
			hideAction() {
				this.ClosePage()
			}
			OnPageOpen(e) {
				const t = Object.create(null, {
					OnPageOpen: {
						get: () => super.OnPageOpen
					}
				});
				return s(this, void 0, void 0, function*() {
					t.OnPageOpen.call(this, e), this.showDialogBox(this.m_prams.title,
						this.m_prams.message, this.m_prams.isCancelOk, this.m_prams
						.clickCallBack, this.m_prams.okButtonText, this.m_prams
						.cancelButtonText, this.m_prams.lookVideoCount, this.m_prams
						.lookVideoSource)
				})
			}
			showDialogBox(e, t, o, n, s = "\u786e\u5b9a", i = "\u53d6\u6d88", r = 0, c) {
				this.m_lookVideoSource = c || "\u672a\u4f20\u9012\u76ee\u7684", this.lbTitle
					.string = e, this.lbMessage.string = t, this.btCancel.active = o, this
					.m_callBack = n, this.m_videoCountInfo = r > 0 ? {
						currLookCount: 0,
						setLookCount: r
					} : null, this.lbOk.string = s, this.lbCancel.string = i, this
					.onUpdateLookVideoCount(), a.TT(this.node)
			}
			onBtnOkCancel(e, t) {
				if (this.m_videoCountInfo)
					if ("ok" == t) {
						const e = window.O1HD;
						if (null == e) return void console.error(
							"#95\u9519\u8bef \u6846\u67b6\u5f15\u64ce\u672a\u521d\u59cb\u5316 || \u672a\u6dfb\u52a0\u5230\u5168\u5c40\u53d8\u91cf",
							e);
						e.getServices().miniGameSrv.getAppApiInstance().loadAndShowVideoAd(
					() => {
							this.m_videoCountInfo.currLookCount++
						}, () => {
							e.getModules().uiControlModule.showMessageBox(
								"\u89c6\u9891\u89c2\u770b\u5931\u8d25")
						}, () => {
							this.onUpdateLookVideoCount(), this.m_videoCountInfo
								.currLookCount >= this.m_videoCountInfo.setLookCount &&
								(this.m_callBack && this.m_callBack(!0), this
									.hideAction())
						}, this.m_lookVideoSource)
					} else this.m_callBack && this.m_callBack(!1), this.hideAction();
				else this.m_callBack && this.m_callBack("ok" == t), this.hideAction()
			}
			onBtnThis() {
				if (null == this.m_thisClickTween) {
					let e = cc.tween(this.showNode).call(() => {
						this.m_runIng = !0
					}).by(.02, {
						x: 8,
						y: 8
					}).by(.02, {
						x: 0,
						y: -8
					}).by(.02, {
						x: -8,
						y: -8
					}).by(.02, {
						x: -8,
						y: 0
					}).by(.02, {
						x: 0,
						y: 8
					}).by(.02, {
						x: 8,
						y: 0
					});
					this.m_thisClickTween = cc.tween(this.showNode).then(e).repeat(3).call(
				() => {
						this.m_runIng = !1
					})
				}
				this.m_runIng || this.m_thisClickTween.start()
			}
			onUpdateLookVideoCount() {
				if (this.m_videoCountInfo) {
					this.lookVideoNode.active = !0;
					const {
						setLookCount: e,
						currLookCount: t
					} = this.m_videoCountInfo;
					this.lbVideoCount.string = e > 1 ? `(${t}/${e})` : ""
				} else this.lookVideoNode.active = !1, this.lbVideoCount.string = ""
			}
		};
		n([l(cc.Node)], d.prototype, "showNode", void 0), n([l(cc.Node)], d.prototype, "ndBg", void 0),
			n([l(cc.Label)], d.prototype, "lbTitle", void 0), n([l(cc.Label)], d.prototype, "lbMessage",
				void 0), n([l(cc.Label)], d.prototype, "lbOk", void 0), n([l(cc.Label)], d.prototype,
				"lbCancel", void 0), n([l(cc.Label)], d.prototype, "lbVideoCount", void 0), n([l(cc
				.Node)], d.prototype, "lookVideoNode", void 0), n([l(cc.Node)], d.prototype, "btCancel",
				void 0), d = n([c], d), o.default = d, cc._RF.pop()
	}, {
		"../../gameEngine": "gameEngine",
		"../../services/i18nService": "i18nService",
		"./PageBase": "PageBase"
	}],
	o1DrawBoard: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "3a51dGM/YFDlIO3XIm9Z+Gl", "o1DrawBoard");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("./o1DrawBoard/o1DrawInterface"),
			i = e("../../engines/gameEngine"),
			a = e("./o1DrawBoard/drawRecord"),
			{
				ccclass: r,
				property: c
			} = cc._decorator;
		let l = class extends cc.Component {
			constructor() {
				super(...arguments), this.drawBoard = null, this.ndLayerSetColor = null, this
					.ndEmptyNode = null, this.sdSetWidth = null, this.drawSetBoard = null, this
					.minLineWidth = 2, this.maxLineWidth = 50, this.editDrawName = null, this
					.pbRecordList = null, this.m_setColors = [cc.color(0, 0, 0), cc.color(255,
						0, 0), cc.color(255, 128, 0), cc.color(255, 255, 0), cc.color(0,
						255, 0), cc.color(0, 255, 255), cc.color(0, 0, 255), cc.color(128,
						0, 255), cc.color(64, 64, 0), cc.color(0, 64, 64), cc.color(64, 0,
						64), cc.color(128, 128, 0), cc.color(0, 128, 128), cc.color(128, 0,
						128), cc.color(255, 0, 128), cc.color(255, 128, 128), cc.color(255,
						128, 255), cc.color(128, 255, 0), cc.color(128, 255, 128), cc.color(
						128, 255, 255), cc.color(128, 128, 255)], this.m_currColor = null, this
					.m_currLineWidth = null, this.m_drawData = null, this.m_o1DrawClass = null,
					this.m_moveCount = 0, this.m_updateCount = 0
			}
			onLoad() {
				this.drawBoard.node.on("touchstart", this.onTouchStart.bind(this)), this
					.drawBoard.node.on("touchmove", this.onTouchMove.bind(this)), this.drawBoard
					.node.on("touchend", this.onTouchEnd.bind(this)), this.drawBoard.node.on(
						"touchcancel", this.onTouchCancel.bind(this)), i.default.off(
						"o1DrawBoard.OnEditDraw"), i.default.off("o1DrawBoard.OnDeleteDraw"), i
					.default.on("o1DrawBoard.OnEditDraw", this.OnEditDraw.bind(this)), i.default
					.on("o1DrawBoard.OnDeleteDraw", this.OnDeleteDraw.bind(this)), this
					.onInitSetColor(), this.onInitSetWidth(), this.onDrawInit()
			}
			start() {
				this.m_o1DrawClass = new s.default, this.m_o1DrawClass.OnLoadData()
			}
			onBtnSelectColor(e) {
				console.log("\u9009\u62e9\u8272", e.node.name);
				const t = e.node.name;
				this.drawBoard.strokeColor = this.drawBoard.fillColor = this.m_setColors[t],
					this.drawBoard.lineWidth = this.minLineWidth + this.sdSetWidth.progress * (
						this.maxLineWidth - this.minLineWidth), this.ndEmptyNode.active = !1,
					this.onSetPen()
			}
			onBtnSetWidth() {
				this.drawBoard.lineWidth = this.minLineWidth + this.sdSetWidth.progress * (this
						.maxLineWidth - this.minLineWidth), this.drawBoard.strokeColor = this
					.drawBoard.fillColor = this.m_currColor, this.ndEmptyNode.active = !1, this
					.onSetPen()
			}
			onBtnSelectPen() {
				this.ndEmptyNode.active = !1, this.drawBoard.lineWidth = this.m_currLineWidth,
					this.drawBoard.strokeColor = this.drawBoard.fillColor = this.m_currColor
			}
			OnBtnSaveData() {
				let e = this.editDrawName.string;
				e ? (this.SaveDrawInfo(e), i.default.getModules().uiControlModule
						.showMessageBox("\u5df2\u4fdd\u5b58")) : i.default.getModules()
					.uiControlModule.showMessageBox("\u672a\u8f93\u5165\u540d\u5b57")
			}
			OnBtnLoadData() {
				let e = cc.instantiate(this.pbRecordList);
				this.node.addChild(e), e.getComponent(a.default).bindDrawInterface(this
					.m_o1DrawClass)
			}
			onBtnClear() {
				this.editDrawName.string = "\u672a\u547d\u540d", this.drawBoard.clear(), this
					.OnClearDrawData()
			}
			onBtnEmpty() {
				this.ndEmptyNode.active ? this.onGetPen() : (this.drawBoard.lineWidth = 2 * this
						.maxLineWidth, this.drawBoard.strokeColor = this.drawBoard.fillColor =
						this.drawBoard.node.parent.color, this.ndEmptyNode.setPosition(this
							.drawBoard.node.width / 2, this.drawBoard.node.height / 2)), this
					.ndEmptyNode.active = !this.ndEmptyNode.active
			}
			onTouchStart(e) {
				let t = this.drawBoard.node.convertToNodeSpaceAR(e.touch.getLocation());
				t = this.isOutWeb(t), this.OnStartDraw(t), this.ndEmptyNode.setPosition(t), this
					.m_moveCount = 0
			}
			onTouchMove(e) {
				this.m_moveCount++;
				let t = this.drawBoard.node.convertToNodeSpaceAR(e.touch.getLocation());
				t = this.isOutWeb(t), this.OnIngDraw(t), this.ndEmptyNode.setPosition(t)
			}
			onTouchEnd(e) {
				let t = this.drawBoard.node.convertToNodeSpaceAR(e.touch.getLocation());
				t = this.isOutWeb(t)
			}
			onTouchCancel(e) {
				let t = this.drawBoard.node.convertToNodeSpaceAR(e.touch.getLocation());
				t = this.isOutWeb(t)
			}
			OnBtnExit() {
				this.node.destroy()
			}
			OnDeleteDraw(e) {
				this.m_o1DrawClass.DeleteData(e)
			}
			OnEditDraw(e) {
				this.OnClearDrawData(), this.drawBoard.clear();
				let t = this.m_o1DrawClass.getData(e);
				if (t) {
					this.editDrawName.string = e;
					for (let e = 0; e < t.drawList.length; e++) {
						let {
							lineWidth: o,
							color: n,
							x: s,
							y: i,
							isStart: a
						} = t.drawList[e], {
							r: r,
							g: c,
							b: l
						} = n;
						this.drawBoard.lineWidth = o, this.drawBoard.strokeColor = cc.color(r,
							c, l), a ? this.OnStartDraw(cc.v2(s, i)) : this.OnIngDraw(cc.v2(
							s, i))
					}
				} else i.default.getModules().uiControlModule.showMessageBox(
					`\u6ca1\u6709\u627e\u5230\u8be5\u753b\u4f5c<${e}>`)
			}
			OnIngDraw(e) {
				const {
					x: t,
					y: o
				} = e;
				this.drawBoard.lineTo(t, o), this.drawBoard.stroke(), this.drawBoard.moveTo(t,
					o);
				const {
					r: n,
					g: s,
					b: i
				} = this.drawBoard.strokeColor;
				this.OnAddDrawList({
					x: t,
					y: o,
					color: {
						r: n,
						g: s,
						b: i
					},
					lineWidth: this.drawBoard.lineWidth,
					isStart: !1
				})
			}
			OnStartDraw(e) {
				let {
					x: t,
					y: o
				} = e;
				this.drawBoard.moveTo(t - 1, o - 1), this.drawBoard.lineTo(t, o), this.drawBoard
					.stroke();
				const {
					r: n,
					g: s,
					b: i
				} = this.drawBoard.strokeColor;
				this.OnAddDrawList({
					x: t,
					y: o,
					color: {
						r: n,
						g: s,
						b: i
					},
					lineWidth: this.drawBoard.lineWidth,
					isStart: !0
				})
			}
			OnClearDrawData() {
				this.m_drawData = null
			}
			OnAddDrawList(e) {
				null == this.m_drawData && (this.m_drawData = {
					name: null,
					drawList: []
				}), this.m_drawData.drawList.push(e)
			}
			SaveDrawInfo(e) {
				this.m_drawData.name = e, this.m_o1DrawClass.getData(e) ? i.default.getModules()
					.uiControlModule.showDialogBox("\u4fdd\u5b58",
						`\u4fdd\u5b58\u4f1a\u8986\u76d6\u4e4b\u524d\u753b\u4f5c,\u662f\u5426\u4fdd\u5b58<${e}>`,
						!0, e => {
							e && this.m_o1DrawClass.AddAndWriteDrawData(this.m_drawData)
						}, null, "\u4fdd\u5b58", "\u53d6\u6d88") : this.m_o1DrawClass
					.AddAndWriteDrawData(this.m_drawData)
			}
			update(e) {
				this.m_updateCount++, this.m_updateCount
			}
			onSetPen() {
				this.m_currColor = this.drawBoard.strokeColor, this.m_currLineWidth = this
					.drawBoard.lineWidth, this.onUpdateDrawSetGdi()
			}
			onGetPen() {
				this.drawBoard.strokeColor = this.drawBoard.fillColor = this.m_currColor, this
					.drawBoard.lineWidth = this.m_currLineWidth, this.onUpdateDrawSetGdi()
			}
			onUpdateDrawSetGdi() {
				this.drawSetBoard.strokeColor = this.drawBoard.strokeColor, this.drawSetBoard
					.lineWidth = this.drawBoard.lineWidth, this.drawSetBoard.clear(), this
					.drawSetBoard.moveTo(20, 0), this.drawSetBoard.bezierCurveTo(0, 40, 35, 100,
						20, 150), this.drawSetBoard.stroke()
			}
			isOutWeb(e) {
				let t = e.clone();
				return e.x > this.drawBoard.node.width - this.drawBoard.lineWidth / 2 && (t.x =
						this.drawBoard.node.width - this.drawBoard.lineWidth / 2), e.x < this
					.drawBoard.lineWidth / 2 && (t.x = this.drawBoard.lineWidth / 2), e.y > this
					.drawBoard.node.height - this.drawBoard.lineWidth / 2 && (t.y = this
						.drawBoard.node.height - this.drawBoard.lineWidth / 2), e.y < this
					.drawBoard.lineWidth / 2 && (t.y = this.drawBoard.lineWidth / 2), t
			}
			onDrawInit() {
				this.drawBoard.strokeColor = this.drawBoard.fillColor = this.m_setColors[0],
					this.drawBoard.lineWidth = this.minLineWidth, this.ndEmptyNode.active = !1,
					this.onSetPen()
			}
			onInitSetWidth() {
				this.sdSetWidth.progress = 0
			}
			onInitSetColor() {
				for (let e = 0; e < this.m_setColors.length; e++) {
					let t = this.m_setColors[e],
						o = this.ndLayerSetColor.children[0];
					e > 0 && (o = cc.instantiate(this.ndLayerSetColor.children[0]), this
						.ndLayerSetColor.addChild(o)), o.name = String(e), o.getChildByName(
						"Background").color = t
				}
			}
		};
		n([c(cc.Graphics)], l.prototype, "drawBoard", void 0), n([c(cc.Node)], l.prototype,
				"ndLayerSetColor", void 0), n([c({
				type: cc.Node,
				displayName: "\u6a61\u76ae\u64e6"
			})], l.prototype, "ndEmptyNode", void 0), n([c(cc.Slider)], l.prototype, "sdSetWidth",
				void 0), n([c(cc.Graphics)], l.prototype, "drawSetBoard", void 0), n([c({
				tooltip: "\u753b\u7b14\u6700\u5c0f\u5bbd\u5ea6"
			})], l.prototype, "minLineWidth", void 0), n([c({
				tooltip: "\u753b\u7b14\u6700\u5927\u5bbd\u5ea6"
			})], l.prototype, "maxLineWidth", void 0), n([c(cc.EditBox)], l.prototype, "editDrawName",
				void 0), n([c(cc.Prefab)], l.prototype, "pbRecordList", void 0), l = n([r], l), o
			.default = l, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"./o1DrawBoard/drawRecord": "drawRecord",
		"./o1DrawBoard/o1DrawInterface": "o1DrawInterface"
	}],
	o1DrawInterface: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "57e5ackELJD4IFRj10dteKl", "o1DrawInterface"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			}), o.DrawBase = void 0;
		const n = e("../../../engines/gameEngine");
		class s {}
		o.DrawBase = s, o.default = class {
			constructor() {
				this.m_BASE_DATA_KEY = "o1-draw-data", this.m_baseInfo = null
			}
			getData(e) {
				return this.m_baseInfo[e]
			}
			OnLoadData() {
				this.m_baseInfo = new s;
				let e = n.default.getServices().localStorageSrv.getStorage(this
				.m_BASE_DATA_KEY);
				if (e) {
					let t = JSON.parse(e);
					for (let e of t) this.m_baseInfo[e.name] = e
				}
			}
			AddAndWriteDrawData(e) {
				this.m_baseInfo[e.name] = e, this.WriteData()
			}
			DeleteData(e) {
				this.m_baseInfo[e] && delete this.m_baseInfo[e], this.WriteData()
			}
			getAllData() {
				return this.m_baseInfo
			}
			WriteData() {
				let e = [];
				for (let t in this.m_baseInfo) {
					let o = this.m_baseInfo[t];
					e.push(o)
				}
				n.default.getServices().localStorageSrv.setStorage(this.m_BASE_DATA_KEY, JSON
					.stringify(e))
			}
		}, cc._RF.pop()
	}, {
		"../../../engines/gameEngine": "gameEngine"
	}],
	o1Loading: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "8a0aczl3B1MVa09X9ZRXdn/", "o1Loading");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../gameEngine"),
			{
				ccclass: i,
				property: a
			} = cc._decorator;
		let r = class extends cc.Component {
			constructor() {
				super(...arguments), this.lbLoadText = null, this.ndIcon = null, this.ndBg =
					null
			}
			onLoad() {
				s.modules().uiControlModule.setGaussianMode(this.ndBg)
			}
			start() {
				let e = this.ndIcon.getChildByName("mask");
				e.height = 0, cc.tween(e).then(cc.tween().to(1, {
					height: 256
				}).to(0, {
					height: 0
				})).repeatForever().start()
			}
			showLoading(e) {
				this.lbLoadText.string = e
			}
		};
		n([a(cc.Label)], r.prototype, "lbLoadText", void 0), n([a(cc.Node)], r.prototype, "ndIcon",
				void 0), n([a(cc.Node)], r.prototype, "ndBg", void 0), r = n([i], r), o.default = r, cc
			._RF.pop()
	}, {
		"../../gameEngine": "gameEngine"
	}],
	o1MessageBox: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "8bfc2eplPxAMrkDAj/dZbA1", "o1MessageBox");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const {
			ccclass: s,
			property: i
		} = cc._decorator;
		let a = class extends cc.Component {
			constructor() {
				super(...arguments), this.lbMessage = null, this.activeNode = null
			}
			onLoad() {}
			start() {}
			showMessageBox(e, t) {
				this.lbMessage.string = e, this.activeNode.y -= 75, this.activeNode.scale = .5,
					this.activeNode.opacity = 0, cc.tween(this.activeNode).parallel(cc.tween()
						.by(.5, {
							y: 75
						}), cc.tween().to(.5, {
							scale: 1,
							opacity: 255
						}, {
							easing: "backOut"
						})).delay(t).to(.2, {
						opacity: 0
					}).call(() => {
						this.node.destroy()
					}).start()
			}
			update(e) {}
		};
		n([i(cc.Label)], a.prototype, "lbMessage", void 0), n([i(cc.Node)], a.prototype, "activeNode",
			void 0), a = n([s], a), o.default = a, cc._RF.pop()
	}, {}],
	o1SelectBox: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "025c51RtSJHxZtSS/iiGdTo", "o1SelectBox");
		var n = this && this.__decorate || function(e, t, o, n) {
				var s, i = arguments.length,
					a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
					.decorate(e, t, o, n);
				else
					for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
						t, o, a) : s(t, o)) || a);
				return i > 3 && a && Object.defineProperty(t, o, a), a
			},
			s = this && this.__awaiter || function(e, t, o, n) {
				return new(o || (o = Promise))(function(s, i) {
					function a(e) {
						try {
							c(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function r(e) {
						try {
							c(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function c(e) {
						var t;
						e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
							e) {
							e(t)
						})).then(a, r)
					}
					c((n = n.apply(e, t || [])).next())
				})
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const i = e("../../services/i18nService"),
			a = e("./PageBase"),
			{
				ccclass: r,
				property: c,
				menu: l,
				disallowMultiple: d
			} = cc._decorator;
		let u = class extends a.default {
			constructor() {
				super(...arguments), this.lbTitle = null, this.lbExplain = null, this
					.ndFirstItem = null, this.ndContent = null
			}
			onLoad() {}
			start() {}
			OnPageOpen(e) {
				const t = Object.create(null, {
					OnPageOpen: {
						get: () => super.OnPageOpen
					}
				});
				return s(this, void 0, void 0, function*() {
					t.OnPageOpen.call(this, e)
				})
			}
			showSelectBox(e, t, o, n = !0) {
				return new Promise(s => {
					this.lbTitle.string = e, this.lbExplain.string = t, this
						.m_dynamicNodes = [];
					for (let e = 0; e < o.length; e++) {
						let t = null;
						0 == e ? t = this.ndFirstItem : (t = cc.instantiate(this
									.ndFirstItem), this.ndContent.addChild(t), this
								.m_dynamicNodes.push(t)), t.getChildByName("lb")
							.getComponent(cc.Label).string = o[e], t.once("click",
						() => {
								this.ClosePage(), s(e)
							})
					}
					if (n) {
						let e = cc.instantiate(this.ndFirstItem);
						this.m_dynamicNodes.push(e), this.ndContent.addChild(e), e
							.getChildByName("line").active = !1;
						let t = e.getChildByName("lb").getComponent(cc.Label);
						t.enableBold = !0, t.string = "\u53d6\u6d88", e.once("click",
						() => {
								this.ClosePage()
							})
					}
					i.TT(this.node)
				})
			}
			OnPageClose() {
				super.OnPageClose(), this.m_dynamicNodes.forEach(e => {
					e.destroy()
				})
			}
		};
		n([c(cc.Label)], u.prototype, "lbTitle", void 0), n([c(cc.Label)], u.prototype, "lbExplain",
			void 0), n([c(cc.Node)], u.prototype, "ndFirstItem", void 0), n([c(cc.Node)], u
			.prototype, "ndContent", void 0), u = n([r, d, l(
			"\u6e38\u620f\u9875\u9762/\u7c7b\u540d")], u), o.default = u, cc._RF.pop()
	}, {
		"../../services/i18nService": "i18nService",
		"./PageBase": "PageBase"
	}],
	oppoApi: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "2a5504fMB9Ox7RlwW7Bb530", "oppoApi");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../miniApp"),
			i = e("../../../configs/gameConfig"),
			a = e("../../../gameEngine"),
			r = window.qg;
		class c extends s.default {
			constructor() {
				super(...arguments), this.m_appId = "30490355", this.m_secret =
					"5b004Cc3F9399878C51edf973F7af00C", this.m_adUnitId = "301459", this
					.m_PortalId = "301461", this.m_nAdIdList = ["305202", "305201", "305200"],
					this.m_BannerId = "304800", this.m_BannerIdList = ["304799", "304800",
						"304797"
					], this.m_gameRecorderManager = null, this.m_gameRecordVideoUrl = null, this
					.m_videoAd = null, this.m_nativeAd = null, this.nowNAdId = 0, this
					.mowBanner = 0, this.m_portalAd = null, this.m_Bannerad = null, this
					.bannerSuccese = !0, this.m_gameRecordTimeNow = 0, this
					.m_localInBlockCity = !1
			}
			drawHead(e) {
				throw new Error("Method not implemented.")
			}
			fullScreenVideo() {
				throw new Error("Method not implemented.")
			}
			commitRank(e, t) {
				return n(this, void 0, void 0, function*() {
					return console.error("#48102640 \u672a\u5b9e\u73b0"), Promise
						.resolve(!1)
				})
			}
			showRank(e) {
				return n(this, void 0, void 0, function*() {
					return console.error("#51102648 \u672a\u5b9e\u73b0"), Promise
						.resolve(!1)
				})
			}
			navigateToMiniGame(e, t, o) {
				console.error("#54102651 \u672a\u5b9e\u73b0\u8df3\u8f6c")
			}
			vibrate(e) {}
			addShortcut() {
				return null
			}
			getShareVideoRank(e, t) {}
			drawUrlImage(e, t) {}
			showVideo(e) {}
			subscribeMessage(e, t, o) {}
			showAddFavoriteGuide(e, t, o) {}
			StartRecordSound() {}
			StopRecordSound(e) {}
			PlayLastRecordSound(e, t, o) {}
			operateGameLive() {}
			getUserInfo(e) {}
			showToast(e) {
				r.showToast(e)
			}
			showLoading(e) {
				r.showLoading(e)
			}
			hideLoading() {
				r.hideLoading()
			}
			preCreateUnits() {
				this.CheckLocalToBlockCityList()
			}
			onShareAppMessageGetReward(e, t, o, n) {}
			createMoreGameBtn() {}
			showInterstitialAd(e, t) {}
			showNativeAd(e, t, o) {
				console.log("----------\u539f\u751f\u5e7f\u544a\u5224\u65ad\u524d----------"),
					r && (console.log(
							"----------\u539f\u751f\u5e7f\u544a\u5224\u65ad\u540e----------"),
						this.m_nativeAd && (this.m_nativeAd.destroy(), this.m_nativeAd = null),
						this.m_nativeAd = r.createNativeAd({
							posId: this.m_nAdIdList[this.nowNAdId]
						}), this.m_nativeAd.load().then(e => {
							console.log(e.adList[0].creativeType, "creativeType======"),
								console.log(
									"\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u6210\u529f..." +
									e), console.log(JSON.stringify(e),
									"this.m_nativeAd======="), console.log(
									"------------  res.adList : " + e.adList), console.log(
									"------------  res.adList[0].adId : " + e.adList[0].adId
									), console.log(
									"------------  res.adList[0].imgUrlList[0] : " + e
									.adList[0].imgUrlList[0]), console.log(
									"------------  this.m_nAdlist.imgUrlList[0] : " + JSON
									.stringify(this.m_nAdlist.imgUrlList)), this.nowNAdId++,
								this.nowNAdId == this.m_nAdIdList.length && (this.nowNAdId =
									0), o && o()
						}).catch(e => {
							console.log(
								"\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25..." +
								JSON.stringify(e)), t(e), o && o()
						}), this.m_nativeAd.onLoad(t => {
							this.m_nAdlist = t.adList[0], this.m_nativeAd.reportAdShow({
								adId: this.m_nAdlist.adId
							}), e(this.m_nAdlist), console.log(JSON.stringify(this
								.m_nativeAd), "this.m_nativeAd======="), console.log(
								"------------  res.adList : " + t.adList), console.log(
								"------------  res.adList[0].adId : " + t.adList[0].adId
								), console.log(
								"------------  res.adList[0].imgUrlList[0] : " + t
								.adList[0].imgUrlList[0]), console.log(
								"------------  this.m_nAdlist.imgUrlList[0] : " + JSON
								.stringify(this.m_nAdlist.imgUrlList))
						}))
			}
			reportAdClickNativeAd() {
				this.m_nativeAd && this.m_nativeAd.reportAdClick({
					adId: this.m_nAdlist.adId
				})
			}
			showBannerAD(e, t, o, n, s) {
				const {
					screenWidth: i,
					screenHeight: a
				} = r.getSystemInfoSync();
				let c = s && s({
					screenWidth: i,
					screenHeight: a
				}) || cc.v2(0, 0);
				this.m_Bannerad && !this.bannerSuccese && (this.m_Bannerad.destroy(), this
					.m_Bannerad = null), this.m_Bannerad ? this.m_Bannerad.show().then(
			() => {
					t && t(), console.log(
						"---------------------Banner\u5e7f\u544a\u76f4\u63a5\u663e\u793a\u6210\u529f"
						)
				}).catch(e => {
					o && o(e), console.log(
						"---------------------Banner\u5e7f\u544a\u76f4\u63a5\u663e\u793a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898",
						JSON.stringify(e))
				}) : (this.bannerSuccese = !0, null == this.m_Bannerad && (this.m_Bannerad =
					r.createBannerAd({
						adUnitId: this.m_BannerIdList[this.mowBanner],
						adIntervals: 30,
						style: {
							left: c.x,
							top: c.y
						}
					})), this.m_Bannerad.onResize(e => {
					console.log(e.width, e.height, "banner\u957f\u5bbd")
				}), this.m_Bannerad.onLoad(() => {
					null != e && e.active && e.isValid ? (this.mowBanner++, this
						.mowBanner == this.m_BannerIdList.length && (this
							.mowBanner = 0), this.bannerSuccese = !1, this
						.m_Bannerad.show().then(() => {
							console.log(
								"---------------------Banner\u5e7f\u544a\u663e\u793a\u6210\u529f"
								), this.m_Bannerad.onHide(() => {
								console.log(
									"oppo-banner \u5e7f\u544a\u9690\u85cf"
									), n && n()
							})
						}).catch(e => {
							console.log(
								"---------------------Banner\u5e7f\u544a\u7ec4\u4ef6\u663e\u793a\u51fa\u73b0\u95ee\u9898",
								JSON.stringify(e))
						})) : console.log(
						"---------------------------------------------------------"
						)
				}), this.m_Bannerad.onError(e => {
					this.bannerSuccese = !1, console.log(
						"---------------------Banner\u5e7f\u544a\u52a0\u8f7d\u9519\u8bef,\u9519\u8bef\u539f\u56e0\uff1a",
						JSON.stringify(e))
				}))
			}
			hideBanner() {
				null != this.m_Bannerad && (this.m_Bannerad.hide(), console.log(
					"banner\u5e7f\u544a\u9690\u85cf\u5b8c\u6210"))
			}
			loadAndShowPortalAd(e, t, o) {
				cc.sys.platform == cc.sys.OPPO_GAME && (r.getSystemInfoSync()
					.platformVersionCode >= 1076 ? (null == this.m_portalAd ? this
						.m_portalAd = r.createGamePortalAd({
							adUnitId: this.m_PortalId
						}) : this.m_portalAd.show().then(() => {
							e(), o && o(), console.log(
								"\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u663e\u793a\u6210\u529f"
								)
						}).catch(() => {
							t("\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u663e\u793a\u5931\u8d25"),
								o && o(), console.log(
									"\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u663e\u793a\u5931\u8d25"
									), this.m_portalAd.destroy(), this.m_portalAd = null
						}), this.m_portalAd.load().then(() => {
							console.log(
								"\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"
								), this.m_portalAd.show().then(() => {
								e(), o && o(), console.log(
									"\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u663e\u793a\u6210\u529f"
									)
							}).catch(e => {
								a.default.getModules().uiControlModule
									.showMessageBox(
										"\u4e92\u63a8\u76d2\u5b50\u663e\u793a\u5931\u8d25~\u8bf7\u7a0d\u540e\u91cd\u8bd5"
										), t(
										"\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u663e\u793a\u5931\u8d25"
										), o && o(), console.log(
										"\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u663e\u793a\u5931\u8d25",
										JSON.stringify(e)), this.m_portalAd
									.destroy(), this.m_portalAd = null
							})
						}).catch(e => {
							switch (e.errCode) {
								case 1001:
									a.default.getModules().uiControlModule
										.showMessageBox(
											"\u62c9\u53d6\u6b21\u6570\u8fc7\u591a\u6682\u65f6\u65e0\u6cd5\u663e\u793a"
											);
									break;
								default:
									a.default.getModules().uiControlModule
										.showMessageBox(
											"\u66f4\u591a\u597d\u73a9\u52a0\u8f7d\u5931\u8d25~\u8bf7\u7a0d\u540e\u91cd\u8bd5~"
											)
							}
							o && o(), console.log(
									"\u4e92\u63a8\u76d2\u5b50\u4e5d\u5bab\u683c\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25,error",
									JSON.stringify(e)), this.m_portalAd.destroy(), this
								.m_portalAd = null
						})) : console.log(
						"\u5feb\u5e94\u7528\u5e73\u53f0\u7248\u672c\u53f7\u4f4e\u4e8e1076\uff0c\u6682\u4e0d\u652f\u6301\u4e92\u63a8\u76d2\u5b50\u76f8\u5173 API"
						))
			}
			loadAndShowVideoAd(e, t, o, n, s = 0) {
				console.log("ad show"), null == this.m_videoAd && (this.m_videoAd = r
					.createRewardedVideoAd({
						adUnitId: this.m_adUnitId
					}));
				let i = () => {
					console.log("        \u89c6\u9891Error")
				};
				this.m_videoAd.offError(i), this.m_videoAd.onError(i);
				let c = n => {
					console.log("2                \u89c6\u9891\u9000\u51fa"), n && n
						.isEnded ? e() : (a.default.getModules().uiControlModule
							.showMessageBox(
								"\u5b8c\u6574\u89c2\u770b\u89c6\u9891\u624d\u80fd\u83b7\u5f97\u5956\u52b1\u54e6~"
								), t("\u89c6\u9891\u4e2d\u9014\u9000\u51fa")), this
						.m_videoAd.offClose(c), o && o(), a.default.getManagers().soundMgr
						.setSoundEnabled(!0)
				};
				this.m_videoAd.load().then(() => {
					this.m_videoAd.onClose(c), this.m_videoAd.show().then(() => {})
						.catch(() => {
							console.log(
									"1            \u89c6\u9891\u663e\u793a\u9519\u8bef"
									), this.m_videoAd && (this.m_videoAd.destroy(),
									this.m_videoAd = null), a.default.getModules()
								.uiControlModule.showMessageBox(
									"\u89c6\u9891\u663e\u793a\u9519\u8bef~\u8bf7\u7a0d\u540e\u91cd\u8bd5"
									), t("\u89c6\u9891\u663e\u793a\u9519\u8bef"),
								this.m_videoAd.offClose(c), o && o(), a.default
								.getManagers().soundMgr.setSoundEnabled(!0)
						})
				}).catch(() => {
					console.log("3        \u89c6\u9891\u52a0\u8f7d\u9519\u8bef"), a
						.default.getModules().uiControlModule.showMessageBox(
							"\u89c6\u9891\u52a0\u8f7d\u5931\u8d25~\u8bf7\u7a0d\u540e\u91cd\u8bd5"
							), t("\u89c6\u9891\u52a0\u8f7d\u9519\u8bef"), this.m_videoAd
						.offClose(c), o && o(), a.default.getManagers().soundMgr
						.setSoundEnabled(!0), this.m_videoAd && (this.m_videoAd
						.destroy(), this.m_videoAd = null)
				}), this.m_videoAd.onError(e => {
					this.m_videoAd && (this.m_videoAd.destroy(), this.m_videoAd = null),
						console.log(JSON.stringify(e),
							"\u89c6\u9891\u52a0\u8f7d\u9519\u8bef\u539f\u56e0")
				})
			}
			login(e) {
				r.login(e)
			}
			authorize(e) {
				e.success && e.success()
			}
			gameRecordStart(e, t) {}
			gameRecordStop() {
				return !0
			}
			isGameRecordOver() {
				return null != this.m_gameRecordVideoUrl
			}
			shareGameRecordVideo(e, t) {}
			isProduction() {
				return c.isProduction()
			}
			isHaveShareVideo() {
				return !0
			}
			validAppId() {}
			reportAnalytics(e, t) {
				console.log("oppo \u53d1\u9001\u57cb\u70b9", e, JSON.stringify(t))
			}
			clearMemory() {}
			shareAppMessage(e) {}
			createRewardedVideoAd(e) {}
			static isProduction() {
				return !0
			}
			CheckLocalToBlockCityList() {
				a.default.getModules().gameHttpModule.getLocalPropertyInfo(e => {
					this.m_localInBlockCity = i.default.IP_BLOCK_CITY.includes(e.city)
				}, e => {
					console.debug(
						"-------\u83b7\u53d6\u533a\u57df\u4fe1\u606f\u9519\u8bef", e
						)
				})
			}
			LocalInBlockCityList() {
				return this.m_localInBlockCity
			}
			showModal(e) {}
		}
		o.default = c, cc._RF.pop()
	}, {
		"../../../configs/gameConfig": "gameConfig",
		"../../../gameEngine": "gameEngine",
		"../miniApp": "miniApp"
	}],
	ossService: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "276fa4+CkNFwqIQs4fAazmI", "ossService");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.PLATFORM_CODE = void 0;
		const s = e("./superService"),
			i = e("./miniGameService"),
			a = e("../gameEngine");
		var r;
		(function(e) {
			e.WX = "wx", e.TT = "tt", e.HU_WEI = "", e.VIVO = "vivo", e.OPPO = "oppo", e.ANDROID =
				"app/Android", e.IOS = "app/iOS", e.KS = "ks", e.H5 = "h5", e.H5_4399 = "h5-4399", e
				.GAME_BOX_4399 = "gamebox-4399"
		})(r = o.PLATFORM_CODE || (o.PLATFORM_CODE = {})), o.default = class extends s.default {
			constructor() {
				super(), this.className = "oss\u670d\u52a1", this.m_htpUrl = "", this
					.m_ossVersion = "1.0.0", this.m_platform = r.WX
			}
			getVersion() {
				return this.m_ossVersion
			}
			getPlatform() {
				return this.m_platform
			}
			getPlatExplainOfPlatform(e) {
				switch (e) {
					case r.ANDROID:
						return "\u5b89\u5353\u624b\u673a";
					case r.H5:
						return "H5";
					case r.HU_WEI:
						return "\u534e\u4e3a\u5feb\u6e38\u620f";
					case r.IOS:
						return "\u82f9\u679c\u624b\u673a";
					case r.KS:
						return "\u5feb\u624b\u5c0f\u6e38\u620f";
					case r.OPPO:
						return "OPPO\u5c0f\u6e38\u620f";
					case r.TT:
						return "\u6296\u97f3\u5c0f\u6e38\u620f";
					case r.VIVO:
						return "VIVO\u5c0f\u6e38\u620f";
					case r.WX:
						return "\u5fae\u4fe1\u5c0f\u6e38\u620f";
					case r.H5_4399:
						return "4399\u5c0f\u6e38\u620f";
					case r.GAME_BOX_4399:
						return "4399\u6e38\u620f\u76d2\u5b50";
					default:
						return "\u672a\u77e5\u5e73\u53f0"
				}
			}
			showOssPathMiniGameJumpIcon(e, t) {
				let o = this.getPlatformJumpUrl(e);
				a.default.getServices().miniGameSrv.getAppApiInstance().drawUrlImage(o, e => {
					t.spriteFrame = e
				})
			}
			getPlatformJumpUrl(e) {
				let t = this.m_htpUrl.replace(".json", "/");
				return t = t.replace("#", this.m_platform), t += `${e}.jpg`, console.log(
					"\u8df3\u8f6c\u5c0f\u6e38\u620f\u56fe\u6807 \u6700\u7ec8\u8def\u5f84", t
					), t
			}
			loadService() {
				const e = Object.create(null, {
					loadService: {
						get: () => super.loadService
					}
				});
				return n(this, void 0, void 0, function*() {
					return yield e.loadService.call(this), this.onSetPlatform(), this
						.loadConfig()
				})
			}
			getPlatformUrl() {
				let e = this.m_platform + "-" + this.m_ossVersion;
				return i.default.getMiniGameAppStatic().isProduction() ? this.m_htpUrl.replace(
					/#/g, e) + "" : this.m_htpUrl.replace(/#/g, e + "-test") + ""
			}
			onSetPlatform() {
				if (window.hasOwnProperty("gamebox")) return console.warn(
					"4399\u6e38\u620f\u76d2\u5b50 first"), console.log(
					"4399\u6e38\u620f\u76d2\u5b50 first"), void(this.m_platform = r
					.GAME_BOX_4399);
				switch (cc.sys.platform) {
					case cc.sys.WECHAT_GAME:
					case cc.sys.WECHAT_GAME_SUB:
						this.m_platform = r.KS;
						break;
					case cc.sys.BYTEDANCE_GAME:
					case cc.sys.BYTEDANCE_GAME_SUB:
						this.m_platform = r.TT;
						break;
					case cc.sys.HUAWEI_GAME:
						console.log("\u534e\u4e3a\u5feb\u6e38\u620f"), this.m_platform = r
							.HU_WEI;
						break;
					case cc.sys.VIVO_GAME:
						console.log("vivo\u5feb\u6e38\u620f"), this.m_platform = r.VIVO;
						break;
					case cc.sys.OPPO_GAME:
						console.log("oppo\u5feb\u6e38\u620f"), this.m_platform = r.OPPO;
						break;
					default:
						cc.sys.isNative ? cc.sys.os == cc.sys.OS_ANDROID ? (console.log(
								"Android \u6e38\u620f"), this.m_platform = r.ANDROID) : cc.sys
							.os == cc.sys.OS_IOS ? (console.log("iOS \u6e38\u620f"), this
								.m_platform = r.IOS) : this.m_platform = r.TT : 3 == cc.sys
							.platform || 4 == cc.sys.platform ? (console.log(
								"\u5feb\u624b\u5c0f\u6e38\u620f"), this.m_platform = r.KS) :
							window.hasOwnProperty("h5api") ? (console.log(
								"4399\u5c0f\u6e38\u620f"), this.m_platform = r.H5_4399) : window
							.hasOwnProperty("gamebox") ? (console.log(
									"4399\u6e38\u620f\u76d2\u5b50"), this.m_platform = r
								.GAME_BOX_4399) : (console.log("h5\u5c0f\u6e38\u620f"), this
								.m_platform = r.H5)
				}
			}
			loadConfig() {
				return n(this, void 0, void 0, function*() {
					return new Promise(e => {
						this.getPlatformUrl(), a.default.emit("loading-title",
							"\u6b63\u5728\u8fde\u63a5\u670d\u52a1\u5668\u2026\u2026"
							), console.log("oss \u52a0\u8f7dURL", this
							.getPlatformUrl()), e()
					})
				})
			}
		}, cc._RF.pop()
	}, {
		"../gameEngine": "gameEngine",
		"./miniGameService": "miniGameService",
		"./superService": "superService"
	}],
	pCountry: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "45797eAmShARJuUHL8hF3PR", "pCountry");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../engines/gameEngine"),
			i = e("./pRankCountryItem"),
			{
				ccclass: a,
				property: r
			} = cc._decorator;
		let c = class extends cc.Component {
			constructor() {
				super(...arguments), this.ndContent = null, this.pbRankCountryItem = null, this
					.meRankArea = null, this.noInfo = null, this.testChinaName = [
						"\u6cb3\u5317", "\u5c71\u897f", "\u8fbd\u5b81", "\u5409\u6797",
						"\u9ed1\u9f99\u6c5f", "\u6c5f\u82cf", "\u6d59\u6c5f", "\u5b89\u5fbd",
						"\u798f\u5efa", "\u6c5f\u897f", "\u5c71\u4e1c", "\u6cb3\u5357",
						"\u6e56\u5317", "\u6e56\u5357", "\u5e7f\u4e1c", "\u6d77\u5357",
						"\u56db\u5ddd", "\u8d35\u5dde", "\u4e91\u5357", "\u9655\u897f",
						"\u7518\u8083", "\u9752\u6d77", "\u53f0\u6e7e", "\u5185\u8499\u53e4",
						"\u5e7f\u897f", "\u897f\u85cf", "\u5b81\u590f", "\u65b0\u7586",
						"\u5317\u4eac", "\u5929\u6d25", "\u4e0a\u6d77", "\u91cd\u5e86",
						"\u9999\u6e2f", "\u6fb3\u95e8"
					]
			}
			onLoad() {}
			start() {
				this.meRankArea.active = !1, this.noInfo.active = !1, s.modules()
					.uiControlModule.showLoading(void 0,
						"\u6b63\u5728\u83b7\u53d6\u6392\u884c\u699c").then(() => {
						s.modules().uiControlModule.hideLoading(), s.modules()
							.gameHttpModule.getCountryRank(0, 100).then(e => {
								null == e && s.modules().uiControlModule.showMessageBox(
									"\u83b7\u53d6\u5931\u8d25\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5"
									), this.onShowRankList(e)
							})
					})
			}
			onShowRankList(e) {
				const t = e.filter(e => this.testChinaName.includes(e.province));
				for (let o = 0; o < t.length; o++) {
					const e = cc.instantiate(this.pbRankCountryItem);
					this.ndContent.addChild(e), e.getComponent(i.default).setRankItemInfo(o + 1,
							t[o].province, t[o].count), t[o].province == s.modules()
						.gameHttpModule.UserAreaInfo[1] && (this.meRankArea.active = !0, this
							.meRankArea.getComponent(i.default).setRankItemInfo(o + 1, t[o]
								.province, t[o].count))
				}
				this.noInfo.active = 0 == t.length
			}
			onBtnClose() {
				this.node.destroy()
			}
		};
		n([r(cc.Node)], c.prototype, "ndContent", void 0), n([r(cc.Prefab)], c.prototype,
			"pbRankCountryItem", void 0), n([r(cc.Node)], c.prototype, "meRankArea", void 0), n([r({
			type: cc.Node,
			displayName: "\u6ca1\u6709\u4fe1\u606f"
		})], c.prototype, "noInfo", void 0), c = n([a], c), o.default = c, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"./pRankCountryItem": "pRankCountryItem"
	}],
	pPigGroupScroll: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "dbab3+C5gRDB4frtbSwwOpf", "pPigGroupScroll");
		var n = this && this.__decorate || function(e, t, o, n) {
				var s, i = arguments.length,
					a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
					.decorate(e, t, o, n);
				else
					for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
						t, o, a) : s(t, o)) || a);
				return i > 3 && a && Object.defineProperty(t, o, a), a
			},
			s = this && this.__awaiter || function(e, t, o, n) {
				return new(o || (o = Promise))(function(s, i) {
					function a(e) {
						try {
							c(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function r(e) {
						try {
							c(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function c(e) {
						var t;
						e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
							e) {
							e(t)
						})).then(a, r)
					}
					c((n = n.apply(e, t || [])).next())
				})
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const i = e("../../engines/gameEngine"),
			a = e("./pPigGroup"),
			{
				ccclass: r,
				property: c
			} = cc._decorator;
		let l = class extends cc.Component {
			constructor() {
				super(...arguments), this.pigGroupItem = null, this.pigScrollView = null, this
					.pigGroupList = null, this.allGroup = []
			}
			onLoad() {
				this.InitData()
			}
			InitData() {
				return s(this, void 0, void 0, function*() {
					this.pigScrollView = this.node.getComponent(cc.ScrollView), this
						.pigGroupList = yield i.modules().gameHttpModule.getHallRank(0,
							100)
				})
			}
			OnScroll() {}
			checkUpdateView() {
				if (this.pigGroupList.length > 2 && this.allGroup.length > 0 && -(500 + 700 *
						this.allGroup.length) + this.pigScrollView.content.y >= -cc.winSize
					.height / 2) {
					const e = this.pigGroupList[this.allGroup.length];
					if (this.pigGroupList.length == this.allGroup.length) return;
					let t = cc.instantiate(this.pigGroupItem);
					this.pigScrollView.content.addChild(t), t.setPosition(0, -500 - t.height /
							2 - this.allGroup.length * t.height), t.getComponent(a.default)
						.loadInfo(e, this.allGroup.length), this.allGroup.push(t)
				}
			}
			update(e) {
				this.allGroup.forEach(e => {
					e.getComponent(a.default).check()
				})
			}
		};
		n([c({
			type: cc.Prefab,
			displayName: "\u732a\u56e2"
		})], l.prototype, "pigGroupItem", void 0), l = n([r], l), o.default = l, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"./pPigGroup": "pPigGroup"
	}],
	pPigGroup: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "138f6HCNJlIy6CX0dZWLbGo", "pPigGroup");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("./hallPig"),
			{
				ccclass: i,
				property: a
			} = cc._decorator;
		let r = class extends cc.Component {
			constructor() {
				super(...arguments), this.pigGroupInfo = null, this.cardPrefab = null, this
					.innerPig = [], this.outerRing = [], this.wasOut = !1
			}
			loadInfo(e, t) {
				if (null == e) return;
				const o = this.pigGroupInfo.getChildByName("province").getComponent(cc.Label),
					n = this.pigGroupInfo.getChildByName("num").getComponent(cc.Label);
				this.pigGroupInfo.getChildByName("rank").getComponent(cc.Label).string =
					"\u7b2c" + (t + 1) + "\u540d", n.string = e.list.length + "\u732a", o
					.string = e.province + "\u732a\u961f";
				let i = [];
				this.node.children.forEach((t, o) => {
					const n = t.getComponent(s.default),
						a = e.list[o];
					i.push(t), "pig-w" == t.name && (this.wasOut = !0), n && (this
							.wasOut ? this.outerRing.push(t) : this.innerPig.push(t)),
						n && n.setPigInfo(a, this.cardPrefab, e.province)
				}), this.scheduleOnce(() => {
					i.forEach(e => {
						e.zIndex = Math.floor(-e.y)
					})
				})
			}
			check() {
				cc.v2(this.node.x + this.node.parent.x, this.node.y + this.node.parent.y).y > cc
					.winSize.height / 2 + 500 ? this.node.active = !1 : this.node.active = !0
			}
		};
		n([a({
			type: cc.Node,
			displayName: "\u732a\u56e2\u4fe1\u606f"
		})], r.prototype, "pigGroupInfo", void 0), n([a({
			type: cc.Prefab,
			displayName: "\u5361\u7247\u4fe1\u606f"
		})], r.prototype, "cardPrefab", void 0), r = n([i], r), o.default = r, cc._RF.pop()
	}, {
		"./hallPig": "hallPig"
	}],
	pRankCountryItem: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "239c77uZhZBWJqZZCIQu+Yd", "pRankCountryItem");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const {
			ccclass: s,
			property: i
		} = cc._decorator;
		let a = class extends cc.Component {
			constructor() {
				super(...arguments), this.lbCount = null, this.lbProvince = null, this
					.lbSheepCount = null
			}
			setRankItemInfo(e, t, o) {
				this.lbCount.string = `${e}`, this.lbProvince.string = t, this.lbSheepCount
					.string = `${o}`;
				const n = this.node.getChildByName("first"),
					s = this.node.getChildByName("second"),
					i = this.node.getChildByName("third");
				n.active = 1 == e, s.active = 2 == e, i.active = 3 == e
			}
			start() {}
		};
		n([i(cc.Label)], a.prototype, "lbCount", void 0), n([i(cc.Label)], a.prototype, "lbProvince",
				void 0), n([i(cc.Label)], a.prototype, "lbSheepCount", void 0), a = n([s], a), o
			.default = a, cc._RF.pop()
	}, {}],
	personal: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "ccdcfAnNrJCUIcsHwNpnG3m", "personal");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const {
			ccclass: s,
			property: i
		} = cc._decorator;
		let a = class extends cc.Component {
			constructor() {
				super(...arguments), this.PersonalPage = null, this.ServerPage = null, this
					.comitBtn = null
			}
			SetComplete(e) {
				this.CloseCall = e
			}
			onEnable() {}
			OnBtnCommit() {
				this.node.active = !1, this.CloseCall && this.CloseCall()
			}
			OnBtnRefuse() {
				const e = window.qg;
				e && e.exitApplication();
				const t = window.qq;
				t && t.exitMiniProgram(() => {}, () => {}, () => {})
			}
			OnBtnLook() {
				this.PersonalPage.active = !0
			}
			OnBtnConfirm() {
				this.PersonalPage.active = !1
			}
			OnBtnServer() {
				this.ServerPage.active = !0
			}
			OnBtncloseServer() {
				this.ServerPage.active = !1
			}
			onBtnGou() {}
			changeBtn() {}
		};
		n([i({
			type: cc.Node,
			displayName: "\u9690\u79c1\u754c\u9762"
		})], a.prototype, "PersonalPage", void 0), n([i({
			type: cc.Node,
			displayName: "\u670d\u52a1\u754c\u9762"
		})], a.prototype, "ServerPage", void 0), n([i({
			type: cc.Button
		})], a.prototype, "comitBtn", void 0), a = n([s], a), o.default = a, cc._RF.pop()
	}, {}],
	physics_tool: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "37215Xd7E9LzqOQY7ank8R7", "physics_tool"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			});
		const n = e("./node_component");
		o.default = class {
			static openPhysics(e = !1) {
				cc.director.getPhysicsManager().enabled = !0, e && (cc.director
					.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits
					.e_aabbBit | cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager
					.DrawBits.e_shapeBit)
			}
			static openCollision(e = !1) {
				let t = cc.director.getCollisionManager();
				t.enabled = !0, t.enabledDebugDraw = e, t.enabledDrawBoundingBox = e
			}
			static closePhysics() {
				cc.director.getPhysicsManager().enabled = !1
			}
			static setRigidBodyLinearVelocity(e, t = cc.v2(), o = !1) {
				let n = e;
				return o && (t.x += n.linearVelocity.x, t.y += n.linearVelocity.y), n
					.linearVelocity = t, n
			}
			static showParabola(e, t, o, n, s) {
				e.clear();
				let i = .05,
					a = Math.max(t.x, t.y);
				a > 2e3 ? i = .02 : a > 1e3 && (i = .03);
				let r = !1;
				for (let c = 0; c < 150; c++) {
					const a = i * c,
						l = t.x * a,
						d = t.y * a + .5 * n * a * a,
						u = o.x + l,
						h = o.y + d;
					s ? r ? (e.lineTo(u, h), r = !1) : (e.moveTo(u, h), r = !0) : 0 == c ? e
						.moveTo(u, h) : e.lineTo(u, h)
				}
				e.stroke()
			}
			static calcBombLinearV(e, t, o, n = null, s = cc.v2(1, 1)) {
				let i = this.calcTowPointDistance(e, t);
				if (i >= n) return cc.v2(0, 0);
				let a = 1 - i / n,
					r = t.x - e.x,
					c = t.y - e.y,
					l = s.x * r * a,
					d = s.y * c * a;
				return l /= Math.sqrt(o), d /= Math.sqrt(o), cc.v2(l, d)
			}
			static calcTowPointDistance(e, t) {
				let o = Math.abs(t.x - e.x),
					n = Math.abs(t.y - e.y);
				return Math.sqrt(Math.pow(o, 2) + Math.pow(n, 2))
			}
			static radianToAngle(e) {
				return 180 * e / Math.PI
			}
			static angleTorDian(e) {
				return e * Math.PI / 180
			}
			static cheatColliderPos(e, t, o) {
				let s = cc.director.getPhysicsManager();
				s.enabled ? (s.enabled = !1, n.default.nextTickRun(e, () => {
					t.setPosition(o), s.enabled = !0
				})) : console.warn(
					"#151 \u8b66\u544a \u975e\u7269\u7406\u5f15\u64ce\u6fc0\u6d3b\u72b6\u6001\u4e0b\u4e0d\u5efa\u8bae\u6b64\u65b9\u6cd5"
					)
			}
			static getAngleOfPosToPos(e, t) {
				return 180 * Math.atan2(t.y - e.y, t.x - e.x) / Math.PI + 90
			}
		}, cc._RF.pop()
	}, {
		"./node_component": "node_component"
	}],
	ping: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "fe561sXEv5BY5bDJkWbETlS", "ping");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../gameEngine"),
			{
				ccclass: i,
				property: a
			} = cc._decorator;
		let r = class extends cc.Component {
			constructor() {
				super(...arguments), this.label = null
			}
			onLoad() {
				s.default.on("ping-time", this.onTimePing.bind(this))
			}
			start() {
				this.label.string = "..."
			}
			onTimePing(e) {
				this.label.string = `${Math.min(e,999)}ms`
			}
		};
		n([a(cc.Label)], r.prototype, "label", void 0), r = n([i], r), o.default = r, cc._RF.pop()
	}, {
		"../gameEngine": "gameEngine"
	}],
	power: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "bcdfb/B9UdMhofbCPqxUKQ7", "power");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../engines/gameEngine"),
			i = e("../../engines/configs/gameConfig"),
			a = e("../../engines/services/userContent/userInterface"),
			r = e("../../engines/libs/data_control"),
			{
				ccclass: c,
				property: l
			} = cc._decorator;
		let d = class extends cc.Component {
			constructor() {
				super(...arguments), this.lbPower = null, this.lbResetPower = null, this
					.InfinityPower = null, this.InfinityPower_Key = "user-logintime", this
					.InfinityModel = "user-is-infinity", this.m_MemberTimeKey =
					"user-membertime"
			}
			start() {
				this.onUpdateTimer(), this.schedule(this.onUpdateTimer.bind(this), 1)
			}
			onUpdateTimer() {
				const e = s.default.getServices().userSrv.getPower(),
					t = s.default.getServices().userSrv.getMaxPower();
				let o = s.services().userSrv.getPowerResetTimer();
				o = Math.max(0, o), e >= t ? (this.lbPower.string = `${e}`, this.lbResetPower
					.string = "00:00") : (this.lbPower.string = `${e}/${t}`, this
					.lbResetPower.string = r.default.getTimeFormatClock(o), s.services()
					.userSrv.onPowerTimerReset());
				let n = Date.now(),
					a = s.default.getServices().localStorageSrv.getStorage(this
						.InfinityPower_Key);
				a ? n - Number(a) >= 864e5 && (0 != Number(s.default.getServices()
						.localStorageSrv.getStorage(this.InfinityModel)) && s.default
					.getServices().userSrv.setPower(i.default.MAX_POWER, !1, !0), s.default
					.getServices().localStorageSrv.setStorage(this.InfinityModel, 0), s
					.default.getServices().localStorageSrv.setStorage(this
						.InfinityPower_Key, n), s.default.getModules().uiControlModule
					.showInfinityPower(i.default.FIRST_PLAY_INFINITY_PROBABILITY, s.default
						.Canvas())) : (s.default.getServices().localStorageSrv.setStorage(
						this.InfinityModel, 0), s.default.getServices().localStorageSrv
					.setStorage(this.InfinityPower_Key, n), s.default.getModules()
					.uiControlModule.showInfinityPower(i.default
						.FIRST_PLAY_INFINITY_PROBABILITY, s.default.Canvas()))
			}
			onBtnAddPower() {
				s.default.getManagers().soundMgr.playSound("anNiu").then(), s.modules()
					.uiControlModule.showUserPropGet(a.REWARD_TYPE.POWER, i.default
						.ADD_ONCE_POWER, null, () => {
							s.default.getModules().uiControlModule.showInfinityPower(i.default
								.CLICK_POWER_INFINITY_PROBABILITY, s.default.Canvas())
						})
			}
			update(e) {}
		};
		n([l(cc.Label)], d.prototype, "lbPower", void 0), n([l(cc.Label)], d.prototype, "lbResetPower",
				void 0), n([l(cc.Prefab)], d.prototype, "InfinityPower", void 0), d = n([c], d), o
			.default = d, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../../engines/gameEngine": "gameEngine",
		"../../engines/libs/data_control": "data_control",
		"../../engines/services/userContent/userInterface": "userInterface"
	}],
	proto: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "013d2fXHcFI6KpbzGm3GCEK", "proto"), o.__esModule = !0, o.MSG = void 0;
		var n = protobuf,
			s = n.Reader,
			i = n.Writer,
			a = n.util,
			r = n.roots.default || (n.roots.default = {}),
			c = r.MSG = function() {
				var e, t, o = {};
				return o.MsgType = (e = {}, (t = Object.create(e))[e[0] = "SYNC"] = 0, t[e[1] =
					"HALL"] = 1, t[e[2] = "GAME"] = 2, t[e[3] = "PING"] = 3, t[e[4] = "PONG"] = 4,
					t[e[5] = "FPS_SYNC"] = 5, t), o.Msg = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.create = function(t) {
						return new e(t)
					}, e.encode = function(e, t) {
						return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
							.call(e, "msgType") && t.uint32(8).int32(e.msgType), t
					}, e.encodeDelimited = function(e, t) {
						return this.encode(e, t).ldelim()
					}, e.decode = function(e, t) {
						e instanceof s || (e = s.create(e));
						for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG.Msg; e
							.pos < o;) {
							var i = e.uint32();
							switch (i >>> 3) {
								case 1:
									n.msgType = e.int32();
									break;
								default:
									e.skipType(7 & i)
							}
						}
						return n
					}, e.decodeDelimited = function(e) {
						return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
					}, e.verify = function(e) {
						if ("object" != typeof e || null === e) return "object expected";
						if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
						.msgType) {
							default:
								return "msgType: enum value expected";
							case 0:
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
						}
						return null
					}, e.fromObject = function(e) {
						if (e instanceof r.MSG.Msg) return e;
						var t = new r.MSG.Msg;
						switch (e.msgType) {
							case "SYNC":
							case 0:
								t.msgType = 0;
								break;
							case "HALL":
							case 1:
								t.msgType = 1;
								break;
							case "GAME":
							case 2:
								t.msgType = 2;
								break;
							case "PING":
							case 3:
								t.msgType = 3;
								break;
							case "PONG":
							case 4:
								t.msgType = 4;
								break;
							case "FPS_SYNC":
							case 5:
								t.msgType = 5
						}
						return t
					}, e.toObject = function(e, t) {
						t || (t = {});
						var o = {};
						return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0),
							null != e.msgType && e.hasOwnProperty("msgType") && (o.msgType = t
								.enums === String ? r.MSG.MsgType[e.msgType] : e.msgType), o
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, n.util.toJSONOptions)
					}, e
				}(), o.SCSubGameSync = function() {
					function e(e) {
						if (this.syncs = [], e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.seat = 0, e.prototype.syncs = a
						.emptyArray, e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							if (t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.seat && Object.hasOwnProperty.call(e, "seat") && t.uint32(16)
								.int32(e.seat), null != e.syncs && e.syncs.length) {
								t.uint32(26).fork();
								for (var o = 0; o < e.syncs.length; ++o) t.float(e.syncs[o]);
								t.ldelim()
							}
							return t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.SCSubGameSync; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.seat = e.int32();
										break;
									case 3:
										if (n.syncs && n.syncs.length || (n.syncs = []), 2 == (7 &
												i))
											for (var a = e.uint32() + e.pos; e.pos < a;) n.syncs
												.push(e.float());
										else n.syncs.push(e.float());
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							if (null != e.seat && e.hasOwnProperty("seat") && !a.isInteger(e.seat))
								return "seat: integer expected";
							if (null != e.syncs && e.hasOwnProperty("syncs")) {
								if (!Array.isArray(e.syncs)) return "syncs: array expected";
								for (var t = 0; t < e.syncs.length; ++t)
									if ("number" != typeof e.syncs[t])
									return "syncs: number[] expected"
							}
							return null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.SCSubGameSync) return e;
							var t = new r.MSG.SCSubGameSync;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							if (null != e.seat && (t.seat = 0 | e.seat), e.syncs) {
								if (!Array.isArray(e.syncs)) throw TypeError(
									".MSG.SCSubGameSync.syncs: array expected");
								t.syncs = [];
								for (var o = 0; o < e.syncs.length; ++o) t.syncs[o] = Number(e
									.syncs[o])
							}
							return t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							if ((t.arrays || t.defaults) && (o.syncs = []), t.defaults && (o
									.msgType = t.enums === String ? "SYNC" : 0, o.seat = 0), null !=
								e.msgType && e.hasOwnProperty("msgType") && (o.msgType = t.enums ===
									String ? r.MSG.MsgType[e.msgType] : e.msgType), null != e
								.seat && e.hasOwnProperty("seat") && (o.seat = e.seat), e.syncs && e
								.syncs.length) {
								o.syncs = [];
								for (var n = 0; n < e.syncs.length; ++n) o.syncs[n] = t.json && !
									isFinite(e.syncs[n]) ? String(e.syncs[n]) : e.syncs[n]
							}
							return o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.SyncMessage = function() {
					function e(e) {
						if (this.syncs = [], e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.fps = 0, e.prototype.syncs = a
						.emptyArray, e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							if (t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.fps && Object.hasOwnProperty.call(e, "fps") && t.uint32(16).int32(e
									.fps), null != e.syncs && e.syncs.length) {
								t.uint32(26).fork();
								for (var o = 0; o < e.syncs.length; ++o) t.int32(e.syncs[o]);
								t.ldelim()
							}
							return t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
								.SyncMessage; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.fps = e.int32();
										break;
									case 3:
										if (n.syncs && n.syncs.length || (n.syncs = []), 2 == (7 &
												i))
											for (var a = e.uint32() + e.pos; e.pos < a;) n.syncs
												.push(e.int32());
										else n.syncs.push(e.int32());
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							if (null != e.fps && e.hasOwnProperty("fps") && !a.isInteger(e.fps))
								return "fps: integer expected";
							if (null != e.syncs && e.hasOwnProperty("syncs")) {
								if (!Array.isArray(e.syncs)) return "syncs: array expected";
								for (var t = 0; t < e.syncs.length; ++t)
									if (!a.isInteger(e.syncs[t])) return "syncs: integer[] expected"
							}
							return null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.SyncMessage) return e;
							var t = new r.MSG.SyncMessage;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							if (null != e.fps && (t.fps = 0 | e.fps), e.syncs) {
								if (!Array.isArray(e.syncs)) throw TypeError(
									".MSG.SyncMessage.syncs: array expected");
								t.syncs = [];
								for (var o = 0; o < e.syncs.length; ++o) t.syncs[o] = 0 | e.syncs[o]
							}
							return t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							if ((t.arrays || t.defaults) && (o.syncs = []), t.defaults && (o
									.msgType = t.enums === String ? "SYNC" : 0, o.fps = 0), null !=
								e.msgType && e.hasOwnProperty("msgType") && (o.msgType = t.enums ===
									String ? r.MSG.MsgType[e.msgType] : e.msgType), null != e.fps &&
								e.hasOwnProperty("fps") && (o.fps = e.fps), e.syncs && e.syncs
								.length) {
								o.syncs = [];
								for (var n = 0; n < e.syncs.length; ++n) o.syncs[n] = e.syncs[n]
							}
							return o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.FpsSyncListMsg = function() {
					function e(e) {
						if (this.seat = [], this.list = [], e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.frame = 0, e.prototype.seat = a
						.emptyArray, e.prototype.list = a.emptyArray, e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							if (t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.frame && Object.hasOwnProperty.call(e, "frame") && t.uint32(16)
								.int32(e.frame), null != e.seat && e.seat.length) {
								t.uint32(26).fork();
								for (var o = 0; o < e.seat.length; ++o) t.int32(e.seat[o]);
								t.ldelim()
							}
							if (null != e.list && e.list.length)
								for (o = 0; o < e.list.length; ++o) r.MSG.SyncMessage.encode(e.list[
									o], t.uint32(34).fork()).ldelim();
							return t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.FpsSyncListMsg; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.frame = e.int32();
										break;
									case 3:
										if (n.seat && n.seat.length || (n.seat = []), 2 == (7 & i))
											for (var a = e.uint32() + e.pos; e.pos < a;) n.seat
												.push(e.int32());
										else n.seat.push(e.int32());
										break;
									case 4:
										n.list && n.list.length || (n.list = []), n.list.push(r.MSG
											.SyncMessage.decode(e, e.uint32()));
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							if (null != e.frame && e.hasOwnProperty("frame") && !a.isInteger(e
									.frame)) return "frame: integer expected";
							if (null != e.seat && e.hasOwnProperty("seat")) {
								if (!Array.isArray(e.seat)) return "seat: array expected";
								for (var t = 0; t < e.seat.length; ++t)
									if (!a.isInteger(e.seat[t])) return "seat: integer[] expected"
							}
							if (null != e.list && e.hasOwnProperty("list")) {
								if (!Array.isArray(e.list)) return "list: array expected";
								for (t = 0; t < e.list.length; ++t) {
									var o = r.MSG.SyncMessage.verify(e.list[t]);
									if (o) return "list." + o
								}
							}
							return null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.FpsSyncListMsg) return e;
							var t = new r.MSG.FpsSyncListMsg;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							if (null != e.frame && (t.frame = 0 | e.frame), e.seat) {
								if (!Array.isArray(e.seat)) throw TypeError(
									".MSG.FpsSyncListMsg.seat: array expected");
								t.seat = [];
								for (var o = 0; o < e.seat.length; ++o) t.seat[o] = 0 | e.seat[o]
							}
							if (e.list) {
								if (!Array.isArray(e.list)) throw TypeError(
									".MSG.FpsSyncListMsg.list: array expected");
								for (t.list = [], o = 0; o < e.list.length; ++o) {
									if ("object" != typeof e.list[o]) throw TypeError(
										".MSG.FpsSyncListMsg.list: object expected");
									t.list[o] = r.MSG.SyncMessage.fromObject(e.list[o])
								}
							}
							return t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							if ((t.arrays || t.defaults) && (o.seat = [], o.list = []), t
								.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o.frame =
									0), null != e.msgType && e.hasOwnProperty("msgType") && (o
									.msgType = t.enums === String ? r.MSG.MsgType[e.msgType] : e
									.msgType), null != e.frame && e.hasOwnProperty("frame") && (o
									.frame = e.frame), e.seat && e.seat.length) {
								o.seat = [];
								for (var n = 0; n < e.seat.length; ++n) o.seat[n] = e.seat[n]
							}
							if (e.list && e.list.length)
								for (o.list = [], n = 0; n < e.list.length; ++n) o.list[n] = r.MSG
									.SyncMessage.toObject(e.list[n], t);
							return o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.HallMsg = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.hallHead = 0, e.create = function(
					t) {
						return new e(t)
					}, e.encode = function(e, t) {
						return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
							.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
							.hallHead && Object.hasOwnProperty.call(e, "hallHead") && t.uint32(
								16).int32(e.hallHead), t
					}, e.encodeDelimited = function(e, t) {
						return this.encode(e, t).ldelim()
					}, e.decode = function(e, t) {
						e instanceof s || (e = s.create(e));
						for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG.HallMsg; e
							.pos < o;) {
							var i = e.uint32();
							switch (i >>> 3) {
								case 1:
									n.msgType = e.int32();
									break;
								case 2:
									n.hallHead = e.int32();
									break;
								default:
									e.skipType(7 & i)
							}
						}
						return n
					}, e.decodeDelimited = function(e) {
						return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
					}, e.verify = function(e) {
						if ("object" != typeof e || null === e) return "object expected";
						if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
						.msgType) {
							default:
								return "msgType: enum value expected";
							case 0:
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
						}
						return null != e.hallHead && e.hasOwnProperty("hallHead") && !a
							.isInteger(e.hallHead) ? "hallHead: integer expected" : null
					}, e.fromObject = function(e) {
						if (e instanceof r.MSG.HallMsg) return e;
						var t = new r.MSG.HallMsg;
						switch (e.msgType) {
							case "SYNC":
							case 0:
								t.msgType = 0;
								break;
							case "HALL":
							case 1:
								t.msgType = 1;
								break;
							case "GAME":
							case 2:
								t.msgType = 2;
								break;
							case "PING":
							case 3:
								t.msgType = 3;
								break;
							case "PONG":
							case 4:
								t.msgType = 4;
								break;
							case "FPS_SYNC":
							case 5:
								t.msgType = 5
						}
						return null != e.hallHead && (t.hallHead = 0 | e.hallHead), t
					}, e.toObject = function(e, t) {
						t || (t = {});
						var o = {};
						return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
								.hallHead = 0), null != e.msgType && e.hasOwnProperty(
							"msgType") && (o.msgType = t.enums === String ? r.MSG.MsgType[e
								.msgType] : e.msgType), null != e.hallHead && e.hasOwnProperty(
								"hallHead") && (o.hallHead = e.hallHead), o
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, n.util.toJSONOptions)
					}, e
				}(), o.GameMsg = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG.GameMsg; e
								.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId) ? "gameId: integer expected" : null != e.gameHead && e
								.hasOwnProperty("gameHead") && !a.isInteger(e.gameHead) ?
								"gameHead: integer expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.GameMsg) return e;
							var t = new r.MSG.GameMsg;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.gameId && (t.gameId = 0 | e.gameId), null != e
								.gameHead && (t.gameHead = 0 | e.gameHead), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.gameId = 0, o.gameHead = 0), null != e.msgType && e
								.hasOwnProperty("msgType") && (o.msgType = t.enums === String ? r
									.MSG.MsgType[e.msgType] : e.msgType), null != e.gameId && e
								.hasOwnProperty("gameId") && (o.gameId = e.gameId), null != e
								.gameHead && e.hasOwnProperty("gameHead") && (o.gameHead = e
									.gameHead), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.CSubLoginServer = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.hallHead = 0, e.prototype.userId =
						"", e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.hallHead && Object.hasOwnProperty.call(e, "hallHead") && t.uint32(
									16).int32(e.hallHead), null != e.userId && Object.hasOwnProperty
								.call(e, "userId") && t.uint32(26).string(e.userId), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.CSubLoginServer; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.hallHead = e.int32();
										break;
									case 3:
										n.userId = e.string();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.hallHead && e.hasOwnProperty("hallHead") && !a
								.isInteger(e.hallHead) ? "hallHead: integer expected" : null != e
								.userId && e.hasOwnProperty("userId") && !a.isString(e.userId) ?
								"userId: string expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.CSubLoginServer) return e;
							var t = new r.MSG.CSubLoginServer;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.hallHead && (t.hallHead = 0 | e.hallHead), null != e
								.userId && (t.userId = String(e.userId)), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.hallHead = 0, o.userId = ""), null != e.msgType && e
								.hasOwnProperty("msgType") && (o.msgType = t.enums === String ? r
									.MSG.MsgType[e.msgType] : e.msgType), null != e.hallHead && e
								.hasOwnProperty("hallHead") && (o.hallHead = e.hallHead), null != e
								.userId && e.hasOwnProperty("userId") && (o.userId = e.userId), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.SSubLoginServer = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.hallHead = 0, e.prototype.userId =
						"", e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.hallHead && Object.hasOwnProperty.call(e, "hallHead") && t.uint32(
									16).int32(e.hallHead), null != e.userId && Object.hasOwnProperty
								.call(e, "userId") && t.uint32(26).string(e.userId), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.SSubLoginServer; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.hallHead = e.int32();
										break;
									case 3:
										n.userId = e.string();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.hallHead && e.hasOwnProperty("hallHead") && !a
								.isInteger(e.hallHead) ? "hallHead: integer expected" : null != e
								.userId && e.hasOwnProperty("userId") && !a.isString(e.userId) ?
								"userId: string expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.SSubLoginServer) return e;
							var t = new r.MSG.SSubLoginServer;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.hallHead && (t.hallHead = 0 | e.hallHead), null != e
								.userId && (t.userId = String(e.userId)), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.hallHead = 0, o.userId = ""), null != e.msgType && e
								.hasOwnProperty("msgType") && (o.msgType = t.enums === String ? r
									.MSG.MsgType[e.msgType] : e.msgType), null != e.hallHead && e
								.hasOwnProperty("hallHead") && (o.hallHead = e.hallHead), null != e
								.userId && e.hasOwnProperty("userId") && (o.userId = e.userId), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.CSubLogoutGame = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.hallHead = 0, e.create = function(
					t) {
						return new e(t)
					}, e.encode = function(e, t) {
						return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
							.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
							.hallHead && Object.hasOwnProperty.call(e, "hallHead") && t.uint32(
								16).int32(e.hallHead), t
					}, e.encodeDelimited = function(e, t) {
						return this.encode(e, t).ldelim()
					}, e.decode = function(e, t) {
						e instanceof s || (e = s.create(e));
						for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
								.CSubLogoutGame; e.pos < o;) {
							var i = e.uint32();
							switch (i >>> 3) {
								case 1:
									n.msgType = e.int32();
									break;
								case 2:
									n.hallHead = e.int32();
									break;
								default:
									e.skipType(7 & i)
							}
						}
						return n
					}, e.decodeDelimited = function(e) {
						return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
					}, e.verify = function(e) {
						if ("object" != typeof e || null === e) return "object expected";
						if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
						.msgType) {
							default:
								return "msgType: enum value expected";
							case 0:
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
						}
						return null != e.hallHead && e.hasOwnProperty("hallHead") && !a
							.isInteger(e.hallHead) ? "hallHead: integer expected" : null
					}, e.fromObject = function(e) {
						if (e instanceof r.MSG.CSubLogoutGame) return e;
						var t = new r.MSG.CSubLogoutGame;
						switch (e.msgType) {
							case "SYNC":
							case 0:
								t.msgType = 0;
								break;
							case "HALL":
							case 1:
								t.msgType = 1;
								break;
							case "GAME":
							case 2:
								t.msgType = 2;
								break;
							case "PING":
							case 3:
								t.msgType = 3;
								break;
							case "PONG":
							case 4:
								t.msgType = 4;
								break;
							case "FPS_SYNC":
							case 5:
								t.msgType = 5
						}
						return null != e.hallHead && (t.hallHead = 0 | e.hallHead), t
					}, e.toObject = function(e, t) {
						t || (t = {});
						var o = {};
						return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
								.hallHead = 0), null != e.msgType && e.hasOwnProperty(
							"msgType") && (o.msgType = t.enums === String ? r.MSG.MsgType[e
								.msgType] : e.msgType), null != e.hallHead && e.hasOwnProperty(
								"hallHead") && (o.hallHead = e.hallHead), o
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, n.util.toJSONOptions)
					}, e
				}(), o.SSubLogoutGame = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.hallHead = 0, e.create = function(
					t) {
						return new e(t)
					}, e.encode = function(e, t) {
						return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
							.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
							.hallHead && Object.hasOwnProperty.call(e, "hallHead") && t.uint32(
								16).int32(e.hallHead), t
					}, e.encodeDelimited = function(e, t) {
						return this.encode(e, t).ldelim()
					}, e.decode = function(e, t) {
						e instanceof s || (e = s.create(e));
						for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
								.SSubLogoutGame; e.pos < o;) {
							var i = e.uint32();
							switch (i >>> 3) {
								case 1:
									n.msgType = e.int32();
									break;
								case 2:
									n.hallHead = e.int32();
									break;
								default:
									e.skipType(7 & i)
							}
						}
						return n
					}, e.decodeDelimited = function(e) {
						return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
					}, e.verify = function(e) {
						if ("object" != typeof e || null === e) return "object expected";
						if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
						.msgType) {
							default:
								return "msgType: enum value expected";
							case 0:
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
						}
						return null != e.hallHead && e.hasOwnProperty("hallHead") && !a
							.isInteger(e.hallHead) ? "hallHead: integer expected" : null
					}, e.fromObject = function(e) {
						if (e instanceof r.MSG.SSubLogoutGame) return e;
						var t = new r.MSG.SSubLogoutGame;
						switch (e.msgType) {
							case "SYNC":
							case 0:
								t.msgType = 0;
								break;
							case "HALL":
							case 1:
								t.msgType = 1;
								break;
							case "GAME":
							case 2:
								t.msgType = 2;
								break;
							case "PING":
							case 3:
								t.msgType = 3;
								break;
							case "PONG":
							case 4:
								t.msgType = 4;
								break;
							case "FPS_SYNC":
							case 5:
								t.msgType = 5
						}
						return null != e.hallHead && (t.hallHead = 0 | e.hallHead), t
					}, e.toObject = function(e, t) {
						t || (t = {});
						var o = {};
						return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
								.hallHead = 0), null != e.msgType && e.hasOwnProperty(
							"msgType") && (o.msgType = t.enums === String ? r.MSG.MsgType[e
								.msgType] : e.msgType), null != e.hallHead && e.hasOwnProperty(
								"hallHead") && (o.hallHead = e.hallHead), o
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, n.util.toJSONOptions)
					}, e
				}(), o.CSubLoginGame = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.hallHead = 0, e.prototype.gameId =
						0, e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.hallHead && Object.hasOwnProperty.call(e, "hallHead") && t.uint32(
									16).int32(e.hallHead), null != e.gameId && Object.hasOwnProperty
								.call(e, "gameId") && t.uint32(24).int32(e.gameId), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.CSubLoginGame; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.hallHead = e.int32();
										break;
									case 3:
										n.gameId = e.int32();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.hallHead && e.hasOwnProperty("hallHead") && !a
								.isInteger(e.hallHead) ? "hallHead: integer expected" : null != e
								.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e.gameId) ?
								"gameId: integer expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.CSubLoginGame) return e;
							var t = new r.MSG.CSubLoginGame;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.hallHead && (t.hallHead = 0 | e.hallHead), null != e
								.gameId && (t.gameId = 0 | e.gameId), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.hallHead = 0, o.gameId = 0), null != e.msgType && e
								.hasOwnProperty("msgType") && (o.msgType = t.enums === String ? r
									.MSG.MsgType[e.msgType] : e.msgType), null != e.hallHead && e
								.hasOwnProperty("hallHead") && (o.hallHead = e.hallHead), null != e
								.gameId && e.hasOwnProperty("gameId") && (o.gameId = e.gameId), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.SSubLoginGame = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.hallHead = 0, e.prototype.gameId =
						0, e.prototype.loginCode = 0, e.prototype.loginMsg = "", e.create =
						function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.hallHead && Object.hasOwnProperty.call(e, "hallHead") && t.uint32(
									16).int32(e.hallHead), null != e.gameId && Object.hasOwnProperty
								.call(e, "gameId") && t.uint32(24).int32(e.gameId), null != e
								.loginCode && Object.hasOwnProperty.call(e, "loginCode") && t
								.uint32(32).int32(e.loginCode), null != e.loginMsg && Object
								.hasOwnProperty.call(e, "loginMsg") && t.uint32(42).string(e
									.loginMsg), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.SSubLoginGame; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.hallHead = e.int32();
										break;
									case 3:
										n.gameId = e.int32();
										break;
									case 4:
										n.loginCode = e.int32();
										break;
									case 5:
										n.loginMsg = e.string();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.hallHead && e.hasOwnProperty("hallHead") && !a
								.isInteger(e.hallHead) ? "hallHead: integer expected" : null != e
								.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e.gameId) ?
								"gameId: integer expected" : null != e.loginCode && e
								.hasOwnProperty("loginCode") && !a.isInteger(e.loginCode) ?
								"loginCode: integer expected" : null != e.loginMsg && e
								.hasOwnProperty("loginMsg") && !a.isString(e.loginMsg) ?
								"loginMsg: string expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.SSubLoginGame) return e;
							var t = new r.MSG.SSubLoginGame;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.hallHead && (t.hallHead = 0 | e.hallHead), null != e
								.gameId && (t.gameId = 0 | e.gameId), null != e.loginCode && (t
									.loginCode = 0 | e.loginCode), null != e.loginMsg && (t
									.loginMsg = String(e.loginMsg)), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.hallHead = 0, o.gameId = 0, o.loginCode = 0, o.loginMsg = ""),
								null != e.msgType && e.hasOwnProperty("msgType") && (o.msgType = t
									.enums === String ? r.MSG.MsgType[e.msgType] : e.msgType),
								null != e.hallHead && e.hasOwnProperty("hallHead") && (o.hallHead =
									e.hallHead), null != e.gameId && e.hasOwnProperty("gameId") && (
									o.gameId = e.gameId), null != e.loginCode && e.hasOwnProperty(
									"loginCode") && (o.loginCode = e.loginCode), null != e
								.loginMsg && e.hasOwnProperty("loginMsg") && (o.loginMsg = e
									.loginMsg), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.CSubExitRoom = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.CSubExitRoom; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId) ? "gameId: integer expected" : null != e.gameHead && e
								.hasOwnProperty("gameHead") && !a.isInteger(e.gameHead) ?
								"gameHead: integer expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.CSubExitRoom) return e;
							var t = new r.MSG.CSubExitRoom;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.gameId && (t.gameId = 0 | e.gameId), null != e
								.gameHead && (t.gameHead = 0 | e.gameHead), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.gameId = 0, o.gameHead = 0), null != e.msgType && e
								.hasOwnProperty("msgType") && (o.msgType = t.enums === String ? r
									.MSG.MsgType[e.msgType] : e.msgType), null != e.gameId && e
								.hasOwnProperty("gameId") && (o.gameId = e.gameId), null != e
								.gameHead && e.hasOwnProperty("gameHead") && (o.gameHead = e
									.gameHead), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.SSubExitRoom = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.prototype.uid = "", e.prototype.rid = 0, e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), null != e
								.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(34).string(
									e.uid), null != e.rid && Object.hasOwnProperty.call(e, "rid") &&
								t.uint32(40).int32(e.rid), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.SSubExitRoom; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									case 4:
										n.uid = e.string();
										break;
									case 5:
										n.rid = e.int32();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId) ? "gameId: integer expected" : null != e.gameHead && e
								.hasOwnProperty("gameHead") && !a.isInteger(e.gameHead) ?
								"gameHead: integer expected" : null != e.uid && e.hasOwnProperty(
									"uid") && !a.isString(e.uid) ? "uid: string expected" : null !=
								e.rid && e.hasOwnProperty("rid") && !a.isInteger(e.rid) ?
								"rid: integer expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.SSubExitRoom) return e;
							var t = new r.MSG.SSubExitRoom;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.gameId && (t.gameId = 0 | e.gameId), null != e
								.gameHead && (t.gameHead = 0 | e.gameHead), null != e.uid && (t
									.uid = String(e.uid)), null != e.rid && (t.rid = 0 | e.rid), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.gameId = 0, o.gameHead = 0, o.uid = "", o.rid = 0), null != e
								.msgType && e.hasOwnProperty("msgType") && (o.msgType = t.enums ===
									String ? r.MSG.MsgType[e.msgType] : e.msgType), null != e
								.gameId && e.hasOwnProperty("gameId") && (o.gameId = e.gameId),
								null != e.gameHead && e.hasOwnProperty("gameHead") && (o.gameHead =
									e.gameHead), null != e.uid && e.hasOwnProperty("uid") && (o
									.uid = e.uid), null != e.rid && e.hasOwnProperty("rid") && (o
									.rid = e.rid), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.CSubMatchRoom = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.prototype.rmId = 0, e.prototype.name = "", e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), null != e
								.rmId && Object.hasOwnProperty.call(e, "rmId") && t.uint32(32)
								.int32(e.rmId), null != e.name && Object.hasOwnProperty.call(e,
									"name") && t.uint32(42).string(e.name), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.CSubMatchRoom; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									case 4:
										n.rmId = e.int32();
										break;
									case 5:
										n.name = e.string();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId) ? "gameId: integer expected" : null != e.gameHead && e
								.hasOwnProperty("gameHead") && !a.isInteger(e.gameHead) ?
								"gameHead: integer expected" : null != e.rmId && e.hasOwnProperty(
									"rmId") && !a.isInteger(e.rmId) ? "rmId: integer expected" :
								null != e.name && e.hasOwnProperty("name") && !a.isString(e.name) ?
								"name: string expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.CSubMatchRoom) return e;
							var t = new r.MSG.CSubMatchRoom;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.gameId && (t.gameId = 0 | e.gameId), null != e
								.gameHead && (t.gameHead = 0 | e.gameHead), null != e.rmId && (t
									.rmId = 0 | e.rmId), null != e.name && (t.name = String(e
								.name)), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.gameId = 0, o.gameHead = 0, o.rmId = 0, o.name = ""), null != e
								.msgType && e.hasOwnProperty("msgType") && (o.msgType = t.enums ===
									String ? r.MSG.MsgType[e.msgType] : e.msgType), null != e
								.gameId && e.hasOwnProperty("gameId") && (o.gameId = e.gameId),
								null != e.gameHead && e.hasOwnProperty("gameHead") && (o.gameHead =
									e.gameHead), null != e.rmId && e.hasOwnProperty("rmId") && (o
									.rmId = e.rmId), null != e.name && e.hasOwnProperty("name") && (
									o.name = e.name), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.SSubMatchRoom = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.prototype.roomId = 0, e.prototype.userId = "", e.prototype.seatI = 0, e
						.prototype.roomName = "", e.prototype.userName = "", e.create = function(
						t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), null != e
								.roomId && Object.hasOwnProperty.call(e, "roomId") && t.uint32(32)
								.int32(e.roomId), null != e.userId && Object.hasOwnProperty.call(e,
									"userId") && t.uint32(42).string(e.userId), null != e.seatI &&
								Object.hasOwnProperty.call(e, "seatI") && t.uint32(48).int32(e
									.seatI), null != e.roomName && Object.hasOwnProperty.call(e,
									"roomName") && t.uint32(58).string(e.roomName), null != e
								.userName && Object.hasOwnProperty.call(e, "userName") && t.uint32(
									66).string(e.userName), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.SSubMatchRoom; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									case 4:
										n.roomId = e.int32();
										break;
									case 5:
										n.userId = e.string();
										break;
									case 6:
										n.seatI = e.int32();
										break;
									case 7:
										n.roomName = e.string();
										break;
									case 8:
										n.userName = e.string();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId) ? "gameId: integer expected" : null != e.gameHead && e
								.hasOwnProperty("gameHead") && !a.isInteger(e.gameHead) ?
								"gameHead: integer expected" : null != e.roomId && e.hasOwnProperty(
									"roomId") && !a.isInteger(e.roomId) ?
								"roomId: integer expected" : null != e.userId && e.hasOwnProperty(
									"userId") && !a.isString(e.userId) ? "userId: string expected" :
								null != e.seatI && e.hasOwnProperty("seatI") && !a.isInteger(e
									.seatI) ? "seatI: integer expected" : null != e.roomName && e
								.hasOwnProperty("roomName") && !a.isString(e.roomName) ?
								"roomName: string expected" : null != e.userName && e
								.hasOwnProperty("userName") && !a.isString(e.userName) ?
								"userName: string expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.SSubMatchRoom) return e;
							var t = new r.MSG.SSubMatchRoom;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.gameId && (t.gameId = 0 | e.gameId), null != e
								.gameHead && (t.gameHead = 0 | e.gameHead), null != e.roomId && (t
									.roomId = 0 | e.roomId), null != e.userId && (t.userId = String(
									e.userId)), null != e.seatI && (t.seatI = 0 | e.seatI), null !=
								e.roomName && (t.roomName = String(e.roomName)), null != e
								.userName && (t.userName = String(e.userName)), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.gameId = 0, o.gameHead = 0, o.roomId = 0, o.userId = "", o
									.seatI = 0, o.roomName = "", o.userName = ""), null != e
								.msgType && e.hasOwnProperty("msgType") && (o.msgType = t.enums ===
									String ? r.MSG.MsgType[e.msgType] : e.msgType), null != e
								.gameId && e.hasOwnProperty("gameId") && (o.gameId = e.gameId),
								null != e.gameHead && e.hasOwnProperty("gameHead") && (o.gameHead =
									e.gameHead), null != e.roomId && e.hasOwnProperty("roomId") && (
									o.roomId = e.roomId), null != e.userId && e.hasOwnProperty(
									"userId") && (o.userId = e.userId), null != e.seatI && e
								.hasOwnProperty("seatI") && (o.seatI = e.seatI), null != e
								.roomName && e.hasOwnProperty("roomName") && (o.roomName = e
									.roomName), null != e.userName && e.hasOwnProperty(
								"userName") && (o.userName = e.userName), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.CSubGetHostUid = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.CSubGetHostUid; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId) ? "gameId: integer expected" : null != e.gameHead && e
								.hasOwnProperty("gameHead") && !a.isInteger(e.gameHead) ?
								"gameHead: integer expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.CSubGetHostUid) return e;
							var t = new r.MSG.CSubGetHostUid;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.gameId && (t.gameId = 0 | e.gameId), null != e
								.gameHead && (t.gameHead = 0 | e.gameHead), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.gameId = 0, o.gameHead = 0), null != e.msgType && e
								.hasOwnProperty("msgType") && (o.msgType = t.enums === String ? r
									.MSG.MsgType[e.msgType] : e.msgType), null != e.gameId && e
								.hasOwnProperty("gameId") && (o.gameId = e.gameId), null != e
								.gameHead && e.hasOwnProperty("gameHead") && (o.gameHead = e
									.gameHead), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.SSubRushLogin = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.SSubRushLogin; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId) ? "gameId: integer expected" : null != e.gameHead && e
								.hasOwnProperty("gameHead") && !a.isInteger(e.gameHead) ?
								"gameHead: integer expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.SSubRushLogin) return e;
							var t = new r.MSG.SSubRushLogin;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.gameId && (t.gameId = 0 | e.gameId), null != e
								.gameHead && (t.gameHead = 0 | e.gameHead), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.gameId = 0, o.gameHead = 0), null != e.msgType && e
								.hasOwnProperty("msgType") && (o.msgType = t.enums === String ? r
									.MSG.MsgType[e.msgType] : e.msgType), null != e.gameId && e
								.hasOwnProperty("gameId") && (o.gameId = e.gameId), null != e
								.gameHead && e.hasOwnProperty("gameHead") && (o.gameHead = e
									.gameHead), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.SSubUpdateHostUid = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.prototype.uid = "", e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), null != e
								.uid && Object.hasOwnProperty.call(e, "uid") && t.uint32(34).string(
									e.uid), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.SSubUpdateHostUid; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									case 4:
										n.uid = e.string();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId) ? "gameId: integer expected" : null != e.gameHead && e
								.hasOwnProperty("gameHead") && !a.isInteger(e.gameHead) ?
								"gameHead: integer expected" : null != e.uid && e.hasOwnProperty(
									"uid") && !a.isString(e.uid) ? "uid: string expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.SSubUpdateHostUid) return e;
							var t = new r.MSG.SSubUpdateHostUid;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.gameId && (t.gameId = 0 | e.gameId), null != e
								.gameHead && (t.gameHead = 0 | e.gameHead), null != e.uid && (t
									.uid = String(e.uid)), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.gameId = 0, o.gameHead = 0, o.uid = ""), null != e.msgType && e
								.hasOwnProperty("msgType") && (o.msgType = t.enums === String ? r
									.MSG.MsgType[e.msgType] : e.msgType), null != e.gameId && e
								.hasOwnProperty("gameId") && (o.gameId = e.gameId), null != e
								.gameHead && e.hasOwnProperty("gameHead") && (o.gameHead = e
									.gameHead), null != e.uid && e.hasOwnProperty("uid") && (o.uid =
									e.uid), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.CSubPlaneMove = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.prototype.x = 0, e.prototype.y = 0, e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), null != e.x &&
								Object.hasOwnProperty.call(e, "x") && t.uint32(37).float(e.x),
								null != e.y && Object.hasOwnProperty.call(e, "y") && t.uint32(45)
								.float(e.y), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.CSubPlaneMove; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									case 4:
										n.x = e.float();
										break;
									case 5:
										n.y = e.float();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId) ? "gameId: integer expected" : null != e.gameHead && e
								.hasOwnProperty("gameHead") && !a.isInteger(e.gameHead) ?
								"gameHead: integer expected" : null != e.x && e.hasOwnProperty(
								"x") && "number" != typeof e.x ? "x: number expected" : null != e
								.y && e.hasOwnProperty("y") && "number" != typeof e.y ?
								"y: number expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.CSubPlaneMove) return e;
							var t = new r.MSG.CSubPlaneMove;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.gameId && (t.gameId = 0 | e.gameId), null != e
								.gameHead && (t.gameHead = 0 | e.gameHead), null != e.x && (t.x =
									Number(e.x)), null != e.y && (t.y = Number(e.y)), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.gameId = 0, o.gameHead = 0, o.x = 0, o.y = 0), null != e
								.msgType && e.hasOwnProperty("msgType") && (o.msgType = t.enums ===
									String ? r.MSG.MsgType[e.msgType] : e.msgType), null != e
								.gameId && e.hasOwnProperty("gameId") && (o.gameId = e.gameId),
								null != e.gameHead && e.hasOwnProperty("gameHead") && (o.gameHead =
									e.gameHead), null != e.x && e.hasOwnProperty("x") && (o.x = t
									.json && !isFinite(e.x) ? String(e.x) : e.x), null != e.y && e
								.hasOwnProperty("y") && (o.y = t.json && !isFinite(e.y) ? String(e
									.y) : e.y), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.SSubPlaneMove = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.prototype.seat = 0, e.prototype.x = 0, e.prototype.y = 0, e.create =
						function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), null != e
								.seat && Object.hasOwnProperty.call(e, "seat") && t.uint32(32)
								.int32(e.seat), null != e.x && Object.hasOwnProperty.call(e, "x") &&
								t.uint32(45).float(e.x), null != e.y && Object.hasOwnProperty.call(
									e, "y") && t.uint32(53).float(e.y), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.SSubPlaneMove; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									case 4:
										n.seat = e.int32();
										break;
									case 5:
										n.x = e.float();
										break;
									case 6:
										n.y = e.float();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId) ? "gameId: integer expected" : null != e.gameHead && e
								.hasOwnProperty("gameHead") && !a.isInteger(e.gameHead) ?
								"gameHead: integer expected" : null != e.seat && e.hasOwnProperty(
									"seat") && !a.isInteger(e.seat) ? "seat: integer expected" :
								null != e.x && e.hasOwnProperty("x") && "number" != typeof e.x ?
								"x: number expected" : null != e.y && e.hasOwnProperty("y") &&
								"number" != typeof e.y ? "y: number expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.SSubPlaneMove) return e;
							var t = new r.MSG.SSubPlaneMove;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.gameId && (t.gameId = 0 | e.gameId), null != e
								.gameHead && (t.gameHead = 0 | e.gameHead), null != e.seat && (t
									.seat = 0 | e.seat), null != e.x && (t.x = Number(e.x)), null !=
								e.y && (t.y = Number(e.y)), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.gameId = 0, o.gameHead = 0, o.seat = 0, o.x = 0, o.y = 0),
								null != e.msgType && e.hasOwnProperty("msgType") && (o.msgType = t
									.enums === String ? r.MSG.MsgType[e.msgType] : e.msgType),
								null != e.gameId && e.hasOwnProperty("gameId") && (o.gameId = e
									.gameId), null != e.gameHead && e.hasOwnProperty("gameHead") &&
								(o.gameHead = e.gameHead), null != e.seat && e.hasOwnProperty(
									"seat") && (o.seat = e.seat), null != e.x && e.hasOwnProperty(
									"x") && (o.x = t.json && !isFinite(e.x) ? String(e.x) : e.x),
								null != e.y && e.hasOwnProperty("y") && (o.y = t.json && !isFinite(e
									.y) ? String(e.y) : e.y), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.SSubObGameStart = function() {
					function e(e) {
						if (this.pUidList = [], this.pSeatList = [], this.pNameList = [], this
							.pScoreList = [], this.pPosXList = [], this.pPosYList = [], e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.prototype.pUidList = a.emptyArray, e.prototype.pSeatList = a
						.emptyArray, e.prototype.pNameList = a.emptyArray, e.prototype.pScoreList =
						a.emptyArray, e.prototype.pPosXList = a.emptyArray, e.prototype.pPosYList =
						a.emptyArray, e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							if (t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), null != e
								.pUidList && e.pUidList.length)
								for (var o = 0; o < e.pUidList.length; ++o) t.uint32(34).string(e
									.pUidList[o]);
							if (null != e.pSeatList && e.pSeatList.length) {
								for (t.uint32(42).fork(), o = 0; o < e.pSeatList.length; ++o) t
									.int32(e.pSeatList[o]);
								t.ldelim()
							}
							if (null != e.pNameList && e.pNameList.length)
								for (o = 0; o < e.pNameList.length; ++o) t.uint32(50).string(e
									.pNameList[o]);
							if (null != e.pScoreList && e.pScoreList.length) {
								for (t.uint32(58).fork(), o = 0; o < e.pScoreList.length; ++o) t
									.int32(e.pScoreList[o]);
								t.ldelim()
							}
							if (null != e.pPosXList && e.pPosXList.length) {
								for (t.uint32(66).fork(), o = 0; o < e.pPosXList.length; ++o) t
									.int32(e.pPosXList[o]);
								t.ldelim()
							}
							if (null != e.pPosYList && e.pPosYList.length) {
								for (t.uint32(74).fork(), o = 0; o < e.pPosYList.length; ++o) t
									.int32(e.pPosYList[o]);
								t.ldelim()
							}
							return t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.SSubObGameStart; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									case 4:
										n.pUidList && n.pUidList.length || (n.pUidList = []), n
											.pUidList.push(e.string());
										break;
									case 5:
										if (n.pSeatList && n.pSeatList.length || (n.pSeatList = []),
											2 == (7 & i))
											for (var a = e.uint32() + e.pos; e.pos < a;) n.pSeatList
												.push(e.int32());
										else n.pSeatList.push(e.int32());
										break;
									case 6:
										n.pNameList && n.pNameList.length || (n.pNameList = []), n
											.pNameList.push(e.string());
										break;
									case 7:
										if (n.pScoreList && n.pScoreList.length || (n
											.pScoreList = []), 2 == (7 & i))
											for (a = e.uint32() + e.pos; e.pos < a;) n.pScoreList
												.push(e.int32());
										else n.pScoreList.push(e.int32());
										break;
									case 8:
										if (n.pPosXList && n.pPosXList.length || (n.pPosXList = []),
											2 == (7 & i))
											for (a = e.uint32() + e.pos; e.pos < a;) n.pPosXList
												.push(e.int32());
										else n.pPosXList.push(e.int32());
										break;
									case 9:
										if (n.pPosYList && n.pPosYList.length || (n.pPosYList = []),
											2 == (7 & i))
											for (a = e.uint32() + e.pos; e.pos < a;) n.pPosYList
												.push(e.int32());
										else n.pPosYList.push(e.int32());
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							if (null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId)) return "gameId: integer expected";
							if (null != e.gameHead && e.hasOwnProperty("gameHead") && !a.isInteger(e
									.gameHead)) return "gameHead: integer expected";
							if (null != e.pUidList && e.hasOwnProperty("pUidList")) {
								if (!Array.isArray(e.pUidList)) return "pUidList: array expected";
								for (var t = 0; t < e.pUidList.length; ++t)
									if (!a.isString(e.pUidList[t]))
									return "pUidList: string[] expected"
							}
							if (null != e.pSeatList && e.hasOwnProperty("pSeatList")) {
								if (!Array.isArray(e.pSeatList)) return "pSeatList: array expected";
								for (t = 0; t < e.pSeatList.length; ++t)
									if (!a.isInteger(e.pSeatList[t]))
									return "pSeatList: integer[] expected"
							}
							if (null != e.pNameList && e.hasOwnProperty("pNameList")) {
								if (!Array.isArray(e.pNameList)) return "pNameList: array expected";
								for (t = 0; t < e.pNameList.length; ++t)
									if (!a.isString(e.pNameList[t]))
									return "pNameList: string[] expected"
							}
							if (null != e.pScoreList && e.hasOwnProperty("pScoreList")) {
								if (!Array.isArray(e.pScoreList))
								return "pScoreList: array expected";
								for (t = 0; t < e.pScoreList.length; ++t)
									if (!a.isInteger(e.pScoreList[t]))
									return "pScoreList: integer[] expected"
							}
							if (null != e.pPosXList && e.hasOwnProperty("pPosXList")) {
								if (!Array.isArray(e.pPosXList)) return "pPosXList: array expected";
								for (t = 0; t < e.pPosXList.length; ++t)
									if (!a.isInteger(e.pPosXList[t]))
									return "pPosXList: integer[] expected"
							}
							if (null != e.pPosYList && e.hasOwnProperty("pPosYList")) {
								if (!Array.isArray(e.pPosYList)) return "pPosYList: array expected";
								for (t = 0; t < e.pPosYList.length; ++t)
									if (!a.isInteger(e.pPosYList[t]))
									return "pPosYList: integer[] expected"
							}
							return null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.SSubObGameStart) return e;
							var t = new r.MSG.SSubObGameStart;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							if (null != e.gameId && (t.gameId = 0 | e.gameId), null != e.gameHead &&
								(t.gameHead = 0 | e.gameHead), e.pUidList) {
								if (!Array.isArray(e.pUidList)) throw TypeError(
									".MSG.SSubObGameStart.pUidList: array expected");
								t.pUidList = [];
								for (var o = 0; o < e.pUidList.length; ++o) t.pUidList[o] = String(e
									.pUidList[o])
							}
							if (e.pSeatList) {
								if (!Array.isArray(e.pSeatList)) throw TypeError(
									".MSG.SSubObGameStart.pSeatList: array expected");
								for (t.pSeatList = [], o = 0; o < e.pSeatList.length; ++o) t
									.pSeatList[o] = 0 | e.pSeatList[o]
							}
							if (e.pNameList) {
								if (!Array.isArray(e.pNameList)) throw TypeError(
									".MSG.SSubObGameStart.pNameList: array expected");
								for (t.pNameList = [], o = 0; o < e.pNameList.length; ++o) t
									.pNameList[o] = String(e.pNameList[o])
							}
							if (e.pScoreList) {
								if (!Array.isArray(e.pScoreList)) throw TypeError(
									".MSG.SSubObGameStart.pScoreList: array expected");
								for (t.pScoreList = [], o = 0; o < e.pScoreList.length; ++o) t
									.pScoreList[o] = 0 | e.pScoreList[o]
							}
							if (e.pPosXList) {
								if (!Array.isArray(e.pPosXList)) throw TypeError(
									".MSG.SSubObGameStart.pPosXList: array expected");
								for (t.pPosXList = [], o = 0; o < e.pPosXList.length; ++o) t
									.pPosXList[o] = 0 | e.pPosXList[o]
							}
							if (e.pPosYList) {
								if (!Array.isArray(e.pPosYList)) throw TypeError(
									".MSG.SSubObGameStart.pPosYList: array expected");
								for (t.pPosYList = [], o = 0; o < e.pPosYList.length; ++o) t
									.pPosYList[o] = 0 | e.pPosYList[o]
							}
							return t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							if ((t.arrays || t.defaults) && (o.pUidList = [], o.pSeatList = [], o
									.pNameList = [], o.pScoreList = [], o.pPosXList = [], o
									.pPosYList = []), t.defaults && (o.msgType = t.enums ===
									String ? "SYNC" : 0, o.gameId = 0, o.gameHead = 0), null != e
								.msgType && e.hasOwnProperty("msgType") && (o.msgType = t.enums ===
									String ? r.MSG.MsgType[e.msgType] : e.msgType), null != e
								.gameId && e.hasOwnProperty("gameId") && (o.gameId = e.gameId),
								null != e.gameHead && e.hasOwnProperty("gameHead") && (o.gameHead =
									e.gameHead), e.pUidList && e.pUidList.length) {
								o.pUidList = [];
								for (var n = 0; n < e.pUidList.length; ++n) o.pUidList[n] = e
									.pUidList[n]
							}
							if (e.pSeatList && e.pSeatList.length)
								for (o.pSeatList = [], n = 0; n < e.pSeatList.length; ++n) o
									.pSeatList[n] = e.pSeatList[n];
							if (e.pNameList && e.pNameList.length)
								for (o.pNameList = [], n = 0; n < e.pNameList.length; ++n) o
									.pNameList[n] = e.pNameList[n];
							if (e.pScoreList && e.pScoreList.length)
								for (o.pScoreList = [], n = 0; n < e.pScoreList.length; ++n) o
									.pScoreList[n] = e.pScoreList[n];
							if (e.pPosXList && e.pPosXList.length)
								for (o.pPosXList = [], n = 0; n < e.pPosXList.length; ++n) o
									.pPosXList[n] = e.pPosXList[n];
							if (e.pPosYList && e.pPosYList.length)
								for (o.pPosYList = [], n = 0; n < e.pPosYList.length; ++n) o
									.pPosYList[n] = e.pPosYList[n];
							return o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.SSubNewEnemy = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.prototype.eid = 0, e.prototype.x = 0, e.prototype.y = 0, e.prototype
						.time = 0, e.prototype.hp = 0, e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), null != e
								.eid && Object.hasOwnProperty.call(e, "eid") && t.uint32(32).int32(e
									.eid), null != e.x && Object.hasOwnProperty.call(e, "x") && t
								.uint32(40).int32(e.x), null != e.y && Object.hasOwnProperty.call(e,
									"y") && t.uint32(48).int32(e.y), null != e.time && Object
								.hasOwnProperty.call(e, "time") && t.uint32(56).int32(e.time),
								null != e.hp && Object.hasOwnProperty.call(e, "hp") && t.uint32(64)
								.int32(e.hp), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.SSubNewEnemy; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									case 4:
										n.eid = e.int32();
										break;
									case 5:
										n.x = e.int32();
										break;
									case 6:
										n.y = e.int32();
										break;
									case 7:
										n.time = e.int32();
										break;
									case 8:
										n.hp = e.int32();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId) ? "gameId: integer expected" : null != e.gameHead && e
								.hasOwnProperty("gameHead") && !a.isInteger(e.gameHead) ?
								"gameHead: integer expected" : null != e.eid && e.hasOwnProperty(
									"eid") && !a.isInteger(e.eid) ? "eid: integer expected" :
								null != e.x && e.hasOwnProperty("x") && !a.isInteger(e.x) ?
								"x: integer expected" : null != e.y && e.hasOwnProperty("y") && !a
								.isInteger(e.y) ? "y: integer expected" : null != e.time && e
								.hasOwnProperty("time") && !a.isInteger(e.time) ?
								"time: integer expected" : null != e.hp && e.hasOwnProperty("hp") &&
								!a.isInteger(e.hp) ? "hp: integer expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.SSubNewEnemy) return e;
							var t = new r.MSG.SSubNewEnemy;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.gameId && (t.gameId = 0 | e.gameId), null != e
								.gameHead && (t.gameHead = 0 | e.gameHead), null != e.eid && (t
									.eid = 0 | e.eid), null != e.x && (t.x = 0 | e.x), null != e
								.y && (t.y = 0 | e.y), null != e.time && (t.time = 0 | e.time),
								null != e.hp && (t.hp = 0 | e.hp), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.gameId = 0, o.gameHead = 0, o.eid = 0, o.x = 0, o.y = 0, o
									.time = 0, o.hp = 0), null != e.msgType && e.hasOwnProperty(
									"msgType") && (o.msgType = t.enums === String ? r.MSG.MsgType[e
									.msgType] : e.msgType), null != e.gameId && e.hasOwnProperty(
									"gameId") && (o.gameId = e.gameId), null != e.gameHead && e
								.hasOwnProperty("gameHead") && (o.gameHead = e.gameHead), null != e
								.eid && e.hasOwnProperty("eid") && (o.eid = e.eid), null != e.x && e
								.hasOwnProperty("x") && (o.x = e.x), null != e.y && e
								.hasOwnProperty("y") && (o.y = e.y), null != e.time && e
								.hasOwnProperty("time") && (o.time = e.time), null != e.hp && e
								.hasOwnProperty("hp") && (o.hp = e.hp), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.CSubObHurtEnemy = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.prototype.eid = 0, e.prototype.hurt = 0, e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), null != e
								.eid && Object.hasOwnProperty.call(e, "eid") && t.uint32(32).int32(e
									.eid), null != e.hurt && Object.hasOwnProperty.call(e,
								"hurt") && t.uint32(40).int32(e.hurt), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.CSubObHurtEnemy; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									case 4:
										n.eid = e.int32();
										break;
									case 5:
										n.hurt = e.int32();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId) ? "gameId: integer expected" : null != e.gameHead && e
								.hasOwnProperty("gameHead") && !a.isInteger(e.gameHead) ?
								"gameHead: integer expected" : null != e.eid && e.hasOwnProperty(
									"eid") && !a.isInteger(e.eid) ? "eid: integer expected" :
								null != e.hurt && e.hasOwnProperty("hurt") && !a.isInteger(e.hurt) ?
								"hurt: integer expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.CSubObHurtEnemy) return e;
							var t = new r.MSG.CSubObHurtEnemy;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.gameId && (t.gameId = 0 | e.gameId), null != e
								.gameHead && (t.gameHead = 0 | e.gameHead), null != e.eid && (t
									.eid = 0 | e.eid), null != e.hurt && (t.hurt = 0 | e.hurt), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.gameId = 0, o.gameHead = 0, o.eid = 0, o.hurt = 0), null != e
								.msgType && e.hasOwnProperty("msgType") && (o.msgType = t.enums ===
									String ? r.MSG.MsgType[e.msgType] : e.msgType), null != e
								.gameId && e.hasOwnProperty("gameId") && (o.gameId = e.gameId),
								null != e.gameHead && e.hasOwnProperty("gameHead") && (o.gameHead =
									e.gameHead), null != e.eid && e.hasOwnProperty("eid") && (o
									.eid = e.eid), null != e.hurt && e.hasOwnProperty("hurt") && (o
									.hurt = e.hurt), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.SSubUpdateHurtHp = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.prototype.eid = 0, e.prototype.hp = 0, e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), null != e
								.eid && Object.hasOwnProperty.call(e, "eid") && t.uint32(32).int32(e
									.eid), null != e.hp && Object.hasOwnProperty.call(e, "hp") && t
								.uint32(40).int32(e.hp), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.SSubUpdateHurtHp; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									case 4:
										n.eid = e.int32();
										break;
									case 5:
										n.hp = e.int32();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId) ? "gameId: integer expected" : null != e.gameHead && e
								.hasOwnProperty("gameHead") && !a.isInteger(e.gameHead) ?
								"gameHead: integer expected" : null != e.eid && e.hasOwnProperty(
									"eid") && !a.isInteger(e.eid) ? "eid: integer expected" :
								null != e.hp && e.hasOwnProperty("hp") && !a.isInteger(e.hp) ?
								"hp: integer expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.SSubUpdateHurtHp) return e;
							var t = new r.MSG.SSubUpdateHurtHp;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.gameId && (t.gameId = 0 | e.gameId), null != e
								.gameHead && (t.gameHead = 0 | e.gameHead), null != e.eid && (t
									.eid = 0 | e.eid), null != e.hp && (t.hp = 0 | e.hp), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.gameId = 0, o.gameHead = 0, o.eid = 0, o.hp = 0), null != e
								.msgType && e.hasOwnProperty("msgType") && (o.msgType = t.enums ===
									String ? r.MSG.MsgType[e.msgType] : e.msgType), null != e
								.gameId && e.hasOwnProperty("gameId") && (o.gameId = e.gameId),
								null != e.gameHead && e.hasOwnProperty("gameHead") && (o.gameHead =
									e.gameHead), null != e.eid && e.hasOwnProperty("eid") && (o
									.eid = e.eid), null != e.hp && e.hasOwnProperty("hp") && (o.hp =
									e.hp), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.SSubSyncScore = function() {
					function e(e) {
						if (this.seats = [], this.scores = [], e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.prototype.seats = a.emptyArray, e.prototype.scores = a.emptyArray, e
						.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							if (t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), null != e
								.seats && e.seats.length) {
								t.uint32(34).fork();
								for (var o = 0; o < e.seats.length; ++o) t.int32(e.seats[o]);
								t.ldelim()
							}
							if (null != e.scores && e.scores.length) {
								for (t.uint32(42).fork(), o = 0; o < e.scores.length; ++o) t.int32(e
									.scores[o]);
								t.ldelim()
							}
							return t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.SSubSyncScore; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									case 4:
										if (n.seats && n.seats.length || (n.seats = []), 2 == (7 &
												i))
											for (var a = e.uint32() + e.pos; e.pos < a;) n.seats
												.push(e.int32());
										else n.seats.push(e.int32());
										break;
									case 5:
										if (n.scores && n.scores.length || (n.scores = []), 2 == (
												7 & i))
											for (a = e.uint32() + e.pos; e.pos < a;) n.scores.push(e
												.int32());
										else n.scores.push(e.int32());
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							if (null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId)) return "gameId: integer expected";
							if (null != e.gameHead && e.hasOwnProperty("gameHead") && !a.isInteger(e
									.gameHead)) return "gameHead: integer expected";
							if (null != e.seats && e.hasOwnProperty("seats")) {
								if (!Array.isArray(e.seats)) return "seats: array expected";
								for (var t = 0; t < e.seats.length; ++t)
									if (!a.isInteger(e.seats[t])) return "seats: integer[] expected"
							}
							if (null != e.scores && e.hasOwnProperty("scores")) {
								if (!Array.isArray(e.scores)) return "scores: array expected";
								for (t = 0; t < e.scores.length; ++t)
									if (!a.isInteger(e.scores[t]))
									return "scores: integer[] expected"
							}
							return null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.SSubSyncScore) return e;
							var t = new r.MSG.SSubSyncScore;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							if (null != e.gameId && (t.gameId = 0 | e.gameId), null != e.gameHead &&
								(t.gameHead = 0 | e.gameHead), e.seats) {
								if (!Array.isArray(e.seats)) throw TypeError(
									".MSG.SSubSyncScore.seats: array expected");
								t.seats = [];
								for (var o = 0; o < e.seats.length; ++o) t.seats[o] = 0 | e.seats[o]
							}
							if (e.scores) {
								if (!Array.isArray(e.scores)) throw TypeError(
									".MSG.SSubSyncScore.scores: array expected");
								for (t.scores = [], o = 0; o < e.scores.length; ++o) t.scores[o] =
									0 | e.scores[o]
							}
							return t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							if ((t.arrays || t.defaults) && (o.seats = [], o.scores = []), t
								.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.gameId = 0, o.gameHead = 0), null != e.msgType && e
								.hasOwnProperty("msgType") && (o.msgType = t.enums === String ? r
									.MSG.MsgType[e.msgType] : e.msgType), null != e.gameId && e
								.hasOwnProperty("gameId") && (o.gameId = e.gameId), null != e
								.gameHead && e.hasOwnProperty("gameHead") && (o.gameHead = e
									.gameHead), e.seats && e.seats.length) {
								o.seats = [];
								for (var n = 0; n < e.seats.length; ++n) o.seats[n] = e.seats[n]
							}
							if (e.scores && e.scores.length)
								for (o.scores = [], n = 0; n < e.scores.length; ++n) o.scores[n] = e
									.scores[n];
							return o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.SSubKillEnemy = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.prototype.eid = 0, e.prototype.score = 0, e.prototype.seatId = 0, e
						.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), null != e
								.eid && Object.hasOwnProperty.call(e, "eid") && t.uint32(32).int32(e
									.eid), null != e.score && Object.hasOwnProperty.call(e,
								"score") && t.uint32(40).int32(e.score), null != e.seatId && Object
								.hasOwnProperty.call(e, "seatId") && t.uint32(48).int32(e.seatId), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.SSubKillEnemy; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									case 4:
										n.eid = e.int32();
										break;
									case 5:
										n.score = e.int32();
										break;
									case 6:
										n.seatId = e.int32();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId) ? "gameId: integer expected" : null != e.gameHead && e
								.hasOwnProperty("gameHead") && !a.isInteger(e.gameHead) ?
								"gameHead: integer expected" : null != e.eid && e.hasOwnProperty(
									"eid") && !a.isInteger(e.eid) ? "eid: integer expected" :
								null != e.score && e.hasOwnProperty("score") && !a.isInteger(e
									.score) ? "score: integer expected" : null != e.seatId && e
								.hasOwnProperty("seatId") && !a.isInteger(e.seatId) ?
								"seatId: integer expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.SSubKillEnemy) return e;
							var t = new r.MSG.SSubKillEnemy;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.gameId && (t.gameId = 0 | e.gameId), null != e
								.gameHead && (t.gameHead = 0 | e.gameHead), null != e.eid && (t
									.eid = 0 | e.eid), null != e.score && (t.score = 0 | e.score),
								null != e.seatId && (t.seatId = 0 | e.seatId), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.gameId = 0, o.gameHead = 0, o.eid = 0, o.score = 0, o.seatId =
									0), null != e.msgType && e.hasOwnProperty("msgType") && (o
									.msgType = t.enums === String ? r.MSG.MsgType[e.msgType] : e
									.msgType), null != e.gameId && e.hasOwnProperty("gameId") && (o
									.gameId = e.gameId), null != e.gameHead && e.hasOwnProperty(
									"gameHead") && (o.gameHead = e.gameHead), null != e.eid && e
								.hasOwnProperty("eid") && (o.eid = e.eid), null != e.score && e
								.hasOwnProperty("score") && (o.score = e.score), null != e.seatId &&
								e.hasOwnProperty("seatId") && (o.seatId = e.seatId), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.CSubShopBullet = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.CSubShopBullet; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId) ? "gameId: integer expected" : null != e.gameHead && e
								.hasOwnProperty("gameHead") && !a.isInteger(e.gameHead) ?
								"gameHead: integer expected" : null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.CSubShopBullet) return e;
							var t = new r.MSG.CSubShopBullet;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.gameId && (t.gameId = 0 | e.gameId), null != e
								.gameHead && (t.gameHead = 0 | e.gameHead), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.gameId = 0, o.gameHead = 0), null != e.msgType && e
								.hasOwnProperty("msgType") && (o.msgType = t.enums === String ? r
									.MSG.MsgType[e.msgType] : e.msgType), null != e.gameId && e
								.hasOwnProperty("gameId") && (o.gameId = e.gameId), null != e
								.gameHead && e.hasOwnProperty("gameHead") && (o.gameHead = e
									.gameHead), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.SSubShopBullet = function() {
					function e(e) {
						if (e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.prototype.seatI = 0, e.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							return t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), null != e
								.seatI && Object.hasOwnProperty.call(e, "seatI") && t.uint32(32)
								.int32(e.seatI), t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.SSubShopBullet; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									case 4:
										n.seatI = e.int32();
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							return null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId) ? "gameId: integer expected" : null != e.gameHead && e
								.hasOwnProperty("gameHead") && !a.isInteger(e.gameHead) ?
								"gameHead: integer expected" : null != e.seatI && e.hasOwnProperty(
									"seatI") && !a.isInteger(e.seatI) ? "seatI: integer expected" :
								null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.SSubShopBullet) return e;
							var t = new r.MSG.SSubShopBullet;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							return null != e.gameId && (t.gameId = 0 | e.gameId), null != e
								.gameHead && (t.gameHead = 0 | e.gameHead), null != e.seatI && (t
									.seatI = 0 | e.seatI), t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							return t.defaults && (o.msgType = t.enums === String ? "SYNC" : 0, o
									.gameId = 0, o.gameHead = 0, o.seatI = 0), null != e.msgType &&
								e.hasOwnProperty("msgType") && (o.msgType = t.enums === String ? r
									.MSG.MsgType[e.msgType] : e.msgType), null != e.gameId && e
								.hasOwnProperty("gameId") && (o.gameId = e.gameId), null != e
								.gameHead && e.hasOwnProperty("gameHead") && (o.gameHead = e
									.gameHead), null != e.seatI && e.hasOwnProperty("seatI") && (o
									.seatI = e.seatI), o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o.SSubFpsGameStart = function() {
					function e(e) {
						if (this.pUidList = [], this.pSeatList = [], this.pNameList = [], e)
							for (var t = Object.keys(e), o = 0; o < t.length; ++o) null != e[t[
								o]] && (this[t[o]] = e[t[o]])
					}
					return e.prototype.msgType = 0, e.prototype.gameId = 0, e.prototype.gameHead =
						0, e.prototype.frameTime = 0, e.prototype.pUidList = a.emptyArray, e
						.prototype.pSeatList = a.emptyArray, e.prototype.pNameList = a.emptyArray, e
						.create = function(t) {
							return new e(t)
						}, e.encode = function(e, t) {
							if (t || (t = i.create()), null != e.msgType && Object.hasOwnProperty
								.call(e, "msgType") && t.uint32(8).int32(e.msgType), null != e
								.gameId && Object.hasOwnProperty.call(e, "gameId") && t.uint32(16)
								.int32(e.gameId), null != e.gameHead && Object.hasOwnProperty.call(
									e, "gameHead") && t.uint32(24).int32(e.gameHead), null != e
								.frameTime && Object.hasOwnProperty.call(e, "frameTime") && t
								.uint32(32).int32(e.frameTime), null != e.pUidList && e.pUidList
								.length)
								for (var o = 0; o < e.pUidList.length; ++o) t.uint32(42).string(e
									.pUidList[o]);
							if (null != e.pSeatList && e.pSeatList.length) {
								for (t.uint32(50).fork(), o = 0; o < e.pSeatList.length; ++o) t
									.int32(e.pSeatList[o]);
								t.ldelim()
							}
							if (null != e.pNameList && e.pNameList.length)
								for (o = 0; o < e.pNameList.length; ++o) t.uint32(58).string(e
									.pNameList[o]);
							return t
						}, e.encodeDelimited = function(e, t) {
							return this.encode(e, t).ldelim()
						}, e.decode = function(e, t) {
							e instanceof s || (e = s.create(e));
							for (var o = void 0 === t ? e.len : e.pos + t, n = new r.MSG
									.SSubFpsGameStart; e.pos < o;) {
								var i = e.uint32();
								switch (i >>> 3) {
									case 1:
										n.msgType = e.int32();
										break;
									case 2:
										n.gameId = e.int32();
										break;
									case 3:
										n.gameHead = e.int32();
										break;
									case 4:
										n.frameTime = e.int32();
										break;
									case 5:
										n.pUidList && n.pUidList.length || (n.pUidList = []), n
											.pUidList.push(e.string());
										break;
									case 6:
										if (n.pSeatList && n.pSeatList.length || (n.pSeatList = []),
											2 == (7 & i))
											for (var a = e.uint32() + e.pos; e.pos < a;) n.pSeatList
												.push(e.int32());
										else n.pSeatList.push(e.int32());
										break;
									case 7:
										n.pNameList && n.pNameList.length || (n.pNameList = []), n
											.pNameList.push(e.string());
										break;
									default:
										e.skipType(7 & i)
								}
							}
							return n
						}, e.decodeDelimited = function(e) {
							return e instanceof s || (e = new s(e)), this.decode(e, e.uint32())
						}, e.verify = function(e) {
							if ("object" != typeof e || null === e) return "object expected";
							if (null != e.msgType && e.hasOwnProperty("msgType")) switch (e
							.msgType) {
								default:
									return "msgType: enum value expected";
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
							}
							if (null != e.gameId && e.hasOwnProperty("gameId") && !a.isInteger(e
									.gameId)) return "gameId: integer expected";
							if (null != e.gameHead && e.hasOwnProperty("gameHead") && !a.isInteger(e
									.gameHead)) return "gameHead: integer expected";
							if (null != e.frameTime && e.hasOwnProperty("frameTime") && !a
								.isInteger(e.frameTime)) return "frameTime: integer expected";
							if (null != e.pUidList && e.hasOwnProperty("pUidList")) {
								if (!Array.isArray(e.pUidList)) return "pUidList: array expected";
								for (var t = 0; t < e.pUidList.length; ++t)
									if (!a.isString(e.pUidList[t]))
									return "pUidList: string[] expected"
							}
							if (null != e.pSeatList && e.hasOwnProperty("pSeatList")) {
								if (!Array.isArray(e.pSeatList)) return "pSeatList: array expected";
								for (t = 0; t < e.pSeatList.length; ++t)
									if (!a.isInteger(e.pSeatList[t]))
									return "pSeatList: integer[] expected"
							}
							if (null != e.pNameList && e.hasOwnProperty("pNameList")) {
								if (!Array.isArray(e.pNameList)) return "pNameList: array expected";
								for (t = 0; t < e.pNameList.length; ++t)
									if (!a.isString(e.pNameList[t]))
									return "pNameList: string[] expected"
							}
							return null
						}, e.fromObject = function(e) {
							if (e instanceof r.MSG.SSubFpsGameStart) return e;
							var t = new r.MSG.SSubFpsGameStart;
							switch (e.msgType) {
								case "SYNC":
								case 0:
									t.msgType = 0;
									break;
								case "HALL":
								case 1:
									t.msgType = 1;
									break;
								case "GAME":
								case 2:
									t.msgType = 2;
									break;
								case "PING":
								case 3:
									t.msgType = 3;
									break;
								case "PONG":
								case 4:
									t.msgType = 4;
									break;
								case "FPS_SYNC":
								case 5:
									t.msgType = 5
							}
							if (null != e.gameId && (t.gameId = 0 | e.gameId), null != e.gameHead &&
								(t.gameHead = 0 | e.gameHead), null != e.frameTime && (t.frameTime =
									0 | e.frameTime), e.pUidList) {
								if (!Array.isArray(e.pUidList)) throw TypeError(
									".MSG.SSubFpsGameStart.pUidList: array expected");
								t.pUidList = [];
								for (var o = 0; o < e.pUidList.length; ++o) t.pUidList[o] = String(e
									.pUidList[o])
							}
							if (e.pSeatList) {
								if (!Array.isArray(e.pSeatList)) throw TypeError(
									".MSG.SSubFpsGameStart.pSeatList: array expected");
								for (t.pSeatList = [], o = 0; o < e.pSeatList.length; ++o) t
									.pSeatList[o] = 0 | e.pSeatList[o]
							}
							if (e.pNameList) {
								if (!Array.isArray(e.pNameList)) throw TypeError(
									".MSG.SSubFpsGameStart.pNameList: array expected");
								for (t.pNameList = [], o = 0; o < e.pNameList.length; ++o) t
									.pNameList[o] = String(e.pNameList[o])
							}
							return t
						}, e.toObject = function(e, t) {
							t || (t = {});
							var o = {};
							if ((t.arrays || t.defaults) && (o.pUidList = [], o.pSeatList = [], o
									.pNameList = []), t.defaults && (o.msgType = t.enums ===
									String ? "SYNC" : 0, o.gameId = 0, o.gameHead = 0, o.frameTime =
									0), null != e.msgType && e.hasOwnProperty("msgType") && (o
									.msgType = t.enums === String ? r.MSG.MsgType[e.msgType] : e
									.msgType), null != e.gameId && e.hasOwnProperty("gameId") && (o
									.gameId = e.gameId), null != e.gameHead && e.hasOwnProperty(
									"gameHead") && (o.gameHead = e.gameHead), null != e.frameTime &&
								e.hasOwnProperty("frameTime") && (o.frameTime = e.frameTime), e
								.pUidList && e.pUidList.length) {
								o.pUidList = [];
								for (var n = 0; n < e.pUidList.length; ++n) o.pUidList[n] = e
									.pUidList[n]
							}
							if (e.pSeatList && e.pSeatList.length)
								for (o.pSeatList = [], n = 0; n < e.pSeatList.length; ++n) o
									.pSeatList[n] = e.pSeatList[n];
							if (e.pNameList && e.pNameList.length)
								for (o.pNameList = [], n = 0; n < e.pNameList.length; ++n) o
									.pNameList[n] = e.pNameList[n];
							return o
						}, e.prototype.toJSON = function() {
							return this.constructor.toObject(this, n.util.toJSONOptions)
						}, e
				}(), o
			}();
		o.MSG = c, t.exports = r, cc._RF.pop()
	}, {}],
	realNameATT: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "788a2KVfN9OL6lWWj671mPM", "realNameATT");
		var n = this && this.__decorate || function(e, t, o, n) {
				var s, i = arguments.length,
					a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
					.decorate(e, t, o, n);
				else
					for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
						t, o, a) : s(t, o)) || a);
				return i > 3 && a && Object.defineProperty(t, o, a), a
			},
			s = this && this.__awaiter || function(e, t, o, n) {
				return new(o || (o = Promise))(function(s, i) {
					function a(e) {
						try {
							c(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function r(e) {
						try {
							c(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function c(e) {
						var t;
						e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
							e) {
							e(t)
						})).then(a, r)
					}
					c((n = n.apply(e, t || [])).next())
				})
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const i = e("../../engines/gameEngine"),
			{
				ccclass: a,
				property: r
			} = cc._decorator;
		let c = class extends cc.Component {
			constructor() {
				super(...arguments), this.editCode = null, this.editName = null, this.JSON_KEY =
					"real-name-code", this.m_commitSuccess = null
			}
			onRealName() {
				return s(this, void 0, void 0, function*() {
					return !cc.sys.isNative || this.isRealNameEd() ? (this.node
						.active = !1, Promise.resolve()) : new Promise(e => {
						this.node.active = !0, this.m_commitSuccess = () => {
							e()
						}
					})
				})
			}
			start() {}
			isRealNameEd() {
				let e = i.services().localStorageSrv.getStorage(this.JSON_KEY, !1);
				return Boolean(e)
			}
			signed(e) {
				let t = 0,
					o = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
				for (let n = 0; n < 17; n++) t += Number(e[n]) * o[n];
				return "10X98765432" [t % 11] == e[17]
			}
			onBtnCommit() {
				let e, t = this.editName.string,
					o = this.editCode.string;
				/^(?:[\u4e00-\u9fa5\xb7]{2,16})$/.test(t) ? o.length < 18 ? i.modules()
					.uiControlModule.showMessageBox(
						"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u8eab\u4efd\u8bc1\u53f7\u7801") :
					(e = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0\d|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/
						.test(o) && this.signed(o) ? () => {
							i.modules().uiControlModule.hideLoading(), i.services()
								.localStorageSrv.setStorage(this.JSON_KEY, JSON.stringify({
									code: o,
									name: t
								}), !1), this.node.active = !1, i.modules().uiControlModule
								.showMessageBox("\u5b9e\u540d\u8ba4\u8bc1\u6210\u529f."),
								setTimeout(() => {
									this.m_commitSuccess()
								}, 1500)
						} : () => {
							i.modules().uiControlModule.hideLoading(), i.modules()
								.uiControlModule.showMessageBox(
									"\u5b9e\u540d\u8ba4\u8bc1\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u4f60\u7684\u8f93\u5165"
									)
						}, i.modules().uiControlModule.showLoading(null,
							"\u6b63\u5728\u8ba4\u8bc1\u2026").then(() => {
							this.scheduleOnce(() => {
								e()
							}, .3 + 1 * Math.random())
						})) : i.modules().uiControlModule.showMessageBox(
						"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u59d3\u540d")
			}
		};
		n([r(cc.EditBox)], c.prototype, "editCode", void 0), n([r(cc.EditBox)], c.prototype, "editName",
			void 0), c = n([a], c), o.default = c, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine"
	}],
	rebornDialog: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "e71b0LrOvpDbZ/uIBZ93zH9", "rebornDialog");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../../engines/gameEngine"),
			i = e("../normalMode"),
			a = e("../Native"),
			{
				ccclass: r,
				property: c
			} = cc._decorator;
		let l = class extends cc.Component {
			start() {}
			onEnable() {
				a.default.actionEvent("1", "1")
			}
			onBtnReborn() {
				s.managers().soundMgr.playSound("anNiu"), a.default.actionEvent("1", "2"), a
					.default.showRewardVideo(), this.scheduleOnce(() => {
						i.default._instance.rebornGame(), this.node.parent.destroy(), this
							.node.destroy()
					})
			}
			onBtnClose() {
				s.managers().soundMgr.playSound("anNiu"), s.services().miniGameSrv
					.getAppApiInstance().gameRecordStop(), this.node.destroy()
			}
		};
		l = n([r], l), o.default = l, cc._RF.pop()
	}, {
		"../../../engines/gameEngine": "gameEngine",
		"../Native": "Native",
		"../normalMode": "normalMode"
	}],
	recordVoiceChange: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "bee6alUiDRD7aZoPUL7YQOU", "recordVoiceChange");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.RECORD_VOICE_STATE = void 0;
		const s = e("./btButton"),
			i = e("../../engines/gameEngine");
		var a;
		(function(e) {
			e[e.NULL = 0] = "NULL", e[e.READY = 1] = "READY", e[e.RECORD = 2] = "RECORD", e[e.OVER =
				3] = "OVER", e[e.PLAY = 4] = "PLAY"
		})(a = o.RECORD_VOICE_STATE || (o.RECORD_VOICE_STATE = {}));
		const {
			ccclass: r,
			property: c
		} = cc._decorator;
		let l = class extends cc.Component {
			constructor() {
				super(...arguments), this.btList = null, this.effectBtNode = null, this
					.lbState = null, this.editInput = null, this.m_currState = a.READY, this
					.m_recordTime = 0, this.m_effectList = [{
						name: "\u8c03\u76ae\u7334",
						numScale: .55
					}, {
						name: "\u673a\u7075\u5154",
						numScale: .75
					}, {
						name: "\u590d\u8bfb\u673a",
						numScale: 1
					}, {
						name: "\u61a8\u61a8\u8c61",
						numScale: 1.25
					}, {
						name: "\u8001\u602a\u7269",
						numScale: 1.5
					}], this.m_timeBind = null
			}
			onLoad() {
				this.OnLoadSetBts()
			}
			start() {
				this.m_currState = a.READY
			}
			getTimeFunction() {
				return null == this.m_timeBind && (this.m_timeBind = this.OnTimer.bind(this)),
					this.m_timeBind
			}
			OnTimer() {
				this.m_recordTime++
			}
			OnBtnStartRecordVoice() {
				this.m_currState == a.NULL || this.m_currState == a.READY || this.m_currState ==
					a.OVER ? (i.default.getServices().miniGameSrv.getAppApiInstance()
						.StartRecordSound(), this.m_currState = a.RECORD, this.m_recordTime = 0,
						this.schedule(this.getTimeFunction(), 1)) : i.default.getModules()
					.uiControlModule.showMessageBox(
						"\u8fd8\u4e0d\u80fd\u5f00\u59cb\u5f55\u97f3")
			}
			OnBtnStopRecordVoice() {
				this.m_currState == a.RECORD ? (this.unschedule(this.getTimeFunction()), i
					.default.getServices().miniGameSrv.getAppApiInstance().StopRecordSound(
					() => {
						this.m_currState = a.OVER
					})) : i.default.getModules().uiControlModule.showMessageBox(
					"\u8fd8\u6ca1\u6709\u5f00\u59cb\u5f55\u97f3")
			}
			OnBtnExit() {
				this.node.destroy()
			}
			OnBtnPlaySetNum() {
				this.OnBtnListEffect({
					name: "\u624b\u52a8\u8c03",
					numScale: Number(this.editInput.string)
				})
			}
			OnBtnListEffect(e) {
				this.m_currState == a.OVER ? (this.m_currState = a.PLAY, i.default.getServices()
						.miniGameSrv.getAppApiInstance().PlayLastRecordSound(e.numScale, () => {
							this.m_currState = a.OVER
						}, () => {
							this.m_currState = a.OVER
						})) : this.m_currState == a.PLAY ? i.default.getModules()
					.uiControlModule.showMessageBox("\u6b63\u5728\u64ad\u653e\u4e2d") : i
					.default.getModules().uiControlModule.showMessageBox(
						"\u6ca1\u6709\u5f55\u97f3\u64cd\u4f5c")
			}
			OnLoadSetBts() {
				for (let e = 0; e < this.m_effectList.length; e++) {
					const t = this.m_effectList[e];
					let o = this.effectBtNode;
					e > 0 && (o = cc.instantiate(o), this.btList.addChild(o)), o.getComponent(s
						.default).setButtonText(t.name), o.off("click"), o.on("click",
				() => {
						this.OnBtnListEffect(t)
					})
				}
			}
			OnUpdateState() {
				switch (this.m_currState) {
					case a.NULL:
						this.lbState.string = "\u7b49\u5f85\u5f55\u97f3";
					case a.READY:
						this.lbState.string = "\u64ad\u653e\u5b8c\u6bd5";
						break;
					case a.RECORD:
						this.lbState.string = `\u5f55\u97f3\u4e2d:[${this.m_recordTime}s]`;
						break;
					case a.OVER:
						this.lbState.string = "\u5f55\u97f3\u5b8c\u6bd5";
						break;
					case a.PLAY:
						this.lbState.string = "\u6b63\u5728\u64ad\u653e"
				}
			}
			update(e) {
				this.OnUpdateState()
			}
		};
		n([c(cc.Node)], l.prototype, "btList", void 0), n([c(cc.Node)], l.prototype, "effectBtNode",
			void 0), n([c(cc.Label)], l.prototype, "lbState", void 0), n([c(cc.EditBox)], l
			.prototype, "editInput", void 0), l = n([r], l), o.default = l, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"./btButton": "btButton"
	}],
	scrollMiniGameJump: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "4b44eCIqpRNZrQ9xEjkX8Xu", "scrollMiniGameJump");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../engines/configs/gameConfig"),
			i = e("../public/cellMiniGameJump"),
			{
				ccclass: a,
				property: r
			} = cc._decorator;
		let c = class extends cc.Component {
			constructor() {
				super(...arguments), this.pbTwoItem = null, this.ndListContent = null
			}
			start() {
				this.showAllMiniGameJumpList()
			}
			showAllMiniGameJumpList() {
				const e = s.default.MINI_GAME_JUMP_SCROLL_LIST;
				cc.Tween.stopAllByTarget(this.ndListContent);
				for (let t = 0; t < e.length; t += 2) {
					let o = e[t],
						n = e[t + 1],
						s = cc.instantiate(this.pbTwoItem);
					this.ndListContent.addChild(s), this.controlCellOne(s.getChildByName(
						"cellUp"), o), this.controlCellOne(s.getChildByName("cellDown"), n)
				}
				this.scheduleOnce(() => {
					if (this.ndListContent.width <= this.node.width) return;
					let e = this.ndListContent.width - this.node.width;
					cc.tween(this.ndListContent).then(cc.tween(this.ndListContent).to(
					0, {
						x: -375
					}).to(this.ndListContent.width / this.node.width * 5, {
						x: -375 - e
					})).repeatForever().start()
				})
			}
			controlCellOne(e, t) {
				null != t ? e.getComponent(i.default).setData(t) : e.active = !1
			}
			onBtnClose() {
				this.ndListContent.destroyAllChildren(), this.node.destroy()
			}
		};
		n([r(cc.Prefab)], c.prototype, "pbTwoItem", void 0), n([r(cc.Node)], c.prototype,
			"ndListContent", void 0), c = n([a], c), o.default = c, cc._RF.pop()
	}, {
		"../../engines/configs/gameConfig": "gameConfig",
		"../public/cellMiniGameJump": "cellMiniGameJump"
	}],
	shareDialog: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "4d926AVgPFIrIGwy70sBO9n", "shareDialog");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../../engines/gameEngine"),
			{
				ccclass: i,
				property: a
			} = cc._decorator;
		let r = class extends cc.Component {
			constructor() {
				super(...arguments), this.shareBtn = null
			}
			start() {
				this.shareBtn && (this.shareBtn.active = s.default.shareSwitch);
				let e = [
					"\u5dee\u4e00\u70b9\u5c31\u8fc7\u5173\u4e86\uff0c\u592a\u6c14\u4eba\u4e86\uff01\u8981\u4e0d\u5206\u4eab\u7ed9\u597d\u53cb\uff0c\u6c14\u6c14\u4ed6\u4eec",
					"\u6211\u7684\u6700\u5f3a\u5927\u8111\u90fd\u8fc7\u4e0d\u53bb\uff0c\u6211\u5c31\u4e0d\u4fe1\u8fd8\u6709\u4eba\u80fd\u8fc7\uff0c\u4e0d\u670d\u6765\u6218\uff01",
					"\u7b2c\u4e8c\u5173\uff0c\u8fd9......\u5361\u5173\u4e86\uff0c\u5361\u5173\u4e86\uff0c\u5144\u5f1f\u4eec\u4f60\u4eec\u6765~",
					"\u8c01\u8bf4\u7684\u8fd9\u6e38\u620f\u6709\u624b\u5c31\u884c\uff0c\u6765\u6765\u6765\uff0c\u4f60\u4eec\u6765\uff01\u4f60\u4eec\u6765\uff01",
					"\u8fd9\u662f\u8c01\u8bbe\u8ba1\u7684\u5173\u5361\uff0c\u4f60\u8ddf\u6211\u8bf4\u5b9e\u8bdd\u662f\u4e0d\u662f\u6ca1\u6709\u7b2c\u4e09\u5173\uff01"
				][Math.floor(5 * Math.random())];
				this.node.getChildByName("panel_window4").getChildByName("Label_shareTxt")
					.getComponent(cc.Label).string = e
			}
			onBtnShare(e) {
				s.managers().soundMgr.playSound("anNiu"), s.services().miniGameSrv
					.getAppApiInstance().shareGameRecordVideo(() => {
						e.target.active = !1
					})
			}
			onBtnClose(e) {
				s.managers().soundMgr.playSound("anNiu"), this.node.destroy()
			}
		};
		n([a({
			type: cc.Node,
			displayName: "\u5206\u4eab\u6309\u94ae"
		})], r.prototype, "shareBtn", void 0), r = n([i], r), o.default = r, cc._RF.pop()
	}, {
		"../../../engines/gameEngine": "gameEngine"
	}],
	shareVideoItem: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "990921Co5FJAp16rUTFQWNu", "shareVideoItem");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../../engines/gameEngine"),
			{
				ccclass: i,
				property: a
			} = cc._decorator;
		let r = class extends cc.Component {
			constructor() {
				super(...arguments), this.lbNumber = null, this.lbDiggCount = null, this
					.spTitleImage = null, this.m_videoObject = null
			}
			onLoad() {}
			start() {}
			OnBtnPlay() {
				s.default.getServices().miniGameSrv.getAppApiInstance().showVideo(this
					.m_videoObject.video_id)
			}
			BindVideoData(e) {
				console.log("\u6570\u636e", e), this.m_videoObject = e, this.lbNumber.string =
					`\u7b2c ${this.m_videoObject.rank} \u540d`, this.lbDiggCount.string =
					`${this.m_videoObject.digg_count} \u8d5e`, console.log(
						"\u8bf7\u6c42\u56fe\u7247", this.spTitleImage), this.scheduleOnce(
				() => {
						s.default.getServices().miniGameSrv.getAppApiInstance()
							.drawUrlImage(this.m_videoObject.cover_url, e => {
								console.log("\u56fe\u7247\u7ed3\u679c", e, this
										.spTitleImage), this.spTitleImage.spriteFrame =
									e
							})
					})
			}
		};
		n([a(cc.Label)], r.prototype, "lbNumber", void 0), n([a(cc.Label)], r.prototype, "lbDiggCount",
				void 0), n([a(cc.Sprite)], r.prototype, "spTitleImage", void 0), r = n([i], r), o
			.default = r, cc._RF.pop()
	}, {
		"../../../engines/gameEngine": "gameEngine"
	}],
	shareVideoRank: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "3ef272VfUFAGpGqY9FZkIFx", "shareVideoRank");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../engines/services/miniGameContent/miniApp"),
			i = e("../../engines/gameEngine"),
			a = e("./shareVideoRank/shareVideoItem"),
			{
				ccclass: r,
				property: c
			} = cc._decorator;
		let l = class extends cc.Component {
			constructor() {
				super(...arguments), this.pbItem = null, this.tcType = null, this
					.ndListContent = null
			}
			onLoad() {
				this.OnSelectType(s.SHARE_VIDEO_SORT_TYPE.HOT)
			}
			start() {}
			OnBtnSwitch(e) {
				let t = Number(e.node.name);
				this.OnSelectType(t)
			}
			OnBtnExit() {
				this.ndListContent.destroyAllChildren(), this.node.destroy()
			}
			OnSelectType(e) {
				i.default.getModules().uiControlModule.showLoading(), i.default.getServices()
					.miniGameSrv.getAppApiInstance().getShareVideoRank(e, e => {
						this.OnShowList(e), i.default.getModules().uiControlModule
							.hideLoading()
					})
			}
			OnShowList(e) {
				this.ndListContent.destroyAllChildren(), this.scheduleOnce(() => {
					for (let t of e) {
						let e = cc.instantiate(this.pbItem);
						this.ndListContent.addChild(e), e.getComponent(a.default)
							.BindVideoData(t)
					}
				})
			}
		};
		n([c(cc.Prefab)], l.prototype, "pbItem", void 0), n([c(cc.ToggleContainer)], l.prototype,
				"tcType", void 0), n([c(cc.Node)], l.prototype, "ndListContent", void 0), l = n([r], l),
			o.default = l, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine",
		"../../engines/services/miniGameContent/miniApp": "miniApp",
		"./shareVideoRank/shareVideoItem": "shareVideoItem"
	}],
	skinItem: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "764b8M6GfBMiYNpKE3zLobY", "skinItem");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../Config/SkinConfig"),
			i = e("../../engines/gameEngine"),
			{
				ccclass: a,
				property: r
			} = cc._decorator;
		let c = class extends cc.Component {
			constructor() {
				super(...arguments), this.data = null, this.sp = null, this.equipNode = null
			}
			onLoad() {
				i.default.on("skinitemupdataitem", this.updateItem, this)
			}
			setData(e) {
				this.data = e, this.updateItem()
			}
			updateUse() {
				this.data.id == i.default.getServices().userSrv.getUserUseSkin() ? this
					.equipNode.active = !0 : this.equipNode.active = !1
			}
			updateItem() {
				if (!this.data) return;
				let e = s.getOneSkinIsUnlock(this.data.id);
				this.sp.node.color = e ? cc.color(255, 255, 255) : cc.color(0, 0, 0), this
					.updateUse(), this.loadSp()
			}
			onBtnMe() {
				this.data && i.default.getModules().uiControlModule.showSkinExplainPage(this
					.data.id)
			}
			loadSp() {
				this.data && i.default.getModules().uiControlModule.getGameBundle().load(
					`Image/SkinSp/${this.data.spPath}`, cc.SpriteFrame, (e, t) => {
						e ? console.log("\u52a0\u8f7d\u56fe\u7247\u51fa\u9519") : this.sp
							.spriteFrame = t
					})
			}
		};
		n([r({
			type: cc.Sprite,
			displayName: "\u56fe\u7247\u8282\u70b9"
		})], c.prototype, "sp", void 0), n([r({
			type: cc.Node,
			displayName: "\u88c5\u5907\u4e2d\u8282\u70b9"
		})], c.prototype, "equipNode", void 0), c = n([a], c), o.default = c, cc._RF.pop()
	}, {
		"../../Config/SkinConfig": "SkinConfig",
		"../../engines/gameEngine": "gameEngine"
	}],
	skinShop: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "c4c57M7DDZO+qGDB8w0MV2C", "skinShop");
		var n = this && this.__decorate || function(e, t, o, n) {
				var s, i = arguments.length,
					a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
					.decorate(e, t, o, n);
				else
					for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
						t, o, a) : s(t, o)) || a);
				return i > 3 && a && Object.defineProperty(t, o, a), a
			},
			s = this && this.__awaiter || function(e, t, o, n) {
				return new(o || (o = Promise))(function(s, i) {
					function a(e) {
						try {
							c(n.next(e))
						} catch (t) {
							i(t)
						}
					}

					function r(e) {
						try {
							c(n.throw(e))
						} catch (t) {
							i(t)
						}
					}

					function c(e) {
						var t;
						e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
							e) {
							e(t)
						})).then(a, r)
					}
					c((n = n.apply(e, t || [])).next())
				})
			};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const i = e("../../Config/SkinConfig"),
			a = e("./skinItem"),
			{
				ccclass: r,
				property: c
			} = cc._decorator;
		let l = class extends cc.Component {
			constructor() {
				super(...arguments), this.skinPage = null, this.skinPrefab = null, this
					.pageNode = null, this.skinPerPage = 0, this.content = null, this.left =
					null, this.right = null, this.pages = [], this.curPageIndex = 0, this
					.pageAddNum = 0
			}
			start() {
				return s(this, void 0, void 0, function*() {
					this.open();
					let e = i.default(),
						t = [];
					for (let n in e) {
						const o = e[n];
						t.push(o)
					}
					let o = Math.ceil(t.length / this.skinPerPage);
					o <= 1 && (this.left.active = !1, this.right.active = !1);
					for (let n = 0; n < o; n++) {
						let e = cc.instantiate(this.skinPage);
						this.pageNode.getComponent(cc.PageView).addPage(e), this.pages
							.push(e)
					}
					yield this.Init(t), this.updateCurPage()
				})
			}
			Init(e) {
				return s(this, void 0, void 0, function*() {
					return new Promise(t => s(this, void 0, void 0, function*() {
						for (const t in e) {
							let e = cc.instantiate(this.skinPrefab),
								o = e.getComponent(a.default),
								n = i.getOneSkinConfigById(t);
							o.setData(n), this.pages[this.curPageIndex]
								.addChild(e), this.pageAddNum += 1, this
								.pageAddNum >= this.skinPerPage && (this
									.curPageIndex += 1, this.pageAddNum = 0)
						}
						this.scheduleOnce(t, .1)
					}))
				})
			}
			onBtnRight(e) {
				this.curPageIndex += 1, this.pageNode.getComponent(cc.PageView).scrollToPage(
						this.curPageIndex, .5), e.target.active = this.curPageIndex < this.pages
					.length - 1, this.updateCurPage()
			}
			onBtnLeft(e) {
				this.curPageIndex -= 1, this.pageNode.getComponent(cc.PageView).scrollToPage(
						this.curPageIndex, .5), e.target.active = this.curPageIndex >= 0, this
					.updateCurPage()
			}
			open() {
				this.node.opacity = 0, cc.tween(this.node).to(.25, {
					opacity: 255
				}).start(), cc.tween(this.content).delay(.2).call(() => {}).to(.3, {
					scale: 1
				}, {
					easing: "backOut"
				}).start()
			}
			close() {
				this.node.isValid && cc.tween(this.node).to(.1, {
					opacity: 0
				}).call(() => {
					this.node.destroy(), this.node.removeFromParent()
				}).start()
			}
			onBtnConfirm() {
				this.close()
			}
			updateCurPage() {}
		};
		n([c({
			type: cc.Node,
			displayName: "\u76ae\u80a4\u9875\u9762\u9884\u5236\u4f53"
		})], l.prototype, "skinPage", void 0), n([c({
			type: cc.Node,
			displayName: "\u76ae\u80a4\u9884\u5236\u4f53"
		})], l.prototype, "skinPrefab", void 0), n([c({
			type: cc.Node,
			displayName: "\u7ffb\u9875\u63d2\u4ef6"
		})], l.prototype, "pageNode", void 0), n([c({
			displayName: "\u9650\u5236\u6bcf\u9875\u7684\u76ae\u80a4\u6570\u91cf"
		})], l.prototype, "skinPerPage", void 0), n([c({
			type: cc.Node
		})], l.prototype, "content", void 0), n([c({
			type: cc.Node
		})], l.prototype, "left", void 0), n([c({
			type: cc.Node
		})], l.prototype, "right", void 0), l = n([r], l), o.default = l, cc._RF.pop()
	}, {
		"../../Config/SkinConfig": "SkinConfig",
		"./skinItem": "skinItem"
	}],
	soundManager: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "410d4OUWf5Dt6IVtna7cXDB", "soundManager");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.SOUND_LOCAL_KEY = void 0;
		const s = e("./superManager"),
			i = e("../gameEngine"),
			a = e("../services/miniGameContent/miniApp");
		o.SOUND_LOCAL_KEY = "sound-manager-key", o.default = class extends s.default {
			constructor() {
				super(), this.className = "\u58f0\u97f3\u7ba1\u7406", this.soundResPath =
					"preload/sounds/", this.m_soundEnabled = !0, this.m_vibrateEnabled = !0
			}
			loadManager() {
				const e = Object.create(null, {
					loadManager: {
						get: () => super.loadManager
					}
				});
				return n(this, void 0, void 0, function*() {
					return yield e.loadManager.call(this), this.onReadSetting(), Promise
						.resolve(!0)
				})
			}
			isSoundEnabled() {
				return this.m_soundEnabled
			}
			isVibrateEnabled() {
				return this.m_vibrateEnabled
			}
			setVibrateEnabled(e) {
				this.m_vibrateEnabled = e, this.onSetWriteSetting()
			}
			setSoundEnabled(e) {
				this.m_soundEnabled = e, this.isSoundEnabled() || this.stopMusic(), this
					.onSetWriteSetting()
			}
			onSetWriteSetting() {
				let e = {
					sound: this.m_soundEnabled,
					vibrate: this.m_vibrateEnabled
				};
				i.services().localStorageSrv.setStorage(o.SOUND_LOCAL_KEY, JSON.stringify(e))
			}
			onReadSetting() {
				let e = i.services().localStorageSrv.getStorage(o.SOUND_LOCAL_KEY);
				if (e) {
					let t = JSON.parse(e);
					this.m_soundEnabled = t.sound, this.m_vibrateEnabled = t.vibrate
				}
			}
			playVibrate() {
				this.isVibrateEnabled() && i.services().miniGameSrv.getAppApiInstance().vibrate(
					a.VIBRATE_TYPE.SHORT)
			}
			playMusic(e) {
				if (!this.isSoundEnabled()) return;
				let t = this.getSoundUrl(e);
				i.modules().uiControlModule.getGameBundle().load(t, cc.AudioClip, function(e,
				t) {
					e ? cc.error(e) : cc.audioEngine.playMusic(t, !0)
				})
			}
			stopMusic() {
				cc.audioEngine.stopMusic()
			}
			playSound(e) {
				return n(this, void 0, void 0, function*() {
					return new Promise(t => {
						if (!this.isSoundEnabled()) return t(null);
						let o = this.getSoundUrl(e);
						i.modules().uiControlModule.getGameBundle().load(o, cc
							.AudioClip,
							function(e, n) {
								if (e) return cc.error(e), t(null);
								try {
									if (n) {
										let e = cc.audioEngine.play(n, !1,
											1);
										t(e)
									}
								} catch (s) {
									console.warn(
										"#89\u8b66\u544a \u5b58\u5728\u97f3\u9891\u95ee\u9898",
										o)
								}
							})
					})
				})
			}
			stopSound(e) {
				cc.audioEngine.stop(e)
			}
			getSoundUrl(e) {
				return this.soundResPath + e
			}
		}, cc._RF.pop()
	}, {
		"../gameEngine": "gameEngine",
		"../services/miniGameContent/miniApp": "miniApp",
		"./superManager": "superManager"
	}],
	start: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "427a0D9ekFMu57VSv5uEPAA", "start");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../engines/gameEngine"),
			i = e("../engines/configs/gameConfig"),
			{
				ccclass: a,
				property: r
			} = cc._decorator;
		cc.macro.ENABLE_WEBGL_ANTIALIAS = !0, cc.macro.ENABLE_MULTI_TOUCH = !0, console.log(
			"\u5f15\u64ce\u914d\u7f6e\u521d\u59cb\u5316");
		let c = class extends cc.Component {
			onLoad() {
				let e = this.node.parent.getChildByName("UIRoot"),
					t = e.getChildByName("Message");
				t && (t.zIndex = 20), cc.game.addPersistRootNode(e), s.modules().uiControlModule
					.SetUIRoot(e)
			}
			start() {
				i.default.LOG_SERVICE_OPEN ? s.default.getServices().logSrv.loadService().then(
				() => {
					s.default.getServices().logSrv.onLoadedService().then(() => {
						this.onReady()
					})
				}) : this.onReady()
			}
			onReady() {
				console.log("<start> \u573a\u666f"), cc.sys.isNative ? console.log(
					"cocos 2d-x") : console.log("cocos webgl"), this.initEngineConfig(), this
					.printEngineConfig(), this.goLoading()
			}
			initEngineConfig() {
				cc.debug.setDisplayStats(!1)
			}
			printEngineConfig() {
				console.group("cocos\u5f15\u64ce\u914d\u7f6e"), console.log(
					"\u662f\u5426\u5f00\u542f\u6297\u952f\u9f7f", cc.view
					.isAntiAliasEnabled(), cc.macro.ENABLE_WEBGL_ANTIALIAS), console.log(
					"\u662f\u5426\u5f00\u542f\u591a\u70b9\u89e6\u6478", cc.macro
					.ENABLE_MULTI_TOUCH), console.log(
					"\u662f\u5426\u663e\u793a\u5de6\u4e0b\u89d2\u8c03\u8bd5\u4fe1\u606f", cc
					.debug.isDisplayStats()), console.log(
					"\u662f\u5426\u5f00\u542f\u74e6\u7247\u5730\u56fe\u7684\u81ea\u52a8\u88c1\u51cf\u529f\u80fd",
					cc.macro.ENABLE_TILEDMAP_CULLING), console.log(
					"\u5355\u6b21\u6279\u5904\u7406\u6e32\u67d3\u7684\u9876\u70b9\u6570\u91cf",
					cc.macro.BATCH_VERTEX_COUNT), console.log(
					"Canvas\u80cc\u666f\u662f\u5426\u652f\u6301 alpha \u901a\u9053", cc
					.macro.ENABLE_TRANSPARENT_CANVAS), console.log(
					"\u5f15\u64ce\u652f\u6301\u7684\u56fe\u7247\u683c\u5f0f", ...cc.macro
					.SUPPORT_TEXTURE_FORMATS), console.groupEnd()
			}
			goHotUpdate() {}
			goLoading() {
				s.default.loadScene("loading")
			}
		};
		c = n([a], c), o.default = c, cc._RF.pop()
	}, {
		"../engines/configs/gameConfig": "gameConfig",
		"../engines/gameEngine": "gameEngine"
	}],
	superInterface: [function(e, t) {
		"use strict";
		cc._RF.push(t, "21d46Ab/AtJG6FHN9Vaq+5w", "superInterface"), cc._RF.pop()
	}, {}],
	superManager: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "74f25s+3ElOUZoffdG4BjnB", "superManager");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.default = class {
			constructor() {
				this.className = "\u7236\u7ba1\u7406"
			}
			loadManager() {
				return n(this, void 0, void 0, function*() {
					return console.log("\u52a0\u8f7d\u7ba1\u7406", this.className),
						Promise.resolve(!0)
				})
			}
			onLoadedManager() {
				return n(this, void 0, void 0, function*() {
					return console.log("\u52a0\u8f7d\u5b8c\u6bd5", this.className),
						Promise.resolve()
				})
			}
		}, cc._RF.pop()
	}, {}],
	superModule: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "a3724VWghBCP7N/IQWcJrHu", "superModule");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		class s {
			constructor() {
				this.m_className = "\u6a21\u5757\u8d85\u7c7b"
			}
			preLoadModules() {
				return n(this, void 0, void 0, function*() {
					return console.log("\u9884\u5148\u52a0\u8f7d\u6a21\u5757", this
						.m_className), Promise.resolve()
				})
			}
			loadModule() {
				return n(this, void 0, void 0, function*() {
					return console.log("\u52a0\u8f7d\u6a21\u5757", this.m_className),
						Promise.resolve()
				})
			}
			onLoadedModule() {
				return n(this, void 0, void 0, function*() {
					return console.log("\u52a0\u8f7d\u5b8c\u6bd5", this.m_className), s
						.m_instance = this, Promise.resolve()
				})
			}
			Log(...e) {
				console.log(`${this.m_className}:---{\n`, ...e, "\n}")
			}
			Warn(...e) {
				console.warn(`${this.m_className}:---{\n`, ...e, "\n}")
			}
		}
		o.default = s, s.m_instance = null, cc._RF.pop()
	}, {}],
	superService: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "db930bIkzRAb5mFEAItOQNi", "superService");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.default = class {
			constructor() {
				this.className = "\u7236\u670d\u52a1", this.m_loaded = !1
			}
			loadService() {
				return n(this, void 0, void 0, function*() {
					return console.log("\u52a0\u8f7d\u670d\u52a1", this.className),
						Promise.resolve()
				})
			}
			onLoadedService() {
				return n(this, void 0, void 0, function*() {
					return console.log("\u52a0\u8f7d\u5b8c\u6bd5", this.className), this
						.m_loaded = !0, Promise.resolve()
				})
			}
			isLoaded() {
				return this.m_loaded
			}
		}, cc._RF.pop()
	}, {}],
	topThreePage: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "6201duZlwhB1aoNIRUE4VMS", "topThreePage");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../Config/SkinConfig"),
			i = e("../../engines/components/comSpSkeleton"),
			a = e("../../engines/gameEngine"),
			r = e("../../engines/libs/data_control"),
			{
				ccclass: c,
				property: l
			} = cc._decorator;
		let d = class extends cc.Component {
			constructor() {
				super(...arguments), this.Titel = null, this.pigAni = null, this.wasClose = !1
			}
			loadPage(e, t, o, n) {
				const s = this.node.getChildByName("center"),
					i = s.getChildByName("have"),
					a = s.getChildByName("nothave"),
					c = s.getChildByName("bg1"),
					l = i.getChildByName("name").getComponent(cc.Label),
					d = i.getChildByName("city").getComponent(cc.Label);
				if (0 == n) {
					this.Titel.string = "\u5168\u56fd\u9886\u5934\u732a", i.active = !(null ==
						e), a.active = null == e, c.active = !(null == e);
					let t = i.active ? i : a;
					if (t.getChildByName("lintou").active = !0, e) {
						l.string = e.name, this.loadHeadImg(e.head), d.string = e.province, this
							.loadAni(e.spin);
						const o = r.default.getDateOfDataNow(e.fastTime),
							n = t.getChildByName("lintou").getChildByName("time").getComponent(
								cc.Label);
						let s = o.getMinutes() >= 10 ? o.getMinutes() : "0" + o.getMinutes();
						n.string = o.getHours() + ":" + s
					}
				}
				if (1 == n) {
					this.Titel.string = "\u6700\u5f3a\u738b\u8005", i.active = !(null == t), a
						.active = null == t, c.active = !(null == t);
					let e = i.active ? i : a;
					if (e.getChildByName("wangzhe").active = !0, t) {
						l.string = t.name, this.loadHeadImg(t.head), d.string = t.province, this
							.loadAni(t.spin);
						const o = r.default.getDateOfDataNow(t.fastTime),
							n = e.getChildByName("wangzhe").getChildByName("time").getComponent(
								cc.Label);
						let s = o.getMinutes() >= 10 ? o.getMinutes() : "0" + o.getMinutes();
						n.string = o.getHours() + ":" + s
					}
				}
				if (2 == n) {
					this.Titel.string = "\u79cb\u540d\u5c71\u732a\u795e", i.active = !(null ==
						o), a.active = null == o, c.active = !(null == o);
					let e = i.active ? i : a;
					if (e.getChildByName("zhushen").active = !0, o) {
						l.string = o.name, this.loadHeadImg(o.head), d.string = o.province, this
							.loadAni(o.spin);
						const t = r.default.getNewTimeClock(o.minTime);
						e.getChildByName("zhushen").getChildByName("useTime").getComponent(cc
							.Label).string = t
					}
				}
			}
			loadAni(e) {
				null == e && (e = 0);
				let t = s.getOneSkinConfigById(e),
					o = `sp/${t.sk}`;
				a.default.getModules().uiControlModule.getGameBundle().load(o, sp.SkeletonData,
					(e, o) => {
						if (e) return void console.error(
							"\u52a0\u8f7d\u52a8\u753b\u9519\u8bef hallPig.ts #87");
						this.pigAni.skeletonData = o, this.pigAni.setSkin(t.skin);
						let n = `Shake_0${Math.floor(3*Math.random()+1)}`;
						this.pigAni.playAnimation(n).start(!0)
					})
			}
			loadHeadImg(e) {
				a.services().miniGameSrv.getAppApiInstance().drawUrlImage(e, e => {
					this.node.getChildByName("center").getChildByName("have")
						.getChildByName("head").getComponent(cc.Sprite).spriteFrame = e
				})
			}
			OnBtnClose() {
				this.wasClose || (this.wasClose = !0, this.node.isValid && cc.tween(this.node)
					.to(.1, {
						opacity: 0
					}).call(() => {
						this.node.destroy(), this.node.removeFromParent()
					}).start())
			}
		};
		n([l({
			type: cc.Label,
			displayName: "\u6807\u9898"
		})], d.prototype, "Titel", void 0), n([l({
			type: i.default,
			displayName: "\u52a8\u753b"
		})], d.prototype, "pigAni", void 0), d = n([c], d), o.default = d, cc._RF.pop()
	}, {
		"../../Config/SkinConfig": "SkinConfig",
		"../../engines/components/comSpSkeleton": "comSpSkeleton",
		"../../engines/gameEngine": "gameEngine",
		"../../engines/libs/data_control": "data_control"
	}],
	ttApi: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "a07bfnRZR1Pioq8UW2PE02V", "ttApi");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../miniApp"),
			i = e("../../../configs/gameConfig"),
			a = e("../miniParam"),
			r = e("../../../libs/data_control"),
			c = e("../dataField"),
			l = e("../../../gameEngine"),
			d = window.tt;
		class u extends s.default {
			constructor() {
				super(...arguments), this.m_appId = "tt629d1420fda3e07a02", this.m_secret =
					"94a996842da9678b916a02b618b6cc731a99efde ", this.m_adUnitId =
					"351j8g9dd1c7bg7f08", this.m_adUnitIdList = ["krif824f7e16bahdh1",
						"8p9i0pb2mii34icpea", "351j8g9dd1c7bg7f08"
					], this.m_BannerId = "5r4jkctknka3p3v5io", this.m_InsertId =
					"nd2gfhfh9l25332gh3", this.m_accessToken = null, this
					.m_gameRecorderManager = null, this.m_gameRecordVideoUrl = null, this
					.m_videoAd = null, this.m_soundRecordManager = null, this
					.m_lastRecordSoundPath = null, this.m_BannerAd = null, this
					.bannerSuccess = !0, this.OnVideoAdErrorCallback = null, this
					.m_gameRecordTimeNow = 0, this.m_localInBlockCity = !1
			}
			getUserInfo(e) {
				d.getUserInfo(e)
			}
			showToast(e) {
				d.showToast(e)
			}
			showLoading(e) {
				d.showLoading(e)
			}
			showModal(e) {
				d.showModal(e)
			}
			hideLoading() {
				d.hideLoading()
			}
			preCreateUnits() {
				this.m_gameRecorderManager = d.getGameRecorderManager(), this
					.CheckLocalToBlockCityList()
			}
			onShareAppMessageGetReward(e, t, o, n) {
				let s = () => {
					d.shareAppMessage({
						templateId: "2w1ji856pahdij2f29",
						query: "",
						success: () => {
							console.log("tt \u5206\u4eab\u6210\u529f");
							let t = a.getLookVideoFailShareReportData(
								"\u5206\u4eab\u6210\u529f");
							this.reportAnalytics(t.key, t.obj), e(), o && o()
						},
						fail: e => {
							console.log("tt \u5206\u4eab\u5931\u8d25");
							let n = a.getLookVideoFailShareReportData(
								"\u5206\u4eab\u5931\u8d25");
							this.reportAnalytics(n.key, n.obj), t(e), o && o()
						}
					})
				};
				if (n) {
					console.log("tt \u62c9\u8d77\u5206\u4eab");
					let e = a.getLookVideoFailShareReportData("\u62c9\u8d77\u5206\u4eab");
					this.reportAnalytics(e.key, e.obj), this.showModal({
						title: "\u6e38\u620f\u5956\u52b1",
						content: "\u89c6\u9891\u62c9\u53d6\u5931\u8d25,\u5206\u4eab\u6e38\u620f\u4e5f\u53ef\u9886\u53d6\u89c6\u9891\u5956\u52b1",
						confirmText: "\u5206\u4eab",
						showCancel: !0,
						success: e => {
							console.log("tt \u5206\u4eabsuccess"), e.confirm ? s() :
								(t(null), o())
						}
					})
				} else s()
			}
			createMoreGameBtn() {
				const e = d.createMoreGamesButton({
					type: "text",
					style: {
						left: 120,
						top: 400,
						width: 120,
						height: 100,
						backgroundColor: "#ffffff",
						borderColor: "#ffff00",
						borderWidth: 10,
						borderRadius: 10,
						textAlign: "left",
						fontSize: 13,
						lineHeight: 50,
						textColor: "#000000"
					},
					text: "text\u7684button",
					actionType: "box",
					appLaunchOptions: [{
						appId: this.m_appId,
						query: d.getLaunchOptionsSync().query,
						extraData: {}
					}],
					onNavigateToMiniGameBox(e) {
						console.log("\u8df3\u8f6c\u5230\u5c0f\u6e38\u620f\u76d2\u5b50",
							e)
					}
				});
				let t = () => {
					console.log("\u70b9\u51fb\u66f4\u591a\u6e38\u620f\u6309\u94ae")
				};
				e.offTap(t), e.onTap(t), e.show()
			}
			showInterstitialAd(e, t) {
				if (d) {
					console.log("\u52a0\u6296\u97f3 \u63d2\u5c4f \u5e7f\u544a");
					let o = d.createInterstitialAd({
						adUnitId: this.m_InsertId
					});
					o.load(), o.onLoad(() => {
						console.warn(
								"\u63d2\u5c4f\u5e7f\u544a \u52a0\u8f7d\u5b8c\u6210"), o
							.show().catch(e => {
								console.warn(
										"\u63d2\u5c4f\u5e7f\u544a \u663e\u793a\u5931\u8d25 \uff1a" +
										JSON.stringify(e)), o.destroy(), o = null,
									t && t()
							})
					}), o.onError(e => {
						console.warn(
							"\u63d2\u5c4f\u5e7f\u544a \u52a0\u8f7d\u5931\u8d25" +
							JSON.stringify(e)), o.destroy(), o = null, t && t()
					}), o.onClose(() => {
						console.warn("\u63d2\u5c4f\u5e7f\u544a \u5173\u95ed"), null !=
							o && (o.destroy(), o = null), e && e()
					})
				} else e()
			}
			showBannerAD(e) {
				const {
					windowWidth: t,
					windowHeight: o
				} = d.getSystemInfoSync();
				this.m_BannerAd && 0 == this.bannerSuccess && (this.m_BannerAd.destroy(), this
					.m_BannerAd = null), this.m_BannerAd ? this.m_BannerAd.show().then(
			() => {
					console.log("\u5e7f\u544a\u663e\u793a\u6210\u529f")
				}).catch(e => {
					console.log("\u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898", e)
				}) : (this.bannerSuccess = !0, this.m_BannerAd = d.createBannerAd({
					adUnitId: this.m_BannerId,
					adIntervals: 30,
					style: {
						width: 200,
						top: o - 112.5
					}
				}), this.m_BannerAd.onResize(e => {
					console.log(e.width, e.height, "banner\u957f\u5bbd"), this
						.m_BannerAd.style.top = o - e.height, this.m_BannerAd.style
						.left = (t - e.width) / 2
				}), this.m_BannerAd.onLoad(() => {
					null != e && e.active && e.isValid && this.m_BannerAd.show()
						.then(() => {
							console.log("\u5e7f\u544a\u663e\u793a\u6210\u529f")
						}).catch(e => {
							console.log(
								"\u5e7f\u544a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898",
								e)
						})
				}), this.m_BannerAd.onError(e => {
					this.bannerSuccess = !1, console.log(
						"\u5e7f\u544a\u663e\u793a\u9519\u8bef,\u9519\u8bef\u539f\u56e0\uff1a",
						e)
				}))
			}
			hideBanner() {
				null != this.m_BannerAd && this.m_BannerAd.hide()
			}
			showNativeAd() {}
			OnVideoAdError(e) {
				console.error("tt \u89c6\u9891\u5e7f\u544a\u9519\u8bef", e);
				let t = a.getVideoFailLoadOrShow([`${e.errCode}`, e.errMsg]);
				this.reportAnalytics(t.key, t.obj)
			}
			loadAndShowVideoAd(e, t, o, n = "\u672a\u5b9a\u4e49\u8bf4\u660e", s = 0) {
				this.showLoading({
					title: "\u8bf7\u6c42\u4e2d",
					mask: !0
				}), null == this.OnVideoAdErrorCallback && (this.OnVideoAdErrorCallback =
					this.OnVideoAdError.bind(this));
				const i = r.default.getRandItemOfArray(this.m_adUnitIdList);
				console.log("tt \u89c6\u9891\u5e7f\u544a", i, n);
				const c = d.createRewardedVideoAd({
					adUnitId: i
				});
				c.offError(this.OnVideoAdErrorCallback), c.onError(this.OnVideoAdErrorCallback);
				let l = s => {
						if (c.offClose(l), console.log(
								"tt \u89c6\u9891\u5e7f\u544a\u5173\u95ed", s), s && s.isEnded) {
							let t = a.getLookVideoReportData(n);
							this.reportAnalytics(t.key, t.obj), e()
						} else {
							let e = a.getBeforeCloseVideoReportData(n);
							this.reportAnalytics(e.key, e.obj), t(
								"\u89c6\u9891\u4e2d\u9014\u9000\u51fa")
						}
						o && o()
					},
					u = () => {
						let e = a.getLoadVideoReportData(n);
						this.reportAnalytics(e.key, e.obj), c.load().then(() => {
							let e = a.getShowVideoReportData(n);
							this.reportAnalytics(e.key, e.obj), c.show().then(() => {
								this.hideLoading(), c.onClose(l)
							}).catch(() => {
								t && t("\u89c6\u9891\u5c55\u793a\u5f02\u5e38"),
									o && o()
							})
						}).catch(() => {
							t && t("\u89c6\u9891\u62c9\u53d6\u5f02\u5e3802"), o && o()
						})
					},
					h = a.getShowVideoReportData(n);
				this.reportAnalytics(h.key, h.obj), console.log("\u5c55\u793a\u4e00\u6b21"), c
					.show().then(() => {
						this.hideLoading(), c.onClose(l)
					}).catch(() => {
						console.log("\u91cd\u8bd5\u4e00\u6b21"), u()
					})
			}
			login(e) {
				d.login(e)
			}
			authorize(e) {
				e.success && e.success()
			}
			operateGameLive() {
				console.log("tt operateGameLive"), d.operateGameLive({
					type: "start",
					success(e) {
						console.log("tt operateGameLive success", e)
					},
					fail(e) {
						console.log("tt operateGameLive fail", e)
					}
				}), d.onGameLiveStatusChange(e => {
					console.log("tt \u76f4\u64ad\u72b6\u6001\u53d8\u5316", e)
				})
			}
			gameRecordStart(e, t) {
				this.isHaveShareVideo() && (this.m_gameRecordTimeNow = Date.now(), this
					.m_gameRecordVideoUrl = null, this.m_gameRecorderManager.onStart(e => {
						console.log("tt \u5f55\u5c4f\u5f00\u59cb", e), t && t(e)
					}), this.m_gameRecorderManager.onStop(e => {
						console.log("tt \u5f55\u5c4f\u7ed3\u675f", e.videoPath), this
							.m_gameRecordVideoUrl = e.videoPath
					}), this.m_gameRecorderManager.start(e))
			}
			gameRecordStop() {
				return !(!this.isHaveShareVideo() || Date.now() - this.m_gameRecordTimeNow <
					3500 || (this.m_gameRecorderManager.stop(), 0))
			}
			isGameRecordOver() {
				return null != this.m_gameRecordVideoUrl
			}
			shareGameRecordVideo(e, t) {
				this.isHaveShareVideo() && (this.m_gameRecordVideoUrl ? d.shareAppMessage({
					channel: "video",
					title: i.default.GAME_NAME,
					desc: i.default.GAME_VIDEO_SHARE_DESC,
					extra: {
						hashtag_list: [i.default.GAME_NAME],
						videoPath: this.m_gameRecordVideoUrl,
						videoTopics: [i.default.GAME_NAME],
						video_title: i.default.GAME_VIDEO_SHARE_TITLE,
						withVideoId: !0,
						defaultBgm: "https://v.douyin.com/JmcxWo8/"
					},
					success: t => {
						let o = a.getShareGameRecordReportData(
							"\u5206\u4eab\u6210\u529f");
						this.reportAnalytics(o.key, o.obj), console.log(
								"tt \u5206\u4eab\u89c6\u9891\u6210\u529f"),
							console.log(t.videoId), console.log(t
								.shareWithShareBgmStatus), console.log(
								"\u5206\u4eab\u89c6\u9891\u6210\u529f 4"), e &&
							e()
					},
					fail: e => {
						let o = a.getShareGameRecordReportData(
							"\u5206\u4eab\u5931\u8d25");
						this.reportAnalytics(o.key, o.obj), console.log(
								"tt \u5206\u4eab\u89c6\u9891\u5931\u8d25", e),
							"shareAppMessage:cancel" == e.errMsg && l.modules()
							.uiControlModule.showMessageBox(
								"\u53d6\u6d88\u5206\u4eab"), t && t(e)
					}
				}) : (t && t(null), l.modules().uiControlModule.showMessageBox(
					"\u5206\u4eab\u89c6\u9891\u65f6\u957f\u4e0d\u80fd\u5c11\u4e8e3\u79d2"
					), console.log("tt \u5206\u4eab\u89c6\u9891\u4e3a\u7a7a")))
			}
			addShortcut() {
				return new Promise(e => {
					d.addShortcut({
						success: () => {
							let t = a.getAddShortcutReportData(
								"\u6dfb\u52a0\u6210\u529f");
							this.reportAnalytics(t.key, t.obj), e(!0)
						},
						fail: () => {
							let t = a.getAddShortcutReportData(
								"\u6dfb\u52a0\u5931\u8d25");
							this.reportAnalytics(t.key, t.obj), e(!1)
						}
					})
				})
			}
			isProduction() {
				return u.isProduction()
			}
			isHaveShareVideo() {
				return !0
			}
			validAppId() {}
			reportAnalytics(e, t) {
				console.log("tt \u53d1\u9001\u57cb\u70b9", e, t), d.reportAnalytics(e, t)
			}
			clearMemory() {}
			shareAppMessage(e) {}
			createRewardedVideoAd(e) {
				this.m_videoAd = d.createRewardedVideoAd(e)
			}
			getAccessToken() {
				return n(this, void 0, void 0, function*() {
					return new Promise(e => {
						if (this.m_accessToken) return void e(this
							.m_accessToken);
						const t =
							`https://developer.toutiao.com/api/apps/token?appid=${this.m_appId}&secret=${this.m_secret}&grant_type=client_credential`;
						d.request({
							url: t,
							success: t => {
								if (200 != t.statusCode)
								return console.error(
										"#652\u9519\u8bef \u83b7\u53d6Access_token\u72b6\u6001\u9519\u8bef",
										t.errMsg, t), void e(
										null);
								this.m_accessToken = t.data
									.access_token, e(this
										.m_accessToken)
							},
							fail: t => {
								console.error(
									"#654\u9519\u8bef \u83b7\u53d6access_token\u5931\u8d25",
									t), e(null)
							}
						})
					})
				})
			}
			static isProduction() {
				return "production" == d.env.VERSION
			}
			reportAdClickNativeAd() {}
			getShareVideoRank(e, t) {
				this.getAccessToken().then(o => {
					console.log("\u5f53\u524dtoken", o);
					let n = "";
					switch (e) {
						case s.SHARE_VIDEO_SORT_TYPE.HOT:
							n =
							"https://gate.snssdk.com/developer/api/get_top_video_ids_by_like";
							break;
						case s.SHARE_VIDEO_SORT_TYPE.TIME:
							n =
							"https://gate.snssdk.com/developer/api/get_top_video_ids_by_time";
							break;
						default:
							return void console.error(
								"#661 \u9519\u8bef\u83b7\u53d6\u6392\u884c\u6392\u5e8f\u7c7b\u578b\u9519\u8bef"
								)
					}
					d.request({
						url: n,
						method: "POST",
						data: {
							app_id: this.m_appId,
							number_of_top: 20,
							access_token: o
						},
						success: e => {
							console.log("\u6392\u884c\u699c\u4fe1\u606f", e
								.data), 200 == e.statusCode ? (e.data &&
								t(e.data.data), t([])) : console.error(
								"#725 \u9519\u8bef\u7684\u6392\u884c\u699c",
								e.statusCode, e.errMsg, e)
						},
						fail: e => {
							console.error("#736\u9519\u8bef ", e), d
								.showToast({
									title: "\u8bf7\u6c42\u8d85\u65f6"
								}), t([])
						}
					})
				}).catch(e => {
					console.error("#706 \u5f02\u5e38", e), t([])
				})
			}
			drawUrlImage(e, t) {
				if (e.includes("local://")) l.default.getModules().uiControlModule
					.getGameBundle().load(e.replace("local://", "Head/"), cc.SpriteFrame, (e,
						o) => {
							e ? console.error(
								"\u52a0\u8f7d\u5934\u50cf\u5931\u8d25 ttApi #755") : t(o)
						});
				else {
					const o = d.createImage();
					o.src = e, console.log("tt \u52a0\u8f7d\u56fe\u7247", e), o
						.addEventListener("load", e => {
							if (console.log("tt \u52a0\u8f7d\u6210\u529f RGBA8888", e), e &&
								e.target && e.target.data) {
								let e = new cc.Texture2D;
								e.initWithElement(o), e.handleLoadedTexture();
								let n = new cc.SpriteFrame(e);
								t(n)
							}
						}), o.addEventListener("error", e => {
							console.error("tt \u56fe\u7247\u52a0\u8f7d\u5931\u8d25", e)
						})
				}
			}
			showVideo(e) {
				console.log("tt \u64ad\u653e\u89c6\u9891", e), d.navigateToVideoView({
					videoId: e,
					success: e => {
						console.log("tt done", e)
					},
					fail: e => {
						switch (e.errCode) {
							case 1002:
								d.showToast({
									title: "\u89c6\u9891\u88ab\u5220\u9664"
								})
						}
						console.error("#772 \u64ad\u653e\u9519\u8bef", e)
					}
				})
			}
			subscribeMessage(e, t, o) {
				d.requestSubscribeMessage({
					tmplIds: ["MSG11613335c650b014f0bcdffad5afb4c8cb0354113715"],
					success: t => {
						console.log("\u8ba2\u9605\u6210\u529f", t), this.showToast({
							title: "\u8ba2\u9605\u6210\u529f"
						}), e && e()
					},
					fail: e => {
						console.log(
							"\u8ba2\u9605\u5931\u8d25, \u9519\u8bef\u8be6\u60c5:",
							e), this.showToast({
							title: "\u8ba2\u9605\u5931\u8d25",
							icon: "fail"
						}), t && t()
					},
					complete: e => {
						console.log(
							"tt.requestSubscribeMessage API\u8c03\u7528\u5b8c\u6210: ",
							e), o && o()
					}
				})
			}
			showAddFavoriteGuide(e, t, o) {
				d.showFavoriteGuide({
					content: "\u4e00\u952e\u6dfb\u52a0\u5230\u6211\u7684\u5c0f\u7a0b\u5e8f",
					success: () => {
						console.log(
								"\u5f15\u5bfc\u7ec4\u4ef6\u5c55\u793a\u6210\u529f"),
							e && e()
					},
					fail: e => {
						console.warn(
							"\u5f15\u5bfc\u7ec4\u4ef6\u5c55\u793a\u5931\u8d25",
							e), t && t()
					},
					complete: () => {
						o && o()
					}
				})
			}
			StartRecordSound() {
				null == this.m_soundRecordManager && (this.m_soundRecordManager = d
						.getRecorderManager()), this.m_soundRecordManager.onError(e => {
						console.error("tt \u5f55\u97f3\u9519\u8bef", e.errMsg, e)
					}), this.m_soundRecordManager.onStart(() => {
						console.log("tt \u5f55\u97f3\u5df2\u5f00\u59cb")
					}), console.log("tt \u5f00\u59cb\u5f55\u97f3"), this.m_soundRecordManager
					.start({
						duration: 6e4,
						sampleRate: 44100,
						numberOfChannels: 2,
						encodeBitRate: 128e3,
						frameSize: 8e3
					})
			}
			StopRecordSound(e) {
				console.log("tt \u7ed3\u675f\u5f55\u97f3"), this.m_soundRecordManager.onStop(
					t => {
						console.log("tt \u5f55\u97f3\u5df2\u7ed3\u675f", t.tempFilePath),
							this.m_lastRecordSoundPath = t.tempFilePath, e && e()
					}), this.m_soundRecordManager.stop()
			}
			getChangeAudioBuffer(e, t) {
				const o = d.getAudioContext().createBuffer(e.numberOfChannels, e.length * t, e
					.sampleRate);
				console.log("tt \u53d8\u58f0\u53ef\u4ee5\u5728\u8fd9\u6267\u884c \u6e90\u957f",
					e.length, t);
				for (let n = 0; n < o.numberOfChannels; n++) {
					const s = o.getChannelData(n),
						i = e.getChannelData(n);
					console.log(
						"tt \u53d8\u58f0\u53ef\u4ee5\u5728\u8fd9\u6267\u884c \u76ee\u6807\u957f",
						o.length);
					for (let e = 0; e < o.length; e++) s[e] = i[Math.floor(e / t)]
				}
				return o
			}
			PlayLastRecordSound(e, t, o) {
				this.m_lastRecordSoundPath || (console.error(
						"#918\u9519\u8bef \u672a\u6709\u7684\u6570\u636e"), o && o()), e = e ||
					1, console.log("tt \u64ad\u653e\u53d8\u97f3 2", e), d.getFileSystemManager()
					.readFile({
						filePath: this.m_lastRecordSoundPath,
						success: n => {
							console.log("tt \u6587\u4ef6\u8bfb\u53d6\u6210\u529f", n);
							const s = d.getAudioContext();
							console.log("tt \u5f00\u59cb\u89e3\u6790", n.data), s
								.decodeAudioData(n.data).then(o => {
									const n = this.getChangeAudioBuffer(o, e);
									console.log("tt \u64ad\u653e", n);
									const i = s.createBufferSource();
									i.buffer = n, i.connect(s.destination), i
									.start(), i.onended = function() {
										console.log(
											"tt \u64ad\u653e\u7ed3\u675f",
											this), t && t()
									}
								}).catch(e => {
									console.error("\u89e3\u7801\u51fa\u9519", e
											.name, e.message, e.code), console
										.error("\u89e3\u7801\u51fa\u9519 JSON", JSON
											.stringify(e)), o && o()
								})
						},
						fail: e => {
							o && o(), console.error(
								"#927 \u6587\u4ef6\u8bfb\u53d6\u9519\u8bef", JSON
								.stringify(e))
						}
					})
			}
			playerOnlineSound(e, t) {
				console.log("\u64ad\u653e\u5728\u7ebf\u97f3\u9891 14");
				const o = d.getAudioContext();
				let n = new XMLHttpRequest;
				n.open("GET",
					"http://hao.haolingsheng.com/ring/000/991/86ced5cdc9783286406185bc0738502e.mp3",
					!0), n.responseType = "arraybuffer", n.onload = function() {
					let e = n.response;
					console.log("\u6536\u5230\u4e86"), console.log(
							"\u89e3\u6790\u5728\u7ebf\u6570\u636e", e), o.decodeAudioData(e)
						.then(e => {
							console.log(e);
							const t = o.createBufferSource();
							t.buffer = e, t.connect(o.destination), t.start(), t
								.onended = function() {
									console.log("onended called", this)
								}
						}).catch(e => {
							console.error("\u89e3\u7801\u51fa\u9519", e)
						})
				}, n.send()
			}
			CheckLocalToBlockCityList() {
				this.m_localInBlockCity = !1
			}
			LocalInBlockCityList() {
				return this.m_localInBlockCity
			}
			vibrate(e) {
				switch (e) {
					case s.VIBRATE_TYPE.LONG:
						d.vibrateLong();
						break;
					case s.VIBRATE_TYPE.SHORT:
						d.vibrateShort()
				}
			}
			commitRank(e, t) {
				return n(this, void 0, void 0, function*() {
					if (console.debug("tt \u63d0\u4ea4\u5206\u6570 1"), !(yield this
							.isAntherUserInfo())) {
						if (console.debug("tt \u5c1a\u672a\u6388\u6743"), !(yield this
								.goLoginSelect(
									"\u63d0\u4ea4\u6392\u884c\u699c\u5206\u6570")))
							return console.debug("tt \u6388\u6743\u5931\u8d25"), this
								.showToast({
									title: "\u7528\u6237\u6388\u6743\u5931\u8d25"
								}), Promise.resolve(!1);
						console.debug("tt \u6388\u6743\u6210\u529f")
					}
					d.setUserGroup({
						groupId: c.dataField.RANK_GROUP.TT_USER
					});
					const o = {};
					return o.score = t, o.rankId = e, o.operaType = c.dataField
						.OPERA_TYPE.COMMIT_SCORE, d.getOpenDataContext().postMessage(o),
						Promise.resolve(!0)
				})
			}
			showRank(e) {
				return n(this, void 0, void 0, function*() {
					if (!(yield this.isAntherUserInfo()) && !(yield this.goLoginSelect(
							"\u67e5\u770b\u6392\u884c\u699c\u5206\u6570"))) return this
						.showToast({
							title: "\u7528\u6237\u6388\u6743\u5931\u8d25"
						}), Promise.resolve(!1);
					const t = {};
					return t.rankId = e, t.operaType = c.dataField.OPERA_TYPE
						.SHOW_SCORE, d.getOpenDataContext().postMessage(t), Promise
						.resolve(!0)
				})
			}
			goLoginSelect(e) {
				return n(this, void 0, void 0, function*() {
					return console.debug("tt \u6388\u6743\u5f39\u63d0\u793a\u6846"),
						new Promise(t => {
							this.showModal({
								title: e,
								content: "\u6b64\u529f\u80fd\u9700\u8981\u6388\u6743\u767b\u5f55\u8d26\u53f7\u624d\u53ef\u4f7f\u7528",
								confirmText: "\u767b\u5f55",
								cancelText: "\u53d6\u6d88",
								showCancel: !0,
								success: e => {
									console.debug(
										"tt \u6388\u6743\u5f39\u63d0\u793a\u6846\u5b8c\u6bd5"
										), e.confirm ? (console
										.debug(
											"tt \u62c9\u8d77\u767b\u5f55"
											), this.login({
											force: !0,
											success: () => {
												console
													.debug(
														"tt \u767b\u5f55\u5b8c\u6210 1"
														),
													this
													.authorize({
														scope: "scope.userInfo",
														success: () => {
															console
																.debug(
																	"tt \u6388\u6743\u6210\u529f"
																	),
																this
																.getUserInfo({
																	success: () => {
																		console
																			.debug(
																				"tt \u83b7\u53d6\u7528\u6237\u4fe1\u606f\u6210\u529f"
																				),
																			t(!
																				0)
																	},
																	fail: () => {
																		t(!1)
																	}
																})
														},
														fail: () => {
															t(!1)
														}
													})
											},
											fail: () => {
												t(!1)
											}
										})) : t(!1)
								},
								fail() {
									t(!1)
								}
							})
						})
				})
			}
			isAntherUserInfo() {
				return n(this, void 0, void 0, function*() {
					return new Promise(e => {
						d.getSetting({
							success: t => {
								console.debug(
									"tt \u8bbe\u7f6e\u7ed3\u679c",
									t), e(t.authSetting[
									"scope.userInfo"])
							},
							fail: () => {
								e(!1)
							}
						})
					})
				})
			}
			navigateToMiniGame(e, t, o) {
				console.error("#1000102904 \u672a\u5b9e\u73b0\u8df3\u8f6c")
			}
			drawHead(e) {
				return Promise.resolve(void 0)
			}
			fullScreenVideo() {
				return Promise.resolve(void 0)
			}
			CloseBoxPortal() {}
			destroyTemplateNad() {}
			hideTemplateNad() {}
			loadAndShowBoxPortalAd(e, t, o) {}
			showTemplateNaD() {}
		}
		o.default = u, cc._RF.pop()
	}, {
		"../../../configs/gameConfig": "gameConfig",
		"../../../gameEngine": "gameEngine",
		"../../../libs/data_control": "data_control",
		"../dataField": "dataField",
		"../miniApp": "miniApp",
		"../miniParam": "miniParam"
	}],
	uiModule: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "d2172RdtbhJ47cUFRF/Qx6I", "uiModule");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.PAGE = o.UI_Z_INDEX = void 0;
		const s = e("./superModule"),
			i = e("./uiModule/o1MessageBox"),
			a = e("./uiModule/o1Loading"),
			r = e("../gameEngine"),
			c = e("./uiModule/PageBase"),
			l = e("../../scenes/hall/SkinRewardPage"),
			d = e("../../Config/SkinConfig"),
			u = e("../../scenes/hall/SkinExplainPage");
		var h, g;
		(function(e) {
			e[e.NORMAL = 0] = "NORMAL", e[e.DIALOG = 10] = "DIALOG", e[e.LOADING = 11] = "LOADING",
				e[e.MESSAGE = 12] = "MESSAGE"
		})(h = o.UI_Z_INDEX || (o.UI_Z_INDEX = {})),
		function(e) {
			e.DIALOG_SELECT = "frame/o1SelectBox", e.DIALOG_DIALOG = "frame/o1DialogBox", e
				.DIALOG_INFINITYPOWER = "infinitypower", e.DIALOG_ADDUSERPROP = "control/addUserProp", e
				.DIALOG_REWARDVIEW = "control/RewardView"
		}(g = o.PAGE || (o.PAGE = {})), o.default = class extends s.default {
			constructor() {
				super(), this.m_className = "UI\u6a21\u5757", this.m_publicFontBundle =
					"o1FontRes", this.m_pathFrameBundle = "o1ModuleRes", this.m_pathGameBundle =
					"gameBundle", this.m_pathPreloadFrame = "preload/frame", this
					.m_pathPreloadGame = "preload", this.InfinityModel = "user-is-infinity",
					this.InfinityPower_Key = "user-logintime", this.m_frameBundle = null, this
					.m_gameBundle = null, this.m_uiRoot = null, this.m_currDialog = null, this
					.m_dialogList = [], this.m_loadingPage = [], this.pageMap = {}, this
					.m_uiBgTexture = null, this.m_uiBgSpriteFrame = null, this.dialogIndex = 0,
					this.isOKRightOrUnderlie = !0, this.dlgBoxName_VD = ["o1DialogBox_VD_CP",
						"o1DialogBox_VD_DS", "o1DialogBox_VD_CC"
					], this.m_loadingNode = null, this.m_loadingOver = !1
			}
			setGaussianMode(e) {}
			getUIRoot() {
				return this.m_uiRoot
			}
			SetUIRoot(e) {
				this.m_uiRoot = e
			}
			getFrameBundlePreloadResPath() {
				return this.m_pathPreloadFrame
			}
			getGameBundlePreloadResPath() {
				return this.m_pathPreloadGame
			}
			preLoadModules() {
				const e = Object.create(null, {
					preLoadModules: {
						get: () => super.preLoadModules
					}
				});
				return n(this, void 0, void 0, function*() {
					return e.preLoadModules.call(this)
				})
			}
			loadModule() {
				const e = Object.create(null, {
					loadModule: {
						get: () => super.loadModule
					}
				});
				return n(this, void 0, void 0, function*() {
					return e.loadModule.call(this)
				})
			}
			GetPage(e, t) {
				const o = this.pageMap[e];
				return o || this.Warn(
					"\u4e0d\u5b58\u5728\u8fd9\u4e2a\u9875\u9762\u7684\u5b9e\u4f8b", e), o
			}
			OpenPage(e, t, o) {
				return n(this, void 0, void 0, function*() {
					const s = t == h.DIALOG;
					this.Log("\u5c1d\u8bd5\u6253\u5f00", e, s);
					let i = 0;
					if (s && (this.dialogIndex++, i = this.dialogIndex), this.pageMap[
						e]) return this.Log("\u4ece\u9690\u85cf\u6253\u5f00", e), this
						.pageMap[e].node.active = !0, void this.pageMap[e]
						.OnPageOpen(o);
					const a = s ? e + i.toString() : e;
					if (!this.m_loadingPage.includes(a) || s) return this.m_loadingPage
						.push(a), new Promise((r, l) => {
							this.m_frameBundle.load(`preload/${e}`, (d, u) => n(
								this, void 0, void 0,
								function*() {
									if (d) return l(d), void console
										.error(
											"\u9875\u9762\u52a0\u8f7d\u9519\u8bef",
											d);
									let n = cc.instantiate(u),
										h = n.getComponent(c.default);
									h || this.Warn(
											"\u9875\u9762\u6ca1\u6709\u6302\u8f7d\u811a\u672c!!!",
											e), h.pageIndex = t, this
										.pageMap[a] = h, h.pageName = e,
										h.dialogIndex = i, this
										.getUIRoot().addChild(n, h
											.pageIndex);
									let g = this.m_loadingPage.indexOf(
										a);
									g > -1 && this.m_loadingPage.splice(
											g), s && (this
											.m_currDialog && (this
												.HidePage(this
													.m_currDialog
													.pageName + this
													.m_currDialog
													.dialogIndex
													.toString()), this
												.m_dialogList.push(this
													.m_currDialog)),
											this.m_currDialog = h),
										yield h.OnPageOpen(o), r(h)
								}))
						});
					this.Warn(
						"\u6b63\u5728\u52a0\u8f7d\u9875\u9762\uff0c\u4e0d\u8981\u91cd\u590d\u6253\u5f00"
						)
				})
			}
			ShowPage(e) {
				var t;
				this.pageMap[e] && (null === (t = this.pageMap[e]) || void 0 === t || t
					.OnPageOpen())
			}
			HidePage(e) {
				this.pageMap[e] && this.pageMap[e].HidePage()
			}
			ClosePage(e) {
				var t;
				if (this.Log("\u5c1d\u8bd5\u5173\u95ed", e), this.pageMap[e]) {
					if ((null === (t = this.pageMap[e]) || void 0 === t ? void 0 : t
						.pageIndex) == h.DIALOG) {
						const e = this.m_dialogList.pop();
						this.Log("\u5c55\u5f00\u4e00\u4e2a\u5f39\u7a97", null == e ? void 0 : e
							.pageName, null == e ? void 0 : e.dialogIndex), e && (this
							.ShowPage(e.pageName + e.dialogIndex.toString()), this
							.m_currDialog = e)
					}
					this.pageMap[e].OnPageClose(), this.pageMap[e] = null, delete this.pageMap[
						e]
				}
			}
			CloseAllPage() {
				this.m_currDialog = null, this.m_dialogList = [];
				for (const e in this.pageMap)
					if (Object.prototype.hasOwnProperty.call(this.pageMap, e)) {
						const t = this.pageMap[e];
						t && t.OnPageClose()
					} this.pageMap = {}
			}
			showSelectBox(e, t, o, s = !0, i) {
				return n(this, void 0, void 0, function*() {
					return (yield this.OpenPage(g.DIALOG_SELECT, h.DIALOG))
						.showSelectBox(e, t, o, s)
				})
			}
			showMessageBox(e, t = null, o = 2) {
				t = t || this.getUIRoot().getChildByName("Message"), this.m_frameBundle.load(
					`${this.m_pathPreloadFrame}/o1MessageBox`, cc.Prefab, (n, s) => {
						if (n) return void console.error(
							"#40\u9519\u8bef \u9519\u8bef\u6d88\u606f\u6846\u9884\u5236\u4f53",
							n);
						let a = cc.instantiate(s);
						a.getComponent(i.default).showMessageBox(e, o), t.addChild(a, h
							.MESSAGE)
					})
			}
			showDialogBox(e, t, o = !1, n, s = null, i, a, r, c = null, l) {
				s = s || this.getUIRoot();
				const d = {
					title: e,
					message: t,
					isCancelOk: o,
					clickCallBack: n,
					okButtonText: i,
					cancelButtonText: a,
					lookVideoCount: r,
					lookVideoSource: l
				};
				this.OpenPage(g.DIALOG_DIALOG, h.DIALOG, d)
			}
			showLoading(e = null, t = "\u6b63\u5728\u52a0\u8f7d") {
				return n(this, void 0, void 0, function*() {
					return new Promise(o => {
						this.m_loadingOver = !1, e = e || this.getUIRoot(), this
							.m_frameBundle.load(
								`${this.m_pathPreloadFrame}/o1Loading`, cc
								.Prefab, (n, s) => {
									if (n) return console.error(
										"#40\u9519\u8bef \u9519\u8bef\u5bf9\u8bdd\u6846\u52a0\u8f7d",
										n), o();
									this.m_loadingNode && (this.m_loadingNode
											.isValid ? this.m_loadingNode
											.removeFromParent(!1) : (this
												.m_loadingNode.destroy(), this
												.m_loadingNode = null)), this
										.m_loadingNode || (this.m_loadingNode =
											cc.instantiate(s)), this
										.m_loadingNode.getComponent(a.default)
										.showLoading(t), e.addChild(this
											.m_loadingNode, h.LOADING), o()
								})
					})
				})
			}
			showInfinityPower(e, t) {
				if (r.default.getServices().localStorageSrv.getStorage(this
					.InfinityPower_Key)) {
					let o = Math.random();
					0 == Number(r.default.getServices().localStorageSrv.getStorage(this
							.InfinityModel)) ? o < e && this.createAndShowInfinityPower(t) :
						this.showMessageBox("\u4eca\u65e5\u5df2\u7ecf\u89e3\u9501")
				} else r.default.getServices().localStorageSrv.setStorage(this
					.InfinityPower_Key, Date.now()), this.createAndShowInfinityPower(t)
			}
			showUserPropGet(e, t, o, n) {
				const s = {
					propType: e,
					propNumber: t
				};
				this.OpenPage(g.DIALOG_ADDUSERPROP, h.DIALOG, s), n && n()
			}
			showGetRewarded(e, t, o, n, s) {
				const i = {
					rewardType: e,
					rewardCount: t,
					titleString: o
				};
				this.OpenPage(g.DIALOG_REWARDVIEW, h.DIALOG, i)
			}
			createAndShowInfinityPower(e) {
				this.OpenPage(g.DIALOG_INFINITYPOWER, h.DIALOG)
			}
			showSkinRewardPage(...e) {
				return n(this, void 0, void 0, function*() {
					for (let t = 0; t < e.length; t++) d.getOneSkinIsUnlock(e[t]) || (
						yield this.showLoading(), yield new Promise(o => {
							this.getGameBundle().load(
								"prefab/SkinRewardPage", cc.Prefab,
								(n, s) => {
									if (n) return this
									.hideLoading(), void console
										.log(
											"\u52a0\u8f7d\u76ae\u80a4\u89e3\u9501\u754c\u9762\u5931\u8d25"
											);
									this.hideLoading();
									let i = d.getOneSkinConfigById(
											e[t]),
										a = cc.instantiate(s);
									a.getComponent(l.default)
										.setData(i, o), r.default
										.Canvas().addChild(a)
								})
						}))
				})
			}
			showSkinExplainPage(e) {
				return n(this, void 0, void 0, function*() {
					yield this.showLoading(), this.getGameBundle().load(
						"prefab/SkinExplainPage", cc.Prefab, (t, o) => {
							if (t) return console.log(
								"\u52a0\u8f7d\u76ae\u80a4\u89e3\u9501\u754c\u9762\u5931\u8d25"
								), void this.hideLoading();
							this.hideLoading();
							let n = d.getOneSkinConfigById(e),
								s = cc.instantiate(o);
							s.getComponent(u.default).setData(n), r.default.Canvas()
								.addChild(s)
						})
				})
			}
			showCardPage() {
				return n(this, void 0, void 0, function*() {
					yield this.showLoading(), this.getGameBundle().load(
						"prefab/CardPage", cc.Prefab, (e, t) => {
							if (e) return console.log(
								"\u52a0\u8f7d\u76ae\u80a4\u89e3\u9501\u754c\u9762\u5931\u8d25"
								), void this.hideLoading();
							this.hideLoading();
							let o = cc.instantiate(t);
							r.default.Canvas().addChild(o)
						})
				})
			}
			hideLoading() {
				this.m_loadingNode && this.m_loadingNode.isValid && this.m_loadingNode
				.destroy(), this.m_loadingNode = null, this.m_loadingOver = !0
			}
			getFrameBundlePath() {
				return this.m_pathFrameBundle
			}
			getFontBundlePath() {
				return this.m_publicFontBundle
			}
			getGameBundlePath() {
				return this.m_pathGameBundle
			}
			setFrameBundle(e) {
				this.m_frameBundle = e
			}
			setGameBundle(e) {
				this.m_gameBundle = e
			}
			getFrameBundle() {
				return this.m_frameBundle
			}
			getGameBundle() {
				return this.m_gameBundle
			}
			showFramePrefab(e, t, o, n) {
				t = t || this.getUIRoot(), o && this.showLoading(), this.m_frameBundle.load(e,
					cc.Prefab, (s, i) => {
						if (o && this.hideLoading(), s) console.error(
							"#446 \u9519\u8bef ui\u52a0\u8f7d\u9884\u5236\u4f53", e);
						else if (t && t.isValid) {
							let e = cc.instantiate(i);
							t.addChild(e), n && n(e)
						} else console.error(
							"#453 \u9519\u8bef ui \u7236\u8282\u70b9\u5df2\u5931\u6548",
							e, Date.now())
					})
			}
			showHideDialogAnimation(e, t, o) {
				if (e && e.isValid) {
					const n = .26;
					t ? (e.scale = 0, cc.tween(e).parallel(cc.tween(e).to(n, {
						scale: 1
					}), cc.tween(e).by(.45 * n, {
						y: 250
					}, {
						easing: "cubicOut"
					}).by(.55 * n, {
						y: -250
					}, {
						easing: "cubicIn"
					})).call(o).start()) : cc.tween(e).parallel(cc.tween(e).to(n, {
						scale: 0
					}), cc.tween(e).by(.55 * n, {
						y: 250
					}, {
						easing: "cubicOut"
					}).by(.45 * n, {
						y: -250
					}, {
						easing: "cubicIn"
					})).call(o).start()
				}
			}
		}, cc._RF.pop()
	}, {
		"../../Config/SkinConfig": "SkinConfig",
		"../../scenes/hall/SkinExplainPage": "SkinExplainPage",
		"../../scenes/hall/SkinRewardPage": "SkinRewardPage",
		"../gameEngine": "gameEngine",
		"./superModule": "superModule",
		"./uiModule/PageBase": "PageBase",
		"./uiModule/o1Loading": "o1Loading",
		"./uiModule/o1MessageBox": "o1MessageBox"
	}],
	umaConfig: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "1ca43B+7SlBma+3TCoL+ZsN", "umaConfig"), Object.defineProperty(o, "__esModule", {
				value: !0
			}), o.UMA_SDK = void 0, (o.UMA_SDK || (o.UMA_SDK = {})).APP_KEY =
			"60e2a4818a102159db886a82", cc._RF.pop()
	}, {}],
	userInterface: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "38f56a0EIxEFpb4OmcNPRI9", "userInterface"), Object.defineProperty(o,
				"__esModule", {
					value: !0
				}), o.REWARD_TYPE = void 0,
			function(e) {
				e[e.COIN = 0] = "COIN", e[e.POWER = 1] = "POWER", e[e.DIAMOND = 2] = "DIAMOND", e[e
					.CUSTOM = 3] = "CUSTOM"
			}(o.REWARD_TYPE || (o.REWARD_TYPE = {})), cc._RF.pop()
	}, {}],
	userService: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "3eca8N5/3pDhaqdtgN0KWt5", "userService");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		}), o.BARDGEANITYPE = o.MEMBERTYPE = void 0;
		const s = e("./superService"),
			i = e("../gameEngine"),
			a = e("../configs/gameConfig"),
			r = e("../libs/data_control");
		(function(e) {
			e[e.DIAMOND = 0] = "DIAMOND", e[e.KING = 1] = "KING"
		})(o.MEMBERTYPE || (o.MEMBERTYPE = {})),
		function(e) {
			e.DIAMONDSTAND = "DiamondStand", e.DIAMONDOPEN = "DiamondArise", e.KINGSTAND = "KingStand",
				e.KINGOPEN = "Switch"
		}(o.BARDGEANITYPE || (o.BARDGEANITYPE = {})), o.default = class extends s.default {
			constructor() {
				super(), this.className = "\u7528\u6237\u670d\u52a1", this.COINS_KEY =
					"user-coins", this.POWER_KEY = "user-power", this.UNLOCK_KEY =
					"user-unlock", this.POWER_TIME_KEY = "user-power-time", this
					.FIRST_PLAY_KEY = "user-first-play", this.USER_HAS_SKIN_KEY =
					"user-has-skin-play", this.USER_USE_SKIN_KEY = "user-use-skin-key", this
					.m_currLoginCode = null, this.m_UniqueId = null, this.m_curWebUserInfo =
					null, this.ALL_JOIN_PIG_COUNT_KEY = "all-join-pig-count-key", this
					.ALL_CHALLENGE_COUNT_KEY = "all-challenge-count-key", this
					.TODAY_CHALLENGE_COUNT_KEY = "today-challenge-count-key", this
					.TODAY_JOIN_PIG_KEY = "today-join-pig-key", this.TODAY_DATE_KEY =
					"today-date-key"
			}
			loadService() {
				const e = Object.create(null, {
					loadService: {
						get: () => super.loadService
					}
				});
				return n(this, void 0, void 0, function*() {
					return yield e.loadService.call(this), this.onInitNormalData(a
						.default.MAX_POWER, a.default.NORMAL_POWER, a.default
						.NORMAL_COINS, a.default.ADD_ONCE_POWER, a.default
						.REST_POWER_TIME, a.default.REST_POWER_VALUE, a.default
						.ADD_ONCE_COINS), Promise.resolve()
				})
			}
			isFirstPlayerTimeIn() {
				return Date.now() - this.m_firstPlayerTime < 1e3 * a.default.FIRST_VIDEO_TIME
			}
			onInitNormalData(e, t, o, n, s, i, a) {
				this.m_powerMax = e, this.m_normalPower = t, this.m_normalCoins = o, this
					.m_constAddOncePower = n, this.m_constResetPowerTime = s, this
					.m_constResetPowerValue = i, this.m_constAddOnceCoins = a, this
					.loadUserData()
			}
			getUserHasSkin() {
				let e = i.default.getServices().localStorageSrv.getStorage(this
						.USER_HAS_SKIN_KEY),
					t = [];
				return (t = e && "" != e ? JSON.parse(e) : ["0"]).length < 1 && (t = ["0"]), t
			}
			setUserHasSkin(e) {
				i.default.getServices().localStorageSrv.setStorage(this.USER_HAS_SKIN_KEY, JSON
					.stringify(e))
			}
			getUserUseSkin() {
				let e = i.default.getServices().localStorageSrv.getStorage(this
					.USER_USE_SKIN_KEY);
				return e && "" != e || (e = "0"), JSON.parse(e)
			}
			setUserUseSkin(e) {
				i.default.getServices().localStorageSrv.setStorage(this.USER_USE_SKIN_KEY, e)
			}
			getResetPowerTime() {
				return this.m_constResetPowerTime
			}
			getResetPowerValue() {
				return this.m_constResetPowerValue
			}
			setCoins(e, t) {
				t && (e = this.m_coins + e), this.m_coins = r.default.getValueOfAreaMinMax(e, 0,
					Number.MAX_VALUE), this.writeCoins()
			}
			getCoins() {
				return this.m_coins
			}
			setPower(e, t, o, n = !1) {
				t && (e = this.m_power + e), this.m_powerMax == this.m_power && e == this
					.m_power - 1 && (n = !0), this.m_power = o ? r.default.getValueOfAreaMinMax(
						e, 0, 9999) : r.default.getValueOfAreaMinMax(e, 0, this.m_powerMax),
					this.writePower(n)
			}
			getMaxPower() {
				return this.m_powerMax
			}
			getNormalPower() {
				return this.m_normalPower
			}
			getPower() {
				return this.m_power
			}
			getMemberStatus() {
				let e = i.default.getServices().localStorageSrv.getStorage(
					"private-member-type") || "0";
				return Number(e)
			}
			setMemberStatus(e = 0) {
				i.default.getServices().localStorageSrv.setStorage("private-member-type", e), i
					.default.getServices().localStorageSrv.setStorage("user-membertime", Date
						.now())
			}
			addPowerOfVideo() {
				this.setPower(this.m_constAddOncePower, !0, !0)
			}
			getConstAddOncePower() {
				return this.m_constAddOncePower
			}
			setUnlockLevel(e, t) {
				t && (e = this.m_unlockLevel + e), this.m_unlockLevel = e, this
					.writeUnLockLevel()
			}
			getUnlockLevel() {
				return this.m_unlockLevel
			}
			getPowerResetTimer() {
				let e = Date.now(),
					t = i.default.getServices().localStorageSrv.getStorage(this
					.POWER_TIME_KEY) || e;
				return this.m_constResetPowerTime - Math.floor((e - Number(t)) / 1e3)
			}
			onPowerTimerReset() {
				let e = Date.now(),
					t = i.default.getServices().localStorageSrv.getStorage(this
					.POWER_TIME_KEY) || e;
				t = Number(t);
				let o = Math.floor((e - t) / (1e3 * this.m_constResetPowerTime)) * this
					.m_constResetPowerValue;
				return !!(o && this.getPower() < this.m_powerMax) && (this.setPower(o, !0, !1, !
					0), !0)
			}
			loadUser() {
				this.loadNameAndHead()
			}
			loadFirstPlayerTime() {
				this.m_firstPlayerTime = Number(i.default.getServices().localStorageSrv
						.getStorage(this.FIRST_PLAY_KEY) || "0"), 0 == this.m_firstPlayerTime &&
					(this.m_firstPlayerTime = Date.now(), this.writeFirstPlayerTime())
			}
			writeFirstPlayerTime() {
				i.default.getServices().localStorageSrv.setStorage(this.FIRST_PLAY_KEY, this
					.m_firstPlayerTime)
			}
			loadUserData() {
				this.loadCoins(), this.loadPower(), this.loadUnlockLevel(), this
					.loadFirstPlayerTime(), this.loadNameAndHead()
			}
			loadUnlockLevel() {
				this.m_unlockLevel = Number(i.default.getServices().localStorageSrv.getStorage(
					this.UNLOCK_KEY) || 0)
			}
			writeUnLockLevel() {
				i.default.getServices().localStorageSrv.setStorage(this.UNLOCK_KEY, this
					.m_unlockLevel)
			}
			loadCoins() {
				let e = i.default.getServices().localStorageSrv.getStorage(this.COINS_KEY);
				this.m_coins = null == e || "" === e ? this.m_normalCoins : Number(e)
			}
			loadPower() {
				const e = i.default.getServices().localStorageSrv.getStorage(this.POWER_KEY);
				this.m_power = "" === e || null === e ? this.m_normalPower : Number(e), this
					.onPowerTimerReset()
			}
			writeCoins() {
				i.default.getServices().localStorageSrv.setStorage(this.COINS_KEY, this.m_coins)
			}
			writePower(e) {
				i.default.getServices().localStorageSrv.setStorage(this.POWER_KEY, this
				.m_power);
				let t = i.services().localStorageSrv.getStorage(this.POWER_TIME_KEY);
				if (e || !t) {
					let e = Date.now();
					i.default.getServices().localStorageSrv.setStorage(this.POWER_TIME_KEY, e)
				}
			}
			loadNameAndHead() {
				let e = i.default.getServices().miniGameSrv.getAppApiInstance(),
					t = () => {
						e.showToast({
							title: "\u767b\u5f55\u5931\u8d25"
						})
					};
				e.login({
					force: !1,
					success: () => {
						e.authorize({
							success: () => {
								e.getUserInfo({
									success: () => {},
									fail: t
								})
							},
							fail: t
						})
					},
					fail: t
				})
			}
			onWebInfoUpdate() {
				setInterval(() => {
					if (null != this.m_UniqueId && null != this.m_curWebUserInfo) {
						for (let e in this.m_curWebUserInfo) this.m_curWebUserInfo[e] =
							this[e];
						console.log("\u66f4\u65b0\u6570\u636e", this.m_UniqueId, this
							.m_curWebUserInfo)
					}
				}, 3e3)
			}
			onWebInfoGetOnce() {
				if (null != this.m_UniqueId && null != this.m_curWebUserInfo && this.m_coins ==
					this.m_normalCoins) {
					console.log("\u83b7\u53d6\u6570\u636e", this.m_curWebUserInfo);
					for (let e in this.m_curWebUserInfo) this[e] = this.m_curWebUserInfo[e]
				}
			}
			checkTodayDate() {
				let e = r.default.getCurrDateDayString();
				e != i.default.getServices().localStorageSrv.getStorage(this.TODAY_DATE_KEY) &&
					(i.default.getServices().localStorageSrv.setStorage(this.TODAY_DATE_KEY, e),
						this.initTodayData())
			}
			getAllJoinPigCount() {
				let e = i.default.getServices().localStorageSrv.getStorage(this
						.ALL_JOIN_PIG_COUNT_KEY) || "0",
					t = Number(e);
				return isNaN(t) && (t = 0), t
			}
			setAllJoinPigCount(e, t = !1) {
				let o = this.getAllJoinPigCount();
				t ? o += e : o = e, i.default.getServices().localStorageSrv.setStorage(this
					.ALL_JOIN_PIG_COUNT_KEY, o)
			}
			getAllChallengeCount() {
				let e = i.default.getServices().localStorageSrv.getStorage(this
						.ALL_CHALLENGE_COUNT_KEY) || "0",
					t = Number(e);
				return isNaN(t) && (t = 0), t
			}
			setAllChallengeCount(e, t = !1) {
				let o = this.getAllChallengeCount();
				t ? o += e : o = e, i.default.getServices().localStorageSrv.setStorage(this
					.ALL_CHALLENGE_COUNT_KEY, o)
			}
			getTodayChallengeCount() {
				let e = i.default.getServices().localStorageSrv.getStorage(this
						.TODAY_CHALLENGE_COUNT_KEY) || "0",
					t = Number(e);
				return isNaN(t) && (t = 0), t
			}
			setToDayChallengeCount(e, t = !1) {
				let o = this.getTodayChallengeCount();
				t ? o += e : o = e, i.default.getServices().localStorageSrv.setStorage(this
					.TODAY_CHALLENGE_COUNT_KEY, o)
			}
			getTodayJoinPig() {
				return "true" == (i.default.getServices().localStorageSrv.getStorage(this
					.TODAY_JOIN_PIG_KEY) || "false")
			}
			setTodayJoinPig(e) {
				i.default.getServices().localStorageSrv.setStorage(this.TODAY_JOIN_PIG_KEY, e)
			}
			initTodayData() {
				this.setToDayChallengeCount(0), this.setTodayJoinPig(!1)
			}
		}, cc._RF.pop()
	}, {
		"../configs/gameConfig": "gameConfig",
		"../gameEngine": "gameEngine",
		"../libs/data_control": "data_control",
		"./superService": "superService"
	}],
	versionNotice: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "7409eBY3Z5CYrUytfWiFBM4", "versionNotice");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../engines/gameEngine"),
			{
				ccclass: i,
				property: a
			} = cc._decorator;
		let r = class extends cc.Component {
			constructor() {
				super(...arguments), this.lbNotice = null, this.detail = null, this
					.m_scaleTime = .3
			}
			start() {
				this.onShow()
			}
			onShow(e) {
				s.modules().uiControlModule.showHideDialogAnimation(this.detail, !0)
			}
			onHide(e) {
				s.modules().uiControlModule.showHideDialogAnimation(this.detail, !1, e)
			}
			setNotice(e) {
				this.lbNotice.string = e
			}
			onBtnClose() {
				this.onHide(() => {
					this.node.destroy()
				})
			}
		};
		n([a(cc.Label)], r.prototype, "lbNotice", void 0), n([a(cc.Node)], r.prototype, "detail",
			void 0), r = n([i], r), o.default = r, cc._RF.pop()
	}, {
		"../../engines/gameEngine": "gameEngine"
	}],
	vivoApi: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "d94ecxxsUBBSaGP4GGcqFbG", "vivoApi");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../miniApp"),
			i = e("../../../configs/gameConfig"),
			a = e("../../../gameEngine"),
			r = window.qg;
		class c extends s.default {
			constructor() {
				super(...arguments), this.m_appId = "105537995", this.m_secret =
					"cf9b9809d25730a0356734d1dd57722c", this.m_adUnitId =
					"3499133f04224799a13c2e57cf313ee0", this.m_nAdIdList = ["", "", ""], this
					.m_BannerId = "", this.m_BannerIdList = ["", "", ""], this.TemplateNad =
					null, this.TemplateNadList = ["906b87b21a4c4950ad7fee681da8ff80",
						"94da168088534f87bc4facca2d333a23", "ffe662ccbe7c48288687171fa093ea2c"
					], this.TemplateNadIndex = 0, this.m_gameRecorderManager = null, this
					.m_gameRecordVideoUrl = null, this.m_videoAd = null, this.m_nativeAd = null,
					this.nowNAdId = 0, this.mowBanner = 0, this.m_Bannerad = null, this
					.bannerSuccese = !0, this.m_gameRecordTimeNow = 0, this
					.m_localInBlockCity = !1, this.boxPortalAd = null, this.m_boxPortalAdId =
					"036661b532834634bf64d27ebfc67471"
			}
			isAntherUserInfo() {
				return Promise.resolve(null)
			}
			drawHead(e) {
				return Promise.resolve(null)
			}
			fullScreenVideo() {
				return Promise.resolve()
			}
			commitRank(e, t) {
				return n(this, void 0, void 0, function*() {
					return Promise.resolve(!1)
				})
			}
			showRank(e) {
				return n(this, void 0, void 0, function*() {
					return Promise.resolve(!1)
				})
			}
			operateGameLive() {}
			getUserInfo(e) {
				r.getUserInfo(e)
			}
			showToast(e) {
				r.showToast(e)
			}
			showLoading(e) {
				r.showLoading(e)
			}
			hideLoading() {
				r.hideLoading()
			}
			showNativeAd(e, t, o) {
				this.m_nativeAd = r.createNativeAd({
					posId: this.m_nAdIdList[this.nowNAdId]
				}), this.m_nativeAd.load().then(e => {
					console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u6210\u529f..." +
							e), this.nowNAdId++, this.nowNAdId == this.m_nAdIdList
						.length && (this.nowNAdId = 0), o && o()
				}).catch(e => {
					console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25..." +
						JSON.stringify(e)), t(e), o && o()
				}), this.m_nativeAd.onLoad(t => {
					this.m_nAdlist = t.adList[0], this.m_nativeAd.reportAdShow({
						adId: this.m_nAdlist.adId
					}), e(this.m_nAdlist)
				})
			}
			reportAdClickNativeAd() {
				this.m_nativeAd.reportAdClick({
					adId: this.m_nAdlist.adId
				})
			}
			preCreateUnits() {
				this.CheckLocalToBlockCityList()
			}
			onShareAppMessageGetReward(e, t, o, n) {}
			createMoreGameBtn() {}
			showInterstitialAd(e, t) {}
			showBannerAD(e, t, o, n, s) {
				const {
					screenWidth: i,
					screenHeight: a
				} = r.getSystemInfoSync();
				let c = s && s({
					screenWidth: i,
					screenHeight: a
				}) || cc.v2(0, 0);
				this.m_Bannerad && !this.bannerSuccese && (this.m_Bannerad.destroy(), this
					.m_Bannerad = null), this.m_Bannerad ? this.m_Bannerad.show().then(
			() => {
					t && t(), console.log(
						"---------------------Banner\u5e7f\u544a\u76f4\u63a5\u663e\u793a\u6210\u529f"
						)
				}).catch(e => {
					o && o(e), console.log(
						"---------------------Banner\u5e7f\u544a\u76f4\u63a5\u663e\u793a\u7ec4\u4ef6\u51fa\u73b0\u95ee\u9898",
						JSON.stringify(e))
				}) : (this.bannerSuccese = !0, null == this.m_Bannerad && (this.m_Bannerad =
					r.createBannerAd({
						posId: this.m_BannerIdList[this.mowBanner],
						adIntervals: 30,
						style: {
							left: c.x,
							top: c.y
						}
					})), this.m_Bannerad.onSize(e => {
					console.log(e.width, e.height,
						"------------banner\u957f\u5bbd-----------")
				}), this.m_Bannerad.onLoad(() => {
					null != e && e.active && e.isValid ? (this.mowBanner++, this
						.mowBanner == this.m_BannerIdList.length && (this
							.mowBanner = 0), this.bannerSuccese = !1, this
						.m_Bannerad.show().then(() => {
							t && t(), console.log(
								"---------------------Banner\u5e7f\u544a\u663e\u793a\u6210\u529f"
								), this.m_Bannerad.onClose(() => {
								n && n()
							})
						}).catch(e => {
							o && o(e), console.log(
								"---------------------Banner\u5e7f\u544a\u7ec4\u4ef6\u663e\u793a\u51fa\u73b0\u95ee\u9898" +
								e.errCode + " :" + e.errMsg)
						})) : console.log(
						"---------------------------------------------------------"
						)
				}), this.m_Bannerad.onError(e => {
					this.bannerSuccese = !1, o && o(e), console.log(
						"---------------------Banner\u5e7f\u544a\u52a0\u8f7d\u9519\u8bef,\u9519\u8bef\u539f\u56e0\uff1a" +
						e.errCode + " :" + e.errMsg)
				}))
			}
			hideBanner() {
				null != this.m_Bannerad && (this.m_Bannerad.hide(), console.log(
					"---------------------banner\u5e7f\u544a\u9690\u85cf\u5b8c\u6210"))
			}
			loadAndShowVideoAd(e, t, o, n, s = 0) {
				null != this.m_videoAd && (this.m_videoAd.destroy(), this.m_videoAd = null),
					null == this.m_videoAd && (this.m_videoAd = r.createRewardedVideoAd({
						adUnitId: this.m_adUnitId
					}));
				let i = n => {
					n && n.isEnded ? e() : t("\u89c6\u9891\u4e2d\u9014\u9000\u51fa"), this
						.m_videoAd.offClose(i), o && o()
				};
				this.m_videoAd.load(), this.m_videoAd.onLoad(() => {
					console.log("vivo\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f"),
						this.m_videoAd.show(), this.m_videoAd.onClose(i)
				}), this.m_videoAd.onError(function(e) {
					o && o(), t && t(e), console.log(e,
						"\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u51fa\u9519")
				})
			}
			login(e) {
				r.login(e)
			}
			authorize(e) {
				e.success && e.success()
			}
			gameRecordStart(e, t) {}
			gameRecordStop() {
				return !0
			}
			isGameRecordOver() {
				return !0
			}
			shareGameRecordVideo(e, t) {}
			isProduction() {
				return c.isProduction()
			}
			isHaveShareVideo() {
				return !0
			}
			validAppId() {}
			reportAnalytics(e, t) {
				console.log("vivo \u53d1\u9001\u57cb\u70b9", e, JSON.stringify(t))
			}
			clearMemory() {}
			shareAppMessage(e) {}
			createRewardedVideoAd(e) {}
			static isProduction() {
				return !0
			}
			PlayLastRecordSound(e, t, o) {}
			StartRecordSound() {}
			StopRecordSound(e) {}
			drawUrlImage(e, t) {}
			getShareVideoRank(e, t) {}
			showAddFavoriteGuide(e, t, o) {}
			showVideo(e) {}
			subscribeMessage(e, t, o) {}
			CheckLocalToBlockCityList() {
				a.default.getModules().gameHttpModule.getLocalPropertyInfo(e => {
					this.m_localInBlockCity = i.default.IP_BLOCK_CITY.includes(e.city)
				}, e => {
					console.debug(
						"-------\u83b7\u53d6\u533a\u57df\u4fe1\u606f\u9519\u8bef", e
						)
				})
			}
			LocalInBlockCityList() {
				return this.m_localInBlockCity
			}
			vibrate(e) {}
			showModal(e) {}
			navigateToMiniGame(e, t, o) {
				console.error("#451102928 \u672a\u5b9e\u73b0")
			}
			addNadIndex() {
				this.TemplateNadIndex++, this.TemplateNadIndex >= this.TemplateNadList.length &&
					(this.TemplateNadIndex = 0)
			}
			getNadIndex() {
				return this.TemplateNadList[this.TemplateNadIndex]
			}
			showTemplateNaD() {
				if (r) {
					if (Math.random() > i.default.TEMPLATENA_CX_GL) return;
					if (r.createCustomAd) {
						this.TemplateNad && (this.TemplateNad.destroy(), this.TemplateNad =
							null);
						const {
							screenWidth: e,
							screenHeight: t
						} = r.getSystemInfoSync();
						let o = e / a.default.Canvas().width,
							n = cc.v2(720 * o, 525 * o);
						console.log(e, t, "screenWidth,screenHeight"), this.TemplateNad = r
							.createCustomAd({
								posId: this.getNadIndex(),
								style: {
									left: (e - n.x) / 2,
									top: (t - n.y) / 2
								}
							}), this.TemplateNad ? (this.TemplateNad.onError(e => {
								this.addNadIndex(), console.log(
									"\u539f\u751f\u6a21\u677f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25",
									e)
							}), this.TemplateNad.onLoad(() => {
								console.log(
									"\u539f\u751f\u6a21\u677f\u5e7f\u544a\u52a0\u8f7d\u5b8c\u6210"
									), this.TemplateNad.show().then(() => {
									console.log(
										"\u539f\u751f\u6a21\u677f\u5e7f\u544a\u5c55\u793a\u5b8c\u6210"
										)
								}).catch(e => {
									this.addNadIndex(), console.log(
										"\u539f\u751f\u6a21\u677f\u5e7f\u544a\u5c55\u793a\u5931\u8d25",
										JSON.stringify(e))
								})
							}), this.TemplateNad.onClose(() => {
								this.addNadIndex(), Math.random() < i.default
									.TEMPLATEN_AD_QT_GL && this.loadAndShowVideoAd(
								() => {}, () => {})
							})) : this.addNadIndex()
					}
				}
			}
			hideTemplateNad() {
				this.TemplateNad && this.TemplateNad.hide()
			}
			destroyTemplateNad() {
				this.TemplateNad && (this.TemplateNad.destroy(), this.TemplateNad = null)
			}
			loadAndShowBoxPortalAd(e, t, o) {
				if (console.log("vivo loadAndShowPotalAd"), null == this.boxPortalAd)
					if (r.createBoxPortalAd) {
						this.boxPortalAd = r.createBoxPortalAd({
							posId: this.m_boxPortalAdId,
							image: "",
							marginTop: 200
						}), this.boxPortalAd.onError(e => {
							this.CloseBoxPortal(), t && t(e), console.log(
								"\u4e92\u63a8\u76d2\u5b50\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25",
								e)
						});
						let o = this;
						this.boxPortalAd.onClose(() => {
							console.log("close"), this.boxPortalAd.isDestroyed || o
								.CloseBoxPortal()
						}), this.boxPortalAd.show().then(() => {
							e && e(), console.log("\u5c55\u793a\u6210\u529f")
						})
					} else console.log(
						"\u6682\u4e0d\u652f\u6301\u4e92\u63a8\u76d2\u5b50\u76f8\u5173 API");
				else this.boxPortalAd.show()
			}
			CloseBoxPortal() {
				null != this.boxPortalAd && (this.boxPortalAd.hide(), this.boxPortalAd
					.isDestroyed || (this.boxPortalAd.destroy(), this.boxPortalAd = null))
			}
			addShortcut() {
				return new Promise((e, t) => {
					r.installShortcut({
						success() {
							console.log(
								"\u684c\u9762\u56fe\u6807\u521b\u5efa\u6210\u529f\uff01\uff01\uff01"
								), e(null)
						},
						fail() {
							t()
						}
					})
				})
			}
		}
		o.default = c, cc._RF.pop()
	}, {
		"../../../configs/gameConfig": "gameConfig",
		"../../../gameEngine": "gameEngine",
		"../miniApp": "miniApp"
	}],
	webSocketProtoHead: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "3d5fckisKhBj4xkonLAGUJa", "webSocketProtoHead"), Object.defineProperty(o,
			"__esModule", {
				value: !0
			}), o.$WS = void 0;
		const n = e("../proto/proto");
		(function(e) {
			let t, o, s;
			e.MESSAGE_SPLIT = ".", e.HEART_TICK_TIME = 6100, e.HEART_SEND_TIME = 2e3,
				function(e) {
					e[e.SYNC = 0] = "SYNC", e[e.HALL = 1] = "HALL", e[e.GAME = 2] = "GAME", e[e
							.PING = 3] = "PING", e[e.PONG = 4] = "PONG", e[e.FPS_SYNC = 5] =
						"FPS_SYNC"
				}(t = e.ProtoHead || (e.ProtoHead = {})), e.getHallGameProtoHeadObject = function(t,
					o, n) {
					switch (o) {
						case e.ProtoHead.HALL:
							return {
								msgType: e.ProtoHead.HALL, hallHead: t
							};
						case e.ProtoHead.GAME:
							return {
								msgType: e.ProtoHead.GAME, gameId: n, gameHead: t
							};
						case e.ProtoHead.SYNC:
							return {
								msgType: e.ProtoHead.SYNC
							};
						case e.ProtoHead.FPS_SYNC:
							return {
								msgType: e.ProtoHead.FPS_SYNC
							}
					}
				}, e.getMessageHead = function(e) {
					let t = e.indexOf(".");
					return -1 == t ? (console.error("#231737 \u5f02\u5e38\u6d88\u606f", e), null) :
						e.substring(0, t)
				}, e.packageMessage = function(t) {
					const {
						head: o,
						body: n
					} = t;
					if (t.getPackageBody) {
						const n = t.getPackageBody();
						return `${o}${e.MESSAGE_SPLIT}${JSON.stringify(n)}`
					}
					return n && "string" == typeof n ? `${o}${e.MESSAGE_SPLIT}${t.body}` :
						`${o}${e.MESSAGE_SPLIT}`
				}, e.unPackageMessage = function(e) {
					const t = n.MSG.Msg.decode(e);
					return t && null != t.msgType ? t.msgType : null
				},
				function(e) {
					e[e.HeartTimeOut = 10001] = "HeartTimeOut"
				}(o = e.ERROR_CODE || (e.ERROR_CODE = {})),
				function(e) {
					e[e.NULL = 0] = "NULL", e[e.FREE = 1] = "FREE", e[e.PLAYING = 2] = "PLAYING", e[
						e.OVER = 3] = "OVER"
				}(s = e.RoomState || (e.RoomState = {}))
		})(o.$WS || (o.$WS = {})), cc._RF.pop()
	}, {
		"../proto/proto": "proto"
	}],
	winDialog: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "93080Ck4khBdZFHuyq/BrGY", "winDialog");
		var n = this && this.__decorate || function(e, t, o, n) {
			var s, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect
				.decorate(e, t, o, n);
			else
				for (var r = e.length - 1; r >= 0; r--)(s = e[r]) && (a = (i < 3 ? s(a) : i > 3 ? s(
					t, o, a) : s(t, o)) || a);
			return i > 3 && a && Object.defineProperty(t, o, a), a
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../../../engines/gameEngine"),
			i = e("../normalMode"),
			{
				ccclass: a,
				property: r
			} = cc._decorator;
		let c = class extends cc.Component {
			constructor() {
				super(...arguments), this.timeLabel = null, this.provicyLabel = null, this
					.completeTime = 0
			}
			onLoad() {
				s.services().miniGameSrv.getAppApiInstance().gameRecordStop()
			}
			start() {
				this.timeLabel.string = "\u901a\u5173\u7528\u65f6" + this.getTimeStr(this
						.completeTime), this.provicyLabel.string = "--", s.modules()
					.uiControlModule.showLoading(void 0,
						"\u6b63\u5728\u83b7\u53d6\u6392\u884c\u699c").then(() => {
						s.modules().uiControlModule.hideLoading(), s.modules()
							.gameHttpModule.getCountryRank(0, 100).then(e => {
								null == e && s.modules().uiControlModule.showMessageBox(
									"\u83b7\u53d6\u5931\u8d25\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5"
									);
								for (let t = 0; t < e.length; t++) e[t].province == s
									.modules().gameHttpModule.UserAreaInfo[1] && (this
										.provicyLabel.string = t + 1 + "")
							})
					})
			}
			getTimeStr(e) {
				let t = "",
					o = Math.floor(e / 60);
				return t + (o + "\u5206") + Math.round(e - 60 * o) + "\u79d2"
			}
			onClickPage() {
				i.default._instance.btnBack()
			}
		};
		n([r(cc.Label)], c.prototype, "timeLabel", void 0), n([r(cc.Label)], c.prototype,
			"provicyLabel", void 0), c = n([a], c), o.default = c, cc._RF.pop()
	}, {
		"../../../engines/gameEngine": "gameEngine",
		"../normalMode": "normalMode"
	}],
	wsProtoConfigBase: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "41117n/0G1Dr5unZhE+diGI", "wsProtoConfigBase"), Object.defineProperty(o,
				"__esModule", {
					value: !0
				}), o.SUB = void 0,
			function(e) {
				e[e.SCSubGameSync = null] = "SCSubGameSync", e[e.SyncMessage = 50] = "SyncMessage", e[e
						.FpsSyncListMsg = 51] = "FpsSyncListMsg", e[e.SubBase = 100] = "SubBase", e[e
						.CSubLoginServer = 101] = "CSubLoginServer", e[e.CSubLogoutGame = 102] =
					"CSubLogoutGame", e[e.CSubLoginGame = 103] = "CSubLoginGame", e[e.CSubMatchRoom =
						104] = "CSubMatchRoom", e[e.CSubExitRoom = 105] = "CSubExitRoom", e[e
						.CSubGetHostUid = 106] = "CSubGetHostUid", e[e.SSubLoginServer = 501] =
					"SSubLoginServer", e[e.SSubLogoutGame = 502] = "SSubLogoutGame", e[e.SSubLoginGame =
						503] = "SSubLoginGame", e[e.SSubMatchRoom = 504] = "SSubMatchRoom", e[e
						.SSubExitRoom = 505] = "SSubExitRoom", e[e.SSubUpdateHostUid = 506] =
					"SSubUpdateHostUid", e[e.SSubRushLogin = 507] = "SSubRushLogin", e[e
						.SSubFpsGameStart = 5001] = "SSubFpsGameStart"
			}(o.SUB || (o.SUB = {})), cc._RF.pop()
	}, {}],
	wxApi: [function(e, t, o) {
		"use strict";
		cc._RF.push(t, "108d3NpbclLSZuXABlsHH9C", "wxApi");
		var n = this && this.__awaiter || function(e, t, o, n) {
			return new(o || (o = Promise))(function(s, i) {
				function a(e) {
					try {
						c(n.next(e))
					} catch (t) {
						i(t)
					}
				}

				function r(e) {
					try {
						c(n.throw(e))
					} catch (t) {
						i(t)
					}
				}

				function c(e) {
					var t;
					e.done ? s(e.value) : (t = e.value, t instanceof o ? t : new o(function(
						e) {
						e(t)
					})).then(a, r)
				}
				c((n = n.apply(e, t || [])).next())
			})
		};
		Object.defineProperty(o, "__esModule", {
			value: !0
		});
		const s = e("../miniApp"),
			i = e("../../../../sdk/uma/src/umaConfig"),
			a = window.wx;
		o.default = class extends s.default {
			constructor() {
				super(...arguments), this.m_appId = "wx2edf2ac52464dcae", this.m_secret =
					"1c7ea66258fe921c8f8a2dd229756e5c", this.m_adUnitId =
					"adunit-3f5c64c3e81acb30", this.m_rewardedVideoAd = null
			}
			drawHead(e) {
				throw new Error("Method not implemented.")
			}
			fullScreenVideo() {
				throw new Error("Method not implemented.")
			}
			LocalInBlockCityList() {
				return !1
			}
			vibrate(e) {}
			getUserInfo(e) {
				a.getUserInfo(e)
			}
			showToast(e) {
				a.showToast(e)
			}
			showLoading(e) {
				a.showLoading(e)
			}
			hideLoading() {
				a.hideLoading()
			}
			preCreateUnits() {
				a.showShareMenu({}), this.createRewardedVideoAd({
						adUnitId: this.m_adUnitId
					}), console.log("wx \u521d\u59cb\u5316\u53cb\u76df\u53c2\u6570",
					typeof uma), uma.init({
						appKey: i.UMA_SDK.APP_KEY,
						useOpenid: !1,
						autoGetOpenid: !0,
						debug: !0,
						uploadUserInfo: !0
					})
			}
			loadAndShowVideoAd(e, t, o) {
				if (null == this.m_rewardedVideoAd) return console.error(
					"\u5fae\u4fe1\u5e7f\u544a\u89c6\u9891\u7ec4\u4ef6\u4e0d\u5b58\u5728"
					), void t(null);
				this.m_rewardedVideoAd.load().then(() => {
					this.m_rewardedVideoAd.show().then(() => {
						this.m_rewardedVideoAd.onClose(n => {
							n && n.isEnded ? e() : t(
								"\u89c6\u9891\u672a\u64ad\u653e\u5b8c"
								), o && o()
						})
					}).catch(() => {
						t("\u89c6\u9891\u663e\u793a\u9519\u8bef"), o && o()
					})
				}).catch(() => {
					t("\u89c6\u9891\u52a0\u8f7d\u9519\u8bef"), o && o()
				})
			}
			login(e) {
				a.login(e)
			}
			authorize(e) {
				e.scope = e.scope || "scope.userInfo", a.authorize(e)
			}
			validAppId() {
				if (a.getAccountInfoSync().miniProgram.appId != this.m_appId) throw console
					.error(
						"\u975e\u6cd5\u76d7\u7528\u6e38\u620f\u8d44\u6e90\u5c06\u53d7\u5230\u6cd5\u5f8b\u5236\u88c1"
						), cc.game.end(),
					"\u975e\u6cd5\u76d7\u7528\u6e38\u620f\u8d44\u6e90\u5c06\u53d7\u5230\u6cd5\u5f8b\u5236\u88c1"
			}
			isHaveShareVideo() {
				return !1
			}
			gameRecordStart(e, t) {
				if (this.isHaveShareVideo()) throw new Error(
					"#112 \u5fae\u4fe1\u5f55\u5c4f\u529f\u80fd.")
			}
			gameRecordStop() {
				return !!this.isHaveShareVideo()
			}
			shareGameRecordVideo(e, t) {
				if (this.isHaveShareVideo()) throw new Error(
					"#120 \u5fae\u4fe1\u5206\u4eab\u5f55\u5c4f\u529f\u80fd.")
			}
			isProduction() {
				return !0
			}
			reportAnalytics(e, t) {
				console.log("wx \u53d1\u9001\u57cb\u70b9", e, t), console.log(
						"wx \u4e0a\u62a5\u53cb\u76df\u4e8b\u4ef6 trackEvent", e, t), uma
					.trackEvent(e, t)
			}
			clearMemory() {
				a.triggerGC()
			}
			shareAppMessage(e) {
				let t = "";
				e && (t = e.title), a.shareAppMessage({
					title: t
				})
			}
			createRewardedVideoAd(e) {
				this.m_rewardedVideoAd = a.createRewardedVideoAd(e)
			}
			PlayLastRecordSound(e, t, o) {}
			StartRecordSound() {}
			StopRecordSound(e) {}
			addShortcut() {
				return Promise.resolve(!1)
			}
			createMoreGameBtn() {}
			drawUrlImage(e, t) {
				let o = a.createImage();
				o.onload = function() {
					let e = new cc.Texture2D;
					e.initWithElement(o), e.handleLoadedTexture(), t(new cc.SpriteFrame(e))
				}, o.src = e
			}
			getShareVideoRank(e, t) {}
			hideBanner() {}
			operateGameLive() {}
			reportAdClickNativeAd() {}
			showAddFavoriteGuide(e, t, o) {}
			showBannerAD(e, t, o, n, s) {}
			showInterstitialAd(e, t) {}
			showNativeAd(e, t, o) {}
			showVideo(e) {}
			subscribeMessage(e, t, o) {}
			showModal(e) {}
			commitRank(e, t) {
				return n(this, void 0, void 0, function*() {
					return Promise.resolve(!1)
				})
			}
			showRank(e) {
				return n(this, void 0, void 0, function*() {
					return Promise.resolve(!1)
				})
			}
			navigateToMiniGame(e, t, o) {
				a.navigateToMiniProgram({
					appId: e,
					success: () => {
						t && t()
					},
					fail: () => {
						o && o()
					}
				})
			}
		}, cc._RF.pop()
	}, {
		"../../../../sdk/uma/src/umaConfig": "umaConfig",
		"../miniApp": "miniApp"
	}]
}, {}, ["SkinConfig", "RewardView", "addUserProp", "attention", "btButton", "coin", "gameSetting",
	"o1DrawBoard", "drawDetail", "drawRecord", "o1DrawInterface", "power", "recordVoiceChange",
	"shareVideoRank", "shareVideoItem", "logScreen", "versionNotice", "cellLayerMiniGameJump",
	"dialogMiniGameJump", "scrollMiniGameJump", "cellMiniGameJump", "BtnAddShort", "personal", "proto",
	"SSubFpsGameStart", "fpsSyncEnum", "CSubObHurtEnemy", "CSubPlaneMove", "CSubShopBullet", "SSubKillEnemy",
	"SSubNewEnemy", "SSubObGameStart", "SSubPlaneMove", "SSubShopBullet", "SSubSyncScore", "SSubUpdateHurtHp",
	"webSocketProtoHead", "CSubExitRoom", "CSubGetHostUid", "CSubLoginGame", "CSubLoginServer",
	"CSubLogoutGame", "CSubMatchRoom", "FpsSyncListMsg", "SCSubGameSync", "SSubExitRoom", "SSubLoginGame",
	"SSubLoginServer", "SSubLogoutGame", "SSubMatchRoom", "SSubRushLogin", "SSubUpdateHostUid", "SubBase",
	"SyncMessage", "wsProtoConfigBase", "DragBase", "comFirstPlayerProtect", "comFluency", "comO1Box",
	"comSpSkeleton", "copy", "engineConfig", "gameConfig", "logConfig", "gameEngine", "data_control",
	"node_component", "physics_tool", "gameMode_json", "gameManager", "gameSocketManager", "o1BoxManager",
	"soundManager", "superManager", "gameHttpModule", "gameWebSocketModule", "gameHttpContent", "ping",
	"superModule", "uiModule", "PageBase", "UIPrams", "o1DialogBox", "o1Loading", "o1MessageBox", "o1SelectBox",
	"i18nInterface", "i18nJson", "i18nService", "localStorageService", "logService", "dataField", "gameBox4399",
	"h5Api", "h5_4399", "KSAPI", "miniApp", "miniParam", "native", "oppoApi", "ttApi", "vivoApi", "wxApi",
	"miniGameService", "ossService", "superService", "userInterface", "userService", "superInterface", "Native",
	"getItemDialog", "giveupDialog", "hardMode", "loseDialog", "rebornDialog", "shareDialog", "winDialog",
	"levelConfig1", "blockManager", "normalMode", "block", "blockRotate", "infinitypower", "hall", "CardPage",
	"SkinExplainPage", "SkinRewardPage", "disFindItem", "disItem", "disPlayConfig", "disPlayItem",
	"disPlayLayer", "hallPig", "pCountry", "pPigGroup", "pPigGroupScroll", "pRankCountryItem", "skinItem",
	"skinShop", "topThreePage", "hotUpdate", "loading", "loadConfig_json", "start", "codeHead", "realNameATT",
	"filterWord", "apiQuery", "umaConfig"
]);
