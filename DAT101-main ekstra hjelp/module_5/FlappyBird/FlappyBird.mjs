"use strict";
import lib2d from "../../common/libs/lib2d.mjs";
import libSound from "../../common/libs/libSound.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import THero from "./hero.mjs";
import Tobstacle from "./obtacle.mjs";
import { TBait } from "./bait.mjs";
import { TMenu } from "./menu.mjs";

//--------------- Objects and Variables ----------------------------------//
const chkMuteSound = document.getElementById("chkMuteSound");
const rbDayNight = document.getElementsByName("rbDayNight");
const cvs = document.getElementById("cvs");
const spcvs = new libSprite.TSpriteCanvas(cvs);

// prettier-ignore
export const SpriteInfoList = {
  hero1:        { x:    0, y: 545, width:   34, height:  24, count:  4 },
  hero2:        { x:    0, y: 569, width:   34, height:  24, count:  4 },
  hero3:        { x:    0, y: 593, width:   34, height:  24, count:  4 },
  obstacle:     { x:    0, y:   0, width:   52, height: 320, count:  4 },
  background:   { x:  246, y:   0, width:  576, height: 512, count:  2 },
  flappyBird:   { x:    0, y: 330, width:  178, height:  50, count:  1 },
  ground:       { x:  246, y: 512, width: 1152, height: 114, count:  1 },
  numberSmall:  { x:  681, y: 635, width:   14, height:  20, count: 10 },
  numberBig:    { x:  422, y: 635, width:   24, height:  36, count: 10 },
  buttonPLay:   { x: 1183, y: 635, width:  104, height:  58, count:  1 },
  gameOver:     { x:    0, y: 384, width:  226, height: 114, count:  1 },
  infoText:     { x:    0, y: 630, width:  200, height:  55, count:  2 },
  food:         { x:    0, y: 696, width:   70, height:  65, count: 34 },
  medal:        { x:  985, y: 635, width:   44, height:  44, count:  4 },
};

export const EGamestatus = {idel: 0, getReady: 1, playing: 2, gameOver: 3};

export const GameProps = {
  soundMuted: false,
  dayTime: true,
  speed: 1,
  status: EGamestatus.playing,
  background: null,
  ground: null,
  hero: null,
  obstacles: [],
  baits: [],
  menu: null,
};

//--------------- Functions ----------------------------------------------//

function playSound(aSound) {
  if (!GameProps.soundMuted) {
    aSound.play();
  } else {
    aSound.pause();
  }
}

function loadGame(){
  console.log("Game ready to load");
  cvs.width = SpriteInfoList.background.width;
  cvs.height = SpriteInfoList.background.height;

  let pos = new lib2d.TPosition(0, 0);
  GameProps.background = new libSprite.TSprite(spcvs, SpriteInfoList.background, pos);
  pos.y = cvs.height - SpriteInfoList.ground.height;
  GameProps.ground = new libSprite.TSprite(spcvs, SpriteInfoList.ground, pos);
  pos.x = 100;
  pos.y = 100;
  GameProps.hero = new THero(spcvs, SpriteInfoList.hero1, pos);

  spawnObstacle();
  spawBait();

  requestAnimationFrame(drawGame);
  setInterval(animateGame, 10);

  GameProps.menu = new TMenu(spcvs);
}

function drawGame(){
  spcvs.clearCanvas();
  GameProps.background.draw();
  drawBait();
  drawObstacles();
  GameProps.ground.draw();
  GameProps.hero.draw();
  GameProps.menu.draw();
  requestAnimationFrame(drawGame);
}

function drawObstacles(){
  for(let i = 0; i < GameProps.obstacles.length; i++){
    const obstacle = GameProps.obstacles[i];
    obstacle.draw();
  }
}

function drawBait(){
  for (let i = 0; i < GameProps.baits.length; i++);{
  const bait = GameProps.baits[i];
  bait.draw();
}
}

function animateGame(){
  switch(GameProps.status) {
    case EGamestatus.playing:
  if(GameProps.hero.isDead){
    GameProps.hero.animateSpeed =0;
    GameProps.hero.update();
    return;
  }
  GameProps.ground.translate(-GameProps.speed, 0);
  if(GameProps.ground.posX <= -SpriteInfoList.background.width){
    GameProps.ground.posX = 0;
  }
  GameProps.hero.update();
  let delObstacleIndex = -1;
  for(let i = 0; i < GameProps.obstacles.length; i++){
    const obstacle = GameProps.obstacles[i];
    obstacle.update();
    if(obstacle.posX < -100){
      delObstacleIndex = i;
    }
  }
  if(delObstacleIndex >= 0){
    GameProps.obstacles.splice(delObstacleIndex, 1);
  }
  case EGamestatus.gameOver:
    let delbaitIndex = -1;
    const posHero = GameProps.hero.getCenter();
    for (let i = 0; i < GameProps.baits.length; i++) {
      const bait = GameProps.baits[i];
      bait.update();
      const posBait = bait.getCenter();
      const dist = posHero.distanceToPoint(posBait);
      if (dist < 15){
        delbaitIndex = i;
      }
    }
    if (delbaitIndex >= 0) {
      GameProps.baits.splice(delbaitIndex, 1);
    }
  break;
  case EGamestatus.idel:
    GameProps.hero.updateIdle();
    break;
}
}

function spawnObstacle(){
  const obstacle = new Tobstacle(spcvs, SpriteInfoList.obstacle);
  GameProps.obstacles.push(obstacle);
  if (GameProps.status === EGamestatus.playing) {
    const seconds = Math.ceil(Math.random() * 5) + 2;
    setTimeout(spawnObstacle, seconds * 1000);
  }
}

function spawBait() {
  const pos = new lib2d.TPosition(SpriteInfoList.background.width, 100);
  const bait = new TBait (spcvs, SpriteInfoList.food, pos);
  GameProps.baits.push(bait);
  if (GameProps.status === EGamestatus.playing) {
    const sec = Math.ceil(Math.random() * 5) / 10 + 0.5;
    setTimeout(spawBait, sec * 1000);
  }
}

export function startGame() {
  GameProps.status = EGamestatus.playing;
  spawnObstacle();
  spawBait();
}
//--------------- Event Handlers -----------------------------------------//

function setSoundOnOff() {
  if (chkMuteSound.checked) {
    GameProps.soundMuted = true;
    console.log("Sound muted");
  } else {
    GameProps.soundMuted = false;
    console.log("Sound on");
  }
} // end of setSoundOnOff

function setDayNight() {
  if (rbDayNight[0].checked) {
    GameProps.dayTime = true;
    console.log("Day time");
  } else {
    GameProps.dayTime = false;
    console.log("Night time");
  }
} // end of setDayNight

function onKeyDown(aEvent){
  switch(aEvent.code){
    case "Space":
      if(!GameProps.hero.isDead){
      GameProps.hero.flap();
      }
      break;
  }
}

//--------------- Main Code ----------------------------------------------//
chkMuteSound.addEventListener("change", setSoundOnOff);
rbDayNight[0].addEventListener("change", setDayNight);
rbDayNight[1].addEventListener("change", setDayNight);

// Load the sprite sheet
spcvs.loadSpriteSheet("./Media/FlappyBirdSprites.png", loadGame);
document.addEventListener("keydown", onKeyDown);  