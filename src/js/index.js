let click_elems = [
    document.getElementById("header-activity"),
    document.getElementById("header-map"),
    document.getElementById("header-time")

];

let content_items = [
    document.getElementById("activity-content"),
    document.getElementById("map-content"),
    document.getElementById("time-content")
]



function setLocation(curLoc){
    location.href = curLoc;
    location.hash = curLoc;
}

if(sessionStorage.getItem("loc") != ""){
    setLocation('#/' + sessionStorage.getItem("loc"));
}else{
    sessionStorage.setItem("loc","activity");
}

function imitate_click(){
    click_elems.forEach(el=>{
        if (el.id.indexOf(sessionStorage.getItem("loc")) != -1) {
            el.click();
        }
    });
}



click_elems.forEach(element => {
    element.addEventListener("click", ()=>{
        let counter = 0;
        let a = 0;
        click_elems.forEach(el => {
            el.className = "item";
            if (element === el){
              a = counter;  
            }
            counter = counter + 1;
        });
        element.className = "active-item";
        let id = element.id;
        id = id.substr(id.indexOf("-")+1);
        sessionStorage.setItem("loc", id);
        setLocation('#/' + sessionStorage.getItem("loc"));

        content_items.forEach(item => {
            item.className = "inactive";
        });
        content_items[a].className = "active";
    });
});

imitate_click()