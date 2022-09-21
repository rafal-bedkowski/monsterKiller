const ATTACK_VALUE = 10;
const MONSTER_ATTACKA_VALUE = 14;

let chosenMaxLife = 100;
let currentPlayerHealth = chosenMaxLife;
let currentMonsterHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACKA_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0) {
    alert('You won!!');
  }
}

attackBtn.addEventListener('click', attackHandler);
