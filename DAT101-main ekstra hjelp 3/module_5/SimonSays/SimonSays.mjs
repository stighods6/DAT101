"use strict";
//--------------- Objects and Variables ----------------------------------//
import lib2d from "../../common/libs/lib2d_v2.mjs";
import libSound from "../../common/libs/libSound.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { TColorButton } from "./colorButton.mjs";

// prettier-ignore
export const SpriteInfoList = {
  Background:     { x: 0, y:    0, width: 720, height: 720, count:  1 },
  ButtonYellow:   { x: 0, y:  720, width: 314, height: 314, count:  2, dst: { x:  29, y: 377, r1: 100, r2: 333 } },
  ButtonBlue:     { x: 0, y: 1034, width: 314, height: 314, count:  2, dst: { x: 377, y: 377, r1: 100, r2: 333 } },
  ButtonRed:      { x: 0, y: 1348, width: 314, height: 314, count:  2, dst: { x: 377, y:  29, r1: 100, r2: 333 } },
  ButtonGreen:    { x: 0, y: 1662, width: 314, height: 314, count:  2, dst: { x:  29, y:  29, r1: 100, r2: 333 } },
  ButtonStartEnd: { x: 0, y: 1976, width: 360, height: 360, count:  2, dst: { x: 180, y: 180, r1:   1, r2: 180 } },
  number:         { x: 0, y: 2344, width:  23, height:  34, count: 10, dst: { x: 365, y: 385}},
};

const cvs = document.getElementById("cvs");
const spcvs = new libSprite.TSpriteCanvas(cvs);

export const EGameStatusType = {Idle: 0, Computer: 1, Player: 2, GameOver: 3};

export const gameProps = {
  Background: new libSprite.TSprite(spcvs, SpriteInfoList.Background, new lib2d.TPoint(0, 0)),
  GameCenter: new lib2d.TPosition(SpriteInfoList.Background.width / 2, SpriteInfoList.Background.height / 2),
  Status: EGameStatusType.Computer,
  //prettier-ignore
  ColorButtons: [
    new TColorButton(spcvs, SpriteInfoList.ButtonYellow),
    new TColorButton(spcvs, SpriteInfoList.ButtonBlue),
    new TColorButton(spcvs, SpriteInfoList.ButtonRed),
    new TColorButton(spcvs, SpriteInfoList.ButtonGreen)],
  sequence: [],
  seqIndex: 0, //Hvilken knapp i sekvensen vi er på
  activeButton: null,//Ingen knapp er aktiv i starten
  ButtonStartEnd: new libSprite.TSpriteButton(
    spcvs,
  SpriteInfoList.ButtonStartEnd,
SpriteInfoList.ButtonStartEnd.dst,
 lib2d.TCircle
),
gameSpeed: 800, 
spnRound: new  libSprite.TSpriteNumber(
  spcvs, SpriteInfoList.number,  SpriteInfoList.number.dst
),
};

//--------------- Functions ----------------------------------------------//
function loadGame() {
  cvs.width = gameProps.Background.width;
  cvs.height = gameProps.Background.height;
  gameProps.ButtonStartEnd.onClick = startGame;
  setDisableButtons(true);
  drawGame();

}

function startGame() {
  gameProps.ButtonStartEnd.visible = false;
  libSound
  setDisableButtons(false);
  libSound.activateAudioContext();
 gameProps.ColorButtons[0].Sound = new libSound.TSoundWave(4, "C", "sine");
 gameProps.ColorButtons[1].Sound = new libSound.TSoundWave(4, "D", "sine");
 gameProps.ColorButtons[2].Sound = new libSound.TSoundWave(4, "E", "sine");
 gameProps.ColorButtons[3].Sound = new libSound.TSoundWave(4, "F", "sine");
  gameProps.sequence.push(gameProps.ColorButtons[0]); //Simulerer at vi har en sekvens
  gameProps.sequence = [];
  gameProps.gameSpeed = 800;
  gameProps.spnRound.value = 0; //vi starte altid på rudne 0. 
  spawnSequence();
}
function drawGame() {
  spcvs.clearCanvas();
  gameProps.Background.draw();
  //gameProps.ColorButton.draw();
  //Her må dere tegne alle ColorButtons
  for (let i = 0; i < gameProps.ColorButtons.length; i++){
    gameProps.ColorButtons[i].draw();
  }
 gameProps.spnRound.draw();
  gameProps.ButtonStartEnd.draw();
  requestAnimationFrame(drawGame);
}

function setDisableButtons(adisable){
  for(let i = 0; i < gameProps.ColorButtons.length; i++){
    gameProps.ColorButtons[i].disable = adisable;
  }
}
function setMouseDown(){
  gameProps.activeButton.onMouseDown();
  setTimeout(setMouseUp, gameProps.gameSpeed);
}

function setMouseUp(){
  let done = false;
  if(gameProps.seqIndex < gameProps.sequence.length - 1){
    //Her er det flere knapper i igjen i sekvensen
    gameProps.activeButton.onMouseUp();
    gameProps.seqIndex++;
  }else{
    //Her er det siste knappen i sekvensen
    gameProps.activeButton.onMouseUp();
    gameProps.seqIndex = 0;
    done = true;
  }
  gameProps.activeButton = gameProps.sequence[gameProps.seqIndex];
  if(!done){
    setTimeout(setMouseDown, gameProps.gameSpeed);
  }else{
    gameProps.Status = EGameStatusType.Player; //Nå venter vi på at spilleren skal trykke på knappene
    setDisableButtons(false);
  }
}

export function spawnSequence(){
 const index = Math.floor(Math.random() * gameProps.ColorButtons.length);
 const button = gameProps.ColorButtons[index];
 gameProps.sequence.push(button);
 gameProps.seqIndex = 0;
 gameProps.activeButton = gameProps.sequence[0];
 gameProps.Status = EGameStatusType.Computer;
 setDisableButtons(true);
 setTimeout(setMouseDown, gameProps.gameSpeed);

 if(gameProps.gameSpeed > 200) {
  gameProps.gameSpeed -= 50
 }
 console.log(countSpaw++, gameProps.gameSpeed);
}
//--------------- Event Handlers -----------------------------------------//

//--------------- Main Code ----------------------------------------------//
spcvs.loadSpriteSheet("./media/spriteSheet.png", loadGame);
