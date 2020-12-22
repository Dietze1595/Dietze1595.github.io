var oReq = new XMLHttpRequest();
oReq.addEventListener("load", getAvgData);
oReq.open("GET", "https://api.faceit.com/stats/v1/stats/time/users/" + guid + "/games/csgo?size=20", true);
oReq.send()    
    
function getAvgData() {
    let json = JSON.parse(this.responseText);
    if (json.length == 0)
        return;

    let kills = 0, HS = 0, divid = 0, KD = 0, KR = 0;
    for (i = 0; i < json.length; i++) {
        if (json[i].gameMode !== '5v5') {
            length = length + 1;
        } else {
            divid = divid + 1;
            kills = parseInt(json[i].i6) + kills;
            HS = parseInt(json[i].c4 * 100) + HS;
            KD = parseInt(json[i].c2 * 100) + KD;
            KR = parseInt(json[i].c3 * 100) + KR;
        }
    }

    avgKills = Math.round(kills / divid);
    avgHs = Math.round(HS / divid / 100);
    avgKD = (KD / divid / 100).toFixed(2);
    avgKR = (KR / divid / 100).toFixed(2);
}
