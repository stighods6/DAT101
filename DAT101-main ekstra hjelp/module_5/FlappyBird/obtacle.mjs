"use stict";
import libSprite from "../../common/libs/libSprite.mjs";
import lib2d from "../../common/libs/lib2d.mjs";
import { GameProps } from "./FlappyBird.mjs";

class Tobstacle {
    #upper;
  #lower;
  #spi;
  constructor(aSpriteCanvas, aSpriteInfo) {
    this.#spi = aSpriteInfo;
    const minTop = -320 + 30;
    let top = Math.floor(Math.random() * minTop);
    let pos = new lib2d.TPosition(650, top);
    this.#upper = new libSprite.TSprite(aSpriteCanvas, aSpriteInfo, pos);
    this.#upper.index = 3;
    const groundY = GameProps.ground.posY;
    top += this.#spi.height + 150;
    const gap = top - groundY - 30;
    
    top = Math.floor(Math.random() * gap) + groundY -25  ;
    pos.y = top;
    this.#lower = new libSprite.TSprite(aSpriteCanvas, aSpriteInfo, pos);
    this.#lower.index = 2 ;
    }

    draw() {
        this.#upper.draw();
        this.#lower.draw();
    }
    update (){
        this.#lower.translate(-1,0)
        this.#upper.translate(-1,0)
        const hasCollided =
        GameProps.hero.hasCollided(this.#upper) ||
        GameProps.hero.hasCollided(this.#lower);

        if(hasCollided){
            GameProps.hero.isDead = true;
        }
    }
    get posX(){
        return this.#upper.posX;
    }
}

export default Tobstacle;