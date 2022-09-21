const ATTACK_VALUE = 10;
let chosenMaxLife = 100;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  dealMonsterDamage(ATTACK_VALUE);
}

attackBtn.addEventListener('click', attackHandler);
