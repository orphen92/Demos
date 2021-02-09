addEventListener("DOMContentLoaded", (event) => {
    console.log('Page est chargée');
    let index;
    let sprite; //20 * 20
    let width = window.innerWidth; //1920
    let height = window.innerHeight; //969
    
    let iteration = Math.round((width /20) * (height/20) + 53); //works with 4704 4651.2



    for(index = 1; index <= iteration; index++) {
        sprite = document.createElement('i');

        document.querySelector('.container').appendChild(sprite);
    }




});