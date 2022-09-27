let itemNumber = 1;
document.querySelector(".button").onclick = function(){
    if (itemNumber<50){
        document.querySelector(".container").innerHTML += `<div class='container__item'>${itemNumber}</div>`;
        itemNumber++
    }
}