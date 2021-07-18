let click_elems = [
    document.getElementById("header-activity"),
    document.getElementById("header-map"),
    document.getElementById("header-time")

];


click_elems.forEach(element => {
    element.addEventListener("click", ()=>{
        click_elems.forEach(el => {
            el.className = "item";
        });
        element.className = "active-item";
        if (element.id == "header-activity" && element.className == "active-item"){
            let time_content = document.getElementById("time-content")
            time_content.className = "inactive";

            let map_content = document.getElementById("map-content")
            map_content.className = "inactive";

            let activity_content = document.getElementById("activity-content")
            let activity_content2 = document.getElementById("activity-content_")
            activity_content.className = "active";
            activity_content2.className = "active";
        }

        if (element.id == "header-map" && element.className == "active-item"){
            let time_content = document.getElementById("time-content")
            time_content.className = "inactive";

            let map_content = document.getElementById("map-content")
            map_content.className = "active";

            let activity_content = document.getElementById("activity-content")
            let activity_content2 = document.getElementById("activity-content_")
            activity_content.className = "inactive";
            activity_content2.className = "inactive";
        }

        if (element.id == "header-time" && element.className == "active-item"){
            let time_content = document.getElementById("time-content")
            time_content.className = "active";

            let map_content = document.getElementById("map-content")
            map_content.className = "inactive";

            let activity_content = document.getElementById("activity-content")
            let activity_content2 = document.getElementById("activity-content_")
            activity_content.className = "inactive";
            activity_content2.className = "inactive";
        }
    });
});
