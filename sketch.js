var backgroundImg,startImg,start_button,soldier , soldierIdleGun,soldierRunGun,soldierDieGun,soldierShootGun,zombieIdle,zombie;
var zombieWalking,invisibleground;
var gameState = 0;

function preload(){
backgroundImg = loadImage("sprites/background.jpg");
startImg = loadImage("sprites/start.png");
soldierIdleGun = loadAnimation("sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_000.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_001.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_002.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_003.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_004.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_005.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_006.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_007.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_008.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_009.png");
zombieIdle = loadAnimation("sprites/male/Idle (1).png","sprites/male/Idle (2).png","sprites/male/Idle (3).png","sprites/male/Idle (4).png","sprites/male/Idle (5).png","sprites/male/Idle (6).png","sprites/male/Idle (7).png","sprites/male/Idle (8).png","sprites/male/Idle (9).png","sprites/male/Idle (10).png","sprites/male/Idle (11).png","sprites/male/Idle (12).png","sprites/male/Idle (13).png","sprites/male/Idle (14).png","sprites/male/Idle (15).png")
zombieWalking = loadAnimation("sprites/male/Walk (1).png","sprites/male/Walk (2).png","sprites/male/Walk (3).png","sprites/male/Walk (4).png","sprites/male/Walk (5).png","sprites/male/Walk (6).png","sprites/male/Walk (7).png","sprites/male/Walk (8).png","sprites/male/Walk (9).png","sprites/male/Walk (10).png")
soldierDieGun = loadAnimation("sprites/Soldier-Guy-PNG/06-Die/E_E__Die_000.png","sprites/Soldier-Guy-PNG/06-Die/E_E__Die_001.png","sprites/Soldier-Guy-PNG/06-Die/E_E__Die_002.png","sprites/Soldier-Guy-PNG/06-Die/E_E__Die_003.png","sprites/Soldier-Guy-PNG/06-Die/E_E__Die_004.png","sprites/Soldier-Guy-PNG/06-Die/E_E__Die_005.png","sprites/Soldier-Guy-PNG/06-Die/E_E__Die_006.png","sprites/Soldier-Guy-PNG/06-Die/E_E__Die_007.png","sprites/Soldier-Guy-PNG/06-Die/E_E__Die_008.png")
soldierRunGun = loadAnimation("sprites/Soldier-Guy-PNG/_Mode-Gun/02-Run/E_E_Gun__Run_000_000.png","sprites/Soldier-Guy-PNG/_Mode-Gun/02-Run/E_E_Gun__Run_000_001.png","sprites/Soldier-Guy-PNG/_Mode-Gun/02-Run/E_E_Gun__Run_000_002.png","sprites/Soldier-Guy-PNG/_Mode-Gun/02-Run/E_E_Gun__Run_000_003.png","sprites/Soldier-Guy-PNG/_Mode-Gun/02-Run/E_E_Gun__Run_000_004.png","sprites/Soldier-Guy-PNG/_Mode-Gun/02-Run/E_E_Gun__Run_000_005.png","sprites/Soldier-Guy-PNG/_Mode-Gun/02-Run/E_E_Gun__Run_000_006.png","sprites/Soldier-Guy-PNG/_Mode-Gun/02-Run/E_E_Gun__Run_000_007.png","sprites/Soldier-Guy-PNG/_Mode-Gun/02-Run/E_E_Gun__Run_000_008.png","sprites/Soldier-Guy-PNG/_Mode-Gun/02-Run/E_E_Gun__Run_000_009.png")
}

function setup(){
createCanvas(1200,800);
soldier = createSprite(100,500,50,50);
soldier.addAnimation("soldier1",soldierIdleGun);
soldier.scale = 0.5;
zombie = createSprite(1100,500,50,50);
zombie.addAnimation("animato",zombieIdle);
zombie.addAnimation("anim",zombieWalking);
zombie.scale = 0.5;
zombie.mirrorX(zombie.mirrorX()*-1);
start_button = createSprite(600,400,100,100);
start_button.addImage("start",startImg);
start_button.visible = true;
invisibleground = createSprite(600,620,1200,10);
invisibleground.visible = false;
soldier.addAnimation("a",soldierDieGun);
soldier.addAnimation("d",soldierRunGun);


}

function draw(){
background(backgroundImg);
if (gameState===0){
background(0);
fill("white");
textSize(30);
text("The town has been envaded by zombies",400,150);
text("Help the survivors defeat the zombies",400,200);
text("Press the start button to start. All the best Soldier!",350,250);
if(mousePressedOver(start_button)){
gameState = 1;
clear();
background(backgroundImg);
start_button.visible = false;
}
}
if(gameState === 1){
zombie.changeAnimation("anim",zombieWalking);
zombie.velocityX = -0.5;
soldier.collide(invisibleground);
if(keyDown("space")){
soldier.velocityY = -8
}
soldier.velocityY = soldier.velocityY + 0.5;
if(zombie.isTouching(soldier)){
soldier.changeAnimation("a",soldierDieGun);
}
if(keyDown("RIGHT_ARROW")){
soldier.x = soldier.x + 1.5; 
soldier.changeAnimation("d",soldierRunGun);
}
if(keyWentUp("RIGHT_ARROW")){
soldier.changeAnimation("soldier1",soldierIdleGun);
}
if(soldier.x>zombie.x){
     zombie.velocityX=0.5;   
}

if(keyWentUp("LEFT_ARROW")){
    soldier.changeAnimation("soldier1",soldierIdleGun);

}
if(keyDown("LEFT_ARROW")){
    soldier.changeAnimation("d",soldierRunGun)
    soldier.x = soldier.x - 1.5;
}

}
drawSprites();
}
