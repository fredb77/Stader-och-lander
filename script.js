
// Övning Städer och Länder 2019

// requestar land.json
fetch("./land.json")
.then(function(resp) {
    return resp.json();
})

.then(function(data) {
    // lägger datan från json i variabel
     land = data;
})

// requestar stad.json
fetch("./stad.json")
.then(function(resp) {
    return resp.json();
})

.then(function(data) {
    // lägger datan från json i variabel
    stad = data;

    // sorterar städer efter befolkning. Störst först
    stad.sort(function(a, b){
        return b.population-a.population;
    })

    var output = document.getElementById("lander-stader");
    var landId = 1;

    // loopar så många gånger som det finns länder i json filen
    for (i = 0; i < land.length; i++) {
        
        if (land[i].id === landId) {
            // skriver ut landet som har samma id som landId
            output.innerHTML += "<ul id='" + landId + "'><li><p class='rubrik'>" + land[i].countryname + "</p></li><ul>";

            // loopar städerna så många ggr som det finns städer i stad.json
            for (a = 0; a < stad.length; a++) {
                if (stad[a].countryid === landId) {     // hämtar dom städerna som har samma id som landId
                    document.getElementById(landId).innerHTML += "<li>" + stad[a].stadname + "</li>";
                }   
            }
        }
    landId++;
    }
})

// skriver ut felmeddelande
.catch(err => {
    document.write(err);
    console.log(err);
});

