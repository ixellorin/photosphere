(this.webpackJsonpphotosphere=this.webpackJsonpphotosphere||[]).push([[0],[,,,,,,,,,,function(e,n,t){e.exports=t(18)},,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var i=t(0),r=t.n(i),a=t(8),o=t.n(a),c=(t(15),t(16),t(17),t(2)),s=t(9),m=t(4),u=t(3),d=t(5),l=t(1),h=function(e){function n(){var e,t;Object(c.a)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(t=Object(m.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).handleResize=function(){var e=t.mount.clientWidth,n=t.mount.clientHeight;t.renderer.setSize(e,n),t.camera.aspect=e/n,t.camera.updateProjectionMatrix()},t.start=function(){t.frameId||(t.frameId=requestAnimationFrame(t.animate))},t.stop=function(){cancelAnimationFrame(t.frameId)},t.animate=function(){t.cube.rotation.x+=.01,t.cube.rotation.y+=.01,t.renderScene(),t.frameId=window.requestAnimationFrame(t.animate)},t.renderScene=function(){t.renderer.render(t.scene,t.camera)},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.mount.clientWidth,n=this.mount.clientHeight,t=new l.e,i=new l.d(75,e/n,.1,1e3),r=new l.f({antialias:!0}),a=new l.a(1,1,1),o=new l.c({color:16711935}),c=new l.b(a,o);i.position.z=4,t.add(c),r.setClearColor("#000000"),r.setSize(e,n),this.scene=t,this.camera=i,this.renderer=r,this.material=o,this.cube=c,window.addEventListener("resize",this.handleResize),this.mount.appendChild(this.renderer.domElement),this.start()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize"),this.stop(),this.mount.removeChild(this.renderer.domElement)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"vis",ref:function(n){e.mount=n}})}}]),n}(i.Component);var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.d8809f4b.chunk.js.map