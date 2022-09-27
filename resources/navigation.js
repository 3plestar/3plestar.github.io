
function scrollWie() {
    var rect = document.getElementById('wie').getBoundingClientRect();
    window.scrollTo(0, rect.top+window.scrollY-50);
}

function scrollPort() {
    var rect = document.getElementById('port').getBoundingClientRect();
    window.scrollTo(0, rect.top+window.scrollY-50);
}

function scrollVis() {
    var rect = document.getElementById('vis').getBoundingClientRect();
    window.scrollTo(0, rect.top+window.scrollY-50);
}

function scrollCont() {
    var rect = document.getElementById('cont').getBoundingClientRect();
    window.scrollTo(0, rect.top+window.scrollY-50);
}

function toggleNav() {
    if(document.getElementsByClassName('navBar')[1].style.display== "none"|| document.getElementsByClassName('navBar')[1].style.display== ""){
        document.getElementsByClassName('navBar')[1].style.display= "grid";
    }
    else{
        document.getElementsByClassName('navBar')[1].style.display= "none";
    }
}
