/*
* @Author: NoRain
* @Date: 2023-03-12 20:55:48
* @Last Modified by:   NoRain
* @Last Modified time: 2023-03-12 20:55:48
*/
/** AssetsPath_DataTableType 资源配置路径表*/
type AssetsPath_DataTableType = { id: number, name: string, msg: string, path: string , preload: boolean}
/** Bullet_DataTableType 子弹配置表*/
type Bullet_DataTableType = { id: number, msg: string, path: number, damage: number, speed: number, expRange: number, type: number, soundId: number, flightDis: number, maxKillNum: number}
/** Currency_DataTableType 游戏货币表*/
type Currency_DataTableType = { id: number, key: string, meg: string, worth: number, imgId: number, localizationKey: string, color: string}
/** DataTable数据类 */
export default class DataTable {
/** AssetsPath_DataTableMap 资源配置路径表*/
public static AssetsPath_DataTableMap:Map<number,AssetsPath_DataTableType> = new Map<number,AssetsPath_DataTableType>();
/** Bullet_DataTableMap 子弹配置表*/
public static Bullet_DataTableMap:Map<number,Bullet_DataTableType> = new Map<number,Bullet_DataTableType>();
/** Currency_DataTableMap 游戏货币表*/
public static Currency_DataTableMap:Map<number,Currency_DataTableType> = new Map<number,Currency_DataTableType>();
/**初始化 */
static Init() {
this.AssetsPath_DataTableMap.set(100,{id:100,name:"GameEntry",msg:"初始场景",path:"assets\scene\GameEntry.ls",preload:false,});
this.AssetsPath_DataTableMap.set(501,{id:501,name:"Localization",msg:"本地化配置",path:"assets\resources\localization\Localization.txt",preload:true,});
this.AssetsPath_DataTableMap.set(1001,{id:1001,name:"DebugView",msg:"调试界面",path:"assets\resources\prefab\DebugView.lh",preload:false,});
this.AssetsPath_DataTableMap.set(1002,{id:1002,name:"Toggle",msg:"单选",path:"assets\resources\prefab\Toggle.lh",preload:false,});
this.AssetsPath_DataTableMap.set(1003,{id:1003,name:"Slider",msg:"滑条",path:"assets\resources\prefab\Slider.lh",preload:false,});
this.AssetsPath_DataTableMap.set(1004,{id:1004,name:"TipsView",msg:"提示界面",path:"assets\resources\prefab\TipsView.lh",preload:false,});
this.AssetsPath_DataTableMap.set(1005,{id:1005,name:"SureView",msg:"确认提示框",path:"assets\resources\prefab\SureView.lh",preload:false,});
this.AssetsPath_DataTableMap.set(1006,{id:1006,name:"LoadView",msg:"加载界面",path:"assets\resources\prefab\LoadView.lh",preload:false,});
this.Bullet_DataTableMap.set(1001.0,{id:1001.0,msg:"手枪子弹",path:6301.0,damage:10.0,speed:0.1,expRange:0.0,type:0.0,soundId:7001.0,flightDis:5.0,maxKillNum:-1.0,});
this.Bullet_DataTableMap.set(1002.0,{id:1002.0,msg:"RPG子弹",path:6302.0,damage:15.0,speed:0.08,expRange:2.5,type:1.0,soundId:7001.0,flightDis:4.5,maxKillNum:-1.0,});
this.Bullet_DataTableMap.set(1003.0,{id:1003.0,msg:"法杖子弹",path:6303.0,damage:20.0,speed:0.1,expRange:0.0,type:2.0,soundId:7001.0,flightDis:3.6,maxKillNum:5.0,});
this.Bullet_DataTableMap.set(1004.0,{id:1004.0,msg:"SMG子弹",path:6304.0,damage:7.0,speed:0.12,expRange:0.0,type:0.0,soundId:7001.0,flightDis:4.0,maxKillNum:-1.0,});
this.Bullet_DataTableMap.set(1005.0,{id:1005.0,msg:"左轮子弹",path:6305.0,damage:25.0,speed:0.2,expRange:0.0,type:3.0,soundId:7001.0,flightDis:7.0,maxKillNum:2.0,});
this.Bullet_DataTableMap.set(1006.0,{id:1006.0,msg:"双管喷子弹",path:6306.0,damage:30.0,speed:0.1,expRange:2.0,type:4.0,soundId:7001.0,flightDis:4.0,maxKillNum:-1.0,});
this.Currency_DataTableMap.set(1001.0,{id:1001.0,key:"gold",meg:"金币",worth:1.0,imgId:2012.0,localizationKey:"GOLD",color:"FFD800",});
this.Currency_DataTableMap.set(1002.0,{id:1002.0,key:"diamond",meg:"钻石",worth:1000.0,imgId:2013.0,localizationKey:"DIAMOND",color:"4288D7",});
this.Currency_DataTableMap.set(1003.0,{id:1003.0,key:"key",meg:"钥匙",worth:10000.0,imgId:2014.0,localizationKey:"KEY",color:"7C231C",});
this.Currency_DataTableMap.set(1004.0,{id:1004.0,key:"soulgem",meg:"魂钻",worth:50000.0,imgId:2015.0,localizationKey:"SOULGEM",color:"FF0000",});
this.Currency_DataTableMap.set(1005.0,{id:1005.0,key:"dollar",meg:"钞票",worth:90000.0,imgId:2016.0,localizationKey:"DOLLAR",color:"00AD5F",});
}}