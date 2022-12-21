var offset = 100;

function scrollWie() {
    var rect = document.getElementById('wie').getBoundingClientRect();
    window.scrollTo(0, rect.top+window.scrollY-offset);
}

function scrollPort() {
    var rect = document.getElementById('port').getBoundingClientRect();
    window.scrollTo(0, rect.top+window.scrollY-offset);
}

function scrollVis() {
    var rect = document.getElementById('vis').getBoundingClientRect();
    window.scrollTo(0, rect.top+window.scrollY-offset);
}

function scrollCont() {
    var rect = document.getElementById('cont').getBoundingClientRect();
    window.scrollTo(0, rect.top+window.scrollY-offset);
}

function toggleNav() {
    if(document.getElementsByClassName('navBG')[0].style.display== "none"|| document.getElementsByClassName('navBG')[0].style.display== ""){
        document.getElementsByClassName('navBG')[0].style.display= "flex";
    }
    else{
        document.getElementsByClassName('navBG')[0].style.display = "";
    }
}
