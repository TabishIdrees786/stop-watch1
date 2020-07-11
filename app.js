var min = document.getElementById("min");
var sec = document.getElementById("sec");
var msec = document.getElementById("msec");
var vsec = 0;
var vvsec = 0;
var vmin = 0;
var full;

function timer() {
    vsec++
    msec.innerHTML = vsec;
    if (vsec >= 100) {
        vvsec++
        sec.innerHTML = vvsec;
        vsec = 0
    } else if (vvsec >= 60) {
        vmin++
        min.innerHTML = vmin;
        vvsec = 0;
    }
}


function start() {
    full = setInterval(timer, 10);
    var a = document.getElementById("starrt")
    a.className = "tabi";
}

function pause() {
    clearInterval(full)
    var a = document.getElementById("starrt")
    a.className = "dis";
    b = "<li><b>" + vmin + " Minute " + vvsec + " Second " + vsec + " Millisecond" + "<b></li>"
    document.getElementById("uul").innerHTML += b + "<br>";
}