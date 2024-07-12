var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200 ){
        var data=JSON.parse(xhttp.responseText);
        for (var i = 0; i < data.length; i++) {
            document.getElementById("nama" + i).innerHTML =data[i].nama;
            document.getElementById("lokasi" + i).innerHTML =data[i].lokasi;
            document.getElementById("desk" + i).innerHTML =data[i].desk;
        };
        
    }
};
xhttp.open("GET","room.json", true);
xhttp.send();