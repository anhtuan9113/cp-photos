(this["webpackJsonpreact-photo"]=this["webpackJsonpreact-photo"]||[]).push([[0],{167:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(4),i=n.n(c),r=(n(63),n(55)),s=n(46),u=n(47),l=n(56),h=n(48),m=n(57),f=n(24),d=n(12),p=(n(64),n(49)),b=n(13),j=n(53),v=n.n(j),O=n(54),g=n.n(O);function k(t){var e=Object(a.useState)(0),n=Object(d.a)(e,2),c=n[0],i=n[1],r=Object(a.useState)(!1),s=Object(d.a)(r,2),u=s[0],l=s[1],h=Object(a.useState)([]),m=Object(d.a)(h,2),j=m[0],v=m[1],O=Object(a.useCallback)((function(t,e){e.photo;var n=e.index;i(n),l(!0)}),[]);Object(a.useEffect)((function(){v(t.photos.sort((function(t,e){return t.index>e.index?1:-1})))}));return o.a.createElement("div",null,o.a.createElement(p.a,{photos:j,direction:"column",onClick:O}),o.a.createElement(b.b,null,u?o.a.createElement(b.a,{onClose:function(){i(0),l(!1)}},o.a.createElement(b.c,{currentIndex:c,views:t.photos.map((function(t){return Object(f.a)({},t,{srcset:t.srcSet,caption:t.title})}))})):null))}var w=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={items:[]},n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.serverRequest=v.a.get("https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=ca3783111609d69139840916b7a01ad2&format=json&nojsoncallback=1&user_id=186661056@N03").then((function(e){e.data.photos.photo.forEach((function(e,n){var a=new Image;a.onload=function(){e.width=this.width,e.height=this.height,t.setState((function(t){return Object(f.a)({},t,{items:[].concat(Object(r.a)(t.items),[e])})}))},e.src=t.imageURL(e),e.index=n,a.src=e.src}))}))}},{key:"imageURL",value:function(t){return"https://farm"+t.farm+".staticflickr.com/"+t.server+"/"+t.id+"_"+t.secret+"_b.jpg"}},{key:"render",value:function(){return this.state.items.length>0?o.a.createElement(k,{photos:this.state.items}):o.a.createElement(g.a,{type:"Grid",color:"#ED553b",className:"loader",height:500,width:500,timeout:0})}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},58:function(t,e,n){t.exports=n(167)},63:function(t,e,n){},64:function(t,e,n){}},[[58,1,2]]]);
//# sourceMappingURL=main.afd8d8f5.chunk.js.map