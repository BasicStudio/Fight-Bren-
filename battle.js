var player = {
  health: 100,
  power: 50,
  heal: 5,
}
var enemy = {
  health: 100,
  power: 50,
}

var username = prompt("Name your Bren:");
document.getElementById("name").innerText = username;

var playerHealth = Math.floor(Math.random() * player.health);
var enemyHealth = Math.floor(Math.random() * enemy.health);

function newHealth(){
  enemyHealth = Math.floor(Math.random() * enemy.health);
  playerHealth = Math.floor(Math.random() * player.health);
}

const displayHealth = ()=> {
  document.getElementById('health').innerText = playerHealth;
  document.getElementById('enemy-health').innerText = enemyHealth;
}

var message = document.getElementById("message")
message.innerText = username + "'s Turn"

function buttonStatus(state){
  document.getElementById("bA").disabled = state;
  document.getElementById("bH").disabled = state;
}

function enemyAttack(){
  setTimeout(()=> {
    const enemyDamage = Math.floor(Math.random() * enemy.power);
    playerHealth -= enemyDamage;
    if(playerHealth < 0){
      newHealth();
      displayHealth();
    }
    console.log(enemyDamage + " damage delt")
    displayHealth();
    message.innerText = username + "'s Turn"
    buttonStatus(false)
  }, 1000)
}

const heal = ()=> {
  message.innerText = "Opponent's Turn"
  playerHealth += player.heal;
  document.getElementById('health').innerText = playerHealth + player.heal;
  buttonStatus(true)
  enemyAttack();
}

const attack = ()=> {
  message.innerText = "Opponent's Turn"
  var damage = Math.floor(Math.random() * player.power);
  enemyHealth -= damage;
  if(enemyHealth < 0){
    newHealth();
    displayHealth();
  }
  buttonStatus(true)
  enemyAttack();
  displayHealth();
  console.log(damage + " damage delt")
}

displayHealth();