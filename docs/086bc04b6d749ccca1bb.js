let click_elems=[document.getElementById("header-activity"),document.getElementById("header-map"),document.getElementById("header-time")],content_items=[document.getElementById("activity-content"),document.getElementById("map-content"),document.getElementById("time-content")];function setLocation(e){location.href=e,location.hash=e}function imitate_click(){click_elems.forEach((e=>{-1!=e.id.indexOf(sessionStorage.getItem("loc"))&&e.click()}))}sessionStorage.getItem("loc")?setLocation("#/"+sessionStorage.getItem("loc")):sessionStorage.setItem("loc","activity"),click_elems.forEach((e=>{e.addEventListener("click",(()=>{let t=0,c=0;click_elems.forEach((i=>{i.className="item",e===i&&(c=t),t+=1})),e.className="active-item";let i=e.id;i=i.substr(i.indexOf("-")+1),sessionStorage.setItem("loc",i),setLocation("#/"+sessionStorage.getItem("loc")),content_items.forEach((e=>{e.className="inactive"})),content_items[c].className="active"}))})),imitate_click();