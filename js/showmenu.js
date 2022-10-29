function anulujhidemenu(){
    document.getElementById('addmenu').classList.remove("visiblemenu");
    document.getElementById('nowyprodukt').value = "";
    document.getElementById('nowyilosc').value = "";
}

function dodajhidemenu(){
    document.getElementById('addmenu').classList.remove("visiblemenu");
    
    content = "<div class=\"itemtemplate\"><div class=\"detale\"><div class=\"cokupic\">";
    content += document.getElementById('nowyprodukt').value;
    content += "</div><div class=\"ilekupic\">";
    content += document.getElementById('nowyilosc').value;
    content += "</div></div><div class=\"delete\"><img class=\"deleteicon\" src=\"img/delete.png\"/></div></div>";
    
    document.getElementById('maincontent').innerHTML += content;
    
    document.getElementById('nowyprodukt').value = "";
    document.getElementById('nowyilosc').value = "";
}

function showmenu(){
    document.getElementById('addmenu').classList.add("visiblemenu");
}