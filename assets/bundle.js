!function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);var s=Object.freeze({"canvas-background":"#909ede","objects-cube":"#00ffed","objects-coin":"#cccc00","objects-wall-body":"#222222","objects-wall-border":"#eeeeee","objects-player":"#0087ff","objects-spikes":"#ad1818","objects-diamond":"#c300ff","ui-menu-background":"#6f738e","ui-menu-wrapper-background":"#222","ui-menu-wrapper-font":"#eee","ui-menu-hamburger-button":"#ffffff"});class n{constructor(e=""){this._mode=e,this._incrementors={},this._player=null,this.getMode=this.getMode.bind(this),this.getIncrementors=this.getIncrementors.bind(this),this.render=this.render.bind(this),this.buildLevel=this.buildLevel.bind(this),this.insertBlockIntoScene=this.insertBlockIntoScene.bind(this),this.listenForCameraMovements=this.listenForCameraMovements.bind(this),this.animateCameraPosition=this.animateCameraPosition.bind(this),this.clearScene=this.clearScene.bind(this),this.handleResize=this.handleResize.bind(this),this.getPlayer=this.getPlayer.bind(this)}getMode(){return this._mode}getIncrementors(){return this._incrementors}render(){return this}buildLevel(e=[]){return this}insertBlockIntoScene(){}listenForCameraMovements(){return this}animateCameraPosition(){return this}clearScene(){return this}handleResize(){return this}getPlayer(){return this._player}}var r=Object.freeze({wall:"x",player:"@",lava:"*",coin:"o",void:"-",spikes:"^",diamond:"<>"});const o=r.player,a=r.wall,l=r.coin,h=r.void,c=(r.lava,r.spikes);var d=[[h,h,h,h,h,h,h,h,h,h,h,l,l,h,h,h,h,h,h,h,h,h,h,h],[h,h,h,h,h,h,h,a,a,a,a,a,a,a,a,a,a,a,h,h,h,h,h,h],[h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h],[h,h,h,h,a,a,h,h,h,h,h,h,h,h,h,h,h,h,h,c,c,l,h,h],[h,h,h,h,h,h,h,h,l,l,h,h,h,h,h,h,h,h,h,a,a,a,h,h],[h,h,h,h,h,h,h,a,a,a,a,h,h,l,c,h,h,h,h,h,h,h,h,h],[h,h,h,h,h,h,h,h,h,h,h,h,h,a,a,h,h,h,h,h,h,h,h,h],[h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h],[h,h,h,h,h,h,h,h,h,h,a,a,h,h,h,h,h,h,h,h,h,h,h,h],[o,h,r.diamond,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h],[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],[h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h]];const u=r.wall,p=r.coin,m=r.void,_=r.spikes,y=r.player;var b=[[m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m],[m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m],[m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m],[m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m],[m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m],[m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m],[m,m,m,m,m,m,m,m,m,r.diamond,_,_,m,m,m,m,m,m,m,m,m,m,m,m],[m,m,m,m,m,m,m,m,m,u,u,u,u,m,m,m,m,m,m,m,m,m,m,m],[m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m],[y,m,m,m,m,m,m,m,m,m,p,p,m,m,m,m,m,m,m,m,m,m,m,m],[u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u],[m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m]];const w=r.wall,v=(r.coin,r.void),g=r.spikes;r.player,r.diamond;var x=[[v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v],[v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v],[v,v,v,v,v,v,v,v,v,v,v,v,v,w,w,w,w,w,v,v,v,v,v,v],[v,v,v,v,v,v,v,v,v,v,v,v,v,g,g,g,g,g,v,v,v,v,v,v],[v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v],[v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v],[v,v,v,v,v,v,v,w,v,v,w,w,w,v,v,v,v,v,v,v,v,v,v,v],[v,v,v,v,v,v,w,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v],[v,v,v,v,v,w,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v],[v,v,v,v,w,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v],[w,w,w,w,v,v,v,v,v,v,v,v,w,w,w,w,w,w,w,w,w,w,w,w],[v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v]];const E=r.wall,f=r.coin,L=r.void,I=r.spikes,j=r.lava,C=r.player,P=r.diamond;var M=[d,b,x,[[L,L,L,L,L,L,L,L,L,L,L,L,L,L,E,E,E,E,L,L,L,L,L,L],[L,L,L,L,L,L,L,L,L,E,L,L,L,L,f,L,L,E,L,L,L,L,L,L],[L,L,L,L,L,L,L,L,f,I,L,L,P,L,E,L,L,E,L,L,L,L,L,L],[L,L,L,L,f,I,L,L,E,E,j,j,E,j,j,E,L,E,L,L,L,L,L,L],[L,L,L,L,E,E,L,P,L,E,E,E,E,E,E,E,L,E,L,L,L,L,L,L],[L,L,L,L,L,L,L,E,L,L,L,L,L,L,L,E,L,E,L,L,L,L,L,L],[L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,E,L,E,L,L,I,f,L,L],[L,L,L,L,L,L,L,E,L,L,L,L,L,L,L,E,L,E,L,L,E,E,L,L],[L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,E,L,E,L,L,L,L,L,E],[C,L,L,L,E,E,E,E,L,L,L,L,L,L,L,E,L,E,L,L,L,L,L,L],[E,E,E,E,L,L,L,L,L,L,L,L,L,L,E,L,f,L,L,L,I,L,L,E],[L,L,L,L,L,L,L,L,L,L,L,L,L,L,E,E,E,E,E,E,E,E,E,E]]],k=Object.freeze({INVALID_RENDER_OBJECT:"Render object not provided",INVALID_POSITION_OBJECT:"Invalid position object! Expected an object like {x, y}",INVALID_LEVEL:"Received invalid level. Expected an array of arrays of chars."});class A{constructor(){this._currentLevelIndex=-1,this._currentLevel=this.nextLevel(),this.getCurrentLevel=this.getCurrentLevel.bind(this),this.getCurrentLevelIndex=this.getCurrentLevelIndex.bind(this),this.nextLevel=this.nextLevel.bind(this)}static getBlockTypeBySymbol(e=""){for(const t in r)if(r[t]===e)return t;return""}static positionIsWall(e,t,i){if(!A.isValidLevel(i))throw new Error(k.INVALID_LEVEL);return!!A.positionIsInLevelBounds(e,t,i)&&"wall"===A.getBlockTypeBySymbol(i[t][e])}static positionIsInLevelBounds(e,t,i){if(!A.isValidLevel(i))throw new Error(k.INVALID_LEVEL);return t<i.length&&e<i[0].length}getCurrentLevel(){return this._currentLevel}getCurrentLevelIndex(){return this._currentLevelIndex}getTotalLevels(){return M.length}nextLevel(){this._currentLevelIndex=(this._currentLevelIndex+1)%M.length;const e=M[this._currentLevelIndex];return this._currentLevel=e,e}static isValidLevel(e=[]){if(!Array.isArray(e)||!e.length)return!1;let t=null;for(let i=0;i<e.length;i++){if(!Array.isArray(e[i])||!e[i].length)return!1;if(t){if(e[i].length!==t)return!1}else t=e[i].length;for(let t=0;t<e[i];t++)if(!(e[i][t]in r))return!1}return!0}static getLevelCenter(e){if(!A.isValidLevel(e))throw new Error(k.INVALID_LEVEL);return{y:e.length/2,x:e[0].length/2}}}var B={};const O=window.THREE;class F{constructor(e=16777215){this._geometry=new O.BoxGeometry(1,1,1),this._material=new O.MeshBasicMaterial({color:e}),this._object=new O.Mesh(this._geometry,this._material),this._position=null,this.getObject=this.getObject.bind(this),this.tweakPosition=this.tweakPosition.bind(this),this.getInitialPosition=this.getInitialPosition.bind(this),this.setInitialPosition=this.setInitialPosition.bind(this),this.move=this.move.bind(this)}getObject(){return this._object}tweakPosition(){}setInitialPosition(e){if(!e.hasOwnProperty("x")||!e.hasOwnProperty("y"))throw new Error(k.INVALID_POSITION_OBJECT);this._position={x:e.x,y:e.y}}getInitialPosition(){return this._position}move(e,t){return this._object.position.set(e,t,0),this}}const T=window.THREE;class H extends F{constructor(){super(s["objects-wall-body"]);const e=new T.LineSegments(new T.EdgesGeometry(this._object.geometry),new T.LineBasicMaterial({color:s["objects-wall-border"],linewidth:1}));e.renderOrder=1,this._object.add(e)}}window.THREE;class S extends F{constructor(e=!0,t=!0,i=16777215){super(i),this._rotationSpeed=.01,e&&(this._rotationSpeed=.05*Math.random()+.025),this._rotationDir=!0,t&&(this._rotationDir=Math.random()>.5),this._rotate=this._rotate.bind(this),this._rotate()}_rotate(){this._rotationDir?this._object.rotation.y+=this._rotationSpeed:this._object.rotation.y-=this._rotationSpeed,requestAnimationFrame(this._rotate)}}const z=window.THREE;class R extends S{constructor(){super(!0,!0,s["objects-coin"]),this._geometry=new z.TorusGeometry(.2,.05,16,100),this._object=new z.Mesh(this._geometry,this._material)}tweakPosition(){this._object.position.y-=.2}}window.THREE;class D extends F{constructor(){super(s["objects-player"])}tweakPosition(){this._object.position.y-=.15}}const N=window.THREE;class V extends F{constructor(){super(s["objects-spikes"]),this._geometry=new N.ConeGeometry(.3,.3,32),this._object=new N.Mesh(this._geometry,this._material)}tweakPosition(){this._object.position.y-=.425}}const W=window.THREE;class J extends S{constructor(){super(!0,!0,s["objects-diamond"]),this._geometry=new W.OctahedronGeometry(.3),this._object=new W.Mesh(this._geometry,this._material)}tweakPosition(){this._object.position.y-=.2}}const q=window.THREE;class G extends n{constructor(){super("3d"),this._scene=new q.Scene,this._scene.background=new q.Color(s["canvas-background"]),this._camera=new q.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),this._scene.add(this._camera),this._renderer=new q.WebGLRenderer({antialias:!0}),this._renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this._renderer.domElement),this._cameraCenter=A.getLevelCenter(B.helpers.levelHelper.getCurrentLevel()),this._incrementors={camera:{x:this._cameraCenter.x,y:-1*this._cameraCenter.y,z:15}}}render(){return this.animateCameraPosition(),this._renderer.render(this._scene,this._camera),this}buildLevel(e=[]){if(Array.isArray(e)){for(let t=0;t<e.length;t++){const i=e[t];if(!Array.isArray(i))return;for(let e=0;e<i.length;e++){const s=A.getBlockTypeBySymbol(i[e]),n=G.getBlockByType(s);"player"===s&&n&&(this._player=n),this.insertBlockIntoScene(n,{x:e,y:t})}}return this}}insertBlockIntoScene(e,t){let i=null;if(e&&e.getObject&&(i=e.getObject()),!i)return;const s=t.x,n=-1*t.y;this._scene.add(i),e.setInitialPosition({x:s,y:n}),i.position.set(s,n,0),e.tweakPosition&&e.tweakPosition()}static getBlockByType(e=""){switch(e){case"wall":return new H;case"coin":return new R;case"player":return new D;case"spikes":return new V;case"diamond":return new J}return null}listenForCameraMovements(){let e=!1,t={};return this._renderer.domElement.addEventListener("wheel",t=>{e=!1,t.deltaY<0?this._incrementors.camera.z>=2&&(this._incrementors.camera.z-=.6):this._incrementors.camera.z<=45&&(this._incrementors.camera.z+=.6)}),this._renderer.domElement.addEventListener("mousedown",t=>{e=!0}),this._renderer.domElement.addEventListener("mouseup",t=>{e=!1}),this._renderer.domElement.addEventListener("mousemove",i=>{if(!e)return;t.x||(t={x:i.x,y:i.y});const s={x:i.x,y:i.y},n=t.x<s.x,r=t.x>s.x;n?this._incrementors.camera.x<35&&(this._incrementors.camera.x+=.25):r&&this._incrementors.camera.x>-35&&(this._incrementors.camera.x-=.25),t=s}),this}animateCameraPosition(){return this._camera.position.x=this._incrementors.camera.x,this._camera.position.y=this._incrementors.camera.y,this._camera.position.z=this._incrementors.camera.z,this._camera.lookAt(new q.Vector3(this._cameraCenter.x,-1*this._cameraCenter.y,0)),this}clearScene(){for(;this._scene.children.length>0;)this._scene.remove(this._scene.children[0]);return this}handleResize(){return window.addEventListener("resize",e=>{this._camera.aspect=window.innerWidth/window.innerHeight,this._camera.updateProjectionMatrix(),this._renderer.setSize(window.innerWidth,window.innerHeight)}),this}}class ${constructor(e="void"){this._scale=50,this._className=e.toLowerCase(),this._size={width:1,height:1,depth:1},this._object=this._buildObject(),this._position=null,this._buildObject=this._buildObject.bind(this),this.getObject=this.getObject.bind(this),this.getDimensions=this.getDimensions.bind(this),this.setInitialPosition=this.setInitialPosition.bind(this),this.getInitialPosition=this.getInitialPosition.bind(this),this.move=this.move.bind(this),this.center=this.center.bind(this)}_buildObject(){const e=document.createElement("span");return e.style.height=this._size.height*this._scale+"px",e.style.width=this._size.width*this._scale+"px",e.classList.add("block"),e.classList.add(this._className),e}getObject(){return this._object}getDimensions(){return this._size}setInitialPosition(e,t=!0){if(!e.hasOwnProperty("x")||!e.hasOwnProperty("y"))throw new Error(k.INVALID_POSITION_OBJECT);return this._position=e,this.move(e.x,e.y),t&&this.center(),this}getInitialPosition(){return this._position}move(e,t){this._object.style.left=e*this._scale+"px",this._object.style.top=t*this._scale*-1+"px"}center(){return this._object.style.left+=(1-this._size.width)*this._scale/2+"px",this._object.style.top+=(1-this._size.height)*this._scale/2+"px",this}}class U extends ${constructor(){super("wall")}}class K extends ${constructor(){super("player")}}class Z extends ${constructor(){super("coin")}}class Y extends ${constructor(){super("spikes")}}class Q extends ${constructor(){super("diamond")}}class X extends n{constructor(e){super("2d"),this._domParent=e||document.body,this._domElement=this._buildDomElement(),this._domParent.appendChild(this._domElement)}_buildDomElement(){const e=document.createElement("div");return e.setAttribute("class","dom-engine-wrapper"),e}clearScene(){return this._domElement.innerHTML="",this}render(){return this.animateCameraPosition(),this}buildLevel(e){if(Array.isArray(e)){for(let t=0;t<e.length;t++){const i=e[t];if(!Array.isArray(i))return;for(let e=0;e<i.length;e++){const s=A.getBlockTypeBySymbol(i[e]),n=X.getBlockByType(s);this.insertBlockIntoScene(n,{x:e,y:t}),"player"===s&&n&&(this._player=n)}}return this}}insertBlockIntoScene(e,t){let i=null;if(e&&e.getObject&&(i=e.getObject()),!i)return;const s=t.x,n=-1*t.y;this._domElement.appendChild(i),e&&e.setInitialPosition({x:s,y:n},!0)}static getBlockByType(e=""){switch(e){case"wall":return new U;case"player":return new K;case"coin":return new Z;case"spikes":return new Y;case"diamond":return new Q}return null}}class ee{constructor(){ee.remove(),this._domElement=document.createElement("div"),this._domElement.setAttribute("class","current-level-panel"),this._content=ee.getContentByType(),this._domElement.innerHTML=this._content,document.body.appendChild(this._domElement),this.setContent=this.setContent.bind(this),this.getContent=this.getContent.bind(this),this.listenForEvents=this.listenForEvents.bind(this)}static remove(){document.querySelectorAll(".current-level-panel").forEach(e=>e.remove())}setContent(e=""){return this._domElement.innerHTML=this._content=e,this}getContent(){return this._content}static getContentByType(e=""){return`\n          <div class="levelCounter">\n            <span class="currentLevelInd">${B.helpers.levelHelper.getCurrentLevelIndex()+1}</span>\n            <span class="slash">/</span>\n            <span class="totallevels">${B.helpers.levelHelper.getTotalLevels()}</span>\n          </div>\n          <button id="next-level-btn">Next Level</button>\n        `}listenForEvents(){return document.getElementById("next-level-btn").addEventListener("click",e=>{he(B.helpers.renderHelper.getHelper(),B.helpers.levelHelper.nextLevel())}),this}}var te=Object.freeze({player:{ArrowUp:{action:"_jump"},KeyD:{action:"_moveForward"},ArrowRight:{action:"_moveForward"},KeyA:{action:"_moveBackward"},ArrowLeft:{action:"_moveBackward"}}});const ie=(e,t)=>e/1e5*t,se=9.81,ne=Object.freeze({player:{x:.25,y:2.25}}),re=Object.freeze({player:{x:.025,y:.4}});class oe{constructor(e=[]){if(!A.isValidLevel(e))throw new Error(k.INVALID_LEVEL);this._levelArray=e,this.newPositionIsAWall=this.newPositionIsAWall.bind(this)}newPositionIsAWall(e,t){let i=e-.5,s=t,n=Math.round(parseFloat(i)),r=Math.abs(Math.round(parseFloat(s)));return!!A.positionIsWall(n,r,this._levelArray)||(i=e+.5,s=t,n=Math.round(parseFloat(i)),r=Math.abs(Math.round(parseFloat(s))),!!A.positionIsWall(n,r,this._levelArray)||(i=e,s=t-.5,n=Math.round(parseFloat(i)),r=Math.abs(Math.round(parseFloat(s))),!!A.positionIsWall(n,r,this._levelArray)||(i=e,s=t+.5,n=Math.round(parseFloat(i)),r=Math.abs(Math.round(parseFloat(s))),!!A.positionIsWall(n,r,this._levelArray)||(i=e-.5,s=t-.5,n=Math.round(parseFloat(i)),r=Math.abs(Math.round(parseFloat(s))),!!A.positionIsWall(n,r,this._levelArray)||(i=e+.5,s=t-.5,n=Math.round(parseFloat(i)),r=Math.abs(Math.round(parseFloat(s))),!!A.positionIsWall(n,r,this._levelArray)||(i=e+.5,s=t+.5,n=Math.round(parseFloat(i)),r=Math.abs(Math.round(parseFloat(s))),!!A.positionIsWall(n,r,this._levelArray)||(i=e-.5,s=t+.5,n=Math.round(parseFloat(i)),r=Math.abs(Math.round(parseFloat(s))),A.positionIsWall(n,r,this._levelArray))))))))}}const ae=te.player;class le{constructor(e){if(!e)throw new Error(k.INVALID_POSITION_OBJECT);this._position=e,this._velocity={x:0,y:0},this._mass=10,this._gravity=ie(this._mass,se),this._levelLogic=new oe(B.helpers.levelHelper.getCurrentLevel()),this.getPosition=this.getPosition.bind(this),this._listenForControls=this._listenForControls.bind(this),this._calcNewPosition=this._calcNewPosition.bind(this),this._jump=this._jump.bind(this),this._moveForward=this._moveForward.bind(this),this._moveBackward=this._moveBackward.bind(this),this._listenForControls()}getPosition(){const e=this._calcNewPosition();return this._levelLogic.newPositionIsAWall(e.x,e.y)||(this._position.x=e.x,this._position.y=e.y,this._velocity.x=e.vel.x,this._velocity.y=e.vel.y),this._calcNewPosition(),this._position}_listenForControls(){window.addEventListener("keydown",e=>{if(!(e.code in ae))return;const t=ae[e.code];this[t.action]&&this[t.action]()})}_calcNewPosition(){const e=this._position.x+this._velocity.x,t=this._position.y+this._velocity.y,i=this._velocity.y-this._gravity;return{x:e,y:t,vel:{x:this._velocity.x,y:i}}}_jump(){this._velocity.y=0;const e=this._position.y+ne.player.y,t=i=>{this._position.y+=re.player.y,this._position.y>=e||requestAnimationFrame(t)};t()}_moveForward(){const e=this._position.x+ne.player.x,t=i=>{this._position.x+=re.player.x,this._position.x>=e||requestAnimationFrame(t)};t()}_moveBackward(){const e=this._position.x-ne.player.x,t=i=>{this._position.x-=re.player.x,this._position.x<=e||requestAnimationFrame(t)};t()}}var he=(e,t)=>{(new ee).listenForEvents(),e.clearScene().buildLevel(t).listenForCameraMovements().handleResize();const i=e.getPlayer(),s=new le(i.getInitialPosition());!function t(){const n=s.getPosition();i.move(n.x,n.y),e.render(),requestAnimationFrame(t)}()};Object.freeze({JasperLichte:{name:"Jasper Lichte",githubUrl:"https://github.com/JasperLichte"},TaZn:{name:"Harun Can",githubUrl:"https://github.com/TaZn"}});const ce="Rainbow Runner",de="https://github.com/JasperLichte/Rainbow-Runner";class ue{constructor(){this._domElement=document.createElement("div"),this._domElement.setAttribute("class","menu"),this._wrapper=document.createElement("div"),this._wrapper.setAttribute("class","wrapper"),this._content="",this._wrapper.innerHTML=this._content,this._domElement.appendChild(this._wrapper),document.body.appendChild(this._domElement),this._hasDoneInitialRender=!1,this.show=this.show.bind(this),this.hide=this.hide.bind(this),this.toggle=this.toggle.bind(this),this.isShown=this.isShown.bind(this),this.setContent=this.setContent.bind(this),this.getContent=this.getContent.bind(this),this.listenForEvents=this.listenForEvents.bind(this),this._addHamburgerButton=this._addHamburgerButton.bind(this),this._addHamburgerButton()}show(){return this._domElement.style.left="0px",this}hide(){return Math.random()>.5?this._domElement.style.left="-100vw":this._domElement.style.left="200vw",this}toggle(){this.isShown()?this.hide():this.show()}isShown(){return"0px"===this._domElement.style.left}setContent(e=""){return this._wrapper.innerHTML=this._content=e,this}getContent(){return this._content}static getContentByType(e="menu"){switch(e){case"menu":return`<div class="menu-wrapper">\n          <h1>${ce}</h1>\n          <span class="version">Version: 0.1.2</span>\n          <div class="buttons">\n              <button class="play-btn" data-mode="3d">Play in 3d!</button>\n              <button class="play-btn" data-mode="2d">Play in 2d!</button>\n              <a href="${de}">Contribute</a>\n          </div>\n          <p>By Jasper Lichte and Harun Can</p>\n        </div>`}}listenForEvents(){const e=B.helpers.levelHelper,t=this._wrapper.querySelectorAll(".play-btn");return t.forEach(i=>{i.addEventListener("click",s=>{if(this.hide(),this._hasDoneInitialRender)return;const n="3d"===i.getAttribute("data-mode")?new G:new X(document.getElementById("main"));B.helpers.renderHelper.setEngineHelper(n),he(n,e.getCurrentLevel()),this._hasDoneInitialRender=!0,t.forEach(e=>{e!==i&&(e.classList.add("disabled"),e.setAttribute("disabled",!0))})})}),window.addEventListener("keydown",e=>{"Escape"===e.key&&this._hasDoneInitialRender&&this.toggle()}),this}_addHamburgerButton(){return this._hamburger=document.createElement("button"),this._hamburger.setAttribute("class","menu-hamburger"),this._hamburger.innerHTML="<span></span><span></span><span></span>",document.body.appendChild(this._hamburger),this._hamburger.addEventListener("click",e=>{this.show()}),this}}!function(e={}){for(const s in e)"string"==typeof e[s]&&(t="--"+s+"-color",i=e[s],document.getElementsByTagName("html")[0].style.setProperty(t,i));var t,i}(s),window.addEventListener("keydown",e=>"Space"===e.code&&(e=>e.preventDefault())(e)),B.helpers={},B.helpers.levelHelper=new A,B.helpers.renderHelper=new class{constructor(){this._helper=null,this.setEngineHelper=this.setEngineHelper.bind(this),this.getHelper=this.getHelper.bind(this)}setEngineHelper(e){this._helper=e}getHelper(){return this._helper}getMode(){return this._helper?this._helper.getMode():null}},B.menu=(new ue).setContent(ue.getContentByType("menu")).show().listenForEvents()}]);