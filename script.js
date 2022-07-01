function hideUnhide() {
    var par = document.getElementById("about-hide");
    var but = document.getElementById("about-but");
    var h = document.getElementById("about-hide-h1");

    if (par.style.display === "none")
    {
        but.innerHTML = "Read less &uarr;";
        par.style.display = "block";
        h.style.display = "block";

    }
    else {
        but.innerHTML = "Read more &darr;";
        par.style.display = "none";
        h.style.display = "none";
    }
}

function hideUnhideProj()
{
    var div = document.getElementById("proekt-hide");
    var but = document.getElementById("proekt-hide-but");

    if (div.style.display === "none")
    {
        but.innerHTML = "Show less &uarr;";
        div.style.display = "grid";
    }
    else {
        but.innerHTML = "Show more &darr;";
        div.style.display = "none";
    }
}