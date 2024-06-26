class Food extends MovingItem {
    constructor (gameScreen, game){
    super(gameScreen, game)
    
        this.element.className = "foodDiv";
        this.element.style.position = "absolute";
        this.foodSound = new Audio("../audio/cutting-board.mp3")
        this.element.addEventListener('click', (e) => {
            this.game.removeFood(this)
            this.foodSound.play()
            /* console.log(e.currentTarget) */
            
        })
        
        this.imgsArray = [];
        const pastel = "../images/pastel-button2.png";
        const wine = "../images/wine2.png";
        const bacalhauABras = "../images/bacalhau-a-bras.png";
        const olive = "../images/olive-oil.png";
        const sardines= "../images/sardinhas.png";
        const superbock = "../images/superbock-bottles.svg";
        const francesinha = "../images/francesinha.png";
        


        if (game.score < 100){
           this.imgsArray.push(pastel)
        }
        
        if (game.score >= 100 && game.score < 200) {
            this.imgsArray.push(pastel, wine)
        } 
        if (game.score >= 200 && game.score < 300) {
            this.imgsArray.push(pastel, wine, sardines)
        }
        if (game.score >= 300 && game.score < 400) {
            this.imgsArray.push(pastel, wine, sardines, francesinha)
        }
        if (game.score >= 400 && game.score < 500) {
            this.imgsArray.push(pastel, wine, sardines, francesinha, olive)
        }
        if (game.score >= 500 && game.score < 600) {
            this.imgsArray.push(pastel, wine, sardines, olive, francesinha, superbock)
        }
        if (game.score >= 600) {
            this.imgsArray.push(pastel, wine, sardines, olive, francesinha, superbock, bacalhauABras)
        }
        

        const image = document.createElement("img");
        image.draggable = false;
        image.src = this.imgsArray[Math.floor(this.imgsArray.length * Math.random())];
        image.style.width = `${this.width}px`
        this.element.appendChild(image);

        // everything above is run when we call new food in the game file. Including functions
        
    }

    move() {

        if (this.game.score < 150){
            this.top -= 1;
            this.updatePosition()
        } 
        if (this.game.score >= 150 && this.game.score < 800){
            this.top -= 1.2;
            this.updatePosition()
        }
        if (this.game.score >= 800 && this.game.score < 1500){
            this.top -= 1.8;
            this.updatePosition()
        }
        if (this.game.score >= 1500){
            this.top -= 2;
            this.updatePosition()
        }
    }


}