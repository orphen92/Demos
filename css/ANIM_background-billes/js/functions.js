addEventListener("DOMContentLoaded", (event) => {
    let container = document.querySelector('.container');
    let index;
    let sprite; //20 * 20
    let width = window.innerWidth; //1920
    let height = window.innerHeight; //969
    
    let iteration = Math.round((width /20) * (height/20) + 53); //works with 4704



    function addSprite(){
        for(index = 1; index <= iteration; index++) {
            sprite = document.createElement('i');
    
            container.appendChild(sprite);
        }
    }

    function clearSprite(){
        container.innerHTML = "";
    }
    
    function resize() {
        clearSprite();
        width = window.innerWidth;
        height = window.innerHeight; 
        iteration = Math.round((width /20) * (height/20) + 53); //works with 4704
        addSprite()
      }


      addSprite()

      onresize = resize;

});