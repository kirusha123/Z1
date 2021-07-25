let start_point = new Date().getTime(); 

let timer = setInterval(()=>{
    let now = new Date().getTime();
    let time_dif =  now - start_point;
    
    var hh = Math.floor(time_dif / 1000 / 60 / 60);
    time_dif -= hh * 1000 * 60 * 60;
    var mm = Math.floor(time_dif / 1000 / 60);
    time_dif -= mm * 1000 * 60;
    var ss = Math.floor(time_dif / 1000);
    time_dif -= ss * 1000;

    let h_str = ""
    let m_str = ""
    let s_str = ""

    if (hh < 10){
        h_str = "0" + hh + ":";
    }else{
        h_str = hh + ":"
    }

    if (mm < 10){
        m_str = "0" + mm + ":";
    }else{
        m_str = mm + ":"
    }

    if (ss < 10){
        s_str = "0" + ss;
    }else{
        s_str = ss;
    }

    document.getElementById("timer").innerHTML = h_str+m_str+s_str;
},10);