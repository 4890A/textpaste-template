function count_p() {
    var pars = document.getElementsByTagName("p");
    if (pars.length > 6) {
        pars[0].parentNode.removeChild(pars[0])
    }
}

var intervalID = setInterval(count_p, 300)