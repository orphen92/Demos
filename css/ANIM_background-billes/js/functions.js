class Container {
    /**
     * 
     * @param {*} container 
     * @param {number} spriteSize 
     */
    constructor(container, spriteSize) {
        this.ctn = {
            elem: container,
            size: {
                width: null,
                height: null
            },
            rest_px: {
                on_xAxis: null,
                on_yAxis: null
            }
        };
        this.sprite = {
            size: spriteSize,
            list: [],
            xAxis_nb: null,
            yAxis_nb: null,
            get total() {
                //console.log(this);
                return this.xAxis_nb * this.yAxis_nb;
            }
        };
    }


    init() {
        //declaration of the promise
        //Todo try to remove this.setSize
        return new Promise((resolve, rej) => {
            try {
                this.setParams()
                    .then((result) => {
                        return result;
                    })
                    .then((result) => this.setSize(result.size))
                    .then(() => this.createSprite())
                    .then(() => {
                        resolve(this);
                    })
            } catch (e) {
                rej(e);
            }
        });
    }


    /**
     * Set the class attribute with value
     */
    setParams() {
        console.log('toto');
        return new Promise((resolve) => {
            let loCtnSize = this.getCtnsize();
            
            // Number of sprite on X Axis.
            let xCases = parseInt(loCtnSize.width / this.sprite.size, 10);
            this.sprite.xAxis_nb = xCases;

            // Number of sprite on Y Axis.
            const yCases = parseInt(loCtnSize.height / this.sprite.size, 10);
            this.sprite.yAxis_nb = yCases;

            // The rest in px compared to the container size.
            this.ctn.rest_px.on_xAxis = loCtnSize.width - (xCases * this.sprite.size);
            this.ctn.rest_px.on_yAxis = loCtnSize.height - (yCases * this.sprite.size);

            // real size of the container from the sprites.
            this.ctn.size.width = xCases * this.sprite.size;
            this.ctn.size.height = yCases * this.sprite.size;

            resolve({
                message: this.sprite.total,
                size: { width: this.ctn.size.width, height: this.ctn.size.height }
            });
        });
    }

    /**
     * Add size on DOM container element
     * Try to remove this method
     * @param {*} obj 
     */
    setSize(obj) {
        this.ctn.elem.style.width = `${obj.width += this.ctn.rest_px.on_xAxis}px`;
        this.ctn.elem.style.height = `${obj.height += this.ctn.rest_px.on_yAxis}px`;
    
        Promise.resolve();
      }

    /**
     * return the size of the Container;
     */
    getCtnsize() {
        return { width: window.innerWidth, height: window.innerHeight };
    }

    /**
     * Creation Of the sprite in DOM
     */
    createSprite() {
        return new Promise((resolve) => {
          let index, sprite;
          let total = this.sprite.total;
          this.ctn.elem.innerHTML = "";
    
          for (index = 1; index <= total; index++) {
            sprite = document.createElement("i");
            this.sprite.list.push(sprite);
          }
          this.ctn.elem.append(...this.sprite.list);
    
          resolve();
        });
      }


      addEvents() {
        window.addEventListener("resize", () => {
            this.init();
        });
    }
}


window.addEventListener("load", () => {
    let animationBubble = new Container(document.querySelector(".container"), 20);

    animationBubble.init().then((el) => el.addEvents());
        
});