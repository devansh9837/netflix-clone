(window.webpackJsonpnetflix=window.webpackJsonpnetflix||[]).push([[7],{108:function(e,t,i){"use strict";var a=i(25),n=i(0),r=i.n(n),c=i(46);t.a=function(e){return function(t){var i=t.isMovieGridLoading,n=t.isMovieOverviewLoading,o=Object(a.a)(t,["isMovieGridLoading","isMovieOverviewLoading"]);return i?r.a.createElement(c.a,null):n?null:r.a.createElement(e,o)}}},109:function(e,t,i){},110:function(e,t,i){},116:function(e,t,i){"use strict";var a=i(11),n=i(12),r=i(14),c=i(13),o=i(0),l=i.n(o),m=(i(109),i(1)),s=(i(110),i(47)),d=function(e){var t=e.item,i=(e.listItems,e.addItem,t.title),a=t.overview,n=t.backdrop_path,r=t.poster_path,c=t.name;return l.a.createElement("div",{className:"grid-item"},l.a.createElement("img",{src:"".concat(m.e).concat(m.c).concat(n),alt:"movie",className:"grid-item__img"}),l.a.createElement("img",{src:"".concat(m.e).concat(m.c).concat(r),alt:"movie",className:"grid-item__img grid-item__mobile-img"}),l.a.createElement("div",{className:"".concat(i?"grid-item__movie-text":"grid-item__tv-text")},l.a.createElement("h1",{className:"grid-item__title"},i),l.a.createElement("h1",{className:"grid-item__title"},c),l.a.createElement("span",{className:"grid-item__overview"},a),l.a.createElement(s.a,{item:t})))},u=i(6),v=i(15),g=i(23),f=i(18),_=i(16),w=i(107),p=i.n(w),E=function(e){Object(r.a)(i,e);var t=Object(c.a)(i);function i(){var e;return Object(a.a)(this,i),(e=t.call(this)).gridRef=l.a.createRef(),e}return Object(n.a)(i,[{key:"render",value:function(){var e=this,t=this.props,i=t.movieGridItems,a=t.tvShowGridItems,n=t.movies,r=t.tvshow;return l.a.createElement("div",{className:"collection-grid"},l.a.createElement("span",{className:"collection-grid__left-arrow"},l.a.createElement(_.a,{icon:f.c,className:"collection-grid__left-arrow--icon",onClick:function(){return function(e){var t=e.current,i=window.innerWidth+"px";console.log(i),p()(t).animate({scrollLeft:"-="+i},"slow")}(e.gridRef)}})),l.a.createElement("div",{className:"collection-grid__outer",ref:this.gridRef},l.a.createElement("div",{className:"collection-grid__inner"},n?i.map((function(e){return l.a.createElement(d,{key:e.id,item:e})})):null,r?a.map((function(e){return l.a.createElement(d,{key:e.id,item:e})})):null),l.a.createElement("span",{className:"collection-grid__right-arrow"},l.a.createElement(_.a,{icon:f.d,className:"collection-grid__right-arrow--icon",onClick:function(){return function(e){var t=e.current,i=window.innerWidth+"px";p()(t).animate({scrollLeft:"+="+i},"slow")}(e.gridRef)}}))))}}]),i}(l.a.Component);t.a=Object(u.b)((function(e){return{movieGridItems:Object(v.d)(e),tvShowGridItems:Object(g.d)(e)}}))(E)},125:function(e,t,i){"use strict";i.r(t);var a=i(6),n=i(7),r=i(9),c=i(15),o=i(108),l=i(116),m=Object(n.b)({isMovieGridLoading:c.a}),s=Object(r.d)(Object(a.b)(m),o.a)(l.a);t.default=s}}]);
//# sourceMappingURL=7.10a20e48.chunk.js.map