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
debugger
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
        content_items.forEach(item => {
            item.className = "inactive";
        });
        content_items[a].className = "active";
    });
});
