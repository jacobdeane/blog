var initPhotoSwipeFromDOM=function(e){for(var t=function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1;var t=function e(t,n){return t&&(n(t)?t:e(t.parentNode,n))}(e.target||e.srcElement,function(e){return e.tagName&&"SPAN"===e.tagName.toUpperCase()});if(t){for(var r,i=t.parentNode,a=t.parentNode.childNodes,o=a.length,l=0,s=0;s<o;s++)if(1===a[s].nodeType){if(a[s]===t){r=l;break}l++}return r>=0&&n(r,i),!1}},n=function(e,t,n,r){var i,a,o=document.querySelectorAll(".pswp")[0];if(a=function(e){for(var t,n,r,i=e.childNodes,a=i.length,o=[],l=0;l<a;l++)1===(t=i[l]).nodeType&&(n=t.children[0],spanEL=n.children[0],spanStyle=spanEL.getAttribute("style"),spanMatch=spanStyle.match(/padding-bottom: ([^%]+)/g),aspectRatio=spanMatch[0].replace("padding-bottom: ",""),imgEL=n.children[1],srcset=imgEL.getAttribute("srcset").split(","),largestSrc=srcset[srcset.length-1].split(" "),width=largestSrc[1].replace("w",""),height=parseInt(width*aspectRatio*.01,10),r={src:n.getAttribute("href"),w:parseInt(width,10),h:parseInt(height,10)},t.children.length>1&&(r.title=t.children[1].innerHTML),n.children.length>0&&(r.msrc=imgEL.getAttribute("src")),r.el=t,o.push(r));return o}(t),i={galleryUID:t.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){var t=a[e].el.getElementsByTagName("img")[0],n=window.pageYOffset||document.documentElement.scrollTop,r=t.getBoundingClientRect();return{x:r.left,y:r.top+n,w:r.width}}},r)if(i.galleryPIDs){for(var l=0;l<a.length;l++)if(a[l].pid==e){i.index=l;break}}else i.index=parseInt(e,10)-1;else i.index=parseInt(e,10);isNaN(i.index)?console.log("index not found"):(n&&(i.showAnimationDuration=0),i.showHideOpacity=!0,i.fullscreenEl=!1,i.shareEl=!1,i.bgOpacity=.85,i.tapToClose=!0,i.tapToToggleControls=!1,new PhotoSwipe(o,PhotoSwipeUI_Default,a,i).init())},r=document.querySelectorAll(e),i=0,a=r.length;i<a;i++)r[i].setAttribute("data-pswp-uid",i+1),r[i].onclick=t;var o=function(){var e=window.location.hash.substring(1),t={};if(e.length<5)return t;for(var n=e.split("&"),r=0;r<n.length;r++)if(n[r]){var i=n[r].split("=");i.length<2||(t[i[0]]=i[1])}return t.gid&&(t.gid=parseInt(t.gid,10)),t}();o.pid&&o.gid&&n(o.pid,r[o.gid-1],!0,!0)};initPhotoSwipeFromDOM(".gallery");